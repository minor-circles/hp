(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[977],{414:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/circles/[slug]",function(){return r(6919)}])},8572:function(e,t,r){"use strict";r.d(t,{E:function(){return a}});var n=r(5893),c=r(9352),s=function(e){return new Date(e).toLocaleDateString("ja-JP",{year:"numeric",month:"2-digit",day:"2-digit"})},a=function(e){var t=e.date;return(0,n.jsxs)("div",{className:"select-none hstack gap-2 text-md font-medium text-accent-1",children:[(0,n.jsx)(c.N$g,{}),s(t)]})}},3593:function(e,t,r){"use strict";r.d(t,{E:function(){return o}});var n=r(5893),c=r(7294),s=r(1891);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){if(null==e)return{};var r,n,c=function(e,t){if(null==e)return{};var r,n,c={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(c[r]=e[r]);return c}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(c[r]=e[r])}return c}var o=c.forwardRef((function(e,t){var r=e.children,c=e.src,o=e.alt,l=i(e,["children","src","alt"]),u=(0,s.O)()+c;return(0,n.jsx)("img",function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){a(e,t,r[t])}))}return e}({src:u,alt:o},l,{ref:t,children:r}))}));o.displayName="Image"},7333:function(e,t,r){"use strict";r.d(t,{V:function(){return T}});var n=r(5893),c=r(2962),s=r(9924),a=r(702),i=r.n(a),o=function(e){var t=e.content;return(0,n.jsx)("div",{className:"post",children:(0,n.jsx)("div",{className:i().markdown,dangerouslySetInnerHTML:{__html:t}})})},l=r(8193),u=r(8572),d=r(3593),f=r(4929),p=function(e){var t=e.title,r=e.coverImage,c=e.date,s=e.tags;return(0,n.jsxs)("div",{className:"vstack gap-4",children:[(0,n.jsx)("div",{className:"w-full h-64 sm:h-80",children:(0,n.jsx)(d.E,{src:r,alt:"Cover Image for ".concat(t),className:"w-full h-full object-cover"})}),(0,n.jsx)("h1",{className:"text-primary-1 text-3xl md:text-4xl font-bold tracking-tighter leading-tight",children:t}),(0,n.jsxs)("div",{className:"wrap gap-4",children:[!s.includes("\u30b5\u30fc\u30af\u30eb")&&(0,n.jsx)(u.E,{date:c}),(0,n.jsxs)("div",{className:"wrap gap-2",children:[(0,n.jsx)("span",{className:"select-none text-primary-1",children:(0,n.jsx)(l.EhI,{})}),s.map((function(e){return(0,n.jsx)(f.r,{href:"/tags/".concat(e),passHref:!0,children:(0,n.jsx)("a",{className:"badge",children:e})},e)}))]})]})]})},m=function(e){var t=e.post,r=t.title,c=t.coverImage,s=t.date,a=t.tags,i=t.content;return(0,n.jsxs)("div",{className:"p-8 bg-primary-1",children:[(0,n.jsx)(p,{title:r,coverImage:c,date:s,tags:a}),(0,n.jsx)(o,{content:i})]})},j=r(1366),x=r(4493),g=r(6616),h=r(7385),v=r(6573),b=r(1020),y=r(7074),w=r(859),O=r(1860),N=r(5390),k=r(5434),_=r(6786);function P(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function E(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){P(e,t,r[t])}))}return e}var S=function(e){var t=e.post,r=t.title,c=t.slug,s=t.ogImage,a="".concat(_.m,"/posts/").concat(c),i={title:r,url:a},o=t.tags.map((function(e){return e.split(" ")[0]}));return(0,n.jsxs)("div",{className:"select-none vstack gap-3 p-6 bg-primary-1",children:[(0,n.jsxs)("div",{className:"center gap-2 py-2 px-3 text-lg font-bold text-primary-1 uppercase",children:[(0,n.jsx)(k.KQY,{}),"share"]}),(0,n.jsxs)("div",{className:"w-full center gap-4",children:[(0,n.jsx)(j.Z,E({},i,{media:s.url,children:(0,n.jsx)(x.Z,{size:40,round:!0})})),(0,n.jsx)(g.Z,{title:r,url:a,via:_.p,related:[_.p,"Next.js"],hashtags:o,children:(0,n.jsx)(h.Z,{size:40,round:!0})}),(0,n.jsx)(v.Z,E({},i,{children:(0,n.jsx)(b.Z,{size:40,round:!0})})),(0,n.jsx)(y.Z,E({},i,{children:(0,n.jsx)(w.Z,{size:40,round:!0})})),(0,n.jsx)(O.Z,E({},i,{children:(0,n.jsx)(N.Z,{size:40,round:!0})}))]})]})},I=r(7294),Z=r(2866),D=r.n(Z),z=function(){return(0,I.useEffect)((function(){return D().init({tocSelector:".toc",contentSelector:".post",headingSelector:"h1, h2, h3",scrollSmoothOffset:-80}),function(){return D().destroy()}}),[]),(0,n.jsxs)("div",{className:"select-none vstack gap-3 p-6 bg-primary-1",children:[(0,n.jsx)("div",{className:"center",children:(0,n.jsxs)("div",{className:"center gap-2 py-2 px-3 border-b-2 border-teal-700 dark:border-teal-400 text-base font-bold text-primary-1",children:[(0,n.jsx)(k.twx,{}),"\u76ee\u6b21"]})}),(0,n.jsx)("nav",{className:"toc"})]})},C=r(7377),K=r(2863),T=function(e){var t=e.post,r=(0,C.P)("lg"),a=(0,K.V)(_.m,t.ogImage.url);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(c.PB,{title:t.title,description:t.excerpt,openGraph:{url:_.m,title:t.title,description:t.excerpt,images:[{url:a}]}}),(0,n.jsx)(s.Z,{main:(0,n.jsx)("article",{children:(0,n.jsx)(m,{post:t})}),aside:(0,n.jsx)("div",{className:"vstack gap-10 h-full",children:(0,n.jsxs)("div",{className:"vstack gap-10 sticky top-20",children:[r&&(0,n.jsx)(z,{}),(0,n.jsx)(S,{post:t})]})}),hamburgerMenu:(0,n.jsx)("div",{role:"button",tabIndex:0,onClick:function(){return document.dispatchEvent(new KeyboardEvent("keydown",{key:"Escape"}))},onKeyDown:function(){},className:"overflow-y-auto cursor-default",children:(0,n.jsx)(z,{})})})]})}},6919:function(e,t,r){"use strict";r.r(t),r.d(t,{__N_SSG:function(){return a}});var n=r(5893),c=r(7333);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var a=!0;t.default=function(e){return(0,n.jsx)(c.V,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){s(e,t,r[t])}))}return e}({},e))}},702:function(e){e.exports={markdown:"markdown-styles_markdown__BegJd"}}},function(e){e.O(0,[228,585,774,888,179],(function(){return t=414,e(e.s=t);var t}));var t=e.O();_N_E=t}]);