import { Injectable, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject, of, firstValueFrom } from 'rxjs';
import { debounceTime, switchMap, catchError, tap } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

export type SyncState = 'idle' | 'syncing' | 'error' | 'disabled';

/**
 * Talks directly to Firebase Realtime Database over its plain-JSON REST API.
 * No SDK, no server, no auth — a GET loads a value, a PUT saves it.
 *
 * Data lives under `<dataSpace>/<key>` so the local (`dev`) and deployed
 * (`prod`) builds never overwrite each other.
 *
 * localStorage remains an offline cache in the feature services; this service
 * is the source of truth that makes data follow you across devices.
 */
@Injectable({ providedIn: 'root' })
export class RemoteSyncService {
  private http = inject(HttpClient);
  private base = (environment.firebaseDbUrl ?? '').replace(/\/+$/, '');
  private space = environment.dataSpace;

  /** False until a real Firebase URL is configured — app then runs local-only. */
  readonly enabled = !!this.base && !this.base.includes('YOUR-PROJECT');
  readonly state = signal<SyncState>(this.enabled ? 'idle' : 'disabled');

  /** Latest un-pushed payload per key, used for a best-effort flush on tab close. */
  private pending = new Map<string, unknown>();
  private queues = new Map<string, Subject<unknown>>();

  constructor() {
    if (this.enabled && typeof window !== 'undefined') {
      window.addEventListener('pagehide', () => this.flush());
      document.addEventListener('visibilitychange', () => {
        if (document.visibilityState === 'hidden') this.flush();
      });
    }
  }

  private url(key: string): string {
    return `${this.base}/${this.space}/${key}.json`;
  }

  /** Fetch the freshest copy of a value from the cloud (null if never saved / offline). */
  async pull<T>(key: string): Promise<T | null> {
    if (!this.enabled) return null;
    this.state.set('syncing');
    try {
      const data = await firstValueFrom(this.http.get<T | null>(this.url(key)));
      this.state.set('idle');
      return data ?? null;
    } catch {
      this.state.set('error');
      return null;
    }
  }

  /** Save a value to the cloud. Debounced per key so rapid edits collapse into one write. */
  push<T>(key: string, data: T): void {
    if (!this.enabled) return;
    this.pending.set(key, data);

    let q = this.queues.get(key);
    if (!q) {
      q = new Subject<unknown>();
      q.pipe(
        debounceTime(500),
        tap(() => this.state.set('syncing')),
        switchMap(payload =>
          this.http.put(this.url(key), payload).pipe(
            tap(() => {
              this.state.set('idle');
              this.pending.delete(key);
            }),
            catchError(() => {
              this.state.set('error');
              return of(null);
            }),
          ),
        ),
      ).subscribe();
      this.queues.set(key, q);
    }
    q.next(data);
  }

  /** Best-effort synchronous write of anything not yet pushed when the tab is closing/hidden. */
  private flush(): void {
    for (const [key, data] of this.pending) {
      try {
        fetch(this.url(key), {
          method: 'PUT',
          body: JSON.stringify(data),
          keepalive: true,
          headers: { 'Content-Type': 'application/json' },
        });
      } catch {
        /* best effort — data is still safe in localStorage */
      }
    }
    this.pending.clear();
  }
}
