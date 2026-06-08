import{C as V,b,d as D,w as a,x as O,y as l}from"./chunk-ZK7SE45J.js";import{Dc as z,Ec as u,Ob as v,S as m,T as d,Va as g,Wa as R,X as o,bb as _,cb as h,db as y,e as x,f as c,fa as C,j as k,ja as f,ra as S,v as w,w as p}from"./chunk-U6X53BIP.js";var B=20,F=(()=>{class n{_ngZone=o(f);_platform=o(b);_renderer=o(g).createRenderer(null,null);_cleanupGlobalListener;constructor(){}_scrolled=new c;_scrolledCount=0;scrollContainers=new Map;register(e){this.scrollContainers.has(e)||this.scrollContainers.set(e,e.elementScrolled().subscribe(()=>this._scrolled.next(e)))}deregister(e){let t=this.scrollContainers.get(e);t&&(t.unsubscribe(),this.scrollContainers.delete(e))}scrolled(e=B){return this._platform.isBrowser?new x(t=>{this._cleanupGlobalListener||(this._cleanupGlobalListener=this._ngZone.runOutsideAngular(()=>this._renderer.listen("document","scroll",()=>this._scrolled.next())));let r=e>0?this._scrolled.pipe(p(e)).subscribe(t):this._scrolled.subscribe(t);return this._scrolledCount++,()=>{r.unsubscribe(),this._scrolledCount--,this._scrolledCount||(this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0)}}):k()}ngOnDestroy(){this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0,this.scrollContainers.forEach((e,t)=>this.deregister(t)),this._scrolled.complete()}ancestorScrolled(e,t){let r=this.getAncestorScrollContainers(e);return this.scrolled(t).pipe(w(i=>!i||r.indexOf(i)>-1))}getAncestorScrollContainers(e){let t=[];return this.scrollContainers.forEach((r,i)=>{this._scrollableContainsElement(i,e)&&t.push(i)}),t}_scrollableContainsElement(e,t){let r=D(t),i=e.getElementRef().nativeElement;do if(r==i)return!0;while(r=r.parentElement);return!1}static \u0275fac=function(t){return new(t||n)};static \u0275prov=m({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),Pe=(()=>{class n{elementRef=o(S);scrollDispatcher=o(F);ngZone=o(f);dir=o(z,{optional:!0});_scrollElement=this.elementRef.nativeElement;_destroyed=new c;_renderer=o(R);_cleanupScroll;_elementScrolled=new c;constructor(){}ngOnInit(){this._cleanupScroll=this.ngZone.runOutsideAngular(()=>this._renderer.listen(this._scrollElement,"scroll",e=>this._elementScrolled.next(e))),this.scrollDispatcher.register(this)}ngOnDestroy(){this._cleanupScroll?.(),this._elementScrolled.complete(),this.scrollDispatcher.deregister(this),this._destroyed.next(),this._destroyed.complete()}elementScrolled(){return this._elementScrolled}getElementRef(){return this.elementRef}scrollTo(e){let t=this.elementRef.nativeElement,r=this.dir&&this.dir.value=="rtl";e.left==null&&(e.left=r?e.end:e.start),e.right==null&&(e.right=r?e.start:e.end),e.bottom!=null&&(e.top=t.scrollHeight-t.clientHeight-e.bottom),r&&l()!=a.NORMAL?(e.left!=null&&(e.right=t.scrollWidth-t.clientWidth-e.left),l()==a.INVERTED?e.left=e.right:l()==a.NEGATED&&(e.left=e.right?-e.right:e.right)):e.right!=null&&(e.left=t.scrollWidth-t.clientWidth-e.right),this._applyScrollToOptions(e)}_applyScrollToOptions(e){let t=this.elementRef.nativeElement;O()?t.scrollTo(e):(e.top!=null&&(t.scrollTop=e.top),e.left!=null&&(t.scrollLeft=e.left))}measureScrollOffset(e){let t="left",r="right",i=this.elementRef.nativeElement;if(e=="top")return i.scrollTop;if(e=="bottom")return i.scrollHeight-i.clientHeight-i.scrollTop;let s=this.dir&&this.dir.value=="rtl";return e=="start"?e=s?r:t:e=="end"&&(e=s?t:r),s&&l()==a.INVERTED?e==t?i.scrollWidth-i.clientWidth-i.scrollLeft:i.scrollLeft:s&&l()==a.NEGATED?e==t?i.scrollLeft+i.scrollWidth-i.clientWidth:-i.scrollLeft:e==t?i.scrollLeft:i.scrollWidth-i.clientWidth-i.scrollLeft}static \u0275fac=function(t){return new(t||n)};static \u0275dir=y({type:n,selectors:[["","cdk-scrollable",""],["","cdkScrollable",""]]})}return n})(),L=20,Ne=(()=>{class n{_platform=o(b);_listeners;_viewportSize=null;_change=new c;_document=o(C);constructor(){let e=o(f),t=o(g).createRenderer(null,null);e.runOutsideAngular(()=>{if(this._platform.isBrowser){let r=i=>this._change.next(i);this._listeners=[t.listen("window","resize",r),t.listen("window","orientationchange",r)]}this.change().subscribe(()=>this._viewportSize=null)})}ngOnDestroy(){this._listeners?.forEach(e=>e()),this._change.complete()}getViewportSize(){this._viewportSize||this._updateViewportSize();let e={width:this._viewportSize.width,height:this._viewportSize.height};return this._platform.isBrowser||(this._viewportSize=null),e}getViewportRect(){let e=this.getViewportScrollPosition(),{width:t,height:r}=this.getViewportSize();return{top:e.top,left:e.left,bottom:e.top+r,right:e.left+t,height:r,width:t}}getViewportScrollPosition(){if(!this._platform.isBrowser)return{top:0,left:0};let e=this._document,t=this._getWindow(),r=e.documentElement,i=r.getBoundingClientRect(),s=-i.top||e.body?.scrollTop||t.scrollY||r.scrollTop||0,T=-i.left||e.body?.scrollLeft||t.scrollX||r.scrollLeft||0;return{top:s,left:T}}change(e=L){return e>0?this._change.pipe(p(e)):this._change}_getWindow(){return this._document.defaultView||window}_updateViewportSize(){let e=this._getWindow();this._viewportSize=this._platform.isBrowser?{width:e.innerWidth,height:e.innerHeight}:{width:0,height:0}}static \u0275fac=function(t){return new(t||n)};static \u0275prov=m({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var E=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=h({type:n});static \u0275inj=d({})}return n})(),Ae=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=h({type:n});static \u0275inj=d({imports:[u,E,u,E]})}return n})();var Ue=(()=>{class n{_animationsDisabled=V();state="unchecked";disabled=!1;appearance="full";constructor(){}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=_({type:n,selectors:[["mat-pseudo-checkbox"]],hostAttrs:[1,"mat-pseudo-checkbox"],hostVars:12,hostBindings:function(t,r){t&2&&v("mat-pseudo-checkbox-indeterminate",r.state==="indeterminate")("mat-pseudo-checkbox-checked",r.state==="checked")("mat-pseudo-checkbox-disabled",r.disabled)("mat-pseudo-checkbox-minimal",r.appearance==="minimal")("mat-pseudo-checkbox-full",r.appearance==="full")("_mat-animation-noopable",r._animationsDisabled)},inputs:{state:"state",disabled:"disabled",appearance:"appearance"},decls:0,vars:0,template:function(t,r){},styles:[`.mat-pseudo-checkbox {
  border-radius: 2px;
  cursor: pointer;
  display: inline-block;
  vertical-align: middle;
  box-sizing: border-box;
  position: relative;
  flex-shrink: 0;
  transition: border-color 90ms cubic-bezier(0, 0, 0.2, 0.1), background-color 90ms cubic-bezier(0, 0, 0.2, 0.1);
}
.mat-pseudo-checkbox::after {
  position: absolute;
  opacity: 0;
  content: "";
  border-bottom: 2px solid currentColor;
  transition: opacity 90ms cubic-bezier(0, 0, 0.2, 0.1);
}
.mat-pseudo-checkbox._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-pseudo-checkbox._mat-animation-noopable::after {
  transition: none;
}

.mat-pseudo-checkbox-disabled {
  cursor: default;
}

.mat-pseudo-checkbox-indeterminate::after {
  left: 1px;
  opacity: 1;
  border-radius: 2px;
}

.mat-pseudo-checkbox-checked::after {
  left: 1px;
  border-left: 2px solid currentColor;
  transform: rotate(-45deg);
  opacity: 1;
  box-sizing: content-box;
}

.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked::after, .mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate::after {
  color: var(--mat-pseudo-checkbox-minimal-selected-checkmark-color, var(--mat-sys-primary));
}
.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled::after, .mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled::after {
  color: var(--mat-pseudo-checkbox-minimal-disabled-selected-checkmark-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}

.mat-pseudo-checkbox-full {
  border-color: var(--mat-pseudo-checkbox-full-unselected-icon-color, var(--mat-sys-on-surface-variant));
  border-width: 2px;
  border-style: solid;
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-disabled {
  border-color: var(--mat-pseudo-checkbox-full-disabled-unselected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate {
  background-color: var(--mat-pseudo-checkbox-full-selected-icon-color, var(--mat-sys-primary));
  border-color: transparent;
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked::after, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate::after {
  color: var(--mat-pseudo-checkbox-full-selected-checkmark-color, var(--mat-sys-on-primary));
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled {
  background-color: var(--mat-pseudo-checkbox-full-disabled-selected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled::after, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled::after {
  color: var(--mat-pseudo-checkbox-full-disabled-selected-checkmark-color, var(--mat-sys-surface));
}

.mat-pseudo-checkbox {
  width: 18px;
  height: 18px;
}

.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked::after {
  width: 14px;
  height: 6px;
  transform-origin: center;
  top: -4.2426406871px;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
}
.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate::after {
  top: 8px;
  width: 16px;
}

.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked::after {
  width: 10px;
  height: 4px;
  transform-origin: center;
  top: -2.8284271247px;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate::after {
  top: 6px;
  width: 12px;
}
`],encapsulation:2,changeDetection:0})}return n})();var Ge=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=h({type:n});static \u0275inj=d({imports:[u]})}return n})();export{F as a,Pe as b,Ne as c,E as d,Ae as e,Ue as f,Ge as g};
