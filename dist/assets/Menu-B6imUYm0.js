import{r as l,b as j,f as Le,bl as ke,bi as X,h as Pe,j as H,E as Ie,_ as E,g as ge,a as ve,s as U,au as Oe,ag as Fe,u as be,bm as pe,bn as _e,bo as Y,c as ee,k as ze,d as ye,aK as Ne,b3 as $e,aV as je}from"./index-Bmk-jJbE.js";const He=["actions","autoFocus","autoFocusItem","children","className","disabledItemsFocusable","disableListWrap","onKeyDown","variant"];function Q(t,e,o){return t===e?t.firstChild:e&&e.nextElementSibling?e.nextElementSibling:o?null:t.firstChild}function fe(t,e,o){return t===e?o?t.firstChild:t.lastChild:e&&e.previousElementSibling?e.previousElementSibling:o?null:t.lastChild}function xe(t,e){if(e===void 0)return!0;let o=t.innerText;return o===void 0&&(o=t.textContent),o=o.trim().toLowerCase(),o.length===0?!1:e.repeating?o[0]===e.keys[0]:o.indexOf(e.keys.join(""))===0}function W(t,e,o,R,y,w){let f=!1,d=y(t,e,e?o:!1);for(;d;){if(d===t.firstChild){if(f)return!1;f=!0}const u=R?!1:d.disabled||d.getAttribute("aria-disabled")==="true";if(!d.hasAttribute("tabindex")||!xe(d,w)||u)d=y(t,d,o);else return d.focus(),!0}return!1}const Ke=l.forwardRef(function(e,o){const{actions:R,autoFocus:y=!1,autoFocusItem:w=!1,children:f,className:d,disabledItemsFocusable:u=!1,disableListWrap:P=!1,onKeyDown:S,variant:x="selectedMenu"}=e,z=j(e,He),g=l.useRef(null),K=l.useRef({keys:[],repeating:!0,previousKeyMatched:!0,lastTime:null});Le(()=>{y&&g.current.focus()},[y]),l.useImperativeHandle(R,()=>({adjustStyleForScrollbar:(s,{direction:i})=>{const c=!g.current.style.width;if(s.clientHeight<g.current.clientHeight&&c){const h=`${ke(X(s))}px`;g.current.style[i==="rtl"?"paddingLeft":"paddingRight"]=h,g.current.style.width=`calc(100% + ${h})`}return g.current}}),[]);const O=s=>{const i=g.current,c=s.key,h=X(i).activeElement;if(c==="ArrowDown")s.preventDefault(),W(i,h,P,u,Q);else if(c==="ArrowUp")s.preventDefault(),W(i,h,P,u,fe);else if(c==="Home")s.preventDefault(),W(i,null,P,u,Q);else if(c==="End")s.preventDefault(),W(i,null,P,u,fe);else if(c.length===1){const n=K.current,C=c.toLowerCase(),L=performance.now();n.keys.length>0&&(L-n.lastTime>500?(n.keys=[],n.repeating=!0,n.previousKeyMatched=!0):n.repeating&&C!==n.keys[0]&&(n.repeating=!1)),n.lastTime=L,n.keys.push(C);const k=h&&!n.repeating&&xe(h,n);n.previousKeyMatched&&(k||W(i,h,!1,u,Q,n))?s.preventDefault():n.previousKeyMatched=!1}S&&S(s)},p=Pe(g,o);let r=-1;l.Children.forEach(f,(s,i)=>{if(!l.isValidElement(s)){r===i&&(r+=1,r>=f.length&&(r=-1));return}s.props.disabled||(x==="selectedMenu"&&s.props.selected||r===-1)&&(r=i),r===i&&(s.props.disabled||s.props.muiSkipListHighlight||s.type.muiSkipListHighlight)&&(r+=1,r>=f.length&&(r=-1))});const F=l.Children.map(f,(s,i)=>{if(i===r){const c={};return w&&(c.autoFocus=!0),s.props.tabIndex===void 0&&x==="selectedMenu"&&(c.tabIndex=0),l.cloneElement(s,c)}return s});return H.jsx(Ie,E({role:"menu",ref:p,className:d,onKeyDown:O,tabIndex:y?0:-1},z,{children:F}))});function Ae(t){return ge("MuiPopover",t)}const We=ve("MuiPopover",["root","paper"]),it=We,Ue=["onEntering"],Ve=["action","anchorEl","anchorOrigin","anchorPosition","anchorReference","children","className","container","elevation","marginThreshold","open","PaperProps","slots","slotProps","transformOrigin","TransitionComponent","transitionDuration","TransitionProps","disableScrollLock"],Ge=["slotProps"];function de(t,e){let o=0;return typeof e=="number"?o=e:e==="center"?o=t.height/2:e==="bottom"&&(o=t.height),o}function he(t,e){let o=0;return typeof e=="number"?o=e:e==="center"?o=t.width/2:e==="right"&&(o=t.width),o}function me(t){return[t.horizontal,t.vertical].map(e=>typeof e=="number"?`${e}px`:e).join(" ")}function Z(t){return typeof t=="function"?t():t}const Be=t=>{const{classes:e}=t;return ye({root:["root"],paper:["paper"]},Ae,e)},Xe=U(Oe,{name:"MuiPopover",slot:"Root",overridesResolver:(t,e)=>e.root})({}),we=U(Fe,{name:"MuiPopover",slot:"Paper",overridesResolver:(t,e)=>e.paper})({position:"absolute",overflowY:"auto",overflowX:"hidden",minWidth:16,minHeight:16,maxWidth:"calc(100% - 32px)",maxHeight:"calc(100% - 32px)",outline:0}),Ye=l.forwardRef(function(e,o){var R,y,w;const f=be({props:e,name:"MuiPopover"}),{action:d,anchorEl:u,anchorOrigin:P={vertical:"top",horizontal:"left"},anchorPosition:S,anchorReference:x="anchorEl",children:z,className:g,container:K,elevation:O=8,marginThreshold:p=16,open:r,PaperProps:F={},slots:s,slotProps:i,transformOrigin:c={vertical:"top",horizontal:"left"},TransitionComponent:h=Ne,transitionDuration:n="auto",TransitionProps:{onEntering:C}={},disableScrollLock:L=!1}=f,k=j(f.TransitionProps,Ue),q=j(f,Ve),T=(R=i==null?void 0:i.paper)!=null?R:F,I=l.useRef(),V=Pe(I,T.ref),A=E({},f,{anchorOrigin:P,anchorReference:x,elevation:O,marginThreshold:p,externalPaperSlotProps:T,transformOrigin:c,TransitionComponent:h,transitionDuration:n,TransitionProps:k}),G=Be(A),B=l.useCallback(()=>{if(x==="anchorPosition")return S;const a=Z(u),b=(a&&a.nodeType===1?a:X(I.current).body).getBoundingClientRect();return{top:b.top+de(b,P.vertical),left:b.left+he(b,P.horizontal)}},[u,P.horizontal,P.vertical,S,x]),v=l.useCallback(a=>({vertical:de(a,c.vertical),horizontal:he(a,c.horizontal)}),[c.horizontal,c.vertical]),_=l.useCallback(a=>{const m={width:a.offsetWidth,height:a.offsetHeight},b=v(m);if(x==="none")return{top:null,left:null,transformOrigin:me(b)};const ne=B();let N=ne.top-b.vertical,$=ne.left-b.horizontal;const ie=N+m.height,le=$+m.width,ae=pe(Z(u)),ce=ae.innerHeight-p,ue=ae.innerWidth-p;if(p!==null&&N<p){const M=N-p;N-=M,b.vertical+=M}else if(p!==null&&ie>ce){const M=ie-ce;N-=M,b.vertical+=M}if(p!==null&&$<p){const M=$-p;$-=M,b.horizontal+=M}else if(le>ue){const M=le-ue;$-=M,b.horizontal+=M}return{top:`${Math.round(N)}px`,left:`${Math.round($)}px`,transformOrigin:me(b)}},[u,x,B,v,p]),[Me,te]=l.useState(r),D=l.useCallback(()=>{const a=I.current;if(!a)return;const m=_(a);m.top!==null&&(a.style.top=m.top),m.left!==null&&(a.style.left=m.left),a.style.transformOrigin=m.transformOrigin,te(!0)},[_]);l.useEffect(()=>(L&&window.addEventListener("scroll",D),()=>window.removeEventListener("scroll",D)),[u,L,D]);const Ee=(a,m)=>{C&&C(a,m),D()},Re=()=>{te(!1)};l.useEffect(()=>{r&&D()}),l.useImperativeHandle(d,()=>r?{updatePosition:()=>{D()}}:null,[r,D]),l.useEffect(()=>{if(!r)return;const a=_e(()=>{D()}),m=pe(u);return m.addEventListener("resize",a),()=>{a.clear(),m.removeEventListener("resize",a)}},[u,r,D]);let oe=n;n==="auto"&&!h.muiSupportAuto&&(oe=void 0);const Se=K||(u?X(Z(u)).body:void 0),J=(y=s==null?void 0:s.root)!=null?y:Xe,se=(w=s==null?void 0:s.paper)!=null?w:we,Ce=Y({elementType:se,externalSlotProps:E({},T,{style:Me?T.style:E({},T.style,{opacity:0})}),additionalProps:{elevation:O,ref:V},ownerState:A,className:ee(G.paper,T==null?void 0:T.className)}),re=Y({elementType:J,externalSlotProps:(i==null?void 0:i.root)||{},externalForwardedProps:q,additionalProps:{ref:o,slotProps:{backdrop:{invisible:!0}},container:Se,open:r},ownerState:A,className:ee(G.root,g)}),{slotProps:Te}=re,De=j(re,Ge);return H.jsx(J,E({},De,!ze(J)&&{slotProps:Te,disableScrollLock:L},{children:H.jsx(h,E({appear:!0,in:r,onEntering:Ee,onExited:Re,timeout:oe},k,{children:H.jsx(se,E({},Ce,{children:z}))}))}))});function qe(t){return ge("MuiMenu",t)}ve("MuiMenu",["root","paper","list"]);const Je=["onEntering"],Qe=["autoFocus","children","className","disableAutoFocusItem","MenuListProps","onClose","open","PaperProps","PopoverClasses","transitionDuration","TransitionProps","variant","slots","slotProps"],Ze={vertical:"top",horizontal:"right"},et={vertical:"top",horizontal:"left"},tt=t=>{const{classes:e}=t;return ye({root:["root"],paper:["paper"],list:["list"]},qe,e)},ot=U(Ye,{shouldForwardProp:t=>$e(t)||t==="classes",name:"MuiMenu",slot:"Root",overridesResolver:(t,e)=>e.root})({}),st=U(we,{name:"MuiMenu",slot:"Paper",overridesResolver:(t,e)=>e.paper})({maxHeight:"calc(100% - 96px)",WebkitOverflowScrolling:"touch"}),rt=U(Ke,{name:"MuiMenu",slot:"List",overridesResolver:(t,e)=>e.list})({outline:0}),lt=l.forwardRef(function(e,o){var R,y;const w=be({props:e,name:"MuiMenu"}),{autoFocus:f=!0,children:d,className:u,disableAutoFocusItem:P=!1,MenuListProps:S={},onClose:x,open:z,PaperProps:g={},PopoverClasses:K,transitionDuration:O="auto",TransitionProps:{onEntering:p}={},variant:r="selectedMenu",slots:F={},slotProps:s={}}=w,i=j(w.TransitionProps,Je),c=j(w,Qe),h=je(),n=E({},w,{autoFocus:f,disableAutoFocusItem:P,MenuListProps:S,onEntering:p,PaperProps:g,transitionDuration:O,TransitionProps:i,variant:r}),C=tt(n),L=f&&!P&&z,k=l.useRef(null),q=(v,_)=>{k.current&&k.current.adjustStyleForScrollbar(v,{direction:h?"rtl":"ltr"}),p&&p(v,_)},T=v=>{v.key==="Tab"&&(v.preventDefault(),x&&x(v,"tabKeyDown"))};let I=-1;l.Children.map(d,(v,_)=>{l.isValidElement(v)&&(v.props.disabled||(r==="selectedMenu"&&v.props.selected||I===-1)&&(I=_))});const V=(R=F.paper)!=null?R:st,A=(y=s.paper)!=null?y:g,G=Y({elementType:F.root,externalSlotProps:s.root,ownerState:n,className:[C.root,u]}),B=Y({elementType:V,externalSlotProps:A,ownerState:n,className:C.paper});return H.jsx(ot,E({onClose:x,anchorOrigin:{vertical:"bottom",horizontal:h?"right":"left"},transformOrigin:h?Ze:et,slots:{paper:V,root:F.root},slotProps:{root:G,paper:B},open:z,ref:o,transitionDuration:O,TransitionProps:E({onEntering:q},i),ownerState:n},c,{classes:K,children:H.jsx(rt,E({onKeyDown:T,actions:k,autoFocus:f&&(I===-1||P),autoFocusItem:L,variant:r},S,{className:ee(C.list,S.className),children:d}))}))});export{lt as M,we as P,Xe as a,Ye as b,de as c,Ae as d,he as g,it as p};
