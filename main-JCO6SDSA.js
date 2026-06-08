import{a as kr,b as Jt,c as Cr,d as Hi,g as Dr}from"./chunk-AJ4NCUDB.js";import"./chunk-CM33DAHV.js";import{a as Nr,b as Pr}from"./chunk-PDWUB5S4.js";import"./chunk-7UI6HFBW.js";import{a as Er,b as Ar}from"./chunk-42RYDL5V.js";import{a as pr,b as Lr}from"./chunk-Y25IUO5G.js";import{a as Ir,b as Tr,d as Or}from"./chunk-PEEIHTHD.js";import{C as Ke,E as Rr,F as Sr,H as Mr,b as Et,c as ke,e as gr,h as vr,i as _r,j as br,k as wr,n as yr,v as H}from"./chunk-S6VMRB6W.js";import{a as mr,b as ur,d as fr}from"./chunk-GVB7EBHE.js";import{$ as B,$a as Ge,$b as Yt,A as wt,Aa as Gn,B as Li,Bb as Dt,Bc as hr,Cb as Y,Cc as xr,D as zn,Db as w,Dc as At,E as yt,Eb as dt,F as Ni,Fb as ye,Gb as M,Hb as D,K as ve,L as J,Lb as Fi,M as j,Ma as Wn,Mb as We,Na as Rt,Nb as P,O as tt,Ob as er,P as A,Pb as x,Q as Fn,Qb as Bi,Ra as Zn,S as R,Sa as Zt,T as rt,U as Bn,V as y,Va as Kt,W as xt,Wa as at,Wb as It,X as l,Xa as Kn,Y as $n,Ya as Yn,Yb as ir,Zb as nr,_ as gt,_a as Xn,_b as k,a as m,aa as _e,ab as S,ac as rr,b as z,ba as be,bb as ot,bc as ar,c as $e,cb as L,cc as or,d as On,db as st,e as Ln,ea as kt,f as T,fa as Gt,fb as Jn,fc as vt,g as G,ga as Pi,h as W,ha as Hn,hb as tr,hc as Ze,i as O,ia as Z,ib as Ui,j as g,ja as Ct,jb as ji,k as Nn,kb as zi,l as Ti,la as Qe,lb as ct,lc as sr,m as Pn,ma as b,mb as St,n as E,nb as Mt,o as Oi,oa as Wt,p as nt,pa as K,pc as cr,q as ge,qa as qn,qc as xe,r as Un,ra as $,rb as f,rc as lr,s as He,sa as Vn,sb as v,sc as Xt,tb as ft,tc as dr,u as qe,v as F,x as Ve,xb as we,y as fe,z as jn,za as Qn,zb as lt,zc as $i}from"./chunk-BCKDM4F6.js";var u="primary",Pe=Symbol("RouteTitle"),Wi=class{params;constructor(n){this.params=n||{}}has(n){return Object.prototype.hasOwnProperty.call(this.params,n)}get(n){if(this.has(n)){let t=this.params[n];return Array.isArray(t)?t[0]:t}return null}getAll(n){if(this.has(n)){let t=this.params[n];return Array.isArray(t)?t:[t]}return[]}get keys(){return Object.keys(this.params)}};function Ft(e){return new Wi(e)}function qi(e,n,t){for(let i=0;i<e.length;i++){let r=e[i],a=n[i];if(r[0]===":")t[r.substring(1)]=a;else if(r!==a.path)return!1}return!0}function Hr(e,n,t){let i=t.path.split("/"),r=i.indexOf("**");if(r===-1){if(i.length>e.length||t.pathMatch==="full"&&(n.hasChildren()||i.length<e.length))return null;let c={},d=e.slice(0,i.length);return qi(i,d,c)?{consumed:d,posParams:c}:null}if(r!==i.lastIndexOf("**"))return null;let a=i.slice(0,r),o=i.slice(r+1);if(a.length+o.length>e.length||t.pathMatch==="full"&&n.hasChildren()&&t.path!=="**")return null;let s={};return!qi(a,e.slice(0,a.length),s)||!qi(o,e.slice(e.length-o.length),s)?null:{consumed:e,posParams:s}}function ii(e){return new Promise((n,t)=>{e.pipe(yt()).subscribe({next:i=>n(i),error:i=>t(i)})})}function Ya(e,n){if(e.length!==n.length)return!1;for(let t=0;t<e.length;++t)if(!mt(e[t],n[t]))return!1;return!0}function mt(e,n){let t=e?Zi(e):void 0,i=n?Zi(n):void 0;if(!t||!i||t.length!=i.length)return!1;let r;for(let a=0;a<t.length;a++)if(r=t[a],!qr(e[r],n[r]))return!1;return!0}function Zi(e){return[...Object.keys(e),...Object.getOwnPropertySymbols(e)]}function qr(e,n){if(Array.isArray(e)&&Array.isArray(n)){if(e.length!==n.length)return!1;let t=[...e].sort(),i=[...n].sort();return t.every((r,a)=>i[a]===r)}else return e===n}function Xa(e){return e.length>0?e[e.length-1]:null}function Ht(e){return Ti(e)?e:tr(e)?O(Promise.resolve(e)):g(e)}function Vr(e){return Ti(e)?ii(e):Promise.resolve(e)}var Ja={exact:Gr,subset:Wr},Qr={exact:to,subset:eo,ignored:()=>!0},dn={paths:"exact",fragment:"ignored",matrixParams:"ignored",queryParams:"exact"},De={paths:"subset",fragment:"ignored",matrixParams:"ignored",queryParams:"subset"};function mn(e,n,t){let i=e instanceof U?e:n.parseUrl(e);return Yt(()=>Ki(n.lastSuccessfulNavigation()?.finalUrl??new U,i,m(m({},De),t)))}function Ki(e,n,t){return Ja[t.paths](e.root,n.root,t.matrixParams)&&Qr[t.queryParams](e.queryParams,n.queryParams)&&!(t.fragment==="exact"&&e.fragment!==n.fragment)}function to(e,n){return mt(e,n)}function Gr(e,n,t){if(!zt(e.segments,n.segments)||!Je(e.segments,n.segments,t)||e.numberOfChildren!==n.numberOfChildren)return!1;for(let i in n.children)if(!e.children[i]||!Gr(e.children[i],n.children[i],t))return!1;return!0}function eo(e,n){return Object.keys(n).length<=Object.keys(e).length&&Object.keys(n).every(t=>qr(e[t],n[t]))}function Wr(e,n,t){return Zr(e,n,n.segments,t)}function Zr(e,n,t,i){if(e.segments.length>t.length){let r=e.segments.slice(0,t.length);return!(!zt(r,t)||n.hasChildren()||!Je(r,t,i))}else if(e.segments.length===t.length){if(!zt(e.segments,t)||!Je(e.segments,t,i))return!1;for(let r in n.children)if(!e.children[r]||!Wr(e.children[r],n.children[r],i))return!1;return!0}else{let r=t.slice(0,e.segments.length),a=t.slice(e.segments.length);return!zt(e.segments,r)||!Je(e.segments,r,i)||!e.children[u]?!1:Zr(e.children[u],n,a,i)}}function Je(e,n,t){return n.every((i,r)=>Qr[t](e[r].parameters,i.parameters))}var U=class{root;queryParams;fragment;_queryParamMap;constructor(n=new _([],{}),t={},i=null){this.root=n,this.queryParams=t,this.fragment=i}get queryParamMap(){return this._queryParamMap??=Ft(this.queryParams),this._queryParamMap}toString(){return ro.serialize(this)}},_=class{segments;children;parent=null;constructor(n,t){this.segments=n,this.children=t,Object.values(t).forEach(i=>i.parent=this)}hasChildren(){return this.numberOfChildren>0}get numberOfChildren(){return Object.keys(this.children).length}toString(){return ti(this)}},Tt=class{path;parameters;_parameterMap;constructor(n,t){this.path=n,this.parameters=t}get parameterMap(){return this._parameterMap??=Ft(this.parameters),this._parameterMap}toString(){return Yr(this)}};function io(e,n){return zt(e,n)&&e.every((t,i)=>mt(t.parameters,n[i].parameters))}function zt(e,n){return e.length!==n.length?!1:e.every((t,i)=>t.path===n[i].path)}function no(e,n){let t=[];return Object.entries(e.children).forEach(([i,r])=>{i===u&&(t=t.concat(n(r,i)))}),Object.entries(e.children).forEach(([i,r])=>{i!==u&&(t=t.concat(n(r,i)))}),t}var Nt=(()=>{class e{static \u0275fac=function(i){return new(i||e)};static \u0275prov=R({token:e,factory:()=>new bt,providedIn:"root"})}return e})(),bt=class{parse(n){let t=new Xi(n);return new U(t.parseRootSegment(),t.parseQueryParams(),t.parseFragment())}serialize(n){let t=`/${Ce(n.root,!0)}`,i=so(n.queryParams),r=typeof n.fragment=="string"?`#${ao(n.fragment)}`:"";return`${t}${i}${r}`}},ro=new bt;function ti(e){return e.segments.map(n=>Yr(n)).join("/")}function Ce(e,n){if(!e.hasChildren())return ti(e);if(n){let t=e.children[u]?Ce(e.children[u],!1):"",i=[];return Object.entries(e.children).forEach(([r,a])=>{r!==u&&i.push(`${r}:${Ce(a,!1)}`)}),i.length>0?`${t}(${i.join("//")})`:t}else{let t=no(e,(i,r)=>r===u?[Ce(e.children[u],!1)]:[`${r}:${Ce(i,!1)}`]);return Object.keys(e.children).length===1&&e.children[u]!=null?`${ti(e)}/${t[0]}`:`${ti(e)}/(${t.join("//")})`}}function Kr(e){return encodeURIComponent(e).replace(/%40/g,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",")}function Ye(e){return Kr(e).replace(/%3B/gi,";")}function ao(e){return encodeURI(e)}function Yi(e){return Kr(e).replace(/\(/g,"%28").replace(/\)/g,"%29").replace(/%26/gi,"&")}function ei(e){return decodeURIComponent(e)}function Ur(e){return ei(e.replace(/\+/g,"%20"))}function Yr(e){return`${Yi(e.path)}${oo(e.parameters)}`}function oo(e){return Object.entries(e).map(([n,t])=>`;${Yi(n)}=${Yi(t)}`).join("")}function so(e){let n=Object.entries(e).map(([t,i])=>Array.isArray(i)?i.map(r=>`${Ye(t)}=${Ye(r)}`).join("&"):`${Ye(t)}=${Ye(i)}`).filter(t=>t);return n.length?`?${n.join("&")}`:""}var co=/^[^\/()?;#]+/;function Vi(e){let n=e.match(co);return n?n[0]:""}var lo=/^[^\/()?;=#]+/;function mo(e){let n=e.match(lo);return n?n[0]:""}var ho=/^[^=?&#]+/;function uo(e){let n=e.match(ho);return n?n[0]:""}var po=/^[^&#]+/;function go(e){let n=e.match(po);return n?n[0]:""}var Xi=class{url;remaining;constructor(n){this.url=n,this.remaining=n}parseRootSegment(){for(;this.consumeOptional("/"););return this.remaining===""||this.peekStartsWith("?")||this.peekStartsWith("#")?new _([],{}):new _([],this.parseChildren())}parseQueryParams(){let n={};if(this.consumeOptional("?"))do this.parseQueryParam(n);while(this.consumeOptional("&"));return n}parseFragment(){return this.consumeOptional("#")?decodeURIComponent(this.remaining):null}parseChildren(n=0){if(n>50)throw new A(4010,!1);if(this.remaining==="")return{};this.consumeOptional("/");let t=[];for(this.peekStartsWith("(")||t.push(this.parseSegment());this.peekStartsWith("/")&&!this.peekStartsWith("//")&&!this.peekStartsWith("/(");)this.capture("/"),t.push(this.parseSegment());let i={};this.peekStartsWith("/(")&&(this.capture("/"),i=this.parseParens(!0,n));let r={};return this.peekStartsWith("(")&&(r=this.parseParens(!1,n)),(t.length>0||Object.keys(i).length>0)&&(r[u]=new _(t,i)),r}parseSegment(){let n=Vi(this.remaining);if(n===""&&this.peekStartsWith(";"))throw new A(4009,!1);return this.capture(n),new Tt(ei(n),this.parseMatrixParams())}parseMatrixParams(){let n={};for(;this.consumeOptional(";");)this.parseParam(n);return n}parseParam(n){let t=mo(this.remaining);if(!t)return;this.capture(t);let i="";if(this.consumeOptional("=")){let r=Vi(this.remaining);r&&(i=r,this.capture(i))}n[ei(t)]=ei(i)}parseQueryParam(n){let t=uo(this.remaining);if(!t)return;this.capture(t);let i="";if(this.consumeOptional("=")){let o=go(this.remaining);o&&(i=o,this.capture(i))}let r=Ur(t),a=Ur(i);if(n.hasOwnProperty(r)){let o=n[r];Array.isArray(o)||(o=[o],n[r]=o),o.push(a)}else n[r]=a}parseParens(n,t){let i={};for(this.capture("(");!this.consumeOptional(")")&&this.remaining.length>0;){let r=Vi(this.remaining),a=this.remaining[r.length];if(a!=="/"&&a!==")"&&a!==";")throw new A(4010,!1);let o;r.indexOf(":")>-1?(o=r.slice(0,r.indexOf(":")),this.capture(o),this.capture(":")):n&&(o=u);let s=this.parseChildren(t+1);i[o??u]=Object.keys(s).length===1&&s[u]?s[u]:new _([],s),this.consumeOptional("//")}return i}peekStartsWith(n){return this.remaining.startsWith(n)}consumeOptional(n){return this.peekStartsWith(n)?(this.remaining=this.remaining.substring(n.length),!0):!1}capture(n){if(!this.consumeOptional(n))throw new A(4011,!1)}};function Xr(e){return e.segments.length>0?new _([],{[u]:e}):e}function Jr(e){let n={};for(let[i,r]of Object.entries(e.children)){let a=Jr(r);if(i===u&&a.segments.length===0&&a.hasChildren())for(let[o,s]of Object.entries(a.children))n[o]=s;else(a.segments.length>0||a.hasChildren())&&(n[i]=a)}let t=new _(e.segments,n);return fo(t)}function fo(e){if(e.numberOfChildren===1&&e.children[u]){let n=e.children[u];return new _(e.segments.concat(n.segments),n.children)}return e}function Ot(e){return e instanceof U}function ta(e,n,t=null,i=null,r=new bt){let a=ea(e);return ia(a,n,t,i,r)}function ea(e){let n;function t(a){let o={};for(let c of a.children){let d=t(c);o[c.outlet]=d}let s=new _(a.url,o);return a===e&&(n=s),s}let i=t(e.root),r=Xr(i);return n??r}function ia(e,n,t,i,r){let a=e;for(;a.parent;)a=a.parent;if(n.length===0)return Qi(a,a,a,t,i,r);let o=vo(n);if(o.toRoot())return Qi(a,a,new _([],{}),t,i,r);let s=_o(o,a,e),c=s.processChildren?Se(s.segmentGroup,s.index,o.commands):ra(s.segmentGroup,s.index,o.commands);return Qi(a,s.segmentGroup,c,t,i,r)}function ni(e){return typeof e=="object"&&e!=null&&!e.outlets&&!e.segmentPath}function Ie(e){return typeof e=="object"&&e!=null&&e.outlets}function jr(e,n,t){e||="\u0275";let i=new U;return i.queryParams={[e]:n},t.parse(t.serialize(i)).queryParams[e]}function Qi(e,n,t,i,r,a){let o={};for(let[d,h]of Object.entries(i??{}))o[d]=Array.isArray(h)?h.map(p=>jr(d,p,a)):jr(d,h,a);let s;e===n?s=t:s=na(e,n,t);let c=Xr(Jr(s));return new U(c,o,r)}function na(e,n,t){let i={};return Object.entries(e.children).forEach(([r,a])=>{a===n?i[r]=t:i[r]=na(a,n,t)}),new _(e.segments,i)}var ri=class{isAbsolute;numberOfDoubleDots;commands;constructor(n,t,i){if(this.isAbsolute=n,this.numberOfDoubleDots=t,this.commands=i,n&&i.length>0&&ni(i[0]))throw new A(4003,!1);let r=i.find(Ie);if(r&&r!==Xa(i))throw new A(4004,!1)}toRoot(){return this.isAbsolute&&this.commands.length===1&&this.commands[0]=="/"}};function vo(e){if(typeof e[0]=="string"&&e.length===1&&e[0]==="/")return new ri(!0,0,e);let n=0,t=!1,i=e.reduce((r,a,o)=>{if(typeof a=="object"&&a!=null){if(a.outlets){let s={};return Object.entries(a.outlets).forEach(([c,d])=>{s[c]=typeof d=="string"?d.split("/"):d}),[...r,{outlets:s}]}if(a.segmentPath)return[...r,a.segmentPath]}return typeof a!="string"?[...r,a]:o===0?(a.split("/").forEach((s,c)=>{c==0&&s==="."||(c==0&&s===""?t=!0:s===".."?n++:s!=""&&r.push(s))}),r):[...r,a]},[]);return new ri(t,n,i)}var ee=class{segmentGroup;processChildren;index;constructor(n,t,i){this.segmentGroup=n,this.processChildren=t,this.index=i}};function _o(e,n,t){if(e.isAbsolute)return new ee(n,!0,0);if(!t)return new ee(n,!1,NaN);if(t.parent===null)return new ee(t,!0,0);let i=ni(e.commands[0])?0:1,r=t.segments.length-1+i;return bo(t,r,e.numberOfDoubleDots)}function bo(e,n,t){let i=e,r=n,a=t;for(;a>r;){if(a-=r,i=i.parent,!i)throw new A(4005,!1);r=i.segments.length}return new ee(i,!1,r-a)}function wo(e){return Ie(e[0])?e[0].outlets:{[u]:e}}function ra(e,n,t){if(e??=new _([],{}),e.segments.length===0&&e.hasChildren())return Se(e,n,t);let i=yo(e,n,t),r=t.slice(i.commandIndex);if(i.match&&i.pathIndex<e.segments.length){let a=new _(e.segments.slice(0,i.pathIndex),{});return a.children[u]=new _(e.segments.slice(i.pathIndex),e.children),Se(a,0,r)}else return i.match&&r.length===0?new _(e.segments,{}):i.match&&!e.hasChildren()?Ji(e,n,t):i.match?Se(e,0,r):Ji(e,n,t)}function Se(e,n,t){if(t.length===0)return new _(e.segments,{});{let i=wo(t),r={};if(Object.keys(i).some(a=>a!==u)&&e.children[u]&&e.numberOfChildren===1&&e.children[u].segments.length===0){let a=Se(e.children[u],n,t);return new _(e.segments,a.children)}return Object.entries(i).forEach(([a,o])=>{typeof o=="string"&&(o=[o]),o!==null&&(r[a]=ra(e.children[a],n,o))}),Object.entries(e.children).forEach(([a,o])=>{i[a]===void 0&&(r[a]=o)}),new _(e.segments,r)}}function yo(e,n,t){let i=0,r=n,a={match:!1,pathIndex:0,commandIndex:0};for(;r<e.segments.length;){if(i>=t.length)return a;let o=e.segments[r],s=t[i];if(Ie(s))break;let c=`${s}`,d=i<t.length-1?t[i+1]:null;if(r>0&&c===void 0)break;if(c&&d&&typeof d=="object"&&d.outlets===void 0){if(!Fr(c,d,o))return a;i+=2}else{if(!Fr(c,{},o))return a;i++}r++}return{match:!0,pathIndex:r,commandIndex:i}}function Ji(e,n,t){let i=e.segments.slice(0,n),r=0;for(;r<t.length;){let a=t[r];if(Ie(a)){let c=xo(a.outlets);return new _(i,c)}if(r===0&&ni(t[0])){let c=e.segments[n];i.push(new Tt(c.path,zr(t[0]))),r++;continue}let o=Ie(a)?a.outlets[u]:`${a}`,s=r<t.length-1?t[r+1]:null;o&&s&&ni(s)?(i.push(new Tt(o,zr(s))),r+=2):(i.push(new Tt(o,{})),r++)}return new _(i,{})}function xo(e){let n={};return Object.entries(e).forEach(([t,i])=>{typeof i=="string"&&(i=[i]),i!==null&&(n[t]=Ji(new _([],{}),0,i))}),n}function zr(e){let n={};return Object.entries(e).forEach(([t,i])=>n[t]=`${i}`),n}function Fr(e,n,t){return e==t.path&&mt(n,t.parameters)}var ie="imperative",I=(function(e){return e[e.NavigationStart=0]="NavigationStart",e[e.NavigationEnd=1]="NavigationEnd",e[e.NavigationCancel=2]="NavigationCancel",e[e.NavigationError=3]="NavigationError",e[e.RoutesRecognized=4]="RoutesRecognized",e[e.ResolveStart=5]="ResolveStart",e[e.ResolveEnd=6]="ResolveEnd",e[e.GuardsCheckStart=7]="GuardsCheckStart",e[e.GuardsCheckEnd=8]="GuardsCheckEnd",e[e.RouteConfigLoadStart=9]="RouteConfigLoadStart",e[e.RouteConfigLoadEnd=10]="RouteConfigLoadEnd",e[e.ChildActivationStart=11]="ChildActivationStart",e[e.ChildActivationEnd=12]="ChildActivationEnd",e[e.ActivationStart=13]="ActivationStart",e[e.ActivationEnd=14]="ActivationEnd",e[e.Scroll=15]="Scroll",e[e.NavigationSkipped=16]="NavigationSkipped",e})(I||{}),V=class{id;url;constructor(n,t){this.id=n,this.url=t}},Lt=class extends V{type=I.NavigationStart;navigationTrigger;restoredState;constructor(n,t,i="imperative",r=null){super(n,t),this.navigationTrigger=i,this.restoredState=r}toString(){return`NavigationStart(id: ${this.id}, url: '${this.url}')`}},Q=class extends V{urlAfterRedirects;type=I.NavigationEnd;constructor(n,t,i){super(n,t),this.urlAfterRedirects=i}toString(){return`NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`}},N=(function(e){return e[e.Redirect=0]="Redirect",e[e.SupersededByNewNavigation=1]="SupersededByNewNavigation",e[e.NoDataFromResolver=2]="NoDataFromResolver",e[e.GuardRejected=3]="GuardRejected",e[e.Aborted=4]="Aborted",e})(N||{}),re=(function(e){return e[e.IgnoredSameUrlNavigation=0]="IgnoredSameUrlNavigation",e[e.IgnoredByUrlHandlingStrategy=1]="IgnoredByUrlHandlingStrategy",e})(re||{}),X=class extends V{reason;code;type=I.NavigationCancel;constructor(n,t,i,r){super(n,t),this.reason=i,this.code=r}toString(){return`NavigationCancel(id: ${this.id}, url: '${this.url}')`}};function aa(e){return e instanceof X&&(e.code===N.Redirect||e.code===N.SupersededByNewNavigation)}var ht=class extends V{reason;code;type=I.NavigationSkipped;constructor(n,t,i,r){super(n,t),this.reason=i,this.code=r}},Bt=class extends V{error;target;type=I.NavigationError;constructor(n,t,i,r){super(n,t),this.error=i,this.target=r}toString(){return`NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`}},Ee=class extends V{urlAfterRedirects;state;type=I.RoutesRecognized;constructor(n,t,i,r){super(n,t),this.urlAfterRedirects=i,this.state=r}toString(){return`RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},ai=class extends V{urlAfterRedirects;state;type=I.GuardsCheckStart;constructor(n,t,i,r){super(n,t),this.urlAfterRedirects=i,this.state=r}toString(){return`GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},oi=class extends V{urlAfterRedirects;state;shouldActivate;type=I.GuardsCheckEnd;constructor(n,t,i,r,a){super(n,t),this.urlAfterRedirects=i,this.state=r,this.shouldActivate=a}toString(){return`GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`}},si=class extends V{urlAfterRedirects;state;type=I.ResolveStart;constructor(n,t,i,r){super(n,t),this.urlAfterRedirects=i,this.state=r}toString(){return`ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},ci=class extends V{urlAfterRedirects;state;type=I.ResolveEnd;constructor(n,t,i,r){super(n,t),this.urlAfterRedirects=i,this.state=r}toString(){return`ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},li=class{route;type=I.RouteConfigLoadStart;constructor(n){this.route=n}toString(){return`RouteConfigLoadStart(path: ${this.route.path})`}},di=class{route;type=I.RouteConfigLoadEnd;constructor(n){this.route=n}toString(){return`RouteConfigLoadEnd(path: ${this.route.path})`}},mi=class{snapshot;type=I.ChildActivationStart;constructor(n){this.snapshot=n}toString(){return`ChildActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},hi=class{snapshot;type=I.ChildActivationEnd;constructor(n){this.snapshot=n}toString(){return`ChildActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},ui=class{snapshot;type=I.ActivationStart;constructor(n){this.snapshot=n}toString(){return`ActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},pi=class{snapshot;type=I.ActivationEnd;constructor(n){this.snapshot=n}toString(){return`ActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},ae=class{routerEvent;position;anchor;scrollBehavior;type=I.Scroll;constructor(n,t,i,r){this.routerEvent=n,this.position=t,this.anchor=i,this.scrollBehavior=r}toString(){let n=this.position?`${this.position[0]}, ${this.position[1]}`:null;return`Scroll(anchor: '${this.anchor}', position: '${n}')`}},oe=class{},Ae=class{},se=class{url;navigationBehaviorOptions;constructor(n,t){this.url=n,this.navigationBehaviorOptions=t}};function ko(e){return!(e instanceof oe)&&!(e instanceof se)&&!(e instanceof Ae)}var gi=class{rootInjector;outlet=null;route=null;children;attachRef=null;get injector(){return this.route?.snapshot._environmentInjector??this.rootInjector}constructor(n){this.rootInjector=n,this.children=new qt(this.rootInjector)}},qt=(()=>{class e{rootInjector;contexts=new Map;constructor(t){this.rootInjector=t}onChildOutletCreated(t,i){let r=this.getOrCreateContext(t);r.outlet=i,this.contexts.set(t,r)}onChildOutletDestroyed(t){let i=this.getContext(t);i&&(i.outlet=null,i.attachRef=null)}onOutletDeactivated(){let t=this.contexts;return this.contexts=new Map,t}onOutletReAttached(t){this.contexts=t}getOrCreateContext(t){let i=this.getContext(t);return i||(i=new gi(this.rootInjector),this.contexts.set(t,i)),i}getContext(t){return this.contexts.get(t)||null}static \u0275fac=function(i){return new(i||e)(xt(gt))};static \u0275prov=R({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})(),fi=class{_root;constructor(n){this._root=n}get root(){return this._root.value}parent(n){let t=this.pathFromRoot(n);return t.length>1?t[t.length-2]:null}children(n){let t=tn(n,this._root);return t?t.children.map(i=>i.value):[]}firstChild(n){let t=tn(n,this._root);return t&&t.children.length>0?t.children[0].value:null}siblings(n){let t=en(n,this._root);return t.length<2?[]:t[t.length-2].children.map(r=>r.value).filter(r=>r!==n)}pathFromRoot(n){return en(n,this._root).map(t=>t.value)}};function tn(e,n){if(e===n.value)return n;for(let t of n.children){let i=tn(e,t);if(i)return i}return null}function en(e,n){if(e===n.value)return[n];for(let t of n.children){let i=en(e,t);if(i.length)return i.unshift(n),i}return[]}var q=class{value;children;constructor(n,t){this.value=n,this.children=t}toString(){return`TreeNode(${this.value})`}};function te(e){let n={};return e&&e.children.forEach(t=>n[t.value.outlet]=t),n}var Te=class extends fi{snapshot;constructor(n,t){super(n),this.snapshot=t,un(this,n)}toString(){return this.snapshot.toString()}};function oa(e,n){let t=Co(e,n),i=new G([new Tt("",{})]),r=new G({}),a=new G({}),o=new G({}),s=new G(""),c=new ut(i,r,o,s,a,u,e,t.root);return c.snapshot=t.root,new Te(new q(c,[]),t)}function Co(e,n){let t={},i={},r={},o=new ce([],t,r,"",i,u,e,null,{},n);return new Oe("",new q(o,[]))}var ut=class{urlSubject;paramsSubject;queryParamsSubject;fragmentSubject;dataSubject;outlet;component;snapshot;_futureSnapshot;_routerState;_paramMap;_queryParamMap;title;url;params;queryParams;fragment;data;constructor(n,t,i,r,a,o,s,c){this.urlSubject=n,this.paramsSubject=t,this.queryParamsSubject=i,this.fragmentSubject=r,this.dataSubject=a,this.outlet=o,this.component=s,this._futureSnapshot=c,this.title=this.dataSubject?.pipe(E(d=>d[Pe]))??g(void 0),this.url=n,this.params=t,this.queryParams=i,this.fragment=r,this.data=a}get routeConfig(){return this._futureSnapshot.routeConfig}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=this.params.pipe(E(n=>Ft(n))),this._paramMap}get queryParamMap(){return this._queryParamMap??=this.queryParams.pipe(E(n=>Ft(n))),this._queryParamMap}toString(){return this.snapshot?this.snapshot.toString():`Future(${this._futureSnapshot})`}};function hn(e,n,t="emptyOnly"){let i,{routeConfig:r}=e;return n!==null&&(t==="always"||r?.path===""||!n.component&&!n.routeConfig?.loadComponent)?i={params:m(m({},n.params),e.params),data:m(m({},n.data),e.data),resolve:m(m(m(m({},e.data),n.data),r?.data),e._resolvedData)}:i={params:m({},e.params),data:m({},e.data),resolve:m(m({},e.data),e._resolvedData??{})},r&&ca(r)&&(i.resolve[Pe]=r.title),i}var ce=class{url;params;queryParams;fragment;data;outlet;component;routeConfig;_resolve;_resolvedData;_routerState;_paramMap;_queryParamMap;_environmentInjector;get title(){return this.data?.[Pe]}constructor(n,t,i,r,a,o,s,c,d,h){this.url=n,this.params=t,this.queryParams=i,this.fragment=r,this.data=a,this.outlet=o,this.component=s,this.routeConfig=c,this._resolve=d,this._environmentInjector=h}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=Ft(this.params),this._paramMap}get queryParamMap(){return this._queryParamMap??=Ft(this.queryParams),this._queryParamMap}toString(){let n=this.url.map(i=>i.toString()).join("/"),t=this.routeConfig?this.routeConfig.path:"";return`Route(url:'${n}', path:'${t}')`}},Oe=class extends fi{url;constructor(n,t){super(t),this.url=n,un(this,t)}toString(){return sa(this._root)}};function un(e,n){n.value._routerState=e,n.children.forEach(t=>un(e,t))}function sa(e){let n=e.children.length>0?` { ${e.children.map(sa).join(", ")} } `:"";return`${e.value}${n}`}function Gi(e){if(e.snapshot){let n=e.snapshot,t=e._futureSnapshot;e.snapshot=t,mt(n.queryParams,t.queryParams)||e.queryParamsSubject.next(t.queryParams),n.fragment!==t.fragment&&e.fragmentSubject.next(t.fragment),mt(n.params,t.params)||e.paramsSubject.next(t.params),Ya(n.url,t.url)||e.urlSubject.next(t.url),mt(n.data,t.data)||e.dataSubject.next(t.data)}else e.snapshot=e._futureSnapshot,e.dataSubject.next(e._futureSnapshot.data)}function nn(e,n){let t=mt(e.params,n.params)&&io(e.url,n.url),i=!e.parent!=!n.parent;return t&&!i&&(!e.parent||nn(e.parent,n.parent))}function ca(e){return typeof e.title=="string"||e.title===null}var la=new y(""),Vt=(()=>{class e{activated=null;get activatedComponentRef(){return this.activated}_activatedRoute=null;name=u;activateEvents=new Z;deactivateEvents=new Z;attachEvents=new Z;detachEvents=new Z;routerOutletData=or();parentContexts=l(qt);location=l(Yn);changeDetector=l(vt);inputBinder=l(Ue,{optional:!0});supportsBindingToComponentInputs=!0;ngOnChanges(t){if(t.name){let{firstChange:i,previousValue:r}=t.name;if(i)return;this.isTrackedInParentContexts(r)&&(this.deactivate(),this.parentContexts.onChildOutletDestroyed(r)),this.initializeOutletWithName()}}ngOnDestroy(){this.isTrackedInParentContexts(this.name)&&this.parentContexts.onChildOutletDestroyed(this.name),this.inputBinder?.unsubscribeFromRouteData(this)}isTrackedInParentContexts(t){return this.parentContexts.getContext(t)?.outlet===this}ngOnInit(){this.initializeOutletWithName()}initializeOutletWithName(){if(this.parentContexts.onChildOutletCreated(this.name,this),this.activated)return;let t=this.parentContexts.getContext(this.name);t?.route&&(t.attachRef?this.attach(t.attachRef,t.route):this.activateWith(t.route,t.injector))}get isActivated(){return!!this.activated}get component(){if(!this.activated)throw new A(4012,!1);return this.activated.instance}get activatedRoute(){if(!this.activated)throw new A(4012,!1);return this._activatedRoute}get activatedRouteData(){return this._activatedRoute?this._activatedRoute.snapshot.data:{}}detach(){if(!this.activated)throw new A(4012,!1);this.location.detach();let t=this.activated;return this.activated=null,this._activatedRoute=null,this.detachEvents.emit(t.instance),t}attach(t,i){this.activated=t,this._activatedRoute=i,this.location.insert(t.hostView),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.attachEvents.emit(t.instance)}deactivate(){if(this.activated){let t=this.component;this.activated.destroy(),this.activated=null,this._activatedRoute=null,this.deactivateEvents.emit(t)}}activateWith(t,i){if(this.isActivated)throw new A(4013,!1);this._activatedRoute=t;let r=this.location,o=t.snapshot.component,s=this.parentContexts.getOrCreateContext(this.name).children,c=new rn(t,s,r.injector,this.routerOutletData);this.activated=r.createComponent(o,{index:r.length,injector:c,environmentInjector:i}),this.changeDetector.markForCheck(),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.activateEvents.emit(this.activated.instance)}static \u0275fac=function(i){return new(i||e)};static \u0275dir=L({type:e,selectors:[["router-outlet"]],inputs:{name:"name",routerOutletData:[1,"routerOutletData"]},outputs:{activateEvents:"activate",deactivateEvents:"deactivate",attachEvents:"attach",detachEvents:"detach"},exportAs:["outlet"],features:[Wt]})}return e})(),rn=class{route;childContexts;parent;outletData;constructor(n,t,i,r){this.route=n,this.childContexts=t,this.parent=i,this.outletData=r}get(n,t){return n===ut?this.route:n===qt?this.childContexts:n===la?this.outletData:this.parent.get(n,t)}},Ue=new y(""),pn=(()=>{class e{outletDataSubscriptions=new Map;bindActivatedRouteToOutletComponent(t){this.unsubscribeFromRouteData(t),this.subscribeToRouteData(t)}unsubscribeFromRouteData(t){this.outletDataSubscriptions.get(t)?.unsubscribe(),this.outletDataSubscriptions.delete(t)}subscribeToRouteData(t){let{activatedRoute:i}=t,r=Oi([i.queryParams,i.params,i.data]).pipe(J(([a,o,s],c)=>(s=m(m(m({},a),o),s),c===0?g(s):Promise.resolve(s)))).subscribe(a=>{if(!t.isActivated||!t.activatedComponentRef||t.activatedRoute!==i||i.component===null){this.unsubscribeFromRouteData(t);return}let o=sr(i.component);if(!o){this.unsubscribeFromRouteData(t);return}for(let{templateName:s}of o.inputs)t.activatedComponentRef.setInput(s,a[s])});this.outletDataSubscriptions.set(t,r)}static \u0275fac=function(i){return new(i||e)};static \u0275prov=R({token:e,factory:e.\u0275fac})}return e})(),gn=(()=>{class e{static \u0275fac=function(i){return new(i||e)};static \u0275cmp=S({type:e,selectors:[["ng-component"]],exportAs:["emptyRouterOutlet"],decls:1,vars:0,template:function(i,r){i&1&&ft(0,"router-outlet")},dependencies:[Vt],encapsulation:2})}return e})();function fn(e){let n=e.children&&e.children.map(fn),t=n?z(m({},e),{children:n}):m({},e);return!t.component&&!t.loadComponent&&(n||t.loadChildren)&&t.outlet&&t.outlet!==u&&(t.component=gn),t}function Ro(e,n,t){let i=Le(e,n._root,t?t._root:void 0);return new Te(i,n)}function Le(e,n,t){if(t&&e.shouldReuseRoute(n.value,t.value.snapshot)){let i=t.value;i._futureSnapshot=n.value;let r=So(e,n,t);return new q(i,r)}else{if(e.shouldAttach(n.value)){let a=e.retrieve(n.value);if(a!==null){let o=a.route;return o.value._futureSnapshot=n.value,o.children=n.children.map(s=>Le(e,s)),o}}let i=Mo(n.value),r=n.children.map(a=>Le(e,a));return new q(i,r)}}function So(e,n,t){return n.children.map(i=>{for(let r of t.children)if(e.shouldReuseRoute(i.value,r.value.snapshot))return Le(e,i,r);return Le(e,i)})}function Mo(e){return new ut(new G(e.url),new G(e.params),new G(e.queryParams),new G(e.fragment),new G(e.data),e.outlet,e.component,e)}var le=class{redirectTo;navigationBehaviorOptions;constructor(n,t){this.redirectTo=n,this.navigationBehaviorOptions=t}},da="ngNavigationCancelingError";function vi(e,n){let{redirectTo:t,navigationBehaviorOptions:i}=Ot(n)?{redirectTo:n,navigationBehaviorOptions:void 0}:n,r=ma(!1,N.Redirect);return r.url=t,r.navigationBehaviorOptions=i,r}function ma(e,n){let t=new Error(`NavigationCancelingError: ${e||""}`);return t[da]=!0,t.cancellationCode=n,t}function Do(e){return ha(e)&&Ot(e.url)}function ha(e){return!!e&&e[da]}var an=class{routeReuseStrategy;futureState;currState;forwardEvent;inputBindingEnabled;constructor(n,t,i,r,a){this.routeReuseStrategy=n,this.futureState=t,this.currState=i,this.forwardEvent=r,this.inputBindingEnabled=a}activate(n){let t=this.futureState._root,i=this.currState?this.currState._root:null;this.deactivateChildRoutes(t,i,n),Gi(this.futureState.root),this.activateChildRoutes(t,i,n)}deactivateChildRoutes(n,t,i){let r=te(t);n.children.forEach(a=>{let o=a.value.outlet;this.deactivateRoutes(a,r[o],i),delete r[o]}),Object.values(r).forEach(a=>{this.deactivateRouteAndItsChildren(a,i)})}deactivateRoutes(n,t,i){let r=n.value,a=t?t.value:null;if(r===a)if(r.component){let o=i.getContext(r.outlet);o&&this.deactivateChildRoutes(n,t,o.children)}else this.deactivateChildRoutes(n,t,i);else a&&this.deactivateRouteAndItsChildren(t,i)}deactivateRouteAndItsChildren(n,t){n.value.component&&this.routeReuseStrategy.shouldDetach(n.value.snapshot)?this.detachAndStoreRouteSubtree(n,t):this.deactivateRouteAndOutlet(n,t)}detachAndStoreRouteSubtree(n,t){let i=t.getContext(n.value.outlet),r=i&&n.value.component?i.children:t,a=te(n);for(let o of Object.values(a))this.deactivateRouteAndItsChildren(o,r);if(i&&i.outlet){let o=i.outlet.detach(),s=i.children.onOutletDeactivated();this.routeReuseStrategy.store(n.value.snapshot,{componentRef:o,route:n,contexts:s})}}deactivateRouteAndOutlet(n,t){let i=t.getContext(n.value.outlet),r=i&&n.value.component?i.children:t,a=te(n);for(let o of Object.values(a))this.deactivateRouteAndItsChildren(o,r);i&&(i.outlet&&(i.outlet.deactivate(),i.children.onOutletDeactivated()),i.attachRef=null,i.route=null)}activateChildRoutes(n,t,i){let r=te(t);n.children.forEach(a=>{this.activateRoutes(a,r[a.value.outlet],i),this.forwardEvent(new pi(a.value.snapshot))}),n.children.length&&this.forwardEvent(new hi(n.value.snapshot))}activateRoutes(n,t,i){let r=n.value,a=t?t.value:null;if(Gi(r),r===a)if(r.component){let o=i.getOrCreateContext(r.outlet);this.activateChildRoutes(n,t,o.children)}else this.activateChildRoutes(n,t,i);else if(r.component){let o=i.getOrCreateContext(r.outlet);if(this.routeReuseStrategy.shouldAttach(r.snapshot)){let s=this.routeReuseStrategy.retrieve(r.snapshot);this.routeReuseStrategy.store(r.snapshot,null),o.children.onOutletReAttached(s.contexts),o.attachRef=s.componentRef,o.route=s.route.value,o.outlet&&o.outlet.attach(s.componentRef,s.route.value),Gi(s.route.value),this.activateChildRoutes(n,null,o.children)}else o.attachRef=null,o.route=r,o.outlet&&o.outlet.activateWith(r,o.injector),this.activateChildRoutes(n,null,o.children)}else this.activateChildRoutes(n,null,i)}},_i=class{path;route;constructor(n){this.path=n,this.route=this.path[this.path.length-1]}},ne=class{component;route;constructor(n,t){this.component=n,this.route=t}};function Io(e,n,t){let i=e._root,r=n?n._root:null;return Re(i,r,t,[i.value])}function Eo(e){let n=e.routeConfig?e.routeConfig.canActivateChild:null;return!n||n.length===0?null:{node:e,guards:n}}function me(e,n){let t=Symbol(),i=n.get(e,t);return i===t?typeof e=="function"&&!Bn(e)?e:n.get(e):i}function Re(e,n,t,i,r={canDeactivateChecks:[],canActivateChecks:[]}){let a=te(n);return e.children.forEach(o=>{Ao(o,a[o.value.outlet],t,i.concat([o.value]),r),delete a[o.value.outlet]}),Object.entries(a).forEach(([o,s])=>Me(s,t.getContext(o),r)),r}function Ao(e,n,t,i,r={canDeactivateChecks:[],canActivateChecks:[]}){let a=e.value,o=n?n.value:null,s=t?t.getContext(e.value.outlet):null;if(o&&a.routeConfig===o.routeConfig){let c=To(o,a,a.routeConfig.runGuardsAndResolvers);c?r.canActivateChecks.push(new _i(i)):(a.data=o.data,a._resolvedData=o._resolvedData),a.component?Re(e,n,s?s.children:null,i,r):Re(e,n,t,i,r),c&&s&&s.outlet&&s.outlet.isActivated&&r.canDeactivateChecks.push(new ne(s.outlet.component,o))}else o&&Me(n,s,r),r.canActivateChecks.push(new _i(i)),a.component?Re(e,null,s?s.children:null,i,r):Re(e,null,t,i,r);return r}function To(e,n,t){if(typeof t=="function")return B(n._environmentInjector,()=>t(e,n));switch(t){case"pathParamsChange":return!zt(e.url,n.url);case"pathParamsOrQueryParamsChange":return!zt(e.url,n.url)||!mt(e.queryParams,n.queryParams);case"always":return!0;case"paramsOrQueryParamsChange":return!nn(e,n)||!mt(e.queryParams,n.queryParams);default:return!nn(e,n)}}function Me(e,n,t){let i=te(e),r=e.value;Object.entries(i).forEach(([a,o])=>{r.component?n?Me(o,n.children.getContext(a),t):Me(o,null,t):Me(o,n,t)}),r.component?n&&n.outlet&&n.outlet.isActivated?t.canDeactivateChecks.push(new ne(n.outlet.component,r)):t.canDeactivateChecks.push(new ne(null,r)):t.canDeactivateChecks.push(new ne(null,r))}function je(e){return typeof e=="function"}function Oo(e){return typeof e=="boolean"}function Lo(e){return e&&je(e.canLoad)}function No(e){return e&&je(e.canActivate)}function Po(e){return e&&je(e.canActivateChild)}function Uo(e){return e&&je(e.canDeactivate)}function jo(e){return e&&je(e.canMatch)}function ua(e){return e instanceof Pn||e?.name==="EmptyError"}var Xe=Symbol("INITIAL_VALUE");function de(){return J(e=>Oi(e.map(n=>n.pipe(wt(1),ve(Xe)))).pipe(E(n=>{for(let t of n)if(t!==!0){if(t===Xe)return Xe;if(t===!1||zo(t))return t}return!0}),F(n=>n!==Xe),wt(1)))}function zo(e){return Ot(e)||e instanceof le}function pa(e){return e.aborted?g(void 0).pipe(wt(1)):new Ln(n=>{let t=()=>{n.next(),n.complete()};return e.addEventListener("abort",t),()=>e.removeEventListener("abort",t)})}function ga(e){return j(pa(e))}function Fo(e){return nt(n=>{let{targetSnapshot:t,currentSnapshot:i,guards:{canActivateChecks:r,canDeactivateChecks:a}}=n;return a.length===0&&r.length===0?g(z(m({},n),{guardsResult:!0})):Bo(a,t,i).pipe(nt(o=>o&&Oo(o)?$o(t,r,e):g(o)),E(o=>z(m({},n),{guardsResult:o})))})}function Bo(e,n,t){return O(e).pipe(nt(i=>Go(i.component,i.route,t,n)),yt(i=>i!==!0,!0))}function $o(e,n,t){return O(n).pipe(fe(i=>Un(qo(i.route.parent,t),Ho(i.route,t),Qo(e,i.path),Vo(e,i.route))),yt(i=>i!==!0,!0))}function Ho(e,n){return e!==null&&n&&n(new ui(e)),g(!0)}function qo(e,n){return e!==null&&n&&n(new mi(e)),g(!0)}function Vo(e,n){let t=n.routeConfig?n.routeConfig.canActivate:null;if(!t||t.length===0)return g(!0);let i=t.map(r=>He(()=>{let a=n._environmentInjector,o=me(r,a),s=No(o)?o.canActivate(n,e):B(a,()=>o(n,e));return Ht(s).pipe(yt())}));return g(i).pipe(de())}function Qo(e,n){let t=n[n.length-1],r=n.slice(0,n.length-1).reverse().map(a=>Eo(a)).filter(a=>a!==null).map(a=>He(()=>{let o=a.guards.map(s=>{let c=a.node._environmentInjector,d=me(s,c),h=Po(d)?d.canActivateChild(t,e):B(c,()=>d(t,e));return Ht(h).pipe(yt())});return g(o).pipe(de())}));return g(r).pipe(de())}function Go(e,n,t,i){let r=n&&n.routeConfig?n.routeConfig.canDeactivate:null;if(!r||r.length===0)return g(!0);let a=r.map(o=>{let s=n._environmentInjector,c=me(o,s),d=Uo(c)?c.canDeactivate(e,n,t,i):B(s,()=>c(e,n,t,i));return Ht(d).pipe(yt())});return g(a).pipe(de())}function Wo(e,n,t,i,r){let a=n.canLoad;if(a===void 0||a.length===0)return g(!0);let o=a.map(s=>{let c=me(s,e),d=Lo(c)?c.canLoad(n,t):B(e,()=>c(n,t)),h=Ht(d);return r?h.pipe(ga(r)):h});return g(o).pipe(de(),fa(i))}function fa(e){return On(tt(n=>{if(typeof n!="boolean")throw vi(e,n)}),E(n=>n===!0))}function Zo(e,n,t,i,r,a){let o=n.canMatch;if(!o||o.length===0)return g(!0);let s=o.map(c=>{let d=me(c,e),h=jo(d)?d.canMatch(n,t,r):B(e,()=>d(n,t,r));return Ht(h).pipe(ga(a))});return g(s).pipe(de(),fa(i))}var _t=class e extends Error{segmentGroup;constructor(n){super(),this.segmentGroup=n||null,Object.setPrototypeOf(this,e.prototype)}},Ne=class e extends Error{urlTree;constructor(n){super(),this.urlTree=n,Object.setPrototypeOf(this,e.prototype)}};function Ko(e){throw new A(4e3,!1)}function Yo(e){throw ma(!1,N.GuardRejected)}var on=class{urlSerializer;urlTree;constructor(n,t){this.urlSerializer=n,this.urlTree=t}async lineralizeSegments(n,t){let i=[],r=t.root;for(;;){if(i=i.concat(r.segments),r.numberOfChildren===0)return i;if(r.numberOfChildren>1||!r.children[u])throw Ko(`${n.redirectTo}`);r=r.children[u]}}async applyRedirectCommands(n,t,i,r,a){let o=await Xo(t,r,a);if(o instanceof U)throw new Ne(o);let s=this.applyRedirectCreateUrlTree(o,this.urlSerializer.parse(o),n,i);if(o[0]==="/")throw new Ne(s);return s}applyRedirectCreateUrlTree(n,t,i,r){let a=this.createSegmentGroup(n,t.root,i,r);return new U(a,this.createQueryParams(t.queryParams,this.urlTree.queryParams),t.fragment)}createQueryParams(n,t){let i={};return Object.entries(n).forEach(([r,a])=>{if(typeof a=="string"&&a[0]===":"){let s=a.substring(1);i[r]=t[s]}else i[r]=a}),i}createSegmentGroup(n,t,i,r){let a=this.createSegments(n,t.segments,i,r),o={};return Object.entries(t.children).forEach(([s,c])=>{o[s]=this.createSegmentGroup(n,c,i,r)}),new _(a,o)}createSegments(n,t,i,r){return t.map(a=>a.path[0]===":"?this.findPosParam(n,a,r):this.findOrReturn(a,i))}findPosParam(n,t,i){let r=i[t.path.substring(1)];if(!r)throw new A(4001,!1);return r}findOrReturn(n,t){let i=0;for(let r of t){if(r.path===n.path)return t.splice(i),r;i++}return n}};function Xo(e,n,t){if(typeof e=="string")return Promise.resolve(e);let i=e;return ii(Ht(B(t,()=>i(n))))}function Jo(e,n){return e.providers&&!e._injector&&(e._injector=Ge(e.providers,n,`Route: ${e.path}`)),e._injector??n}function et(e){return e.outlet||u}function ts(e,n){let t=e.filter(i=>et(i)===n);return t.push(...e.filter(i=>et(i)!==n)),t}var sn={matched:!1,consumedSegments:[],remainingSegments:[],parameters:{},positionalParamSegments:{}};function va(e){return{routeConfig:e.routeConfig,url:e.url,params:e.params,queryParams:e.queryParams,fragment:e.fragment,data:e.data,outlet:e.outlet,title:e.title,paramMap:e.paramMap,queryParamMap:e.queryParamMap}}function es(e,n,t,i,r,a,o){let s=_a(e,n,t);if(!s.matched)return g(s);let c=va(a(s));return i=Jo(n,i),Zo(i,n,t,r,c,o).pipe(E(d=>d===!0?s:m({},sn)))}function _a(e,n,t){if(n.path==="")return n.pathMatch==="full"&&(e.hasChildren()||t.length>0)?m({},sn):{matched:!0,consumedSegments:[],remainingSegments:t,parameters:{},positionalParamSegments:{}};let r=(n.matcher||Hr)(t,e,n);if(!r)return m({},sn);let a={};Object.entries(r.posParams??{}).forEach(([s,c])=>{a[s]=c.path});let o=r.consumed.length>0?m(m({},a),r.consumed[r.consumed.length-1].parameters):a;return{matched:!0,consumedSegments:r.consumed,remainingSegments:t.slice(r.consumed.length),parameters:o,positionalParamSegments:r.posParams??{}}}function Br(e,n,t,i,r){return t.length>0&&rs(e,t,i,r)?{segmentGroup:new _(n,ns(i,new _(t,e.children))),slicedSegments:[]}:t.length===0&&as(e,t,i)?{segmentGroup:new _(e.segments,is(e,t,i,e.children)),slicedSegments:t}:{segmentGroup:new _(e.segments,e.children),slicedSegments:t}}function is(e,n,t,i){let r={};for(let a of t)if(wi(e,n,a)&&!i[et(a)]){let o=new _([],{});r[et(a)]=o}return m(m({},i),r)}function ns(e,n){let t={};t[u]=n;for(let i of e)if(i.path===""&&et(i)!==u){let r=new _([],{});t[et(i)]=r}return t}function rs(e,n,t,i){return t.some(r=>!wi(e,n,r)||!(et(r)!==u)?!1:!(i!==void 0&&et(r)===i))}function as(e,n,t){return t.some(i=>wi(e,n,i))}function wi(e,n,t){return(e.hasChildren()||n.length>0)&&t.pathMatch==="full"?!1:t.path===""}function os(e,n,t){return n.length===0&&!e.children[t]}var cn=class{};async function ss(e,n,t,i,r,a,o="emptyOnly",s){return new ln(e,n,t,i,r,o,a,s).recognize()}var cs=31,ln=class{injector;configLoader;rootComponentType;config;urlTree;paramsInheritanceStrategy;urlSerializer;abortSignal;applyRedirects;absoluteRedirectCount=0;allowRedirects=!0;constructor(n,t,i,r,a,o,s,c){this.injector=n,this.configLoader=t,this.rootComponentType=i,this.config=r,this.urlTree=a,this.paramsInheritanceStrategy=o,this.urlSerializer=s,this.abortSignal=c,this.applyRedirects=new on(this.urlSerializer,this.urlTree)}noMatchError(n){return new A(4002,`'${n.segmentGroup}'`)}async recognize(){let n=Br(this.urlTree.root,[],[],this.config).segmentGroup,{children:t,rootSnapshot:i}=await this.match(n),r=new q(i,t),a=new Oe("",r),o=ta(i,[],this.urlTree.queryParams,this.urlTree.fragment);return o.queryParams=this.urlTree.queryParams,a.url=this.urlSerializer.serialize(o),{state:a,tree:o}}async match(n){let t=new ce([],Object.freeze({}),Object.freeze(m({},this.urlTree.queryParams)),this.urlTree.fragment,Object.freeze({}),u,this.rootComponentType,null,{},this.injector);try{return{children:await this.processSegmentGroup(this.injector,this.config,n,u,t),rootSnapshot:t}}catch(i){if(i instanceof Ne)return this.urlTree=i.urlTree,this.match(i.urlTree.root);throw i instanceof _t?this.noMatchError(i):i}}async processSegmentGroup(n,t,i,r,a){if(i.segments.length===0&&i.hasChildren())return this.processChildren(n,t,i,a);let o=await this.processSegment(n,t,i,i.segments,r,!0,a);return o instanceof q?[o]:[]}async processChildren(n,t,i,r){let a=[];for(let c of Object.keys(i.children))c==="primary"?a.unshift(c):a.push(c);let o=[];for(let c of a){let d=i.children[c],h=ts(t,c),p=await this.processSegmentGroup(n,h,d,c,r);o.push(...p)}let s=ba(o);return ls(s),s}async processSegment(n,t,i,r,a,o,s){for(let c of t)try{return await this.processSegmentAgainstRoute(c._injector??n,t,c,i,r,a,o,s)}catch(d){if(d instanceof _t||ua(d))continue;throw d}if(os(i,r,a))return new cn;throw new _t(i)}async processSegmentAgainstRoute(n,t,i,r,a,o,s,c){if(et(i)!==o&&(o===u||!wi(r,a,i)))throw new _t(r);if(i.redirectTo===void 0)return this.matchSegmentAgainstRoute(n,r,i,a,o,c);if(this.allowRedirects&&s)return this.expandSegmentAgainstRouteUsingRedirect(n,r,t,i,a,o,c);throw new _t(r)}async expandSegmentAgainstRouteUsingRedirect(n,t,i,r,a,o,s){let{matched:c,parameters:d,consumedSegments:h,positionalParamSegments:p,remainingSegments:C}=_a(t,r,a);if(!c)throw new _t(t);typeof r.redirectTo=="string"&&r.redirectTo[0]==="/"&&(this.absoluteRedirectCount++,this.absoluteRedirectCount>cs&&(this.allowRedirects=!1));let Ut=this.createSnapshot(n,r,a,d,s);if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);let pt=await this.applyRedirects.applyRedirectCommands(h,r.redirectTo,p,va(Ut),n),jt=await this.applyRedirects.lineralizeSegments(r,pt);return this.processSegment(n,i,t,jt.concat(C),o,!1,s)}createSnapshot(n,t,i,r,a){let o=new ce(i,r,Object.freeze(m({},this.urlTree.queryParams)),this.urlTree.fragment,ms(t),et(t),t.component??t._loadedComponent??null,t,hs(t),n),s=hn(o,a,this.paramsInheritanceStrategy);return o.params=Object.freeze(s.params),o.data=Object.freeze(s.data),o}async matchSegmentAgainstRoute(n,t,i,r,a,o){if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);let s=Be=>this.createSnapshot(n,i,Be.consumedSegments,Be.parameters,o),c=await ii(es(t,i,r,n,this.urlSerializer,s,this.abortSignal));if(i.path==="**"&&(t.children={}),!c?.matched)throw new _t(t);n=i._injector??n;let{routes:d}=await this.getChildConfig(n,i,r),h=i._loadedInjector??n,{parameters:p,consumedSegments:C,remainingSegments:Ut}=c,pt=this.createSnapshot(n,i,C,p,o),{segmentGroup:jt,slicedSegments:ue}=Br(t,C,Ut,d,a);if(ue.length===0&&jt.hasChildren()){let Be=await this.processChildren(h,d,jt,pt);return new q(pt,Be)}if(d.length===0&&ue.length===0)return new q(pt,[]);let Ai=et(i)===a,pe=await this.processSegment(h,d,jt,ue,Ai?u:a,!0,pt);return new q(pt,pe instanceof q?[pe]:[])}async getChildConfig(n,t,i){if(t.children)return{routes:t.children,injector:n};if(t.loadChildren){if(t._loadedRoutes!==void 0){let a=t._loadedNgModuleFactory;return a&&!t._loadedInjector&&(t._loadedInjector=a.create(n).injector),{routes:t._loadedRoutes,injector:t._loadedInjector}}if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);if(await ii(Wo(n,t,i,this.urlSerializer,this.abortSignal))){let a=await this.configLoader.loadChildren(n,t);return t._loadedRoutes=a.routes,t._loadedInjector=a.injector,t._loadedNgModuleFactory=a.factory,a}throw Yo(t)}return{routes:[],injector:n}}};function ls(e){e.sort((n,t)=>n.value.outlet===u?-1:t.value.outlet===u?1:n.value.outlet.localeCompare(t.value.outlet))}function ds(e){let n=e.value.routeConfig;return n&&n.path===""}function ba(e){let n=[],t=new Set;for(let i of e){if(!ds(i)){n.push(i);continue}let r=n.find(a=>i.value.routeConfig===a.value.routeConfig);r!==void 0?(r.children.push(...i.children),t.add(r)):n.push(i)}for(let i of t){let r=ba(i.children);n.push(new q(i.value,r))}return n.filter(i=>!t.has(i))}function ms(e){return e.data||{}}function hs(e){return e.resolve||{}}function us(e,n,t,i,r,a,o){return nt(async s=>{let{state:c,tree:d}=await ss(e,n,t,i,s.extractedUrl,r,a,o);return z(m({},s),{targetSnapshot:c,urlAfterRedirects:d})})}function ps(e){return nt(n=>{let{targetSnapshot:t,guards:{canActivateChecks:i}}=n;if(!i.length)return g(n);let r=new Set(i.map(s=>s.route)),a=new Set;for(let s of r)if(!a.has(s))for(let c of wa(s))a.add(c);let o=0;return O(a).pipe(fe(s=>r.has(s)?gs(s,t,e):(s.data=hn(s,s.parent,e).resolve,g(void 0))),tt(()=>o++),Ni(1),nt(s=>o===a.size?g(n):W))})}function wa(e){let n=e.children.map(t=>wa(t)).flat();return[e,...n]}function gs(e,n,t){let i=e.routeConfig,r=e._resolve;return i?.title!==void 0&&!ca(i)&&(r[Pe]=i.title),He(()=>(e.data=hn(e,e.parent,t).resolve,fs(r,e,n).pipe(E(a=>(e._resolvedData=a,e.data=m(m({},e.data),a),null)))))}function fs(e,n,t){let i=Zi(e);if(i.length===0)return g({});let r={};return O(i).pipe(nt(a=>vs(e[a],n,t).pipe(yt(),tt(o=>{if(o instanceof le)throw vi(new bt,o);r[a]=o}))),Ni(1),E(()=>r),Ve(a=>ua(a)?W:Nn(a)))}function vs(e,n,t){let i=n._environmentInjector,r=me(e,i),a=r.resolve?r.resolve(n,t):B(i,()=>r(n,t));return Ht(a)}function $r(e){return J(n=>{let t=e(n);return t?O(t).pipe(E(()=>n)):g(n)})}var vn=(()=>{class e{buildTitle(t){let i,r=t.root;for(;r!==void 0;)i=this.getResolvedTitleForRoute(r)??i,r=r.children.find(a=>a.outlet===u);return i}getResolvedTitleForRoute(t){return t.data[Pe]}static \u0275fac=function(i){return new(i||e)};static \u0275prov=R({token:e,factory:()=>l(ya),providedIn:"root"})}return e})(),ya=(()=>{class e extends vn{title;constructor(t){super(),this.title=t}updateTitle(t){let i=this.buildTitle(t);i!==void 0&&this.title.setTitle(i)}static \u0275fac=function(i){return new(i||e)(xt(ur))};static \u0275prov=R({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})(),Pt=new y("",{factory:()=>({})}),Qt=new y(""),yi=(()=>{class e{componentLoaders=new WeakMap;childrenLoaders=new WeakMap;onLoadStartListener;onLoadEndListener;compiler=l(ir);async loadComponent(t,i){if(this.componentLoaders.get(i))return this.componentLoaders.get(i);if(i._loadedComponent)return Promise.resolve(i._loadedComponent);this.onLoadStartListener&&this.onLoadStartListener(i);let r=(async()=>{try{let a=await Vr(B(t,()=>i.loadComponent())),o=await Ca(ka(a));return this.onLoadEndListener&&this.onLoadEndListener(i),i._loadedComponent=o,o}finally{this.componentLoaders.delete(i)}})();return this.componentLoaders.set(i,r),r}loadChildren(t,i){if(this.childrenLoaders.get(i))return this.childrenLoaders.get(i);if(i._loadedRoutes)return Promise.resolve({routes:i._loadedRoutes,injector:i._loadedInjector});this.onLoadStartListener&&this.onLoadStartListener(i);let r=(async()=>{try{let a=await xa(i,this.compiler,t,this.onLoadEndListener);return i._loadedRoutes=a.routes,i._loadedInjector=a.injector,i._loadedNgModuleFactory=a.factory,a}finally{this.childrenLoaders.delete(i)}})();return this.childrenLoaders.set(i,r),r}static \u0275fac=function(i){return new(i||e)};static \u0275prov=R({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();async function xa(e,n,t,i){let r=await Vr(B(t,()=>e.loadChildren())),a=await Ca(ka(r)),o;a instanceof Xn||Array.isArray(a)?o=a:o=await n.compileModuleAsync(a),i&&i(e);let s,c,d=!1,h;return Array.isArray(o)?(c=o,d=!0):(s=o.create(t).injector,h=o,c=s.get(Qt,[],{optional:!0,self:!0}).flat()),{routes:c.map(fn),injector:s,factory:h}}function _s(e){return e&&typeof e=="object"&&"default"in e}function ka(e){return _s(e)?e.default:e}async function Ca(e){return e}var xi=(()=>{class e{static \u0275fac=function(i){return new(i||e)};static \u0275prov=R({token:e,factory:()=>l(bs),providedIn:"root"})}return e})(),bs=(()=>{class e{shouldProcessUrl(t){return!0}extract(t){return t}merge(t,i){return t}static \u0275fac=function(i){return new(i||e)};static \u0275prov=R({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})(),_n=new y(""),bn=new y("");function Ra(e,n,t){let i=e.get(bn),r=e.get(Gt);if(!r.startViewTransition||i.skipNextTransition)return i.skipNextTransition=!1,new Promise(d=>setTimeout(d));let a,o=new Promise(d=>{a=d}),s=r.startViewTransition(()=>(a(),ws(e)));s.updateCallbackDone.catch(d=>{}),s.ready.catch(d=>{}),s.finished.catch(d=>{});let{onViewTransitionCreated:c}=i;return c&&B(e,()=>c({transition:s,from:n,to:t})),o}function ws(e){return new Promise(n=>{Zt({read:()=>setTimeout(n)},{injector:e})})}var ys=()=>{},wn=new y(""),ki=(()=>{class e{currentNavigation=b(null,{equal:()=>!1});currentTransition=null;lastSuccessfulNavigation=b(null);events=new T;transitionAbortWithErrorSubject=new T;configLoader=l(yi);environmentInjector=l(gt);destroyRef=l(Pi);urlSerializer=l(Nt);rootContexts=l(qt);location=l(Xt);inputBindingEnabled=l(Ue,{optional:!0})!==null;titleStrategy=l(vn);options=l(Pt,{optional:!0})||{};paramsInheritanceStrategy=this.options.paramsInheritanceStrategy||"emptyOnly";urlHandlingStrategy=l(xi);createViewTransition=l(_n,{optional:!0});navigationErrorHandler=l(wn,{optional:!0});navigationId=0;get hasRequestedNavigation(){return this.navigationId!==0}transitions;afterPreactivation=()=>g(void 0);rootComponentType=null;destroyed=!1;constructor(){let t=r=>this.events.next(new li(r)),i=r=>this.events.next(new di(r));this.configLoader.onLoadEndListener=i,this.configLoader.onLoadStartListener=t,this.destroyRef.onDestroy(()=>{this.destroyed=!0})}complete(){this.transitions?.complete()}handleNavigationRequest(t){let i=++this.navigationId;k(()=>{this.transitions?.next(z(m({},t),{extractedUrl:this.urlHandlingStrategy.extract(t.rawUrl),targetSnapshot:null,targetRouterState:null,guards:{canActivateChecks:[],canDeactivateChecks:[]},guardsResult:null,id:i,routesRecognizeHandler:{},beforeActivateHandler:{}}))})}setupNavigations(t){return this.transitions=new G(null),this.transitions.pipe(F(i=>i!==null),J(i=>{let r=!1,a=new AbortController,o=()=>!r&&this.currentTransition?.id===i.id;return g(i).pipe(J(s=>{if(this.navigationId>i.id)return this.cancelNavigationTransition(i,"",N.SupersededByNewNavigation),W;this.currentTransition=i;let c=this.lastSuccessfulNavigation();this.currentNavigation.set({id:s.id,initialUrl:s.rawUrl,extractedUrl:s.extractedUrl,targetBrowserUrl:typeof s.extras.browserUrl=="string"?this.urlSerializer.parse(s.extras.browserUrl):s.extras.browserUrl,trigger:s.source,extras:s.extras,previousNavigation:c?z(m({},c),{previousNavigation:null}):null,abort:()=>a.abort(),routesRecognizeHandler:s.routesRecognizeHandler,beforeActivateHandler:s.beforeActivateHandler});let d=!t.navigated||this.isUpdatingInternalState()||this.isUpdatedBrowserUrl(),h=s.extras.onSameUrlNavigation??t.onSameUrlNavigation;if(!d&&h!=="reload")return this.events.next(new ht(s.id,this.urlSerializer.serialize(s.rawUrl),"",re.IgnoredSameUrlNavigation)),s.resolve(!1),W;if(this.urlHandlingStrategy.shouldProcessUrl(s.rawUrl))return g(s).pipe(J(p=>(this.events.next(new Lt(p.id,this.urlSerializer.serialize(p.extractedUrl),p.source,p.restoredState)),p.id!==this.navigationId?W:Promise.resolve(p))),us(this.environmentInjector,this.configLoader,this.rootComponentType,t.config,this.urlSerializer,this.paramsInheritanceStrategy,a.signal),tt(p=>{i.targetSnapshot=p.targetSnapshot,i.urlAfterRedirects=p.urlAfterRedirects,this.currentNavigation.update(C=>(C.finalUrl=p.urlAfterRedirects,C)),this.events.next(new Ae)}),J(p=>O(i.routesRecognizeHandler.deferredHandle??g(void 0)).pipe(E(()=>p))),tt(()=>{let p=new Ee(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);this.events.next(p)}));if(d&&this.urlHandlingStrategy.shouldProcessUrl(s.currentRawUrl)){let{id:p,extractedUrl:C,source:Ut,restoredState:pt,extras:jt}=s,ue=new Lt(p,this.urlSerializer.serialize(C),Ut,pt);this.events.next(ue);let Ai=oa(this.rootComponentType,this.environmentInjector).snapshot;return this.currentTransition=i=z(m({},s),{targetSnapshot:Ai,urlAfterRedirects:C,extras:z(m({},jt),{skipLocationChange:!1,replaceUrl:!1})}),this.currentNavigation.update(pe=>(pe.finalUrl=C,pe)),g(i)}else return this.events.next(new ht(s.id,this.urlSerializer.serialize(s.extractedUrl),"",re.IgnoredByUrlHandlingStrategy)),s.resolve(!1),W}),E(s=>{let c=new ai(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);return this.events.next(c),this.currentTransition=i=z(m({},s),{guards:Io(s.targetSnapshot,s.currentSnapshot,this.rootContexts)}),i}),Fo(s=>this.events.next(s)),J(s=>{if(i.guardsResult=s.guardsResult,s.guardsResult&&typeof s.guardsResult!="boolean")throw vi(this.urlSerializer,s.guardsResult);let c=new oi(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot,!!s.guardsResult);if(this.events.next(c),!o())return W;if(!s.guardsResult)return this.cancelNavigationTransition(s,"",N.GuardRejected),W;if(s.guards.canActivateChecks.length===0)return g(s);let d=new si(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);if(this.events.next(d),!o())return W;let h=!1;return g(s).pipe(ps(this.paramsInheritanceStrategy),tt({next:()=>{h=!0;let p=new ci(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);this.events.next(p)},complete:()=>{h||this.cancelNavigationTransition(s,"",N.NoDataFromResolver)}}))}),$r(s=>{let c=h=>{let p=[];if(h.routeConfig?._loadedComponent)h.component=h.routeConfig?._loadedComponent;else if(h.routeConfig?.loadComponent){let C=h._environmentInjector;p.push(this.configLoader.loadComponent(C,h.routeConfig).then(Ut=>{h.component=Ut}))}for(let C of h.children)p.push(...c(C));return p},d=c(s.targetSnapshot.root);return d.length===0?g(s):O(Promise.all(d).then(()=>s))}),$r(()=>this.afterPreactivation()),J(()=>{let{currentSnapshot:s,targetSnapshot:c}=i,d=this.createViewTransition?.(this.environmentInjector,s.root,c.root);return d?O(d).pipe(E(()=>i)):g(i)}),wt(1),J(s=>{let c=Ro(t.routeReuseStrategy,s.targetSnapshot,s.currentRouterState);this.currentTransition=i=s=z(m({},s),{targetRouterState:c}),this.currentNavigation.update(h=>(h.targetRouterState=c,h)),this.events.next(new oe);let d=i.beforeActivateHandler.deferredHandle;return d?O(d.then(()=>s)):g(s)}),tt(s=>{new an(t.routeReuseStrategy,i.targetRouterState,i.currentRouterState,c=>this.events.next(c),this.inputBindingEnabled).activate(this.rootContexts),o()&&(r=!0,this.currentNavigation.update(c=>(c.abort=ys,c)),this.lastSuccessfulNavigation.set(k(this.currentNavigation)),this.events.next(new Q(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects))),this.titleStrategy?.updateTitle(s.targetRouterState.snapshot),s.resolve(!0))}),j(pa(a.signal).pipe(F(()=>!r&&!i.targetRouterState),tt(()=>{this.cancelNavigationTransition(i,a.signal.reason+"",N.Aborted)}))),tt({complete:()=>{r=!0}}),j(this.transitionAbortWithErrorSubject.pipe(tt(s=>{throw s}))),zn(()=>{a.abort(),r||this.cancelNavigationTransition(i,"",N.SupersededByNewNavigation),this.currentTransition?.id===i.id&&(this.currentNavigation.set(null),this.currentTransition=null)}),Ve(s=>{if(r=!0,this.destroyed)return i.resolve(!1),W;if(ha(s))this.events.next(new X(i.id,this.urlSerializer.serialize(i.extractedUrl),s.message,s.cancellationCode)),Do(s)?this.events.next(new se(s.url,s.navigationBehaviorOptions)):i.resolve(!1);else{let c=new Bt(i.id,this.urlSerializer.serialize(i.extractedUrl),s,i.targetSnapshot??void 0);try{let d=B(this.environmentInjector,()=>this.navigationErrorHandler?.(c));if(d instanceof le){let{message:h,cancellationCode:p}=vi(this.urlSerializer,d);this.events.next(new X(i.id,this.urlSerializer.serialize(i.extractedUrl),h,p)),this.events.next(new se(d.redirectTo,d.navigationBehaviorOptions))}else throw this.events.next(c),s}catch(d){this.options.resolveNavigationPromiseOnError?i.resolve(!1):i.reject(d)}}return W}))}))}cancelNavigationTransition(t,i,r){let a=new X(t.id,this.urlSerializer.serialize(t.extractedUrl),i,r);this.events.next(a),t.resolve(!1)}isUpdatingInternalState(){return this.currentTransition?.extractedUrl.toString()!==this.currentTransition?.currentUrlTree.toString()}isUpdatedBrowserUrl(){let t=this.urlHandlingStrategy.extract(this.urlSerializer.parse(this.location.path(!0))),i=k(this.currentNavigation),r=i?.targetBrowserUrl??i?.extractedUrl;return t.toString()!==r?.toString()&&!i?.extras.skipLocationChange}static \u0275fac=function(i){return new(i||e)};static \u0275prov=R({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();function xs(e){return e!==ie}var Sa=new y("");var Ma=(()=>{class e{static \u0275fac=function(i){return new(i||e)};static \u0275prov=R({token:e,factory:()=>l(ks),providedIn:"root"})}return e})(),bi=class{shouldDetach(n){return!1}store(n,t){}shouldAttach(n){return!1}retrieve(n){return null}shouldReuseRoute(n,t){return n.routeConfig===t.routeConfig}shouldDestroyInjector(n){return!0}},ks=(()=>{class e extends bi{static \u0275fac=(()=>{let t;return function(r){return(t||(t=K(e)))(r||e)}})();static \u0275prov=R({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})(),Ci=(()=>{class e{urlSerializer=l(Nt);options=l(Pt,{optional:!0})||{};canceledNavigationResolution=this.options.canceledNavigationResolution||"replace";location=l(Xt);urlHandlingStrategy=l(xi);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";currentUrlTree=new U;getCurrentUrlTree(){return this.currentUrlTree}rawUrlTree=this.currentUrlTree;getRawUrlTree(){return this.rawUrlTree}createBrowserPath({finalUrl:t,initialUrl:i,targetBrowserUrl:r}){let a=t!==void 0?this.urlHandlingStrategy.merge(t,i):i,o=r??a;return o instanceof U?this.urlSerializer.serialize(o):o}routerUrlState(t){return t?.targetBrowserUrl===void 0||t?.finalUrl===void 0?{}:{\u0275routerUrl:this.urlSerializer.serialize(t.finalUrl)}}commitTransition({targetRouterState:t,finalUrl:i,initialUrl:r}){i&&t?(this.currentUrlTree=i,this.rawUrlTree=this.urlHandlingStrategy.merge(i,r),this.routerState=t):this.rawUrlTree=r}routerState=oa(null,l(gt));getRouterState(){return this.routerState}_stateMemento=this.createStateMemento();get stateMemento(){return this._stateMemento}updateStateMemento(){this._stateMemento=this.createStateMemento()}createStateMemento(){return{rawUrlTree:this.rawUrlTree,currentUrlTree:this.currentUrlTree,routerState:this.routerState}}restoredState(){return this.location.getState()}static \u0275fac=function(i){return new(i||e)};static \u0275prov=R({token:e,factory:()=>l(Cs),providedIn:"root"})}return e})(),Cs=(()=>{class e extends Ci{currentPageId=0;lastSuccessfulId=-1;get browserPageId(){return this.canceledNavigationResolution!=="computed"?this.currentPageId:this.restoredState()?.\u0275routerPageId??this.currentPageId}registerNonRouterCurrentEntryChangeListener(t){return this.location.subscribe(i=>{i.type==="popstate"&&setTimeout(()=>{t(i.url,i.state,"popstate",{replaceUrl:!0})})})}handleRouterEvent(t,i){t instanceof Lt?this.updateStateMemento():t instanceof ht?this.commitTransition(i):t instanceof Ee?this.urlUpdateStrategy==="eager"&&(i.extras.skipLocationChange||this.setBrowserUrl(this.createBrowserPath(i),i)):t instanceof oe?(this.commitTransition(i),this.urlUpdateStrategy==="deferred"&&!i.extras.skipLocationChange&&this.setBrowserUrl(this.createBrowserPath(i),i)):t instanceof X&&!aa(t)?this.restoreHistory(i):t instanceof Bt?this.restoreHistory(i,!0):t instanceof Q&&(this.lastSuccessfulId=t.id,this.currentPageId=this.browserPageId)}setBrowserUrl(t,i){let{extras:r,id:a}=i,{replaceUrl:o,state:s}=r;if(this.location.isCurrentPathEqualTo(t)||o){let c=this.browserPageId,d=m(m({},s),this.generateNgRouterState(a,c,i));this.location.replaceState(t,"",d)}else{let c=m(m({},s),this.generateNgRouterState(a,this.browserPageId+1,i));this.location.go(t,"",c)}}restoreHistory(t,i=!1){if(this.canceledNavigationResolution==="computed"){let r=this.browserPageId,a=this.currentPageId-r;a!==0?this.location.historyGo(a):this.getCurrentUrlTree()===t.finalUrl&&a===0&&(this.resetInternalState(t),this.resetUrlToCurrentUrlTree())}else this.canceledNavigationResolution==="replace"&&(i&&this.resetInternalState(t),this.resetUrlToCurrentUrlTree())}resetInternalState({finalUrl:t}){this.routerState=this.stateMemento.routerState,this.currentUrlTree=this.stateMemento.currentUrlTree,this.rawUrlTree=this.urlHandlingStrategy.merge(this.currentUrlTree,t??this.rawUrlTree)}resetUrlToCurrentUrlTree(){this.location.replaceState(this.urlSerializer.serialize(this.getRawUrlTree()),"",this.generateNgRouterState(this.lastSuccessfulId,this.currentPageId))}generateNgRouterState(t,i,r){return this.canceledNavigationResolution==="computed"?m({navigationId:t,\u0275routerPageId:i},this.routerUrlState(r)):m({navigationId:t},this.routerUrlState(r))}static \u0275fac=(()=>{let t;return function(r){return(t||(t=K(e)))(r||e)}})();static \u0275prov=R({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();function Ri(e,n){e.events.pipe(F(t=>t instanceof Q||t instanceof X||t instanceof Bt||t instanceof ht),E(t=>t instanceof Q||t instanceof ht?0:(t instanceof X?t.code===N.Redirect||t.code===N.SupersededByNewNavigation:!1)?2:1),F(t=>t!==2),wt(1)).subscribe(()=>{n()})}var it=(()=>{class e{get currentUrlTree(){return this.stateManager.getCurrentUrlTree()}get rawUrlTree(){return this.stateManager.getRawUrlTree()}disposed=!1;nonRouterCurrentEntryChangeSubscription;console=l(Jn);stateManager=l(Ci);options=l(Pt,{optional:!0})||{};pendingTasks=l(Hn);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";navigationTransitions=l(ki);urlSerializer=l(Nt);location=l(Xt);urlHandlingStrategy=l(xi);injector=l(gt);_events=new T;get events(){return this._events}get routerState(){return this.stateManager.getRouterState()}navigated=!1;routeReuseStrategy=l(Ma);injectorCleanup=l(Sa,{optional:!0});onSameUrlNavigation=this.options.onSameUrlNavigation||"ignore";config=l(Qt,{optional:!0})?.flat()??[];componentInputBindingEnabled=!!l(Ue,{optional:!0});currentNavigation=this.navigationTransitions.currentNavigation.asReadonly();constructor(){this.resetConfig(this.config),this.navigationTransitions.setupNavigations(this).subscribe({error:t=>{}}),this.subscribeToNavigationEvents()}eventsSubscription=new $e;subscribeToNavigationEvents(){let t=this.navigationTransitions.events.subscribe(i=>{try{let r=this.navigationTransitions.currentTransition,a=k(this.navigationTransitions.currentNavigation);if(r!==null&&a!==null){if(this.stateManager.handleRouterEvent(i,a),i instanceof X&&i.code!==N.Redirect&&i.code!==N.SupersededByNewNavigation)this.navigated=!0;else if(i instanceof Q)this.navigated=!0,this.injectorCleanup?.(this.routeReuseStrategy,this.routerState,this.config);else if(i instanceof se){let o=i.navigationBehaviorOptions,s=this.urlHandlingStrategy.merge(i.url,r.currentRawUrl),c=m({scroll:r.extras.scroll,browserUrl:r.extras.browserUrl,info:r.extras.info,skipLocationChange:r.extras.skipLocationChange,replaceUrl:r.extras.replaceUrl||this.urlUpdateStrategy==="eager"||xs(r.source)},o);this.scheduleNavigation(s,ie,null,c,{resolve:r.resolve,reject:r.reject,promise:r.promise})}}ko(i)&&this._events.next(i)}catch(r){this.navigationTransitions.transitionAbortWithErrorSubject.next(r)}});this.eventsSubscription.add(t)}resetRootComponentType(t){this.routerState.root.component=t,this.navigationTransitions.rootComponentType=t}initialNavigation(){this.setUpLocationChangeListener(),this.navigationTransitions.hasRequestedNavigation||this.navigateToSyncWithBrowser(this.location.path(!0),ie,this.stateManager.restoredState(),{replaceUrl:!0})}setUpLocationChangeListener(){this.nonRouterCurrentEntryChangeSubscription??=this.stateManager.registerNonRouterCurrentEntryChangeListener((t,i,r,a)=>{this.navigateToSyncWithBrowser(t,r,i,a)})}navigateToSyncWithBrowser(t,i,r,a){let o=r?.navigationId?r:null,s=r?.\u0275routerUrl??t;if(r?.\u0275routerUrl&&(a=z(m({},a),{browserUrl:t})),r){let d=m({},r);delete d.navigationId,delete d.\u0275routerPageId,delete d.\u0275routerUrl,Object.keys(d).length!==0&&(a.state=d)}let c=this.parseUrl(s);this.scheduleNavigation(c,i,o,a).catch(d=>{this.disposed||this.injector.get(Qe)(d)})}get url(){return this.serializeUrl(this.currentUrlTree)}getCurrentNavigation(){return k(this.navigationTransitions.currentNavigation)}get lastSuccessfulNavigation(){return this.navigationTransitions.lastSuccessfulNavigation}resetConfig(t){this.config=t.map(fn),this.navigated=!1}ngOnDestroy(){this.dispose()}dispose(){this._events.unsubscribe(),this.navigationTransitions.complete(),this.nonRouterCurrentEntryChangeSubscription?.unsubscribe(),this.nonRouterCurrentEntryChangeSubscription=void 0,this.disposed=!0,this.eventsSubscription.unsubscribe()}createUrlTree(t,i={}){let{relativeTo:r,queryParams:a,fragment:o,queryParamsHandling:s,preserveFragment:c}=i,d=c?this.currentUrlTree.fragment:o,h=null;switch(s??this.options.defaultQueryParamsHandling){case"merge":h=m(m({},this.currentUrlTree.queryParams),a);break;case"preserve":h=this.currentUrlTree.queryParams;break;default:h=a||null}h!==null&&(h=this.removeEmptyProps(h));let p;try{let C=r?r.snapshot:this.routerState.snapshot.root;p=ea(C)}catch{(typeof t[0]!="string"||t[0][0]!=="/")&&(t=[]),p=this.currentUrlTree.root}return ia(p,t,h,d??null,this.urlSerializer)}navigateByUrl(t,i={skipLocationChange:!1}){let r=Ot(t)?t:this.parseUrl(t),a=this.urlHandlingStrategy.merge(r,this.rawUrlTree);return this.scheduleNavigation(a,ie,null,i)}navigate(t,i={skipLocationChange:!1}){return Rs(t),this.navigateByUrl(this.createUrlTree(t,i),i)}serializeUrl(t){return this.urlSerializer.serialize(t)}parseUrl(t){try{return this.urlSerializer.parse(t)}catch{return this.console.warn(Fn(4018,!1)),this.urlSerializer.parse("/")}}isActive(t,i){let r;if(i===!0?r=m({},dn):i===!1?r=m({},De):r=m(m({},De),i),Ot(t))return Ki(this.currentUrlTree,t,r);let a=this.parseUrl(t);return Ki(this.currentUrlTree,a,r)}removeEmptyProps(t){return Object.entries(t).reduce((i,[r,a])=>(a!=null&&(i[r]=a),i),{})}scheduleNavigation(t,i,r,a,o){if(this.disposed)return Promise.resolve(!1);let s,c,d;o?(s=o.resolve,c=o.reject,d=o.promise):d=new Promise((p,C)=>{s=p,c=C});let h=this.pendingTasks.add();return Ri(this,()=>{queueMicrotask(()=>this.pendingTasks.remove(h))}),this.navigationTransitions.handleNavigationRequest({source:i,restoredState:r,currentUrlTree:this.currentUrlTree,currentRawUrl:this.currentUrlTree,rawUrl:t,extras:a,resolve:s,reject:c,promise:d,currentSnapshot:this.routerState.snapshot,currentRouterState:this.routerState}),d.catch(Promise.reject.bind(Promise))}static \u0275fac=function(i){return new(i||e)};static \u0275prov=R({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();function Rs(e){for(let n=0;n<e.length;n++)if(e[n]==null)throw new A(4008,!1)}var Ss=(()=>{class e{router=l(it);stateManager=l(Ci);fragment=b("");queryParams=b({});path=b("");serializer=l(Nt);constructor(){this.updateState(),this.router.events?.subscribe(t=>{t instanceof Q&&this.updateState()})}updateState(){let{fragment:t,root:i,queryParams:r}=this.stateManager.getCurrentUrlTree();this.fragment.set(t),this.queryParams.set(r),this.path.set(this.serializer.serialize(new U(i)))}static \u0275fac=function(i){return new(i||e)};static \u0275prov=R({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})(),he=(()=>{class e{router;route;tabIndexAttribute;renderer;el;locationStrategy;hrefAttributeValue=l(new ar("href"),{optional:!0});reactiveHref=rr(()=>this.isAnchorElement?this.computeHref(this._urlTree()):this.hrefAttributeValue);get href(){return k(this.reactiveHref)}set href(t){this.reactiveHref.set(t)}set target(t){this._target.set(t)}get target(){return k(this._target)}_target=b(void 0);set queryParams(t){this._queryParams.set(t)}get queryParams(){return k(this._queryParams)}_queryParams=b(void 0,{equal:()=>!1});set fragment(t){this._fragment.set(t)}get fragment(){return k(this._fragment)}_fragment=b(void 0);set queryParamsHandling(t){this._queryParamsHandling.set(t)}get queryParamsHandling(){return k(this._queryParamsHandling)}_queryParamsHandling=b(void 0);set state(t){this._state.set(t)}get state(){return k(this._state)}_state=b(void 0,{equal:()=>!1});set info(t){this._info.set(t)}get info(){return k(this._info)}_info=b(void 0,{equal:()=>!1});set relativeTo(t){this._relativeTo.set(t)}get relativeTo(){return k(this._relativeTo)}_relativeTo=b(void 0);set preserveFragment(t){this._preserveFragment.set(t)}get preserveFragment(){return k(this._preserveFragment)}_preserveFragment=b(!1);set skipLocationChange(t){this._skipLocationChange.set(t)}get skipLocationChange(){return k(this._skipLocationChange)}_skipLocationChange=b(!1);set replaceUrl(t){this._replaceUrl.set(t)}get replaceUrl(){return k(this._replaceUrl)}_replaceUrl=b(!1);isAnchorElement;onChanges=new T;applicationErrorHandler=l(Qe);options=l(Pt,{optional:!0});reactiveRouterState=l(Ss);constructor(t,i,r,a,o,s){this.router=t,this.route=i,this.tabIndexAttribute=r,this.renderer=a,this.el=o,this.locationStrategy=s;let c=o.nativeElement.tagName?.toLowerCase();this.isAnchorElement=c==="a"||c==="area"||!!(typeof customElements=="object"&&customElements.get(c)?.observedAttributes?.includes?.("href"))}setTabIndexIfNotOnNativeEl(t){this.tabIndexAttribute!=null||this.isAnchorElement||this.applyAttributeValue("tabindex",t)}ngOnChanges(t){this.onChanges.next(this)}routerLinkInput=b(null);set routerLink(t){t==null?(this.routerLinkInput.set(null),this.setTabIndexIfNotOnNativeEl(null)):(Ot(t)?this.routerLinkInput.set(t):this.routerLinkInput.set(Array.isArray(t)?t:[t]),this.setTabIndexIfNotOnNativeEl("0"))}onClick(t,i,r,a,o){let s=this._urlTree();if(s===null||this.isAnchorElement&&(t!==0||i||r||a||o||typeof this.target=="string"&&this.target!="_self"))return!0;let c={skipLocationChange:this.skipLocationChange,replaceUrl:this.replaceUrl,state:this.state,info:this.info};return this.router.navigateByUrl(s,c)?.catch(d=>{this.applicationErrorHandler(d)}),!this.isAnchorElement}ngOnDestroy(){}applyAttributeValue(t,i){let r=this.renderer,a=this.el.nativeElement;i!==null?r.setAttribute(a,t,i):r.removeAttribute(a,t)}_urlTree=Yt(()=>{this.reactiveRouterState.path(),this._preserveFragment()&&this.reactiveRouterState.fragment();let t=r=>r==="preserve"||r==="merge";(t(this._queryParamsHandling())||t(this.options?.defaultQueryParamsHandling))&&this.reactiveRouterState.queryParams();let i=this.routerLinkInput();return i===null||!this.router.createUrlTree?null:Ot(i)?i:this.router.createUrlTree(i,{relativeTo:this._relativeTo()!==void 0?this._relativeTo():this.route,queryParams:this._queryParams(),fragment:this._fragment(),queryParamsHandling:this._queryParamsHandling(),preserveFragment:this._preserveFragment()})},{equal:(t,i)=>this.computeHref(t)===this.computeHref(i)});get urlTree(){return k(this._urlTree)}computeHref(t){return t!==null&&this.locationStrategy?this.locationStrategy?.prepareExternalUrl(this.router.serializeUrl(t))??"":null}static \u0275fac=function(i){return new(i||e)(at(it),at(ut),qn("tabindex"),at(Kt),at($),at(xe))};static \u0275dir=L({type:e,selectors:[["","routerLink",""]],hostVars:2,hostBindings:function(i,r){i&1&&lt("click",function(o){return r.onClick(o.button,o.ctrlKey,o.shiftKey,o.altKey,o.metaKey)}),i&2&&ct("href",r.reactiveHref(),Wn)("target",r._target())},inputs:{target:"target",queryParams:"queryParams",fragment:"fragment",queryParamsHandling:"queryParamsHandling",state:"state",info:"info",relativeTo:"relativeTo",preserveFragment:[2,"preserveFragment","preserveFragment",Ze],skipLocationChange:[2,"skipLocationChange","skipLocationChange",Ze],replaceUrl:[2,"replaceUrl","replaceUrl",Ze],routerLink:"routerLink"},features:[Wt]})}return e})(),xn=(()=>{class e{router;element;renderer;cdr;links;classes=[];routerEventsSubscription;linkInputChangesSubscription;_isActive=!1;get isActive(){return this._isActive}routerLinkActiveOptions={exact:!1};ariaCurrentWhenActive;isActiveChange=new Z;link=l(he,{optional:!0});constructor(t,i,r,a){this.router=t,this.element=i,this.renderer=r,this.cdr=a,this.routerEventsSubscription=t.events.subscribe(o=>{o instanceof Q&&this.update()})}ngAfterContentInit(){g(this.links.changes,g(null)).pipe(ge()).subscribe(t=>{this.update(),this.subscribeToEachLinkOnChanges()})}subscribeToEachLinkOnChanges(){this.linkInputChangesSubscription?.unsubscribe();let t=[...this.links.toArray(),this.link].filter(i=>!!i).map(i=>i.onChanges);this.linkInputChangesSubscription=O(t).pipe(ge()).subscribe(i=>{this._isActive!==this.isLinkActive(this.router)(i)&&this.update()})}set routerLinkActive(t){let i=Array.isArray(t)?t:t.split(" ");this.classes=i.filter(r=>!!r)}ngOnChanges(t){this.update()}ngOnDestroy(){this.routerEventsSubscription.unsubscribe(),this.linkInputChangesSubscription?.unsubscribe()}update(){!this.links||!this.router.navigated||queueMicrotask(()=>{let t=this.hasActiveLinks();this.classes.forEach(i=>{t?this.renderer.addClass(this.element.nativeElement,i):this.renderer.removeClass(this.element.nativeElement,i)}),t&&this.ariaCurrentWhenActive!==void 0?this.renderer.setAttribute(this.element.nativeElement,"aria-current",this.ariaCurrentWhenActive.toString()):this.renderer.removeAttribute(this.element.nativeElement,"aria-current"),this._isActive!==t&&(this._isActive=t,this.cdr.markForCheck(),this.isActiveChange.emit(t))})}isLinkActive(t){let i=Ms(this.routerLinkActiveOptions)?this.routerLinkActiveOptions:this.routerLinkActiveOptions.exact??!1?m({},dn):m({},De);return r=>{let a=r.urlTree;return a?k(mn(a,t,i)):!1}}hasActiveLinks(){let t=this.isLinkActive(this.router);return this.link&&t(this.link)||this.links.some(t)}static \u0275fac=function(i){return new(i||e)(at(it),at($),at(Kt),at(vt))};static \u0275dir=L({type:e,selectors:[["","routerLinkActive",""]],contentQueries:function(i,r,a){if(i&1&&dt(a,he,5),i&2){let o;M(o=D())&&(r.links=o)}},inputs:{routerLinkActiveOptions:"routerLinkActiveOptions",ariaCurrentWhenActive:"ariaCurrentWhenActive",routerLinkActive:"routerLinkActive"},outputs:{isActiveChange:"isActiveChange"},exportAs:["routerLinkActive"],features:[Wt]})}return e})();function Ms(e){let n=e;return!!(n.paths||n.matrixParams||n.queryParams||n.fragment)}var ze=class{};var Da=(()=>{class e{router;injector;preloadingStrategy;loader;subscription;constructor(t,i,r,a){this.router=t,this.injector=i,this.preloadingStrategy=r,this.loader=a}setUpPreloading(){this.subscription=this.router.events.pipe(F(t=>t instanceof Q),fe(()=>this.preload())).subscribe(()=>{})}preload(){return this.processRoutes(this.injector,this.router.config)}ngOnDestroy(){this.subscription?.unsubscribe()}processRoutes(t,i){let r=[];for(let a of i){a.providers&&!a._injector&&(a._injector=Ge(a.providers,t,""));let o=a._injector??t;a._loadedNgModuleFactory&&!a._loadedInjector&&(a._loadedInjector=a._loadedNgModuleFactory.create(o).injector);let s=a._loadedInjector??o;(a.loadChildren&&!a._loadedRoutes&&a.canLoad===void 0||a.loadComponent&&!a._loadedComponent)&&r.push(this.preloadConfig(o,a)),(a.children||a._loadedRoutes)&&r.push(this.processRoutes(s,a.children??a._loadedRoutes))}return O(r).pipe(ge())}preloadConfig(t,i){return this.preloadingStrategy.preload(i,()=>{if(t.destroyed)return g(null);let r;i.loadChildren&&i.canLoad===void 0?r=O(this.loader.loadChildren(t,i)):r=g(null);let a=r.pipe(nt(o=>o===null?g(void 0):(i._loadedRoutes=o.routes,i._loadedInjector=o.injector,i._loadedNgModuleFactory=o.factory,this.processRoutes(o.injector??t,o.routes))));if(i.loadComponent&&!i._loadedComponent){let o=this.loader.loadComponent(t,i);return O([a,o]).pipe(ge())}else return a})}static \u0275fac=function(i){return new(i||e)(xt(it),xt(gt),xt(ze),xt(yi))};static \u0275prov=R({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})(),Ia=new y(""),Ds=(()=>{class e{options;routerEventsSubscription;scrollEventsSubscription;lastId=0;lastSource=ie;restoredId=0;store={};isHydrating=l(Qn,{optional:!0})??!1;urlSerializer=l(Nt);zone=l(Ct);viewportScroller=l($i);transitions=l(ki);constructor(t){this.options=t,this.options.scrollPositionRestoration||="disabled",this.options.anchorScrolling||="disabled",this.isHydrating&&l(zi).whenStable().then(()=>{this.isHydrating=!1})}init(){this.options.scrollPositionRestoration!=="disabled"&&this.viewportScroller.setHistoryScrollRestoration("manual"),this.routerEventsSubscription=this.createScrollEvents(),this.scrollEventsSubscription=this.consumeScrollEvents()}createScrollEvents(){return this.transitions.events.subscribe(t=>{t instanceof Lt?(this.store[this.lastId]=this.viewportScroller.getScrollPosition(),this.lastSource=t.navigationTrigger,this.restoredId=t.restoredState?t.restoredState.navigationId:0):t instanceof Q?(this.lastId=t.id,this.scheduleScrollEvent(t,this.urlSerializer.parse(t.urlAfterRedirects).fragment)):t instanceof ht&&t.code===re.IgnoredSameUrlNavigation&&(this.lastSource=void 0,this.restoredId=0,this.scheduleScrollEvent(t,this.urlSerializer.parse(t.url).fragment))})}consumeScrollEvents(){return this.transitions.events.subscribe(t=>{if(!(t instanceof ae)||t.scrollBehavior==="manual")return;let i={behavior:"instant"};t.position?this.options.scrollPositionRestoration==="top"?this.viewportScroller.scrollToPosition([0,0],i):this.options.scrollPositionRestoration==="enabled"&&this.viewportScroller.scrollToPosition(t.position,i):t.anchor&&this.options.anchorScrolling==="enabled"?this.viewportScroller.scrollToAnchor(t.anchor):this.options.scrollPositionRestoration!=="disabled"&&this.viewportScroller.scrollToPosition([0,0])})}scheduleScrollEvent(t,i){if(this.isHydrating)return;let r=k(this.transitions.currentNavigation)?.extras.scroll;this.zone.runOutsideAngular(async()=>{await new Promise(a=>{setTimeout(a),typeof requestAnimationFrame<"u"&&requestAnimationFrame(a)}),this.zone.run(()=>{this.transitions.events.next(new ae(t,this.lastSource==="popstate"?this.store[this.restoredId]:null,i,r))})})}ngOnDestroy(){this.routerEventsSubscription?.unsubscribe(),this.scrollEventsSubscription?.unsubscribe()}static \u0275fac=function(i){Kn()};static \u0275prov=R({token:e,factory:e.\u0275fac})}return e})();function kn(e,...n){return $n([{provide:Qt,multi:!0,useValue:e},[],{provide:ut,useFactory:Ea},{provide:ji,multi:!0,useFactory:Aa},n.map(t=>t.\u0275providers)])}function Ea(){return l(it).routerState.root}function Fe(e,n){return{\u0275kind:e,\u0275providers:n}}function Aa(){let e=l(kt);return n=>{let t=e.get(zi);if(n!==t.components[0])return;let i=e.get(it),r=e.get(Ta);e.get(Cn)===1&&i.initialNavigation(),e.get(Na,null,{optional:!0})?.setUpPreloading(),e.get(Ia,null,{optional:!0})?.init(),i.resetRootComponentType(t.componentTypes[0]),r.closed||(r.next(),r.complete(),r.unsubscribe())}}var Ta=new y("",{factory:()=>new T}),Cn=new y("",{factory:()=>1});function Oa(){let e=[{provide:Gn,useValue:!0},{provide:Cn,useValue:0},Ui(()=>{let n=l(kt);return n.get(cr,Promise.resolve()).then(()=>new Promise(i=>{let r=n.get(it),a=n.get(Ta);Ri(r,()=>{i(!0)}),n.get(ki).afterPreactivation=()=>(i(!0),a.closed?g(void 0):a),r.initialNavigation()}))})];return Fe(2,e)}function La(){let e=[Ui(()=>{l(it).setUpLocationChangeListener()}),{provide:Cn,useValue:2}];return Fe(3,e)}var Na=new y("");function Pa(e){return Fe(0,[{provide:Na,useExisting:Da},{provide:ze,useExisting:e}])}function Ua(){return Fe(8,[pn,{provide:Ue,useExisting:pn}])}function ja(e){Zn("NgRouterViewTransitions");let n=[{provide:_n,useValue:Ra},{provide:bn,useValue:m({skipNextTransition:!!e?.skipInitialTransition},e)}];return Fe(9,n)}var za=[Xt,{provide:Nt,useClass:bt},it,qt,{provide:ut,useFactory:Ea},yi,[]],Rn=(()=>{class e{constructor(){}static forRoot(t,i){return{ngModule:e,providers:[za,[],{provide:Qt,multi:!0,useValue:t},[],i?.errorHandler?{provide:wn,useValue:i.errorHandler}:[],{provide:Pt,useValue:i||{}},i?.useHash?Es():As(),Is(),i?.preloadingStrategy?Pa(i.preloadingStrategy).\u0275providers:[],i?.initialNavigation?Ts(i):[],i?.bindToComponentInputs?Ua().\u0275providers:[],i?.enableViewTransitions?ja().\u0275providers:[],Os()]}}static forChild(t){return{ngModule:e,providers:[{provide:Qt,multi:!0,useValue:t}]}}static \u0275fac=function(i){return new(i||e)};static \u0275mod=ot({type:e});static \u0275inj=rt({})}return e})();function Is(){return{provide:Ia,useFactory:()=>{let e=l($i),n=l(Pt);return n.scrollOffset&&e.setOffset(n.scrollOffset),new Ds(n)}}}function Es(){return{provide:xe,useClass:dr}}function As(){return{provide:xe,useClass:lr}}function Ts(e){return[e.initialNavigation==="disabled"?La().\u0275providers:[],e.initialNavigation==="enabledBlocking"?Oa().\u0275providers:[]]}var yn=new y("");function Os(){return[{provide:yn,useFactory:Aa},{provide:ji,multi:!0,useExisting:yn}]}var Di=["*"],Ps=["content"],Us=[[["mat-drawer"]],[["mat-drawer-content"]],"*"],js=["mat-drawer","mat-drawer-content","*"];function zs(e,n){if(e&1){let t=we();f(0,"div",1),lt("click",function(){_e(t);let r=Dt();return be(r._onBackdropClicked())}),v()}if(e&2){let t=Dt();P("mat-drawer-shown",t._isShowingBackdrop())}}function Fs(e,n){e&1&&(f(0,"mat-drawer-content"),w(1,2),v())}var Bs=[[["mat-sidenav"]],[["mat-sidenav-content"]],"*"],$s=["mat-sidenav","mat-sidenav-content","*"];function Hs(e,n){if(e&1){let t=we();f(0,"div",1),lt("click",function(){_e(t);let r=Dt();return be(r._onBackdropClicked())}),v()}if(e&2){let t=Dt();P("mat-drawer-shown",t._isShowingBackdrop())}}function qs(e,n){e&1&&(f(0,"mat-sidenav-content"),w(1,2),v())}var Vs=`.mat-drawer-container {
  position: relative;
  z-index: 1;
  color: var(--mat-sidenav-content-text-color, var(--mat-sys-on-background));
  background-color: var(--mat-sidenav-content-background-color, var(--mat-sys-background));
  box-sizing: border-box;
  display: block;
  overflow: hidden;
}
.mat-drawer-container[fullscreen] {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
}
.mat-drawer-container[fullscreen].mat-drawer-container-has-open {
  overflow: hidden;
}
.mat-drawer-container.mat-drawer-container-explicit-backdrop .mat-drawer-side {
  z-index: 3;
}
.mat-drawer-container.ng-animate-disabled .mat-drawer-backdrop,
.mat-drawer-container.ng-animate-disabled .mat-drawer-content, .ng-animate-disabled .mat-drawer-container .mat-drawer-backdrop,
.ng-animate-disabled .mat-drawer-container .mat-drawer-content {
  transition: none;
}

.mat-drawer-backdrop {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  display: block;
  z-index: 3;
  visibility: hidden;
}
.mat-drawer-backdrop.mat-drawer-shown {
  visibility: visible;
  background-color: var(--mat-sidenav-scrim-color, color-mix(in srgb, var(--mat-sys-neutral-variant20) 40%, transparent));
}
.mat-drawer-transition .mat-drawer-backdrop {
  transition-duration: 400ms;
  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
  transition-property: background-color, visibility;
}
@media (forced-colors: active) {
  .mat-drawer-backdrop {
    opacity: 0.5;
  }
}

.mat-drawer-content {
  position: relative;
  z-index: 1;
  display: block;
  height: 100%;
  overflow: auto;
}
.mat-drawer-content.mat-drawer-content-hidden {
  opacity: 0;
}
.mat-drawer-transition .mat-drawer-content {
  transition-duration: 400ms;
  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
  transition-property: transform, margin-left, margin-right;
}

.mat-drawer {
  position: relative;
  z-index: 4;
  color: var(--mat-sidenav-container-text-color, var(--mat-sys-on-surface-variant));
  box-shadow: var(--mat-sidenav-container-elevation-shadow, none);
  background-color: var(--mat-sidenav-container-background-color, var(--mat-sys-surface));
  border-top-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  width: var(--mat-sidenav-container-width, 360px);
  display: block;
  position: absolute;
  top: 0;
  bottom: 0;
  z-index: 3;
  outline: 0;
  box-sizing: border-box;
  overflow-y: auto;
  transform: translate3d(-100%, 0, 0);
}
@media (forced-colors: active) {
  .mat-drawer, [dir=rtl] .mat-drawer.mat-drawer-end {
    border-right: solid 1px currentColor;
  }
}
@media (forced-colors: active) {
  [dir=rtl] .mat-drawer, .mat-drawer.mat-drawer-end {
    border-left: solid 1px currentColor;
    border-right: none;
  }
}
.mat-drawer.mat-drawer-side {
  z-index: 2;
}
.mat-drawer.mat-drawer-end {
  right: 0;
  transform: translate3d(100%, 0, 0);
  border-top-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
[dir=rtl] .mat-drawer {
  border-top-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  transform: translate3d(100%, 0, 0);
}
[dir=rtl] .mat-drawer.mat-drawer-end {
  border-top-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  left: 0;
  right: auto;
  transform: translate3d(-100%, 0, 0);
}
.mat-drawer-transition .mat-drawer {
  transition: transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1);
}
.mat-drawer:not(.mat-drawer-opened):not(.mat-drawer-animating) {
  visibility: hidden;
  box-shadow: none;
}
.mat-drawer:not(.mat-drawer-opened):not(.mat-drawer-animating) .mat-drawer-inner-container {
  display: none;
}
.mat-drawer.mat-drawer-opened.mat-drawer-opened {
  transform: none;
}

.mat-drawer-side {
  box-shadow: none;
  border-right-color: var(--mat-sidenav-container-divider-color, transparent);
  border-right-width: 1px;
  border-right-style: solid;
}
.mat-drawer-side.mat-drawer-end {
  border-left-color: var(--mat-sidenav-container-divider-color, transparent);
  border-left-width: 1px;
  border-left-style: solid;
  border-right: none;
}
[dir=rtl] .mat-drawer-side {
  border-left-color: var(--mat-sidenav-container-divider-color, transparent);
  border-left-width: 1px;
  border-left-style: solid;
  border-right: none;
}
[dir=rtl] .mat-drawer-side.mat-drawer-end {
  border-right-color: var(--mat-sidenav-container-divider-color, transparent);
  border-right-width: 1px;
  border-right-style: solid;
  border-left: none;
}

.mat-drawer-inner-container {
  width: 100%;
  height: 100%;
  overflow: auto;
}

.mat-sidenav-fixed {
  position: fixed;
}
`;var Qs=new y("MAT_DRAWER_DEFAULT_AUTOSIZE",{providedIn:"root",factory:()=>!1}),Dn=new y("MAT_DRAWER_CONTAINER"),Si=(()=>{class e extends Jt{_platform=l(Et);_changeDetectorRef=l(vt);_container=l(Mn);constructor(){let t=l($),i=l(kr),r=l(Ct);super(t,i,r)}ngAfterContentInit(){this._container._contentMarginChanges.subscribe(()=>{this._changeDetectorRef.markForCheck()})}_shouldBeHidden(){if(this._platform.isBrowser)return!1;let{start:t,end:i}=this._container;return t!=null&&t.mode!=="over"&&t.opened||i!=null&&i.mode!=="over"&&i.opened}static \u0275fac=function(i){return new(i||e)};static \u0275cmp=S({type:e,selectors:[["mat-drawer-content"]],hostAttrs:[1,"mat-drawer-content"],hostVars:6,hostBindings:function(i,r){i&2&&(We("margin-left",r._container._contentMargins.left,"px")("margin-right",r._container._contentMargins.right,"px"),P("mat-drawer-content-hidden",r._shouldBeHidden()))},features:[It([{provide:Jt,useExisting:e}]),st],ngContentSelectors:Di,decls:1,vars:0,template:function(i,r){i&1&&(Y(),w(0))},encapsulation:2,changeDetection:0})}return e})(),Sn=(()=>{class e{_elementRef=l($);_focusTrapFactory=l(wr);_focusMonitor=l(gr);_platform=l(Et);_ngZone=l(Ct);_renderer=l(Kt);_interactivityChecker=l(br);_doc=l(Gt);_container=l(Dn,{optional:!0});_focusTrap=null;_elementFocusedBeforeDrawerWasOpened=null;_eventCleanups;_isAttached=!1;_anchor=null;get position(){return this._position}set position(t){t=t==="end"?"end":"start",t!==this._position&&(this._isAttached&&this._updatePositionInParent(t),this._position=t,this.onPositionChanged.emit())}_position="start";get mode(){return this._mode}set mode(t){this._mode=t,this._updateFocusTrapState(),this._modeChanged.next()}_mode="over";get disableClose(){return this._disableClose}set disableClose(t){this._disableClose=H(t)}_disableClose=!1;get autoFocus(){let t=this._autoFocus;return t??(this.mode==="side"?"dialog":"first-tabbable")}set autoFocus(t){(t==="true"||t==="false"||t==null)&&(t=H(t)),this._autoFocus=t}_autoFocus;get opened(){return this._opened()}set opened(t){this.toggle(H(t))}_opened=b(!1);_openedVia=null;_animationStarted=new T;_animationEnd=new T;openedChange=new Z(!0);_openedStream=this.openedChange.pipe(F(t=>t),E(()=>{}));openedStart=this._animationStarted.pipe(F(()=>this.opened),Li(void 0));_closedStream=this.openedChange.pipe(F(t=>!t),E(()=>{}));closedStart=this._animationStarted.pipe(F(()=>!this.opened),Li(void 0));_destroyed=new T;onPositionChanged=new Z;_content;_modeChanged=new T;_injector=l(kt);_changeDetectorRef=l(vt);constructor(){this.openedChange.pipe(j(this._destroyed)).subscribe(t=>{t?(this._elementFocusedBeforeDrawerWasOpened=this._doc.activeElement,this._takeFocus()):this._isFocusWithinDrawer()&&this._restoreFocus(this._openedVia||"program")}),this._eventCleanups=this._ngZone.runOutsideAngular(()=>{let t=this._renderer,i=this._elementRef.nativeElement;return[t.listen(i,"keydown",r=>{r.keyCode===27&&!this.disableClose&&!yr(r)&&this._ngZone.run(()=>{this.close(),r.stopPropagation(),r.preventDefault()})}),t.listen(i,"transitionend",this._handleTransitionEvent),t.listen(i,"transitioncancel",this._handleTransitionEvent)]}),this._animationEnd.subscribe(()=>{this.openedChange.emit(this.opened)})}_forceFocus(t,i){this._interactivityChecker.isFocusable(t)||(t.tabIndex=-1,this._ngZone.runOutsideAngular(()=>{let r=()=>{a(),o(),t.removeAttribute("tabindex")},a=this._renderer.listen(t,"blur",r),o=this._renderer.listen(t,"mousedown",r)})),t.focus(i)}_focusByCssSelector(t,i){let r=this._elementRef.nativeElement.querySelector(t);r&&this._forceFocus(r,i)}_takeFocus(){if(!this._focusTrap)return;let t=this._elementRef.nativeElement;switch(this.autoFocus){case!1:case"dialog":return;case!0:case"first-tabbable":Zt(()=>{!this._focusTrap.focusInitialElement()&&typeof t.focus=="function"&&t.focus()},{injector:this._injector});break;case"first-heading":this._focusByCssSelector('h1, h2, h3, h4, h5, h6, [role="heading"]');break;default:this._focusByCssSelector(this.autoFocus);break}}_restoreFocus(t){this.autoFocus!=="dialog"&&(this._elementFocusedBeforeDrawerWasOpened?this._focusMonitor.focusVia(this._elementFocusedBeforeDrawerWasOpened,t):this._elementRef.nativeElement.blur(),this._elementFocusedBeforeDrawerWasOpened=null)}_isFocusWithinDrawer(){let t=this._doc.activeElement;return!!t&&this._elementRef.nativeElement.contains(t)}ngAfterViewInit(){this._isAttached=!0,this._position==="end"&&this._updatePositionInParent("end"),this._platform.isBrowser&&(this._focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement),this._updateFocusTrapState())}ngOnDestroy(){this._eventCleanups.forEach(t=>t()),this._focusTrap?.destroy(),this._anchor?.remove(),this._anchor=null,this._animationStarted.complete(),this._animationEnd.complete(),this._modeChanged.complete(),this._destroyed.next(),this._destroyed.complete()}open(t){return this.toggle(!0,t)}close(){return this.toggle(!1)}_closeViaBackdropClick(){return this._setOpen(!1,!0,"mouse")}toggle(t=!this.opened,i){t&&i&&(this._openedVia=i);let r=this._setOpen(t,!t&&this._isFocusWithinDrawer(),this._openedVia||"program");return t||(this._openedVia=null),r}_setOpen(t,i,r){return t===this.opened?Promise.resolve(t?"open":"close"):(this._opened.set(t),this._container?._transitionsEnabled?(this._setIsAnimating(!0),setTimeout(()=>this._animationStarted.next())):setTimeout(()=>{this._animationStarted.next(),this._animationEnd.next()}),this._elementRef.nativeElement.classList.toggle("mat-drawer-opened",t),!t&&i&&this._restoreFocus(r),this._changeDetectorRef.markForCheck(),this._updateFocusTrapState(),new Promise(a=>{this.openedChange.pipe(wt(1)).subscribe(o=>a(o?"open":"close"))}))}_setIsAnimating(t){this._elementRef.nativeElement.classList.toggle("mat-drawer-animating",t)}_getWidth(){return this._elementRef.nativeElement.offsetWidth||0}_updateFocusTrapState(){this._focusTrap&&(this._focusTrap.enabled=this.opened&&!!this._container?._isShowingBackdrop())}_updatePositionInParent(t){if(!this._platform.isBrowser)return;let i=this._elementRef.nativeElement,r=i.parentNode;t==="end"?(this._anchor||(this._anchor=this._doc.createComment("mat-drawer-anchor"),r.insertBefore(this._anchor,i)),r.appendChild(i)):this._anchor&&this._anchor.parentNode.insertBefore(i,this._anchor)}_handleTransitionEvent=t=>{let i=this._elementRef.nativeElement;t.target===i&&this._ngZone.run(()=>{t.type==="transitionend"&&this._setIsAnimating(!1),this._animationEnd.next(t)})};static \u0275fac=function(i){return new(i||e)};static \u0275cmp=S({type:e,selectors:[["mat-drawer"]],viewQuery:function(i,r){if(i&1&&ye(Ps,5),i&2){let a;M(a=D())&&(r._content=a.first)}},hostAttrs:[1,"mat-drawer"],hostVars:12,hostBindings:function(i,r){i&2&&(ct("align",null)("tabIndex",r.mode!=="side"?"-1":null),We("visibility",!r._container&&!r.opened?"hidden":null),P("mat-drawer-end",r.position==="end")("mat-drawer-over",r.mode==="over")("mat-drawer-push",r.mode==="push")("mat-drawer-side",r.mode==="side"))},inputs:{position:"position",mode:"mode",disableClose:"disableClose",autoFocus:"autoFocus",opened:"opened"},outputs:{openedChange:"openedChange",_openedStream:"opened",openedStart:"openedStart",_closedStream:"closed",closedStart:"closedStart",onPositionChanged:"positionChanged"},exportAs:["matDrawer"],ngContentSelectors:Di,decls:3,vars:0,consts:[["content",""],["cdkScrollable","",1,"mat-drawer-inner-container"]],template:function(i,r){i&1&&(Y(),f(0,"div",1,0),w(2),v())},dependencies:[Jt],encapsulation:2,changeDetection:0})}return e})(),Mn=(()=>{class e{_dir=l(xr,{optional:!0});_element=l($);_ngZone=l(Ct);_changeDetectorRef=l(vt);_animationDisabled=Ke();_transitionsEnabled=!1;_allDrawers;_drawers=new Vn;_content;_userContent;get start(){return this._start}get end(){return this._end}get autosize(){return this._autosize}set autosize(t){this._autosize=H(t)}_autosize=l(Qs);get hasBackdrop(){return this._drawerHasBackdrop(this._start)||this._drawerHasBackdrop(this._end)}set hasBackdrop(t){this._backdropOverride=t==null?null:H(t)}_backdropOverride=null;backdropClick=new Z;_start=null;_end=null;_left=null;_right=null;_destroyed=new T;_doCheckSubject=new T;_contentMargins={left:null,right:null};_contentMarginChanges=new T;get scrollable(){return this._userContent||this._content}_injector=l(kt);constructor(){let t=l(Et),i=l(Cr);this._dir?.change.pipe(j(this._destroyed)).subscribe(()=>{this._validateDrawers(),this.updateContentMargins()}),i.change().pipe(j(this._destroyed)).subscribe(()=>this.updateContentMargins()),!this._animationDisabled&&t.isBrowser&&this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{this._element.nativeElement.classList.add("mat-drawer-transition"),this._transitionsEnabled=!0},200)})}ngAfterContentInit(){this._allDrawers.changes.pipe(ve(this._allDrawers),j(this._destroyed)).subscribe(t=>{this._drawers.reset(t.filter(i=>!i._container||i._container===this)),this._drawers.notifyOnChanges()}),this._drawers.changes.pipe(ve(null)).subscribe(()=>{this._validateDrawers(),this._drawers.forEach(t=>{this._watchDrawerToggle(t),this._watchDrawerPosition(t),this._watchDrawerMode(t)}),(!this._drawers.length||this._isDrawerOpen(this._start)||this._isDrawerOpen(this._end))&&this.updateContentMargins(),this._changeDetectorRef.markForCheck()}),this._ngZone.runOutsideAngular(()=>{this._doCheckSubject.pipe(jn(10),j(this._destroyed)).subscribe(()=>this.updateContentMargins())})}ngOnDestroy(){this._contentMarginChanges.complete(),this._doCheckSubject.complete(),this._drawers.destroy(),this._destroyed.next(),this._destroyed.complete()}open(){this._drawers.forEach(t=>t.open())}close(){this._drawers.forEach(t=>t.close())}updateContentMargins(){let t=0,i=0;if(this._left&&this._left.opened){if(this._left.mode=="side")t+=this._left._getWidth();else if(this._left.mode=="push"){let r=this._left._getWidth();t+=r,i-=r}}if(this._right&&this._right.opened){if(this._right.mode=="side")i+=this._right._getWidth();else if(this._right.mode=="push"){let r=this._right._getWidth();i+=r,t-=r}}t=t||null,i=i||null,(t!==this._contentMargins.left||i!==this._contentMargins.right)&&(this._contentMargins={left:t,right:i},this._ngZone.run(()=>this._contentMarginChanges.next(this._contentMargins)))}ngDoCheck(){this._autosize&&this._isPushed()&&this._ngZone.runOutsideAngular(()=>this._doCheckSubject.next())}_watchDrawerToggle(t){t._animationStarted.pipe(j(this._drawers.changes)).subscribe(()=>{this.updateContentMargins(),this._changeDetectorRef.markForCheck()}),t.mode!=="side"&&t.openedChange.pipe(j(this._drawers.changes)).subscribe(()=>this._setContainerClass(t.opened))}_watchDrawerPosition(t){t.onPositionChanged.pipe(j(this._drawers.changes)).subscribe(()=>{Zt({read:()=>this._validateDrawers()},{injector:this._injector})})}_watchDrawerMode(t){t._modeChanged.pipe(j(qe(this._drawers.changes,this._destroyed))).subscribe(()=>{this.updateContentMargins(),this._changeDetectorRef.markForCheck()})}_setContainerClass(t){let i=this._element.nativeElement.classList,r="mat-drawer-container-has-open";t?i.add(r):i.remove(r)}_validateDrawers(){this._start=this._end=null,this._drawers.forEach(t=>{t.position=="end"?(this._end!=null,this._end=t):(this._start!=null,this._start=t)}),this._right=this._left=null,this._dir&&this._dir.value==="rtl"?(this._left=this._end,this._right=this._start):(this._left=this._start,this._right=this._end)}_isPushed(){return this._isDrawerOpen(this._start)&&this._start.mode!="over"||this._isDrawerOpen(this._end)&&this._end.mode!="over"}_onBackdropClicked(){this.backdropClick.emit(),this._closeModalDrawersViaBackdrop()}_closeModalDrawersViaBackdrop(){[this._start,this._end].filter(t=>t&&!t.disableClose&&this._drawerHasBackdrop(t)).forEach(t=>t._closeViaBackdropClick())}_isShowingBackdrop(){return this._isDrawerOpen(this._start)&&this._drawerHasBackdrop(this._start)||this._isDrawerOpen(this._end)&&this._drawerHasBackdrop(this._end)}_isDrawerOpen(t){return t!=null&&t.opened}_drawerHasBackdrop(t){return this._backdropOverride==null?!!t&&t.mode!=="side":this._backdropOverride}static \u0275fac=function(i){return new(i||e)};static \u0275cmp=S({type:e,selectors:[["mat-drawer-container"]],contentQueries:function(i,r,a){if(i&1&&dt(a,Si,5)(a,Sn,5),i&2){let o;M(o=D())&&(r._content=o.first),M(o=D())&&(r._allDrawers=o)}},viewQuery:function(i,r){if(i&1&&ye(Si,5),i&2){let a;M(a=D())&&(r._userContent=a.first)}},hostAttrs:[1,"mat-drawer-container"],hostVars:2,hostBindings:function(i,r){i&2&&P("mat-drawer-container-explicit-backdrop",r._backdropOverride)},inputs:{autosize:"autosize",hasBackdrop:"hasBackdrop"},outputs:{backdropClick:"backdropClick"},exportAs:["matDrawerContainer"],features:[It([{provide:Dn,useExisting:e}])],ngContentSelectors:js,decls:4,vars:2,consts:[[1,"mat-drawer-backdrop",3,"mat-drawer-shown"],[1,"mat-drawer-backdrop",3,"click"]],template:function(i,r){i&1&&(Y(Us),St(0,zs,1,2,"div",0),w(1),w(2,1),St(3,Fs,2,0,"mat-drawer-content")),i&2&&(Mt(r.hasBackdrop?0:-1),Rt(3),Mt(r._content?-1:3))},dependencies:[Si],styles:[`.mat-drawer-container {
  position: relative;
  z-index: 1;
  color: var(--mat-sidenav-content-text-color, var(--mat-sys-on-background));
  background-color: var(--mat-sidenav-content-background-color, var(--mat-sys-background));
  box-sizing: border-box;
  display: block;
  overflow: hidden;
}
.mat-drawer-container[fullscreen] {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
}
.mat-drawer-container[fullscreen].mat-drawer-container-has-open {
  overflow: hidden;
}
.mat-drawer-container.mat-drawer-container-explicit-backdrop .mat-drawer-side {
  z-index: 3;
}
.mat-drawer-container.ng-animate-disabled .mat-drawer-backdrop,
.mat-drawer-container.ng-animate-disabled .mat-drawer-content, .ng-animate-disabled .mat-drawer-container .mat-drawer-backdrop,
.ng-animate-disabled .mat-drawer-container .mat-drawer-content {
  transition: none;
}

.mat-drawer-backdrop {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  display: block;
  z-index: 3;
  visibility: hidden;
}
.mat-drawer-backdrop.mat-drawer-shown {
  visibility: visible;
  background-color: var(--mat-sidenav-scrim-color, color-mix(in srgb, var(--mat-sys-neutral-variant20) 40%, transparent));
}
.mat-drawer-transition .mat-drawer-backdrop {
  transition-duration: 400ms;
  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
  transition-property: background-color, visibility;
}
@media (forced-colors: active) {
  .mat-drawer-backdrop {
    opacity: 0.5;
  }
}

.mat-drawer-content {
  position: relative;
  z-index: 1;
  display: block;
  height: 100%;
  overflow: auto;
}
.mat-drawer-content.mat-drawer-content-hidden {
  opacity: 0;
}
.mat-drawer-transition .mat-drawer-content {
  transition-duration: 400ms;
  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);
  transition-property: transform, margin-left, margin-right;
}

.mat-drawer {
  position: relative;
  z-index: 4;
  color: var(--mat-sidenav-container-text-color, var(--mat-sys-on-surface-variant));
  box-shadow: var(--mat-sidenav-container-elevation-shadow, none);
  background-color: var(--mat-sidenav-container-background-color, var(--mat-sys-surface));
  border-top-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  width: var(--mat-sidenav-container-width, 360px);
  display: block;
  position: absolute;
  top: 0;
  bottom: 0;
  z-index: 3;
  outline: 0;
  box-sizing: border-box;
  overflow-y: auto;
  transform: translate3d(-100%, 0, 0);
}
@media (forced-colors: active) {
  .mat-drawer, [dir=rtl] .mat-drawer.mat-drawer-end {
    border-right: solid 1px currentColor;
  }
}
@media (forced-colors: active) {
  [dir=rtl] .mat-drawer, .mat-drawer.mat-drawer-end {
    border-left: solid 1px currentColor;
    border-right: none;
  }
}
.mat-drawer.mat-drawer-side {
  z-index: 2;
}
.mat-drawer.mat-drawer-end {
  right: 0;
  transform: translate3d(100%, 0, 0);
  border-top-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
[dir=rtl] .mat-drawer {
  border-top-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-left-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  transform: translate3d(100%, 0, 0);
}
[dir=rtl] .mat-drawer.mat-drawer-end {
  border-top-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-bottom-right-radius: var(--mat-sidenav-container-shape, var(--mat-sys-corner-large));
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  left: 0;
  right: auto;
  transform: translate3d(-100%, 0, 0);
}
.mat-drawer-transition .mat-drawer {
  transition: transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1);
}
.mat-drawer:not(.mat-drawer-opened):not(.mat-drawer-animating) {
  visibility: hidden;
  box-shadow: none;
}
.mat-drawer:not(.mat-drawer-opened):not(.mat-drawer-animating) .mat-drawer-inner-container {
  display: none;
}
.mat-drawer.mat-drawer-opened.mat-drawer-opened {
  transform: none;
}

.mat-drawer-side {
  box-shadow: none;
  border-right-color: var(--mat-sidenav-container-divider-color, transparent);
  border-right-width: 1px;
  border-right-style: solid;
}
.mat-drawer-side.mat-drawer-end {
  border-left-color: var(--mat-sidenav-container-divider-color, transparent);
  border-left-width: 1px;
  border-left-style: solid;
  border-right: none;
}
[dir=rtl] .mat-drawer-side {
  border-left-color: var(--mat-sidenav-container-divider-color, transparent);
  border-left-width: 1px;
  border-left-style: solid;
  border-right: none;
}
[dir=rtl] .mat-drawer-side.mat-drawer-end {
  border-right-color: var(--mat-sidenav-container-divider-color, transparent);
  border-right-width: 1px;
  border-right-style: solid;
  border-left: none;
}

.mat-drawer-inner-container {
  width: 100%;
  height: 100%;
  overflow: auto;
}

.mat-sidenav-fixed {
  position: fixed;
}
`],encapsulation:2,changeDetection:0})}return e})(),Mi=(()=>{class e extends Si{static \u0275fac=(()=>{let t;return function(r){return(t||(t=K(e)))(r||e)}})();static \u0275cmp=S({type:e,selectors:[["mat-sidenav-content"]],hostAttrs:[1,"mat-drawer-content","mat-sidenav-content"],features:[It([{provide:Jt,useExisting:e}]),st],ngContentSelectors:Di,decls:1,vars:0,template:function(i,r){i&1&&(Y(),w(0))},encapsulation:2,changeDetection:0})}return e})(),In=(()=>{class e extends Sn{get fixedInViewport(){return this._fixedInViewport}set fixedInViewport(t){this._fixedInViewport=H(t)}_fixedInViewport=!1;get fixedTopGap(){return this._fixedTopGap}set fixedTopGap(t){this._fixedTopGap=ke(t)}_fixedTopGap=0;get fixedBottomGap(){return this._fixedBottomGap}set fixedBottomGap(t){this._fixedBottomGap=ke(t)}_fixedBottomGap=0;static \u0275fac=(()=>{let t;return function(r){return(t||(t=K(e)))(r||e)}})();static \u0275cmp=S({type:e,selectors:[["mat-sidenav"]],hostAttrs:[1,"mat-drawer","mat-sidenav"],hostVars:16,hostBindings:function(i,r){i&2&&(ct("tabIndex",r.mode!=="side"?"-1":null)("align",null),We("top",r.fixedInViewport?r.fixedTopGap:null,"px")("bottom",r.fixedInViewport?r.fixedBottomGap:null,"px"),P("mat-drawer-end",r.position==="end")("mat-drawer-over",r.mode==="over")("mat-drawer-push",r.mode==="push")("mat-drawer-side",r.mode==="side")("mat-sidenav-fixed",r.fixedInViewport))},inputs:{fixedInViewport:"fixedInViewport",fixedTopGap:"fixedTopGap",fixedBottomGap:"fixedBottomGap"},exportAs:["matSidenav"],features:[It([{provide:Sn,useExisting:e}]),st],ngContentSelectors:Di,decls:3,vars:0,consts:[["content",""],["cdkScrollable","",1,"mat-drawer-inner-container"]],template:function(i,r){i&1&&(Y(),f(0,"div",1,0),w(2),v())},dependencies:[Jt],encapsulation:2,changeDetection:0})}return e})(),Fa=(()=>{class e extends Mn{_allDrawers=void 0;_content=void 0;static \u0275fac=(()=>{let t;return function(r){return(t||(t=K(e)))(r||e)}})();static \u0275cmp=S({type:e,selectors:[["mat-sidenav-container"]],contentQueries:function(i,r,a){if(i&1&&dt(a,Mi,5)(a,In,5),i&2){let o;M(o=D())&&(r._content=o.first),M(o=D())&&(r._allDrawers=o)}},hostAttrs:[1,"mat-drawer-container","mat-sidenav-container"],hostVars:2,hostBindings:function(i,r){i&2&&P("mat-drawer-container-explicit-backdrop",r._backdropOverride)},exportAs:["matSidenavContainer"],features:[It([{provide:Dn,useExisting:e},{provide:Mn,useExisting:e}]),st],ngContentSelectors:$s,decls:4,vars:2,consts:[[1,"mat-drawer-backdrop",3,"mat-drawer-shown"],[1,"mat-drawer-backdrop",3,"click"]],template:function(i,r){i&1&&(Y(Bs),St(0,Hs,1,2,"div",0),w(1),w(2,1),St(3,qs,2,0,"mat-sidenav-content")),i&2&&(Mt(r.hasBackdrop?0:-1),Rt(3),Mt(r._content?-1:3))},dependencies:[Mi],styles:[Vs],encapsulation:2,changeDetection:0})}return e})(),Ba=(()=>{class e{static \u0275fac=function(i){return new(i||e)};static \u0275mod=ot({type:e});static \u0275inj=rt({imports:[Hi,At,Hi]})}return e})();var Ws=["*",[["mat-toolbar-row"]]],Zs=["*","mat-toolbar-row"],Ks=(()=>{class e{static \u0275fac=function(i){return new(i||e)};static \u0275dir=L({type:e,selectors:[["mat-toolbar-row"]],hostAttrs:[1,"mat-toolbar-row"],exportAs:["matToolbarRow"]})}return e})(),$a=(()=>{class e{_elementRef=l($);_platform=l(Et);_document=l(Gt);color;_toolbarRows;constructor(){}ngAfterViewInit(){this._platform.isBrowser&&(this._checkToolbarMixedModes(),this._toolbarRows.changes.subscribe(()=>this._checkToolbarMixedModes()))}_checkToolbarMixedModes(){this._toolbarRows.length}static \u0275fac=function(i){return new(i||e)};static \u0275cmp=S({type:e,selectors:[["mat-toolbar"]],contentQueries:function(i,r,a){if(i&1&&dt(a,Ks,5),i&2){let o;M(o=D())&&(r._toolbarRows=o)}},hostAttrs:[1,"mat-toolbar"],hostVars:6,hostBindings:function(i,r){i&2&&(er(r.color?"mat-"+r.color:""),P("mat-toolbar-multiple-rows",r._toolbarRows.length>0)("mat-toolbar-single-row",r._toolbarRows.length===0))},inputs:{color:"color"},exportAs:["matToolbar"],ngContentSelectors:Zs,decls:2,vars:0,template:function(i,r){i&1&&(Y(Ws),w(0),w(1,1))},styles:[`.mat-toolbar {
  background: var(--mat-toolbar-container-background-color, var(--mat-sys-surface));
  color: var(--mat-toolbar-container-text-color, var(--mat-sys-on-surface));
}
.mat-toolbar, .mat-toolbar h1, .mat-toolbar h2, .mat-toolbar h3, .mat-toolbar h4, .mat-toolbar h5, .mat-toolbar h6 {
  font-family: var(--mat-toolbar-title-text-font, var(--mat-sys-title-large-font));
  font-size: var(--mat-toolbar-title-text-size, var(--mat-sys-title-large-size));
  line-height: var(--mat-toolbar-title-text-line-height, var(--mat-sys-title-large-line-height));
  font-weight: var(--mat-toolbar-title-text-weight, var(--mat-sys-title-large-weight));
  letter-spacing: var(--mat-toolbar-title-text-tracking, var(--mat-sys-title-large-tracking));
  margin: 0;
}
@media (forced-colors: active) {
  .mat-toolbar {
    outline: solid 1px;
  }
}
.mat-toolbar .mat-form-field-underline,
.mat-toolbar .mat-form-field-ripple,
.mat-toolbar .mat-focused .mat-form-field-ripple {
  background-color: currentColor;
}
.mat-toolbar .mat-form-field-label,
.mat-toolbar .mat-focused .mat-form-field-label,
.mat-toolbar .mat-select-value,
.mat-toolbar .mat-select-arrow,
.mat-toolbar .mat-form-field.mat-focused .mat-select-arrow {
  color: inherit;
}
.mat-toolbar .mat-input-element {
  caret-color: currentColor;
}
.mat-toolbar .mat-mdc-button-base.mat-mdc-button-base.mat-unthemed {
  --mat-button-text-label-text-color: var(--mat-toolbar-container-text-color, var(--mat-sys-on-surface));
  --mat-button-outlined-label-text-color: var(--mat-toolbar-container-text-color, var(--mat-sys-on-surface));
}

.mat-toolbar-row, .mat-toolbar-single-row {
  display: flex;
  box-sizing: border-box;
  padding: 0 16px;
  width: 100%;
  flex-direction: row;
  align-items: center;
  white-space: nowrap;
  height: var(--mat-toolbar-standard-height, 64px);
}
@media (max-width: 599px) {
  .mat-toolbar-row, .mat-toolbar-single-row {
    height: var(--mat-toolbar-mobile-height, 56px);
  }
}

.mat-toolbar-multiple-rows {
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  width: 100%;
  min-height: var(--mat-toolbar-standard-height, 64px);
}
@media (max-width: 599px) {
  .mat-toolbar-multiple-rows {
    min-height: var(--mat-toolbar-mobile-height, 56px);
  }
}
`],encapsulation:2,changeDetection:0})}return e})();var Ha=(()=>{class e{static \u0275fac=function(i){return new(i||e)};static \u0275mod=ot({type:e});static \u0275inj=rt({imports:[At]})}return e})();var qa=(()=>{class e{static \u0275fac=function(i){return new(i||e)};static \u0275mod=ot({type:e});static \u0275inj=rt({imports:[At]})}return e})();var Xs=["*"],Js=`.mdc-list {
  margin: 0;
  padding: 8px 0;
  list-style-type: none;
}
.mdc-list:focus {
  outline: none;
}

.mdc-list-item {
  display: flex;
  position: relative;
  justify-content: flex-start;
  overflow: hidden;
  padding: 0;
  align-items: stretch;
  cursor: pointer;
  padding-left: 16px;
  padding-right: 16px;
  background-color: var(--mat-list-list-item-container-color, transparent);
  border-radius: var(--mat-list-list-item-container-shape, var(--mat-sys-corner-none));
}
.mdc-list-item.mdc-list-item--selected {
  background-color: var(--mat-list-list-item-selected-container-color);
}
.mdc-list-item:focus {
  outline: 0;
}
.mdc-list-item.mdc-list-item--disabled {
  cursor: auto;
}
.mdc-list-item.mdc-list-item--with-one-line {
  height: var(--mat-list-list-item-one-line-container-height, 48px);
}
.mdc-list-item.mdc-list-item--with-one-line .mdc-list-item__start {
  align-self: center;
  margin-top: 0;
}
.mdc-list-item.mdc-list-item--with-one-line .mdc-list-item__end {
  align-self: center;
  margin-top: 0;
}
.mdc-list-item.mdc-list-item--with-two-lines {
  height: var(--mat-list-list-item-two-line-container-height, 64px);
}
.mdc-list-item.mdc-list-item--with-two-lines .mdc-list-item__start {
  align-self: flex-start;
  margin-top: 16px;
}
.mdc-list-item.mdc-list-item--with-two-lines .mdc-list-item__end {
  align-self: center;
  margin-top: 0;
}
.mdc-list-item.mdc-list-item--with-three-lines {
  height: var(--mat-list-list-item-three-line-container-height, 88px);
}
.mdc-list-item.mdc-list-item--with-three-lines .mdc-list-item__start {
  align-self: flex-start;
  margin-top: 16px;
}
.mdc-list-item.mdc-list-item--with-three-lines .mdc-list-item__end {
  align-self: flex-start;
  margin-top: 16px;
}
.mdc-list-item.mdc-list-item--selected::before, .mdc-list-item.mdc-list-item--selected:focus::before, .mdc-list-item:not(.mdc-list-item--selected):focus::before {
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  content: "";
  pointer-events: none;
}

a.mdc-list-item {
  color: inherit;
  text-decoration: none;
}

.mdc-list-item__start {
  fill: currentColor;
  flex-shrink: 0;
  pointer-events: none;
}
.mdc-list-item--with-leading-icon .mdc-list-item__start {
  color: var(--mat-list-list-item-leading-icon-color, var(--mat-sys-on-surface-variant));
  width: var(--mat-list-list-item-leading-icon-size, 24px);
  height: var(--mat-list-list-item-leading-icon-size, 24px);
  margin-left: 16px;
  margin-right: 32px;
}
[dir=rtl] .mdc-list-item--with-leading-icon .mdc-list-item__start {
  margin-left: 32px;
  margin-right: 16px;
}
.mdc-list-item--with-leading-icon:hover .mdc-list-item__start {
  color: var(--mat-list-list-item-hover-leading-icon-color);
}
.mdc-list-item--with-leading-avatar .mdc-list-item__start {
  width: var(--mat-list-list-item-leading-avatar-size, 40px);
  height: var(--mat-list-list-item-leading-avatar-size, 40px);
  margin-left: 16px;
  margin-right: 16px;
  border-radius: 50%;
}
.mdc-list-item--with-leading-avatar .mdc-list-item__start, [dir=rtl] .mdc-list-item--with-leading-avatar .mdc-list-item__start {
  margin-left: 16px;
  margin-right: 16px;
  border-radius: 50%;
}

.mdc-list-item__end {
  flex-shrink: 0;
  pointer-events: none;
}
.mdc-list-item--with-trailing-meta .mdc-list-item__end {
  font-family: var(--mat-list-list-item-trailing-supporting-text-font, var(--mat-sys-label-small-font));
  line-height: var(--mat-list-list-item-trailing-supporting-text-line-height, var(--mat-sys-label-small-line-height));
  font-size: var(--mat-list-list-item-trailing-supporting-text-size, var(--mat-sys-label-small-size));
  font-weight: var(--mat-list-list-item-trailing-supporting-text-weight, var(--mat-sys-label-small-weight));
  letter-spacing: var(--mat-list-list-item-trailing-supporting-text-tracking, var(--mat-sys-label-small-tracking));
}
.mdc-list-item--with-trailing-icon .mdc-list-item__end {
  color: var(--mat-list-list-item-trailing-icon-color, var(--mat-sys-on-surface-variant));
  width: var(--mat-list-list-item-trailing-icon-size, 24px);
  height: var(--mat-list-list-item-trailing-icon-size, 24px);
}
.mdc-list-item--with-trailing-icon:hover .mdc-list-item__end {
  color: var(--mat-list-list-item-hover-trailing-icon-color);
}
.mdc-list-item.mdc-list-item--with-trailing-meta .mdc-list-item__end {
  color: var(--mat-list-list-item-trailing-supporting-text-color, var(--mat-sys-on-surface-variant));
}
.mdc-list-item--selected.mdc-list-item--with-trailing-icon .mdc-list-item__end {
  color: var(--mat-list-list-item-selected-trailing-icon-color, var(--mat-sys-primary));
}

.mdc-list-item__content {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  align-self: center;
  flex: 1;
  pointer-events: none;
}
.mdc-list-item--with-two-lines .mdc-list-item__content, .mdc-list-item--with-three-lines .mdc-list-item__content {
  align-self: stretch;
}

.mdc-list-item__primary-text {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  color: var(--mat-list-list-item-label-text-color, var(--mat-sys-on-surface));
  font-family: var(--mat-list-list-item-label-text-font, var(--mat-sys-body-large-font));
  line-height: var(--mat-list-list-item-label-text-line-height, var(--mat-sys-body-large-line-height));
  font-size: var(--mat-list-list-item-label-text-size, var(--mat-sys-body-large-size));
  font-weight: var(--mat-list-list-item-label-text-weight, var(--mat-sys-body-large-weight));
  letter-spacing: var(--mat-list-list-item-label-text-tracking, var(--mat-sys-body-large-tracking));
}
.mdc-list-item:hover .mdc-list-item__primary-text {
  color: var(--mat-list-list-item-hover-label-text-color, var(--mat-sys-on-surface));
}
.mdc-list-item:focus .mdc-list-item__primary-text {
  color: var(--mat-list-list-item-focus-label-text-color, var(--mat-sys-on-surface));
}
.mdc-list-item--with-two-lines .mdc-list-item__primary-text, .mdc-list-item--with-three-lines .mdc-list-item__primary-text {
  display: block;
  margin-top: 0;
  line-height: normal;
  margin-bottom: -20px;
}
.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before, .mdc-list-item--with-three-lines .mdc-list-item__primary-text::before {
  display: inline-block;
  width: 0;
  height: 28px;
  content: "";
  vertical-align: 0;
}
.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after, .mdc-list-item--with-three-lines .mdc-list-item__primary-text::after {
  display: inline-block;
  width: 0;
  height: 20px;
  content: "";
  vertical-align: -20px;
}

.mdc-list-item__secondary-text {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  display: block;
  margin-top: 0;
  color: var(--mat-list-list-item-supporting-text-color, var(--mat-sys-on-surface-variant));
  font-family: var(--mat-list-list-item-supporting-text-font, var(--mat-sys-body-medium-font));
  line-height: var(--mat-list-list-item-supporting-text-line-height, var(--mat-sys-body-medium-line-height));
  font-size: var(--mat-list-list-item-supporting-text-size, var(--mat-sys-body-medium-size));
  font-weight: var(--mat-list-list-item-supporting-text-weight, var(--mat-sys-body-medium-weight));
  letter-spacing: var(--mat-list-list-item-supporting-text-tracking, var(--mat-sys-body-medium-tracking));
}
.mdc-list-item__secondary-text::before {
  display: inline-block;
  width: 0;
  height: 20px;
  content: "";
  vertical-align: 0;
}
.mdc-list-item--with-three-lines .mdc-list-item__secondary-text {
  white-space: normal;
  line-height: 20px;
}
.mdc-list-item--with-overline .mdc-list-item__secondary-text {
  white-space: nowrap;
  line-height: auto;
}

.mdc-list-item--with-leading-radio.mdc-list-item,
.mdc-list-item--with-leading-checkbox.mdc-list-item,
.mdc-list-item--with-leading-icon.mdc-list-item,
.mdc-list-item--with-leading-avatar.mdc-list-item {
  padding-left: 0;
  padding-right: 16px;
}
[dir=rtl] .mdc-list-item--with-leading-radio.mdc-list-item,
[dir=rtl] .mdc-list-item--with-leading-checkbox.mdc-list-item,
[dir=rtl] .mdc-list-item--with-leading-icon.mdc-list-item,
[dir=rtl] .mdc-list-item--with-leading-avatar.mdc-list-item {
  padding-left: 16px;
  padding-right: 0;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__primary-text,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__primary-text,
.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines .mdc-list-item__primary-text,
.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text {
  display: block;
  margin-top: 0;
  line-height: normal;
  margin-bottom: -20px;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before,
.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before,
.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text::before {
  display: inline-block;
  width: 0;
  height: 32px;
  content: "";
  vertical-align: 0;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after,
.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after,
.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines .mdc-list-item__primary-text::after {
  display: inline-block;
  width: 0;
  height: 20px;
  content: "";
  vertical-align: -20px;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end,
.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end,
.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end {
  display: block;
  margin-top: 0;
  line-height: normal;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before,
.mdc-list-item--with-leading-icon.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before,
.mdc-list-item--with-leading-avatar.mdc-list-item--with-two-lines.mdc-list-item--with-trailing-meta .mdc-list-item__end::before {
  display: inline-block;
  width: 0;
  height: 32px;
  content: "";
  vertical-align: 0;
}

.mdc-list-item--with-trailing-icon.mdc-list-item, [dir=rtl] .mdc-list-item--with-trailing-icon.mdc-list-item {
  padding-left: 0;
  padding-right: 0;
}
.mdc-list-item--with-trailing-icon .mdc-list-item__end {
  margin-left: 16px;
  margin-right: 16px;
}

.mdc-list-item--with-trailing-meta.mdc-list-item {
  padding-left: 16px;
  padding-right: 0;
}
[dir=rtl] .mdc-list-item--with-trailing-meta.mdc-list-item {
  padding-left: 0;
  padding-right: 16px;
}
.mdc-list-item--with-trailing-meta .mdc-list-item__end {
  -webkit-user-select: none;
  user-select: none;
  margin-left: 28px;
  margin-right: 16px;
}
[dir=rtl] .mdc-list-item--with-trailing-meta .mdc-list-item__end {
  margin-left: 16px;
  margin-right: 28px;
}
.mdc-list-item--with-trailing-meta.mdc-list-item--with-three-lines .mdc-list-item__end, .mdc-list-item--with-trailing-meta.mdc-list-item--with-two-lines .mdc-list-item__end {
  display: block;
  line-height: normal;
  align-self: flex-start;
  margin-top: 0;
}
.mdc-list-item--with-trailing-meta.mdc-list-item--with-three-lines .mdc-list-item__end::before, .mdc-list-item--with-trailing-meta.mdc-list-item--with-two-lines .mdc-list-item__end::before {
  display: inline-block;
  width: 0;
  height: 28px;
  content: "";
  vertical-align: 0;
}

.mdc-list-item--with-leading-radio .mdc-list-item__start,
.mdc-list-item--with-leading-checkbox .mdc-list-item__start {
  margin-left: 8px;
  margin-right: 24px;
}
[dir=rtl] .mdc-list-item--with-leading-radio .mdc-list-item__start,
[dir=rtl] .mdc-list-item--with-leading-checkbox .mdc-list-item__start {
  margin-left: 24px;
  margin-right: 8px;
}
.mdc-list-item--with-leading-radio.mdc-list-item--with-two-lines .mdc-list-item__start,
.mdc-list-item--with-leading-checkbox.mdc-list-item--with-two-lines .mdc-list-item__start {
  align-self: flex-start;
  margin-top: 8px;
}

.mdc-list-item--with-trailing-radio.mdc-list-item,
.mdc-list-item--with-trailing-checkbox.mdc-list-item {
  padding-left: 16px;
  padding-right: 0;
}
[dir=rtl] .mdc-list-item--with-trailing-radio.mdc-list-item,
[dir=rtl] .mdc-list-item--with-trailing-checkbox.mdc-list-item {
  padding-left: 0;
  padding-right: 16px;
}
.mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-icon, .mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-avatar,
.mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-icon,
.mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-avatar {
  padding-left: 0;
}
[dir=rtl] .mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-icon, [dir=rtl] .mdc-list-item--with-trailing-radio.mdc-list-item--with-leading-avatar,
[dir=rtl] .mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-icon,
[dir=rtl] .mdc-list-item--with-trailing-checkbox.mdc-list-item--with-leading-avatar {
  padding-right: 0;
}
.mdc-list-item--with-trailing-radio .mdc-list-item__end,
.mdc-list-item--with-trailing-checkbox .mdc-list-item__end {
  margin-left: 24px;
  margin-right: 8px;
}
[dir=rtl] .mdc-list-item--with-trailing-radio .mdc-list-item__end,
[dir=rtl] .mdc-list-item--with-trailing-checkbox .mdc-list-item__end {
  margin-left: 8px;
  margin-right: 24px;
}
.mdc-list-item--with-trailing-radio.mdc-list-item--with-three-lines .mdc-list-item__end,
.mdc-list-item--with-trailing-checkbox.mdc-list-item--with-three-lines .mdc-list-item__end {
  align-self: flex-start;
  margin-top: 8px;
}

.mdc-list-group__subheader {
  margin: 0.75rem 16px;
}

.mdc-list-item--disabled .mdc-list-item__start,
.mdc-list-item--disabled .mdc-list-item__content,
.mdc-list-item--disabled .mdc-list-item__end {
  opacity: 1;
}
.mdc-list-item--disabled .mdc-list-item__primary-text,
.mdc-list-item--disabled .mdc-list-item__secondary-text {
  opacity: var(--mat-list-list-item-disabled-label-text-opacity, 0.3);
}
.mdc-list-item--disabled.mdc-list-item--with-leading-icon .mdc-list-item__start {
  color: var(--mat-list-list-item-disabled-leading-icon-color, var(--mat-sys-on-surface));
  opacity: var(--mat-list-list-item-disabled-leading-icon-opacity, 0.38);
}
.mdc-list-item--disabled.mdc-list-item--with-trailing-icon .mdc-list-item__end {
  color: var(--mat-list-list-item-disabled-trailing-icon-color, var(--mat-sys-on-surface));
  opacity: var(--mat-list-list-item-disabled-trailing-icon-opacity, 0.38);
}

.mat-mdc-list-item.mat-mdc-list-item-both-leading-and-trailing, [dir=rtl] .mat-mdc-list-item.mat-mdc-list-item-both-leading-and-trailing {
  padding-left: 0;
  padding-right: 0;
}

.mdc-list-item.mdc-list-item--disabled .mdc-list-item__primary-text {
  color: var(--mat-list-list-item-disabled-label-text-color, var(--mat-sys-on-surface));
}

.mdc-list-item:hover::before {
  background-color: var(--mat-list-list-item-hover-state-layer-color, var(--mat-sys-on-surface));
  opacity: var(--mat-list-list-item-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));
}

.mdc-list-item.mdc-list-item--disabled::before {
  background-color: var(--mat-list-list-item-disabled-state-layer-color, var(--mat-sys-on-surface));
  opacity: var(--mat-list-list-item-disabled-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}

.mdc-list-item:focus::before {
  background-color: var(--mat-list-list-item-focus-state-layer-color, var(--mat-sys-on-surface));
  opacity: var(--mat-list-list-item-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));
}

.mdc-list-item--disabled .mdc-radio,
.mdc-list-item--disabled .mdc-checkbox {
  opacity: var(--mat-list-list-item-disabled-label-text-opacity, 0.3);
}

.mdc-list-item--with-leading-avatar .mat-mdc-list-item-avatar {
  border-radius: var(--mat-list-list-item-leading-avatar-shape, var(--mat-sys-corner-full));
  background-color: var(--mat-list-list-item-leading-avatar-color, var(--mat-sys-primary-container));
}

.mat-mdc-list-item-icon {
  font-size: var(--mat-list-list-item-leading-icon-size, 24px);
}

@media (forced-colors: active) {
  a.mdc-list-item--activated::after {
    content: "";
    position: absolute;
    top: 50%;
    right: 16px;
    transform: translateY(-50%);
    width: 10px;
    height: 0;
    border-bottom: solid 10px;
    border-radius: 10px;
  }
  a.mdc-list-item--activated [dir=rtl]::after {
    right: auto;
    left: 16px;
  }
}

.mat-mdc-list-base {
  display: block;
}
.mat-mdc-list-base .mdc-list-item__start,
.mat-mdc-list-base .mdc-list-item__end,
.mat-mdc-list-base .mdc-list-item__content {
  pointer-events: auto;
}

.mat-mdc-list-item,
.mat-mdc-list-option {
  width: 100%;
  box-sizing: border-box;
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-list-item:not(.mat-mdc-list-item-interactive),
.mat-mdc-list-option:not(.mat-mdc-list-item-interactive) {
  cursor: default;
}
.mat-mdc-list-item .mat-divider-inset,
.mat-mdc-list-option .mat-divider-inset {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
}
.mat-mdc-list-item .mat-mdc-list-item-avatar ~ .mat-divider-inset,
.mat-mdc-list-option .mat-mdc-list-item-avatar ~ .mat-divider-inset {
  margin-left: 72px;
}
[dir=rtl] .mat-mdc-list-item .mat-mdc-list-item-avatar ~ .mat-divider-inset,
[dir=rtl] .mat-mdc-list-option .mat-mdc-list-item-avatar ~ .mat-divider-inset {
  margin-right: 72px;
}

.mat-mdc-list-item-interactive::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  content: "";
  opacity: 0;
  pointer-events: none;
  border-radius: inherit;
}

.mat-mdc-list-item > .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
}
.mat-mdc-list-item:focus-visible > .mat-focus-indicator::before {
  content: "";
}

.mat-mdc-list-item.mdc-list-item--with-three-lines .mat-mdc-list-item-line.mdc-list-item__secondary-text {
  white-space: nowrap;
  line-height: normal;
}
.mat-mdc-list-item.mdc-list-item--with-three-lines .mat-mdc-list-item-unscoped-content.mdc-list-item__secondary-text {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}

mat-action-list button {
  background: none;
  color: inherit;
  border: none;
  font: inherit;
  outline: inherit;
  -webkit-tap-highlight-color: transparent;
  text-align: start;
}
mat-action-list button::-moz-focus-inner {
  border: 0;
}

.mdc-list-item--with-leading-icon .mdc-list-item__start {
  margin-inline-start: var(--mat-list-list-item-leading-icon-start-space, 16px);
  margin-inline-end: var(--mat-list-list-item-leading-icon-end-space, 16px);
}

.mat-mdc-nav-list .mat-mdc-list-item {
  border-radius: var(--mat-list-active-indicator-shape, var(--mat-sys-corner-full));
  --mat-focus-indicator-border-radius: var(--mat-list-active-indicator-shape, var(--mat-sys-corner-full));
}
.mat-mdc-nav-list .mat-mdc-list-item.mdc-list-item--activated {
  background-color: var(--mat-list-active-indicator-color, var(--mat-sys-secondary-container));
}
`,tc=["unscopedContent"],ec=["text"],ic=[[["","matListItemAvatar",""],["","matListItemIcon",""]],[["","matListItemTitle",""]],[["","matListItemLine",""]],"*",[["","matListItemMeta",""]],[["mat-divider"]]],nc=["[matListItemAvatar],[matListItemIcon]","[matListItemTitle]","[matListItemLine]","*","[matListItemMeta]","mat-divider"];var rc=new y("ListOption"),An=(()=>{class e{_elementRef=l($);constructor(){}static \u0275fac=function(i){return new(i||e)};static \u0275dir=L({type:e,selectors:[["","matListItemTitle",""]],hostAttrs:[1,"mat-mdc-list-item-title","mdc-list-item__primary-text"]})}return e})(),ac=(()=>{class e{_elementRef=l($);constructor(){}static \u0275fac=function(i){return new(i||e)};static \u0275dir=L({type:e,selectors:[["","matListItemLine",""]],hostAttrs:[1,"mat-mdc-list-item-line","mdc-list-item__secondary-text"]})}return e})(),oc=(()=>{class e{static \u0275fac=function(i){return new(i||e)};static \u0275dir=L({type:e,selectors:[["","matListItemMeta",""]],hostAttrs:[1,"mat-mdc-list-item-meta","mdc-list-item__end"]})}return e})(),Va=(()=>{class e{_listOption=l(rc,{optional:!0});constructor(){}_isAlignedAtStart(){return!this._listOption||this._listOption?._getTogglePosition()==="after"}static \u0275fac=function(i){return new(i||e)};static \u0275dir=L({type:e,hostVars:4,hostBindings:function(i,r){i&2&&P("mdc-list-item__start",r._isAlignedAtStart())("mdc-list-item__end",!r._isAlignedAtStart())}})}return e})(),sc=(()=>{class e extends Va{static \u0275fac=(()=>{let t;return function(r){return(t||(t=K(e)))(r||e)}})();static \u0275dir=L({type:e,selectors:[["","matListItemAvatar",""]],hostAttrs:[1,"mat-mdc-list-item-avatar"],features:[st]})}return e})(),Tn=(()=>{class e extends Va{static \u0275fac=(()=>{let t;return function(r){return(t||(t=K(e)))(r||e)}})();static \u0275dir=L({type:e,selectors:[["","matListItemIcon",""]],hostAttrs:[1,"mat-mdc-list-item-icon"],features:[st]})}return e})(),cc=new y("MAT_LIST_CONFIG"),En=(()=>{class e{_isNonInteractive=!0;get disableRipple(){return this._disableRipple}set disableRipple(t){this._disableRipple=H(t)}_disableRipple=!1;get disabled(){return this._disabled()}set disabled(t){this._disabled.set(H(t))}_disabled=b(!1);_defaultOptions=l(cc,{optional:!0});static \u0275fac=function(i){return new(i||e)};static \u0275dir=L({type:e,hostVars:1,hostBindings:function(i,r){i&2&&ct("aria-disabled",r.disabled)},inputs:{disableRipple:"disableRipple",disabled:"disabled"}})}return e})(),lc=(()=>{class e{_elementRef=l($);_ngZone=l(Ct);_listBase=l(En,{optional:!0});_platform=l(Et);_hostElement;_isButtonElement;_noopAnimations=Ke();_avatars;_icons;set lines(t){this._explicitLines=ke(t,null),this._updateItemLines(!1)}_explicitLines=null;get disableRipple(){return this.disabled||this._disableRipple||this._noopAnimations||!!this._listBase?.disableRipple}set disableRipple(t){this._disableRipple=H(t)}_disableRipple=!1;get disabled(){return this._disabled()||!!this._listBase?.disabled}set disabled(t){this._disabled.set(H(t))}_disabled=b(!1);_subscriptions=new $e;_rippleRenderer=null;_hasUnscopedTextContent=!1;rippleConfig;get rippleDisabled(){return this.disableRipple||!!this.rippleConfig.disabled}constructor(){l(fr).load(Mr);let t=l(Sr,{optional:!0});this.rippleConfig=t||{},this._hostElement=this._elementRef.nativeElement,this._isButtonElement=this._hostElement.nodeName.toLowerCase()==="button",this._listBase&&!this._listBase._isNonInteractive&&this._initInteractiveListItem(),this._isButtonElement&&!this._hostElement.hasAttribute("type")&&this._hostElement.setAttribute("type","button")}ngAfterViewInit(){this._monitorProjectedLinesAndTitle(),this._updateItemLines(!0)}ngOnDestroy(){this._subscriptions.unsubscribe(),this._rippleRenderer!==null&&this._rippleRenderer._removeTriggerEvents()}_hasIconOrAvatar(){return!!(this._avatars.length||this._icons.length)}_initInteractiveListItem(){this._hostElement.classList.add("mat-mdc-list-item-interactive"),this._rippleRenderer=new Rr(this,this._ngZone,this._hostElement,this._platform,l(kt)),this._rippleRenderer.setupTriggerEvents(this._hostElement)}_monitorProjectedLinesAndTitle(){this._ngZone.runOutsideAngular(()=>{this._subscriptions.add(qe(this._lines.changes,this._titles.changes).subscribe(()=>this._updateItemLines(!1)))})}_updateItemLines(t){if(!this._lines||!this._titles||!this._unscopedContent)return;t&&this._checkDomForUnscopedTextContent();let i=this._explicitLines??this._inferLinesFromContent(),r=this._unscopedContent.nativeElement;if(this._hostElement.classList.toggle("mat-mdc-list-item-single-line",i<=1),this._hostElement.classList.toggle("mdc-list-item--with-one-line",i<=1),this._hostElement.classList.toggle("mdc-list-item--with-two-lines",i===2),this._hostElement.classList.toggle("mdc-list-item--with-three-lines",i===3),this._hasUnscopedTextContent){let a=this._titles.length===0&&i===1;r.classList.toggle("mdc-list-item__primary-text",a),r.classList.toggle("mdc-list-item__secondary-text",!a)}else r.classList.remove("mdc-list-item__primary-text"),r.classList.remove("mdc-list-item__secondary-text")}_inferLinesFromContent(){let t=this._titles.length+this._lines.length;return this._hasUnscopedTextContent&&(t+=1),t}_checkDomForUnscopedTextContent(){this._hasUnscopedTextContent=Array.from(this._unscopedContent.nativeElement.childNodes).filter(t=>t.nodeType!==t.COMMENT_NODE).some(t=>!!(t.textContent&&t.textContent.trim()))}static \u0275fac=function(i){return new(i||e)};static \u0275dir=L({type:e,contentQueries:function(i,r,a){if(i&1&&dt(a,sc,4)(a,Tn,4),i&2){let o;M(o=D())&&(r._avatars=o),M(o=D())&&(r._icons=o)}},hostVars:4,hostBindings:function(i,r){i&2&&(ct("aria-disabled",r.disabled)("disabled",r._isButtonElement&&r.disabled||null),P("mdc-list-item--disabled",r.disabled))},inputs:{lines:"lines",disableRipple:"disableRipple",disabled:"disabled"}})}return e})();var Qa=(()=>{class e extends lc{_lines;_titles;_meta;_unscopedContent;_itemText;get activated(){return this._activated}set activated(t){this._activated=H(t)}_activated=!1;_getAriaCurrent(){return this._hostElement.nodeName==="A"&&this._activated?"page":null}_hasBothLeadingAndTrailing(){return this._meta.length!==0&&(this._avatars.length!==0||this._icons.length!==0)}static \u0275fac=(()=>{let t;return function(r){return(t||(t=K(e)))(r||e)}})();static \u0275cmp=S({type:e,selectors:[["mat-list-item"],["a","mat-list-item",""],["button","mat-list-item",""]],contentQueries:function(i,r,a){if(i&1&&dt(a,ac,5)(a,An,5)(a,oc,5),i&2){let o;M(o=D())&&(r._lines=o),M(o=D())&&(r._titles=o),M(o=D())&&(r._meta=o)}},viewQuery:function(i,r){if(i&1&&ye(tc,5)(ec,5),i&2){let a;M(a=D())&&(r._unscopedContent=a.first),M(a=D())&&(r._itemText=a.first)}},hostAttrs:[1,"mat-mdc-list-item","mdc-list-item"],hostVars:13,hostBindings:function(i,r){i&2&&(ct("aria-current",r._getAriaCurrent()),P("mdc-list-item--activated",r.activated)("mdc-list-item--with-leading-avatar",r._avatars.length!==0)("mdc-list-item--with-leading-icon",r._icons.length!==0)("mdc-list-item--with-trailing-meta",r._meta.length!==0)("mat-mdc-list-item-both-leading-and-trailing",r._hasBothLeadingAndTrailing())("_mat-animation-noopable",r._noopAnimations))},inputs:{activated:"activated"},exportAs:["matListItem"],features:[st],ngContentSelectors:nc,decls:10,vars:0,consts:[["unscopedContent",""],[1,"mdc-list-item__content"],[1,"mat-mdc-list-item-unscoped-content",3,"cdkObserveContent"],[1,"mat-focus-indicator"]],template:function(i,r){i&1&&(Y(ic),w(0),f(1,"span",1),w(2,1),w(3,2),f(4,"span",2,0),lt("cdkObserveContent",function(){return r._updateItemLines(!0)}),w(6,3),v()(),w(7,4),w(8,5),ft(9,"div",3))},dependencies:[vr],encapsulation:2,changeDetection:0})}return e})();var Ga=(()=>{class e extends En{_isNonInteractive=!1;static \u0275fac=(()=>{let t;return function(r){return(t||(t=K(e)))(r||e)}})();static \u0275cmp=S({type:e,selectors:[["mat-nav-list"]],hostAttrs:["role","navigation",1,"mat-mdc-nav-list","mat-mdc-list-base","mdc-list"],exportAs:["matNavList"],features:[It([{provide:En,useExisting:e}]),st],ngContentSelectors:Xs,decls:1,vars:0,template:function(i,r){i&1&&(Y(),w(0))},styles:[Js],encapsulation:2,changeDetection:0})}return e})();var Wa=(()=>{class e{static \u0275fac=function(i){return new(i||e)};static \u0275mod=ot({type:e});static \u0275inj=rt({imports:[_r,Ir,Dr,At,qa]})}return e})();function hc(e,n){if(e&1&&(f(0,"div",15)(1,"mat-icon"),x(2,"format_quote"),v(),f(3,"span",19),x(4),v()()),e&2){let t=Dt();Rt(4),Bi(t.dailyQuote())}}var Ii=class e{dataService=l(Lr);isDarkMode=b(localStorage.getItem("theme")==="dark");quotes=pr(this.dataService.getQuotes(),{initialValue:[]});dailyQuote=Yt(()=>{let n=this.quotes();return n.length?n[new Date().getDay()%n.length]:""});ngOnInit(){this.applyTheme(this.isDarkMode())}toggleDarkMode(){let n=!this.isDarkMode();this.isDarkMode.set(n),localStorage.setItem("theme",n?"dark":"light"),this.applyTheme(n)}applyTheme(n){document.body.classList.toggle("dark-mode",n)}static \u0275fac=function(t){return new(t||e)};static \u0275cmp=S({type:e,selectors:[["app-layout"]],decls:56,vars:2,consts:[["sidenav",""],[1,"sidenav-container"],["mode","side","opened","",1,"sidenav"],[1,"logo-container"],["mat-list-item","","routerLink","/dashboard","routerLinkActive","active-link"],["matListItemIcon",""],["matListItemTitle",""],["mat-list-item","","routerLink","/subjects","routerLinkActive","active-link"],["mat-list-item","","routerLink","/tracker","routerLinkActive","active-link"],["mat-list-item","","routerLink","/roadmap","routerLinkActive","active-link"],["mat-list-item","","routerLink","/revision","routerLinkActive","active-link"],["mat-list-item","","routerLink","/analytics","routerLinkActive","active-link"],["mat-list-item","","routerLink","/settings","routerLinkActive","active-link"],[1,"top-toolbar"],["mat-icon-button","",3,"click"],[1,"quote-container"],[1,"spacer"],["mat-icon-button","","aria-label","Toggle Dark Mode",3,"click"],[1,"main-content"],[1,"quote-text"]],template:function(t,i){if(t&1){let r=we();f(0,"mat-sidenav-container",1)(1,"mat-sidenav",2,0)(3,"div",3)(4,"mat-icon"),x(5,"school"),v(),f(6,"span"),x(7,"GATE Tracker"),v()(),f(8,"mat-nav-list")(9,"a",4)(10,"mat-icon",5),x(11,"dashboard"),v(),f(12,"span",6),x(13,"Dashboard"),v()(),f(14,"a",7)(15,"mat-icon",5),x(16,"menu_book"),v(),f(17,"span",6),x(18,"Subjects"),v()(),f(19,"a",8)(20,"mat-icon",5),x(21,"track_changes"),v(),f(22,"span",6),x(23,"Daily Tracker"),v()(),f(24,"a",9)(25,"mat-icon",5),x(26,"map"),v(),f(27,"span",6),x(28,"Roadmap"),v()(),f(29,"a",10)(30,"mat-icon",5),x(31,"replay"),v(),f(32,"span",6),x(33,"Revision"),v()(),f(34,"a",11)(35,"mat-icon",5),x(36,"bar_chart"),v(),f(37,"span",6),x(38,"Analytics"),v()(),f(39,"a",12)(40,"mat-icon",5),x(41,"settings"),v(),f(42,"span",6),x(43,"Settings"),v()()()(),f(44,"mat-sidenav-content")(45,"mat-toolbar",13)(46,"button",14),lt("click",function(){_e(r);let o=Fi(2);return be(o.toggle())}),f(47,"mat-icon"),x(48,"menu"),v()(),St(49,hc,5,1,"div",15),ft(50,"span",16),f(51,"button",17),lt("click",function(){return i.toggleDarkMode()}),f(52,"mat-icon"),x(53),v()()(),f(54,"div",18),ft(55,"router-outlet"),v()()()}t&2&&(Rt(49),Mt(i.dailyQuote()?49:-1),Rt(4),Bi(i.isDarkMode()?"light_mode":"dark_mode"))},dependencies:[Rn,Vt,he,xn,Ba,In,Fa,Mi,Ha,$a,Wa,Ga,Qa,Tn,An,Ar,Er,Or,Tr],styles:[".sidenav-container[_ngcontent-%COMP%]{position:absolute;inset:0}.sidenav[_ngcontent-%COMP%]{width:250px;border-right:1px solid var(--border-color);background:var(--bg-surface)}.logo-container[_ngcontent-%COMP%]{padding:20px;display:flex;align-items:center;gap:10px;font-size:1.25rem;font-weight:700;color:var(--primary)}.active-link[_ngcontent-%COMP%]{background:#3f51b526!important}.active-link[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{color:var(--primary)!important}.top-toolbar[_ngcontent-%COMP%]{background:var(--bg-surface)!important;color:var(--text-main)!important;border-bottom:1px solid var(--border-color);box-shadow:none;display:flex;align-items:center}.spacer[_ngcontent-%COMP%]{flex:1 1 auto}.main-content[_ngcontent-%COMP%]{padding:24px;max-width:1200px;margin:0 auto}.quote-container[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px;font-style:italic;color:var(--text-secondary);margin-left:20px;font-size:.875rem}.quote-container[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:1.1rem;height:1.1rem;width:1.1rem;color:var(--primary)}"]})};var Za=[{path:"",component:Ii,children:[{path:"",redirectTo:"dashboard",pathMatch:"full"},{path:"dashboard",loadComponent:()=>import("./chunk-SCZDUAI4.js").then(e=>e.DashboardComponent)},{path:"subjects",loadComponent:()=>import("./chunk-3LOLY6EP.js").then(e=>e.SubjectsComponent)},{path:"tracker",loadComponent:()=>import("./chunk-N4VO7QKI.js").then(e=>e.TrackerComponent)},{path:"roadmap",loadComponent:()=>import("./chunk-YORME637.js").then(e=>e.RoadmapComponent)},{path:"analytics",loadComponent:()=>import("./chunk-UT7OZB6E.js").then(e=>e.AnalyticsComponent)},{path:"revision",loadComponent:()=>import("./chunk-L5I77Z2W.js").then(e=>e.RevisionComponent)},{path:"settings",loadComponent:()=>import("./chunk-4V3KAHPU.js").then(e=>e.SettingsComponent)}]}];var Ka={providers:[nr(),kn(Za),hr(),Pr(Nr())]};var Ei=class e{title=b("gate-civil-tracker");static \u0275fac=function(t){return new(t||e)};static \u0275cmp=S({type:e,selectors:[["app-root"]],decls:1,vars:0,template:function(t,i){t&1&&ft(0,"router-outlet")},dependencies:[Vt],styles:["[_nghost-%COMP%]{display:block;height:100%}"]})};mr(Ei,Ka).catch(e=>console.error(e));
