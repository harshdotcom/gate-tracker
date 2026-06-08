import{a as Oe}from"./chunk-AQR45SOO.js";import{b as Ie,d as He,e as Fe}from"./chunk-6R3ZZC2T.js";import{b as F}from"./chunk-LGXJMZSC.js";import{a as je,b as Ne}from"./chunk-CT7RJURD.js";import"./chunk-QBGEI2M4.js";import{b as ke}from"./chunk-XIZKBSBO.js";import{a as Te}from"./chunk-MYYKRFLJ.js";import"./chunk-2SDKUTBP.js";import{C as Ae,H as De,e as Ce,n as Me,p as Ee,q as E}from"./chunk-ZK7SE45J.js";import{d as we}from"./chunk-W3FAFV2N.js";import{a as Se}from"./chunk-FCBF5PQD.js";import{A as G,Ab as O,Cb as I,Db as Q,Eb as h,Ec as Pe,Fb as B,Gb as ue,Hb as w,Ib as M,K as j,Nb as xe,Oa as r,Ob as u,Qb as b,Rb as fe,Sb as be,T as A,Tb as q,Ua as re,V as f,Wa as se,X as a,Xb as _,Za as de,aa as Y,ac as _e,ba as J,bb as C,c as P,ca as ee,cb as k,cc as ve,db as m,eb as V,f as v,fa as ne,fb as pe,gc as H,h as X,ia as c,ic as x,ja as te,jc as ye,ma as ie,mb as S,nb as le,oa as D,ob as ce,pa as ae,pb as R,qb as z,ra as N,rb as g,sa as oe,sb as l,tb as p,u as $,ub as me,v as y,vb as T,wb as L,xb as ge,yb as he}from"./chunk-U6X53BIP.js";var U=new f("CdkAccordion"),Re=(()=>{class n{_stateChanges=new v;_openCloseAllActions=new v;id=a(E).getId("cdk-accordion-");multi=!1;openAll(){this.multi&&this._openCloseAllActions.next(!0)}closeAll(){this._openCloseAllActions.next(!1)}ngOnChanges(e){this._stateChanges.next(e)}ngOnDestroy(){this._stateChanges.complete(),this._openCloseAllActions.complete()}static \u0275fac=function(t){return new(t||n)};static \u0275dir=m({type:n,selectors:[["cdk-accordion"],["","cdkAccordion",""]],inputs:{multi:[2,"multi","multi",x]},exportAs:["cdkAccordion"],features:[_([{provide:U,useExisting:n}]),D]})}return n})(),ze=(()=>{class n{accordion=a(U,{optional:!0,skipSelf:!0});_changeDetectorRef=a(H);_expansionDispatcher=a(F);_openCloseAllSubscription=P.EMPTY;closed=new c;opened=new c;destroyed=new c;expandedChange=new c;id=a(E).getId("cdk-accordion-child-");get expanded(){return this._expanded}set expanded(e){if(this._expanded!==e){if(this._expanded=e,this.expandedChange.emit(e),e){this.opened.emit();let t=this.accordion?this.accordion.id:this.id;this._expansionDispatcher.notify(this.id,t)}else this.closed.emit();this._changeDetectorRef.markForCheck()}}_expanded=!1;get disabled(){return this._disabled()}set disabled(e){this._disabled.set(e)}_disabled=ie(!1);_removeUniqueSelectionListener=()=>{};constructor(){}ngOnInit(){this._removeUniqueSelectionListener=this._expansionDispatcher.listen((e,t)=>{this.accordion&&!this.accordion.multi&&this.accordion.id===t&&this.id!==e&&(this.expanded=!1)}),this.accordion&&(this._openCloseAllSubscription=this._subscribeToOpenCloseAllActions())}ngOnDestroy(){this.opened.complete(),this.closed.complete(),this.destroyed.emit(),this.destroyed.complete(),this._removeUniqueSelectionListener(),this._openCloseAllSubscription.unsubscribe()}toggle(){this.disabled||(this.expanded=!this.expanded)}close(){this.disabled||(this.expanded=!1)}open(){this.disabled||(this.expanded=!0)}_subscribeToOpenCloseAllActions(){return this.accordion._openCloseAllActions.subscribe(e=>{this.disabled||(this.expanded=e)})}static \u0275fac=function(t){return new(t||n)};static \u0275dir=m({type:n,selectors:[["cdk-accordion-item"],["","cdkAccordionItem",""]],inputs:{expanded:[2,"expanded","expanded",x],disabled:[2,"disabled","disabled",x]},outputs:{closed:"closed",opened:"opened",destroyed:"destroyed",expandedChange:"expandedChange"},exportAs:["cdkAccordionItem"],features:[_([{provide:U,useValue:void 0}])]})}return n})(),Le=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=k({type:n});static \u0275inj=A({})}return n})();var Ye=["body"],Je=["bodyWrapper"],en=[[["mat-expansion-panel-header"]],"*",[["mat-action-row"]]],nn=["mat-expansion-panel-header","*","mat-action-row"];function tn(n,o){}var an=[[["mat-panel-title"]],[["mat-panel-description"]],"*"],on=["mat-panel-title","mat-panel-description","*"];function rn(n,o){n&1&&(T(0,"span",1),ee(),T(1,"svg",2),ge(2,"path",3),L()())}var W=new f("MAT_ACCORDION"),Qe=new f("MAT_EXPANSION_PANEL"),sn=(()=>{class n{_template=a(re);_expansionPanel=a(Qe,{optional:!0});constructor(){}static \u0275fac=function(t){return new(t||n)};static \u0275dir=m({type:n,selectors:[["ng-template","matExpansionPanelContent",""]]})}return n})(),Be=new f("MAT_EXPANSION_PANEL_DEFAULT_OPTIONS"),Z=(()=>{class n extends ze{_viewContainerRef=a(de);_animationsDisabled=Ae();_document=a(ne);_ngZone=a(te);_elementRef=a(N);_renderer=a(se);_cleanupTransitionEnd;get hideToggle(){return this._hideToggle||this.accordion&&this.accordion.hideToggle}set hideToggle(e){this._hideToggle=e}_hideToggle=!1;get togglePosition(){return this._togglePosition||this.accordion&&this.accordion.togglePosition}set togglePosition(e){this._togglePosition=e}_togglePosition;afterExpand=new c;afterCollapse=new c;_inputChanges=new v;accordion=a(W,{optional:!0,skipSelf:!0});_lazyContent;_body;_bodyWrapper;_portal;_headerId=a(E).getId("mat-expansion-panel-header-");constructor(){super();let e=a(Be,{optional:!0});this._expansionDispatcher=a(F),e&&(this.hideToggle=e.hideToggle)}_hasSpacing(){return this.accordion?this.expanded&&this.accordion.displayMode==="default":!1}_getExpandedState(){return this.expanded?"expanded":"collapsed"}toggle(){this.expanded=!this.expanded}close(){this.expanded=!1}open(){this.expanded=!0}ngAfterContentInit(){this._lazyContent&&this._lazyContent._expansionPanel===this&&this.opened.pipe(j(null),y(()=>this.expanded&&!this._portal),G(1)).subscribe(()=>{this._portal=new Ie(this._lazyContent._template,this._viewContainerRef)}),this._setupAnimationEvents()}ngOnChanges(e){this._inputChanges.next(e)}ngOnDestroy(){super.ngOnDestroy(),this._cleanupTransitionEnd?.(),this._inputChanges.complete()}_containsFocus(){if(this._body){let e=this._document.activeElement,t=this._body.nativeElement;return e===t||t.contains(e)}return!1}_transitionEndListener=({target:e,propertyName:t})=>{e===this._bodyWrapper?.nativeElement&&t==="grid-template-rows"&&this._ngZone.run(()=>{this.expanded?this.afterExpand.emit():this.afterCollapse.emit()})};_setupAnimationEvents(){this._ngZone.runOutsideAngular(()=>{this._animationsDisabled?(this.opened.subscribe(()=>this._ngZone.run(()=>this.afterExpand.emit())),this.closed.subscribe(()=>this._ngZone.run(()=>this.afterCollapse.emit()))):setTimeout(()=>{let e=this._elementRef.nativeElement;this._cleanupTransitionEnd=this._renderer.listen(e,"transitionend",this._transitionEndListener),e.classList.add("mat-expansion-panel-animations-enabled")},200)})}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=C({type:n,selectors:[["mat-expansion-panel"]],contentQueries:function(t,i,s){if(t&1&&B(s,sn,5),t&2){let d;w(d=M())&&(i._lazyContent=d.first)}},viewQuery:function(t,i){if(t&1&&ue(Ye,5)(Je,5),t&2){let s;w(s=M())&&(i._body=s.first),w(s=M())&&(i._bodyWrapper=s.first)}},hostAttrs:[1,"mat-expansion-panel"],hostVars:4,hostBindings:function(t,i){t&2&&u("mat-expanded",i.expanded)("mat-expansion-panel-spacing",i._hasSpacing())},inputs:{hideToggle:[2,"hideToggle","hideToggle",x],togglePosition:"togglePosition"},outputs:{afterExpand:"afterExpand",afterCollapse:"afterCollapse"},exportAs:["matExpansionPanel"],features:[_([{provide:W,useValue:void 0},{provide:Qe,useExisting:n}]),V,D],ngContentSelectors:nn,decls:9,vars:4,consts:[["bodyWrapper",""],["body",""],[1,"mat-expansion-panel-content-wrapper"],["role","region",1,"mat-expansion-panel-content",3,"id"],[1,"mat-expansion-panel-body"],[3,"cdkPortalOutlet"]],template:function(t,i){t&1&&(Q(en),h(0),l(1,"div",2,0)(3,"div",3,1)(5,"div",4),h(6,1),pe(7,tn,0,0,"ng-template",5),p(),h(8,2),p()()),t&2&&(r(),S("inert",i.expanded?null:""),r(2),g("id",i.id),S("aria-labelledby",i._headerId),r(4),g("cdkPortalOutlet",i._portal))},dependencies:[He],styles:[`.mat-expansion-panel {
  box-sizing: content-box;
  display: block;
  margin: 0;
  overflow: hidden;
}
.mat-expansion-panel.mat-expansion-panel-animations-enabled {
  transition: margin 225ms cubic-bezier(0.4, 0, 0.2, 1), box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-expansion-panel {
  position: relative;
  background: var(--mat-expansion-container-background-color, var(--mat-sys-surface));
  color: var(--mat-expansion-container-text-color, var(--mat-sys-on-surface));
  border-radius: var(--mat-expansion-container-shape, 12px);
}
.mat-expansion-panel:not([class*=mat-elevation-z]) {
  box-shadow: var(--mat-expansion-container-elevation-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12));
}
.mat-accordion .mat-expansion-panel:not(.mat-expanded), .mat-accordion .mat-expansion-panel:not(.mat-expansion-panel-spacing) {
  border-radius: 0;
}
.mat-accordion .mat-expansion-panel:first-of-type {
  border-top-right-radius: var(--mat-expansion-container-shape, 12px);
  border-top-left-radius: var(--mat-expansion-container-shape, 12px);
}
.mat-accordion .mat-expansion-panel:last-of-type {
  border-bottom-right-radius: var(--mat-expansion-container-shape, 12px);
  border-bottom-left-radius: var(--mat-expansion-container-shape, 12px);
}
@media (forced-colors: active) {
  .mat-expansion-panel {
    outline: solid 1px;
  }
}

.mat-expansion-panel-content-wrapper {
  display: grid;
  grid-template-rows: 0fr;
  grid-template-columns: 100%;
}
.mat-expansion-panel-animations-enabled .mat-expansion-panel-content-wrapper {
  transition: grid-template-rows 225ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-expansion-panel.mat-expanded > .mat-expansion-panel-content-wrapper {
  grid-template-rows: 1fr;
}
@supports not (grid-template-rows: 0fr) {
  .mat-expansion-panel-content-wrapper {
    height: 0;
  }
  .mat-expansion-panel.mat-expanded > .mat-expansion-panel-content-wrapper {
    height: auto;
  }
}
@media print {
  .mat-expansion-panel-content-wrapper {
    height: 0;
  }
  .mat-expansion-panel.mat-expanded > .mat-expansion-panel-content-wrapper {
    height: auto;
  }
}

.mat-expansion-panel-content {
  display: flex;
  flex-direction: column;
  overflow: visible;
  min-height: 0;
  visibility: hidden;
}
.mat-expansion-panel-animations-enabled .mat-expansion-panel-content {
  transition: visibility 190ms linear;
}
.mat-expansion-panel.mat-expanded > .mat-expansion-panel-content-wrapper > .mat-expansion-panel-content {
  visibility: visible;
}
.mat-expansion-panel-content {
  font-family: var(--mat-expansion-container-text-font, var(--mat-sys-body-large-font));
  font-size: var(--mat-expansion-container-text-size, var(--mat-sys-body-large-size));
  font-weight: var(--mat-expansion-container-text-weight, var(--mat-sys-body-large-weight));
  line-height: var(--mat-expansion-container-text-line-height, var(--mat-sys-body-large-line-height));
  letter-spacing: var(--mat-expansion-container-text-tracking, var(--mat-sys-body-large-tracking));
}

.mat-expansion-panel-body {
  padding: 0 24px 16px;
}

.mat-expansion-panel-spacing {
  margin: 16px 0;
}
.mat-accordion > .mat-expansion-panel-spacing:first-child, .mat-accordion > *:first-child:not(.mat-expansion-panel) .mat-expansion-panel-spacing {
  margin-top: 0;
}
.mat-accordion > .mat-expansion-panel-spacing:last-child, .mat-accordion > *:last-child:not(.mat-expansion-panel) .mat-expansion-panel-spacing {
  margin-bottom: 0;
}

.mat-action-row {
  border-top-style: solid;
  border-top-width: 1px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding: 16px 8px 16px 24px;
  border-top-color: var(--mat-expansion-actions-divider-color, var(--mat-sys-outline));
}
.mat-action-row .mat-button-base,
.mat-action-row .mat-mdc-button-base {
  margin-left: 8px;
}
[dir=rtl] .mat-action-row .mat-button-base,
[dir=rtl] .mat-action-row .mat-mdc-button-base {
  margin-left: 0;
  margin-right: 8px;
}
`],encapsulation:2,changeDetection:0})}return n})();var K=(()=>{class n{panel=a(Z,{host:!0});_element=a(N);_focusMonitor=a(Ce);_changeDetectorRef=a(H);_parentChangeSubscription=P.EMPTY;constructor(){a(we).load(De);let e=this.panel,t=a(Be,{optional:!0}),i=a(new ve("tabindex"),{optional:!0}),s=e.accordion?e.accordion._stateChanges.pipe(y(d=>!!(d.hideToggle||d.togglePosition))):X;this.tabIndex=parseInt(i||"")||0,this._parentChangeSubscription=$(e.opened,e.closed,s,e._inputChanges.pipe(y(d=>!!(d.hideToggle||d.disabled||d.togglePosition)))).subscribe(()=>this._changeDetectorRef.markForCheck()),e.closed.pipe(y(()=>e._containsFocus())).subscribe(()=>this._focusMonitor.focusVia(this._element,"program")),t&&(this.expandedHeight=t.expandedHeight,this.collapsedHeight=t.collapsedHeight)}expandedHeight;collapsedHeight;tabIndex=0;get disabled(){return this.panel.disabled}_toggle(){this.disabled||this.panel.toggle()}_isExpanded(){return this.panel.expanded}_getExpandedState(){return this.panel._getExpandedState()}_getPanelId(){return this.panel.id}_getTogglePosition(){return this.panel.togglePosition}_showToggle(){return!this.panel.hideToggle&&!this.panel.disabled}_getHeaderHeight(){let e=this._isExpanded();return e&&this.expandedHeight?this.expandedHeight:!e&&this.collapsedHeight?this.collapsedHeight:null}_keydown(e){switch(e.keyCode){case 32:case 13:Me(e)||(e.preventDefault(),this._toggle());break;default:this.panel.accordion&&this.panel.accordion._handleHeaderKeydown(e);return}}focus(e,t){e?this._focusMonitor.focusVia(this._element,e,t):this._element.nativeElement.focus(t)}ngAfterViewInit(){this._focusMonitor.monitor(this._element).subscribe(e=>{e&&this.panel.accordion&&this.panel.accordion._handleHeaderFocus(this)})}ngOnDestroy(){this._parentChangeSubscription.unsubscribe(),this._focusMonitor.stopMonitoring(this._element)}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=C({type:n,selectors:[["mat-expansion-panel-header"]],hostAttrs:["role","button",1,"mat-expansion-panel-header","mat-focus-indicator"],hostVars:13,hostBindings:function(t,i){t&1&&O("click",function(){return i._toggle()})("keydown",function(d){return i._keydown(d)}),t&2&&(S("id",i.panel._headerId)("tabindex",i.disabled?-1:i.tabIndex)("aria-controls",i._getPanelId())("aria-expanded",i._isExpanded())("aria-disabled",i.panel.disabled),xe("height",i._getHeaderHeight()),u("mat-expanded",i._isExpanded())("mat-expansion-toggle-indicator-after",i._getTogglePosition()==="after")("mat-expansion-toggle-indicator-before",i._getTogglePosition()==="before"))},inputs:{expandedHeight:"expandedHeight",collapsedHeight:"collapsedHeight",tabIndex:[2,"tabIndex","tabIndex",e=>e==null?0:ye(e)]},ngContentSelectors:on,decls:5,vars:3,consts:[[1,"mat-content"],[1,"mat-expansion-indicator"],["xmlns","http://www.w3.org/2000/svg","viewBox","0 -960 960 960","aria-hidden","true","focusable","false"],["d","M480-345 240-585l56-56 184 184 184-184 56 56-240 240Z"]],template:function(t,i){t&1&&(Q(an),T(0,"span",0),h(1),h(2,1),h(3,2),L(),le(4,rn,3,0,"span",1)),t&2&&(u("mat-content-hide-toggle",!i._showToggle()),r(4),ce(i._showToggle()?4:-1))},styles:[`.mat-expansion-panel-header {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 24px;
  border-radius: inherit;
}
.mat-expansion-panel-animations-enabled .mat-expansion-panel-header {
  transition: height 225ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-expansion-panel-header::before {
  border-radius: inherit;
}
.mat-expansion-panel-header {
  height: var(--mat-expansion-header-collapsed-state-height, 48px);
  font-family: var(--mat-expansion-header-text-font, var(--mat-sys-title-medium-font));
  font-size: var(--mat-expansion-header-text-size, var(--mat-sys-title-medium-size));
  font-weight: var(--mat-expansion-header-text-weight, var(--mat-sys-title-medium-weight));
  line-height: var(--mat-expansion-header-text-line-height, var(--mat-sys-title-medium-line-height));
  letter-spacing: var(--mat-expansion-header-text-tracking, var(--mat-sys-title-medium-tracking));
}
.mat-expansion-panel-header.mat-expanded {
  height: var(--mat-expansion-header-expanded-state-height, 64px);
}
.mat-expansion-panel-header[aria-disabled=true] {
  color: var(--mat-expansion-header-disabled-state-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));
}
.mat-expansion-panel-header:not([aria-disabled=true]) {
  cursor: pointer;
}
.mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled=true]):hover {
  background: var(--mat-expansion-header-hover-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-hover-state-layer-opacity) * 100%), transparent));
}
@media (hover: none) {
  .mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled=true]):hover {
    background: var(--mat-expansion-container-background-color, var(--mat-sys-surface));
  }
}
.mat-expansion-panel .mat-expansion-panel-header:not([aria-disabled=true]).cdk-keyboard-focused, .mat-expansion-panel .mat-expansion-panel-header:not([aria-disabled=true]).cdk-program-focused {
  background: var(--mat-expansion-header-focus-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-focus-state-layer-opacity) * 100%), transparent));
}
.mat-expansion-panel-header._mat-animation-noopable {
  transition: none;
}
.mat-expansion-panel-header:focus, .mat-expansion-panel-header:hover {
  outline: none;
}
.mat-expansion-panel-header.mat-expanded:focus, .mat-expansion-panel-header.mat-expanded:hover {
  background: inherit;
}
.mat-expansion-panel-header.mat-expansion-toggle-indicator-before {
  flex-direction: row-reverse;
}
.mat-expansion-panel-header.mat-expansion-toggle-indicator-before .mat-expansion-indicator {
  margin: 0 16px 0 0;
}
[dir=rtl] .mat-expansion-panel-header.mat-expansion-toggle-indicator-before .mat-expansion-indicator {
  margin: 0 0 0 16px;
}

.mat-content {
  display: flex;
  flex: 1;
  flex-direction: row;
  overflow: hidden;
}
.mat-content.mat-content-hide-toggle {
  margin-right: 8px;
}
[dir=rtl] .mat-content.mat-content-hide-toggle {
  margin-right: 0;
  margin-left: 8px;
}
.mat-expansion-toggle-indicator-before .mat-content.mat-content-hide-toggle {
  margin-left: 24px;
  margin-right: 0;
}
[dir=rtl] .mat-expansion-toggle-indicator-before .mat-content.mat-content-hide-toggle {
  margin-right: 24px;
  margin-left: 0;
}

.mat-expansion-panel-header-title {
  color: var(--mat-expansion-header-text-color, var(--mat-sys-on-surface));
}

.mat-expansion-panel-header-title,
.mat-expansion-panel-header-description {
  display: flex;
  flex-grow: 1;
  flex-basis: 0;
  margin-right: 16px;
  align-items: center;
}
[dir=rtl] .mat-expansion-panel-header-title,
[dir=rtl] .mat-expansion-panel-header-description {
  margin-right: 0;
  margin-left: 16px;
}
.mat-expansion-panel-header[aria-disabled=true] .mat-expansion-panel-header-title,
.mat-expansion-panel-header[aria-disabled=true] .mat-expansion-panel-header-description {
  color: inherit;
}

.mat-expansion-panel-header-description {
  flex-grow: 2;
  color: var(--mat-expansion-header-description-color, var(--mat-sys-on-surface-variant));
}

.mat-expansion-panel-animations-enabled .mat-expansion-indicator {
  transition: transform 225ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-expansion-panel-header.mat-expanded .mat-expansion-indicator {
  transform: rotate(180deg);
}
.mat-expansion-indicator::after {
  border-style: solid;
  border-width: 0 2px 2px 0;
  content: "";
  padding: 3px;
  transform: rotate(45deg);
  vertical-align: middle;
  color: var(--mat-expansion-header-indicator-color, var(--mat-sys-on-surface-variant));
  display: var(--mat-expansion-legacy-header-indicator-display, none);
}
.mat-expansion-indicator svg {
  width: 24px;
  height: 24px;
  margin: 0 -8px;
  vertical-align: middle;
  fill: var(--mat-expansion-header-indicator-color, var(--mat-sys-on-surface-variant));
  display: var(--mat-expansion-header-indicator-display, inline-block);
}

@media (forced-colors: active) {
  .mat-expansion-panel-content {
    border-top: 1px solid;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }
}
`],encapsulation:2,changeDetection:0})}return n})(),qe=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275dir=m({type:n,selectors:[["mat-panel-description"]],hostAttrs:[1,"mat-expansion-panel-header-description"]})}return n})(),Ue=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275dir=m({type:n,selectors:[["mat-panel-title"]],hostAttrs:[1,"mat-expansion-panel-header-title"]})}return n})(),We=(()=>{class n extends Re{_keyManager;_ownHeaders=new oe;_headers;hideToggle=!1;displayMode="default";togglePosition="after";ngAfterContentInit(){this._headers.changes.pipe(j(this._headers)).subscribe(e=>{this._ownHeaders.reset(e.filter(t=>t.panel.accordion===this)),this._ownHeaders.notifyOnChanges()}),this._keyManager=new Ee(this._ownHeaders).withWrap().withHomeAndEnd()}_handleHeaderKeydown(e){this._keyManager.onKeydown(e)}_handleHeaderFocus(e){this._keyManager.updateActiveItem(e)}ngOnDestroy(){super.ngOnDestroy(),this._keyManager?.destroy(),this._ownHeaders.destroy()}static \u0275fac=(()=>{let e;return function(i){return(e||(e=ae(n)))(i||n)}})();static \u0275dir=m({type:n,selectors:[["mat-accordion"]],contentQueries:function(t,i,s){if(t&1&&B(s,K,5),t&2){let d;w(d=M())&&(i._headers=d)}},hostAttrs:[1,"mat-accordion"],hostVars:2,hostBindings:function(t,i){t&2&&u("mat-accordion-multi",i.multi)},inputs:{hideToggle:[2,"hideToggle","hideToggle",x],displayMode:"displayMode",togglePosition:"togglePosition"},exportAs:["matAccordion"],features:[_([{provide:W,useExisting:n}]),V]})}return n})(),Ze=(()=>{class n{static \u0275fac=function(t){return new(t||n)};static \u0275mod=k({type:n});static \u0275inj=A({imports:[Le,Fe,Pe]})}return n})();var Xe=(n,o)=>o.id;function pn(n,o){if(n&1){let e=he();l(0,"div",6)(1,"mat-checkbox",7),O("change",function(){let i=Y(e).$implicit,s=I(2);return J(s.toggleVideo(i.id))}),l(2,"span"),b(3),p(),l(4,"span",8),b(5),p()()()}if(n&2){let e=o.$implicit,t=I(2);r(),g("checked",t.isVideoCompleted(e.id)),r(),u("completed",t.isVideoCompleted(e.id)),r(),q(" Video ",e.videoNumber,": ",e.name," "),r(2),be("(",e.duration,")")}}function ln(n,o){if(n&1&&(l(0,"mat-expansion-panel",2)(1,"mat-expansion-panel-header")(2,"mat-panel-title"),b(3),p(),l(4,"mat-panel-description")(5,"div",3)(6,"span"),b(7),p(),me(8,"app-progress-bar",4),p()()(),l(9,"div",5),R(10,pn,6,6,"div",6,Xe),p()()),n&2){let e=o.$implicit,t=I();g("expanded",!1),r(3),fe(e.name),r(4),q("",e.completedVideos," / ",e.totalVideos," Videos"),r(),g("percent",e.percent)("colorClass",e.percent===100?"success":"primary"),r(2),z(t.getVideosForSubject(e.id))}}var Ke=class n{progress=a(Te);storage=a(Se);completedSet=_e(()=>new Set(this.storage.progress().completedVideoIds));getVideosForSubject(o){return this.progress.videos().filter(e=>e.subjectId===o)}isVideoCompleted(o){return this.completedSet().has(o)}toggleVideo(o){this.storage.toggleVideo(o)}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=C({type:n,selectors:[["app-subjects"]],decls:6,vars:0,consts:[[1,"subjects-container"],[1,"headers-align"],[3,"expanded"],[1,"panel-desc"],[3,"percent","colorClass"],[1,"videos-list"],[1,"video-item"],["color","primary",3,"change","checked"],[1,"duration"]],template:function(e,t){e&1&&(l(0,"div",0)(1,"h2"),b(2,"Subject Modules"),p(),l(3,"mat-accordion",1),R(4,ln,12,6,"mat-expansion-panel",2,Xe),p()()),e&2&&(r(4),z(t.progress.subjectProgress()))},dependencies:[Ze,We,Z,K,Ue,qe,Ne,je,Oe,ke],styles:[".subjects-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:1rem}.panel-desc[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:flex-end;width:100%;gap:1rem}.panel-desc[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{white-space:nowrap;font-size:.8rem}.panel-desc[_ngcontent-%COMP%]   app-progress-bar[_ngcontent-%COMP%]{width:120px;min-width:80px;margin-bottom:0;flex-shrink:0}.headers-align[_ngcontent-%COMP%]   mat-expansion-panel-header[_ngcontent-%COMP%]{padding:0 16px}mat-panel-title[_ngcontent-%COMP%]{flex-basis:40%;min-width:0;font-size:.9rem}mat-panel-description[_ngcontent-%COMP%]{flex-basis:60%;justify-content:flex-end;align-items:center}@media(max-width:480px){mat-panel-title[_ngcontent-%COMP%]{flex-basis:100%}mat-panel-description[_ngcontent-%COMP%]{display:none!important}}.videos-list[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:.5rem;margin-top:1rem}.video-item[_ngcontent-%COMP%]{padding:.5rem 0;border-bottom:1px solid var(--border-color)}.video-item[_ngcontent-%COMP%]:last-child{border-bottom:none}.completed[_ngcontent-%COMP%]{text-decoration:line-through;color:var(--text-tertiary)}.duration[_ngcontent-%COMP%]{margin-left:.5rem;font-size:.8rem;color:var(--text-tertiary)}"]})};export{Ke as SubjectsComponent};
