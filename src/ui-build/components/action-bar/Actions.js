"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("react/jsx-runtime"),r=require("react"),t=require("../dropdown/Dropdown.js"),n=require("./ActionBar.styled.js"),o=require("./DotsIcon.js"),i=require("../../constants/breakpoints.js");function s(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var d=s(r);function c(){return document.body.offsetWidth}exports.Actions=s=>{const[u,a]=r.useState((()=>c()));r.useEffect((()=>{if("object"==typeof window)return window.addEventListener("resize",e),()=>window.removeEventListener("resize",e);function e(){a(c())}a(0)}),[]);let l=3;u<i.SCREEN_LG&&(l=2),u<i.SCREEN_XM&&(l=1);const f=[...d.default.Children.toArray(s.children)],j=u<i.SCREEN_SM?[]:f.splice(-l);return e.jsxs(n.Actions,{children:[!!f.length&&e.jsx(t.Dropdown,Object.assign({overlay:f.map(((r,n)=>e.jsx(t.Dropdown.Item,{children:r},n)))},{children:e.jsx(o.DotsIcon,{},void 0)}),void 0),j]},void 0)};