import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject, Video, RoadmapData } from '../models';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class DataService {
  private http = inject(HttpClient);

  getSubjects(): Observable<Subject[]> {
    return this.http.get<Subject[]>('assets/data/subjects.json');
  }

  getVideos(): Observable<Video[]> {
    return this.http.get<Video[]>('assets/data/videos.json');
  }

  getQuotes(): Observable<string[]> {
    return this.http.get<string[]>('assets/data/quotes.json');
  }

  getRoadmap(): Observable<RoadmapData> {
    return this.http.get<RoadmapData>('assets/data/roadmap.json');
  }
}
