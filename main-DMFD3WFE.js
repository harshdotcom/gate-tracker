import{a as Rr,b as ie,c as Sr,d as Vi,g as Er}from"./chunk-GFIRY54Q.js";import"./chunk-LGXJMZSC.js";import{a as Ur,b as jr}from"./chunk-MMHW44KB.js";import"./chunk-QBGEI2M4.js";import{a as Ar,b as Or}from"./chunk-XIZKBSBO.js";import{a as fr,b as Pr}from"./chunk-2SDKUTBP.js";import{a as Tr,b as Lr,d as Nr}from"./chunk-MWZEISZD.js";import{C as Ye,E as Mr,F as Dr,H as Ir,b as Ot,c as Ce,e as vr,h as br,i as wr,j as yr,k as xr,n as kr,v as V}from"./chunk-ZK7SE45J.js";import{a as ur,b as gr,d as _r}from"./chunk-W3FAFV2N.js";import{$,$a as tr,$b as k,A as Ct,Aa as Wn,Ab as T,Ac as Hi,B as Ni,Cb as Tt,Cc as pr,D as Fn,Db as tt,Dc as Cr,E as Rt,Eb as w,Ec as Lt,F as Pi,Fb as ht,Gb as xe,Hb as M,Ib as D,K as we,L as it,M as z,Ma as Zn,Mb as ut,Na as Kn,Nb as Ze,O as nt,Oa as bt,Ob as U,P as A,Pb as nr,Q as Bn,Qb as x,Rb as $i,S as R,Sa as Yn,T as st,Ta as Xt,U as $n,V as y,W as St,Wa as Jt,X as l,Xa as ct,Xb as At,Y as Hn,Ya as Xn,Za as Jn,Zb as rr,_ as _t,_b as or,a as m,aa as K,ab as We,ac as te,b as F,ba as Y,bb as S,bc as ar,c as He,cb as lt,cc as sr,d as Ln,db as N,dc as cr,e as Nn,ea as Mt,eb as dt,f as O,fa as Kt,g as W,ga as Ui,gb as er,gc as yt,h as Z,ha as Vn,i as L,ia as X,ib as ir,ic as Ke,j as g,ja as Dt,jb as ji,k as Pn,kb as zi,l as Oi,la as Ge,lb as Fi,m as Un,ma as b,mb as mt,mc as lr,n as E,nb as It,o as Li,oa as Yt,ob as Et,p as at,pa as J,q as _e,qa as qn,qc as dr,r as jn,ra as H,rb as Bi,rc as ke,s as Ve,sa as Qn,sb as f,sc as mr,tb as v,tc as ee,u as qe,ub as wt,uc as hr,v as B,x as Qe,y as be,yb as ye,z as zn,za as Gn}from"./chunk-U6X53BIP.js";var u="primary",Ue=Symbol("RouteTitle"),Zi=class{params;constructor(n){this.params=n||{}}has(n){return Object.prototype.hasOwnProperty.call(this.params,n)}get(n){if(this.has(n)){let t=this.params[n];return Array.isArray(t)?t[0]:t}return null}getAll(n){if(this.has(n)){let t=this.params[n];return Array.isArray(t)?t:[t]}return[]}get keys(){return Object.keys(this.params)}};function Ht(e){return new Zi(e)}function qi(e,n,t){for(let i=0;i<e.length;i++){let r=e[i],o=n[i];if(r[0]===":")t[r.substring(1)]=o;else if(r!==o.path)return!1}return!0}function qr(e,n,t){let i=t.path.split("/"),r=i.indexOf("**");if(r===-1){if(i.length>e.length||t.pathMatch==="full"&&(n.hasChildren()||i.length<e.length))return null;let c={},d=e.slice(0,i.length);return qi(i,d,c)?{consumed:d,posParams:c}:null}if(r!==i.lastIndexOf("**"))return null;let o=i.slice(0,r),a=i.slice(r+1);if(o.length+a.length>e.length||t.pathMatch==="full"&&n.hasChildren()&&t.path!=="**")return null;let s={};return!qi(o,e.slice(0,o.length),s)||!qi(a,e.slice(e.length-a.length),s)?null:{consumed:e,posParams:s}}function ni(e){return new Promise((n,t)=>{e.pipe(Rt()).subscribe({next:i=>n(i),error:i=>t(i)})})}function ta(e,n){if(e.length!==n.length)return!1;for(let t=0;t<e.length;++t)if(!pt(e[t],n[t]))return!1;return!0}function pt(e,n){let t=e?Ki(e):void 0,i=n?Ki(n):void 0;if(!t||!i||t.length!=i.length)return!1;let r;for(let o=0;o<t.length;o++)if(r=t[o],!Qr(e[r],n[r]))return!1;return!0}function Ki(e){return[...Object.keys(e),...Object.getOwnPropertySymbols(e)]}function Qr(e,n){if(Array.isArray(e)&&Array.isArray(n)){if(e.length!==n.length)return!1;let t=[...e].sort(),i=[...n].sort();return t.every((r,o)=>i[o]===r)}else return e===n}function ea(e){return e.length>0?e[e.length-1]:null}function Qt(e){return Oi(e)?e:ir(e)?L(Promise.resolve(e)):g(e)}function Gr(e){return Oi(e)?ni(e):Promise.resolve(e)}var ia={exact:Zr,subset:Kr},Wr={exact:na,subset:ra,ignored:()=>!0},mn={paths:"exact",fragment:"ignored",matrixParams:"ignored",queryParams:"exact"},Ie={paths:"subset",fragment:"ignored",matrixParams:"ignored",queryParams:"subset"};function hn(e,n,t){let i=e instanceof j?e:n.parseUrl(e);return te(()=>Yi(n.lastSuccessfulNavigation()?.finalUrl??new j,i,m(m({},Ie),t)))}function Yi(e,n,t){return ia[t.paths](e.root,n.root,t.matrixParams)&&Wr[t.queryParams](e.queryParams,n.queryParams)&&!(t.fragment==="exact"&&e.fragment!==n.fragment)}function na(e,n){return pt(e,n)}function Zr(e,n,t){if(!$t(e.segments,n.segments)||!ti(e.segments,n.segments,t)||e.numberOfChildren!==n.numberOfChildren)return!1;for(let i in n.children)if(!e.children[i]||!Zr(e.children[i],n.children[i],t))return!1;return!0}function ra(e,n){return Object.keys(n).length<=Object.keys(e).length&&Object.keys(n).every(t=>Qr(e[t],n[t]))}function Kr(e,n,t){return Yr(e,n,n.segments,t)}function Yr(e,n,t,i){if(e.segments.length>t.length){let r=e.segments.slice(0,t.length);return!(!$t(r,t)||n.hasChildren()||!ti(r,t,i))}else if(e.segments.length===t.length){if(!$t(e.segments,t)||!ti(e.segments,t,i))return!1;for(let r in n.children)if(!e.children[r]||!Kr(e.children[r],n.children[r],i))return!1;return!0}else{let r=t.slice(0,e.segments.length),o=t.slice(e.segments.length);return!$t(e.segments,r)||!ti(e.segments,r,i)||!e.children[u]?!1:Yr(e.children[u],n,o,i)}}function ti(e,n,t){return n.every((i,r)=>Wr[t](e[r].parameters,i.parameters))}var j=class{root;queryParams;fragment;_queryParamMap;constructor(n=new _([],{}),t={},i=null){this.root=n,this.queryParams=t,this.fragment=i}get queryParamMap(){return this._queryParamMap??=Ht(this.queryParams),this._queryParamMap}toString(){return sa.serialize(this)}},_=class{segments;children;parent=null;constructor(n,t){this.segments=n,this.children=t,Object.values(t).forEach(i=>i.parent=this)}hasChildren(){return this.numberOfChildren>0}get numberOfChildren(){return Object.keys(this.children).length}toString(){return ei(this)}},Nt=class{path;parameters;_parameterMap;constructor(n,t){this.path=n,this.parameters=t}get parameterMap(){return this._parameterMap??=Ht(this.parameters),this._parameterMap}toString(){return Jr(this)}};function oa(e,n){return $t(e,n)&&e.every((t,i)=>pt(t.parameters,n[i].parameters))}function $t(e,n){return e.length!==n.length?!1:e.every((t,i)=>t.path===n[i].path)}function aa(e,n){let t=[];return Object.entries(e.children).forEach(([i,r])=>{i===u&&(t=t.concat(n(r,i)))}),Object.entries(e.children).forEach(([i,r])=>{i!==u&&(t=t.concat(n(r,i)))}),t}var jt=(()=>{class e{static \u0275fac=function(i){return new(i||e)};static \u0275prov=R({token:e,factory:()=>new kt,providedIn:"root"})}return e})(),kt=class{parse(n){let t=new Ji(n);return new j(t.parseRootSegment(),t.parseQueryParams(),t.parseFragment())}serialize(n){let t=`/${Re(n.root,!0)}`,i=da(n.queryParams),r=typeof n.fragment=="string"?`#${ca(n.fragment)}`:"";return`${t}${i}${r}`}},sa=new kt;function ei(e){return e.segments.map(n=>Jr(n)).join("/")}function Re(e,n){if(!e.hasChildren())return ei(e);if(n){let t=e.children[u]?Re(e.children[u],!1):"",i=[];return Object.entries(e.children).forEach(([r,o])=>{r!==u&&i.push(`${r}:${Re(o,!1)}`)}),i.length>0?`${t}(${i.join("//")})`:t}else{let t=aa(e,(i,r)=>r===u?[Re(e.children[u],!1)]:[`${r}:${Re(i,!1)}`]);return Object.keys(e.children).length===1&&e.children[u]!=null?`${ei(e)}/${t[0]}`:`${ei(e)}/(${t.join("//")})`}}function Xr(e){return encodeURIComponent(e).replace(/%40/g,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",")}function Xe(e){return Xr(e).replace(/%3B/gi,";")}function ca(e){return encodeURI(e)}function Xi(e){return Xr(e).replace(/\(/g,"%28").replace(/\)/g,"%29").replace(/%26/gi,"&")}function ii(e){return decodeURIComponent(e)}function zr(e){return ii(e.replace(/\+/g,"%20"))}function Jr(e){return`${Xi(e.path)}${la(e.parameters)}`}function la(e){return Object.entries(e).map(([n,t])=>`;${Xi(n)}=${Xi(t)}`).join("")}function da(e){let n=Object.entries(e).map(([t,i])=>Array.isArray(i)?i.map(r=>`${Xe(t)}=${Xe(r)}`).join("&"):`${Xe(t)}=${Xe(i)}`).filter(t=>t);return n.length?`?${n.join("&")}`:""}var ma=/^[^\/()?;#]+/;function Qi(e){let n=e.match(ma);return n?n[0]:""}var ha=/^[^\/()?;=#]+/;function ua(e){let n=e.match(ha);return n?n[0]:""}var pa=/^[^=?&#]+/;function ga(e){let n=e.match(pa);return n?n[0]:""}var fa=/^[^&#]+/;function va(e){let n=e.match(fa);return n?n[0]:""}var Ji=class{url;remaining;constructor(n){this.url=n,this.remaining=n}parseRootSegment(){for(;this.consumeOptional("/"););return this.remaining===""||this.peekStartsWith("?")||this.peekStartsWith("#")?new _([],{}):new _([],this.parseChildren())}parseQueryParams(){let n={};if(this.consumeOptional("?"))do this.parseQueryParam(n);while(this.consumeOptional("&"));return n}parseFragment(){return this.consumeOptional("#")?decodeURIComponent(this.remaining):null}parseChildren(n=0){if(n>50)throw new A(4010,!1);if(this.remaining==="")return{};this.consumeOptional("/");let t=[];for(this.peekStartsWith("(")||t.push(this.parseSegment());this.peekStartsWith("/")&&!this.peekStartsWith("//")&&!this.peekStartsWith("/(");)this.capture("/"),t.push(this.parseSegment());let i={};this.peekStartsWith("/(")&&(this.capture("/"),i=this.parseParens(!0,n));let r={};return this.peekStartsWith("(")&&(r=this.parseParens(!1,n)),(t.length>0||Object.keys(i).length>0)&&(r[u]=new _(t,i)),r}parseSegment(){let n=Qi(this.remaining);if(n===""&&this.peekStartsWith(";"))throw new A(4009,!1);return this.capture(n),new Nt(ii(n),this.parseMatrixParams())}parseMatrixParams(){let n={};for(;this.consumeOptional(";");)this.parseParam(n);return n}parseParam(n){let t=ua(this.remaining);if(!t)return;this.capture(t);let i="";if(this.consumeOptional("=")){let r=Qi(this.remaining);r&&(i=r,this.capture(i))}n[ii(t)]=ii(i)}parseQueryParam(n){let t=ga(this.remaining);if(!t)return;this.capture(t);let i="";if(this.consumeOptional("=")){let a=va(this.remaining);a&&(i=a,this.capture(i))}let r=zr(t),o=zr(i);if(n.hasOwnProperty(r)){let a=n[r];Array.isArray(a)||(a=[a],n[r]=a),a.push(o)}else n[r]=o}parseParens(n,t){let i={};for(this.capture("(");!this.consumeOptional(")")&&this.remaining.length>0;){let r=Qi(this.remaining),o=this.remaining[r.length];if(o!=="/"&&o!==")"&&o!==";")throw new A(4010,!1);let a;r.indexOf(":")>-1?(a=r.slice(0,r.indexOf(":")),this.capture(a),this.capture(":")):n&&(a=u);let s=this.parseChildren(t+1);i[a??u]=Object.keys(s).length===1&&s[u]?s[u]:new _([],s),this.consumeOptional("//")}return i}peekStartsWith(n){return this.remaining.startsWith(n)}consumeOptional(n){return this.peekStartsWith(n)?(this.remaining=this.remaining.substring(n.length),!0):!1}capture(n){if(!this.consumeOptional(n))throw new A(4011,!1)}};function to(e){return e.segments.length>0?new _([],{[u]:e}):e}function eo(e){let n={};for(let[i,r]of Object.entries(e.children)){let o=eo(r);if(i===u&&o.segments.length===0&&o.hasChildren())for(let[a,s]of Object.entries(o.children))n[a]=s;else(o.segments.length>0||o.hasChildren())&&(n[i]=o)}let t=new _(e.segments,n);return _a(t)}function _a(e){if(e.numberOfChildren===1&&e.children[u]){let n=e.children[u];return new _(e.segments.concat(n.segments),n.children)}return e}function Pt(e){return e instanceof j}function io(e,n,t=null,i=null,r=new kt){let o=no(e);return ro(o,n,t,i,r)}function no(e){let n;function t(o){let a={};for(let c of o.children){let d=t(c);a[c.outlet]=d}let s=new _(o.url,a);return o===e&&(n=s),s}let i=t(e.root),r=to(i);return n??r}function ro(e,n,t,i,r){let o=e;for(;o.parent;)o=o.parent;if(n.length===0)return Gi(o,o,o,t,i,r);let a=ba(n);if(a.toRoot())return Gi(o,o,new _([],{}),t,i,r);let s=wa(a,o,e),c=s.processChildren?Me(s.segmentGroup,s.index,a.commands):ao(s.segmentGroup,s.index,a.commands);return Gi(o,s.segmentGroup,c,t,i,r)}function ri(e){return typeof e=="object"&&e!=null&&!e.outlets&&!e.segmentPath}function Ee(e){return typeof e=="object"&&e!=null&&e.outlets}function Fr(e,n,t){e||="\u0275";let i=new j;return i.queryParams={[e]:n},t.parse(t.serialize(i)).queryParams[e]}function Gi(e,n,t,i,r,o){let a={};for(let[d,h]of Object.entries(i??{}))a[d]=Array.isArray(h)?h.map(p=>Fr(d,p,o)):Fr(d,h,o);let s;e===n?s=t:s=oo(e,n,t);let c=to(eo(s));return new j(c,a,r)}function oo(e,n,t){let i={};return Object.entries(e.children).forEach(([r,o])=>{o===n?i[r]=t:i[r]=oo(o,n,t)}),new _(e.segments,i)}var oi=class{isAbsolute;numberOfDoubleDots;commands;constructor(n,t,i){if(this.isAbsolute=n,this.numberOfDoubleDots=t,this.commands=i,n&&i.length>0&&ri(i[0]))throw new A(4003,!1);let r=i.find(Ee);if(r&&r!==ea(i))throw new A(4004,!1)}toRoot(){return this.isAbsolute&&this.commands.length===1&&this.commands[0]=="/"}};function ba(e){if(typeof e[0]=="string"&&e.length===1&&e[0]==="/")return new oi(!0,0,e);let n=0,t=!1,i=e.reduce((r,o,a)=>{if(typeof o=="object"&&o!=null){if(o.outlets){let s={};return Object.entries(o.outlets).forEach(([c,d])=>{s[c]=typeof d=="string"?d.split("/"):d}),[...r,{outlets:s}]}if(o.segmentPath)return[...r,o.segmentPath]}return typeof o!="string"?[...r,o]:a===0?(o.split("/").forEach((s,c)=>{c==0&&s==="."||(c==0&&s===""?t=!0:s===".."?n++:s!=""&&r.push(s))}),r):[...r,o]},[]);return new oi(t,n,i)}var re=class{segmentGroup;processChildren;index;constructor(n,t,i){this.segmentGroup=n,this.processChildren=t,this.index=i}};function wa(e,n,t){if(e.isAbsolute)return new re(n,!0,0);if(!t)return new re(n,!1,NaN);if(t.parent===null)return new re(t,!0,0);let i=ri(e.commands[0])?0:1,r=t.segments.length-1+i;return ya(t,r,e.numberOfDoubleDots)}function ya(e,n,t){let i=e,r=n,o=t;for(;o>r;){if(o-=r,i=i.parent,!i)throw new A(4005,!1);r=i.segments.length}return new re(i,!1,r-o)}function xa(e){return Ee(e[0])?e[0].outlets:{[u]:e}}function ao(e,n,t){if(e??=new _([],{}),e.segments.length===0&&e.hasChildren())return Me(e,n,t);let i=ka(e,n,t),r=t.slice(i.commandIndex);if(i.match&&i.pathIndex<e.segments.length){let o=new _(e.segments.slice(0,i.pathIndex),{});return o.children[u]=new _(e.segments.slice(i.pathIndex),e.children),Me(o,0,r)}else return i.match&&r.length===0?new _(e.segments,{}):i.match&&!e.hasChildren()?tn(e,n,t):i.match?Me(e,0,r):tn(e,n,t)}function Me(e,n,t){if(t.length===0)return new _(e.segments,{});{let i=xa(t),r={};if(Object.keys(i).some(o=>o!==u)&&e.children[u]&&e.numberOfChildren===1&&e.children[u].segments.length===0){let o=Me(e.children[u],n,t);return new _(e.segments,o.children)}return Object.entries(i).forEach(([o,a])=>{typeof a=="string"&&(a=[a]),a!==null&&(r[o]=ao(e.children[o],n,a))}),Object.entries(e.children).forEach(([o,a])=>{i[o]===void 0&&(r[o]=a)}),new _(e.segments,r)}}function ka(e,n,t){let i=0,r=n,o={match:!1,pathIndex:0,commandIndex:0};for(;r<e.segments.length;){if(i>=t.length)return o;let a=e.segments[r],s=t[i];if(Ee(s))break;let c=`${s}`,d=i<t.length-1?t[i+1]:null;if(r>0&&c===void 0)break;if(c&&d&&typeof d=="object"&&d.outlets===void 0){if(!$r(c,d,a))return o;i+=2}else{if(!$r(c,{},a))return o;i++}r++}return{match:!0,pathIndex:r,commandIndex:i}}function tn(e,n,t){let i=e.segments.slice(0,n),r=0;for(;r<t.length;){let o=t[r];if(Ee(o)){let c=Ca(o.outlets);return new _(i,c)}if(r===0&&ri(t[0])){let c=e.segments[n];i.push(new Nt(c.path,Br(t[0]))),r++;continue}let a=Ee(o)?o.outlets[u]:`${o}`,s=r<t.length-1?t[r+1]:null;a&&s&&ri(s)?(i.push(new Nt(a,Br(s))),r+=2):(i.push(new Nt(a,{})),r++)}return new _(i,{})}function Ca(e){let n={};return Object.entries(e).forEach(([t,i])=>{typeof i=="string"&&(i=[i]),i!==null&&(n[t]=tn(new _([],{}),0,i))}),n}function Br(e){let n={};return Object.entries(e).forEach(([t,i])=>n[t]=`${i}`),n}function $r(e,n,t){return e==t.path&&pt(n,t.parameters)}var oe="imperative",I=(function(e){return e[e.NavigationStart=0]="NavigationStart",e[e.NavigationEnd=1]="NavigationEnd",e[e.NavigationCancel=2]="NavigationCancel",e[e.NavigationError=3]="NavigationError",e[e.RoutesRecognized=4]="RoutesRecognized",e[e.ResolveStart=5]="ResolveStart",e[e.ResolveEnd=6]="ResolveEnd",e[e.GuardsCheckStart=7]="GuardsCheckStart",e[e.GuardsCheckEnd=8]="GuardsCheckEnd",e[e.RouteConfigLoadStart=9]="RouteConfigLoadStart",e[e.RouteConfigLoadEnd=10]="RouteConfigLoadEnd",e[e.ChildActivationStart=11]="ChildActivationStart",e[e.ChildActivationEnd=12]="ChildActivationEnd",e[e.ActivationStart=13]="ActivationStart",e[e.ActivationEnd=14]="ActivationEnd",e[e.Scroll=15]="Scroll",e[e.NavigationSkipped=16]="NavigationSkipped",e})(I||{}),Q=class{id;url;constructor(n,t){this.id=n,this.url=t}},Ut=class extends Q{type=I.NavigationStart;navigationTrigger;restoredState;constructor(n,t,i="imperative",r=null){super(n,t),this.navigationTrigger=i,this.restoredState=r}toString(){return`NavigationStart(id: ${this.id}, url: '${this.url}')`}},G=class extends Q{urlAfterRedirects;type=I.NavigationEnd;constructor(n,t,i){super(n,t),this.urlAfterRedirects=i}toString(){return`NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`}},P=(function(e){return e[e.Redirect=0]="Redirect",e[e.SupersededByNewNavigation=1]="SupersededByNewNavigation",e[e.NoDataFromResolver=2]="NoDataFromResolver",e[e.GuardRejected=3]="GuardRejected",e[e.Aborted=4]="Aborted",e})(P||{}),se=(function(e){return e[e.IgnoredSameUrlNavigation=0]="IgnoredSameUrlNavigation",e[e.IgnoredByUrlHandlingStrategy=1]="IgnoredByUrlHandlingStrategy",e})(se||{}),et=class extends Q{reason;code;type=I.NavigationCancel;constructor(n,t,i,r){super(n,t),this.reason=i,this.code=r}toString(){return`NavigationCancel(id: ${this.id}, url: '${this.url}')`}};function so(e){return e instanceof et&&(e.code===P.Redirect||e.code===P.SupersededByNewNavigation)}var gt=class extends Q{reason;code;type=I.NavigationSkipped;constructor(n,t,i,r){super(n,t),this.reason=i,this.code=r}},Vt=class extends Q{error;target;type=I.NavigationError;constructor(n,t,i,r){super(n,t),this.error=i,this.target=r}toString(){return`NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`}},Te=class extends Q{urlAfterRedirects;state;type=I.RoutesRecognized;constructor(n,t,i,r){super(n,t),this.urlAfterRedirects=i,this.state=r}toString(){return`RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},ai=class extends Q{urlAfterRedirects;state;type=I.GuardsCheckStart;constructor(n,t,i,r){super(n,t),this.urlAfterRedirects=i,this.state=r}toString(){return`GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},si=class extends Q{urlAfterRedirects;state;shouldActivate;type=I.GuardsCheckEnd;constructor(n,t,i,r,o){super(n,t),this.urlAfterRedirects=i,this.state=r,this.shouldActivate=o}toString(){return`GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`}},ci=class extends Q{urlAfterRedirects;state;type=I.ResolveStart;constructor(n,t,i,r){super(n,t),this.urlAfterRedirects=i,this.state=r}toString(){return`ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},li=class extends Q{urlAfterRedirects;state;type=I.ResolveEnd;constructor(n,t,i,r){super(n,t),this.urlAfterRedirects=i,this.state=r}toString(){return`ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}},di=class{route;type=I.RouteConfigLoadStart;constructor(n){this.route=n}toString(){return`RouteConfigLoadStart(path: ${this.route.path})`}},mi=class{route;type=I.RouteConfigLoadEnd;constructor(n){this.route=n}toString(){return`RouteConfigLoadEnd(path: ${this.route.path})`}},hi=class{snapshot;type=I.ChildActivationStart;constructor(n){this.snapshot=n}toString(){return`ChildActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},ui=class{snapshot;type=I.ChildActivationEnd;constructor(n){this.snapshot=n}toString(){return`ChildActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},pi=class{snapshot;type=I.ActivationStart;constructor(n){this.snapshot=n}toString(){return`ActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},gi=class{snapshot;type=I.ActivationEnd;constructor(n){this.snapshot=n}toString(){return`ActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`}},ce=class{routerEvent;position;anchor;scrollBehavior;type=I.Scroll;constructor(n,t,i,r){this.routerEvent=n,this.position=t,this.anchor=i,this.scrollBehavior=r}toString(){let n=this.position?`${this.position[0]}, ${this.position[1]}`:null;return`Scroll(anchor: '${this.anchor}', position: '${n}')`}},le=class{},Ae=class{},de=class{url;navigationBehaviorOptions;constructor(n,t){this.url=n,this.navigationBehaviorOptions=t}};function Ra(e){return!(e instanceof le)&&!(e instanceof de)&&!(e instanceof Ae)}var fi=class{rootInjector;outlet=null;route=null;children;attachRef=null;get injector(){return this.route?.snapshot._environmentInjector??this.rootInjector}constructor(n){this.rootInjector=n,this.children=new Gt(this.rootInjector)}},Gt=(()=>{class e{rootInjector;contexts=new Map;constructor(t){this.rootInjector=t}onChildOutletCreated(t,i){let r=this.getOrCreateContext(t);r.outlet=i,this.contexts.set(t,r)}onChildOutletDestroyed(t){let i=this.getContext(t);i&&(i.outlet=null,i.attachRef=null)}onOutletDeactivated(){let t=this.contexts;return this.contexts=new Map,t}onOutletReAttached(t){this.contexts=t}getOrCreateContext(t){let i=this.getContext(t);return i||(i=new fi(this.rootInjector),this.contexts.set(t,i)),i}getContext(t){return this.contexts.get(t)||null}static \u0275fac=function(i){return new(i||e)(St(_t))};static \u0275prov=R({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})(),vi=class{_root;constructor(n){this._root=n}get root(){return this._root.value}parent(n){let t=this.pathFromRoot(n);return t.length>1?t[t.length-2]:null}children(n){let t=en(n,this._root);return t?t.children.map(i=>i.value):[]}firstChild(n){let t=en(n,this._root);return t&&t.children.length>0?t.children[0].value:null}siblings(n){let t=nn(n,this._root);return t.length<2?[]:t[t.length-2].children.map(r=>r.value).filter(r=>r!==n)}pathFromRoot(n){return nn(n,this._root).map(t=>t.value)}};function en(e,n){if(e===n.value)return n;for(let t of n.children){let i=en(e,t);if(i)return i}return null}function nn(e,n){if(e===n.value)return[n];for(let t of n.children){let i=nn(e,t);if(i.length)return i.unshift(n),i}return[]}var q=class{value;children;constructor(n,t){this.value=n,this.children=t}toString(){return`TreeNode(${this.value})`}};function ne(e){let n={};return e&&e.children.forEach(t=>n[t.value.outlet]=t),n}var Oe=class extends vi{snapshot;constructor(n,t){super(n),this.snapshot=t,pn(this,n)}toString(){return this.snapshot.toString()}};function co(e,n){let t=Sa(e,n),i=new W([new Nt("",{})]),r=new W({}),o=new W({}),a=new W({}),s=new W(""),c=new ft(i,r,a,s,o,u,e,t.root);return c.snapshot=t.root,new Oe(new q(c,[]),t)}function Sa(e,n){let t={},i={},r={},a=new me([],t,r,"",i,u,e,null,{},n);return new Le("",new q(a,[]))}var ft=class{urlSubject;paramsSubject;queryParamsSubject;fragmentSubject;dataSubject;outlet;component;snapshot;_futureSnapshot;_routerState;_paramMap;_queryParamMap;title;url;params;queryParams;fragment;data;constructor(n,t,i,r,o,a,s,c){this.urlSubject=n,this.paramsSubject=t,this.queryParamsSubject=i,this.fragmentSubject=r,this.dataSubject=o,this.outlet=a,this.component=s,this._futureSnapshot=c,this.title=this.dataSubject?.pipe(E(d=>d[Ue]))??g(void 0),this.url=n,this.params=t,this.queryParams=i,this.fragment=r,this.data=o}get routeConfig(){return this._futureSnapshot.routeConfig}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=this.params.pipe(E(n=>Ht(n))),this._paramMap}get queryParamMap(){return this._queryParamMap??=this.queryParams.pipe(E(n=>Ht(n))),this._queryParamMap}toString(){return this.snapshot?this.snapshot.toString():`Future(${this._futureSnapshot})`}};function un(e,n,t="emptyOnly"){let i,{routeConfig:r}=e;return n!==null&&(t==="always"||r?.path===""||!n.component&&!n.routeConfig?.loadComponent)?i={params:m(m({},n.params),e.params),data:m(m({},n.data),e.data),resolve:m(m(m(m({},e.data),n.data),r?.data),e._resolvedData)}:i={params:m({},e.params),data:m({},e.data),resolve:m(m({},e.data),e._resolvedData??{})},r&&mo(r)&&(i.resolve[Ue]=r.title),i}var me=class{url;params;queryParams;fragment;data;outlet;component;routeConfig;_resolve;_resolvedData;_routerState;_paramMap;_queryParamMap;_environmentInjector;get title(){return this.data?.[Ue]}constructor(n,t,i,r,o,a,s,c,d,h){this.url=n,this.params=t,this.queryParams=i,this.fragment=r,this.data=o,this.outlet=a,this.component=s,this.routeConfig=c,this._resolve=d,this._environmentInjector=h}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=Ht(this.params),this._paramMap}get queryParamMap(){return this._queryParamMap??=Ht(this.queryParams),this._queryParamMap}toString(){let n=this.url.map(i=>i.toString()).join("/"),t=this.routeConfig?this.routeConfig.path:"";return`Route(url:'${n}', path:'${t}')`}},Le=class extends vi{url;constructor(n,t){super(t),this.url=n,pn(this,t)}toString(){return lo(this._root)}};function pn(e,n){n.value._routerState=e,n.children.forEach(t=>pn(e,t))}function lo(e){let n=e.children.length>0?` { ${e.children.map(lo).join(", ")} } `:"";return`${e.value}${n}`}function Wi(e){if(e.snapshot){let n=e.snapshot,t=e._futureSnapshot;e.snapshot=t,pt(n.queryParams,t.queryParams)||e.queryParamsSubject.next(t.queryParams),n.fragment!==t.fragment&&e.fragmentSubject.next(t.fragment),pt(n.params,t.params)||e.paramsSubject.next(t.params),ta(n.url,t.url)||e.urlSubject.next(t.url),pt(n.data,t.data)||e.dataSubject.next(t.data)}else e.snapshot=e._futureSnapshot,e.dataSubject.next(e._futureSnapshot.data)}function rn(e,n){let t=pt(e.params,n.params)&&oa(e.url,n.url),i=!e.parent!=!n.parent;return t&&!i&&(!e.parent||rn(e.parent,n.parent))}function mo(e){return typeof e.title=="string"||e.title===null}var ho=new y(""),Wt=(()=>{class e{activated=null;get activatedComponentRef(){return this.activated}_activatedRoute=null;name=u;activateEvents=new X;deactivateEvents=new X;attachEvents=new X;detachEvents=new X;routerOutletData=cr();parentContexts=l(Gt);location=l(Jn);changeDetector=l(yt);inputBinder=l(je,{optional:!0});supportsBindingToComponentInputs=!0;ngOnChanges(t){if(t.name){let{firstChange:i,previousValue:r}=t.name;if(i)return;this.isTrackedInParentContexts(r)&&(this.deactivate(),this.parentContexts.onChildOutletDestroyed(r)),this.initializeOutletWithName()}}ngOnDestroy(){this.isTrackedInParentContexts(this.name)&&this.parentContexts.onChildOutletDestroyed(this.name),this.inputBinder?.unsubscribeFromRouteData(this)}isTrackedInParentContexts(t){return this.parentContexts.getContext(t)?.outlet===this}ngOnInit(){this.initializeOutletWithName()}initializeOutletWithName(){if(this.parentContexts.onChildOutletCreated(this.name,this),this.activated)return;let t=this.parentContexts.getContext(this.name);t?.route&&(t.attachRef?this.attach(t.attachRef,t.route):this.activateWith(t.route,t.injector))}get isActivated(){return!!this.activated}get component(){if(!this.activated)throw new A(4012,!1);return this.activated.instance}get activatedRoute(){if(!this.activated)throw new A(4012,!1);return this._activatedRoute}get activatedRouteData(){return this._activatedRoute?this._activatedRoute.snapshot.data:{}}detach(){if(!this.activated)throw new A(4012,!1);this.location.detach();let t=this.activated;return this.activated=null,this._activatedRoute=null,this.detachEvents.emit(t.instance),t}attach(t,i){this.activated=t,this._activatedRoute=i,this.location.insert(t.hostView),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.attachEvents.emit(t.instance)}deactivate(){if(this.activated){let t=this.component;this.activated.destroy(),this.activated=null,this._activatedRoute=null,this.deactivateEvents.emit(t)}}activateWith(t,i){if(this.isActivated)throw new A(4013,!1);this._activatedRoute=t;let r=this.location,a=t.snapshot.component,s=this.parentContexts.getOrCreateContext(this.name).children,c=new on(t,s,r.injector,this.routerOutletData);this.activated=r.createComponent(a,{index:r.length,injector:c,environmentInjector:i}),this.changeDetector.markForCheck(),this.inputBinder?.bindActivatedRouteToOutletComponent(this),this.activateEvents.emit(this.activated.instance)}static \u0275fac=function(i){return new(i||e)};static \u0275dir=N({type:e,selectors:[["router-outlet"]],inputs:{name:"name",routerOutletData:[1,"routerOutletData"]},outputs:{activateEvents:"activate",deactivateEvents:"deactivate",attachEvents:"attach",detachEvents:"detach"},exportAs:["outlet"],features:[Yt]})}return e})(),on=class{route;childContexts;parent;outletData;constructor(n,t,i,r){this.route=n,this.childContexts=t,this.parent=i,this.outletData=r}get(n,t){return n===ft?this.route:n===Gt?this.childContexts:n===ho?this.outletData:this.parent.get(n,t)}},je=new y(""),gn=(()=>{class e{outletDataSubscriptions=new Map;bindActivatedRouteToOutletComponent(t){this.unsubscribeFromRouteData(t),this.subscribeToRouteData(t)}unsubscribeFromRouteData(t){this.outletDataSubscriptions.get(t)?.unsubscribe(),this.outletDataSubscriptions.delete(t)}subscribeToRouteData(t){let{activatedRoute:i}=t,r=Li([i.queryParams,i.params,i.data]).pipe(it(([o,a,s],c)=>(s=m(m(m({},o),a),s),c===0?g(s):Promise.resolve(s)))).subscribe(o=>{if(!t.isActivated||!t.activatedComponentRef||t.activatedRoute!==i||i.component===null){this.unsubscribeFromRouteData(t);return}let a=lr(i.component);if(!a){this.unsubscribeFromRouteData(t);return}for(let{templateName:s}of a.inputs)t.activatedComponentRef.setInput(s,o[s])});this.outletDataSubscriptions.set(t,r)}static \u0275fac=function(i){return new(i||e)};static \u0275prov=R({token:e,factory:e.\u0275fac})}return e})(),fn=(()=>{class e{static \u0275fac=function(i){return new(i||e)};static \u0275cmp=S({type:e,selectors:[["ng-component"]],exportAs:["emptyRouterOutlet"],decls:1,vars:0,template:function(i,r){i&1&&wt(0,"router-outlet")},dependencies:[Wt],encapsulation:2})}return e})();function vn(e){let n=e.children&&e.children.map(vn),t=n?F(m({},e),{children:n}):m({},e);return!t.component&&!t.loadComponent&&(n||t.loadChildren)&&t.outlet&&t.outlet!==u&&(t.component=fn),t}function Ma(e,n,t){let i=Ne(e,n._root,t?t._root:void 0);return new Oe(i,n)}function Ne(e,n,t){if(t&&e.shouldReuseRoute(n.value,t.value.snapshot)){let i=t.value;i._futureSnapshot=n.value;let r=Da(e,n,t);return new q(i,r)}else{if(e.shouldAttach(n.value)){let o=e.retrieve(n.value);if(o!==null){let a=o.route;return a.value._futureSnapshot=n.value,a.children=n.children.map(s=>Ne(e,s)),a}}let i=Ia(n.value),r=n.children.map(o=>Ne(e,o));return new q(i,r)}}function Da(e,n,t){return n.children.map(i=>{for(let r of t.children)if(e.shouldReuseRoute(i.value,r.value.snapshot))return Ne(e,i,r);return Ne(e,i)})}function Ia(e){return new ft(new W(e.url),new W(e.params),new W(e.queryParams),new W(e.fragment),new W(e.data),e.outlet,e.component,e)}var he=class{redirectTo;navigationBehaviorOptions;constructor(n,t){this.redirectTo=n,this.navigationBehaviorOptions=t}},uo="ngNavigationCancelingError";function _i(e,n){let{redirectTo:t,navigationBehaviorOptions:i}=Pt(n)?{redirectTo:n,navigationBehaviorOptions:void 0}:n,r=po(!1,P.Redirect);return r.url=t,r.navigationBehaviorOptions=i,r}function po(e,n){let t=new Error(`NavigationCancelingError: ${e||""}`);return t[uo]=!0,t.cancellationCode=n,t}function Ea(e){return go(e)&&Pt(e.url)}function go(e){return!!e&&e[uo]}var an=class{routeReuseStrategy;futureState;currState;forwardEvent;inputBindingEnabled;constructor(n,t,i,r,o){this.routeReuseStrategy=n,this.futureState=t,this.currState=i,this.forwardEvent=r,this.inputBindingEnabled=o}activate(n){let t=this.futureState._root,i=this.currState?this.currState._root:null;this.deactivateChildRoutes(t,i,n),Wi(this.futureState.root),this.activateChildRoutes(t,i,n)}deactivateChildRoutes(n,t,i){let r=ne(t);n.children.forEach(o=>{let a=o.value.outlet;this.deactivateRoutes(o,r[a],i),delete r[a]}),Object.values(r).forEach(o=>{this.deactivateRouteAndItsChildren(o,i)})}deactivateRoutes(n,t,i){let r=n.value,o=t?t.value:null;if(r===o)if(r.component){let a=i.getContext(r.outlet);a&&this.deactivateChildRoutes(n,t,a.children)}else this.deactivateChildRoutes(n,t,i);else o&&this.deactivateRouteAndItsChildren(t,i)}deactivateRouteAndItsChildren(n,t){n.value.component&&this.routeReuseStrategy.shouldDetach(n.value.snapshot)?this.detachAndStoreRouteSubtree(n,t):this.deactivateRouteAndOutlet(n,t)}detachAndStoreRouteSubtree(n,t){let i=t.getContext(n.value.outlet),r=i&&n.value.component?i.children:t,o=ne(n);for(let a of Object.values(o))this.deactivateRouteAndItsChildren(a,r);if(i&&i.outlet){let a=i.outlet.detach(),s=i.children.onOutletDeactivated();this.routeReuseStrategy.store(n.value.snapshot,{componentRef:a,route:n,contexts:s})}}deactivateRouteAndOutlet(n,t){let i=t.getContext(n.value.outlet),r=i&&n.value.component?i.children:t,o=ne(n);for(let a of Object.values(o))this.deactivateRouteAndItsChildren(a,r);i&&(i.outlet&&(i.outlet.deactivate(),i.children.onOutletDeactivated()),i.attachRef=null,i.route=null)}activateChildRoutes(n,t,i){let r=ne(t);n.children.forEach(o=>{this.activateRoutes(o,r[o.value.outlet],i),this.forwardEvent(new gi(o.value.snapshot))}),n.children.length&&this.forwardEvent(new ui(n.value.snapshot))}activateRoutes(n,t,i){let r=n.value,o=t?t.value:null;if(Wi(r),r===o)if(r.component){let a=i.getOrCreateContext(r.outlet);this.activateChildRoutes(n,t,a.children)}else this.activateChildRoutes(n,t,i);else if(r.component){let a=i.getOrCreateContext(r.outlet);if(this.routeReuseStrategy.shouldAttach(r.snapshot)){let s=this.routeReuseStrategy.retrieve(r.snapshot);this.routeReuseStrategy.store(r.snapshot,null),a.children.onOutletReAttached(s.contexts),a.attachRef=s.componentRef,a.route=s.route.value,a.outlet&&a.outlet.attach(s.componentRef,s.route.value),Wi(s.route.value),this.activateChildRoutes(n,null,a.children)}else a.attachRef=null,a.route=r,a.outlet&&a.outlet.activateWith(r,a.injector),this.activateChildRoutes(n,null,a.children)}else this.activateChildRoutes(n,null,i)}},bi=class{path;route;constructor(n){this.path=n,this.route=this.path[this.path.length-1]}},ae=class{component;route;constructor(n,t){this.component=n,this.route=t}};function Ta(e,n,t){let i=e._root,r=n?n._root:null;return Se(i,r,t,[i.value])}function Aa(e){let n=e.routeConfig?e.routeConfig.canActivateChild:null;return!n||n.length===0?null:{node:e,guards:n}}function pe(e,n){let t=Symbol(),i=n.get(e,t);return i===t?typeof e=="function"&&!$n(e)?e:n.get(e):i}function Se(e,n,t,i,r={canDeactivateChecks:[],canActivateChecks:[]}){let o=ne(n);return e.children.forEach(a=>{Oa(a,o[a.value.outlet],t,i.concat([a.value]),r),delete o[a.value.outlet]}),Object.entries(o).forEach(([a,s])=>De(s,t.getContext(a),r)),r}function Oa(e,n,t,i,r={canDeactivateChecks:[],canActivateChecks:[]}){let o=e.value,a=n?n.value:null,s=t?t.getContext(e.value.outlet):null;if(a&&o.routeConfig===a.routeConfig){let c=La(a,o,o.routeConfig.runGuardsAndResolvers);c?r.canActivateChecks.push(new bi(i)):(o.data=a.data,o._resolvedData=a._resolvedData),o.component?Se(e,n,s?s.children:null,i,r):Se(e,n,t,i,r),c&&s&&s.outlet&&s.outlet.isActivated&&r.canDeactivateChecks.push(new ae(s.outlet.component,a))}else a&&De(n,s,r),r.canActivateChecks.push(new bi(i)),o.component?Se(e,null,s?s.children:null,i,r):Se(e,null,t,i,r);return r}function La(e,n,t){if(typeof t=="function")return $(n._environmentInjector,()=>t(e,n));switch(t){case"pathParamsChange":return!$t(e.url,n.url);case"pathParamsOrQueryParamsChange":return!$t(e.url,n.url)||!pt(e.queryParams,n.queryParams);case"always":return!0;case"paramsOrQueryParamsChange":return!rn(e,n)||!pt(e.queryParams,n.queryParams);default:return!rn(e,n)}}function De(e,n,t){let i=ne(e),r=e.value;Object.entries(i).forEach(([o,a])=>{r.component?n?De(a,n.children.getContext(o),t):De(a,null,t):De(a,n,t)}),r.component?n&&n.outlet&&n.outlet.isActivated?t.canDeactivateChecks.push(new ae(n.outlet.component,r)):t.canDeactivateChecks.push(new ae(null,r)):t.canDeactivateChecks.push(new ae(null,r))}function ze(e){return typeof e=="function"}function Na(e){return typeof e=="boolean"}function Pa(e){return e&&ze(e.canLoad)}function Ua(e){return e&&ze(e.canActivate)}function ja(e){return e&&ze(e.canActivateChild)}function za(e){return e&&ze(e.canDeactivate)}function Fa(e){return e&&ze(e.canMatch)}function fo(e){return e instanceof Un||e?.name==="EmptyError"}var Je=Symbol("INITIAL_VALUE");function ue(){return it(e=>Li(e.map(n=>n.pipe(Ct(1),we(Je)))).pipe(E(n=>{for(let t of n)if(t!==!0){if(t===Je)return Je;if(t===!1||Ba(t))return t}return!0}),B(n=>n!==Je),Ct(1)))}function Ba(e){return Pt(e)||e instanceof he}function vo(e){return e.aborted?g(void 0).pipe(Ct(1)):new Nn(n=>{let t=()=>{n.next(),n.complete()};return e.addEventListener("abort",t),()=>e.removeEventListener("abort",t)})}function _o(e){return z(vo(e))}function $a(e){return at(n=>{let{targetSnapshot:t,currentSnapshot:i,guards:{canActivateChecks:r,canDeactivateChecks:o}}=n;return o.length===0&&r.length===0?g(F(m({},n),{guardsResult:!0})):Ha(o,t,i).pipe(at(a=>a&&Na(a)?Va(t,r,e):g(a)),E(a=>F(m({},n),{guardsResult:a})))})}function Ha(e,n,t){return L(e).pipe(at(i=>Za(i.component,i.route,t,n)),Rt(i=>i!==!0,!0))}function Va(e,n,t){return L(n).pipe(be(i=>jn(Qa(i.route.parent,t),qa(i.route,t),Wa(e,i.path),Ga(e,i.route))),Rt(i=>i!==!0,!0))}function qa(e,n){return e!==null&&n&&n(new pi(e)),g(!0)}function Qa(e,n){return e!==null&&n&&n(new hi(e)),g(!0)}function Ga(e,n){let t=n.routeConfig?n.routeConfig.canActivate:null;if(!t||t.length===0)return g(!0);let i=t.map(r=>Ve(()=>{let o=n._environmentInjector,a=pe(r,o),s=Ua(a)?a.canActivate(n,e):$(o,()=>a(n,e));return Qt(s).pipe(Rt())}));return g(i).pipe(ue())}function Wa(e,n){let t=n[n.length-1],r=n.slice(0,n.length-1).reverse().map(o=>Aa(o)).filter(o=>o!==null).map(o=>Ve(()=>{let a=o.guards.map(s=>{let c=o.node._environmentInjector,d=pe(s,c),h=ja(d)?d.canActivateChild(t,e):$(c,()=>d(t,e));return Qt(h).pipe(Rt())});return g(a).pipe(ue())}));return g(r).pipe(ue())}function Za(e,n,t,i){let r=n&&n.routeConfig?n.routeConfig.canDeactivate:null;if(!r||r.length===0)return g(!0);let o=r.map(a=>{let s=n._environmentInjector,c=pe(a,s),d=za(c)?c.canDeactivate(e,n,t,i):$(s,()=>c(e,n,t,i));return Qt(d).pipe(Rt())});return g(o).pipe(ue())}function Ka(e,n,t,i,r){let o=n.canLoad;if(o===void 0||o.length===0)return g(!0);let a=o.map(s=>{let c=pe(s,e),d=Pa(c)?c.canLoad(n,t):$(e,()=>c(n,t)),h=Qt(d);return r?h.pipe(_o(r)):h});return g(a).pipe(ue(),bo(i))}function bo(e){return Ln(nt(n=>{if(typeof n!="boolean")throw _i(e,n)}),E(n=>n===!0))}function Ya(e,n,t,i,r,o){let a=n.canMatch;if(!a||a.length===0)return g(!0);let s=a.map(c=>{let d=pe(c,e),h=Fa(d)?d.canMatch(n,t,r):$(e,()=>d(n,t,r));return Qt(h).pipe(_o(o))});return g(s).pipe(ue(),bo(i))}var xt=class e extends Error{segmentGroup;constructor(n){super(),this.segmentGroup=n||null,Object.setPrototypeOf(this,e.prototype)}},Pe=class e extends Error{urlTree;constructor(n){super(),this.urlTree=n,Object.setPrototypeOf(this,e.prototype)}};function Xa(e){throw new A(4e3,!1)}function Ja(e){throw po(!1,P.GuardRejected)}var sn=class{urlSerializer;urlTree;constructor(n,t){this.urlSerializer=n,this.urlTree=t}async lineralizeSegments(n,t){let i=[],r=t.root;for(;;){if(i=i.concat(r.segments),r.numberOfChildren===0)return i;if(r.numberOfChildren>1||!r.children[u])throw Xa(`${n.redirectTo}`);r=r.children[u]}}async applyRedirectCommands(n,t,i,r,o){let a=await ts(t,r,o);if(a instanceof j)throw new Pe(a);let s=this.applyRedirectCreateUrlTree(a,this.urlSerializer.parse(a),n,i);if(a[0]==="/")throw new Pe(s);return s}applyRedirectCreateUrlTree(n,t,i,r){let o=this.createSegmentGroup(n,t.root,i,r);return new j(o,this.createQueryParams(t.queryParams,this.urlTree.queryParams),t.fragment)}createQueryParams(n,t){let i={};return Object.entries(n).forEach(([r,o])=>{if(typeof o=="string"&&o[0]===":"){let s=o.substring(1);i[r]=t[s]}else i[r]=o}),i}createSegmentGroup(n,t,i,r){let o=this.createSegments(n,t.segments,i,r),a={};return Object.entries(t.children).forEach(([s,c])=>{a[s]=this.createSegmentGroup(n,c,i,r)}),new _(o,a)}createSegments(n,t,i,r){return t.map(o=>o.path[0]===":"?this.findPosParam(n,o,r):this.findOrReturn(o,i))}findPosParam(n,t,i){let r=i[t.path.substring(1)];if(!r)throw new A(4001,!1);return r}findOrReturn(n,t){let i=0;for(let r of t){if(r.path===n.path)return t.splice(i),r;i++}return n}};function ts(e,n,t){if(typeof e=="string")return Promise.resolve(e);let i=e;return ni(Qt($(t,()=>i(n))))}function es(e,n){return e.providers&&!e._injector&&(e._injector=We(e.providers,n,`Route: ${e.path}`)),e._injector??n}function rt(e){return e.outlet||u}function is(e,n){let t=e.filter(i=>rt(i)===n);return t.push(...e.filter(i=>rt(i)!==n)),t}var cn={matched:!1,consumedSegments:[],remainingSegments:[],parameters:{},positionalParamSegments:{}};function wo(e){return{routeConfig:e.routeConfig,url:e.url,params:e.params,queryParams:e.queryParams,fragment:e.fragment,data:e.data,outlet:e.outlet,title:e.title,paramMap:e.paramMap,queryParamMap:e.queryParamMap}}function ns(e,n,t,i,r,o,a){let s=yo(e,n,t);if(!s.matched)return g(s);let c=wo(o(s));return i=es(n,i),Ya(i,n,t,r,c,a).pipe(E(d=>d===!0?s:m({},cn)))}function yo(e,n,t){if(n.path==="")return n.pathMatch==="full"&&(e.hasChildren()||t.length>0)?m({},cn):{matched:!0,consumedSegments:[],remainingSegments:t,parameters:{},positionalParamSegments:{}};let r=(n.matcher||qr)(t,e,n);if(!r)return m({},cn);let o={};Object.entries(r.posParams??{}).forEach(([s,c])=>{o[s]=c.path});let a=r.consumed.length>0?m(m({},o),r.consumed[r.consumed.length-1].parameters):o;return{matched:!0,consumedSegments:r.consumed,remainingSegments:t.slice(r.consumed.length),parameters:a,positionalParamSegments:r.posParams??{}}}function Hr(e,n,t,i,r){return t.length>0&&as(e,t,i,r)?{segmentGroup:new _(n,os(i,new _(t,e.children))),slicedSegments:[]}:t.length===0&&ss(e,t,i)?{segmentGroup:new _(e.segments,rs(e,t,i,e.children)),slicedSegments:t}:{segmentGroup:new _(e.segments,e.children),slicedSegments:t}}function rs(e,n,t,i){let r={};for(let o of t)if(yi(e,n,o)&&!i[rt(o)]){let a=new _([],{});r[rt(o)]=a}return m(m({},i),r)}function os(e,n){let t={};t[u]=n;for(let i of e)if(i.path===""&&rt(i)!==u){let r=new _([],{});t[rt(i)]=r}return t}function as(e,n,t,i){return t.some(r=>!yi(e,n,r)||!(rt(r)!==u)?!1:!(i!==void 0&&rt(r)===i))}function ss(e,n,t){return t.some(i=>yi(e,n,i))}function yi(e,n,t){return(e.hasChildren()||n.length>0)&&t.pathMatch==="full"?!1:t.path===""}function cs(e,n,t){return n.length===0&&!e.children[t]}var ln=class{};async function ls(e,n,t,i,r,o,a="emptyOnly",s){return new dn(e,n,t,i,r,a,o,s).recognize()}var ds=31,dn=class{injector;configLoader;rootComponentType;config;urlTree;paramsInheritanceStrategy;urlSerializer;abortSignal;applyRedirects;absoluteRedirectCount=0;allowRedirects=!0;constructor(n,t,i,r,o,a,s,c){this.injector=n,this.configLoader=t,this.rootComponentType=i,this.config=r,this.urlTree=o,this.paramsInheritanceStrategy=a,this.urlSerializer=s,this.abortSignal=c,this.applyRedirects=new sn(this.urlSerializer,this.urlTree)}noMatchError(n){return new A(4002,`'${n.segmentGroup}'`)}async recognize(){let n=Hr(this.urlTree.root,[],[],this.config).segmentGroup,{children:t,rootSnapshot:i}=await this.match(n),r=new q(i,t),o=new Le("",r),a=io(i,[],this.urlTree.queryParams,this.urlTree.fragment);return a.queryParams=this.urlTree.queryParams,o.url=this.urlSerializer.serialize(a),{state:o,tree:a}}async match(n){let t=new me([],Object.freeze({}),Object.freeze(m({},this.urlTree.queryParams)),this.urlTree.fragment,Object.freeze({}),u,this.rootComponentType,null,{},this.injector);try{return{children:await this.processSegmentGroup(this.injector,this.config,n,u,t),rootSnapshot:t}}catch(i){if(i instanceof Pe)return this.urlTree=i.urlTree,this.match(i.urlTree.root);throw i instanceof xt?this.noMatchError(i):i}}async processSegmentGroup(n,t,i,r,o){if(i.segments.length===0&&i.hasChildren())return this.processChildren(n,t,i,o);let a=await this.processSegment(n,t,i,i.segments,r,!0,o);return a instanceof q?[a]:[]}async processChildren(n,t,i,r){let o=[];for(let c of Object.keys(i.children))c==="primary"?o.unshift(c):o.push(c);let a=[];for(let c of o){let d=i.children[c],h=is(t,c),p=await this.processSegmentGroup(n,h,d,c,r);a.push(...p)}let s=xo(a);return ms(s),s}async processSegment(n,t,i,r,o,a,s){for(let c of t)try{return await this.processSegmentAgainstRoute(c._injector??n,t,c,i,r,o,a,s)}catch(d){if(d instanceof xt||fo(d))continue;throw d}if(cs(i,r,o))return new ln;throw new xt(i)}async processSegmentAgainstRoute(n,t,i,r,o,a,s,c){if(rt(i)!==a&&(a===u||!yi(r,o,i)))throw new xt(r);if(i.redirectTo===void 0)return this.matchSegmentAgainstRoute(n,r,i,o,a,c);if(this.allowRedirects&&s)return this.expandSegmentAgainstRouteUsingRedirect(n,r,t,i,o,a,c);throw new xt(r)}async expandSegmentAgainstRouteUsingRedirect(n,t,i,r,o,a,s){let{matched:c,parameters:d,consumedSegments:h,positionalParamSegments:p,remainingSegments:C}=yo(t,r,o);if(!c)throw new xt(t);typeof r.redirectTo=="string"&&r.redirectTo[0]==="/"&&(this.absoluteRedirectCount++,this.absoluteRedirectCount>ds&&(this.allowRedirects=!1));let Ft=this.createSnapshot(n,r,o,d,s);if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);let vt=await this.applyRedirects.applyRedirectCommands(h,r.redirectTo,p,wo(Ft),n),Bt=await this.applyRedirects.lineralizeSegments(r,vt);return this.processSegment(n,i,t,Bt.concat(C),a,!1,s)}createSnapshot(n,t,i,r,o){let a=new me(i,r,Object.freeze(m({},this.urlTree.queryParams)),this.urlTree.fragment,us(t),rt(t),t.component??t._loadedComponent??null,t,ps(t),n),s=un(a,o,this.paramsInheritanceStrategy);return a.params=Object.freeze(s.params),a.data=Object.freeze(s.data),a}async matchSegmentAgainstRoute(n,t,i,r,o,a){if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);let s=$e=>this.createSnapshot(n,i,$e.consumedSegments,$e.parameters,a),c=await ni(ns(t,i,r,n,this.urlSerializer,s,this.abortSignal));if(i.path==="**"&&(t.children={}),!c?.matched)throw new xt(t);n=i._injector??n;let{routes:d}=await this.getChildConfig(n,i,r),h=i._loadedInjector??n,{parameters:p,consumedSegments:C,remainingSegments:Ft}=c,vt=this.createSnapshot(n,i,C,p,a),{segmentGroup:Bt,slicedSegments:fe}=Hr(t,C,Ft,d,o);if(fe.length===0&&Bt.hasChildren()){let $e=await this.processChildren(h,d,Bt,vt);return new q(vt,$e)}if(d.length===0&&fe.length===0)return new q(vt,[]);let Ai=rt(i)===o,ve=await this.processSegment(h,d,Bt,fe,Ai?u:o,!0,vt);return new q(vt,ve instanceof q?[ve]:[])}async getChildConfig(n,t,i){if(t.children)return{routes:t.children,injector:n};if(t.loadChildren){if(t._loadedRoutes!==void 0){let o=t._loadedNgModuleFactory;return o&&!t._loadedInjector&&(t._loadedInjector=o.create(n).injector),{routes:t._loadedRoutes,injector:t._loadedInjector}}if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);if(await ni(Ka(n,t,i,this.urlSerializer,this.abortSignal))){let o=await this.configLoader.loadChildren(n,t);return t._loadedRoutes=o.routes,t._loadedInjector=o.injector,t._loadedNgModuleFactory=o.factory,o}throw Ja(t)}return{routes:[],injector:n}}};function ms(e){e.sort((n,t)=>n.value.outlet===u?-1:t.value.outlet===u?1:n.value.outlet.localeCompare(t.value.outlet))}function hs(e){let n=e.value.routeConfig;return n&&n.path===""}function xo(e){let n=[],t=new Set;for(let i of e){if(!hs(i)){n.push(i);continue}let r=n.find(o=>i.value.routeConfig===o.value.routeConfig);r!==void 0?(r.children.push(...i.children),t.add(r)):n.push(i)}for(let i of t){let r=xo(i.children);n.push(new q(i.value,r))}return n.filter(i=>!t.has(i))}function us(e){return e.data||{}}function ps(e){return e.resolve||{}}function gs(e,n,t,i,r,o,a){return at(async s=>{let{state:c,tree:d}=await ls(e,n,t,i,s.extractedUrl,r,o,a);return F(m({},s),{targetSnapshot:c,urlAfterRedirects:d})})}function fs(e){return at(n=>{let{targetSnapshot:t,guards:{canActivateChecks:i}}=n;if(!i.length)return g(n);let r=new Set(i.map(s=>s.route)),o=new Set;for(let s of r)if(!o.has(s))for(let c of ko(s))o.add(c);let a=0;return L(o).pipe(be(s=>r.has(s)?vs(s,t,e):(s.data=un(s,s.parent,e).resolve,g(void 0))),nt(()=>a++),Pi(1),at(s=>a===o.size?g(n):Z))})}function ko(e){let n=e.children.map(t=>ko(t)).flat();return[e,...n]}function vs(e,n,t){let i=e.routeConfig,r=e._resolve;return i?.title!==void 0&&!mo(i)&&(r[Ue]=i.title),Ve(()=>(e.data=un(e,e.parent,t).resolve,_s(r,e,n).pipe(E(o=>(e._resolvedData=o,e.data=m(m({},e.data),o),null)))))}function _s(e,n,t){let i=Ki(e);if(i.length===0)return g({});let r={};return L(i).pipe(at(o=>bs(e[o],n,t).pipe(Rt(),nt(a=>{if(a instanceof he)throw _i(new kt,a);r[o]=a}))),Pi(1),E(()=>r),Qe(o=>fo(o)?Z:Pn(o)))}function bs(e,n,t){let i=n._environmentInjector,r=pe(e,i),o=r.resolve?r.resolve(n,t):$(i,()=>r(n,t));return Qt(o)}function Vr(e){return it(n=>{let t=e(n);return t?L(t).pipe(E(()=>n)):g(n)})}var _n=(()=>{class e{buildTitle(t){let i,r=t.root;for(;r!==void 0;)i=this.getResolvedTitleForRoute(r)??i,r=r.children.find(o=>o.outlet===u);return i}getResolvedTitleForRoute(t){return t.data[Ue]}static \u0275fac=function(i){return new(i||e)};static \u0275prov=R({token:e,factory:()=>l(Co),providedIn:"root"})}return e})(),Co=(()=>{class e extends _n{title;constructor(t){super(),this.title=t}updateTitle(t){let i=this.buildTitle(t);i!==void 0&&this.title.setTitle(i)}static \u0275fac=function(i){return new(i||e)(St(gr))};static \u0275prov=R({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})(),zt=new y("",{factory:()=>({})}),Zt=new y(""),xi=(()=>{class e{componentLoaders=new WeakMap;childrenLoaders=new WeakMap;onLoadStartListener;onLoadEndListener;compiler=l(rr);async loadComponent(t,i){if(this.componentLoaders.get(i))return this.componentLoaders.get(i);if(i._loadedComponent)return Promise.resolve(i._loadedComponent);this.onLoadStartListener&&this.onLoadStartListener(i);let r=(async()=>{try{let o=await Gr($(t,()=>i.loadComponent())),a=await Mo(So(o));return this.onLoadEndListener&&this.onLoadEndListener(i),i._loadedComponent=a,a}finally{this.componentLoaders.delete(i)}})();return this.componentLoaders.set(i,r),r}loadChildren(t,i){if(this.childrenLoaders.get(i))return this.childrenLoaders.get(i);if(i._loadedRoutes)return Promise.resolve({routes:i._loadedRoutes,injector:i._loadedInjector});this.onLoadStartListener&&this.onLoadStartListener(i);let r=(async()=>{try{let o=await Ro(i,this.compiler,t,this.onLoadEndListener);return i._loadedRoutes=o.routes,i._loadedInjector=o.injector,i._loadedNgModuleFactory=o.factory,o}finally{this.childrenLoaders.delete(i)}})();return this.childrenLoaders.set(i,r),r}static \u0275fac=function(i){return new(i||e)};static \u0275prov=R({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();async function Ro(e,n,t,i){let r=await Gr($(t,()=>e.loadChildren())),o=await Mo(So(r)),a;o instanceof tr||Array.isArray(o)?a=o:a=await n.compileModuleAsync(o),i&&i(e);let s,c,d=!1,h;return Array.isArray(a)?(c=a,d=!0):(s=a.create(t).injector,h=a,c=s.get(Zt,[],{optional:!0,self:!0}).flat()),{routes:c.map(vn),injector:s,factory:h}}function ws(e){return e&&typeof e=="object"&&"default"in e}function So(e){return ws(e)?e.default:e}async function Mo(e){return e}var ki=(()=>{class e{static \u0275fac=function(i){return new(i||e)};static \u0275prov=R({token:e,factory:()=>l(ys),providedIn:"root"})}return e})(),ys=(()=>{class e{shouldProcessUrl(t){return!0}extract(t){return t}merge(t,i){return t}static \u0275fac=function(i){return new(i||e)};static \u0275prov=R({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})(),bn=new y(""),wn=new y("");function Do(e,n,t){let i=e.get(wn),r=e.get(Kt);if(!r.startViewTransition||i.skipNextTransition)return i.skipNextTransition=!1,new Promise(d=>setTimeout(d));let o,a=new Promise(d=>{o=d}),s=r.startViewTransition(()=>(o(),xs(e)));s.updateCallbackDone.catch(d=>{}),s.ready.catch(d=>{}),s.finished.catch(d=>{});let{onViewTransitionCreated:c}=i;return c&&$(e,()=>c({transition:s,from:n,to:t})),a}function xs(e){return new Promise(n=>{Xt({read:()=>setTimeout(n)},{injector:e})})}var ks=()=>{},yn=new y(""),Ci=(()=>{class e{currentNavigation=b(null,{equal:()=>!1});currentTransition=null;lastSuccessfulNavigation=b(null);events=new O;transitionAbortWithErrorSubject=new O;configLoader=l(xi);environmentInjector=l(_t);destroyRef=l(Ui);urlSerializer=l(jt);rootContexts=l(Gt);location=l(ee);inputBindingEnabled=l(je,{optional:!0})!==null;titleStrategy=l(_n);options=l(zt,{optional:!0})||{};paramsInheritanceStrategy=this.options.paramsInheritanceStrategy||"emptyOnly";urlHandlingStrategy=l(ki);createViewTransition=l(bn,{optional:!0});navigationErrorHandler=l(yn,{optional:!0});navigationId=0;get hasRequestedNavigation(){return this.navigationId!==0}transitions;afterPreactivation=()=>g(void 0);rootComponentType=null;destroyed=!1;constructor(){let t=r=>this.events.next(new di(r)),i=r=>this.events.next(new mi(r));this.configLoader.onLoadEndListener=i,this.configLoader.onLoadStartListener=t,this.destroyRef.onDestroy(()=>{this.destroyed=!0})}complete(){this.transitions?.complete()}handleNavigationRequest(t){let i=++this.navigationId;k(()=>{this.transitions?.next(F(m({},t),{extractedUrl:this.urlHandlingStrategy.extract(t.rawUrl),targetSnapshot:null,targetRouterState:null,guards:{canActivateChecks:[],canDeactivateChecks:[]},guardsResult:null,id:i,routesRecognizeHandler:{},beforeActivateHandler:{}}))})}setupNavigations(t){return this.transitions=new W(null),this.transitions.pipe(B(i=>i!==null),it(i=>{let r=!1,o=new AbortController,a=()=>!r&&this.currentTransition?.id===i.id;return g(i).pipe(it(s=>{if(this.navigationId>i.id)return this.cancelNavigationTransition(i,"",P.SupersededByNewNavigation),Z;this.currentTransition=i;let c=this.lastSuccessfulNavigation();this.currentNavigation.set({id:s.id,initialUrl:s.rawUrl,extractedUrl:s.extractedUrl,targetBrowserUrl:typeof s.extras.browserUrl=="string"?this.urlSerializer.parse(s.extras.browserUrl):s.extras.browserUrl,trigger:s.source,extras:s.extras,previousNavigation:c?F(m({},c),{previousNavigation:null}):null,abort:()=>o.abort(),routesRecognizeHandler:s.routesRecognizeHandler,beforeActivateHandler:s.beforeActivateHandler});let d=!t.navigated||this.isUpdatingInternalState()||this.isUpdatedBrowserUrl(),h=s.extras.onSameUrlNavigation??t.onSameUrlNavigation;if(!d&&h!=="reload")return this.events.next(new gt(s.id,this.urlSerializer.serialize(s.rawUrl),"",se.IgnoredSameUrlNavigation)),s.resolve(!1),Z;if(this.urlHandlingStrategy.shouldProcessUrl(s.rawUrl))return g(s).pipe(it(p=>(this.events.next(new Ut(p.id,this.urlSerializer.serialize(p.extractedUrl),p.source,p.restoredState)),p.id!==this.navigationId?Z:Promise.resolve(p))),gs(this.environmentInjector,this.configLoader,this.rootComponentType,t.config,this.urlSerializer,this.paramsInheritanceStrategy,o.signal),nt(p=>{i.targetSnapshot=p.targetSnapshot,i.urlAfterRedirects=p.urlAfterRedirects,this.currentNavigation.update(C=>(C.finalUrl=p.urlAfterRedirects,C)),this.events.next(new Ae)}),it(p=>L(i.routesRecognizeHandler.deferredHandle??g(void 0)).pipe(E(()=>p))),nt(()=>{let p=new Te(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);this.events.next(p)}));if(d&&this.urlHandlingStrategy.shouldProcessUrl(s.currentRawUrl)){let{id:p,extractedUrl:C,source:Ft,restoredState:vt,extras:Bt}=s,fe=new Ut(p,this.urlSerializer.serialize(C),Ft,vt);this.events.next(fe);let Ai=co(this.rootComponentType,this.environmentInjector).snapshot;return this.currentTransition=i=F(m({},s),{targetSnapshot:Ai,urlAfterRedirects:C,extras:F(m({},Bt),{skipLocationChange:!1,replaceUrl:!1})}),this.currentNavigation.update(ve=>(ve.finalUrl=C,ve)),g(i)}else return this.events.next(new gt(s.id,this.urlSerializer.serialize(s.extractedUrl),"",se.IgnoredByUrlHandlingStrategy)),s.resolve(!1),Z}),E(s=>{let c=new ai(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);return this.events.next(c),this.currentTransition=i=F(m({},s),{guards:Ta(s.targetSnapshot,s.currentSnapshot,this.rootContexts)}),i}),$a(s=>this.events.next(s)),it(s=>{if(i.guardsResult=s.guardsResult,s.guardsResult&&typeof s.guardsResult!="boolean")throw _i(this.urlSerializer,s.guardsResult);let c=new si(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot,!!s.guardsResult);if(this.events.next(c),!a())return Z;if(!s.guardsResult)return this.cancelNavigationTransition(s,"",P.GuardRejected),Z;if(s.guards.canActivateChecks.length===0)return g(s);let d=new ci(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);if(this.events.next(d),!a())return Z;let h=!1;return g(s).pipe(fs(this.paramsInheritanceStrategy),nt({next:()=>{h=!0;let p=new li(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);this.events.next(p)},complete:()=>{h||this.cancelNavigationTransition(s,"",P.NoDataFromResolver)}}))}),Vr(s=>{let c=h=>{let p=[];if(h.routeConfig?._loadedComponent)h.component=h.routeConfig?._loadedComponent;else if(h.routeConfig?.loadComponent){let C=h._environmentInjector;p.push(this.configLoader.loadComponent(C,h.routeConfig).then(Ft=>{h.component=Ft}))}for(let C of h.children)p.push(...c(C));return p},d=c(s.targetSnapshot.root);return d.length===0?g(s):L(Promise.all(d).then(()=>s))}),Vr(()=>this.afterPreactivation()),it(()=>{let{currentSnapshot:s,targetSnapshot:c}=i,d=this.createViewTransition?.(this.environmentInjector,s.root,c.root);return d?L(d).pipe(E(()=>i)):g(i)}),Ct(1),it(s=>{let c=Ma(t.routeReuseStrategy,s.targetSnapshot,s.currentRouterState);this.currentTransition=i=s=F(m({},s),{targetRouterState:c}),this.currentNavigation.update(h=>(h.targetRouterState=c,h)),this.events.next(new le);let d=i.beforeActivateHandler.deferredHandle;return d?L(d.then(()=>s)):g(s)}),nt(s=>{new an(t.routeReuseStrategy,i.targetRouterState,i.currentRouterState,c=>this.events.next(c),this.inputBindingEnabled).activate(this.rootContexts),a()&&(r=!0,this.currentNavigation.update(c=>(c.abort=ks,c)),this.lastSuccessfulNavigation.set(k(this.currentNavigation)),this.events.next(new G(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects))),this.titleStrategy?.updateTitle(s.targetRouterState.snapshot),s.resolve(!0))}),z(vo(o.signal).pipe(B(()=>!r&&!i.targetRouterState),nt(()=>{this.cancelNavigationTransition(i,o.signal.reason+"",P.Aborted)}))),nt({complete:()=>{r=!0}}),z(this.transitionAbortWithErrorSubject.pipe(nt(s=>{throw s}))),Fn(()=>{o.abort(),r||this.cancelNavigationTransition(i,"",P.SupersededByNewNavigation),this.currentTransition?.id===i.id&&(this.currentNavigation.set(null),this.currentTransition=null)}),Qe(s=>{if(r=!0,this.destroyed)return i.resolve(!1),Z;if(go(s))this.events.next(new et(i.id,this.urlSerializer.serialize(i.extractedUrl),s.message,s.cancellationCode)),Ea(s)?this.events.next(new de(s.url,s.navigationBehaviorOptions)):i.resolve(!1);else{let c=new Vt(i.id,this.urlSerializer.serialize(i.extractedUrl),s,i.targetSnapshot??void 0);try{let d=$(this.environmentInjector,()=>this.navigationErrorHandler?.(c));if(d instanceof he){let{message:h,cancellationCode:p}=_i(this.urlSerializer,d);this.events.next(new et(i.id,this.urlSerializer.serialize(i.extractedUrl),h,p)),this.events.next(new de(d.redirectTo,d.navigationBehaviorOptions))}else throw this.events.next(c),s}catch(d){this.options.resolveNavigationPromiseOnError?i.resolve(!1):i.reject(d)}}return Z}))}))}cancelNavigationTransition(t,i,r){let o=new et(t.id,this.urlSerializer.serialize(t.extractedUrl),i,r);this.events.next(o),t.resolve(!1)}isUpdatingInternalState(){return this.currentTransition?.extractedUrl.toString()!==this.currentTransition?.currentUrlTree.toString()}isUpdatedBrowserUrl(){let t=this.urlHandlingStrategy.extract(this.urlSerializer.parse(this.location.path(!0))),i=k(this.currentNavigation),r=i?.targetBrowserUrl??i?.extractedUrl;return t.toString()!==r?.toString()&&!i?.extras.skipLocationChange}static \u0275fac=function(i){return new(i||e)};static \u0275prov=R({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();function Cs(e){return e!==oe}var Io=new y("");var Eo=(()=>{class e{static \u0275fac=function(i){return new(i||e)};static \u0275prov=R({token:e,factory:()=>l(Rs),providedIn:"root"})}return e})(),wi=class{shouldDetach(n){return!1}store(n,t){}shouldAttach(n){return!1}retrieve(n){return null}shouldReuseRoute(n,t){return n.routeConfig===t.routeConfig}shouldDestroyInjector(n){return!0}},Rs=(()=>{class e extends wi{static \u0275fac=(()=>{let t;return function(r){return(t||(t=J(e)))(r||e)}})();static \u0275prov=R({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})(),Ri=(()=>{class e{urlSerializer=l(jt);options=l(zt,{optional:!0})||{};canceledNavigationResolution=this.options.canceledNavigationResolution||"replace";location=l(ee);urlHandlingStrategy=l(ki);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";currentUrlTree=new j;getCurrentUrlTree(){return this.currentUrlTree}rawUrlTree=this.currentUrlTree;getRawUrlTree(){return this.rawUrlTree}createBrowserPath({finalUrl:t,initialUrl:i,targetBrowserUrl:r}){let o=t!==void 0?this.urlHandlingStrategy.merge(t,i):i,a=r??o;return a instanceof j?this.urlSerializer.serialize(a):a}routerUrlState(t){return t?.targetBrowserUrl===void 0||t?.finalUrl===void 0?{}:{\u0275routerUrl:this.urlSerializer.serialize(t.finalUrl)}}commitTransition({targetRouterState:t,finalUrl:i,initialUrl:r}){i&&t?(this.currentUrlTree=i,this.rawUrlTree=this.urlHandlingStrategy.merge(i,r),this.routerState=t):this.rawUrlTree=r}routerState=co(null,l(_t));getRouterState(){return this.routerState}_stateMemento=this.createStateMemento();get stateMemento(){return this._stateMemento}updateStateMemento(){this._stateMemento=this.createStateMemento()}createStateMemento(){return{rawUrlTree:this.rawUrlTree,currentUrlTree:this.currentUrlTree,routerState:this.routerState}}restoredState(){return this.location.getState()}static \u0275fac=function(i){return new(i||e)};static \u0275prov=R({token:e,factory:()=>l(Ss),providedIn:"root"})}return e})(),Ss=(()=>{class e extends Ri{currentPageId=0;lastSuccessfulId=-1;get browserPageId(){return this.canceledNavigationResolution!=="computed"?this.currentPageId:this.restoredState()?.\u0275routerPageId??this.currentPageId}registerNonRouterCurrentEntryChangeListener(t){return this.location.subscribe(i=>{i.type==="popstate"&&setTimeout(()=>{t(i.url,i.state,"popstate",{replaceUrl:!0})})})}handleRouterEvent(t,i){t instanceof Ut?this.updateStateMemento():t instanceof gt?this.commitTransition(i):t instanceof Te?this.urlUpdateStrategy==="eager"&&(i.extras.skipLocationChange||this.setBrowserUrl(this.createBrowserPath(i),i)):t instanceof le?(this.commitTransition(i),this.urlUpdateStrategy==="deferred"&&!i.extras.skipLocationChange&&this.setBrowserUrl(this.createBrowserPath(i),i)):t instanceof et&&!so(t)?this.restoreHistory(i):t instanceof Vt?this.restoreHistory(i,!0):t instanceof G&&(this.lastSuccessfulId=t.id,this.currentPageId=this.browserPageId)}setBrowserUrl(t,i){let{extras:r,id:o}=i,{replaceUrl:a,state:s}=r;if(this.location.isCurrentPathEqualTo(t)||a){let c=this.browserPageId,d=m(m({},s),this.generateNgRouterState(o,c,i));this.location.replaceState(t,"",d)}else{let c=m(m({},s),this.generateNgRouterState(o,this.browserPageId+1,i));this.location.go(t,"",c)}}restoreHistory(t,i=!1){if(this.canceledNavigationResolution==="computed"){let r=this.browserPageId,o=this.currentPageId-r;o!==0?this.location.historyGo(o):this.getCurrentUrlTree()===t.finalUrl&&o===0&&(this.resetInternalState(t),this.resetUrlToCurrentUrlTree())}else this.canceledNavigationResolution==="replace"&&(i&&this.resetInternalState(t),this.resetUrlToCurrentUrlTree())}resetInternalState({finalUrl:t}){this.routerState=this.stateMemento.routerState,this.currentUrlTree=this.stateMemento.currentUrlTree,this.rawUrlTree=this.urlHandlingStrategy.merge(this.currentUrlTree,t??this.rawUrlTree)}resetUrlToCurrentUrlTree(){this.location.replaceState(this.urlSerializer.serialize(this.getRawUrlTree()),"",this.generateNgRouterState(this.lastSuccessfulId,this.currentPageId))}generateNgRouterState(t,i,r){return this.canceledNavigationResolution==="computed"?m({navigationId:t,\u0275routerPageId:i},this.routerUrlState(r)):m({navigationId:t},this.routerUrlState(r))}static \u0275fac=(()=>{let t;return function(r){return(t||(t=J(e)))(r||e)}})();static \u0275prov=R({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();function Si(e,n){e.events.pipe(B(t=>t instanceof G||t instanceof et||t instanceof Vt||t instanceof gt),E(t=>t instanceof G||t instanceof gt?0:(t instanceof et?t.code===P.Redirect||t.code===P.SupersededByNewNavigation:!1)?2:1),B(t=>t!==2),Ct(1)).subscribe(()=>{n()})}var ot=(()=>{class e{get currentUrlTree(){return this.stateManager.getCurrentUrlTree()}get rawUrlTree(){return this.stateManager.getRawUrlTree()}disposed=!1;nonRouterCurrentEntryChangeSubscription;console=l(er);stateManager=l(Ri);options=l(zt,{optional:!0})||{};pendingTasks=l(Vn);urlUpdateStrategy=this.options.urlUpdateStrategy||"deferred";navigationTransitions=l(Ci);urlSerializer=l(jt);location=l(ee);urlHandlingStrategy=l(ki);injector=l(_t);_events=new O;get events(){return this._events}get routerState(){return this.stateManager.getRouterState()}navigated=!1;routeReuseStrategy=l(Eo);injectorCleanup=l(Io,{optional:!0});onSameUrlNavigation=this.options.onSameUrlNavigation||"ignore";config=l(Zt,{optional:!0})?.flat()??[];componentInputBindingEnabled=!!l(je,{optional:!0});currentNavigation=this.navigationTransitions.currentNavigation.asReadonly();constructor(){this.resetConfig(this.config),this.navigationTransitions.setupNavigations(this).subscribe({error:t=>{}}),this.subscribeToNavigationEvents()}eventsSubscription=new He;subscribeToNavigationEvents(){let t=this.navigationTransitions.events.subscribe(i=>{try{let r=this.navigationTransitions.currentTransition,o=k(this.navigationTransitions.currentNavigation);if(r!==null&&o!==null){if(this.stateManager.handleRouterEvent(i,o),i instanceof et&&i.code!==P.Redirect&&i.code!==P.SupersededByNewNavigation)this.navigated=!0;else if(i instanceof G)this.navigated=!0,this.injectorCleanup?.(this.routeReuseStrategy,this.routerState,this.config);else if(i instanceof de){let a=i.navigationBehaviorOptions,s=this.urlHandlingStrategy.merge(i.url,r.currentRawUrl),c=m({scroll:r.extras.scroll,browserUrl:r.extras.browserUrl,info:r.extras.info,skipLocationChange:r.extras.skipLocationChange,replaceUrl:r.extras.replaceUrl||this.urlUpdateStrategy==="eager"||Cs(r.source)},a);this.scheduleNavigation(s,oe,null,c,{resolve:r.resolve,reject:r.reject,promise:r.promise})}}Ra(i)&&this._events.next(i)}catch(r){this.navigationTransitions.transitionAbortWithErrorSubject.next(r)}});this.eventsSubscription.add(t)}resetRootComponentType(t){this.routerState.root.component=t,this.navigationTransitions.rootComponentType=t}initialNavigation(){this.setUpLocationChangeListener(),this.navigationTransitions.hasRequestedNavigation||this.navigateToSyncWithBrowser(this.location.path(!0),oe,this.stateManager.restoredState(),{replaceUrl:!0})}setUpLocationChangeListener(){this.nonRouterCurrentEntryChangeSubscription??=this.stateManager.registerNonRouterCurrentEntryChangeListener((t,i,r,o)=>{this.navigateToSyncWithBrowser(t,r,i,o)})}navigateToSyncWithBrowser(t,i,r,o){let a=r?.navigationId?r:null,s=r?.\u0275routerUrl??t;if(r?.\u0275routerUrl&&(o=F(m({},o),{browserUrl:t})),r){let d=m({},r);delete d.navigationId,delete d.\u0275routerPageId,delete d.\u0275routerUrl,Object.keys(d).length!==0&&(o.state=d)}let c=this.parseUrl(s);this.scheduleNavigation(c,i,a,o).catch(d=>{this.disposed||this.injector.get(Ge)(d)})}get url(){return this.serializeUrl(this.currentUrlTree)}getCurrentNavigation(){return k(this.navigationTransitions.currentNavigation)}get lastSuccessfulNavigation(){return this.navigationTransitions.lastSuccessfulNavigation}resetConfig(t){this.config=t.map(vn),this.navigated=!1}ngOnDestroy(){this.dispose()}dispose(){this._events.unsubscribe(),this.navigationTransitions.complete(),this.nonRouterCurrentEntryChangeSubscription?.unsubscribe(),this.nonRouterCurrentEntryChangeSubscription=void 0,this.disposed=!0,this.eventsSubscription.unsubscribe()}createUrlTree(t,i={}){let{relativeTo:r,queryParams:o,fragment:a,queryParamsHandling:s,preserveFragment:c}=i,d=c?this.currentUrlTree.fragment:a,h=null;switch(s??this.options.defaultQueryParamsHandling){case"merge":h=m(m({},this.currentUrlTree.queryParams),o);break;case"preserve":h=this.currentUrlTree.queryParams;break;default:h=o||null}h!==null&&(h=this.removeEmptyProps(h));let p;try{let C=r?r.snapshot:this.routerState.snapshot.root;p=no(C)}catch{(typeof t[0]!="string"||t[0][0]!=="/")&&(t=[]),p=this.currentUrlTree.root}return ro(p,t,h,d??null,this.urlSerializer)}navigateByUrl(t,i={skipLocationChange:!1}){let r=Pt(t)?t:this.parseUrl(t),o=this.urlHandlingStrategy.merge(r,this.rawUrlTree);return this.scheduleNavigation(o,oe,null,i)}navigate(t,i={skipLocationChange:!1}){return Ms(t),this.navigateByUrl(this.createUrlTree(t,i),i)}serializeUrl(t){return this.urlSerializer.serialize(t)}parseUrl(t){try{return this.urlSerializer.parse(t)}catch{return this.console.warn(Bn(4018,!1)),this.urlSerializer.parse("/")}}isActive(t,i){let r;if(i===!0?r=m({},mn):i===!1?r=m({},Ie):r=m(m({},Ie),i),Pt(t))return Yi(this.currentUrlTree,t,r);let o=this.parseUrl(t);return Yi(this.currentUrlTree,o,r)}removeEmptyProps(t){return Object.entries(t).reduce((i,[r,o])=>(o!=null&&(i[r]=o),i),{})}scheduleNavigation(t,i,r,o,a){if(this.disposed)return Promise.resolve(!1);let s,c,d;a?(s=a.resolve,c=a.reject,d=a.promise):d=new Promise((p,C)=>{s=p,c=C});let h=this.pendingTasks.add();return Si(this,()=>{queueMicrotask(()=>this.pendingTasks.remove(h))}),this.navigationTransitions.handleNavigationRequest({source:i,restoredState:r,currentUrlTree:this.currentUrlTree,currentRawUrl:this.currentUrlTree,rawUrl:t,extras:o,resolve:s,reject:c,promise:d,currentSnapshot:this.routerState.snapshot,currentRouterState:this.routerState}),d.catch(Promise.reject.bind(Promise))}static \u0275fac=function(i){return new(i||e)};static \u0275prov=R({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();function Ms(e){for(let n=0;n<e.length;n++)if(e[n]==null)throw new A(4008,!1)}var Ds=(()=>{class e{router=l(ot);stateManager=l(Ri);fragment=b("");queryParams=b({});path=b("");serializer=l(jt);constructor(){this.updateState(),this.router.events?.subscribe(t=>{t instanceof G&&this.updateState()})}updateState(){let{fragment:t,root:i,queryParams:r}=this.stateManager.getCurrentUrlTree();this.fragment.set(t),this.queryParams.set(r),this.path.set(this.serializer.serialize(new j(i)))}static \u0275fac=function(i){return new(i||e)};static \u0275prov=R({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})(),ge=(()=>{class e{router;route;tabIndexAttribute;renderer;el;locationStrategy;hrefAttributeValue=l(new sr("href"),{optional:!0});reactiveHref=ar(()=>this.isAnchorElement?this.computeHref(this._urlTree()):this.hrefAttributeValue);get href(){return k(this.reactiveHref)}set href(t){this.reactiveHref.set(t)}set target(t){this._target.set(t)}get target(){return k(this._target)}_target=b(void 0);set queryParams(t){this._queryParams.set(t)}get queryParams(){return k(this._queryParams)}_queryParams=b(void 0,{equal:()=>!1});set fragment(t){this._fragment.set(t)}get fragment(){return k(this._fragment)}_fragment=b(void 0);set queryParamsHandling(t){this._queryParamsHandling.set(t)}get queryParamsHandling(){return k(this._queryParamsHandling)}_queryParamsHandling=b(void 0);set state(t){this._state.set(t)}get state(){return k(this._state)}_state=b(void 0,{equal:()=>!1});set info(t){this._info.set(t)}get info(){return k(this._info)}_info=b(void 0,{equal:()=>!1});set relativeTo(t){this._relativeTo.set(t)}get relativeTo(){return k(this._relativeTo)}_relativeTo=b(void 0);set preserveFragment(t){this._preserveFragment.set(t)}get preserveFragment(){return k(this._preserveFragment)}_preserveFragment=b(!1);set skipLocationChange(t){this._skipLocationChange.set(t)}get skipLocationChange(){return k(this._skipLocationChange)}_skipLocationChange=b(!1);set replaceUrl(t){this._replaceUrl.set(t)}get replaceUrl(){return k(this._replaceUrl)}_replaceUrl=b(!1);isAnchorElement;onChanges=new O;applicationErrorHandler=l(Ge);options=l(zt,{optional:!0});reactiveRouterState=l(Ds);constructor(t,i,r,o,a,s){this.router=t,this.route=i,this.tabIndexAttribute=r,this.renderer=o,this.el=a,this.locationStrategy=s;let c=a.nativeElement.tagName?.toLowerCase();this.isAnchorElement=c==="a"||c==="area"||!!(typeof customElements=="object"&&customElements.get(c)?.observedAttributes?.includes?.("href"))}setTabIndexIfNotOnNativeEl(t){this.tabIndexAttribute!=null||this.isAnchorElement||this.applyAttributeValue("tabindex",t)}ngOnChanges(t){this.onChanges.next(this)}routerLinkInput=b(null);set routerLink(t){t==null?(this.routerLinkInput.set(null),this.setTabIndexIfNotOnNativeEl(null)):(Pt(t)?this.routerLinkInput.set(t):this.routerLinkInput.set(Array.isArray(t)?t:[t]),this.setTabIndexIfNotOnNativeEl("0"))}onClick(t,i,r,o,a){let s=this._urlTree();if(s===null||this.isAnchorElement&&(t!==0||i||r||o||a||typeof this.target=="string"&&this.target!="_self"))return!0;let c={skipLocationChange:this.skipLocationChange,replaceUrl:this.replaceUrl,state:this.state,info:this.info};return this.router.navigateByUrl(s,c)?.catch(d=>{this.applicationErrorHandler(d)}),!this.isAnchorElement}ngOnDestroy(){}applyAttributeValue(t,i){let r=this.renderer,o=this.el.nativeElement;i!==null?r.setAttribute(o,t,i):r.removeAttribute(o,t)}_urlTree=te(()=>{this.reactiveRouterState.path(),this._preserveFragment()&&this.reactiveRouterState.fragment();let t=r=>r==="preserve"||r==="merge";(t(this._queryParamsHandling())||t(this.options?.defaultQueryParamsHandling))&&this.reactiveRouterState.queryParams();let i=this.routerLinkInput();return i===null||!this.router.createUrlTree?null:Pt(i)?i:this.router.createUrlTree(i,{relativeTo:this._relativeTo()!==void 0?this._relativeTo():this.route,queryParams:this._queryParams(),fragment:this._fragment(),queryParamsHandling:this._queryParamsHandling(),preserveFragment:this._preserveFragment()})},{equal:(t,i)=>this.computeHref(t)===this.computeHref(i)});get urlTree(){return k(this._urlTree)}computeHref(t){return t!==null&&this.locationStrategy?this.locationStrategy?.prepareExternalUrl(this.router.serializeUrl(t))??"":null}static \u0275fac=function(i){return new(i||e)(ct(ot),ct(ft),qn("tabindex"),ct(Jt),ct(H),ct(ke))};static \u0275dir=N({type:e,selectors:[["","routerLink",""]],hostVars:2,hostBindings:function(i,r){i&1&&T("click",function(a){return r.onClick(a.button,a.ctrlKey,a.shiftKey,a.altKey,a.metaKey)}),i&2&&mt("href",r.reactiveHref(),Zn)("target",r._target())},inputs:{target:"target",queryParams:"queryParams",fragment:"fragment",queryParamsHandling:"queryParamsHandling",state:"state",info:"info",relativeTo:"relativeTo",preserveFragment:[2,"preserveFragment","preserveFragment",Ke],skipLocationChange:[2,"skipLocationChange","skipLocationChange",Ke],replaceUrl:[2,"replaceUrl","replaceUrl",Ke],routerLink:"routerLink"},features:[Yt]})}return e})(),kn=(()=>{class e{router;element;renderer;cdr;links;classes=[];routerEventsSubscription;linkInputChangesSubscription;_isActive=!1;get isActive(){return this._isActive}routerLinkActiveOptions={exact:!1};ariaCurrentWhenActive;isActiveChange=new X;link=l(ge,{optional:!0});constructor(t,i,r,o){this.router=t,this.element=i,this.renderer=r,this.cdr=o,this.routerEventsSubscription=t.events.subscribe(a=>{a instanceof G&&this.update()})}ngAfterContentInit(){g(this.links.changes,g(null)).pipe(_e()).subscribe(t=>{this.update(),this.subscribeToEachLinkOnChanges()})}subscribeToEachLinkOnChanges(){this.linkInputChangesSubscription?.unsubscribe();let t=[...this.links.toArray(),this.link].filter(i=>!!i).map(i=>i.onChanges);this.linkInputChangesSubscription=L(t).pipe(_e()).subscribe(i=>{this._isActive!==this.isLinkActive(this.router)(i)&&this.update()})}set routerLinkActive(t){let i=Array.isArray(t)?t:t.split(" ");this.classes=i.filter(r=>!!r)}ngOnChanges(t){this.update()}ngOnDestroy(){this.routerEventsSubscription.unsubscribe(),this.linkInputChangesSubscription?.unsubscribe()}update(){!this.links||!this.router.navigated||queueMicrotask(()=>{let t=this.hasActiveLinks();this.classes.forEach(i=>{t?this.renderer.addClass(this.element.nativeElement,i):this.renderer.removeClass(this.element.nativeElement,i)}),t&&this.ariaCurrentWhenActive!==void 0?this.renderer.setAttribute(this.element.nativeElement,"aria-current",this.ariaCurrentWhenActive.toString()):this.renderer.removeAttribute(this.element.nativeElement,"aria-current"),this._isActive!==t&&(this._isActive=t,this.cdr.markForCheck(),this.isActiveChange.emit(t))})}isLinkActive(t){let i=Is(this.routerLinkActiveOptions)?this.routerLinkActiveOptions:this.routerLinkActiveOptions.exact??!1?m({},mn):m({},Ie);return r=>{let o=r.urlTree;return o?k(hn(o,t,i)):!1}}hasActiveLinks(){let t=this.isLinkActive(this.router);return this.link&&t(this.link)||this.links.some(t)}static \u0275fac=function(i){return new(i||e)(ct(ot),ct(H),ct(Jt),ct(yt))};static \u0275dir=N({type:e,selectors:[["","routerLinkActive",""]],contentQueries:function(i,r,o){if(i&1&&ht(o,ge,5),i&2){let a;M(a=D())&&(r.links=a)}},inputs:{routerLinkActiveOptions:"routerLinkActiveOptions",ariaCurrentWhenActive:"ariaCurrentWhenActive",routerLinkActive:"routerLinkActive"},outputs:{isActiveChange:"isActiveChange"},exportAs:["routerLinkActive"],features:[Yt]})}return e})();function Is(e){let n=e;return!!(n.paths||n.matrixParams||n.queryParams||n.fragment)}var Fe=class{};var To=(()=>{class e{router;injector;preloadingStrategy;loader;subscription;constructor(t,i,r,o){this.router=t,this.injector=i,this.preloadingStrategy=r,this.loader=o}setUpPreloading(){this.subscription=this.router.events.pipe(B(t=>t instanceof G),be(()=>this.preload())).subscribe(()=>{})}preload(){return this.processRoutes(this.injector,this.router.config)}ngOnDestroy(){this.subscription?.unsubscribe()}processRoutes(t,i){let r=[];for(let o of i){o.providers&&!o._injector&&(o._injector=We(o.providers,t,""));let a=o._injector??t;o._loadedNgModuleFactory&&!o._loadedInjector&&(o._loadedInjector=o._loadedNgModuleFactory.create(a).injector);let s=o._loadedInjector??a;(o.loadChildren&&!o._loadedRoutes&&o.canLoad===void 0||o.loadComponent&&!o._loadedComponent)&&r.push(this.preloadConfig(a,o)),(o.children||o._loadedRoutes)&&r.push(this.processRoutes(s,o.children??o._loadedRoutes))}return L(r).pipe(_e())}preloadConfig(t,i){return this.preloadingStrategy.preload(i,()=>{if(t.destroyed)return g(null);let r;i.loadChildren&&i.canLoad===void 0?r=L(this.loader.loadChildren(t,i)):r=g(null);let o=r.pipe(at(a=>a===null?g(void 0):(i._loadedRoutes=a.routes,i._loadedInjector=a.injector,i._loadedNgModuleFactory=a.factory,this.processRoutes(a.injector??t,a.routes))));if(i.loadComponent&&!i._loadedComponent){let a=this.loader.loadComponent(t,i);return L([o,a]).pipe(_e())}else return o})}static \u0275fac=function(i){return new(i||e)(St(ot),St(_t),St(Fe),St(xi))};static \u0275prov=R({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})(),Ao=new y(""),Es=(()=>{class e{options;routerEventsSubscription;scrollEventsSubscription;lastId=0;lastSource=oe;restoredId=0;store={};isHydrating=l(Gn,{optional:!0})??!1;urlSerializer=l(jt);zone=l(Dt);viewportScroller=l(Hi);transitions=l(Ci);constructor(t){this.options=t,this.options.scrollPositionRestoration||="disabled",this.options.anchorScrolling||="disabled",this.isHydrating&&l(Fi).whenStable().then(()=>{this.isHydrating=!1})}init(){this.options.scrollPositionRestoration!=="disabled"&&this.viewportScroller.setHistoryScrollRestoration("manual"),this.routerEventsSubscription=this.createScrollEvents(),this.scrollEventsSubscription=this.consumeScrollEvents()}createScrollEvents(){return this.transitions.events.subscribe(t=>{t instanceof Ut?(this.store[this.lastId]=this.viewportScroller.getScrollPosition(),this.lastSource=t.navigationTrigger,this.restoredId=t.restoredState?t.restoredState.navigationId:0):t instanceof G?(this.lastId=t.id,this.scheduleScrollEvent(t,this.urlSerializer.parse(t.urlAfterRedirects).fragment)):t instanceof gt&&t.code===se.IgnoredSameUrlNavigation&&(this.lastSource=void 0,this.restoredId=0,this.scheduleScrollEvent(t,this.urlSerializer.parse(t.url).fragment))})}consumeScrollEvents(){return this.transitions.events.subscribe(t=>{if(!(t instanceof ce)||t.scrollBehavior==="manual")return;let i={behavior:"instant"};t.position?this.options.scrollPositionRestoration==="top"?this.viewportScroller.scrollToPosition([0,0],i):this.options.scrollPositionRestoration==="enabled"&&this.viewportScroller.scrollToPosition(t.position,i):t.anchor&&this.options.anchorScrolling==="enabled"?this.viewportScroller.scrollToAnchor(t.anchor):this.options.scrollPositionRestoration!=="disabled"&&this.viewportScroller.scrollToPosition([0,0])})}scheduleScrollEvent(t,i){if(this.isHydrating)return;let r=k(this.transitions.currentNavigation)?.extras.scroll;this.zone.runOutsideAngular(async()=>{await new Promise(o=>{setTimeout(o),typeof requestAnimationFrame<"u"&&requestAnimationFrame(o)}),this.zone.run(()=>{this.transitions.events.next(new ce(t,this.lastSource==="popstate"?this.store[this.restoredId]:null,i,r))})})}ngOnDestroy(){this.routerEventsSubscription?.unsubscribe(),this.scrollEventsSubscription?.unsubscribe()}static \u0275fac=function(i){Xn()};static \u0275prov=R({token:e,factory:e.\u0275fac})}return e})();function Cn(e,...n){return Hn([{provide:Zt,multi:!0,useValue:e},[],{provide:ft,useFactory:Oo},{provide:zi,multi:!0,useFactory:Lo},n.map(t=>t.\u0275providers)])}function Oo(){return l(ot).routerState.root}function Be(e,n){return{\u0275kind:e,\u0275providers:n}}function Lo(){let e=l(Mt);return n=>{let t=e.get(Fi);if(n!==t.components[0])return;let i=e.get(ot),r=e.get(No);e.get(Rn)===1&&i.initialNavigation(),e.get(jo,null,{optional:!0})?.setUpPreloading(),e.get(Ao,null,{optional:!0})?.init(),i.resetRootComponentType(t.componentTypes[0]),r.closed||(r.next(),r.complete(),r.unsubscribe())}}var No=new y("",{factory:()=>new O}),Rn=new y("",{factory:()=>1});function Po(){let e=[{provide:Wn,useValue:!0},{provide:Rn,useValue:0},ji(()=>{let n=l(Mt);return n.get(dr,Promise.resolve()).then(()=>new Promise(i=>{let r=n.get(ot),o=n.get(No);Si(r,()=>{i(!0)}),n.get(Ci).afterPreactivation=()=>(i(!0),o.closed?g(void 0):o),r.initialNavigation()}))})];return Be(2,e)}function Uo(){let e=[ji(()=>{l(ot).setUpLocationChangeListener()}),{provide:Rn,useValue:2}];return Be(3,e)}var jo=new y("");function zo(e){return Be(0,[{provide:jo,useExisting:To},{provide:Fe,useExisting:e}])}function Fo(){return Be(8,[gn,{provide:je,useExisting:gn}])}function Bo(e){Yn("NgRouterViewTransitions");let n=[{provide:bn,useValue:Do},{provide:wn,useValue:m({skipNextTransition:!!e?.skipInitialTransition},e)}];return Be(9,n)}var $o=[ee,{provide:jt,useClass:kt},ot,Gt,{provide:ft,useFactory:Oo},xi,[]],Sn=(()=>{class e{constructor(){}static forRoot(t,i){return{ngModule:e,providers:[$o,[],{provide:Zt,multi:!0,useValue:t},[],i?.errorHandler?{provide:yn,useValue:i.errorHandler}:[],{provide:zt,useValue:i||{}},i?.useHash?As():Os(),Ts(),i?.preloadingStrategy?zo(i.preloadingStrategy).\u0275providers:[],i?.initialNavigation?Ls(i):[],i?.bindToComponentInputs?Fo().\u0275providers:[],i?.enableViewTransitions?Bo().\u0275providers:[],Ns()]}}static forChild(t){return{ngModule:e,providers:[{provide:Zt,multi:!0,useValue:t}]}}static \u0275fac=function(i){return new(i||e)};static \u0275mod=lt({type:e});static \u0275inj=st({})}return e})();function Ts(){return{provide:Ao,useFactory:()=>{let e=l(Hi),n=l(zt);return n.scrollOffset&&e.setOffset(n.scrollOffset),new Es(n)}}}function As(){return{provide:ke,useClass:hr}}function Os(){return{provide:ke,useClass:mr}}function Ls(e){return[e.initialNavigation==="disabled"?Uo().\u0275providers:[],e.initialNavigation==="enabledBlocking"?Po().\u0275providers:[]]}var xn=new y("");function Ns(){return[{provide:xn,useFactory:Lo},{provide:zi,multi:!0,useExisting:xn}]}var Ii=["*"],js=["content"],zs=[[["mat-drawer"]],[["mat-drawer-content"]],"*"],Fs=["mat-drawer","mat-drawer-content","*"];function Bs(e,n){if(e&1){let t=ye();f(0,"div",1),T("click",function(){K(t);let r=Tt();return Y(r._onBackdropClicked())}),v()}if(e&2){let t=Tt();U("mat-drawer-shown",t._isShowingBackdrop())}}function $s(e,n){e&1&&(f(0,"mat-drawer-content"),w(1,2),v())}var Hs=[[["mat-sidenav"]],[["mat-sidenav-content"]],"*"],Vs=["mat-sidenav","mat-sidenav-content","*"];function qs(e,n){if(e&1){let t=ye();f(0,"div",1),T("click",function(){K(t);let r=Tt();return Y(r._onBackdropClicked())}),v()}if(e&2){let t=Tt();U("mat-drawer-shown",t._isShowingBackdrop())}}function Qs(e,n){e&1&&(f(0,"mat-sidenav-content"),w(1,2),v())}var Gs=`.mat-drawer-container {
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
`;var Ws=new y("MAT_DRAWER_DEFAULT_AUTOSIZE",{providedIn:"root",factory:()=>!1}),In=new y("MAT_DRAWER_CONTAINER"),Mi=(()=>{class e extends ie{_platform=l(Ot);_changeDetectorRef=l(yt);_container=l(Dn);constructor(){let t=l(H),i=l(Rr),r=l(Dt);super(t,i,r)}ngAfterContentInit(){this._container._contentMarginChanges.subscribe(()=>{this._changeDetectorRef.markForCheck()})}_shouldBeHidden(){if(this._platform.isBrowser)return!1;let{start:t,end:i}=this._container;return t!=null&&t.mode!=="over"&&t.opened||i!=null&&i.mode!=="over"&&i.opened}static \u0275fac=function(i){return new(i||e)};static \u0275cmp=S({type:e,selectors:[["mat-drawer-content"]],hostAttrs:[1,"mat-drawer-content"],hostVars:6,hostBindings:function(i,r){i&2&&(Ze("margin-left",r._container._contentMargins.left,"px")("margin-right",r._container._contentMargins.right,"px"),U("mat-drawer-content-hidden",r._shouldBeHidden()))},features:[At([{provide:ie,useExisting:e}]),dt],ngContentSelectors:Ii,decls:1,vars:0,template:function(i,r){i&1&&(tt(),w(0))},encapsulation:2,changeDetection:0})}return e})(),Mn=(()=>{class e{_elementRef=l(H);_focusTrapFactory=l(xr);_focusMonitor=l(vr);_platform=l(Ot);_ngZone=l(Dt);_renderer=l(Jt);_interactivityChecker=l(yr);_doc=l(Kt);_container=l(In,{optional:!0});_focusTrap=null;_elementFocusedBeforeDrawerWasOpened=null;_eventCleanups;_isAttached=!1;_anchor=null;get position(){return this._position}set position(t){t=t==="end"?"end":"start",t!==this._position&&(this._isAttached&&this._updatePositionInParent(t),this._position=t,this.onPositionChanged.emit())}_position="start";get mode(){return this._mode}set mode(t){this._mode=t,this._updateFocusTrapState(),this._modeChanged.next()}_mode="over";get disableClose(){return this._disableClose}set disableClose(t){this._disableClose=V(t)}_disableClose=!1;get autoFocus(){let t=this._autoFocus;return t??(this.mode==="side"?"dialog":"first-tabbable")}set autoFocus(t){(t==="true"||t==="false"||t==null)&&(t=V(t)),this._autoFocus=t}_autoFocus;get opened(){return this._opened()}set opened(t){this.toggle(V(t))}_opened=b(!1);_openedVia=null;_animationStarted=new O;_animationEnd=new O;openedChange=new X(!0);_openedStream=this.openedChange.pipe(B(t=>t),E(()=>{}));openedStart=this._animationStarted.pipe(B(()=>this.opened),Ni(void 0));_closedStream=this.openedChange.pipe(B(t=>!t),E(()=>{}));closedStart=this._animationStarted.pipe(B(()=>!this.opened),Ni(void 0));_destroyed=new O;onPositionChanged=new X;_content;_modeChanged=new O;_injector=l(Mt);_changeDetectorRef=l(yt);constructor(){this.openedChange.pipe(z(this._destroyed)).subscribe(t=>{t?(this._elementFocusedBeforeDrawerWasOpened=this._doc.activeElement,this._takeFocus()):this._isFocusWithinDrawer()&&this._restoreFocus(this._openedVia||"program")}),this._eventCleanups=this._ngZone.runOutsideAngular(()=>{let t=this._renderer,i=this._elementRef.nativeElement;return[t.listen(i,"keydown",r=>{r.keyCode===27&&!this.disableClose&&!kr(r)&&this._ngZone.run(()=>{this.close(),r.stopPropagation(),r.preventDefault()})}),t.listen(i,"transitionend",this._handleTransitionEvent),t.listen(i,"transitioncancel",this._handleTransitionEvent)]}),this._animationEnd.subscribe(()=>{this.openedChange.emit(this.opened)})}_forceFocus(t,i){this._interactivityChecker.isFocusable(t)||(t.tabIndex=-1,this._ngZone.runOutsideAngular(()=>{let r=()=>{o(),a(),t.removeAttribute("tabindex")},o=this._renderer.listen(t,"blur",r),a=this._renderer.listen(t,"mousedown",r)})),t.focus(i)}_focusByCssSelector(t,i){let r=this._elementRef.nativeElement.querySelector(t);r&&this._forceFocus(r,i)}_takeFocus(){if(!this._focusTrap)return;let t=this._elementRef.nativeElement;switch(this.autoFocus){case!1:case"dialog":return;case!0:case"first-tabbable":Xt(()=>{!this._focusTrap.focusInitialElement()&&typeof t.focus=="function"&&t.focus()},{injector:this._injector});break;case"first-heading":this._focusByCssSelector('h1, h2, h3, h4, h5, h6, [role="heading"]');break;default:this._focusByCssSelector(this.autoFocus);break}}_restoreFocus(t){this.autoFocus!=="dialog"&&(this._elementFocusedBeforeDrawerWasOpened?this._focusMonitor.focusVia(this._elementFocusedBeforeDrawerWasOpened,t):this._elementRef.nativeElement.blur(),this._elementFocusedBeforeDrawerWasOpened=null)}_isFocusWithinDrawer(){let t=this._doc.activeElement;return!!t&&this._elementRef.nativeElement.contains(t)}ngAfterViewInit(){this._isAttached=!0,this._position==="end"&&this._updatePositionInParent("end"),this._platform.isBrowser&&(this._focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement),this._updateFocusTrapState())}ngOnDestroy(){this._eventCleanups.forEach(t=>t()),this._focusTrap?.destroy(),this._anchor?.remove(),this._anchor=null,this._animationStarted.complete(),this._animationEnd.complete(),this._modeChanged.complete(),this._destroyed.next(),this._destroyed.complete()}open(t){return this.toggle(!0,t)}close(){return this.toggle(!1)}_closeViaBackdropClick(){return this._setOpen(!1,!0,"mouse")}toggle(t=!this.opened,i){t&&i&&(this._openedVia=i);let r=this._setOpen(t,!t&&this._isFocusWithinDrawer(),this._openedVia||"program");return t||(this._openedVia=null),r}_setOpen(t,i,r){return t===this.opened?Promise.resolve(t?"open":"close"):(this._opened.set(t),this._container?._transitionsEnabled?(this._setIsAnimating(!0),setTimeout(()=>this._animationStarted.next())):setTimeout(()=>{this._animationStarted.next(),this._animationEnd.next()}),this._elementRef.nativeElement.classList.toggle("mat-drawer-opened",t),!t&&i&&this._restoreFocus(r),this._changeDetectorRef.markForCheck(),this._updateFocusTrapState(),new Promise(o=>{this.openedChange.pipe(Ct(1)).subscribe(a=>o(a?"open":"close"))}))}_setIsAnimating(t){this._elementRef.nativeElement.classList.toggle("mat-drawer-animating",t)}_getWidth(){return this._elementRef.nativeElement.offsetWidth||0}_updateFocusTrapState(){this._focusTrap&&(this._focusTrap.enabled=this.opened&&!!this._container?._isShowingBackdrop())}_updatePositionInParent(t){if(!this._platform.isBrowser)return;let i=this._elementRef.nativeElement,r=i.parentNode;t==="end"?(this._anchor||(this._anchor=this._doc.createComment("mat-drawer-anchor"),r.insertBefore(this._anchor,i)),r.appendChild(i)):this._anchor&&this._anchor.parentNode.insertBefore(i,this._anchor)}_handleTransitionEvent=t=>{let i=this._elementRef.nativeElement;t.target===i&&this._ngZone.run(()=>{t.type==="transitionend"&&this._setIsAnimating(!1),this._animationEnd.next(t)})};static \u0275fac=function(i){return new(i||e)};static \u0275cmp=S({type:e,selectors:[["mat-drawer"]],viewQuery:function(i,r){if(i&1&&xe(js,5),i&2){let o;M(o=D())&&(r._content=o.first)}},hostAttrs:[1,"mat-drawer"],hostVars:12,hostBindings:function(i,r){i&2&&(mt("align",null)("tabIndex",r.mode!=="side"?"-1":null),Ze("visibility",!r._container&&!r.opened?"hidden":null),U("mat-drawer-end",r.position==="end")("mat-drawer-over",r.mode==="over")("mat-drawer-push",r.mode==="push")("mat-drawer-side",r.mode==="side"))},inputs:{position:"position",mode:"mode",disableClose:"disableClose",autoFocus:"autoFocus",opened:"opened"},outputs:{openedChange:"openedChange",_openedStream:"opened",openedStart:"openedStart",_closedStream:"closed",closedStart:"closedStart",onPositionChanged:"positionChanged"},exportAs:["matDrawer"],ngContentSelectors:Ii,decls:3,vars:0,consts:[["content",""],["cdkScrollable","",1,"mat-drawer-inner-container"]],template:function(i,r){i&1&&(tt(),f(0,"div",1,0),w(2),v())},dependencies:[ie],encapsulation:2,changeDetection:0})}return e})(),Dn=(()=>{class e{_dir=l(Cr,{optional:!0});_element=l(H);_ngZone=l(Dt);_changeDetectorRef=l(yt);_animationDisabled=Ye();_transitionsEnabled=!1;_allDrawers;_drawers=new Qn;_content;_userContent;get start(){return this._start}get end(){return this._end}get autosize(){return this._autosize}set autosize(t){this._autosize=V(t)}_autosize=l(Ws);get hasBackdrop(){return this._drawerHasBackdrop(this._start)||this._drawerHasBackdrop(this._end)}set hasBackdrop(t){this._backdropOverride=t==null?null:V(t)}_backdropOverride=null;backdropClick=new X;_start=null;_end=null;_left=null;_right=null;_destroyed=new O;_doCheckSubject=new O;_contentMargins={left:null,right:null};_contentMarginChanges=new O;get scrollable(){return this._userContent||this._content}_injector=l(Mt);constructor(){let t=l(Ot),i=l(Sr);this._dir?.change.pipe(z(this._destroyed)).subscribe(()=>{this._validateDrawers(),this.updateContentMargins()}),i.change().pipe(z(this._destroyed)).subscribe(()=>this.updateContentMargins()),!this._animationDisabled&&t.isBrowser&&this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{this._element.nativeElement.classList.add("mat-drawer-transition"),this._transitionsEnabled=!0},200)})}ngAfterContentInit(){this._allDrawers.changes.pipe(we(this._allDrawers),z(this._destroyed)).subscribe(t=>{this._drawers.reset(t.filter(i=>!i._container||i._container===this)),this._drawers.notifyOnChanges()}),this._drawers.changes.pipe(we(null)).subscribe(()=>{this._validateDrawers(),this._drawers.forEach(t=>{this._watchDrawerToggle(t),this._watchDrawerPosition(t),this._watchDrawerMode(t)}),(!this._drawers.length||this._isDrawerOpen(this._start)||this._isDrawerOpen(this._end))&&this.updateContentMargins(),this._changeDetectorRef.markForCheck()}),this._ngZone.runOutsideAngular(()=>{this._doCheckSubject.pipe(zn(10),z(this._destroyed)).subscribe(()=>this.updateContentMargins())})}ngOnDestroy(){this._contentMarginChanges.complete(),this._doCheckSubject.complete(),this._drawers.destroy(),this._destroyed.next(),this._destroyed.complete()}open(){this._drawers.forEach(t=>t.open())}close(){this._drawers.forEach(t=>t.close())}updateContentMargins(){let t=0,i=0;if(this._left&&this._left.opened){if(this._left.mode=="side")t+=this._left._getWidth();else if(this._left.mode=="push"){let r=this._left._getWidth();t+=r,i-=r}}if(this._right&&this._right.opened){if(this._right.mode=="side")i+=this._right._getWidth();else if(this._right.mode=="push"){let r=this._right._getWidth();i+=r,t-=r}}t=t||null,i=i||null,(t!==this._contentMargins.left||i!==this._contentMargins.right)&&(this._contentMargins={left:t,right:i},this._ngZone.run(()=>this._contentMarginChanges.next(this._contentMargins)))}ngDoCheck(){this._autosize&&this._isPushed()&&this._ngZone.runOutsideAngular(()=>this._doCheckSubject.next())}_watchDrawerToggle(t){t._animationStarted.pipe(z(this._drawers.changes)).subscribe(()=>{this.updateContentMargins(),this._changeDetectorRef.markForCheck()}),t.mode!=="side"&&t.openedChange.pipe(z(this._drawers.changes)).subscribe(()=>this._setContainerClass(t.opened))}_watchDrawerPosition(t){t.onPositionChanged.pipe(z(this._drawers.changes)).subscribe(()=>{Xt({read:()=>this._validateDrawers()},{injector:this._injector})})}_watchDrawerMode(t){t._modeChanged.pipe(z(qe(this._drawers.changes,this._destroyed))).subscribe(()=>{this.updateContentMargins(),this._changeDetectorRef.markForCheck()})}_setContainerClass(t){let i=this._element.nativeElement.classList,r="mat-drawer-container-has-open";t?i.add(r):i.remove(r)}_validateDrawers(){this._start=this._end=null,this._drawers.forEach(t=>{t.position=="end"?(this._end!=null,this._end=t):(this._start!=null,this._start=t)}),this._right=this._left=null,this._dir&&this._dir.value==="rtl"?(this._left=this._end,this._right=this._start):(this._left=this._start,this._right=this._end)}_isPushed(){return this._isDrawerOpen(this._start)&&this._start.mode!="over"||this._isDrawerOpen(this._end)&&this._end.mode!="over"}_onBackdropClicked(){this.backdropClick.emit(),this._closeModalDrawersViaBackdrop()}_closeModalDrawersViaBackdrop(){[this._start,this._end].filter(t=>t&&!t.disableClose&&this._drawerHasBackdrop(t)).forEach(t=>t._closeViaBackdropClick())}_isShowingBackdrop(){return this._isDrawerOpen(this._start)&&this._drawerHasBackdrop(this._start)||this._isDrawerOpen(this._end)&&this._drawerHasBackdrop(this._end)}_isDrawerOpen(t){return t!=null&&t.opened}_drawerHasBackdrop(t){return this._backdropOverride==null?!!t&&t.mode!=="side":this._backdropOverride}static \u0275fac=function(i){return new(i||e)};static \u0275cmp=S({type:e,selectors:[["mat-drawer-container"]],contentQueries:function(i,r,o){if(i&1&&ht(o,Mi,5)(o,Mn,5),i&2){let a;M(a=D())&&(r._content=a.first),M(a=D())&&(r._allDrawers=a)}},viewQuery:function(i,r){if(i&1&&xe(Mi,5),i&2){let o;M(o=D())&&(r._userContent=o.first)}},hostAttrs:[1,"mat-drawer-container"],hostVars:2,hostBindings:function(i,r){i&2&&U("mat-drawer-container-explicit-backdrop",r._backdropOverride)},inputs:{autosize:"autosize",hasBackdrop:"hasBackdrop"},outputs:{backdropClick:"backdropClick"},exportAs:["matDrawerContainer"],features:[At([{provide:In,useExisting:e}])],ngContentSelectors:Fs,decls:4,vars:2,consts:[[1,"mat-drawer-backdrop",3,"mat-drawer-shown"],[1,"mat-drawer-backdrop",3,"click"]],template:function(i,r){i&1&&(tt(zs),It(0,Bs,1,2,"div",0),w(1),w(2,1),It(3,$s,2,0,"mat-drawer-content")),i&2&&(Et(r.hasBackdrop?0:-1),bt(3),Et(r._content?-1:3))},dependencies:[Mi],styles:[`.mat-drawer-container {
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
`],encapsulation:2,changeDetection:0})}return e})(),Di=(()=>{class e extends Mi{static \u0275fac=(()=>{let t;return function(r){return(t||(t=J(e)))(r||e)}})();static \u0275cmp=S({type:e,selectors:[["mat-sidenav-content"]],hostAttrs:[1,"mat-drawer-content","mat-sidenav-content"],features:[At([{provide:ie,useExisting:e}]),dt],ngContentSelectors:Ii,decls:1,vars:0,template:function(i,r){i&1&&(tt(),w(0))},encapsulation:2,changeDetection:0})}return e})(),En=(()=>{class e extends Mn{get fixedInViewport(){return this._fixedInViewport}set fixedInViewport(t){this._fixedInViewport=V(t)}_fixedInViewport=!1;get fixedTopGap(){return this._fixedTopGap}set fixedTopGap(t){this._fixedTopGap=Ce(t)}_fixedTopGap=0;get fixedBottomGap(){return this._fixedBottomGap}set fixedBottomGap(t){this._fixedBottomGap=Ce(t)}_fixedBottomGap=0;static \u0275fac=(()=>{let t;return function(r){return(t||(t=J(e)))(r||e)}})();static \u0275cmp=S({type:e,selectors:[["mat-sidenav"]],hostAttrs:[1,"mat-drawer","mat-sidenav"],hostVars:16,hostBindings:function(i,r){i&2&&(mt("tabIndex",r.mode!=="side"?"-1":null)("align",null),Ze("top",r.fixedInViewport?r.fixedTopGap:null,"px")("bottom",r.fixedInViewport?r.fixedBottomGap:null,"px"),U("mat-drawer-end",r.position==="end")("mat-drawer-over",r.mode==="over")("mat-drawer-push",r.mode==="push")("mat-drawer-side",r.mode==="side")("mat-sidenav-fixed",r.fixedInViewport))},inputs:{fixedInViewport:"fixedInViewport",fixedTopGap:"fixedTopGap",fixedBottomGap:"fixedBottomGap"},exportAs:["matSidenav"],features:[At([{provide:Mn,useExisting:e}]),dt],ngContentSelectors:Ii,decls:3,vars:0,consts:[["content",""],["cdkScrollable","",1,"mat-drawer-inner-container"]],template:function(i,r){i&1&&(tt(),f(0,"div",1,0),w(2),v())},dependencies:[ie],encapsulation:2,changeDetection:0})}return e})(),Ho=(()=>{class e extends Dn{_allDrawers=void 0;_content=void 0;static \u0275fac=(()=>{let t;return function(r){return(t||(t=J(e)))(r||e)}})();static \u0275cmp=S({type:e,selectors:[["mat-sidenav-container"]],contentQueries:function(i,r,o){if(i&1&&ht(o,Di,5)(o,En,5),i&2){let a;M(a=D())&&(r._content=a.first),M(a=D())&&(r._allDrawers=a)}},hostAttrs:[1,"mat-drawer-container","mat-sidenav-container"],hostVars:2,hostBindings:function(i,r){i&2&&U("mat-drawer-container-explicit-backdrop",r._backdropOverride)},exportAs:["matSidenavContainer"],features:[At([{provide:In,useExisting:e},{provide:Dn,useExisting:e}]),dt],ngContentSelectors:Vs,decls:4,vars:2,consts:[[1,"mat-drawer-backdrop",3,"mat-drawer-shown"],[1,"mat-drawer-backdrop",3,"click"]],template:function(i,r){i&1&&(tt(Hs),It(0,qs,1,2,"div",0),w(1),w(2,1),It(3,Qs,2,0,"mat-sidenav-content")),i&2&&(Et(r.hasBackdrop?0:-1),bt(3),Et(r._content?-1:3))},dependencies:[Di],styles:[Gs],encapsulation:2,changeDetection:0})}return e})(),Vo=(()=>{class e{static \u0275fac=function(i){return new(i||e)};static \u0275mod=lt({type:e});static \u0275inj=st({imports:[Vi,Lt,Vi]})}return e})();var Ks=["*",[["mat-toolbar-row"]]],Ys=["*","mat-toolbar-row"],Xs=(()=>{class e{static \u0275fac=function(i){return new(i||e)};static \u0275dir=N({type:e,selectors:[["mat-toolbar-row"]],hostAttrs:[1,"mat-toolbar-row"],exportAs:["matToolbarRow"]})}return e})(),qo=(()=>{class e{_elementRef=l(H);_platform=l(Ot);_document=l(Kt);color;_toolbarRows;constructor(){}ngAfterViewInit(){this._platform.isBrowser&&(this._checkToolbarMixedModes(),this._toolbarRows.changes.subscribe(()=>this._checkToolbarMixedModes()))}_checkToolbarMixedModes(){this._toolbarRows.length}static \u0275fac=function(i){return new(i||e)};static \u0275cmp=S({type:e,selectors:[["mat-toolbar"]],contentQueries:function(i,r,o){if(i&1&&ht(o,Xs,5),i&2){let a;M(a=D())&&(r._toolbarRows=a)}},hostAttrs:[1,"mat-toolbar"],hostVars:6,hostBindings:function(i,r){i&2&&(nr(r.color?"mat-"+r.color:""),U("mat-toolbar-multiple-rows",r._toolbarRows.length>0)("mat-toolbar-single-row",r._toolbarRows.length===0))},inputs:{color:"color"},exportAs:["matToolbar"],ngContentSelectors:Ys,decls:2,vars:0,template:function(i,r){i&1&&(tt(Ks),w(0),w(1,1))},styles:[`.mat-toolbar {
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
`],encapsulation:2,changeDetection:0})}return e})();var Qo=(()=>{class e{static \u0275fac=function(i){return new(i||e)};static \u0275mod=lt({type:e});static \u0275inj=st({imports:[Lt]})}return e})();var Go=(()=>{class e{static \u0275fac=function(i){return new(i||e)};static \u0275mod=lt({type:e});static \u0275inj=st({imports:[Lt]})}return e})();var tc=["*"],ec=`.mdc-list {
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
`,ic=["unscopedContent"],nc=["text"],rc=[[["","matListItemAvatar",""],["","matListItemIcon",""]],[["","matListItemTitle",""]],[["","matListItemLine",""]],"*",[["","matListItemMeta",""]],[["mat-divider"]]],oc=["[matListItemAvatar],[matListItemIcon]","[matListItemTitle]","[matListItemLine]","*","[matListItemMeta]","mat-divider"];var ac=new y("ListOption"),An=(()=>{class e{_elementRef=l(H);constructor(){}static \u0275fac=function(i){return new(i||e)};static \u0275dir=N({type:e,selectors:[["","matListItemTitle",""]],hostAttrs:[1,"mat-mdc-list-item-title","mdc-list-item__primary-text"]})}return e})(),sc=(()=>{class e{_elementRef=l(H);constructor(){}static \u0275fac=function(i){return new(i||e)};static \u0275dir=N({type:e,selectors:[["","matListItemLine",""]],hostAttrs:[1,"mat-mdc-list-item-line","mdc-list-item__secondary-text"]})}return e})(),cc=(()=>{class e{static \u0275fac=function(i){return new(i||e)};static \u0275dir=N({type:e,selectors:[["","matListItemMeta",""]],hostAttrs:[1,"mat-mdc-list-item-meta","mdc-list-item__end"]})}return e})(),Wo=(()=>{class e{_listOption=l(ac,{optional:!0});constructor(){}_isAlignedAtStart(){return!this._listOption||this._listOption?._getTogglePosition()==="after"}static \u0275fac=function(i){return new(i||e)};static \u0275dir=N({type:e,hostVars:4,hostBindings:function(i,r){i&2&&U("mdc-list-item__start",r._isAlignedAtStart())("mdc-list-item__end",!r._isAlignedAtStart())}})}return e})(),lc=(()=>{class e extends Wo{static \u0275fac=(()=>{let t;return function(r){return(t||(t=J(e)))(r||e)}})();static \u0275dir=N({type:e,selectors:[["","matListItemAvatar",""]],hostAttrs:[1,"mat-mdc-list-item-avatar"],features:[dt]})}return e})(),On=(()=>{class e extends Wo{static \u0275fac=(()=>{let t;return function(r){return(t||(t=J(e)))(r||e)}})();static \u0275dir=N({type:e,selectors:[["","matListItemIcon",""]],hostAttrs:[1,"mat-mdc-list-item-icon"],features:[dt]})}return e})(),dc=new y("MAT_LIST_CONFIG"),Tn=(()=>{class e{_isNonInteractive=!0;get disableRipple(){return this._disableRipple}set disableRipple(t){this._disableRipple=V(t)}_disableRipple=!1;get disabled(){return this._disabled()}set disabled(t){this._disabled.set(V(t))}_disabled=b(!1);_defaultOptions=l(dc,{optional:!0});static \u0275fac=function(i){return new(i||e)};static \u0275dir=N({type:e,hostVars:1,hostBindings:function(i,r){i&2&&mt("aria-disabled",r.disabled)},inputs:{disableRipple:"disableRipple",disabled:"disabled"}})}return e})(),mc=(()=>{class e{_elementRef=l(H);_ngZone=l(Dt);_listBase=l(Tn,{optional:!0});_platform=l(Ot);_hostElement;_isButtonElement;_noopAnimations=Ye();_avatars;_icons;set lines(t){this._explicitLines=Ce(t,null),this._updateItemLines(!1)}_explicitLines=null;get disableRipple(){return this.disabled||this._disableRipple||this._noopAnimations||!!this._listBase?.disableRipple}set disableRipple(t){this._disableRipple=V(t)}_disableRipple=!1;get disabled(){return this._disabled()||!!this._listBase?.disabled}set disabled(t){this._disabled.set(V(t))}_disabled=b(!1);_subscriptions=new He;_rippleRenderer=null;_hasUnscopedTextContent=!1;rippleConfig;get rippleDisabled(){return this.disableRipple||!!this.rippleConfig.disabled}constructor(){l(_r).load(Ir);let t=l(Dr,{optional:!0});this.rippleConfig=t||{},this._hostElement=this._elementRef.nativeElement,this._isButtonElement=this._hostElement.nodeName.toLowerCase()==="button",this._listBase&&!this._listBase._isNonInteractive&&this._initInteractiveListItem(),this._isButtonElement&&!this._hostElement.hasAttribute("type")&&this._hostElement.setAttribute("type","button")}ngAfterViewInit(){this._monitorProjectedLinesAndTitle(),this._updateItemLines(!0)}ngOnDestroy(){this._subscriptions.unsubscribe(),this._rippleRenderer!==null&&this._rippleRenderer._removeTriggerEvents()}_hasIconOrAvatar(){return!!(this._avatars.length||this._icons.length)}_initInteractiveListItem(){this._hostElement.classList.add("mat-mdc-list-item-interactive"),this._rippleRenderer=new Mr(this,this._ngZone,this._hostElement,this._platform,l(Mt)),this._rippleRenderer.setupTriggerEvents(this._hostElement)}_monitorProjectedLinesAndTitle(){this._ngZone.runOutsideAngular(()=>{this._subscriptions.add(qe(this._lines.changes,this._titles.changes).subscribe(()=>this._updateItemLines(!1)))})}_updateItemLines(t){if(!this._lines||!this._titles||!this._unscopedContent)return;t&&this._checkDomForUnscopedTextContent();let i=this._explicitLines??this._inferLinesFromContent(),r=this._unscopedContent.nativeElement;if(this._hostElement.classList.toggle("mat-mdc-list-item-single-line",i<=1),this._hostElement.classList.toggle("mdc-list-item--with-one-line",i<=1),this._hostElement.classList.toggle("mdc-list-item--with-two-lines",i===2),this._hostElement.classList.toggle("mdc-list-item--with-three-lines",i===3),this._hasUnscopedTextContent){let o=this._titles.length===0&&i===1;r.classList.toggle("mdc-list-item__primary-text",o),r.classList.toggle("mdc-list-item__secondary-text",!o)}else r.classList.remove("mdc-list-item__primary-text"),r.classList.remove("mdc-list-item__secondary-text")}_inferLinesFromContent(){let t=this._titles.length+this._lines.length;return this._hasUnscopedTextContent&&(t+=1),t}_checkDomForUnscopedTextContent(){this._hasUnscopedTextContent=Array.from(this._unscopedContent.nativeElement.childNodes).filter(t=>t.nodeType!==t.COMMENT_NODE).some(t=>!!(t.textContent&&t.textContent.trim()))}static \u0275fac=function(i){return new(i||e)};static \u0275dir=N({type:e,contentQueries:function(i,r,o){if(i&1&&ht(o,lc,4)(o,On,4),i&2){let a;M(a=D())&&(r._avatars=a),M(a=D())&&(r._icons=a)}},hostVars:4,hostBindings:function(i,r){i&2&&(mt("aria-disabled",r.disabled)("disabled",r._isButtonElement&&r.disabled||null),U("mdc-list-item--disabled",r.disabled))},inputs:{lines:"lines",disableRipple:"disableRipple",disabled:"disabled"}})}return e})();var Zo=(()=>{class e extends mc{_lines;_titles;_meta;_unscopedContent;_itemText;get activated(){return this._activated}set activated(t){this._activated=V(t)}_activated=!1;_getAriaCurrent(){return this._hostElement.nodeName==="A"&&this._activated?"page":null}_hasBothLeadingAndTrailing(){return this._meta.length!==0&&(this._avatars.length!==0||this._icons.length!==0)}static \u0275fac=(()=>{let t;return function(r){return(t||(t=J(e)))(r||e)}})();static \u0275cmp=S({type:e,selectors:[["mat-list-item"],["a","mat-list-item",""],["button","mat-list-item",""]],contentQueries:function(i,r,o){if(i&1&&ht(o,sc,5)(o,An,5)(o,cc,5),i&2){let a;M(a=D())&&(r._lines=a),M(a=D())&&(r._titles=a),M(a=D())&&(r._meta=a)}},viewQuery:function(i,r){if(i&1&&xe(ic,5)(nc,5),i&2){let o;M(o=D())&&(r._unscopedContent=o.first),M(o=D())&&(r._itemText=o.first)}},hostAttrs:[1,"mat-mdc-list-item","mdc-list-item"],hostVars:13,hostBindings:function(i,r){i&2&&(mt("aria-current",r._getAriaCurrent()),U("mdc-list-item--activated",r.activated)("mdc-list-item--with-leading-avatar",r._avatars.length!==0)("mdc-list-item--with-leading-icon",r._icons.length!==0)("mdc-list-item--with-trailing-meta",r._meta.length!==0)("mat-mdc-list-item-both-leading-and-trailing",r._hasBothLeadingAndTrailing())("_mat-animation-noopable",r._noopAnimations))},inputs:{activated:"activated"},exportAs:["matListItem"],features:[dt],ngContentSelectors:oc,decls:10,vars:0,consts:[["unscopedContent",""],[1,"mdc-list-item__content"],[1,"mat-mdc-list-item-unscoped-content",3,"cdkObserveContent"],[1,"mat-focus-indicator"]],template:function(i,r){i&1&&(tt(rc),w(0),f(1,"span",1),w(2,1),w(3,2),f(4,"span",2,0),T("cdkObserveContent",function(){return r._updateItemLines(!0)}),w(6,3),v()(),w(7,4),w(8,5),wt(9,"div",3))},dependencies:[br],encapsulation:2,changeDetection:0})}return e})();var Ko=(()=>{class e extends Tn{_isNonInteractive=!1;static \u0275fac=(()=>{let t;return function(r){return(t||(t=J(e)))(r||e)}})();static \u0275cmp=S({type:e,selectors:[["mat-nav-list"]],hostAttrs:["role","navigation",1,"mat-mdc-nav-list","mat-mdc-list-base","mdc-list"],exportAs:["matNavList"],features:[At([{provide:Tn,useExisting:e}]),dt],ngContentSelectors:tc,decls:1,vars:0,template:function(i,r){i&1&&(tt(),w(0))},styles:[ec],encapsulation:2,changeDetection:0})}return e})();var Yo=(()=>{class e{static \u0275fac=function(i){return new(i||e)};static \u0275mod=lt({type:e});static \u0275inj=st({imports:[wr,Tr,Er,Lt,Go]})}return e})();function pc(e,n){if(e&1&&(f(0,"div",15)(1,"mat-icon"),x(2,"format_quote"),v(),f(3,"span",19),x(4),v()()),e&2){let t=Tt();bt(4),$i(t.dailyQuote())}}var Ei=class e{dataService=l(Pr);isDarkMode=b(localStorage.getItem("theme")==="dark");isMobile=b(window.innerWidth<768);quotes=fr(this.dataService.getQuotes(),{initialValue:[]});dailyQuote=te(()=>{let n=this.quotes();return n.length?n[new Date().getDay()%n.length]:""});onResize(){this.isMobile.set(window.innerWidth<768)}ngOnInit(){this.applyTheme(this.isDarkMode())}toggleDarkMode(){let n=!this.isDarkMode();this.isDarkMode.set(n),localStorage.setItem("theme",n?"dark":"light"),this.applyTheme(n)}applyTheme(n){document.body.classList.toggle("dark-mode",n)}static \u0275fac=function(t){return new(t||e)};static \u0275cmp=S({type:e,selectors:[["app-layout"]],hostBindings:function(t,i){t&1&&T("resize",function(){return i.onResize()},Kn)},decls:56,vars:4,consts:[["sidenav",""],[1,"sidenav-container"],[1,"sidenav",3,"mode","opened"],[1,"logo-container"],["mat-list-item","","routerLink","/dashboard","routerLinkActive","active-link",3,"click"],["matListItemIcon",""],["matListItemTitle",""],["mat-list-item","","routerLink","/subjects","routerLinkActive","active-link",3,"click"],["mat-list-item","","routerLink","/tracker","routerLinkActive","active-link",3,"click"],["mat-list-item","","routerLink","/roadmap","routerLinkActive","active-link",3,"click"],["mat-list-item","","routerLink","/revision","routerLinkActive","active-link",3,"click"],["mat-list-item","","routerLink","/analytics","routerLinkActive","active-link",3,"click"],["mat-list-item","","routerLink","/settings","routerLinkActive","active-link",3,"click"],[1,"top-toolbar"],["mat-icon-button","",3,"click"],[1,"quote-container"],[1,"spacer"],["mat-icon-button","","aria-label","Toggle Dark Mode",3,"click"],[1,"main-content"],[1,"quote-text"]],template:function(t,i){if(t&1){let r=ye();f(0,"mat-sidenav-container",1)(1,"mat-sidenav",2,0)(3,"div",3)(4,"mat-icon"),x(5,"school"),v(),f(6,"span"),x(7,"GATE Tracker"),v()(),f(8,"mat-nav-list")(9,"a",4),T("click",function(){K(r);let a=ut(2);return Y(i.isMobile()&&a.close())}),f(10,"mat-icon",5),x(11,"dashboard"),v(),f(12,"span",6),x(13,"Dashboard"),v()(),f(14,"a",7),T("click",function(){K(r);let a=ut(2);return Y(i.isMobile()&&a.close())}),f(15,"mat-icon",5),x(16,"menu_book"),v(),f(17,"span",6),x(18,"Subjects"),v()(),f(19,"a",8),T("click",function(){K(r);let a=ut(2);return Y(i.isMobile()&&a.close())}),f(20,"mat-icon",5),x(21,"track_changes"),v(),f(22,"span",6),x(23,"Daily Tracker"),v()(),f(24,"a",9),T("click",function(){K(r);let a=ut(2);return Y(i.isMobile()&&a.close())}),f(25,"mat-icon",5),x(26,"map"),v(),f(27,"span",6),x(28,"Roadmap"),v()(),f(29,"a",10),T("click",function(){K(r);let a=ut(2);return Y(i.isMobile()&&a.close())}),f(30,"mat-icon",5),x(31,"replay"),v(),f(32,"span",6),x(33,"Revision"),v()(),f(34,"a",11),T("click",function(){K(r);let a=ut(2);return Y(i.isMobile()&&a.close())}),f(35,"mat-icon",5),x(36,"bar_chart"),v(),f(37,"span",6),x(38,"Analytics"),v()(),f(39,"a",12),T("click",function(){K(r);let a=ut(2);return Y(i.isMobile()&&a.close())}),f(40,"mat-icon",5),x(41,"settings"),v(),f(42,"span",6),x(43,"Settings"),v()()()(),f(44,"mat-sidenav-content")(45,"mat-toolbar",13)(46,"button",14),T("click",function(){K(r);let a=ut(2);return Y(a.toggle())}),f(47,"mat-icon"),x(48,"menu"),v()(),It(49,pc,5,1,"div",15),wt(50,"span",16),f(51,"button",17),T("click",function(){return i.toggleDarkMode()}),f(52,"mat-icon"),x(53),v()()(),f(54,"div",18),wt(55,"router-outlet"),v()()()}t&2&&(bt(),Bi("mode",i.isMobile()?"over":"side")("opened",!i.isMobile()),bt(48),Et(i.dailyQuote()&&!i.isMobile()?49:-1),bt(4),$i(i.isDarkMode()?"light_mode":"dark_mode"))},dependencies:[Sn,Wt,ge,kn,Vo,En,Ho,Di,Qo,qo,Yo,Ko,Zo,On,An,Or,Ar,Nr,Lr],styles:[".sidenav-container[_ngcontent-%COMP%]{position:absolute;inset:0}.sidenav[_ngcontent-%COMP%]{width:250px;border-right:1px solid var(--border-color);background:var(--bg-surface)}.logo-container[_ngcontent-%COMP%]{padding:20px;display:flex;align-items:center;gap:10px;font-size:1.25rem;font-weight:700;color:var(--primary)}.active-link[_ngcontent-%COMP%]{background:#3f51b526!important}.active-link[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{color:var(--primary)!important}.top-toolbar[_ngcontent-%COMP%]{background:var(--bg-surface)!important;color:var(--text-main)!important;border-bottom:1px solid var(--border-color);box-shadow:none;display:flex;align-items:center}.spacer[_ngcontent-%COMP%]{flex:1 1 auto}.main-content[_ngcontent-%COMP%]{padding:16px;max-width:1200px;margin:0 auto}@media(min-width:600px){.main-content[_ngcontent-%COMP%]{padding:24px}}.quote-container[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px;font-style:italic;color:var(--text-secondary);margin-left:20px;font-size:.875rem;overflow:hidden}.quote-text[_ngcontent-%COMP%]{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:400px}.quote-container[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{font-size:1.1rem;height:1.1rem;width:1.1rem;color:var(--primary);flex-shrink:0}"]})};var Xo=[{path:"",component:Ei,children:[{path:"",redirectTo:"dashboard",pathMatch:"full"},{path:"dashboard",loadComponent:()=>import("./chunk-B4ZHZ22M.js").then(e=>e.DashboardComponent)},{path:"subjects",loadComponent:()=>import("./chunk-RDSUTGDO.js").then(e=>e.SubjectsComponent)},{path:"tracker",loadComponent:()=>import("./chunk-HBFDS3VU.js").then(e=>e.TrackerComponent)},{path:"roadmap",loadComponent:()=>import("./chunk-P6MKSIDC.js").then(e=>e.RoadmapComponent)},{path:"analytics",loadComponent:()=>import("./chunk-2PY6XKYS.js").then(e=>e.AnalyticsComponent)},{path:"revision",loadComponent:()=>import("./chunk-YIFVY365.js").then(e=>e.RevisionComponent)},{path:"settings",loadComponent:()=>import("./chunk-TPNZM6JS.js").then(e=>e.SettingsComponent)}]}];var Jo={providers:[or(),Cn(Xo),pr(),jr(Ur())]};var Ti=class e{title=b("gate-civil-tracker");static \u0275fac=function(t){return new(t||e)};static \u0275cmp=S({type:e,selectors:[["app-root"]],decls:1,vars:0,template:function(t,i){t&1&&wt(0,"router-outlet")},dependencies:[Wt],styles:["[_nghost-%COMP%]{display:block;height:100%}"]})};ur(Ti,Jo).catch(e=>console.error(e));
