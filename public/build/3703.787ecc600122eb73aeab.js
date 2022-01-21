(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[3703],{"./packages/jaeger-ui-components/src/index.ts":(e,t,n)=>{"use strict";n.d(t,{kt:()=>ns,f6:()=>S,f8:()=>T,T2:()=>es,Ox:()=>zr,y3:()=>pt,Mp:()=>lt,DE:()=>ft,J5:()=>ct,YB:()=>dt,h2:()=>R,rZ:()=>Os,R1:()=>Ls,Fg:()=>O});var r=n("./.yarn/cache/react-npm-17.0.1-98658812fc-83b9df9529.zip/node_modules/react/index.js"),a=n("./.yarn/cache/@emotion-cache-npm-11.5.0-713285e054-8b3fac281e.zip/node_modules/@emotion/cache/dist/emotion-cache.browser.esm.js"),s=n("./.yarn/cache/@emotion-serialize-npm-1.0.2-a692afdb82-ff84fbe09e.zip/node_modules/@emotion/serialize/dist/emotion-serialize.browser.esm.js"),o=n("./.yarn/cache/@emotion-utils-npm-1.0.0-7f9809289c-3ce8048441.zip/node_modules/@emotion/utils/dist/emotion-utils.browser.esm.js");function i(e,t){if(void 0===e.inserted[t.name])return e.insert("",t,e.sheet,!0)}function l(e,t,n){var r=[],a=(0,o.f)(e,r,n);return r.length<2?n:a+t(r)}var c=function e(t){for(var n="",r=0;r<t.length;r++){var a=t[r];if(null!=a){var s=void 0;switch(typeof a){case"boolean":break;case"object":if(Array.isArray(a))s=e(a);else for(var o in s="",a)a[o]&&o&&(s&&(s+=" "),s+=o);break;default:s=a}s&&(n&&(n+=" "),n+=s)}}return n};const d=function(e){var t=(0,a.Z)(e);t.sheet.speedy=function(e){this.isSpeedy=e},t.compat=!0;var n=function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];var a=(0,s.O)(n,t.registered,void 0);return(0,o.M)(t,a,!1),t.key+"-"+a.name};return{css:n,cx:function(){for(var e=arguments.length,r=new Array(e),a=0;a<e;a++)r[a]=arguments[a];return l(t.registered,n,c(r))},injectGlobal:function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];var a=(0,s.O)(n,t.registered);i(t,a)},keyframes:function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];var a=(0,s.O)(n,t.registered),o="animation-"+a.name;return i(t,{name:a.name,styles:"@keyframes "+o+"{"+a.styles+"}"}),o},hydrate:function(e){e.forEach((function(e){t.inserted[e]=!0}))},flush:function(){t.registered={},t.inserted={},t.sheet.flush()},sheet:t.sheet,cache:t,getRegisteredStyles:o.f.bind(null,t.registered),merge:l.bind(null,t.registered,n)}};var p=d({key:"css"}),u=(p.flush,p.hydrate,p.cx),h=(p.merge,p.getRegisteredStyles,p.injectGlobal,p.keyframes),m=p.css,g=(p.sheet,p.cache,n("./.yarn/cache/classnames-npm-2.3.1-f2ae0a8d3c-14db8889d5.zip/node_modules/classnames/index.js")),f=n.n(g),b=n("./packages/grafana-ui/src/index.ts"),y=n("./.yarn/cache/hoist-non-react-statics-npm-3.3.2-e7b709e6c1-b153827042.zip/node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js"),v=n.n(y),x=n("./.yarn/cache/memoize-one-npm-6.0.0-8b2a2cd020-f185ea69f7.zip/node_modules/memoize-one/dist/memoize-one.esm.js"),w=n("./.yarn/cache/tinycolor2-npm-1.4.1-c3c0a28523-ffc22d9866.zip/node_modules/tinycolor2/tinycolor.js"),_=n.n(w),k=n("./.yarn/cache/react-npm-17.0.1-98658812fc-83b9df9529.zip/node_modules/react/jsx-runtime.js");const j=["#17B8BE","#F8DCA1","#B7885E","#FFCB99","#F89570","#829AE3","#E79FD5","#1E96BE","#89DAC1","#B3AD9E","#12939A","#DDB27C","#88572C","#FF9833","#EF5D28","#DA70BF","#4DC19C","#776E57"];let T;!function(e){e[e.Dark=0]="Dark",e[e.Light=1]="Light"}(T||(T={}));const I={type:T.Light,borderStyle:"1px solid #bbb",servicesColorPalette:["#17B8BE","#F8DCA1","#B7885E","#FFCB99","#F89570","#829AE3","#E79FD5","#1E96BE","#89DAC1","#B3AD9E","#12939A","#DDB27C","#88572C","#FF9833","#EF5D28","#162A65","#DA70BF","#125C77","#4DC19C","#776E57"]};function D(e){return!(!e||!e.type)&&e.type===T.Light}const C=r.createContext(void 0);C.displayName="ThemeContext";const S=C.Provider;function E(e){return(0,k.jsx)(C.Consumer,{children:t=>{const n=N(t);return e.children(n)}})}const N=(0,x.Z)((e=>{const t={};return D(e)||(t.servicesColorPalette=j),e?Object.assign({},I,t,e):I})),L=e=>{let t=t=>(0,k.jsx)(E,{children:n=>(0,k.jsx)(e,Object.assign({},Object.assign({},t,{theme:n})))});return t.displayName=`WithTheme(${e.displayName})`,t=v()(t,e),t.wrapped=e,t};function O(){const e=(0,r.useContext)(C);return Object.assign({},I,e)}const M=e=>(0,x.Z)(e);function R(e,t,n){if(D(e))return t;{if(n){const e=_()(t);return _().mostReadable(n,[e.clone().lighten(25),e.clone().lighten(10),e,e.clone().darken(10),e.clone().darken(25)],{includeFallbackColors:!1}).toHex8String()}const e=_()(t).toHsl();e.l=1-e.l;const r=_()(e);return r.isLight()?r.darken(5).toHex8String():r.lighten(5).toHex8String()}}const z=M((()=>({TimelineCollapser:m`
      align-items: center;
      display: flex;
      flex: none;
      justify-content: center;
      margin-right: 0.5rem;
    `})));function P(e){const{onExpandAll:t,onExpandOne:n,onCollapseAll:r,onCollapseOne:a}=e,s=z();return(0,k.jsxs)("div",{className:s.TimelineCollapser,"data-test-id":"TimelineCollapser",children:[(0,k.jsx)(b.IconButton,{tooltip:"Expand +1",size:"xl",tooltipPlacement:"top",name:"angle-down",onClick:n}),(0,k.jsx)(b.IconButton,{tooltip:"Collapse +1",size:"xl",tooltipPlacement:"top",name:"angle-right",onClick:a}),(0,k.jsx)(b.IconButton,{tooltip:"Expand All",size:"xl",tooltipPlacement:"top",name:"angle-double-down",onClick:t}),(0,k.jsx)(b.IconButton,{tooltip:"Collapse All",size:"xl",tooltipPlacement:"top",name:"angle-double-right",onClick:r})]})}var H;!function(e){e.DragEnd="DragEnd",e.DragMove="DragMove",e.DragStart="DragStart",e.MouseEnter="MouseEnter",e.MouseLeave="MouseLeave",e.MouseMove="MouseMove"}(H||(H={}));const $=H;var V=n("./.yarn/cache/lodash-npm-4.17.21-6382451519-eb835a2e51.zip/node_modules/lodash/lodash.js");const F=["getBounds","tag","resetBoundsOnResize"];function B(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}class A{constructor(e){let{getBounds:t,tag:n,resetBoundsOnResize:r=!0}=e,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,F);B(this,"_bounds",void 0),B(this,"_isDragging",void 0),B(this,"_onMouseEnter",void 0),B(this,"_onMouseLeave",void 0),B(this,"_onMouseMove",void 0),B(this,"_onDragStart",void 0),B(this,"_onDragMove",void 0),B(this,"_onDragEnd",void 0),B(this,"_resetBoundsOnResize",void 0),B(this,"getBounds",void 0),B(this,"tag",void 0),B(this,"handleMouseEnter",void 0),B(this,"handleMouseMove",void 0),B(this,"handleMouseLeave",void 0),B(this,"handleMouseDown",void 0),B(this,"resetBounds",(()=>{this._bounds=void 0})),B(this,"_handleMinorMouseEvent",(e=>{const{button:t,clientX:n,type:r}=e;if(this._isDragging||0!==t)return;let a,s=null;if("mouseenter"===r)s=$.MouseEnter,a=this._onMouseEnter;else if("mouseleave"===r)s=$.MouseLeave,a=this._onMouseLeave;else{if("mousemove"!==r)throw new Error(`invalid event type: ${r}`);s=$.MouseMove,a=this._onMouseMove}if(!a)return;const{value:o,x:i}=this._getPosition(n);a({event:e,type:s,value:o,x:i,manager:this,tag:this.tag})})),B(this,"_handleDragEvent",(e=>{const{button:t,clientX:n,type:r}=e;let a,s=null;if("mousedown"===r){if(this._isDragging||0!==t)return;window.addEventListener("mousemove",this._handleDragEvent),window.addEventListener("mouseup",this._handleDragEvent);const e=(0,V.get)(document,"body.style");e&&(e.userSelect="none"),this._isDragging=!0,s=$.DragStart,a=this._onDragStart}else if("mousemove"===r){if(!this._isDragging)return;s=$.DragMove,a=this._onDragMove}else{if("mouseup"!==r)throw new Error(`invalid event type: ${r}`);if(!this._isDragging)return;this._stopDragging(),s=$.DragEnd,a=this._onDragEnd}if(!a)return;const{value:o,x:i}=this._getPosition(n);a({event:e,type:s,value:o,x:i,manager:this,tag:this.tag})})),this.handleMouseDown=this._handleDragEvent,this.handleMouseEnter=this._handleMinorMouseEvent,this.handleMouseMove=this._handleMinorMouseEvent,this.handleMouseLeave=this._handleMinorMouseEvent,this.getBounds=t,this.tag=n,this._isDragging=!1,this._bounds=void 0,this._resetBoundsOnResize=Boolean(r),this._resetBoundsOnResize&&window.addEventListener("resize",this.resetBounds),this._onMouseEnter=a.onMouseEnter,this._onMouseLeave=a.onMouseLeave,this._onMouseMove=a.onMouseMove,this._onDragStart=a.onDragStart,this._onDragMove=a.onDragMove,this._onDragEnd=a.onDragEnd}_getBounds(){return this._bounds||(this._bounds=this.getBounds(this.tag)),this._bounds}_getPosition(e){const{clientXLeft:t,maxValue:n,minValue:r,width:a}=this._getBounds();let s=e-t,o=s/a;return null!=r&&o<r?(o=r,s=r*a):null!=n&&o>n&&(o=n,s=n*a),{value:o,x:s}}_stopDragging(){window.removeEventListener("mousemove",this._handleDragEvent),window.removeEventListener("mouseup",this._handleDragEvent);const e=(0,V.get)(document,"body.style");e&&(e.userSelect=null),this._isDragging=!1}isDragging(){return this._isDragging}dispose(){this._isDragging&&this._stopDragging(),this._resetBoundsOnResize&&window.removeEventListener("resize",this.resetBounds),this._bounds=void 0,this._onMouseEnter=void 0,this._onMouseLeave=void 0,this._onMouseMove=void 0,this._onDragStart=void 0,this._onDragMove=void 0,this._onDragEnd=void 0}}function G(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const W=M((()=>({TimelineColumnResizer:m`
      left: 0;
      position: absolute;
      right: 0;
      top: 0;
    `,wrapper:m`
      bottom: 0;
      position: absolute;
      top: 0;
    `,dragger:m`
      border-left: 2px solid transparent;
      cursor: col-resize;
      height: 5000px;
      margin-left: -1px;
      position: absolute;
      top: 0;
      width: 1px;
      z-index: 10;
      &:hover {
        border-left: 2px solid rgba(0, 0, 0, 0.3);
      }
      &::before {
        position: absolute;
        top: 0;
        bottom: 0;
        left: -8px;
        right: 0;
        content: ' ';
      }
    `,draggerDragging:m`
      background: rgba(136, 0, 136, 0.05);
      width: unset;
      &::before {
        left: -2000px;
        right: -2000px;
      }
    `,draggerDraggingLeft:m`
      border-left: 2px solid #808;
      border-right: 1px solid #999;
    `,draggerDraggingRight:m`
      border-left: 1px solid #999;
      border-right: 2px solid #808;
    `,gripIcon:m`
      position: absolute;
      top: 0;
      bottom: 0;
      &::before,
      &::after {
        border-right: 1px solid #ccc;
        content: ' ';
        height: 9px;
        position: absolute;
        right: 9px;
        top: 25px;
      }
      &::after {
        right: 5px;
      }
    `,gripIconDragging:m`
      &::before,
      &::after {
        border-right: 1px solid rgba(136, 0, 136, 0.5);
      }
    `})));class U extends r.PureComponent{constructor(e){super(e),G(this,"state",void 0),G(this,"_dragManager",void 0),G(this,"_rootElm",void 0),G(this,"_setRootElm",(e=>{this._rootElm=e})),G(this,"_getDraggingBounds",(()=>{if(!this._rootElm)throw new Error("invalid state");const{left:e,width:t}=this._rootElm.getBoundingClientRect(),{min:n,max:r}=this.props;return{clientXLeft:e,width:t,maxValue:r,minValue:n}})),G(this,"_handleDragUpdate",(({value:e})=>{this.setState({dragPosition:e})})),G(this,"_handleDragEnd",(({manager:e,value:t})=>{e.resetBounds(),this.setState({dragPosition:null}),this.props.onChange(t)})),this._dragManager=new A({getBounds:this._getDraggingBounds,onDragEnd:this._handleDragEnd,onDragMove:this._handleDragUpdate,onDragStart:this._handleDragUpdate}),this._rootElm=void 0,this.state={dragPosition:null}}componentWillUnmount(){this._dragManager.dispose()}render(){let e,t;const{position:n,columnResizeHandleHeight:r}=this.props,{dragPosition:a}=this.state;e=100*n+"%";const s={left:e};let o=!1,i=!1;const l=W();if(this._dragManager.isDragging()&&this._rootElm&&null!=a){o=a<n,i=a>n,e=100*a+"%";t={left:100*Math.min(n,a)+"%",right:`calc(${100*(1-Math.max(n,a))}% - 1px)`}}else t=s;t.height=r;const c=o||i;return(0,k.jsxs)("div",{className:l.TimelineColumnResizer,ref:this._setRootElm,"data-test-id":"TimelineColumnResizer",children:[(0,k.jsx)("div",{className:f()(l.gripIcon,c&&l.gripIconDragging),style:s,"data-test-id":"TimelineColumnResizer--gripIcon"}),(0,k.jsx)("div",{"aria-hidden":!0,className:f()(l.dragger,c&&l.draggerDragging,i&&l.draggerDraggingRight,o&&l.draggerDraggingLeft),onMouseDown:this._dragManager.handleMouseDown,style:t,"data-test-id":"TimelineColumnResizer--dragger"})]})}}function K(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const q=M((()=>({TimelineViewingLayer:m`
      label: TimelineViewingLayer;
      bottom: 0;
      cursor: vertical-text;
      left: 0;
      position: absolute;
      right: 0;
      top: 0;
    `,TimelineViewingLayerCursorGuide:m`
      label: TimelineViewingLayerCursorGuide;
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      width: 1px;
      background-color: red;
    `,TimelineViewingLayerDragged:m`
      label: TimelineViewingLayerDragged;
      position: absolute;
      top: 0;
      bottom: 0;
    `,TimelineViewingLayerDraggedDraggingLeft:m`
      label: TimelineViewingLayerDraggedDraggingLeft;
      border-left: 1px solid;
    `,TimelineViewingLayerDraggedDraggingRight:m`
      label: TimelineViewingLayerDraggedDraggingRight;
      border-right: 1px solid;
    `,TimelineViewingLayerDraggedShiftDrag:m`
      label: TimelineViewingLayerDraggedShiftDrag;
      background-color: rgba(68, 68, 255, 0.2);
      border-color: #44f;
    `,TimelineViewingLayerDraggedReframeDrag:m`
      label: TimelineViewingLayerDraggedReframeDrag;
      background-color: rgba(255, 68, 68, 0.2);
      border-color: #f44;
    `,TimelineViewingLayerFullOverlay:m`
      label: TimelineViewingLayerFullOverlay;
      bottom: 0;
      cursor: col-resize;
      left: 0;
      position: fixed;
      right: 0;
      top: 0;
      user-select: none;
    `})));function Z(e,t,n){return e+n*(t-e)}function X(e,t,n){return(n-e)/(t-e)}function Y(e,t,n,r,a){const s=function(e,t){let[n,r]=e<t?[e,t]:[t,e];return n>=1||r<=0?{isOutOfView:!0}:(n<0&&(n=0),r>1&&(r=1),{isDraggingLeft:e>t,left:100*n+"%",width:100*(r-n)+"%"})}(X(e,t,n),X(e,t,r));if(function(e){return Reflect.has(e,"isOutOfView")}(s))return null;const{isDraggingLeft:o,left:i,width:l}=s,c=q(),d=u({[c.TimelineViewingLayerDraggedDraggingRight]:!o,[c.TimelineViewingLayerDraggedReframeDrag]:!a,[c.TimelineViewingLayerDraggedShiftDrag]:a});return(0,k.jsx)("div",{className:u(c.TimelineViewingLayerDragged,c.TimelineViewingLayerDraggedDraggingLeft,d),style:{left:i,width:l},"data-test-id":"Dragged"})}class J extends r.PureComponent{constructor(e){super(e),K(this,"_draggerReframe",void 0),K(this,"_root",void 0),K(this,"_setRoot",(e=>{this._root=e})),K(this,"_getDraggingBounds",(()=>{if(!this._root)throw new Error("invalid state");const{left:e,width:t}=this._root.getBoundingClientRect();return{clientXLeft:e,width:t}})),K(this,"_handleReframeMouseMove",(({value:e})=>{const[t,n]=this.props.viewRangeTime.current,r=Z(t,n,e);this.props.updateNextViewRangeTime({cursor:r})})),K(this,"_handleReframeMouseLeave",(()=>{this.props.updateNextViewRangeTime({cursor:void 0})})),K(this,"_handleReframeDragUpdate",(({value:e})=>{const{current:t,reframe:n}=this.props.viewRangeTime,[r,a]=t,s=Z(r,a,e),o={reframe:{anchor:n?n.anchor:s,shift:s}};this.props.updateNextViewRangeTime(o)})),K(this,"_handleReframeDragEnd",(({manager:e,value:t})=>{const{current:n,reframe:r}=this.props.viewRangeTime,[a,s]=n,o=Z(a,s,t),i=r?r.anchor:o,[l,c]=o<i?[o,i]:[i,o];e.resetBounds(),this.props.updateViewRangeTime(l,c,"timeline-header")})),this._draggerReframe=new A({getBounds:this._getDraggingBounds,onDragEnd:this._handleReframeDragEnd,onDragMove:this._handleReframeDragUpdate,onDragStart:this._handleReframeDragUpdate,onMouseLeave:this._handleReframeMouseLeave,onMouseMove:this._handleReframeMouseMove}),this._root=void 0}UNSAFE_componentWillReceiveProps(e){const{boundsInvalidator:t}=this.props;t!==e.boundsInvalidator&&this._draggerReframe.resetBounds()}componentWillUnmount(){this._draggerReframe.dispose()}render(){const{viewRangeTime:e}=this.props,{current:t,cursor:n,reframe:r,shiftEnd:a,shiftStart:s}=e,[o,i]=t;let l;!(null!=r||null!=a||null!=s)&&null!=n&&n>=o&&n<=i&&(l=100*X(o,i,n)+"%");const c=q();return(0,k.jsxs)("div",{"aria-hidden":!0,className:c.TimelineViewingLayer,ref:this._setRoot,onMouseDown:this._draggerReframe.handleMouseDown,onMouseLeave:this._draggerReframe.handleMouseLeave,onMouseMove:this._draggerReframe.handleMouseMove,"data-test-id":"TimelineViewingLayer",children:[null!=l&&(0,k.jsx)("div",{className:c.TimelineViewingLayerCursorGuide,style:{left:l},"data-test-id":"TimelineViewingLayer--cursorGuide"}),null!=r&&Y(o,i,r.anchor,r.shift,!1),null!=a&&Y(o,i,i,a,!0),null!=s&&Y(o,i,o,s,!0)]})}}var Q=n("./.yarn/cache/moment-timezone-npm-0.5.33-f2b784cd1b-dea6043b4a.zip/node_modules/moment-timezone/index.js"),ee=n.n(Q);const te=1e3,ne=1e6,re=6e7,ae=36e8,se=Math.log10(te),oe=[{unit:"d",microseconds:864e8,ofPrevious:24},{unit:"h",microseconds:ae,ofPrevious:60},{unit:"m",microseconds:re,ofPrevious:60},{unit:"s",microseconds:ne,ofPrevious:1e3},{unit:"ms",microseconds:te,ofPrevious:1e3},{unit:"μs",microseconds:1,ofPrevious:1e3}];const ie=(e,t,n)=>function(e,t){const n=t+(Math.floor(Math.log10(Math.abs(e)))+1);return n<=0?Math.trunc(e):Number(e.toPrecision(n))}(e/n,t)*n;function le(e){const[t,n]=(0,V.dropWhile)(oe,(({microseconds:t},n)=>n<oe.length-1&&t>e));if(1e3===t.ofPrevious)return`${(0,V.round)(e/t.microseconds,2)}${t.unit}`;const r=`${Math.floor(e/t.microseconds)}${t.unit}`,a=Math.round(e/n.microseconds%t.ofPrevious),s=`${a}${n.unit}`;return 0===a?r:`${r} ${s}`}function ce(e,t,n){return!(!Array.isArray(n.tags)||!n.tags.length)&&n.tags.some((n=>n.key===e&&n.value===t))}const de=ce.bind(null,"span.kind","client"),pe=ce.bind(null,"span.kind","server"),ue=ce.bind(null,"error",!0),he=ce.bind(null,"error","true"),me=e=>ue(e)||he(e);const ge=M((e=>({Ticks:m`
      label: Ticks;
      pointer-events: none;
    `,TicksTick:m`
      label: TicksTick;
      position: absolute;
      height: 100%;
      width: 1px;
      background: ${R(e,"#d8d8d8")};
      &:last-child {
        width: 0;
      }
    `,TicksTickLabel:m`
      label: TicksTickLabel;
      left: 0.25rem;
      position: absolute;
    `,TicksTickLabelEndAnchor:m`
      label: TicksTickLabelEndAnchor;
      left: initial;
      right: 0.25rem;
    `})));function fe(e){const{endTime:t,numTicks:n,showLabels:r,startTime:a}=e;let s;if(r){s=[];const e=(t||0)-(a||0);for(let t=0;t<n;t++){const r=(a||0)+t/(n-1)*e;s.push(le(r))}}const o=ge(O()),i=[];for(let e=0;e<n;e++){const t=e/(n-1);i.push((0,k.jsx)("div",{className:o.TicksTick,style:{left:100*t+"%"},children:s&&(0,k.jsx)("span",{className:f()(o.TicksTickLabel,{[o.TicksTickLabelEndAnchor]:t>=1}),children:s[e]})},t))}return(0,k.jsx)("div",{className:o.Ticks,children:i})}fe.defaultProps={endTime:null,showLabels:null,startTime:null};const be=m`
  position: relative;
`,ye=m`
  margin-bottom: 0.25rem;
`,ve=m`
  margin-top: 0.25rem;
  margin-bottom: 0.25rem;
`,xe=m`
  margin: 0;
`,we=m`
  padding-left: 0.5rem;
  padding-right: 0.5rem;
`,_e=m`
  padding-bottom: 0.5rem;
`,ke=m`
  display: flex;
`,je=m`
  align-items: center;
`,Te=m`
  flex: 1 1 auto;
  min-width: 0; /* 1 */
  min-height: 0; /* 1 */
`,Ie=m`
  text-align: right;
`,De=m`
  display: inline-block;
`,Ce=m`
  margin: -0.2rem 0.25rem 0 0;
`,Se=m`
  text-overflow: ellipsis;
`,Ee=m`
  width: 100%;
`,Ne=m`
  color: #aaa;
`,Le=m`
  justify-content: flex-end;
`,Oe=["children","className"],Me=["children","className","width","style"];function Re(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}const ze=M((()=>({flexRow:m`
      display: flex;
      flex: 0 1 auto;
      flex-direction: row;
    `})));function Pe(e){const{children:t,className:n=""}=e,r=Re(e,Oe),a=ze();return(0,k.jsx)("div",Object.assign({className:f()(a.flexRow,n)},r,{children:t}))}function He(e){const{children:t,className:n="",width:r,style:a}=e,s=Re(e,Me),o=100*r+"%",i=Object.assign({},a,{flexBasis:o,maxWidth:o});return(0,k.jsx)("div",Object.assign({className:f()(be,n),style:i},s,{children:t}))}Pe.defaultProps={className:""},He.defaultProps={className:"",style:{}},Pe.Cell=He;const $e=M((e=>({TimelineHeaderRow:m`
      label: TimelineHeaderRow;
      background: ${R(e,"#ececec")};
      border-bottom: 1px solid ${R(e,"#ccc")};
      height: 38px;
      line-height: 38px;
      width: 100%;
      z-index: 4;
      position: relative;
    `,TimelineHeaderRowTitle:m`
      label: TimelineHeaderRowTitle;
      flex: 1;
      overflow: hidden;
      margin: 0;
      text-overflow: ellipsis;
      white-space: nowrap;
    `,TimelineHeaderWrapper:m`
      label: TimelineHeaderWrapper;
      align-items: center;
    `})));function Ve(e){const{duration:t,nameColumnWidth:n,numTicks:r,onCollapseAll:a,onCollapseOne:s,onColummWidthChange:o,onExpandAll:i,onExpandOne:l,updateViewRangeTime:c,updateNextViewRangeTime:d,viewRangeTime:p,columnResizeHandleHeight:u}=e,[h,m]=p.current,g=$e(O());return(0,k.jsxs)(Pe,{className:g.TimelineHeaderRow,"data-test-id":"TimelineHeaderRow",children:[(0,k.jsxs)(Pe.Cell,{className:f()(ke,we,g.TimelineHeaderWrapper),width:n,children:[(0,k.jsx)("h4",{className:g.TimelineHeaderRowTitle,children:"Service & Operation"}),(0,k.jsx)(P,{onCollapseAll:a,onExpandAll:i,onCollapseOne:s,onExpandOne:l})]}),(0,k.jsxs)(Pe.Cell,{width:1-n,children:[(0,k.jsx)(J,{boundsInvalidator:n,updateNextViewRangeTime:d,updateViewRangeTime:c,viewRangeTime:p}),(0,k.jsx)(fe,{numTicks:r,startTime:h*t,endTime:m*t,showLabels:!0})]}),(0,k.jsx)(U,{columnResizeHandleHeight:u,position:n,onChange:o,min:.2,max:.85})]})}function Fe(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}class Be{constructor(e){Fe(this,"bufferLen",void 0),Fe(this,"dataLen",void 0),Fe(this,"heights",void 0),Fe(this,"lastI",void 0),Fe(this,"ys",void 0),this.ys=[],this.heights=[],this.bufferLen=e,this.dataLen=-1,this.lastI=-1}profileData(e){e!==this.dataLen&&(this.dataLen=e,this.ys.length=e,this.heights.length=e,this.lastI>=e&&(this.lastI=e-1))}calcHeights(e,t,n){null!=n&&(this.lastI=n);let r=e+this.bufferLen;if(r<=this.lastI)return;r>=this.heights.length&&(r=this.heights.length-1);let a=this.lastI;for(-1===this.lastI&&(a=0,this.ys[0]=0);a<=r;){const e=this.heights[a]=t(a);this.ys[a+1]=this.ys[a]+e,a++}this.lastI=r}calcYs(e,t){for(;(null==this.ys[this.lastI]||e>this.ys[this.lastI])&&this.lastI<this.dataLen-1;)this.calcHeights(this.lastI,t)}confirmHeight(e,t){let n=e;if(n>this.lastI)return void this.calcHeights(n,t);const r=t(n);if(r===this.heights[n])return;const a=r-this.heights[n];for(this.heights[n]=r;++n<=this.lastI;)this.ys[n]+=a;null!=this.ys[this.lastI+1]&&(this.ys[this.lastI+1]+=a)}findFloorIndex(e,t){this.calcYs(e,t);let n,r=0,a=this.lastI;if(this.ys.length<2||e<this.ys[1])return 0;if(e>this.ys[a])return a;for(;r<a;)if(n=r+.5*(a-r)|0,e>this.ys[n]){if(e<=this.ys[n+1])return n;r=n}else{if(!(e<this.ys[n]))return n;if(e>=this.ys[n-1])return n-1;a=n}throw new Error(`unable to find floor index for y=${e}`)}getRowPosition(e,t){return this.confirmHeight(e,t),{height:this.heights[e],y:this.ys[e]}}getEstimatedHeight(){const e=this.ys[this.lastI]+this.heights[this.lastI];return this.lastI>=this.dataLen-1?0|e:e/(this.lastI+1)*this.heights.length|0}}function Ae(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const Ge=100;class We extends r.Component{constructor(e){super(e),Ae(this,"_yPositions",void 0),Ae(this,"_knownHeights",void 0),Ae(this,"_startIndexDrawn",void 0),Ae(this,"_endIndexDrawn",void 0),Ae(this,"_startIndex",void 0),Ae(this,"_endIndex",void 0),Ae(this,"_viewHeight",void 0),Ae(this,"_scrollTop",void 0),Ae(this,"_isScrolledOrResized",void 0),Ae(this,"_htmlTopOffset",void 0),Ae(this,"_windowScrollListenerAdded",void 0),Ae(this,"_htmlElm",void 0),Ae(this,"_wrapperElm",void 0),Ae(this,"_itemHolderElm",void 0),Ae(this,"getViewHeight",(()=>this._viewHeight)),Ae(this,"getBottomVisibleIndex",(()=>{const e=this._scrollTop+this._viewHeight;return this._yPositions.findFloorIndex(e,this._getHeight)})),Ae(this,"getTopVisibleIndex",(()=>this._yPositions.findFloorIndex(this._scrollTop,this._getHeight))),Ae(this,"getRowPosition",(e=>this._yPositions.getRowPosition(e,this._getHeight))),Ae(this,"_onScroll",(()=>{this._isScrolledOrResized||(this._isScrolledOrResized=!0,window.requestAnimationFrame(this._positionList))})),Ae(this,"_positionList",(()=>{if(this._isScrolledOrResized=!1,!this._wrapperElm)return;this._calcViewIndexes();const e=this.props.viewBufferMin>this._startIndex?0:this._startIndex-this.props.viewBufferMin,t=this.props.viewBufferMin<this.props.dataLength-this._endIndex?this._endIndex+this.props.viewBufferMin:this.props.dataLength-1;(e<this._startIndexDrawn||t>this._endIndexDrawn)&&this.forceUpdate()})),Ae(this,"_initWrapper",(e=>{this.props.windowScroller&&(this._wrapperElm=e,e&&(this._viewHeight=e.clientHeight))})),Ae(this,"_initItemHolder",(e=>{this._itemHolderElm=e,this._scanItemHeights()})),Ae(this,"_scanItemHeights",(()=>{const e=this.props.getIndexFromKey;if(!this._itemHolderElm)return;let t=null,n=null,r=!1;const a=this._itemHolderElm.childNodes,s=a.length;for(let e=0;e<s;e++){const s=a[e],o=s.getAttribute("data-item-key");if(!o){console.warn("itemKey not found");continue}const i=(s.firstElementChild||s).clientHeight;i!==this._knownHeights.get(o)&&(this._knownHeights.set(o,i),r?n=o:(r=!0,t=n=o))}if(null!=t&&null!=n){const r=e(t),a=n===t?r:e(n);this._yPositions.calcHeights(a,this._getHeight,r),this.forceUpdate()}})),Ae(this,"_getHeight",(e=>{const t=this.props.getKeyFromIndex(e),n=this._knownHeights.get(t);return null!=n&&n==n?n:this.props.itemHeightGetter(e,t)})),this._yPositions=new Be(200),this._knownHeights=new Map,this._startIndexDrawn=2**20,this._endIndexDrawn=-1048576,this._startIndex=0,this._endIndex=0,this._viewHeight=-1,this._scrollTop=-1,this._isScrolledOrResized=!1,this._htmlTopOffset=-1,this._windowScrollListenerAdded=!1,this._htmlElm=document.documentElement,this._wrapperElm=void 0,this._itemHolderElm=void 0}componentDidMount(){if(this.props.windowScroller){if(this._wrapperElm){const{top:e}=this._wrapperElm.getBoundingClientRect();this._htmlTopOffset=e+this._htmlElm.scrollTop}window.addEventListener("scroll",this._onScroll),this._windowScrollListenerAdded=!0}else{var e;this._wrapperElm=this.props.scrollElement,null===(e=this._wrapperElm)||void 0===e||e.addEventListener("scroll",this._onScroll)}}componentDidUpdate(){this._itemHolderElm&&this._scanItemHeights()}componentWillUnmount(){var e;this._windowScrollListenerAdded?window.removeEventListener("scroll",this._onScroll):null===(e=this._wrapperElm)||void 0===e||e.removeEventListener("scroll",this._onScroll)}_isViewChanged(){if(!this._wrapperElm)return!1;const e=this.props.windowScroller,t=e?this._htmlElm.clientHeight:this._wrapperElm.clientHeight,n=e?this._htmlElm.scrollTop:this._wrapperElm.scrollTop;return t!==this._viewHeight||n!==this._scrollTop}_calcViewIndexes(){if(this.props.windowScroller)this._viewHeight=window.innerHeight-this._htmlTopOffset,this._scrollTop=window.scrollY;else{if(!this._wrapperElm)return this._viewHeight=-1,this._startIndex=0,void(this._endIndex=0);this._viewHeight=this._wrapperElm.clientHeight,this._scrollTop=this._wrapperElm.scrollTop}const e=this._scrollTop,t=this._scrollTop+this._viewHeight;this._startIndex=this._yPositions.findFloorIndex(e,this._getHeight),this._endIndex=this._yPositions.findFloorIndex(t,this._getHeight)}render(){const{dataLength:e,getKeyFromIndex:t,initialDraw:n=Ge,itemRenderer:r,viewBuffer:a,viewBufferMin:s}=this.props,o=this._getHeight,i=[];let l,c;if(this._yPositions.profileData(e),this._wrapperElm){this._isViewChanged()&&this._calcViewIndexes();const t=s>this._startIndex?0:this._startIndex-s,n=s<e-this._endIndex?this._endIndex+s:e-1;t<this._startIndexDrawn||n>this._endIndexDrawn?(l=a>this._startIndex?0:this._startIndex-a,c=this._endIndex+a,c>=e&&(c=e-1)):(l=this._startIndexDrawn,c=this._endIndexDrawn>e-1?e-1:this._endIndexDrawn)}else l=0,c=(n<e?n:e)-1;this._yPositions.calcHeights(c,o,l||-1),this._startIndexDrawn=l,this._endIndexDrawn=c,i.length=c-l+1;for(let e=l;e<=c;e++){const{y:n,height:a}=this._yPositions.getRowPosition(e,o),s={height:a,top:n,position:"absolute"},l=t(e),c={"data-item-key":l};i.push(r(l,s,e,c))}const d={style:{position:"relative"},ref:this._initWrapper};this.props.windowScroller||(d.onScroll=this._onScroll,d.style.height="100%",d.style.overflowY="auto");const p={position:"relative",height:this._yPositions.getEstimatedHeight()};return(0,k.jsx)("div",Object.assign({},d,{children:(0,k.jsx)("div",{style:p,children:(0,k.jsx)("div",{style:{position:"absolute",top:0,margin:0,padding:0},className:this.props.itemsWrapperClassName,ref:this._initItemHolder,children:i})})}))}}Ae(We,"defaultProps",{initialDraw:Ge,itemsWrapperClassName:"",windowScroller:!1});var Ue=n("./.yarn/__virtual__/react-icons-virtual-f314220a93/0/cache/react-icons-npm-2.2.7-c2e0e4d90b-74e692fdd3.zip/node_modules/react-icons/lib/io/alert.js"),Ke=n.n(Ue),qe=n("./.yarn/__virtual__/react-icons-virtual-f314220a93/0/cache/react-icons-npm-2.2.7-c2e0e4d90b-74e692fdd3.zip/node_modules/react-icons/lib/io/arrow-right-a.js"),Ze=n.n(qe),Xe=n("./.yarn/__virtual__/react-icons-virtual-f314220a93/0/cache/react-icons-npm-2.2.7-c2e0e4d90b-74e692fdd3.zip/node_modules/react-icons/lib/io/network.js"),Ye=n.n(Xe),Je=n("./.yarn/__virtual__/react-icons-virtual-f314220a93/0/cache/react-icons-npm-2.2.7-c2e0e4d90b-74e692fdd3.zip/node_modules/react-icons/lib/md/file-upload.js"),Qe=n.n(Je),et=n("./.yarn/__virtual__/react-icons-virtual-f314220a93/0/cache/react-icons-npm-2.2.7-c2e0e4d90b-74e692fdd3.zip/node_modules/react-icons/lib/io/android-open.js"),tt=n.n(et);const nt=["isLarge","className"];const rt=M((()=>({NewWindowIconLarge:m`
      label: NewWindowIconLarge;
      font-size: 1.5em;
    `})));function at(e){const{isLarge:t,className:n}=e,r=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,nt),a=rt(),s=f()({[a.NewWindowIconLarge]:t},n);return(0,k.jsx)(tt(),Object.assign({className:s},r))}at.defaultProps={isLarge:!1};const st=function(e){return(0,k.jsx)(bt,{children:t=>(0,k.jsx)(t.Popover,Object.assign({},e))})},ot=function(e){return(0,k.jsx)(bt,{children:t=>(0,k.jsx)(t.Tooltip,Object.assign({},e))})},it=function(e){return(0,k.jsx)(bt,{children:t=>(0,k.jsx)(t.Icon,Object.assign({},e))})},lt=function(e){return(0,k.jsx)(bt,{children:t=>(0,k.jsx)(t.Dropdown,Object.assign({},e))})},ct=function(e){return(0,k.jsx)(bt,{children:t=>(0,k.jsx)(t.Menu,Object.assign({},e))})},dt=function(e){return(0,k.jsx)(bt,{children:t=>(0,k.jsx)(t.MenuItem,Object.assign({},e))})},pt=function(e){return(0,k.jsx)(bt,{children:t=>(0,k.jsx)(t.Button,Object.assign({},e))})},ut=function(e){return(0,k.jsx)(bt,{children:t=>(0,k.jsx)(t.Divider,Object.assign({},e))})},ht=function(e){return(0,k.jsx)(bt,{children:t=>(0,k.jsx)(t.Input,Object.assign({},e))})},mt=function(e){return(0,k.jsx)(bt,{children:t=>(0,k.jsx)(t.InputGroup,Object.assign({},e))})},gt=r.createContext(void 0);gt.displayName="UIElementsContext";const ft=gt;function bt(e){return(0,k.jsx)(gt.Consumer,{children:t=>{if(!t)throw new Error("Elements context is required. You probably forget to use UIElementsContext.Provider");return e.children(t)}})}const yt=r.createContext(void 0);yt.displayName="ExternalLinkContext";const vt=yt,xt=["reference","children","className","focusSpan"];function wt(e){const{reference:t,children:n,className:r,focusSpan:a}=e,s=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,xt);return delete s.onClick,t.span?(0,k.jsx)("a",Object.assign({role:"button",onClick:()=>a(t.spanID),className:r},s,{children:n})):(0,k.jsx)(vt.Consumer,{children:e=>{if(!e)throw new Error("ExternalLinkContext does not have a value, you probably forgot to setup it's provider");return(0,k.jsx)("a",Object.assign({href:e(t.traceID,t.spanID),target:"_blank",rel:"noopener noreferrer",className:r},s,{children:n}))}})}const _t=M((()=>({MultiParent:m`
      padding: 0 5px;
      color: #000;
      & ~ & {
        margin-left: 5px;
      }
    `,TraceRefLink:m`
      display: flex;
      justify-content: space-between;
    `,NewWindowIcon:m`
      margin: 0.2em 0 0;
    `,tooltip:m`
      max-width: none;
    `})));class kt extends r.PureComponent{constructor(...e){var t,n,r;super(...e),r=e=>{const t=_t();return(0,k.jsx)(ct,{children:e.map((e=>{const{span:n,spanID:r}=e;return(0,k.jsx)(dt,{children:(0,k.jsxs)(wt,{reference:e,focusSpan:this.props.focusSpan,className:t.TraceRefLink,children:[n?`${n.process.serviceName}:${n.operationName} - ${e.spanID}`:`(another trace) - ${e.spanID}`,!n&&(0,k.jsx)(at,{className:t.NewWindowIcon})]})},`${r}`)}))})},(n="referencesList")in(t=this)?Object.defineProperty(t,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[n]=r}render(){const{references:e,children:t,tooltipText:n,focusSpan:r}=this.props,a=_t(),s={arrowPointAtCenter:!0,mouseLeaveDelay:.5,placement:"bottom",title:n,overlayClassName:a.tooltip};if(e.length>1)return(0,k.jsx)(ot,Object.assign({},s,{children:(0,k.jsx)(lt,{overlay:this.referencesList(e),placement:"bottomRight",trigger:["click"],children:(0,k.jsx)("a",{className:a.MultiParent,children:t})})}));const o=e[0];return(0,k.jsx)(ot,Object.assign({},s,{children:(0,k.jsx)(wt,{reference:o,focusSpan:r,className:a.MultiParent,children:t})}))}}var jt,Tt,It=n("./.yarn/__virtual__/react-icons-virtual-f314220a93/0/cache/react-icons-npm-2.2.7-c2e0e4d90b-74e692fdd3.zip/node_modules/react-icons/lib/io/chevron-right.js"),Dt=n.n(It),Ct=n("./.yarn/__virtual__/react-icons-virtual-f314220a93/0/cache/react-icons-npm-2.2.7-c2e0e4d90b-74e692fdd3.zip/node_modules/react-icons/lib/io/ios-arrow-down.js"),St=n.n(Ct);function Et(e){return(0,V.get)((0,V.find)(e.references,(({span:e,refType:t})=>e&&e.spanID&&("CHILD_OF"===t||"FOLLOWS_FROM"===t))),"span")}function Nt(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const Lt=M((e=>({SpanTreeOffset:m`
      label: SpanTreeOffset;
      color: ${R(e,"#000")};
      position: relative;
    `,SpanTreeOffsetParent:m`
      label: SpanTreeOffsetParent;
      &:hover {
        cursor: pointer;
      }
    `,indentGuide:m`
      label: indentGuide;
      /* The size of the indentGuide is based off of the iconWrapper */
      padding-right: calc(0.5rem + 12px);
      height: 100%;
      border-left: 3px solid transparent;
      display: inline-flex;
      &::before {
        content: '';
        padding-left: 1px;
        background-color: ${R(e,"lightgrey")};
      }
    `,indentGuideActive:m`
      label: indentGuideActive;
      border-color: ${R(e,"darkgrey")};
      &::before {
        background-color: transparent;
      }
    `,iconWrapper:m`
      label: iconWrapper;
      position: absolute;
      right: 0.25rem;
    `})));class Ot extends r.PureComponent{constructor(e){super(e),Nt(this,"ancestorIds",void 0),Nt(this,"handleMouseLeave",((e,t)=>{e.relatedTarget instanceof HTMLSpanElement&&(0,V.get)(e,"relatedTarget.dataset.ancestorId")===t||this.props.removeHoverIndentGuideId(t)})),Nt(this,"handleMouseEnter",((e,t)=>{e.relatedTarget instanceof HTMLSpanElement&&(0,V.get)(e,"relatedTarget.dataset.ancestorId")===t||this.props.addHoverIndentGuideId(t)})),this.ancestorIds=function(e){const t=[];if(!e)return t;let n=Et(e);for(;n;)t.push(n.spanID),n=Et(n);return t}(e.span),this.ancestorIds.push("root"),this.ancestorIds.reverse()}render(){const{childrenVisible:e,onClick:t,showChildrenIcon:n,span:r,theme:a}=this.props,{hasChildren:s,spanID:o}=r,i=s?{onClick:t,role:"switch","aria-checked":e}:null,l=n&&s&&(e?jt||(jt=(0,k.jsx)(St(),{})):Tt||(Tt=(0,k.jsx)(Dt(),{}))),c=Lt(a);return(0,k.jsxs)("span",Object.assign({className:f()(c.SpanTreeOffset,{[c.SpanTreeOffsetParent]:s})},i,{children:[this.ancestorIds.map((e=>(0,k.jsx)("span",{className:f()(c.indentGuide,{[c.indentGuideActive]:this.props.hoverIndentGuideIds.has(e)}),"data-ancestor-id":e,"data-test-id":"SpanTreeOffset--indentGuide",onMouseEnter:t=>this.handleMouseEnter(t,e),onMouseLeave:t=>this.handleMouseLeave(t,e)},e))),l&&(0,k.jsx)("span",{className:c.iconWrapper,onMouseEnter:e=>this.handleMouseEnter(e,o),onMouseLeave:e=>this.handleMouseLeave(e,o),"data-test-id":"icon-wrapper",children:l})]}))}}Nt(Ot,"displayName","UnthemedSpanTreeOffset"),Nt(Ot,"defaultProps",{childrenVisible:!1,showChildrenIcon:!0});const Mt=L(Ot);var Rt=n("./.yarn/cache/fbjs-npm-0.8.18-79fe681dcf-668731b946.zip/node_modules/fbjs/lib/shallowEqual.js"),zt=n.n(Rt),Pt=(n("./.yarn/cache/hoist-non-react-statics-npm-2.5.5-e15c7ba611-ee2d05e5c7.zip/node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js"),n("./.yarn/cache/change-emitter-npm-0.1.6-9daba4f281-0ed494ba99.zip/node_modules/change-emitter/lib/index.js")),Ht=n("./.yarn/cache/symbol-observable-npm-1.2.0-9e812a0a39-48ffbc22e3.zip/node_modules/symbol-observable/es/index.js"),$t=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},Vt=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ft=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)},Bt=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},At=function(e,t,n,a,s){if(!e&&t)return n(s?Vt({},a,{children:s}):a);var o=n;return s?r.createElement(o,a,s):r.createElement(o,a)},Gt=function(e){return Boolean(e&&e.prototype&&"function"==typeof e.prototype.render)},Wt=function(e){return Boolean("function"==typeof e&&!Gt(e)&&!e.defaultProps&&!e.contextTypes)},Ut=function(e){var t=Wt(e);return function(n,r){return At(!1,t,e,n,r)}},Kt=function(e){return function(t){var n=Ut(t);return function(t){return n(e(t))}}},qt=function(e,t){for(var n={},r=0;r<t.length;r++){var a=t[r];e.hasOwnProperty(a)&&(n[a]=e[a])}return n},Zt=(Object.keys,function(e){function t(){return $t(this,t),Bt(this,e.apply(this,arguments))}Ft(t,e),t.prototype.render=function(){return null}}(r.Component),function(e){return function(t){var n=Ut(t),a=function(t){function r(){return $t(this,r),Bt(this,t.apply(this,arguments))}return Ft(r,t),r.prototype.shouldComponentUpdate=function(t){return e(this.props,t)},r.prototype.render=function(){return n(this.props)},r}(r.Component);return a}}),Xt=function(e){return Zt((function(t,n){return!zt()(qt(n,e),qt(t,e))}))};var Yt,Jt={fromESObservable:null,toESObservable:null},Qt={fromESObservable:function(e){return"function"==typeof Jt.fromESObservable?Jt.fromESObservable(e):e},toESObservable:function(e){return"function"==typeof Jt.toESObservable?Jt.toESObservable(e):e}},en=(Yt=Qt,n("./.yarn/__virtual__/react-icons-virtual-f314220a93/0/cache/react-icons-npm-2.2.7-c2e0e4d90b-74e692fdd3.zip/node_modules/react-icons/lib/io/ios-arrow-right.js")),tn=n.n(en);var nn=n("./.yarn/cache/json-markup-npm-1.1.3-2762e9da70-aa4e1935fc.zip/node_modules/json-markup/index.js"),rn=n.n(nn),an=n("./.yarn/cache/copy-to-clipboard-npm-3.3.1-18029bce99-3c7b1c333d.zip/node_modules/copy-to-clipboard/index.js"),sn=n.n(an);function on(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const ln=M((()=>({CopyIcon:m`
      background-color: transparent;
      border: none;
      color: inherit;
      height: 100%;
      overflow: hidden;
      padding: 0px;
      &:focus {
        background-color: rgba(255, 255, 255, 0.25);
        color: inherit;
      }
    `})));class cn extends r.PureComponent{constructor(...e){super(...e),on(this,"state",{hasCopied:!1}),on(this,"handleClick",(()=>{this.setState({hasCopied:!0}),sn()(this.props.copyText)})),on(this,"handleTooltipVisibilityChange",(e=>{!e&&this.state.hasCopied&&this.setState({hasCopied:!1})}))}render(){const e=ln();return(0,k.jsx)(ot,{arrowPointAtCenter:!0,mouseLeaveDelay:.5,onVisibleChange:this.handleTooltipVisibilityChange,placement:this.props.placement,title:this.state.hasCopied?"Copied":this.props.tooltipTitle,children:(0,k.jsx)(pt,{className:f()(e.CopyIcon,this.props.className),htmlType:"button",icon:this.props.icon,onClick:this.handleClick})})}}on(cn,"defaultProps",{className:void 0,icon:"copy",placement:"left"});const dn="copyIcon",pn=M((e=>({KeyValueTable:m`
      label: KeyValueTable;
      background: ${R(e,"#fff")};
      border: 1px solid ${R(e,"#ddd")};
      margin-bottom: 0.7em;
      max-height: 450px;
      overflow: auto;
    `,body:m`
      label: body;
      vertical-align: baseline;
    `,row:m`
      label: row;
      & > td {
        padding: 0.25rem 0.5rem;
        padding: 0.25rem 0.5rem;
        vertical-align: top;
      }
      &:nth-child(2n) > td {
        background: ${R(e,"#f5f5f5")};
      }
      &:not(:hover) .${dn} {
        visibility: hidden;
      }
    `,keyColumn:m`
      label: keyColumn;
      color: ${R(e,"#888")};
      white-space: pre;
      width: 125px;
    `,copyColumn:m`
      label: copyColumn;
      text-align: right;
    `,linkIcon:m`
      label: linkIcon;
      vertical-align: middle;
      font-weight: bold;
    `}))),un=/^(\[|\{)/;function hn(e){if("string"==typeof e&&un.test(e))try{return JSON.parse(e)}catch(e){}return e}const mn=e=>{const t=pn(O());return(0,k.jsxs)("a",{href:e.href,title:e.title,target:"_blank",rel:"noopener noreferrer",children:[e.children," ",(0,k.jsx)(it,{className:t.linkIcon,type:"export"})]})};mn.defaultProps={title:""};const gn=e=>(0,k.jsx)(ct,{children:e.map((({text:e,url:t},n)=>(0,k.jsx)(dt,{children:(0,k.jsx)(mn,{href:t,children:e})},`${t}-${n}`)))});function fn(e){const{data:t,linksGetter:n}=e,r=pn(O());return(0,k.jsx)("div",{className:f()(r.KeyValueTable),"data-test-id":"KeyValueTable",children:(0,k.jsx)("table",{className:Ee,children:(0,k.jsx)("tbody",{className:r.body,children:t.map(((e,a)=>{const s={__html:rn()(hn(e.value))},o=(0,k.jsx)("div",{className:De,dangerouslySetInnerHTML:s}),i=n?n(t,a):null;let l;return l=i&&1===i.length?(0,k.jsx)("div",{children:(0,k.jsx)(mn,{href:i[0].url,title:i[0].text,children:o})}):i&&i.length>1?(0,k.jsx)("div",{children:(0,k.jsx)(lt,{overlay:gn(i),placement:"bottomRight",trigger:["click"],children:(0,k.jsxs)("a",{children:[o," ",(0,k.jsx)(it,{className:r.linkIcon,type:"profile"})]})})}):o,(0,k.jsxs)("tr",{className:r.row,children:[(0,k.jsx)("td",{className:r.keyColumn,"data-test-id":"KeyValueTable--keyColumn",children:e.key}),(0,k.jsx)("td",{children:l}),(0,k.jsx)("td",{className:r.copyColumn,children:(0,k.jsx)(cn,{className:dn,copyText:JSON.stringify(e,null,2),tooltipTitle:"Copy JSON"})})]},`${e.key}-${a}`)}))})})})}const bn=M((e=>({header:m`
      label: header;
      cursor: pointer;
      overflow: hidden;
      padding: 0.25em 0.1em;
      text-overflow: ellipsis;
      white-space: nowrap;
      &:hover {
        background: ${R(e,"#e8e8e8")};
      }
    `,headerEmpty:m`
      label: headerEmpty;
      background: none;
      cursor: initial;
    `,headerHighContrast:m`
      label: headerHighContrast;
      &:hover {
        background: ${R(e,"#ddd")};
      }
    `,emptyIcon:m`
      label: emptyIcon;
      color: ${R(e,"#aaa")};
    `,summary:m`
      label: summary;
      display: inline;
      list-style: none;
      padding: 0;
    `,summaryItem:m`
      label: summaryItem;
      display: inline;
      margin-left: 0.7em;
      padding-right: 0.5rem;
      border-right: 1px solid ${R(e,"#ddd")};
      &:last-child {
        padding-right: 0;
        border-right: none;
      }
    `,summaryLabel:m`
      label: summaryLabel;
      color: ${R(e,"#777")};
    `,summaryDelim:m`
      label: summaryDelim;
      color: ${R(e,"#bbb")};
      padding: 0 0.2em;
    `})));function yn(e){const{data:t}=e,n=bn(O());return Array.isArray(t)&&t.length?(0,k.jsx)("ul",{className:n.summary,children:t.map(((e,t)=>(0,k.jsxs)("li",{className:n.summaryItem,children:[(0,k.jsx)("span",{className:n.summaryLabel,children:e.key}),(0,k.jsx)("span",{className:n.summaryDelim,children:"="}),String(e.value)]},`${e.key}-${t}`)))}):null}function vn(e){const{className:t,data:n,highContrast:r,interactive:a,isOpen:s,label:o,linksGetter:i,onToggle:l}=e,c=!Array.isArray(n)||!n.length,d=bn(O()),p=f()(Ce,{[d.emptyIcon]:c});let u=null,h=null;return a&&(u=s?(0,k.jsx)(St(),{className:p}):(0,k.jsx)(tn(),{className:p}),h={"aria-checked":s,onClick:c?null:l,role:"switch"}),(0,k.jsxs)("div",{className:f()(t,Se),children:[(0,k.jsxs)("div",Object.assign({className:f()(d.header,{[d.headerEmpty]:c,[d.headerHighContrast]:r&&!c})},h,{"data-test-id":"AccordianKeyValues--header",children:[u,(0,k.jsxs)("strong",{"data-test":"label",children:[o,s||":"]}),!s&&(0,k.jsx)(yn,{data:n})]})),s&&(0,k.jsx)(fn,{data:n,linksGetter:i})]})}var xn,wn,_n;yn.defaultProps={data:null},vn.defaultProps={className:null,highContrast:!1,interactive:!0,onToggle:null};const kn=M((e=>({AccordianLogs:m`
      label: AccordianLogs;
      border: 1px solid ${R(e,"#d8d8d8")};
      position: relative;
      margin-bottom: 0.25rem;
    `,AccordianLogsHeader:m`
      label: AccordianLogsHeader;
      background: ${R(e,"#e4e4e4")};
      color: inherit;
      display: block;
      padding: 0.25rem 0.5rem;
      &:hover {
        background: ${R(e,"#dadada")};
      }
    `,AccordianLogsContent:m`
      label: AccordianLogsContent;
      background: ${R(e,"#f0f0f0")};
      border-top: 1px solid ${R(e,"#d8d8d8")};
      padding: 0.5rem 0.5rem 0.25rem 0.5rem;
    `,AccordianLogsFooter:m`
      label: AccordianLogsFooter;
      color: ${R(e,"#999")};
    `})));function jn(e){const{interactive:t,isOpen:n,linksGetter:r,logs:a,openedItems:s,onItemToggle:o,onToggle:i,timestamp:l}=e;let c=null,d="span",p=null;t&&(c=n?xn||(xn=(0,k.jsx)(St(),{className:Ce})):wn||(wn=(0,k.jsx)(tn(),{className:"u-align-icon"})),d="a",p={"aria-checked":n,onClick:i,role:"switch"});const u=kn(O());return(0,k.jsxs)("div",{className:u.AccordianLogs,children:[(0,k.jsxs)(d,Object.assign({className:u.AccordianLogsHeader},p,{children:[c," ",_n||(_n=(0,k.jsx)("strong",{children:"Logs"}))," (",a.length,")"]})),n&&(0,k.jsxs)("div",{className:u.AccordianLogsContent,children:[(0,V.sortBy)(a,"timestamp").map(((e,n)=>(0,k.jsx)(vn,{className:n<a.length-1?ye:null,data:e.fields||[],highContrast:!0,interactive:t,isOpen:!!s&&s.has(e),label:`${le(e.timestamp-l)}`,linksGetter:r,onToggle:t&&o?()=>o(e):null},`${e.timestamp}-${n}`))),(0,k.jsx)("small",{className:u.AccordianLogsFooter,children:"Log timestamps are relative to the start time of the full trace."})]})]})}jn.defaultProps={interactive:!0,linksGetter:void 0,onItemToggle:void 0,onToggle:void 0,openedItems:void 0};const Tn=M((e=>({wrapper:m`
      label: wrapper;
      bottom: 0;
      left: 0;
      position: absolute;
      right: 0;
      top: 0;
      overflow: hidden;
      z-index: 0;
    `,bar:m`
      label: bar;
      border-radius: 3px;
      min-width: 2px;
      position: absolute;
      height: 36%;
      top: 32%;
    `,rpc:m`
      label: rpc;
      position: absolute;
      top: 35%;
      bottom: 35%;
      z-index: 1;
    `,label:m`
      label: label;
      color: #aaa;
      font-size: 12px;
      font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
      line-height: 1em;
      white-space: nowrap;
      padding: 0 0.5em;
      position: absolute;
    `,logMarker:m`
      label: logMarker;
      background-color: ${R(e,"#2c3235")};
      cursor: pointer;
      height: 60%;
      min-width: 1px;
      position: absolute;
      top: 20%;
      &:hover {
        background-color: ${R(e,"#464c54")};
      }
      &::before,
      &::after {
        content: '';
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        border: 1px solid transparent;
      }
      &::after {
        left: 0;
      }
    `})));function In(e){return`${(100*e).toFixed(1)}%`}const Dn=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return 0===t.length?function(e){return e}:1===t.length?t[0]:t.reduce((function(e,t){return function(){return e(t.apply(void 0,arguments))}}))}((Sn="label",En="setLabel",Nn=e=>e.shortLabel,function(e){var t=Ut(e),n=function(e){function n(){var t,r;$t(this,n);for(var a=arguments.length,s=Array(a),o=0;o<a;o++)s[o]=arguments[o];return t=r=Bt(this,e.call.apply(e,[this].concat(s))),r.state={stateValue:"function"==typeof Nn?Nn(r.props):Nn},r.updateStateValue=function(e,t){return r.setState((function(t){var n=t.stateValue;return{stateValue:"function"==typeof e?e(n):e}}),t)},Bt(r,t)}return Ft(n,e),n.prototype.render=function(){var e;return t(Vt({},this.props,((e={})[Sn]=this.state.stateValue,e[En]=this.updateStateValue,e)))},n}(r.Component);return n}),(Cn=({setLabel:e,shortLabel:t,longLabel:n})=>({setLongLabel:()=>e(n),setShortLabel:()=>e(t)}),Kt((function(e){return Vt({},e,"function"==typeof Cn?Cn(e):Cn)}))),Xt(["label","rpc","viewStart","viewEnd"]))((function(e){const{viewEnd:t,viewStart:n,getViewedBounds:r,color:a,label:s,onClick:o,setLongLabel:i,setShortLabel:l,rpc:c,traceStartTime:d,span:p,theme:u,className:h,labelClassName:m}=e,g=(0,V.groupBy)(p.logs,(e=>{const t=r(e.timestamp,e.timestamp).start;return In(Math.round(500*t)/500)})),b=Tn(u);return(0,k.jsxs)("div",{className:f()(b.wrapper,h),onClick:o,onMouseLeave:l,onMouseOver:i,"aria-hidden":!0,"data-test-id":"SpanBar--wrapper",children:[(0,k.jsx)("div",{"aria-label":s,className:b.bar,style:{background:a,left:In(n),width:In(t-n)},children:(0,k.jsx)("div",{className:f()(b.label,m),"data-test-id":"SpanBar--label",children:s})}),(0,k.jsx)("div",{children:Object.keys(g).map((e=>(0,k.jsx)(st,{placement:"topLeft",content:(0,k.jsx)(jn,{interactive:!1,isOpen:!0,logs:g[e],timestamp:d}),children:(0,k.jsx)("div",{className:b.logMarker,style:{left:e}})},e)))}),c&&(0,k.jsx)("div",{className:b.rpc,style:{background:c.color,left:In(c.viewStart),width:In(c.viewEnd-c.viewStart)}})]})}));var Cn,Sn,En,Nn,Ln,On,Mn,Rn;function zn(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const Pn="spanBar",Hn="spanBarLabel",$n="nameWrapper",Vn="jaegerView",Fn="nameColumn",Bn=M((e=>({nameWrapper:m`
      label: nameWrapper;
      line-height: 27px;
      overflow: hidden;
      display: flex;
    `,nameWrapperMatchingFilter:m`
      label: nameWrapperMatchingFilter;
      background-color: ${R(e,"#fffce4")};
    `,nameColumn:m`
      label: nameColumn;
      position: relative;
      white-space: nowrap;
      z-index: 1;
      &:hover {
        z-index: 1;
      }
    `,endpointName:m`
      label: endpointName;
      color: ${R(e,"#808080")};
    `,view:m`
      label: view;
      position: relative;
    `,viewExpanded:m`
      label: viewExpanded;
      background: ${R(e,"#f8f8f8")};
      outline: 1px solid ${R(e,"#ddd")};
    `,viewExpandedAndMatchingFilter:m`
      label: viewExpandedAndMatchingFilter;
      background: ${R(e,"#fff3d7")};
      outline: 1px solid ${R(e,"#ddd")};
    `,row:m`
      label: row;
      &:hover .${Pn} {
        opacity: 1;
      }
      &:hover .${Hn} {
        color: ${R(e,"#000")};
      }
      &:hover .${$n} {
        background: #f8f8f8;
        background: linear-gradient(
          90deg,
          ${R(e,"#fafafa")},
          ${R(e,"#f8f8f8")} 75%,
          ${R(e,"#eee")}
        );
      }
      &:hover .${Vn} {
        background-color: ${R(e,"#f5f5f5")};
        outline: 1px solid ${R(e,"#ddd")};
      }
    `,rowClippingLeft:m`
      label: rowClippingLeft;
      & .${Fn}::before {
        content: ' ';
        height: 100%;
        position: absolute;
        width: 6px;
        background-image: linear-gradient(
          to right,
          ${R(e,"rgba(25, 25, 25, 0.25)")},
          ${R(e,"rgba(32, 32, 32, 0)")}
        );
        left: 100%;
        z-index: -1;
      }
    `,rowClippingRight:m`
      label: rowClippingRight;
      & .${Vn}::before {
        content: ' ';
        height: 100%;
        position: absolute;
        width: 6px;
        background-image: linear-gradient(
          to left,
          ${R(e,"rgba(25, 25, 25, 0.25)")},
          ${R(e,"rgba(25, 25, 25, 0.25)")}
        );
        right: 0%;
        z-index: 1;
      }
    `,rowExpanded:m`
      label: rowExpanded;
      & .${Pn} {
        opacity: 1;
      }
      & .${Hn} {
        color: ${R(e,"#000")};
      }
      & .${$n}, &:hover .${$n} {
        background: ${R(e,"#f0f0f0")};
        box-shadow: 0 1px 0 ${R(e,"#ddd")};
      }
      & .${"nameWrapperMatchingFilter"} {
        background: ${R(e,"#fff3d7")};
      }
      &:hover .${Vn} {
        background: ${R(e,"#eee")};
      }
    `,rowMatchingFilter:m`
      label: rowMatchingFilter;
      background-color: ${R(e,"#fffce4")};
      &:hover .${$n} {
        background: linear-gradient(
          90deg,
          ${R(e,"#fff5e1")},
          ${R(e,"#fff5e1")} 75%,
          ${R(e,"#ffe6c9")}
        );
      }
      &:hover .${Vn} {
        background-color: ${R(e,"#fff3d7")};
        outline: 1px solid ${R(e,"#ddd")};
      }
    `,rowExpandedAndMatchingFilter:m`
      label: rowExpandedAndMatchingFilter;
      &:hover .${Vn} {
        background: ${R(e,"#ffeccf")};
      }
    `,name:m`
      label: name;
      color: ${R(e,"#000")};
      cursor: pointer;
      flex: 1 1 auto;
      outline: none;
      overflow: hidden;
      padding-left: 4px;
      padding-right: 0.25em;
      position: relative;
      text-overflow: ellipsis;
      &::before {
        content: ' ';
        position: absolute;
        top: 4px;
        bottom: 4px;
        left: 0;
        border-left: 4px solid;
        border-left-color: inherit;
      }

      /* This is so the hit area of the span-name extends the rest of the width of the span-name column */
      &::after {
        background: transparent;
        bottom: 0;
        content: ' ';
        left: 0;
        position: absolute;
        top: 0;
        width: 1000px;
      }
      &:focus {
        text-decoration: none;
      }
      &:hover > small {
        color: ${R(e,"#000")};
      }
    `,nameDetailExpanded:m`
      label: nameDetailExpanded;
      &::before {
        bottom: 0;
      }
    `,svcName:m`
      label: svcName;
      padding: 0 0.25rem 0 0.5rem;
      font-size: 1.05em;
    `,svcNameChildrenCollapsed:m`
      label: svcNameChildrenCollapsed;
      font-weight: bold;
      font-style: italic;
    `,errorIcon:m`
      label: errorIcon;
      border-radius: 6.5px;
      color: ${R(e,"#fff")};
      font-size: 0.85em;
      margin-right: 0.25rem;
      padding: 1px;
    `,rpcColorMarker:m`
      label: rpcColorMarker;
      border-radius: 6.5px;
      display: inline-block;
      font-size: 0.85em;
      height: 1em;
      margin-right: 0.25rem;
      padding: 1px;
      width: 1em;
      vertical-align: middle;
    `,labelRight:m`
      label: labelRight;
      left: 100%;
    `,labelLeft:m`
      label: labelLeft;
      right: 100%;
    `})));class An extends r.PureComponent{constructor(...e){super(...e),zn(this,"_detailToggle",(()=>{this.props.onDetailToggled(this.props.span.spanID)})),zn(this,"_childrenToggle",(()=>{this.props.onChildrenToggled(this.props.span.spanID)}))}render(){const{className:e,color:t,columnDivision:n,isChildrenExpanded:r,isDetailExpanded:a,isMatchingFilter:s,numTicks:o,rpc:i,noInstrumentedServer:l,showErrorIcon:c,getViewedBounds:d,traceStartTime:p,span:u,focusSpan:h,hoverIndentGuideIds:m,addHoverIndentGuideId:g,removeHoverIndentGuideId:b,clippingLeft:y,clippingRight:v,theme:x,createSpanLink:w}=this.props,{duration:_,hasChildren:j,operationName:T,process:{serviceName:I}}=u,D=le(_),C=d(u.startTime,u.startTime+u.duration),S=C.start,E=C.end,N=Bn(x),L=`${I}::${T}`;let O,M;return S>1-E?(O=`${L} | ${D}`,M=N.labelLeft):(O=`${D} | ${L}`,M=N.labelRight),(0,k.jsxs)(Pe,{className:f()(N.row,{[N.rowExpanded]:a,[N.rowMatchingFilter]:s,[N.rowExpandedAndMatchingFilter]:s&&a,[N.rowClippingLeft]:y,[N.rowClippingRight]:v},e),children:[(0,k.jsx)(Pe.Cell,{className:f()(N.nameColumn,Fn),width:n,children:(0,k.jsxs)("div",{className:f()(N.nameWrapper,$n,{[N.nameWrapperMatchingFilter]:s,nameWrapperMatchingFilter:s}),children:[(0,k.jsx)(Mt,{childrenVisible:r,span:u,onClick:j?this._childrenToggle:void 0,hoverIndentGuideIds:m,addHoverIndentGuideId:g,removeHoverIndentGuideId:b}),(0,k.jsxs)("a",{className:f()(N.name,{[N.nameDetailExpanded]:a}),"aria-checked":a,title:L,onClick:this._detailToggle,role:"switch",style:{borderColor:t},tabIndex:0,children:[(0,k.jsxs)("span",{className:f()(N.svcName,{[N.svcNameChildrenCollapsed]:j&&!r}),children:[c&&(0,k.jsx)(Ke(),{style:{backgroundColor:u.errorIconColor?R(x,u.errorIconColor):R(x,"#db2828")},className:N.errorIcon}),I," ",i&&(0,k.jsxs)("span",{children:[Ln||(Ln=(0,k.jsx)(Ze(),{}))," ",(0,k.jsx)("i",{className:N.rpcColorMarker,style:{background:i.color}}),i.serviceName]}),l&&(0,k.jsxs)("span",{children:[On||(On=(0,k.jsx)(Ze(),{}))," ",(0,k.jsx)("i",{className:N.rpcColorMarker,style:{background:l.color}}),l.serviceName]})]}),(0,k.jsx)("small",{className:N.endpointName,children:i?i.operationName:T}),(0,k.jsxs)("small",{className:N.endpointName,children:[" | ",D]})]}),w&&(()=>{const e=w(u);return e?(0,k.jsx)("a",{href:e.href,target:"_blank",style:{marginRight:"5px"},rel:"noopener noreferrer",onClick:e.onClick?t=>{t.ctrlKey||t.metaKey||t.shiftKey||!e.onClick||(t.preventDefault(),e.onClick(t))}:void 0,children:e.content}):null})(),u.references&&u.references.length>1&&(0,k.jsx)(kt,{references:u.references,tooltipText:"Contains multiple references",focusSpan:h,children:Mn||(Mn=(0,k.jsx)(Ye(),{}))}),u.subsidiarilyReferencedBy&&u.subsidiarilyReferencedBy.length>0&&(0,k.jsx)(kt,{references:u.subsidiarilyReferencedBy,tooltipText:"This span is referenced by "+(1===u.subsidiarilyReferencedBy.length?"another span":"multiple other spans"),focusSpan:h,children:Rn||(Rn=(0,k.jsx)(Qe(),{}))})]})}),(0,k.jsxs)(Pe.Cell,{className:f()(N.view,Vn,{[N.viewExpanded]:a,[N.viewExpandedAndMatchingFilter]:s&&a}),"data-test-id":"span-view",style:{cursor:"pointer"},width:1-n,onClick:this._detailToggle,children:[(0,k.jsx)(fe,{numTicks:o}),(0,k.jsx)(Dn,{rpc:i,viewStart:S,viewEnd:E,theme:x,getViewedBounds:d,color:t,shortLabel:D,longLabel:O,traceStartTime:p,span:u,labelClassName:`spanBarLabel ${M}`,className:Pn})]})]})}}zn(An,"displayName","UnthemedSpanBarRow"),zn(An,"defaultProps",{className:"",rpc:null});const Gn=L(An),Wn=M((()=>({TextList:m`
      max-height: 450px;
      overflow: auto;
    `,List:m`
      width: 100%;
      list-style: none;
      padding: 0;
      margin: 0;
    `,item:m`
      padding: 0.25rem 0.5rem;
      vertical-align: top;
      &:nth-child(2n) {
        background: #f5f5f5;
      }
    `})));function Un(e){const{data:t}=e,n=Wn();return(0,k.jsx)("div",{className:f()(n.TextList),"data-test-id":"TextList",children:(0,k.jsx)("ul",{className:n.List,children:t.map(((e,t)=>(0,k.jsx)("li",{className:n.item,children:e},`${t}`)))})})}const Kn=M((e=>({header:m`
      cursor: pointer;
      overflow: hidden;
      padding: 0.25em 0.1em;
      text-overflow: ellipsis;
      white-space: nowrap;
      &:hover {
        background: ${R(e,"#e8e8e8")};
      }
    `})));function qn({data:e}){return(0,k.jsx)(Un,{data:e})}function Zn(e){const{className:t,data:n,headerClassName:r,interactive:a,isOpen:s,label:o,onToggle:i,TextComponent:l=qn}=e,c=!Array.isArray(n)||!n.length,d=bn(O()),p=f()(Ce,{[d.emptyIcon]:c});let u=null,h=null;a&&(u=s?(0,k.jsx)(St(),{className:p}):(0,k.jsx)(tn(),{className:p}),h={"aria-checked":s,onClick:c?null:i,role:"switch"});const m=Kn(O());return(0,k.jsxs)("div",{className:t||"",children:[(0,k.jsxs)("div",Object.assign({className:f()(m.header,r)},h,{"data-test-id":"AccordianText--header",children:[u,(0,k.jsx)("strong",{children:o})," (",n.length,")"]})),s&&(0,k.jsx)(l,{data:n})]})}Zn.defaultProps={className:null,highContrast:!1,interactive:!0,onToggle:null};const Xn=M((e=>({LabeledList:m`
      label: LabeledList;
      list-style: none;
      margin: 0;
      padding: 0;
    `,LabeledListItem:m`
      label: LabeledListItem;
      display: inline-block;
    `,LabeledListLabel:m`
      label: LabeledListLabel;
      color: ${D(e)?"#999":"#666"};
      margin-right: 0.25rem;
    `})));function Yn(e){var t;const{className:n,dividerClassName:r,items:a}=e,s=Xn(O());return(0,k.jsx)("ul",{className:f()(s.LabeledList,n),children:a.map((({key:e,label:n,value:o},i)=>{const l=i<a.length-1&&(0,k.jsx)("li",{className:s.LabeledListItem,children:t||(t=(0,k.jsx)(ut,{className:r,type:"vertical"}))},`${e}--divider`);return[(0,k.jsxs)("li",{className:s.LabeledListItem,children:[(0,k.jsx)("span",{className:s.LabeledListLabel,children:n}),(0,k.jsx)("strong",{children:o})]},e),l]}))})}var Jn,Qn;const er=M((()=>({ReferencesList:m`
      background: #fff;
      border: 1px solid #ddd;
      margin-bottom: 0.7em;
      max-height: 450px;
      overflow: auto;
    `,list:m`
      width: 100%;
      list-style: none;
      padding: 0;
      margin: 0;
      background: #fff;
    `,itemContent:m`
      padding: 0.25rem 0.5rem;
      display: flex;
      width: 100%;
      justify-content: space-between;
    `,item:m`
      &:nth-child(2n) {
        background: #f5f5f5;
      }
    `,debugInfo:m`
      letter-spacing: 0.25px;
      margin: 0.5em 0 0;
    `,debugLabel:m`
      margin: 0 5px 0 5px;
      &::before {
        color: #bbb;
        content: attr(data-label);
      }
    `})));function tr(e){const{data:t,focusSpan:n}=e,r=er();return(0,k.jsx)("div",{className:f()(r.ReferencesList),children:(0,k.jsx)("ul",{className:r.list,children:t.map((e=>(0,k.jsx)("li",{className:r.item,children:(0,k.jsx)(wt,{reference:e,focusSpan:n,children:(0,k.jsxs)("span",{className:r.itemContent,children:[e.span?(0,k.jsxs)("span",{children:[(0,k.jsx)("span",{className:"span-svc-name",children:e.span.process.serviceName}),(0,k.jsx)("small",{className:"endpoint-name",children:e.span.operationName})]}):Jn||(Jn=(0,k.jsx)("span",{className:"span-svc-name",children:"< span in another trace >"})),(0,k.jsxs)("small",{className:r.debugInfo,children:[(0,k.jsx)("span",{className:r.debugLabel,"data-label":"Reference Type:",children:e.refType}),(0,k.jsx)("span",{className:r.debugLabel,"data-label":"SpanID:",children:e.spanID})]})]})})},`${e.spanID}`)))})})}class nr extends r.PureComponent{render(){const{data:e,interactive:t,isOpen:n,onToggle:r,focusSpan:a}=this.props,s=!Array.isArray(e)||!e.length,o=Ce;let i=null,l=null;return t&&(i=n?(0,k.jsx)(St(),{className:o}):(0,k.jsx)(tn(),{className:o}),l={"aria-checked":n,onClick:s?null:r,role:"switch"}),(0,k.jsxs)("div",{children:[(0,k.jsxs)("div",Object.assign({},l,{children:[i,Qn||(Qn=(0,k.jsx)("strong",{children:(0,k.jsx)("span",{children:"References"})}))," ","(",e.length,")"]})),n&&(0,k.jsx)(tr,{data:e,focusSpan:a})]})}}var rr,ar,sr;sr={highContrast:!1,interactive:!0,onToggle:null},(ar="defaultProps")in(rr=nr)?Object.defineProperty(rr,ar,{value:sr,enumerable:!0,configurable:!0,writable:!0}):rr[ar]=sr;const or=M((e=>({divider:m`
      label: divider;
      background: ${R(e,"#ddd")};
    `,dividerVertical:m`
      label: dividerVertical;
      display: block;
      height: 1px;
      width: 100%;
      margin: 24px 0;
      clear: both;
      vertical-align: middle;
      position: relative;
      top: -0.06em;
    `,debugInfo:m`
      label: debugInfo;
      display: block;
      letter-spacing: 0.25px;
      margin: 0.5em 0 -0.75em;
      text-align: right;
    `,debugLabel:m`
      label: debugLabel;
      &::before {
        color: ${R(e,"#bbb")};
        content: attr(data-label);
      }
    `,debugValue:m`
      label: debugValue;
      background-color: inherit;
      border: none;
      color: ${R(e,"#888")};
      cursor: pointer;
      &:hover {
        color: ${R(e,"#333")};
      }
    `,AccordianWarnings:m`
      label: AccordianWarnings;
      background: ${R(e,"#fafafa")};
      border: 1px solid ${R(e,"#e4e4e4")};
      margin-bottom: 0.25rem;
    `,AccordianWarningsHeader:m`
      label: AccordianWarningsHeader;
      background: ${R(e,"#fff7e6")};
      padding: 0.25rem 0.5rem;
      &:hover {
        background: ${R(e,"#ffe7ba")};
      }
    `,AccordianWarningsHeaderOpen:m`
      label: AccordianWarningsHeaderOpen;
      border-bottom: 1px solid ${R(e,"#e8e8e8")};
    `,AccordianWarningsLabel:m`
      label: AccordianWarningsLabel;
      color: ${R(e,"#d36c08")};
    `,Textarea:m`
      word-break: break-all;
      white-space: pre;
    `})));function ir(e){const{detailState:t,linksGetter:n,logItemToggle:r,logsToggle:a,processToggle:s,span:o,tagsToggle:i,traceStartTime:l,warningsToggle:c,stackTracesToggle:d,referencesToggle:p,focusSpan:u,createSpanLink:h}=e,{isTagsOpen:m,isProcessOpen:g,logs:y,isWarningsOpen:v,isReferencesOpen:x,isStackTracesOpen:w}=t,{operationName:_,process:j,duration:T,relativeStartTime:I,spanID:D,logs:C,tags:S,warnings:E,references:N,stackTraces:L}=o,M=[{key:"svc",label:"Service:",value:j.serviceName},{key:"duration",label:"Duration:",value:le(T)},{key:"start",label:"Start Time:",value:le(I)}],R=`${window.location.origin}${window.location.pathname}?uiFind=${D}`,z=or(O()),P=null==h?void 0:h(o);return(0,k.jsxs)("div",{children:[(0,k.jsxs)("div",{className:f()(ke,je,ye),children:[(0,k.jsx)("h2",{className:f()(Te,xe),children:_}),(0,k.jsx)(Yn,{className:Ie,dividerClassName:z.divider,items:M})]}),P?(0,k.jsx)(b.DataLinkButton,{link:Object.assign({},P,{title:"Logs for this span"}),buttonProps:{icon:"gf-logs"}}):null,(0,k.jsx)(ut,{className:f()(z.divider,z.dividerVertical,ve)}),(0,k.jsxs)("div",{children:[(0,k.jsxs)("div",{children:[(0,k.jsx)(vn,{data:S,label:"Tags",linksGetter:n,isOpen:m,onToggle:()=>i(D)}),j.tags&&(0,k.jsx)(vn,{className:ye,data:j.tags,label:"Process",linksGetter:n,isOpen:g,onToggle:()=>s(D)})]}),C&&C.length>0&&(0,k.jsx)(jn,{linksGetter:n,logs:C,isOpen:y.isOpen,openedItems:y.openedItems,onToggle:()=>a(D),onItemToggle:e=>r(D,e),timestamp:l}),E&&E.length>0&&(0,k.jsx)(Zn,{className:z.AccordianWarnings,headerClassName:z.AccordianWarningsHeader,label:(0,k.jsx)("span",{className:z.AccordianWarningsLabel,children:"Warnings"}),data:E,isOpen:v,onToggle:()=>c(D)}),L&&L.length&&(0,k.jsx)(Zn,{label:"Stack trace",data:L,isOpen:w,TextComponent:e=>{var t;let n;var r;(null===(t=e.data)||void 0===t?void 0:t.length)>1?n=e.data.map(((e,t)=>`StackTrace ${t+1}:\n${e}`)).join("\n"):n=null===(r=e.data)||void 0===r?void 0:r[0];return(0,k.jsx)(b.TextArea,{className:z.Textarea,style:{cursor:"unset"},readOnly:!0,cols:10,rows:10,value:n})},onToggle:()=>d(D)}),N&&N.length>0&&(N.length>1||"CHILD_OF"!==N[0].refType)&&(0,k.jsx)(nr,{data:N,isOpen:x,onToggle:()=>p(D),focusSpan:u}),(0,k.jsxs)("small",{className:z.debugInfo,children:[(0,k.jsx)("span",{className:z.debugLabel,"data-label":"SpanID:"})," ",D,(0,k.jsx)(cn,{copyText:R,icon:"link",placement:"topRight",tooltipTitle:"Copy deep link to this span"})]})]})]})}function lr(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const cr=M((e=>({expandedAccent:m`
      cursor: pointer;
      height: 100%;
      overflow: hidden;
      position: absolute;
      width: 100%;
      &::before {
        border-left: 4px solid;
        pointer-events: none;
        width: 1000px;
      }
      &::after {
        border-right: 1000px solid;
        border-color: inherit;
        cursor: pointer;
        opacity: 0.2;
      }

      /* border-color inherit must come AFTER other border declarations for accent */
      &::before,
      &::after {
        border-color: inherit;
        content: ' ';
        position: absolute;
        height: 100%;
      }

      &:hover::after {
        opacity: 0.35;
      }
    `,infoWrapper:m`
      label: infoWrapper;
      border: 1px solid ${R(e,"#d3d3d3")};
      border-top: 3px solid;
      padding: 0.75rem;
    `})));class dr extends r.PureComponent{constructor(...e){super(...e),lr(this,"_detailToggle",(()=>{this.props.onDetailToggled(this.props.span.spanID)})),lr(this,"_linksGetter",((e,t)=>{const{linksGetter:n,span:r}=this.props;return n(r,e,t)}))}render(){const{color:e,columnDivision:t,detailState:n,logItemToggle:r,logsToggle:a,processToggle:s,referencesToggle:o,warningsToggle:i,stackTracesToggle:l,span:c,tagsToggle:d,traceStartTime:p,focusSpan:u,hoverIndentGuideIds:h,addHoverIndentGuideId:m,removeHoverIndentGuideId:g,theme:f,createSpanLink:b}=this.props,y=cr(f);return(0,k.jsxs)(Pe,{children:[(0,k.jsxs)(Pe.Cell,{width:t,style:{overflow:"hidden"},children:[(0,k.jsx)(Mt,{span:c,showChildrenIcon:!1,hoverIndentGuideIds:h,addHoverIndentGuideId:m,removeHoverIndentGuideId:g}),(0,k.jsx)("span",{children:(0,k.jsx)("span",{className:y.expandedAccent,"aria-checked":"true",onClick:this._detailToggle,role:"switch",style:{borderColor:e},"data-test-id":"detail-row-expanded-accent"})})]}),(0,k.jsx)(Pe.Cell,{width:1-t,children:(0,k.jsx)("div",{className:y.infoWrapper,style:{borderTopColor:e},children:(0,k.jsx)(ir,{detailState:n,linksGetter:this._linksGetter,logItemToggle:r,logsToggle:a,processToggle:s,referencesToggle:o,warningsToggle:i,stackTracesToggle:l,span:c,tagsToggle:d,traceStartTime:p,focusSpan:u,createSpanLink:b})})})]})}}const pr=L(dr);function ur(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function hr(e){if(7!==e.length)return[0,0,0];const t=e.slice(1,3),n=e.slice(3,5),r=e.slice(5);return[parseInt(t,16),parseInt(n,16),parseInt(r,16)]}class mr{constructor(e){ur(this,"colorsHex",void 0),ur(this,"colorsRgb",void 0),ur(this,"cache",void 0),ur(this,"currentIdx",void 0),this.colorsHex=e,this.colorsRgb=e.map(hr),this.cache=new Map,this.currentIdx=0}_getColorIndex(e){let t=this.cache.get(e);return null==t&&(t=this.currentIdx,this.cache.set(e,this.currentIdx),this.currentIdx=++this.currentIdx%this.colorsHex.length),t}getColorByKey(e){const t=this._getColorIndex(e);return this.colorsHex[t]}getRgbColorByKey(e){const t=this._getColorIndex(e);return this.colorsRgb[t]}clear(){this.cache.clear(),this.currentIdx=0}}const gr=(0,x.Z)((e=>new mr(e)));function fr(e,t){return gr(t.servicesColorPalette).getColorByKey(e)}function br(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const yr=M((()=>({rowsWrapper:m`
      width: 100%;
    `,row:m`
      width: 100%;
    `}))),vr=28,xr=161,wr=197;const _r=(0,x.Z)((function(e,t,n){return e?function(e,t,n){if(!e)return[];let r=null;const a=[];for(let s=0;s<e.length;s++){const o=e[s],{spanID:i,depth:l}=o;let c=!1;null!=r&&(l>=r?c=!0:r=null),c||(t.has(i)&&(r=l+1),a.push({span:o,isDetail:!1,spanIndex:s}),n.has(i)&&a.push({span:o,isDetail:!0,spanIndex:s}))}return a}(e.spans,t,n):[]})),kr=(0,x.Z)((function(e){const{min:t,max:n,viewStart:r,viewEnd:a}=e,s=n-t,o=t+r*s,i=n-(1-a)*s-o;return(e,t)=>({start:(e-o)/i,end:(t-o)/i})}),V.isEqual),jr=(0,x.Z)((function(e){const[t,n]=e;return{left:t>0,right:n<1}}),V.isEqual);class Tr extends r.Component{constructor(e){super(e),br(this,"listView",void 0),br(this,"getViewRange",(()=>this.props.currentViewRangeTime)),br(this,"getSearchedSpanIDs",(()=>this.props.findMatchesIDs)),br(this,"getCollapsedChildren",(()=>this.props.childrenHiddenIDs)),br(this,"mapRowIndexToSpanIndex",(e=>this.getRowStates()[e].spanIndex)),br(this,"mapSpanIndexToRowIndex",(e=>{const t=this.getRowStates().length;for(let n=0;n<t;n++){const{spanIndex:t}=this.getRowStates()[n];if(t===e)return n}throw new Error(`unable to find row for span index: ${e}`)})),br(this,"setListView",(e=>{const t=this.listView!==e;this.listView=e,e&&t&&this.props.registerAccessors(this.getAccessors())})),br(this,"getKeyFromIndex",(e=>{const{isDetail:t,span:n}=this.getRowStates()[e];return`${n.traceID}--${n.spanID}--${t?"detail":"bar"}`})),br(this,"getIndexFromKey",(e=>{const t=e.split("--"),n=t[0],r=t[1],a="detail"===t[2],s=this.getRowStates().length;for(let e=0;e<s;e++){const{span:t,isDetail:s}=this.getRowStates()[e];if(t.spanID===r&&t.traceID===n&&s===a)return e}return-1})),br(this,"getRowHeight",(e=>{const{span:t,isDetail:n}=this.getRowStates()[e];return n?Array.isArray(t.logs)&&t.logs.length?wr:xr:vr})),br(this,"renderRow",((e,t,n,r)=>{const{isDetail:a,span:s,spanIndex:o}=this.getRowStates()[n];return a?this.renderSpanDetailRow(s,e,t,r):this.renderSpanBarRow(s,o,e,t,r)}));const{setTrace:t,trace:n,uiFind:r}=e;t(n,r)}shouldComponentUpdate(e){const t=Object.keys(e);for(let n=0;n<t.length;n+=1)if(e[t[n]]!==this.props[t[n]]){if("shouldScrollToFirstUiFindMatch"!==t[n])return!0;if(e[t[n]])return!0}return!1}componentDidUpdate(e){const{registerAccessors:t,trace:n}=e,{shouldScrollToFirstUiFindMatch:r,clearShouldScrollToFirstUiFindMatch:a,scrollToFirstVisibleSpan:s,registerAccessors:o,setTrace:i,trace:l,uiFind:c}=this.props;n!==l&&i(l,c),this.listView&&t!==o&&o(this.getAccessors()),r&&(s(),a())}getRowStates(){const{childrenHiddenIDs:e,detailStates:t,trace:n}=this.props;return _r(n,e,t)}getClipping(){const{currentViewRangeTime:e}=this.props;return jr(e)}getViewedBounds(){const{currentViewRangeTime:e,trace:t}=this.props,[n,r]=e;return kr({min:t.startTime,max:t.endTime,viewStart:n,viewEnd:r})}getAccessors(){const e=this.listView;if(!e)throw new Error("ListView unavailable");return{getViewRange:this.getViewRange,getSearchedSpanIDs:this.getSearchedSpanIDs,getCollapsedChildren:this.getCollapsedChildren,getViewHeight:e.getViewHeight,getBottomRowIndexVisible:e.getBottomVisibleIndex,getTopRowIndexVisible:e.getTopVisibleIndex,getRowPosition:e.getRowPosition,mapRowIndexToSpanIndex:this.mapRowIndexToSpanIndex,mapSpanIndexToRowIndex:this.mapSpanIndexToRowIndex}}renderSpanBarRow(e,t,n,r,a){const{spanID:s}=e,{serviceName:o}=e.process,{childrenHiddenIDs:i,childrenToggle:l,detailStates:c,detailToggle:d,findMatchesIDs:p,spanNameColumnWidth:u,trace:h,focusSpan:m,hoverIndentGuideIds:g,addHoverIndentGuideId:f,removeHoverIndentGuideId:b,theme:y,createSpanLink:v}=this.props;if(!h)return null;const x=fr(o,y),w=i.has(s),_=c.has(s),j=!!p&&p.has(s),T=me(e)||w&&function(e,t){const{depth:n}=e[t];let r=t+1;for(;r<e.length&&e[r].depth>n;r++)if(me(e[r]))return!0;return!1}(h.spans,t);let I=null;if(w){const e=function(e){if(e.length<=1||!de(e[0]))return!1;const t=e[0].depth+1;let n=1;for(;n<e.length&&e[n].depth===t;){if(pe(e[n]))return e[n];n++}return null}(h.spans.slice(t));if(e){const t=this.getViewedBounds()(e.startTime,e.startTime+e.duration);I={color:fr(e.process.serviceName,y),operationName:e.operationName,serviceName:e.process.serviceName,viewEnd:t.end,viewStart:t.start}}}const D=e.tags.find((e=>"peer.service"===e.key));let C=null;!e.hasChildren&&D&&(e=>e.tags.some((({key:e,value:t})=>"span.kind"===e&&"client"===t)))(e)&&(C={serviceName:D.value,color:fr(D.value,y)});const S=yr();return(0,k.jsx)("div",Object.assign({className:S.row,style:r},a,{children:(0,k.jsx)(Gn,{clippingLeft:this.getClipping().left,clippingRight:this.getClipping().right,color:x,columnDivision:u,isChildrenExpanded:!w,isDetailExpanded:_,isMatchingFilter:j,numTicks:5,onDetailToggled:d,onChildrenToggled:l,rpc:I,noInstrumentedServer:C,showErrorIcon:T,getViewedBounds:this.getViewedBounds(),traceStartTime:h.startTime,span:e,focusSpan:m,hoverIndentGuideIds:g,addHoverIndentGuideId:f,removeHoverIndentGuideId:b,createSpanLink:v})}),n)}renderSpanDetailRow(e,t,n,r){const{spanID:a}=e,{serviceName:s}=e.process,{detailLogItemToggle:o,detailLogsToggle:i,detailProcessToggle:l,detailReferencesToggle:c,detailWarningsToggle:d,detailStackTracesToggle:p,detailStates:u,detailTagsToggle:h,detailToggle:m,spanNameColumnWidth:g,trace:f,focusSpan:b,hoverIndentGuideIds:y,addHoverIndentGuideId:v,removeHoverIndentGuideId:x,linksGetter:w,theme:_,createSpanLink:j}=this.props,T=u.get(a);if(!f||!T)return null;const I=fr(s,_),D=yr();return(0,k.jsx)("div",Object.assign({className:D.row,style:Object.assign({},n,{zIndex:1})},r,{children:(0,k.jsx)(pr,{color:I,columnDivision:g,onDetailToggled:m,detailState:T,linksGetter:w,logItemToggle:o,logsToggle:i,processToggle:l,referencesToggle:c,warningsToggle:d,stackTracesToggle:p,span:e,tagsToggle:h,traceStartTime:f.startTime,focusSpan:b,hoverIndentGuideIds:y,addHoverIndentGuideId:v,removeHoverIndentGuideId:x,createSpanLink:j})}),t)}render(){const e=yr(),{scrollElement:t}=this.props;return(0,k.jsx)("div",{children:(0,k.jsx)(We,{ref:this.setListView,dataLength:this.getRowStates().length,itemHeightGetter:this.getRowHeight,itemRenderer:this.renderRow,viewBuffer:50,viewBufferMin:50,itemsWrapperClassName:e.rowsWrapper,getKeyFromIndex:this.getKeyFromIndex,getIndexFromKey:this.getIndexFromKey,windowScroller:!1,scrollElement:t})})}}const Ir=L(Tr);var Dr=n("./.yarn/cache/combokeys-npm-3.0.1-45601d2e33-37ad8d0257.zip/node_modules/combokeys/Combokeys/index.js"),Cr=n.n(Dr);const Sr={scrollPageDown:{binding:"s",label:"Scroll down"},scrollPageUp:{binding:"w",label:"Scroll up"},scrollToNextVisibleSpan:{binding:"f",label:"Scroll to the next visible span"},scrollToPrevVisibleSpan:{binding:"b",label:"Scroll to the previous visible span"},panLeft:{binding:["a","left"],label:"Pan left"},panLeftFast:{binding:["shift+a","shift+left"],label:"Pan left — Large"},panRight:{binding:["d","right"],label:"Pan right"},panRightFast:{binding:["shift+d","shift+right"],label:"Pan right — Large"},zoomIn:{binding:"up",label:"Zoom in"},zoomInFast:{binding:"shift+up",label:"Zoom in — Large"},zoomOut:{binding:"down",label:"Zoom out"},zoomOutFast:{binding:"shift+down",label:"Zoom out — Large"},collapseAll:{binding:"]",label:"Collapse All"},expandAll:{binding:"[",label:"Expand All"},collapseOne:{binding:"p",label:"Collapse One Level"},expandOne:{binding:"o",label:"Expand One Level"},searchSpans:{binding:"ctrl+b",label:"Search Spans"},clearSearch:{binding:"escape",label:"Clear Search"}};let Er;function Nr(){if(Er)return Er;const e=new(Cr())(document.body);return Er=e,e}const Lr=["setSpanNameColumnWidth","updateNextViewRangeTime","updateViewRangeTime","viewRange","createLinkToExternalSpan","traceTimeline","theme"];function Or(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const Mr=M((e=>({TraceTimelineViewer:m`
      label: TraceTimelineViewer;
      border-bottom: 1px solid ${R(e,"#bbb")};

      & .json-markup {
        line-height: 17px;
        font-size: 13px;
        font-family: monospace;
        white-space: pre-wrap;
      }

      & .json-markup-key {
        font-weight: bold;
      }

      & .json-markup-bool {
        color: ${R(e,"firebrick")};
      }

      & .json-markup-string {
        color: ${R(e,"teal")};
      }

      & .json-markup-null {
        color: ${R(e,"teal")};
      }

      & .json-markup-number {
        color: ${R(e,"blue","black")};
      }
    `})));class Rr extends r.PureComponent{constructor(e){super(e),Or(this,"collapseAll",(()=>{this.props.collapseAll(this.props.trace.spans)})),Or(this,"collapseOne",(()=>{this.props.collapseOne(this.props.trace.spans)})),Or(this,"expandAll",(()=>{this.props.expandAll()})),Or(this,"expandOne",(()=>{this.props.expandOne(this.props.trace.spans)})),this.state={height:0}}componentDidMount(){!function(e){const t=Nr();Object.keys(e).forEach((n=>{const r=e[n];r&&t.bind(Sr[n].binding,r)}))}({collapseAll:this.collapseAll,expandAll:this.expandAll,collapseOne:this.collapseOne,expandOne:this.expandOne})}render(){const e=this.props,{setSpanNameColumnWidth:t,updateNextViewRangeTime:n,updateViewRangeTime:r,viewRange:a,createLinkToExternalSpan:s,traceTimeline:o,theme:i}=e,l=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,Lr),{trace:c}=l,d=Mr(i);return(0,k.jsx)(vt.Provider,{value:s,children:(0,k.jsxs)("div",{className:d.TraceTimelineViewer,ref:e=>e&&this.setState({height:e.getBoundingClientRect().height}),children:[(0,k.jsx)(Ve,{duration:c.duration,nameColumnWidth:o.spanNameColumnWidth,numTicks:5,onCollapseAll:this.collapseAll,onCollapseOne:this.collapseOne,onColummWidthChange:t,onExpandAll:this.expandAll,onExpandOne:this.expandOne,viewRangeTime:a.time,updateNextViewRangeTime:n,updateViewRangeTime:r,columnResizeHandleHeight:this.state.height}),(0,k.jsx)(Ir,Object.assign({},l,o,{setSpanNameColumnWidth:t,currentViewRangeTime:a.time.current}))]})})}}const zr=L(Rr);var Pr=n("./.yarn/__virtual__/react-icons-virtual-f314220a93/0/cache/react-icons-npm-2.2.7-c2e0e4d90b-74e692fdd3.zip/node_modules/react-icons/lib/md/keyboard-arrow-right.js"),Hr=n.n(Pr);function $r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const Vr=M((e=>({CanvasSpanGraph:m`
      label: CanvasSpanGraph;
      background: ${R(e,"#fafafa")};
      height: 60px;
      position: absolute;
      width: 100%;
    `})));class Fr extends r.PureComponent{constructor(e){super(e),$r(this,"_canvasElm",void 0),$r(this,"getColor",(e=>function(e,t){return gr(t.servicesColorPalette).getRgbColorByKey(e)}(e,this.props.theme))),$r(this,"_setCanvasRef",(e=>{this._canvasElm=e})),this._canvasElm=void 0}componentDidMount(){this._draw()}componentDidUpdate(){this._draw()}_draw(){if(this._canvasElm){const{valueWidth:e,items:t}=this.props;!function(e,t,n,r,a){const s=new Map,o=t.length<60?60:Math.min(t.length,200),i=2*window.innerWidth;e.width=i,e.height=o;const l=Math.min(6,Math.max(2,o/t.length)),c=o/t.length,d=e.getContext("2d",{alpha:!1});d.fillStyle=a,d.fillRect(0,0,i,o);for(let e=0;e<t.length;e++){const{valueWidth:a,valueOffset:o,serviceName:p}=t[e],u=o/n*i;let h=a/n*i;h<10&&(h=10);let m=s.get(p);m||(m=`rgba(${r(p).concat(.8).join()})`,s.set(p,m)),d.fillStyle=m,d.fillRect(u,e*c,h,l)}}(this._canvasElm,t,e,this.getColor,R(this.props.theme,"#fff"))}}render(){return(0,k.jsx)("canvas",{className:Vr(this.props.theme).CanvasSpanGraph,ref:this._setCanvasRef})}}const Br=L(Fr),Ar=M((()=>({TickLabels:m`
      label: TickLabels;
      height: 1rem;
      position: relative;
    `,TickLabelsLabel:m`
      label: TickLabelsLabel;
      color: #717171;
      font-size: 0.7rem;
      position: absolute;
      user-select: none;
    `})));function Gr(e){const{numTicks:t,duration:n}=e,r=Ar(),a=[];for(let e=0;e<t+1;e++){const s=e/t,o=1===s?{right:"0%"}:{left:100*s+"%"};a.push((0,k.jsx)("div",{className:r.TickLabelsLabel,style:o,"data-test":"tick",children:le(n*s)},s))}return(0,k.jsx)("div",{className:r.TickLabels,children:a})}const Wr=M((()=>({GraphTick:m`
      label: GraphTick;
      stroke: #aaa;
      stroke-width: 1px;
    `})));function Ur(e){const{numTicks:t}=e,n=[];for(let e=1;e<t;e++){const r=e/t*100+"%";n.push((0,k.jsx)("line",{className:Wr().GraphTick,x1:r,y1:"0%",x2:r,y2:"100%"},e/t))}return(0,k.jsx)("g",{"data-test":"ticks","aria-hidden":"true",children:n})}const Kr=M((()=>({ScrubberHandleExpansion:f()(m`
        label: ScrubberHandleExpansion;
        cursor: col-resize;
        fill-opacity: 0;
        fill: #44f;
      `,"scrubber-handle-expansion"),ScrubberHandle:f()(m`
        label: ScrubberHandle;
        cursor: col-resize;
        fill: #555;
      `,"scrubber-handle"),ScrubberLine:f()(m`
        label: ScrubberLine;
        pointer-events: none;
        stroke: #555;
      `,"scrubber-line"),ScrubberDragging:m`
      label: ScrubberDragging;
      & .scrubber-handle-expansion {
        fill-opacity: 1;
      }
      & .scrubber-handle {
        fill: #44f;
      }
      & > .scrubber-line {
        stroke: #44f;
      }
    `,ScrubberHandles:m`
      label: ScrubberHandles;
      &:hover > .scrubber-handle-expansion {
        fill-opacity: 1;
      }
      &:hover > .scrubber-handle {
        fill: #44f;
      }
      &:hover + .scrubber.line {
        stroke: #44f;
      }
    `})));function qr({isDragging:e,onMouseDown:t,onMouseEnter:n,onMouseLeave:r,position:a}){const s=100*a+"%",o=Kr(),i=f()({[o.ScrubberDragging]:e});return(0,k.jsxs)("g",{className:i,children:[(0,k.jsxs)("g",{className:o.ScrubberHandles,onMouseDown:t,onMouseEnter:n,onMouseLeave:r,children:[(0,k.jsx)("rect",{x:s,className:o.ScrubberHandleExpansion,style:{transform:"translate(-4.5px)"},width:"9",height:"20"}),(0,k.jsx)("rect",{x:s,className:o.ScrubberHandle,style:{transform:"translate(-1.5px)"},width:"3",height:"20"})]}),(0,k.jsx)("line",{className:o.ScrubberLine,y2:"100%",x1:s,x2:s})]})}function Zr(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}const Xr=M((e=>{const t="JaegerUiComponents__ViewingLayerResetZoomHoverClassName",n=m`
    label: ViewingLayerResetZoom;
    display: none;
    position: absolute;
    right: 1%;
    top: 10%;
    z-index: 1;
  `;return{ViewingLayer:m`
      label: ViewingLayer;
      cursor: vertical-text;
      position: relative;
      z-index: 1;
      &:hover > .${t} {
        display: unset;
      }
    `,ViewingLayerGraph:m`
      label: ViewingLayerGraph;
      border: 1px solid ${R(e,"#999")};
      /* need !important here to overcome something from semantic UI */
      overflow: visible !important;
      position: relative;
      transform-origin: 0 0;
      width: 100%;
    `,ViewingLayerInactive:m`
      label: ViewingLayerInactive;
      fill: ${R(e,"rgba(214, 214, 214, 0.5)")};
    `,ViewingLayerCursorGuide:m`
      label: ViewingLayerCursorGuide;
      stroke: ${R(e,"#f44")};
      stroke-width: 1;
    `,ViewingLayerDraggedShift:m`
      label: ViewingLayerDraggedShift;
      fill-opacity: 0.2;
    `,ViewingLayerDrag:m`
      label: ViewingLayerDrag;
      fill: ${R(e,"#44f")};
    `,ViewingLayerFullOverlay:m`
      label: ViewingLayerFullOverlay;
      bottom: 0;
      cursor: col-resize;
      left: 0;
      position: fixed;
      right: 0;
      top: 0;
      user-select: none;
    `,ViewingLayerResetZoom:n,ViewingLayerResetZoomHoverClassName:t}})),Yr="SHIFT_END",Jr="SHIFT_START",Qr="REFRAME";class ea extends r.PureComponent{constructor(e){super(e),Zr(this,"state",void 0),Zr(this,"_root",void 0),Zr(this,"_draggerReframe",void 0),Zr(this,"_draggerStart",void 0),Zr(this,"_draggerEnd",void 0),Zr(this,"_setRoot",(e=>{this._root=e})),Zr(this,"_getDraggingBounds",(e=>{if(!this._root)throw new Error("invalid state");const{left:t,width:n}=this._root.getBoundingClientRect(),[r,a]=this.props.viewRange.time.current;let s=1,o=0;return e===Jr?s=a:e===Yr&&(o=r),{clientXLeft:t,maxValue:s,minValue:o,width:n}})),Zr(this,"_handleReframeMouseMove",(({value:e})=>{this.props.updateNextViewRangeTime({cursor:e})})),Zr(this,"_handleReframeMouseLeave",(()=>{this.props.updateNextViewRangeTime({cursor:null})})),Zr(this,"_handleReframeDragUpdate",(({value:e})=>{const t=e,{time:n}=this.props.viewRange,r={reframe:{anchor:n.reframe?n.reframe.anchor:t,shift:t}};this.props.updateNextViewRangeTime(r)})),Zr(this,"_handleReframeDragEnd",(({manager:e,value:t})=>{const{time:n}=this.props.viewRange,r=n.reframe?n.reframe.anchor:t,[a,s]=t<r?[t,r]:[r,t];e.resetBounds(),this.props.updateViewRangeTime(a,s,"minimap")})),Zr(this,"_handleScrubberEnterLeave",(({type:e})=>{const t=e===$.MouseEnter;this.setState({preventCursorLine:t})})),Zr(this,"_handleScrubberDragUpdate",(({event:e,tag:t,type:n,value:r})=>{n===$.DragStart&&e.stopPropagation(),t===Jr?this.props.updateNextViewRangeTime({shiftStart:r}):t===Yr&&this.props.updateNextViewRangeTime({shiftEnd:r})})),Zr(this,"_handleScrubberDragEnd",(({manager:e,tag:t,value:n})=>{const[r,a]=this.props.viewRange.time.current;let s;if(t===Jr)s=[n,a];else{if(t!==Yr)throw new Error("bad state");s=[r,n]}e.resetBounds(),this.setState({preventCursorLine:!1}),this.props.updateViewRangeTime(s[0],s[1],"minimap")})),Zr(this,"_resetTimeZoomClickHandler",(()=>{this.props.updateViewRangeTime(0,1)})),this._draggerReframe=new A({getBounds:this._getDraggingBounds,onDragEnd:this._handleReframeDragEnd,onDragMove:this._handleReframeDragUpdate,onDragStart:this._handleReframeDragUpdate,onMouseMove:this._handleReframeMouseMove,onMouseLeave:this._handleReframeMouseLeave,tag:Qr}),this._draggerStart=new A({getBounds:this._getDraggingBounds,onDragEnd:this._handleScrubberDragEnd,onDragMove:this._handleScrubberDragUpdate,onDragStart:this._handleScrubberDragUpdate,onMouseEnter:this._handleScrubberEnterLeave,onMouseLeave:this._handleScrubberEnterLeave,tag:Jr}),this._draggerEnd=new A({getBounds:this._getDraggingBounds,onDragEnd:this._handleScrubberDragEnd,onDragMove:this._handleScrubberDragUpdate,onDragStart:this._handleScrubberDragUpdate,onMouseEnter:this._handleScrubberEnterLeave,onMouseLeave:this._handleScrubberEnterLeave,tag:Yr}),this._root=void 0,this.state={preventCursorLine:!1}}componentWillUnmount(){this._draggerReframe.dispose(),this._draggerEnd.dispose(),this._draggerStart.dispose()}_getMarkers(e,t){const n=Xr(this.props.theme),r=function(e,t){const[n,r]=e<t?[e,t]:[t,e];return{x:100*n+"%",width:100*(r-n)+"%",leadingX:100*t+"%"}}(e,t);return[(0,k.jsx)("rect",{className:f()(n.ViewingLayerDraggedShift,n.ViewingLayerDrag),x:r.x,y:"0",width:r.width,height:this.props.height-2},"fill"),(0,k.jsx)("rect",{className:f()(n.ViewingLayerDrag),x:r.leadingX,y:"0",width:"1",height:this.props.height-2},"edge")]}render(){const{height:e,viewRange:t,numTicks:n,theme:r}=this.props,{preventCursorLine:a}=this.state,{current:s,cursor:o,shiftStart:i,shiftEnd:l,reframe:c}=t.time,d=null!=i||null!=l||null!=c,[p,u]=s;let h=0;p&&(h=100*p);let m,g=100;u&&(g=100-100*u),d||null==o||a||(m=100*o+"%");const b=Xr(r);return(0,k.jsxs)("div",{"aria-hidden":!0,className:b.ViewingLayer,style:{height:e},children:[(0!==p||1!==u)&&(0,k.jsx)(pt,{onClick:this._resetTimeZoomClickHandler,className:f()(b.ViewingLayerResetZoom,b.ViewingLayerResetZoomHoverClassName),htmlType:"button",children:"Reset Selection"}),(0,k.jsxs)("svg",{height:e,className:b.ViewingLayerGraph,ref:this._setRoot,onMouseDown:this._draggerReframe.handleMouseDown,onMouseLeave:this._draggerReframe.handleMouseLeave,onMouseMove:this._draggerReframe.handleMouseMove,children:[h>0&&(0,k.jsx)("rect",{x:0,y:0,height:"100%",width:`${h}%`,className:b.ViewingLayerInactive}),g>0&&(0,k.jsx)("rect",{x:100-g+"%",y:0,height:"100%",width:`${g}%`,className:b.ViewingLayerInactive}),(0,k.jsx)(Ur,{numTicks:n}),m&&(0,k.jsx)("line",{className:b.ViewingLayerCursorGuide,x1:m,y1:"0",x2:m,y2:e-2,strokeWidth:"1"}),null!=i&&this._getMarkers(p,i),null!=l&&this._getMarkers(u,l),(0,k.jsx)(qr,{isDragging:null!=i,onMouseDown:this._draggerStart.handleMouseDown,onMouseEnter:this._draggerStart.handleMouseEnter,onMouseLeave:this._draggerStart.handleMouseLeave,position:p||0}),(0,k.jsx)(qr,{isDragging:null!=l,position:u||1,onMouseDown:this._draggerEnd.handleMouseDown,onMouseEnter:this._draggerEnd.handleMouseEnter,onMouseLeave:this._draggerEnd.handleMouseLeave}),null!=c&&this._getMarkers(c.anchor,c.shift)]}),d&&(0,k.jsx)("div",{className:b.ViewingLayerFullOverlay})]})}}const ta=L(ea);var na;function ra(e){return{valueOffset:e.relativeStartTime,valueWidth:e.duration,serviceName:e.process.serviceName}}const aa=(0,x.Z)((function(e){return e.spans.map(ra)}));class sa extends r.PureComponent{render(){const{height:e,trace:t,viewRange:n,updateNextViewRangeTime:r,updateViewRangeTime:a}=this.props;if(!t)return na||(na=(0,k.jsx)("div",{}));const s=aa(t);return(0,k.jsxs)("div",{className:f()(_e,we),children:[(0,k.jsx)(Gr,{numTicks:4,duration:t.duration}),(0,k.jsxs)("div",{className:be,children:[(0,k.jsx)(Br,{valueWidth:t.duration,items:s}),(0,k.jsx)(ta,{viewRange:n,numTicks:4,height:e||60,updateViewRangeTime:a,updateNextViewRangeTime:r})]})]})}}!function(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n}(sa,"defaultProps",{height:60});var oa=n("./.yarn/__virtual__/react-icons-virtual-f314220a93/0/cache/react-icons-npm-2.2.7-c2e0e4d90b-74e692fdd3.zip/node_modules/react-icons/lib/io/android-locate.js"),ia=n.n(oa);function la(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}class ca extends r.PureComponent{constructor(...e){super(...e),la(this,"clearUiFind",(()=>{this.props.onChange("")}))}render(){const{allowClear:e,inputProps:t,value:n}=this.props,r=(0,k.jsxs)(k.Fragment,{children:[e&&n&&n.length&&(0,k.jsx)(it,{type:"close",onClick:this.clearUiFind}),t.suffix]});return(0,k.jsx)(ht,Object.assign({autosize:null,placeholder:"Find..."},t,{onChange:e=>this.props.onChange(e.target.value),suffix:r,value:n}))}}var da;la(ca,"defaultProps",{inputProps:{},trackFindFunction:void 0,value:void 0});const pa=M((()=>({TracePageSearchBar:m`
      label: TracePageSearchBar;
    `,TracePageSearchBarBar:m`
      label: TracePageSearchBarBar;
      max-width: 20rem;
      transition: max-width 0.5s;
      &:focus-within {
        max-width: 100%;
      }
    `,TracePageSearchBarCount:m`
      label: TracePageSearchBarCount;
      opacity: 0.6;
    `,TracePageSearchBarBtn:m`
      label: TracePageSearchBarBtn;
      border-left: none;
      transition: 0.2s;
    `,TracePageSearchBarBtnDisabled:m`
      label: TracePageSearchBarBtnDisabled;
      opacity: 0.5;
    `,TracePageSearchBarLocateBtn:m`
      label: TracePageSearchBarLocateBtn;
      padding: 1px 8px 4px;
    `}))),ua=(0,r.memo)((function(e){const{clearSearch:t,focusUiFindMatches:n,navigable:r,nextResult:a,prevResult:s,resultCount:o,textFilter:i,onSearchValueChange:l,searchValue:c,hideSearchButtons:d}=e,p=pa(),u=i?(0,k.jsx)("span",{className:p.TracePageSearchBarCount,children:o}):null,h=f()(p.TracePageSearchBarBtn,{[p.TracePageSearchBarBtnDisabled]:!i}),m={"data-test":"in-trace-search",className:f()(p.TracePageSearchBarBar,Te),name:"search",suffix:u};return(0,k.jsx)("div",{className:p.TracePageSearchBar,children:(0,k.jsxs)(mt,{className:Le,compact:!0,style:{display:"flex"},children:[(0,k.jsx)(ca,{onChange:l,value:c,inputProps:m}),!d&&(0,k.jsxs)(k.Fragment,{children:[r&&(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(pt,{className:f()(h,p.TracePageSearchBarLocateBtn),disabled:!i,htmlType:"button",onClick:n,children:da||(da=(0,k.jsx)(ia(),{}))}),(0,k.jsx)(pt,{className:h,disabled:!i,htmlType:"button",icon:"up",onClick:s}),(0,k.jsx)(pt,{className:h,disabled:!i,htmlType:"button",icon:"down",onClick:a})]}),(0,k.jsx)(pt,{className:h,disabled:!i,htmlType:"button",icon:"close",onClick:t})]})]})})})),ha=M((()=>({BreakableText:m`
      label: BreakableText;
      display: inline-block;
      white-space: pre;
    `}))),ma=/\W*\w+\W*/g;function ga(e){const{className:t,text:n,wordRegexp:r=ma}=e;if(!n)return"string"==typeof n?n:null;const a=[];r.exec("");let s=r.exec(n)||[n];for(;s;)a.push((0,k.jsx)("span",{className:t||ha().BreakableText,children:s[0]},`${n}-${a.length}`)),s=r.exec(n);return a}ga.defaultProps={wordRegexp:ma};const fa=["centered","className","small"];const ba=M((()=>{const e=h`
    /*
    rgb(0, 128, 128) == teal
    rgba(0, 128, 128, 0.3) == #bedfdf
    */
    from {
      color: #bedfdf;
    }
    to {
      color: teal;
    }
  `;return{LoadingIndicator:m`
      label: LoadingIndicator;
      animation: ${e} 1s infinite alternate;
      font-size: 36px;
      /* outline / stroke the loading indicator */
      text-shadow: -0.5px 0 rgba(0, 128, 128, 0.6), 0 0.5px rgba(0, 128, 128, 0.6), 0.5px 0 rgba(0, 128, 128, 0.6),
        0 -0.5px rgba(0, 128, 128, 0.6);
    `,LoadingIndicatorCentered:m`
      label: LoadingIndicatorCentered;
      display: block;
      margin-left: auto;
      margin-right: auto;
    `,LoadingIndicatorSmall:m`
      label: LoadingIndicatorSmall;
      font-size: 0.7em;
    `}}));function ya(e){const{centered:t,className:n,small:r}=e,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,fa),s=ba(),o=f()(s.LoadingIndicator,{[s.LoadingIndicatorCentered]:t,[s.LoadingIndicatorSmall]:r,className:n});return(0,k.jsx)(it,Object.assign({type:"loading",className:o},a))}ya.defaultProps={centered:!1,className:void 0,small:!1};const va="<trace-without-root-span>",xa="FETCH_ERROR",wa="FETCH_LOADING";var _a;const ka=M((e=>{var t,n,r,a;return{TraceName:m`
      label: TraceName;
      font-size: ${r=null===(t=e.components)||void 0===t||null===(n=t.TraceName)||void 0===n?void 0:n.fontSize,a="unset",r?"string"==typeof r?r:`${r}px`:a};
    `,TraceNameError:m`
      label: TraceNameError;
      color: #c00;
    `}}));function ja(e){const{className:t,error:n,state:r,traceName:a}=e,s=r===xa;let o=a||va;const i=ka(O());let l="";if(s){l=i.TraceNameError;let e="";n&&(e="string"==typeof n?n:n.message||String(n)),e||(e="Error: Unknown error"),o=e,o=(0,k.jsx)(ga,{text:e})}else if(r===wa)o=_a||(_a=(0,k.jsx)(ya,{small:!0}));else{const e=String(a||va);o=(0,k.jsx)(ga,{text:e})}return(0,k.jsx)("span",{className:f()(i.TraceName,l,t),children:o})}const Ta=(0,V.memoize)((function(e){let t;const n=new Set(e.map((({spanID:e})=>e)));for(let r=0;r<e.length;r++){if(e[r].references&&e[r].references.some((({traceID:t,spanID:a})=>t===e[r].traceID&&n.has(a))))continue;if(!t){t=e[r];continue}const a=e[r].references&&e[r].references.length||0,s=t.references&&t.references.length||0;(a<s||a===s&&e[r].startTime<t.startTime)&&(t=e[r])}return t?`${t.process.serviceName}: ${t.operationName}`:""}),(e=>e.length?e[0].traceID:0));var Ia=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)};function Da(e,t){return 1===e?function(e){var t;return{get:function(n){if(t&&e(n,t.key))return t.value},put:function(e,n){t={key:e,value:n}}}}(t):function(e,t){var n=[];function r(e){var r=function(e,t){for(var n=0;n<e.length;n++)if(t(e[n]))return n;return-1}(n,(function(n){return t(e,n.key)}));if(r>-1){var a=n[r];return r>0&&(n.splice(r,1),n.unshift(a)),a.value}}return{get:r,put:function(t,a){r(t)||(n.unshift({key:t,value:a}),n.length>e&&n.pop())}}}(e,t)}function Ca(e,t){var n=t?function(e,t){return function n(r,a){if(e(r,a))return!0;if(Array.isArray(r))return!(!Array.isArray(a)||r.length!==a.length||!r.every((function(e,t){return n(e,a[t])})));if(Array.isArray(a))return!1;if("object"==typeof r){if("object"!=typeof a)return!1;var s=null===r,o=null===a;if(s||o)return s===o;var i=Object.keys(r),l=Object.keys(a);if(i.length!==l.length)return!1;var c=t?n:e;return!!i.every((function(e){return Ia(r,e)&&Ia(a,e)&&c(r[e],a[e])}))}return!1}}(e,t):e;return function(e,t){if(e.length!==t.length)return!1;for(var r=0;r<e.length;r+=1)if(!n(e[r],t[r]))return!1;return!0}}const Sa=function(){for(var e=1,t=function(e,t){return e===t},n=!1,r=arguments.length,a=new Array(r),s=0;s<r;s++)a[s]=arguments[s];"number"==typeof a[0]&&(e=a.shift()),"function"==typeof a[0]?t=a.shift():void 0===a[0]&&a.shift(),"boolean"==typeof a[0]&&(n=a[0]);var o=Da(e,Ca(t,n));return function(e){return function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];var a=o.get(n);return void 0===a&&(a=e.apply(e,n),o.put(n,a)),a}}};var Ea=n("./.yarn/cache/deep-freeze-npm-0.0.1-12d684fc1a-1e43c98e44.zip/node_modules/deep-freeze/index.js");const Na=n.n(Ea)()(Object.defineProperty({archiveEnabled:!1,dependencies:{dagMaxNumServices:100,menuEnabled:!0},linkPatterns:[],menu:[{label:"About Jaeger",items:[{label:"GitHub",url:"https://github.com/uber/jaeger"},{label:"Docs",url:"http://jaeger.readthedocs.io/en/latest/"},{label:"Twitter",url:"https://twitter.com/JaegerTracing"},{label:"Discussion Group",url:"https://groups.google.com/forum/#!forum/jaeger-tracing"},{label:"Gitter.im",url:"https://gitter.im/jaegertracing/Lobby"},{label:"Blog",url:"https://medium.com/jaegertracing/"}]}],search:{maxLookback:{label:"2 Days",value:"2d"},maxLimit:1500},tracking:{gaID:null,trackErrors:!0}},"__mergeFields",{value:["dependencies","search","tracking"]}));function La(e){return(0,V.get)(Na,e)}function Oa(e){const t=e.references?e.references.find((e=>"CHILD_OF"===e.refType)):null;return t?t.span:null}const Ma=/#\{([^{}]*)\}/g;function Ra(e){const t=new Set;return e.replace(Ma,((e,n)=>(t.add(n),e))),Array.from(t)}function za(e,t,n){return e.replace(Ma,((e,r)=>{const a=n[r];return null==a?"":t(a)}))}function Pa(e,t){if("string"!=typeof e)throw new Error("Invalid template");return{parameters:Ra(e),template:za.bind(null,e,t)}}function Ha(e){if("string"==typeof e)return t=>t===e;if(Array.isArray(e))return t=>e.indexOf(t)>-1;if(null==e)return()=>!0;throw new Error(`Invalid value: ${e}`)}const $a=e=>e;function Va(e,t){if(t)return t.find((t=>t.key===e))}function Fa(e,t){return e.template(t)}function Ba(e,t,n,r){const a=n[r];let s="logs";const o=t.process.tags===n;o&&(s="process");t.tags===n&&(s="tags");const i=[];return e.forEach((e=>{if(e.type(s)&&e.key(a.key)&&e.value(a.value)){const r={},l=e.parameters.every((i=>{let l=Va(i,n);return l||o||(l=function(e,t){let n=t;for(;n;){const t=Va(e,n.tags)||Va(e,n.process.tags);if(t)return t;n=Oa(n)}}(i,t)),l?(r[i]=l.value,!0):(console.warn(`Skipping link pattern, missing parameter ${i} for key ${a.key} in ${s}.`,e.object),!1)}));l&&i.push({url:Fa(e.url,r),text:Fa(e.text,r)})}})),i}const Aa=(La("linkPatterns")||[]).map((function(e){try{const t=Pa(e.url,encodeURIComponent),n=Pa(e.text,$a);return{object:e,type:Ha(e.type),key:Ha(e.key),value:Ha(e.value),url:t,text:n,parameters:(0,V.uniq)(t.parameters.concat(n.parameters))}}catch(t){return console.error(`Ignoring invalid link pattern: ${t}`,e),null}})).filter(Boolean),Ga=Sa(10)((e=>{const t=[];return e?function(e,t){const n=[],r=Object.keys(t).filter((e=>"string"==typeof t[e]||"number"===t[e]));return e.filter((e=>e.type("traces"))).forEach((e=>{const a={},s=e.parameters.every((e=>{const n=e;return!!r.includes(n)&&(a[e]=t[n],!0)}));s&&n.push({url:Fa(e.url,a),text:Fa(e.text,a)})})),n}(Aa,e):t}));new WeakMap;var Wa,Ua;const Ka=e=>(0,k.jsxs)("a",{href:e.href,title:e.title,target:"_blank",rel:"noopener noreferrer",className:e.className,children:[e.children," ",Wa||(Wa=(0,k.jsx)(at,{}))]}),qa=e=>(0,k.jsx)(ct,{children:e.map((({text:e,url:t},n)=>(0,k.jsx)(dt,{children:(0,k.jsx)(Ka,{href:t,children:e})},`${t}-${n}`)))});function Za(e){const{links:t}=e;return 1===t.length?(0,k.jsx)(Ka,{href:t[0].url,title:t[0].text,className:e.className}):(0,k.jsx)(lt,{overlay:qa(t),placement:"bottomRight",trigger:["click"],children:(0,k.jsx)("a",{className:e.className,children:Ua||(Ua=(0,k.jsx)(at,{isLarge:!0}))})})}var Xa=n("./packages/grafana-data/src/index.ts");const Ya=["renderer"];const Ja=M((e=>({TracePageHeader:m`
      label: TracePageHeader;
      & > :first-child {
        border-bottom: 1px solid ${R(e,"#e8e8e8")};
      }
      & > :nth-child(2) {
        background-color: ${R(e,"#eee")};
        border-bottom: 1px solid ${R(e,"#e4e4e4")};
      }
      & > :last-child {
        border-bottom: 1px solid ${R(e,"#ccc")};
      }
    `,TracePageHeaderTitleRow:m`
      label: TracePageHeaderTitleRow;
      align-items: center;
      display: flex;
    `,TracePageHeaderBack:m`
      label: TracePageHeaderBack;
      align-items: center;
      align-self: stretch;
      background-color: #fafafa;
      border-bottom: 1px solid #ddd;
      border-right: 1px solid #ddd;
      color: inherit;
      display: flex;
      font-size: 1.4rem;
      padding: 0 1rem;
      margin-bottom: -1px;
      &:hover {
        background-color: #f0f0f0;
        border-color: #ccc;
      }
    `,TracePageHeaderTitleLink:m`
      label: TracePageHeaderTitleLink;
      align-items: center;
      display: flex;
      flex: 1;

      &:hover * {
        text-decoration: underline;
      }
      &:hover > *,
      &:hover small {
        text-decoration: none;
      }
    `,TracePageHeaderDetailToggle:m`
      label: TracePageHeaderDetailToggle;
      font-size: 2.5rem;
      transition: transform 0.07s ease-out;
    `,TracePageHeaderDetailToggleExpanded:m`
      label: TracePageHeaderDetailToggleExpanded;
      transform: rotate(90deg);
    `,TracePageHeaderTitle:m`
      label: TracePageHeaderTitle;
      color: inherit;
      flex: 1;
      font-size: 1.7em;
      line-height: 1em;
      margin: 0 0 0 0.5em;
      padding-bottom: 0.5em;
    `,TracePageHeaderTitleCollapsible:m`
      label: TracePageHeaderTitleCollapsible;
      margin-left: 0;
    `,TracePageHeaderOverviewItems:m`
      label: TracePageHeaderOverviewItems;
      border-bottom: 1px solid #e4e4e4;
      padding: 0.25rem 0.5rem !important;
    `,TracePageHeaderOverviewItemValueDetail:f()(m`
        label: TracePageHeaderOverviewItemValueDetail;
        color: #aaa;
      `,"trace-item-value-detail"),TracePageHeaderOverviewItemValue:m`
      label: TracePageHeaderOverviewItemValue;
      &:hover > .trace-item-value-detail {
        color: unset;
      }
    `,TracePageHeaderArchiveIcon:m`
      label: TracePageHeaderArchiveIcon;
      font-size: 1.78em;
      margin-right: 0.15em;
    `,TracePageHeaderTraceId:m`
      label: TracePageHeaderTraceId;
      white-space: nowrap;
    `}))),Qa=[{key:"timestamp",label:"Trace Start",renderer(e,t,n){const r=(0,Xa.dateTimeFormat)(e.startTime/1e3,{timeZone:t,defaultWithMS:!0}),a=r.match(/^(.+)(:\d\d\.\d+)$/);return a?(0,k.jsxs)("span",{className:n.TracePageHeaderOverviewItemValue,children:[a[1],(0,k.jsx)("span",{className:n.TracePageHeaderOverviewItemValueDetail,children:a[2]})]}):r}},{key:"duration",label:"Duration",renderer:e=>le(e.duration)},{key:"service-count",label:"Services",renderer:e=>new Set((0,V.values)(e.processes).map((e=>e.serviceName))).size},{key:"depth",label:"Depth",renderer:e=>(0,V.get)((0,V.maxBy)(e.spans,"depth"),"depth",0)+1},{key:"span-count",label:"Total Spans",renderer:e=>e.spans.length}];function es(e){const{canCollapse:t,clearSearch:n,focusUiFindMatches:a,hideMap:s,hideSummary:o,nextResult:i,onSlimViewClicked:l,prevResult:c,resultCount:d,slimView:p,textFilter:u,trace:h,traceGraphView:m,updateNextViewRangeTime:g,updateViewRangeTime:b,viewRange:y,searchValue:v,onSearchValueChange:x,hideSearchButtons:w,timeZone:_}=e,j=Ja(O()),T=r.useMemo((()=>h?Ga(h):[]),[h]);if(!h)return null;const I=!o&&!p&&Qa.map((e=>{const{renderer:t}=e,n=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,Ya);return Object.assign({},n,{value:t(h,_,j)})})),D=(0,k.jsxs)("h1",{className:f()(j.TracePageHeaderTitle,t&&j.TracePageHeaderTitleCollapsible),children:[(0,k.jsx)(ja,{traceName:Ta(h.spans)})," ",(0,k.jsx)("small",{className:f()(j.TracePageHeaderTraceId,Ne),children:h.traceID})]});return(0,k.jsxs)("header",{className:j.TracePageHeader,children:[(0,k.jsxs)("div",{className:j.TracePageHeaderTitleRow,children:[T&&T.length>0&&(0,k.jsx)(Za,{links:T,className:j.TracePageHeaderBack}),t?(0,k.jsxs)("a",{className:j.TracePageHeaderTitleLink,onClick:l,role:"switch","aria-checked":!p,children:[(0,k.jsx)(Hr(),{className:f()(j.TracePageHeaderDetailToggle,!p&&j.TracePageHeaderDetailToggleExpanded)}),D]}):D,(0,k.jsx)(ua,{clearSearch:n,focusUiFindMatches:a,nextResult:i,prevResult:c,resultCount:d,textFilter:u,navigable:!m,searchValue:v,onSearchValueChange:x,hideSearchButtons:w})]}),I&&(0,k.jsx)(Yn,{className:j.TracePageHeaderOverviewItems,items:I}),!s&&!p&&(0,k.jsx)(sa,{trace:h,viewRange:y,updateNextViewRangeTime:g,updateViewRangeTime:b})]})}function ts(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}class ns{constructor(e){ts(this,"isTagsOpen",void 0),ts(this,"isProcessOpen",void 0),ts(this,"logs",void 0),ts(this,"isWarningsOpen",void 0),ts(this,"isStackTracesOpen",void 0),ts(this,"isReferencesOpen",void 0);const{isTagsOpen:t,isProcessOpen:n,isReferencesOpen:r,isWarningsOpen:a,isStackTracesOpen:s,logs:o}=e||{};this.isTagsOpen=Boolean(t),this.isProcessOpen=Boolean(n),this.isReferencesOpen=Boolean(r),this.isWarningsOpen=Boolean(a),this.isStackTracesOpen=Boolean(s),this.logs={isOpen:Boolean(o&&o.isOpen),openedItems:o&&o.openedItems?new Set(o.openedItems):new Set}}toggleTags(){const e=new ns(this);return e.isTagsOpen=!this.isTagsOpen,e}toggleProcess(){const e=new ns(this);return e.isProcessOpen=!this.isProcessOpen,e}toggleReferences(){const e=new ns(this);return e.isReferencesOpen=!this.isReferencesOpen,e}toggleWarnings(){const e=new ns(this);return e.isWarningsOpen=!this.isWarningsOpen,e}toggleStackTraces(){const e=new ns(this);return e.isStackTracesOpen=!this.isStackTracesOpen,e}toggleLogs(){const e=new ns(this);return e.logs.isOpen=!this.logs.isOpen,e}toggleLogItem(e){const t=new ns(this);return t.logs.openedItems.has(e)?t.logs.openedItems.delete(e):t.logs.openedItems.add(e),t}}function rs(e,t){return e===t}function as(e,t,n){if(null===t||null===n||t.length!==n.length)return!1;for(var r=t.length,a=0;a<r;a++)if(!e(t[a],n[a]))return!1;return!0}function ss(e){var t=Array.isArray(e[0])?e[0]:e;if(!t.every((function(e){return"function"==typeof e}))){var n=t.map((function(e){return typeof e})).join(", ");throw new Error("Selector creators expect all input-selectors to be functions, instead received the following types: ["+n+"]")}return t}var os=function(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return function(){for(var t=arguments.length,r=Array(t),a=0;a<t;a++)r[a]=arguments[a];var s=0,o=r.pop(),i=ss(r),l=e.apply(void 0,[function(){return s++,o.apply(null,arguments)}].concat(n)),c=e((function(){for(var e=[],t=i.length,n=0;n<t;n++)e.push(i[n].apply(null,arguments));return l.apply(null,e)}));return c.resultFunc=o,c.dependencies=i,c.recomputations=function(){return s},c.resetRecomputations=function(){return s=0},c}}((function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:rs,n=null,r=null;return function(){return as(t,n,arguments)||(r=e.apply(null,arguments)),n=arguments,r}}));var is=n("./.yarn/cache/fuzzy-npm-0.1.3-a0dfe08bd0-acc09c6173.zip/node_modules/fuzzy/lib/fuzzy.js"),ls=n.n(is);const cs=e=>e.serviceName,ds=e=>e.spanID,ps=e=>e.operationName,us=e=>e.duration,hs=e=>e.startTime,ms=e=>e.processID,gs=os(os((({span:e})=>e),(e=>e.references||[])),(({type:e})=>e),((e,t)=>e.find((e=>e.refType===t)))),fs=(os((e=>gs({span:e,type:"CHILD_OF"})),(e=>e?e.spanID:null)),os((e=>{if(!e.process)throw new Error("\n      you must hydrate the spans with the processes, perhaps\n      using hydrateSpansWithProcesses(), before accessing a span's process\n    ");return e.process}),cs)),bs=(os((({spans:e})=>e),(({leftBound:e})=>e),(({rightBound:e})=>e),((e,t,n)=>e.filter((e=>hs(e)>=t&&hs(e)<=n)))),os((({spans:e})=>e),(({text:e})=>e),((e,t)=>ls().filter(t,e,{extract:e=>`${fs(e)} ${ps(e)}`}).map((({original:e})=>e))))),ys=os(bs,(e=>e.reduce(((e,t)=>({...e,[ds(t)]:t})),{})));os((({spans:e})=>e),ys,((e,t)=>e.map((e=>({...e,muted:!t[ds(e)]})))));class vs{static iterFunction(e,t=0){return n=>e(n.value,n,t)}static searchFunction(e){return"function"==typeof e?e:(t,n)=>e instanceof vs?n===e:t===e}constructor(e,t=[]){this.value=e,this.children=t}get depth(){return this.children.reduce(((e,t)=>Math.max(t.depth+1,e)),1)}get size(){let e=0;return this.walk((()=>e++)),e}addChild(e){return this.children.push(e instanceof vs?e:new vs(e)),this}find(e){if(vs.iterFunction(vs.searchFunction(e))(this))return this;for(let t=0;t<this.children.length;t++){const n=this.children[t].find(e);if(n)return n}return null}getPath(e){const t=vs.iterFunction(vs.searchFunction(e)),n=(e,r)=>{const a=r.concat([e]);if(t(e))return a;for(let t=0;t<e.children.length;t++){const r=e.children[t],s=n(r,a);if(s)return s}return null};return n(this,[])}walk(e,t=0){const n=[];let r=t;for(n.push({node:this,depth:r});n.length;){const{node:t,depth:a}=n.pop();e(t.value,t,a),r=a+1;let s=t.children.length-1;for(;s>=0;)n.push({node:t.children[s],depth:r}),s--}}}const xs=e=>e.spans,ws=e=>e.processes,_s=os((e=>e.span),(e=>e.processes),((e,t)=>({...e,process:t[ms(e)]}))),ks=os(xs,(e=>e.reduce(((e,t)=>e.set(ds(t),t)),new Map)));function js(e){const t=new Map(e.spans.map((e=>[e.spanID,new vs(e.spanID)]))),n=new Map(e.spans.map((e=>[e.spanID,e]))),r=new vs("__root__");e.spans.forEach((e=>{const n=t.get(e.spanID);if(Array.isArray(e.references)&&e.references.length){const{refType:a,spanID:s}=e.references[0];if("CHILD_OF"!==a&&"FOLLOWS_FROM"!==a)throw new Error(`Unrecognized ref type: ${a}`);(t.get(s)||r).children.push(n)}else r.children.push(n)}));const a=(e,t)=>{const r=n.get(e.value),a=n.get(t.value);return+(r.startTime>a.startTime)||+(r.startTime===a.startTime)-1};return e.spans.forEach((e=>{const n=t.get(e.spanID);n.children.length>1&&n.children.sort(a)})),r.children.sort(a),r}os(xs,(e=>e.length));const Ts=os(xs,(e=>e.reduce(((e,t)=>e?Math.min(e,hs(t)):hs(t)),null))),Is=os(xs,Ts,((e,t)=>e.reduce(((e,n)=>e?Math.max(hs(n)-t+us(n),e):us(n)),null))),Ds=(os(Ts,Is,((e,t)=>e+t)),os(js,ks,((e,t)=>e.children.map((e=>t.get(e.value))).sort(((e,t)=>{return n=hs(e),r=hs(t),n-r;var n,r}))[0]))),Cs=(os(js,(e=>e.depth-1)),os(os((e=>e.trace),js),os((e=>e.span),ds),((e,t)=>e.getPath(t).length-1)),os(ws,(e=>Object.keys(e).reduce(((t,n)=>t.add(cs(e[n]))),new Set)))),Ss=(os(Cs,(e=>e.size)),{ms:function(e){const t=ie(e,se,te);return`${ee().duration(t/te).asMilliseconds()}ms`},s:function(e){const t=ie(e,se,ne);return`${ee().duration(t/te).asSeconds()}s`}}),Es=os(Is,(e=>e>=ne?Ss.s:Ss.ms)),Ns=(os((({duration:e})=>e),(({unit:e})=>Ss[e]),((e,t)=>t(e))),os((({duration:e})=>e),os((({trace:e})=>e),Es),((e,t)=>t(e))),os((({trace:e})=>e),(({spans:e})=>e),(({sort:e})=>e),((e,t,{dir:n,comparator:r,selector:a})=>[...t].sort(((t,s)=>n*r(a(t,e),a(s,e)))))),os(js,(e=>{const t=new Map;let n=0;return e.walk((e=>t.set(e,n++))),t})));os(os((e=>e.trace),js),os((e=>e.span),ds),((e,t)=>{const n=e.find(t);return n?n.size-1:-1})),os(os((({trace:e})=>e),Ns),(({span:e})=>e),((e,t)=>e.get(ds(t)))),os(os(os((e=>{const t=xs(e),n=ws(e);return{...e,spans:t.map((e=>_s({span:e,processes:n})))}}),Ds),function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:os;if("object"!=typeof e)throw new Error("createStructuredSelector expects first argument to be an object where each property is a selector, instead received a "+typeof e);var n=Object.keys(e);return t(n.map((function(t){return e[t]})),(function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return t.reduce((function(e,t,r){return e[n[r]]=t,e}),{})}))}({name:ps,serviceName:fs})),(({name:e,serviceName:t})=>`${t}: ${e}`)),os((({spans:e})=>e),os((({trace:e})=>e),js),(({collapsed:e})=>e),((e,t,n)=>{const r=n.reduce(((e,n)=>(t.find(n).walk((t=>t!==n&&e.add(t))),e)),new Set);return r.size>0?e.filter((e=>!r.has(ds(e)))):e})),os((({trace:e})=>e),(({interval:e=4})=>e),(({width:e=3})=>e),((e,t,n)=>[...Array(t+1).keys()].map((r=>({timestamp:Ts(e)+Is(e)*(r/t),width:n}))))),os((e=>e),xs,((e,t)=>{const n=new Map;return{...e,spans:t.reduce(((e,t)=>{const r=n.has(ds(t))?`${ds(t)}_${n.get(ds(t))}`:ds(t),a={...t,spanID:r};return r!==ds(t)&&console.warn("duplicate spanID in trace replaced",ds(t),"new:",r),n.set(ds(t),(n.get(ds(t))||0)+1),e.concat([a])}),[])}})),os((e=>e),xs,((e,t)=>({...e,spans:t.filter((e=>!!hs(e)))})));function Ls(e){if(null==e||!e.traceID)return null;const t=e.traceID.toLowerCase();let n=0,r=Number.MAX_SAFE_INTEGER;const a=new Map,s=new Map;e.spans=e.spans.filter((e=>Boolean(e.startTime)));const o=e.spans.length;for(let t=0;t<o;t++){const o=e.spans[t],{startTime:i,duration:l,processID:c}=o;let d=o.spanID;i<r&&(r=i),i+l>n&&(n=i+l);const p=a.get(d);null!=p?(console.warn(`Dupe spanID, ${p+1} x ${d}`,o,s.get(d)),(0,V.isEqual)(o,s.get(d))&&console.warn("\t two spans with same ID have `isEqual(...) === true`"),a.set(d,p+1),d=`${d}_${p}`,o.spanID=d):a.set(d,1),o.process=e.processes[c],s.set(d,o)}const i=js(e),l=[],c={};i.walk(((e,n,a=0)=>{if("__root__"===e)return;const o=s.get(e);if(!o)return;const{serviceName:i}=o.process;c[i]=(c[i]||0)+1,o.relativeStartTime=o.startTime-r,o.depth=a-1,o.hasChildren=n.children.length>0,o.warnings=o.warnings||[],o.tags=o.tags||[],o.references=o.references||[];const d=function(e){const t=new Map;return{tags:e.reduce(((e,n)=>(e.some((e=>e.key===n.key&&e.value===n.value))?t.set(`${n.key}:${n.value}`,`Duplicate tag "${n.key}:${n.value}"`):e.push(n),e)),[]),warnings:Array.from(t.values())}}(o.tags);o.tags=function(e,t){const n=e.slice(),r=(t||[]).map((e=>e.toLowerCase()));return n.sort(((e,t)=>{const n=e.key.toLowerCase(),a=t.key.toLowerCase();for(let e=0;e<r.length;e++){const t=r[e];if(n.startsWith(t)&&!a.startsWith(t))return-1;if(!n.startsWith(t)&&a.startsWith(t))return 1}return n>a?1:n<a?-1:0})),n}(d.tags,La("topTagPrefixes")),o.warnings=o.warnings.concat(d.warnings),o.references.forEach(((n,r)=>{const a=s.get(n.spanID);a&&(n.span=a,r>0&&(a.subsidiarilyReferencedBy=a.subsidiarilyReferencedBy||[],a.subsidiarilyReferencedBy.push({spanID:e,traceID:t,span:o,refType:n.refType})))})),l.push(o)}));const d=Ta(l);return{services:Object.keys(c).map((e=>({name:e,numberOfSpans:c[e]}))),spans:l,traceID:t,traceName:d,processes:e.processes,duration:n-r,startTime:r,endTime:n}}function Os(e,t){if(!t)return null;const n=[],r=[];e.split(/\s+/).filter(Boolean).forEach((e=>{"-"===e[0]?r.push(e.substr(1).toLowerCase()):n.push(e.toLowerCase())}));const a=(e,t)=>e.some((e=>t.toLowerCase().includes(e))),s=e=>!!e&&e.some((e=>!a(r,e.key)&&(a(n,e.key)||a(n,e.value.toString()))));return new Set(t.filter((e=>a(n,e.operationName)||a(n,e.process.serviceName)||s(e.tags)||null!==e.logs&&e.logs.some((e=>s(e.fields)))||s(e.process.tags)||n.some((t=>t===e.spanID)))).map((e=>e.spanID)))}},"./public/app/core/utils/tracing.ts":(e,t,n)=>{"use strict";n.d(t,{et:()=>a,nO:()=>s,fy:()=>o,np:()=>l});var r=n("./packages/grafana-data/src/index.ts");function a(e){e.sort(((e,t)=>e[0]-t[0]));return e.reduce(((e,t)=>{if(!e.length)return[t];const n=e.slice(-1)[0],[r,a]=n,[s,o]=t;return o<a?e:s>a?[...e,t]:[...e.slice(0,-1),[r,o]]}),[]).reduce(((e,t)=>e+(t[1]-t[0])),0)}function s(e){const t={};let n;for(let r=0;n=e(r),n;r++){t[n.id]?t[n.id].span=n.span:t[n.id]={span:n.span,children:[]};for(const e of n.parentIds)e&&(t[e]?t[e].children.push(n.id):t[e]={span:void 0,children:[n.id]})}return t}function o(e,t,n){return{main:`${i(e)}ms (${i(e/t*100)}%)`,secondary:`${i(n)}ms (${i(n/e*100)}%)`}}function i(e){return parseFloat(e.toFixed(2))}function l(){return[new r.MutableDataFrame({fields:[{name:r.NodeGraphDataFrameFieldNames.id,type:r.FieldType.string},{name:r.NodeGraphDataFrameFieldNames.title,type:r.FieldType.string},{name:r.NodeGraphDataFrameFieldNames.subTitle,type:r.FieldType.string},{name:r.NodeGraphDataFrameFieldNames.mainStat,type:r.FieldType.string,config:{displayName:"Total time (% of trace)"}},{name:r.NodeGraphDataFrameFieldNames.secondaryStat,type:r.FieldType.string,config:{displayName:"Self time (% of total)"}},{name:r.NodeGraphDataFrameFieldNames.color,type:r.FieldType.number,config:{color:{mode:"continuous-GrYlRd"},displayName:"Self time / Trace duration"}}],meta:{preferredVisualisationType:"nodeGraph"}}),new r.MutableDataFrame({fields:[{name:r.NodeGraphDataFrameFieldNames.id,type:r.FieldType.string},{name:r.NodeGraphDataFrameFieldNames.target,type:r.FieldType.string},{name:r.NodeGraphDataFrameFieldNames.source,type:r.FieldType.string}],meta:{preferredVisualisationType:"nodeGraph"}})]}},"./public/app/plugins/datasource/jaeger/responseTransform.ts":(e,t,n)=>{"use strict";n.d(t,{xM:()=>s,Wp:()=>o,c6:()=>l});var r=n("./packages/grafana-data/src/index.ts"),a=n("./packages/jaeger-ui-components/src/index.ts");function s(e){const t=e.spans.map((t=>{return n=t,r=e.processes,{spanID:n.spanID,traceID:n.traceID,parentSpanID:null===(a=n.references)||void 0===a||null===(s=a.find((e=>"CHILD_OF"===e.refType)))||void 0===s?void 0:s.spanID,operationName:n.operationName,startTime:n.startTime/1e3,duration:n.duration/1e3,logs:n.logs.map((e=>Object.assign({},e,{timestamp:e.timestamp/1e3}))),tags:n.tags,warnings:null!==(o=n.warnings)&&void 0!==o?o:void 0,stackTraces:n.stackTraces,serviceName:r[n.processID].serviceName,serviceTags:r[n.processID].tags};var n,r,a,s,o})),n=new r.MutableDataFrame({fields:[{name:"traceID",type:r.FieldType.string},{name:"spanID",type:r.FieldType.string},{name:"parentSpanID",type:r.FieldType.string},{name:"operationName",type:r.FieldType.string},{name:"serviceName",type:r.FieldType.string},{name:"serviceTags",type:r.FieldType.other},{name:"startTime",type:r.FieldType.number},{name:"duration",type:r.FieldType.number},{name:"logs",type:r.FieldType.other},{name:"tags",type:r.FieldType.other},{name:"warnings",type:r.FieldType.other},{name:"stackTraces",type:r.FieldType.other}],meta:{preferredVisualisationType:"trace",custom:{traceFormat:"jaeger"}}});for(const e of t)n.add(e);return n}function o(e,t){const n=new r.MutableDataFrame({fields:[{name:"traceID",type:r.FieldType.string,config:{displayNameFromDS:"Trace ID",links:[{title:"Trace: ${__value.raw}",url:"",internal:{datasourceUid:t.uid,datasourceName:t.name,query:{query:"${__value.raw}"}}}]}},{name:"traceName",type:r.FieldType.string,config:{displayNameFromDS:"Trace name"}},{name:"startTime",type:r.FieldType.time,config:{displayNameFromDS:"Start time"}},{name:"duration",type:r.FieldType.number,config:{displayNameFromDS:"Duration",unit:"µs"}}],meta:{preferredVisualisationType:"table"}}),a=e.map(i).sort(((e,t)=>(null==t?void 0:t.startTime)-(null==e?void 0:e.startTime)));for(const e of a)n.add(e);return n}function i(e){const t=(0,a.R1)(e);if(t)return{traceID:t.traceID,startTime:t.startTime/1e3,duration:t.duration,traceName:t.traceName}}function l(e){let t={traceID:"",spans:[],processes:{},warnings:null},n=[];for(let r=0;r<e.length;r++){const a=e.get(r);t.traceID||(t.traceID=a.traceID),n.find((e=>e===a.serviceName))||(n.push(a.serviceName),t.processes[`p${n.length}`]={serviceName:a.serviceName,tags:a.serviceTags}),t.spans.push({traceID:a.traceID,spanID:a.spanID,duration:1e3*a.duration,references:a.parentSpanID?[{refType:"CHILD_OF",spanID:a.parentSpanID,traceID:a.traceID}]:[],flags:0,logs:a.logs.map((e=>Object.assign({},e,{timestamp:1e3*e.timestamp}))),operationName:a.operationName,processID:Object.keys(t.processes).find((e=>t.processes[e].serviceName===a.serviceName))||"",startTime:1e3*a.startTime,tags:a.tags,warnings:a.warnings?a.warnings:null})}return{data:[t],total:0,limit:0,offset:0,errors:null}}},"./.yarn/__virtual__/react-icon-base-virtual-e209b164a7/0/cache/react-icon-base-npm-2.1.0-caadf8254e-62b6bfe486.zip/node_modules/react-icon-base/lib/index.js":(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=o(n("./.yarn/cache/react-npm-17.0.1-98658812fc-83b9df9529.zip/node_modules/react/index.js")),s=o(n("./.yarn/cache/prop-types-npm-15.7.2-d7a04f2274-5eef82fdda.zip/node_modules/prop-types/index.js"));function o(e){return e&&e.__esModule?e:{default:e}}var i=function(e,t){var n=e.children,s=e.color,o=e.size,i=e.style,l=e.width,c=e.height,d=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(e,["children","color","size","style","width","height"]),p=t.reactIconBase,u=void 0===p?{}:p,h=o||u.size||"1em";return a.default.createElement("svg",r({children:n,fill:"currentColor",preserveAspectRatio:"xMidYMid meet",height:c||h,width:l||h},u,d,{style:r({verticalAlign:"middle",color:s||u.color},u.style||{},i)}))};i.propTypes={color:s.default.string,size:s.default.oneOfType([s.default.string,s.default.number]),width:s.default.oneOfType([s.default.string,s.default.number]),height:s.default.oneOfType([s.default.string,s.default.number]),style:s.default.object},i.contextTypes={reactIconBase:s.default.shape(i.propTypes)},t.default=i,e.exports=t.default},"./.yarn/__virtual__/react-icons-virtual-f314220a93/0/cache/react-icons-npm-2.2.7-c2e0e4d90b-74e692fdd3.zip/node_modules/react-icons/lib/io/alert.js":(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=o(n("./.yarn/cache/react-npm-17.0.1-98658812fc-83b9df9529.zip/node_modules/react/index.js")),s=o(n("./.yarn/__virtual__/react-icon-base-virtual-e209b164a7/0/cache/react-icon-base-npm-2.1.0-caadf8254e-62b6bfe486.zip/node_modules/react-icon-base/lib/index.js"));function o(e){return e&&e.__esModule?e:{default:e}}t.default=function(e){return a.default.createElement(s.default,r({viewBox:"0 0 40 40"},e),a.default.createElement("g",null,a.default.createElement("path",{d:"m25 37.5h-10v-7.5h10v7.5z m-1.2-12.5h-7.5l-1.3-22.5h10z"})))},e.exports=t.default},"./.yarn/__virtual__/react-icons-virtual-f314220a93/0/cache/react-icons-npm-2.2.7-c2e0e4d90b-74e692fdd3.zip/node_modules/react-icons/lib/io/android-locate.js":(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=o(n("./.yarn/cache/react-npm-17.0.1-98658812fc-83b9df9529.zip/node_modules/react/index.js")),s=o(n("./.yarn/__virtual__/react-icon-base-virtual-e209b164a7/0/cache/react-icon-base-npm-2.1.0-caadf8254e-62b6bfe486.zip/node_modules/react-icon-base/lib/index.js"));function o(e){return e&&e.__esModule?e:{default:e}}t.default=function(e){return a.default.createElement(s.default,r({viewBox:"0 0 40 40"},e),a.default.createElement("g",null,a.default.createElement("path",{d:"m17.5 13.8c3.4 0 6.3 2.8 6.3 6.2s-2.9 6.3-6.3 6.3-6.2-2.9-6.2-6.3 2.8-6.2 6.2-6.2z m14.9 4.6h2.6v3.2h-2.6c-0.8 7-6.3 12.5-13.3 13.3v2.6h-3.2v-2.6c-7-0.8-12.5-6.3-13.3-13.3h-2.6v-3.2h2.6c0.8-7 6.3-12.5 13.3-13.3v-2.6h3.2v2.6c7 0.8 12.5 6.3 13.3 13.3z m-14.9 13.2c6.4 0 11.6-5.2 11.6-11.6s-5.2-11.6-11.6-11.6-11.6 5.2-11.6 11.6 5.2 11.6 11.6 11.6z"})))},e.exports=t.default},"./.yarn/__virtual__/react-icons-virtual-f314220a93/0/cache/react-icons-npm-2.2.7-c2e0e4d90b-74e692fdd3.zip/node_modules/react-icons/lib/io/android-open.js":(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=o(n("./.yarn/cache/react-npm-17.0.1-98658812fc-83b9df9529.zip/node_modules/react/index.js")),s=o(n("./.yarn/__virtual__/react-icon-base-virtual-e209b164a7/0/cache/react-icon-base-npm-2.1.0-caadf8254e-62b6bfe486.zip/node_modules/react-icon-base/lib/index.js"));function o(e){return e&&e.__esModule?e:{default:e}}t.default=function(e){return a.default.createElement(s.default,r({viewBox:"0 0 40 40"},e),a.default.createElement("g",null,a.default.createElement("path",{d:"m31.6 31.6v-10.3h3.4v10.3c0 1.8-1.6 3.4-3.4 3.4h-23.2c-1.8 0-3.4-1.6-3.4-3.4v-23.2c0-1.8 1.6-3.4 3.4-3.4h10.4v3.4h-10.4v23.2h23.2z m-9.1-26.6h12.5v12.5h-3.4v-6.8l-16.8 16.8-2.3-2.3 16.8-16.8h-6.8v-3.4z"})))},e.exports=t.default},"./.yarn/__virtual__/react-icons-virtual-f314220a93/0/cache/react-icons-npm-2.2.7-c2e0e4d90b-74e692fdd3.zip/node_modules/react-icons/lib/io/arrow-right-a.js":(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=o(n("./.yarn/cache/react-npm-17.0.1-98658812fc-83b9df9529.zip/node_modules/react/index.js")),s=o(n("./.yarn/__virtual__/react-icon-base-virtual-e209b164a7/0/cache/react-icon-base-npm-2.1.0-caadf8254e-62b6bfe486.zip/node_modules/react-icon-base/lib/index.js"));function o(e){return e&&e.__esModule?e:{default:e}}t.default=function(e){return a.default.createElement(s.default,r({viewBox:"0 0 40 40"},e),a.default.createElement("g",null,a.default.createElement("path",{d:"m35 20l-15 15v-8.7h-15v-12.5h15v-8.8z"})))},e.exports=t.default},"./.yarn/__virtual__/react-icons-virtual-f314220a93/0/cache/react-icons-npm-2.2.7-c2e0e4d90b-74e692fdd3.zip/node_modules/react-icons/lib/io/chevron-right.js":(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=o(n("./.yarn/cache/react-npm-17.0.1-98658812fc-83b9df9529.zip/node_modules/react/index.js")),s=o(n("./.yarn/__virtual__/react-icon-base-virtual-e209b164a7/0/cache/react-icon-base-npm-2.1.0-caadf8254e-62b6bfe486.zip/node_modules/react-icon-base/lib/index.js"));function o(e){return e&&e.__esModule?e:{default:e}}t.default=function(e){return a.default.createElement(s.default,r({viewBox:"0 0 40 40"},e),a.default.createElement("g",null,a.default.createElement("path",{d:"m23.3 20l-13.1-13.6c-0.3-0.3-0.3-0.9 0-1.2l2.4-2.4c0.3-0.3 0.9-0.4 1.2-0.1l16 16.7c0.1 0.1 0.2 0.4 0.2 0.6s-0.1 0.5-0.2 0.6l-16 16.7c-0.3 0.3-0.9 0.3-1.2 0l-2.4-2.5c-0.3-0.3-0.3-0.9 0-1.2z"})))},e.exports=t.default},"./.yarn/__virtual__/react-icons-virtual-f314220a93/0/cache/react-icons-npm-2.2.7-c2e0e4d90b-74e692fdd3.zip/node_modules/react-icons/lib/io/ios-arrow-down.js":(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=o(n("./.yarn/cache/react-npm-17.0.1-98658812fc-83b9df9529.zip/node_modules/react/index.js")),s=o(n("./.yarn/__virtual__/react-icon-base-virtual-e209b164a7/0/cache/react-icon-base-npm-2.1.0-caadf8254e-62b6bfe486.zip/node_modules/react-icon-base/lib/index.js"));function o(e){return e&&e.__esModule?e:{default:e}}t.default=function(e){return a.default.createElement(s.default,r({viewBox:"0 0 40 40"},e),a.default.createElement("g",null,a.default.createElement("path",{d:"m31 12.5l1.5 1.6-12.5 13.4-12.5-13.4 1.5-1.6 11 11.7z"})))},e.exports=t.default},"./.yarn/__virtual__/react-icons-virtual-f314220a93/0/cache/react-icons-npm-2.2.7-c2e0e4d90b-74e692fdd3.zip/node_modules/react-icons/lib/io/ios-arrow-right.js":(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=o(n("./.yarn/cache/react-npm-17.0.1-98658812fc-83b9df9529.zip/node_modules/react/index.js")),s=o(n("./.yarn/__virtual__/react-icon-base-virtual-e209b164a7/0/cache/react-icon-base-npm-2.1.0-caadf8254e-62b6bfe486.zip/node_modules/react-icon-base/lib/index.js"));function o(e){return e&&e.__esModule?e:{default:e}}t.default=function(e){return a.default.createElement(s.default,r({viewBox:"0 0 40 40"},e),a.default.createElement("g",null,a.default.createElement("path",{d:"m12.5 9l1.6-1.5 13.4 12.5-13.4 12.5-1.6-1.5 11.7-11z"})))},e.exports=t.default},"./.yarn/__virtual__/react-icons-virtual-f314220a93/0/cache/react-icons-npm-2.2.7-c2e0e4d90b-74e692fdd3.zip/node_modules/react-icons/lib/io/network.js":(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=o(n("./.yarn/cache/react-npm-17.0.1-98658812fc-83b9df9529.zip/node_modules/react/index.js")),s=o(n("./.yarn/__virtual__/react-icon-base-virtual-e209b164a7/0/cache/react-icon-base-npm-2.1.0-caadf8254e-62b6bfe486.zip/node_modules/react-icon-base/lib/index.js"));function o(e){return e&&e.__esModule?e:{default:e}}t.default=function(e){return a.default.createElement(s.default,r({viewBox:"0 0 40 40"},e),a.default.createElement("g",null,a.default.createElement("path",{d:"m35 7.5c0 1.9-1 3.4-2.5 4.3v7.3l-10 5v4.1c1.5 0.9 2.5 2.4 2.5 4.3 0 2.7-2.3 5-5 5s-5-2.3-5-5c0-1.9 1-3.4 2.5-4.3v-4.1l-10-5v-7.3c-1.5-0.9-2.5-2.4-2.5-4.3 0-2.7 2.3-5 5-5s5 2.3 5 5c0 1.9-1 3.4-2.5 4.3v4.1l7.5 3.8 7.5-3.8v-4.1c-1.5-0.9-2.5-2.4-2.5-4.3 0-2.7 2.3-5 5-5s5 2.3 5 5z m-25-2.5c-1.4 0-2.5 1.1-2.5 2.5s1.1 2.5 2.5 2.5 2.5-1.1 2.5-2.5-1.1-2.5-2.5-2.5z m10 30c1.4 0 2.5-1.1 2.5-2.5s-1.1-2.5-2.5-2.5-2.5 1.1-2.5 2.5 1.1 2.5 2.5 2.5z m10-25c1.4 0 2.5-1.1 2.5-2.5s-1.1-2.5-2.5-2.5-2.5 1.1-2.5 2.5 1.1 2.5 2.5 2.5z"})))},e.exports=t.default},"./.yarn/__virtual__/react-icons-virtual-f314220a93/0/cache/react-icons-npm-2.2.7-c2e0e4d90b-74e692fdd3.zip/node_modules/react-icons/lib/md/file-upload.js":(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=o(n("./.yarn/cache/react-npm-17.0.1-98658812fc-83b9df9529.zip/node_modules/react/index.js")),s=o(n("./.yarn/__virtual__/react-icon-base-virtual-e209b164a7/0/cache/react-icon-base-npm-2.1.0-caadf8254e-62b6bfe486.zip/node_modules/react-icon-base/lib/index.js"));function o(e){return e&&e.__esModule?e:{default:e}}t.default=function(e){return a.default.createElement(s.default,r({viewBox:"0 0 40 40"},e),a.default.createElement("g",null,a.default.createElement("path",{d:"m8.4 30h23.2v3.4h-23.2v-3.4z m6.6-3.4v-10h-6.6l11.6-11.6 11.6 11.6h-6.6v10h-10z"})))},e.exports=t.default},"./.yarn/__virtual__/react-icons-virtual-f314220a93/0/cache/react-icons-npm-2.2.7-c2e0e4d90b-74e692fdd3.zip/node_modules/react-icons/lib/md/keyboard-arrow-right.js":(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=o(n("./.yarn/cache/react-npm-17.0.1-98658812fc-83b9df9529.zip/node_modules/react/index.js")),s=o(n("./.yarn/__virtual__/react-icon-base-virtual-e209b164a7/0/cache/react-icon-base-npm-2.1.0-caadf8254e-62b6bfe486.zip/node_modules/react-icon-base/lib/index.js"));function o(e){return e&&e.__esModule?e:{default:e}}t.default=function(e){return a.default.createElement(s.default,r({viewBox:"0 0 40 40"},e),a.default.createElement("g",null,a.default.createElement("path",{d:"m14.3 27.3l7.7-7.7-7.7-7.7 2.3-2.3 10 10-10 10z"})))},e.exports=t.default},"./.yarn/cache/change-emitter-npm-0.1.6-9daba4f281-0ed494ba99.zip/node_modules/change-emitter/lib/index.js":(e,t)=>{"use strict";t.E=function(){var e=[],t=e;function n(){t===e&&(t=e.slice())}return{listen:function(e){if("function"!=typeof e)throw new Error("Expected listener to be a function.");var r=!0;return n(),t.push(e),function(){if(r){r=!1,n();var a=t.indexOf(e);t.splice(a,1)}}},emit:function(){for(var n=e=t,r=0;r<n.length;r++)n[r].apply(n,arguments)}}}},"./.yarn/cache/combokeys-npm-3.0.1-45601d2e33-37ad8d0257.zip/node_modules/combokeys/Combokeys/index.js":(e,t,n)=>{"use strict";e.exports=function(e,t){var n=this,r=n.constructor;return n.options=Object.assign({storeInstancesGlobally:!0},t||{}),n.callbacks={},n.directMap={},n.sequenceLevels={},n.resetTimer=null,n.ignoreNextKeyup=!1,n.ignoreNextKeypress=!1,n.nextExpectedAction=!1,n.element=e,n.addEvents(),n.options.storeInstancesGlobally&&r.instances.push(n),n},e.exports.prototype.bind=n("./.yarn/cache/combokeys-npm-3.0.1-45601d2e33-37ad8d0257.zip/node_modules/combokeys/Combokeys/prototype/bind.js"),e.exports.prototype.bindMultiple=n("./.yarn/cache/combokeys-npm-3.0.1-45601d2e33-37ad8d0257.zip/node_modules/combokeys/Combokeys/prototype/bindMultiple.js"),e.exports.prototype.unbind=n("./.yarn/cache/combokeys-npm-3.0.1-45601d2e33-37ad8d0257.zip/node_modules/combokeys/Combokeys/prototype/unbind.js"),e.exports.prototype.trigger=n("./.yarn/cache/combokeys-npm-3.0.1-45601d2e33-37ad8d0257.zip/node_modules/combokeys/Combokeys/prototype/trigger.js"),e.exports.prototype.reset=n("./.yarn/cache/combokeys-npm-3.0.1-45601d2e33-37ad8d0257.zip/node_modules/combokeys/Combokeys/prototype/reset.js"),e.exports.prototype.stopCallback=n("./.yarn/cache/combokeys-npm-3.0.1-45601d2e33-37ad8d0257.zip/node_modules/combokeys/Combokeys/prototype/stopCallback.js"),e.exports.prototype.handleKey=n("./.yarn/cache/combokeys-npm-3.0.1-45601d2e33-37ad8d0257.zip/node_modules/combokeys/Combokeys/prototype/handleKey.js"),e.exports.prototype.addEvents=n("./.yarn/cache/combokeys-npm-3.0.1-45601d2e33-37ad8d0257.zip/node_modules/combokeys/Combokeys/prototype/addEvents.js"),e.exports.prototype.bindSingle=n("./.yarn/cache/combokeys-npm-3.0.1-45601d2e33-37ad8d0257.zip/node_modules/combokeys/Combokeys/prototype/bindSingle.js"),e.exports.prototype.getKeyInfo=n("./.yarn/cache/combokeys-npm-3.0.1-45601d2e33-37ad8d0257.zip/node_modules/combokeys/Combokeys/prototype/getKeyInfo.js"),e.exports.prototype.pickBestAction=n("./.yarn/cache/combokeys-npm-3.0.1-45601d2e33-37ad8d0257.zip/node_modules/combokeys/Combokeys/prototype/pickBestAction.js"),e.exports.prototype.getReverseMap=n("./.yarn/cache/combokeys-npm-3.0.1-45601d2e33-37ad8d0257.zip/node_modules/combokeys/Combokeys/prototype/getReverseMap.js"),e.exports.prototype.getMatches=n("./.yarn/cache/combokeys-npm-3.0.1-45601d2e33-37ad8d0257.zip/node_modules/combokeys/Combokeys/prototype/getMatches.js"),e.exports.prototype.resetSequences=n("./.yarn/cache/combokeys-npm-3.0.1-45601d2e33-37ad8d0257.zip/node_modules/combokeys/Combokeys/prototype/resetSequences.js"),e.exports.prototype.fireCallback=n("./.yarn/cache/combokeys-npm-3.0.1-45601d2e33-37ad8d0257.zip/node_modules/combokeys/Combokeys/prototype/fireCallback.js"),e.exports.prototype.bindSequence=n("./.yarn/cache/combokeys-npm-3.0.1-45601d2e33-37ad8d0257.zip/node_modules/combokeys/Combokeys/prototype/bindSequence.js"),e.exports.prototype.resetSequenceTimer=n("./.yarn/cache/combokeys-npm-3.0.1-45601d2e33-37ad8d0257.zip/node_modules/combokeys/Combokeys/prototype/resetSequenceTimer.js"),e.exports.prototype.detach=n("./.yarn/cache/combokeys-npm-3.0.1-45601d2e33-37ad8d0257.zip/node_modules/combokeys/Combokeys/prototype/detach.js"),e.exports.instances=[],e.exports.reset=n("./.yarn/cache/combokeys-npm-3.0.1-45601d2e33-37ad8d0257.zip/node_modules/combokeys/Combokeys/reset.js"),e.exports.REVERSE_MAP=null},"./.yarn/cache/combokeys-npm-3.0.1-45601d2e33-37ad8d0257.zip/node_modules/combokeys/Combokeys/prototype/addEvents.js":(e,t,n)=>{"use strict";e.exports=function(){var e=this,t=n("./.yarn/cache/combokeys-npm-3.0.1-45601d2e33-37ad8d0257.zip/node_modules/combokeys/Combokeys/prototype/dom-event.js"),r=e.element;e.eventHandler=n("./.yarn/cache/combokeys-npm-3.0.1-45601d2e33-37ad8d0257.zip/node_modules/combokeys/Combokeys/prototype/handleKeyEvent.js").bind(e),t(r,"keypress",e.eventHandler),t(r,"keydown",e.eventHandler),t(r,"keyup",e.eventHandler)}},"./.yarn/cache/combokeys-npm-3.0.1-45601d2e33-37ad8d0257.zip/node_modules/combokeys/Combokeys/prototype/bind.js":e=>{"use strict";e.exports=function(e,t,n){return e=e instanceof Array?e:[e],this.bindMultiple(e,t,n),this}},"./.yarn/cache/combokeys-npm-3.0.1-45601d2e33-37ad8d0257.zip/node_modules/combokeys/Combokeys/prototype/bindMultiple.js":e=>{"use strict";e.exports=function(e,t,n){for(var r=0;r<e.length;++r)this.bindSingle(e[r],t,n)}},"./.yarn/cache/combokeys-npm-3.0.1-45601d2e33-37ad8d0257.zip/node_modules/combokeys/Combokeys/prototype/bindSequence.js":(e,t,n)=>{"use strict";e.exports=function(e,t,r,a){var s=this;function o(t){return function(){s.nextExpectedAction=t,++s.sequenceLevels[e],s.resetSequenceTimer()}}function i(t){var o;s.fireCallback(r,t,e),"keyup"!==a&&(o=n("./.yarn/cache/combokeys-npm-3.0.1-45601d2e33-37ad8d0257.zip/node_modules/combokeys/helpers/characterFromEvent.js"),s.ignoreNextKeyup=o(t)),setTimeout((function(){s.resetSequences()}),10)}s.sequenceLevels[e]=0;for(var l=0;l<t.length;++l){var c=l+1===t.length?i:o(a||s.getKeyInfo(t[l+1]).action);s.bindSingle(t[l],c,a,e,l)}}},"./.yarn/cache/combokeys-npm-3.0.1-45601d2e33-37ad8d0257.zip/node_modules/combokeys/Combokeys/prototype/bindSingle.js":e=>{"use strict";e.exports=function(e,t,n,r,a){var s=this;s.directMap[e+":"+n]=t;var o,i=(e=e.replace(/\s+/g," ")).split(" ");i.length>1?s.bindSequence(e,i,t,n):(o=s.getKeyInfo(e,n),s.callbacks[o.key]=s.callbacks[o.key]||[],s.getMatches(o.key,o.modifiers,{type:o.action},r,e,a),s.callbacks[o.key][r?"unshift":"push"]({callback:t,modifiers:o.modifiers,action:o.action,seq:r,level:a,combo:e}))}},"./.yarn/cache/combokeys-npm-3.0.1-45601d2e33-37ad8d0257.zip/node_modules/combokeys/Combokeys/prototype/detach.js":(e,t,n)=>{var r=n("./.yarn/cache/combokeys-npm-3.0.1-45601d2e33-37ad8d0257.zip/node_modules/combokeys/Combokeys/prototype/dom-event.js").off;e.exports=function(){var e=this,t=e.element;r(t,"keypress",e.eventHandler),r(t,"keydown",e.eventHandler),r(t,"keyup",e.eventHandler)}},"./.yarn/cache/combokeys-npm-3.0.1-45601d2e33-37ad8d0257.zip/node_modules/combokeys/Combokeys/prototype/dom-event.js":e=>{function t(e,t,n,r){return!e.addEventListener&&(t="on"+t),(e.addEventListener||e.attachEvent).call(e,t,n,r),n}e.exports=t,e.exports.on=t,e.exports.off=function(e,t,n,r){return!e.removeEventListener&&(t="on"+t),(e.removeEventListener||e.detachEvent).call(e,t,n,r),n}},"./.yarn/cache/combokeys-npm-3.0.1-45601d2e33-37ad8d0257.zip/node_modules/combokeys/Combokeys/prototype/fireCallback.js":(e,t,n)=>{"use strict";e.exports=function(e,t,r,a){this.stopCallback(t,t.target||t.srcElement,r,a)||!1===e(t,r)&&(n("./.yarn/cache/combokeys-npm-3.0.1-45601d2e33-37ad8d0257.zip/node_modules/combokeys/helpers/preventDefault.js")(t),n("./.yarn/cache/combokeys-npm-3.0.1-45601d2e33-37ad8d0257.zip/node_modules/combokeys/helpers/stopPropagation.js")(t))}},"./.yarn/cache/combokeys-npm-3.0.1-45601d2e33-37ad8d0257.zip/node_modules/combokeys/Combokeys/prototype/getKeyInfo.js":(e,t,n)=>{"use strict";e.exports=function(e,t){var r,a,s,o,i,l,c=[];for(r=n("./.yarn/cache/combokeys-npm-3.0.1-45601d2e33-37ad8d0257.zip/node_modules/combokeys/helpers/keysFromString.js")(e),o=n("./.yarn/cache/combokeys-npm-3.0.1-45601d2e33-37ad8d0257.zip/node_modules/combokeys/helpers/special-aliases.js"),i=n("./.yarn/cache/combokeys-npm-3.0.1-45601d2e33-37ad8d0257.zip/node_modules/combokeys/helpers/shift-map.js"),l=n("./.yarn/cache/combokeys-npm-3.0.1-45601d2e33-37ad8d0257.zip/node_modules/combokeys/helpers/isModifier.js"),s=0;s<r.length;++s)o[a=r[s]]&&(a=o[a]),t&&"keypress"!==t&&i[a]&&(a=i[a],c.push("shift")),l(a)&&c.push(a);return{key:a,modifiers:c,action:t=this.pickBestAction(a,c,t)}}},"./.yarn/cache/combokeys-npm-3.0.1-45601d2e33-37ad8d0257.zip/node_modules/combokeys/Combokeys/prototype/getMatches.js":(e,t,n)=>{"use strict";e.exports=function(e,t,r,a,s,o){var i,l,c,d,p=this,u=[],h=r.type;"keypress"!==h||r.code&&"Arrow"===r.code.slice(0,5)||(p.callbacks["any-character"]||[]).forEach((function(e){u.push(e)}));if(!p.callbacks[e])return u;for(c=n("./.yarn/cache/combokeys-npm-3.0.1-45601d2e33-37ad8d0257.zip/node_modules/combokeys/helpers/isModifier.js"),"keyup"===h&&c(e)&&(t=[e]),i=0;i<p.callbacks[e].length;++i)if(l=p.callbacks[e][i],(a||!l.seq||p.sequenceLevels[l.seq]===l.level)&&h===l.action&&(d=n("./.yarn/cache/combokeys-npm-3.0.1-45601d2e33-37ad8d0257.zip/node_modules/combokeys/Combokeys/prototype/modifiersMatch.js"),"keypress"===h&&!r.metaKey&&!r.ctrlKey||d(t,l.modifiers))){var m=!a&&l.combo===s,g=a&&l.seq===a&&l.level===o;(m||g)&&p.callbacks[e].splice(i,1),u.push(l)}return u}},"./.yarn/cache/combokeys-npm-3.0.1-45601d2e33-37ad8d0257.zip/node_modules/combokeys/Combokeys/prototype/getReverseMap.js":(e,t,n)=>{"use strict";e.exports=function(){var e,t=this.constructor;if(!t.REVERSE_MAP)for(var r in t.REVERSE_MAP={},e=n("./.yarn/cache/combokeys-npm-3.0.1-45601d2e33-37ad8d0257.zip/node_modules/combokeys/helpers/special-keys-map.js"))r>95&&r<112||e.hasOwnProperty(r)&&(t.REVERSE_MAP[e[r]]=r);return t.REVERSE_MAP}},"./.yarn/cache/combokeys-npm-3.0.1-45601d2e33-37ad8d0257.zip/node_modules/combokeys/Combokeys/prototype/handleKey.js":(e,t,n)=>{"use strict";e.exports=function(e,t,r){var a,s,o,i,l=this,c={},d=0,p=!1;for(a=l.getMatches(e,t,r),s=0;s<a.length;++s)a[s].seq&&(d=Math.max(d,a[s].level));for(s=0;s<a.length;++s)if(a[s].seq){if(a[s].level!==d)continue;p=!0,c[a[s].seq]=1,l.fireCallback(a[s].callback,r,a[s].combo,a[s].seq)}else p||l.fireCallback(a[s].callback,r,a[s].combo);i="keypress"===r.type&&l.ignoreNextKeypress,o=n("./.yarn/cache/combokeys-npm-3.0.1-45601d2e33-37ad8d0257.zip/node_modules/combokeys/helpers/isModifier.js"),r.type!==l.nextExpectedAction||o(e)||i||l.resetSequences(c),l.ignoreNextKeypress=p&&"keydown"===r.type}},"./.yarn/cache/combokeys-npm-3.0.1-45601d2e33-37ad8d0257.zip/node_modules/combokeys/Combokeys/prototype/handleKeyEvent.js":(e,t,n)=>{"use strict";e.exports=function(e){var t,r=this;"number"!=typeof e.which&&(e.which=e.keyCode);var a=n("./.yarn/cache/combokeys-npm-3.0.1-45601d2e33-37ad8d0257.zip/node_modules/combokeys/helpers/characterFromEvent.js")(e);void 0!==a&&("keyup"!==e.type||r.ignoreNextKeyup!==a?(t=n("./.yarn/cache/combokeys-npm-3.0.1-45601d2e33-37ad8d0257.zip/node_modules/combokeys/helpers/eventModifiers.js"),r.handleKey(a,t(e),e)):r.ignoreNextKeyup=!1)}},"./.yarn/cache/combokeys-npm-3.0.1-45601d2e33-37ad8d0257.zip/node_modules/combokeys/Combokeys/prototype/modifiersMatch.js":e=>{"use strict";e.exports=function(e,t){return e.sort().join(",")===t.sort().join(",")}},"./.yarn/cache/combokeys-npm-3.0.1-45601d2e33-37ad8d0257.zip/node_modules/combokeys/Combokeys/prototype/pickBestAction.js":e=>{"use strict";e.exports=function(e,t,n){return n||(n=this.getReverseMap()[e]?"keydown":"keypress"),"keypress"===n&&t.length&&(n="keydown"),n}},"./.yarn/cache/combokeys-npm-3.0.1-45601d2e33-37ad8d0257.zip/node_modules/combokeys/Combokeys/prototype/reset.js":e=>{"use strict";e.exports=function(){return this.callbacks={},this.directMap={},this}},"./.yarn/cache/combokeys-npm-3.0.1-45601d2e33-37ad8d0257.zip/node_modules/combokeys/Combokeys/prototype/resetSequenceTimer.js":e=>{"use strict";e.exports=function(){var e=this;clearTimeout(e.resetTimer),e.resetTimer=setTimeout((function(){e.resetSequences()}),1e3)}},"./.yarn/cache/combokeys-npm-3.0.1-45601d2e33-37ad8d0257.zip/node_modules/combokeys/Combokeys/prototype/resetSequences.js":e=>{"use strict";e.exports=function(e){var t=this;e=e||{};var n,r=!1;for(n in t.sequenceLevels)e[n]?r=!0:t.sequenceLevels[n]=0;r||(t.nextExpectedAction=!1)}},"./.yarn/cache/combokeys-npm-3.0.1-45601d2e33-37ad8d0257.zip/node_modules/combokeys/Combokeys/prototype/stopCallback.js":e=>{"use strict";e.exports=function(e,t){if((" "+t.className+" ").indexOf(" combokeys ")>-1)return!1;var n=t.tagName.toLowerCase();return"input"===n||"select"===n||"textarea"===n||t.isContentEditable}},"./.yarn/cache/combokeys-npm-3.0.1-45601d2e33-37ad8d0257.zip/node_modules/combokeys/Combokeys/prototype/trigger.js":e=>{"use strict";e.exports=function(e,t){return this.directMap[e+":"+t]&&this.directMap[e+":"+t]({},e),this}},"./.yarn/cache/combokeys-npm-3.0.1-45601d2e33-37ad8d0257.zip/node_modules/combokeys/Combokeys/prototype/unbind.js":e=>{"use strict";e.exports=function(e,t){return this.bind(e,(function(){}),t)}},"./.yarn/cache/combokeys-npm-3.0.1-45601d2e33-37ad8d0257.zip/node_modules/combokeys/Combokeys/reset.js":e=>{"use strict";e.exports=function(){this.instances.forEach((function(e){e.reset()}))}},"./.yarn/cache/combokeys-npm-3.0.1-45601d2e33-37ad8d0257.zip/node_modules/combokeys/helpers/characterFromEvent.js":(e,t,n)=>{"use strict";e.exports=function(e){var t,r;if(t=n("./.yarn/cache/combokeys-npm-3.0.1-45601d2e33-37ad8d0257.zip/node_modules/combokeys/helpers/special-keys-map.js"),r=n("./.yarn/cache/combokeys-npm-3.0.1-45601d2e33-37ad8d0257.zip/node_modules/combokeys/helpers/special-characters-map.js"),"keypress"===e.type){var a=String.fromCharCode(e.which);return e.shiftKey||(a=a.toLowerCase()),a}return void 0!==t[e.which]?t[e.which]:void 0!==r[e.which]?r[e.which]:String.fromCharCode(e.which).toLowerCase()}},"./.yarn/cache/combokeys-npm-3.0.1-45601d2e33-37ad8d0257.zip/node_modules/combokeys/helpers/eventModifiers.js":e=>{"use strict";e.exports=function(e){var t=[];return e.shiftKey&&t.push("shift"),e.altKey&&t.push("alt"),e.ctrlKey&&t.push("ctrl"),e.metaKey&&t.push("meta"),t}},"./.yarn/cache/combokeys-npm-3.0.1-45601d2e33-37ad8d0257.zip/node_modules/combokeys/helpers/isModifier.js":e=>{"use strict";e.exports=function(e){return"shift"===e||"ctrl"===e||"alt"===e||"meta"===e}},"./.yarn/cache/combokeys-npm-3.0.1-45601d2e33-37ad8d0257.zip/node_modules/combokeys/helpers/keysFromString.js":e=>{"use strict";e.exports=function(e){return"+"===e?["+"]:e.split("+")}},"./.yarn/cache/combokeys-npm-3.0.1-45601d2e33-37ad8d0257.zip/node_modules/combokeys/helpers/preventDefault.js":e=>{"use strict";e.exports=function(e){e.preventDefault?e.preventDefault():e.returnValue=!1}},"./.yarn/cache/combokeys-npm-3.0.1-45601d2e33-37ad8d0257.zip/node_modules/combokeys/helpers/shift-map.js":e=>{"use strict";e.exports={"~":"`","!":"1","@":"2","#":"3",$:"4","%":"5","^":"6","&":"7","*":"8","(":"9",")":"0",_:"-","+":"=",":":";",'"':"'","<":",",">":".","?":"/","|":"\\"}},"./.yarn/cache/combokeys-npm-3.0.1-45601d2e33-37ad8d0257.zip/node_modules/combokeys/helpers/special-aliases.js":e=>{"use strict";e.exports={option:"alt",command:"meta",return:"enter",escape:"esc",mod:/Mac|iPod|iPhone|iPad/.test(navigator.platform)?"meta":"ctrl"}},"./.yarn/cache/combokeys-npm-3.0.1-45601d2e33-37ad8d0257.zip/node_modules/combokeys/helpers/special-characters-map.js":e=>{"use strict";e.exports={106:"*",107:"plus",109:"minus",110:".",111:"/",186:";",187:"=",188:",",189:"-",190:".",191:"/",192:"`",219:"[",220:"\\",221:"]",222:"'"}},"./.yarn/cache/combokeys-npm-3.0.1-45601d2e33-37ad8d0257.zip/node_modules/combokeys/helpers/special-keys-map.js":e=>{"use strict";e.exports={8:"backspace",9:"tab",13:"enter",16:"shift",17:"ctrl",18:"alt",20:"capslock",27:"esc",32:"space",33:"pageup",34:"pagedown",35:"end",36:"home",37:"left",38:"up",39:"right",40:"down",45:"ins",46:"del",91:"meta",93:"meta",173:"minus",187:"plus",189:"minus",224:"meta"};for(var t=1;t<20;++t)e.exports[111+t]="f"+t;for(t=0;t<=9;++t)e.exports[t+96]=t},"./.yarn/cache/combokeys-npm-3.0.1-45601d2e33-37ad8d0257.zip/node_modules/combokeys/helpers/stopPropagation.js":e=>{"use strict";e.exports=function(e){e.stopPropagation?e.stopPropagation():e.cancelBubble=!0}},"./.yarn/cache/copy-to-clipboard-npm-3.3.1-18029bce99-3c7b1c333d.zip/node_modules/copy-to-clipboard/index.js":(e,t,n)=>{"use strict";var r=n("./.yarn/cache/toggle-selection-npm-1.0.6-c506b73005-a90dc80ed1.zip/node_modules/toggle-selection/index.js"),a={"text/plain":"Text","text/html":"Url",default:"Text"};e.exports=function(e,t){var n,s,o,i,l,c,d=!1;t||(t={}),n=t.debug||!1;try{if(o=r(),i=document.createRange(),l=document.getSelection(),(c=document.createElement("span")).textContent=e,c.style.all="unset",c.style.position="fixed",c.style.top=0,c.style.clip="rect(0, 0, 0, 0)",c.style.whiteSpace="pre",c.style.webkitUserSelect="text",c.style.MozUserSelect="text",c.style.msUserSelect="text",c.style.userSelect="text",c.addEventListener("copy",(function(r){if(r.stopPropagation(),t.format)if(r.preventDefault(),void 0===r.clipboardData){n&&console.warn("unable to use e.clipboardData"),n&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var s=a[t.format]||a.default;window.clipboardData.setData(s,e)}else r.clipboardData.clearData(),r.clipboardData.setData(t.format,e);t.onCopy&&(r.preventDefault(),t.onCopy(r.clipboardData))})),document.body.appendChild(c),i.selectNodeContents(c),l.addRange(i),!document.execCommand("copy"))throw new Error("copy command was unsuccessful");d=!0}catch(r){n&&console.error("unable to copy using execCommand: ",r),n&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(t.format||"text",e),t.onCopy&&t.onCopy(window.clipboardData),d=!0}catch(r){n&&console.error("unable to copy using clipboardData: ",r),n&&console.error("falling back to prompt"),s=function(e){var t=(/mac os x/i.test(navigator.userAgent)?"⌘":"Ctrl")+"+C";return e.replace(/#{\s*key\s*}/g,t)}("message"in t?t.message:"Copy to clipboard: #{key}, Enter"),window.prompt(s,e)}}finally{l&&("function"==typeof l.removeRange?l.removeRange(i):l.removeAllRanges()),c&&document.body.removeChild(c),o()}return d}},"./.yarn/cache/deep-freeze-npm-0.0.1-12d684fc1a-1e43c98e44.zip/node_modules/deep-freeze/index.js":e=>{e.exports=function e(t){return Object.freeze(t),Object.getOwnPropertyNames(t).forEach((function(n){!t.hasOwnProperty(n)||null===t[n]||"object"!=typeof t[n]&&"function"!=typeof t[n]||Object.isFrozen(t[n])||e(t[n])})),t}},"./.yarn/cache/fbjs-npm-0.8.18-79fe681dcf-668731b946.zip/node_modules/fbjs/lib/shallowEqual.js":e=>{"use strict";var t=Object.prototype.hasOwnProperty;function n(e,t){return e===t?0!==e||0!==t||1/e==1/t:e!=e&&t!=t}e.exports=function(e,r){if(n(e,r))return!0;if("object"!=typeof e||null===e||"object"!=typeof r||null===r)return!1;var a=Object.keys(e),s=Object.keys(r);if(a.length!==s.length)return!1;for(var o=0;o<a.length;o++)if(!t.call(r,a[o])||!n(e[a[o]],r[a[o]]))return!1;return!0}},"./.yarn/cache/fuzzy-npm-0.1.3-a0dfe08bd0-acc09c6173.zip/node_modules/fuzzy/lib/fuzzy.js":e=>{var t;t={},e.exports=t,t.simpleFilter=function(e,n){return n.filter((function(n){return t.test(e,n)}))},t.test=function(e,n){return null!==t.match(e,n)},t.match=function(e,t,n){n=n||{};var r,a=0,s=[],o=t.length,i=0,l=0,c=n.pre||"",d=n.post||"",p=n.caseSensitive&&t||t.toLowerCase();e=n.caseSensitive&&e||e.toLowerCase();for(var u=0;u<o;u++)r=t[u],p[u]===e[a]?(r=c+r+d,a+=1,l+=1+l):l=0,i+=l,s[s.length]=r;return a===e.length?(i=p===e?1/0:i,{rendered:s.join(""),score:i}):null},t.filter=function(e,n,r){return n&&0!==n.length?"string"!=typeof e?n:(r=r||{},n.reduce((function(n,a,s,o){var i=a;r.extract&&(i=r.extract(a));var l=t.match(e,i,r);return null!=l&&(n[n.length]={string:l.rendered,score:l.score,index:s,original:a}),n}),[]).sort((function(e,t){var n=t.score-e.score;return n||e.index-t.index}))):[]}},"./.yarn/cache/hoist-non-react-statics-npm-2.5.5-e15c7ba611-ee2d05e5c7.zip/node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js":e=>{"use strict";var t={childContextTypes:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},n={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},r=Object.defineProperty,a=Object.getOwnPropertyNames,s=Object.getOwnPropertySymbols,o=Object.getOwnPropertyDescriptor,i=Object.getPrototypeOf,l=i&&i(Object);e.exports=function e(c,d,p){if("string"!=typeof d){if(l){var u=i(d);u&&u!==l&&e(c,u,p)}var h=a(d);s&&(h=h.concat(s(d)));for(var m=0;m<h.length;++m){var g=h[m];if(!(t[g]||n[g]||p&&p[g])){var f=o(d,g);try{r(c,g,f)}catch(e){}}}return c}return c}},"./.yarn/cache/json-markup-npm-1.1.3-2762e9da70-aa4e1935fc.zip/node_modules/json-markup/index.js":e=>{"use strict";var t="    ";function n(e){return e?function(t){return'style="'+(n=e["."+t],r="",n&&Object.keys(n).forEach((function(e){r+=e+":"+n[e]+";"})),r+'"');var n,r}:function(e){return'class="'+e+'"'}}function r(e){return e.replace(/</g,"&lt;").replace(/>/g,"&gt;")}e.exports=function(e,a){var s="",o=n(a),i=function(e,n,r,a){if(!e.length)return n+" "+r;var o=n+"\n";return s+=t,e.forEach((function(t,n){o+=s+a(t)+(n<e.length-1?",":"")+"\n"})),s=s.slice(0,-t.length),o+s+r};return"<div "+o("json-markup")+">"+function e(t){if(void 0===t)return"";switch(function(e){return null===e?"null":Array.isArray(e)?"array":"string"==typeof e&&/^https?:/.test(e)?"link":"object"==typeof e&&"function"==typeof e.toISOString?"date":typeof e}(t)){case"boolean":return"<span "+o("json-markup-bool")+">"+t+"</span>";case"number":return"<span "+o("json-markup-number")+">"+t+"</span>";case"date":return'<span class="json-markup-string">"'+r(t.toISOString())+'"</span>';case"null":return"<span "+o("json-markup-null")+">null</span>";case"string":return"<span "+o("json-markup-string")+'>"'+r(t.replace(/\n/g,"\n"+s))+'"</span>';case"link":return"<span "+o("json-markup-string")+'>"<a href="'+r(t)+'">'+r(t)+'</a>"</span>';case"array":return i(t,"[","]",e);case"object":var n=Object.keys(t).filter((function(e){return void 0!==t[e]}));return i(n,"{","}",(function(n){return"<span "+o("json-markup-key")+'>"'+n+'":</span> '+e(t[n])}))}return""}(e)+"</div>"}},"./.yarn/cache/symbol-observable-npm-1.2.0-9e812a0a39-48ffbc22e3.zip/node_modules/symbol-observable/es/index.js":(e,t,n)=>{"use strict";n.d(t,{Z:()=>r}),e=n.hmd(e);const r=function(e){var t,n=e.Symbol;return"function"==typeof n?n.observable?t=n.observable:(t=n("observable"),n.observable=t):t="@@observable",t}("undefined"!=typeof self?self:"undefined"!=typeof window?window:void 0!==n.g?n.g:e)},"./.yarn/cache/toggle-selection-npm-1.0.6-c506b73005-a90dc80ed1.zip/node_modules/toggle-selection/index.js":e=>{e.exports=function(){var e=document.getSelection();if(!e.rangeCount)return function(){};for(var t=document.activeElement,n=[],r=0;r<e.rangeCount;r++)n.push(e.getRangeAt(r));switch(t.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":t.blur();break;default:t=null}return e.removeAllRanges(),function(){"Caret"===e.type&&e.removeAllRanges(),e.rangeCount||n.forEach((function(t){e.addRange(t)})),t&&t.focus()}}}}]);
//# sourceMappingURL=3703.787ecc600122eb73aeab.js.map