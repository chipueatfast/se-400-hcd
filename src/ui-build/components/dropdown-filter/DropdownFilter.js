"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("react/jsx-runtime"),r=require("react"),n=require("../checkbox/Checkbox.js"),o=require("../typography/Typography.js"),t=require("./UnsortArrowIcon.js"),i=require("./DropdownFilter.styled.js");exports.DropdownFilter=s=>{let{label:l,values:c=[],options:a,onChange:d}=s;const[h,u]=r.useState(!1),[j,p]=r.useState(c||[]),g=r.useRef(null),v=!(!j||j.length!==a.length),x=!!(j&&j.length>0&&j.length<a.length);r.useEffect((()=>{p(c)}),[c]),r.useEffect((()=>{function e(e){g.current&&g.current.contains(e.target)||u(!1)}return window.addEventListener("mousedown",e),()=>{window.removeEventListener("mousedown",e)}}));const b=e=>{p(e),d(e)};return e.jsxs(i.Wrapper,Object.assign({className:"TPDropdownFilter-root"},{children:[l&&e.jsx(i.Label,{children:e.jsx(o.Typography.Text,Object.assign({size:"mini",color:"gray"},{children:l}),void 0)},void 0),e.jsxs(i.DropdownWrapper,{children:[e.jsxs(i.ChoicesEntry,Object.assign({onClick:()=>u(!0)},{children:[e.jsx(n.Checkbox,{name:"dropdown-filter-entry-item",checked:v,indeterminate:x,readOnly:!0},void 0),e.jsx(o.Typography.Text,Object.assign({color:"blue"},{children:0===j.length||j.length===a.length?"All":`${j.length} option${j.length>1?"s":""} selected`}),void 0),e.jsx(i.Indicator,Object.assign({className:"TPDropdownFilter-indicator"},{children:e.jsx(t.UnsortArrowIcon,{},void 0)}),void 0)]}),void 0),h&&e.jsxs(i.ChoiceItemWrapper,Object.assign({ref:g},{children:[e.jsxs(i.ChoicesTotalItem,Object.assign({onClick:()=>{return e=v,void b(!x&&e?[]:a.map((e=>e.value)));var e}},{children:[e.jsx(n.Checkbox,{name:"dropdown-filter-total-item",checked:v,indeterminate:x,readOnly:!0},void 0),e.jsx(o.Typography.Text,Object.assign({color:"blue"},{children:v?"Unselect all":"Select all"}),void 0)]}),void 0),e.jsx(i.VerticalLine,{},void 0),a.map(((r,t)=>e.jsxs(i.ChoicesItem,Object.assign({noMargin:0===t,onClick:()=>(e=>{let r=j?[...j]:[];r=r.find((r=>r===e.value))?r.reduce(((r,n)=>(n!==e.value&&(r=[...r,n]),r)),[]):[...r,e.value],b(r)})(r)},{children:[e.jsx(n.Checkbox,{name:"",checked:!(!j||!j.find((e=>e===r.value))),readOnly:!0},void 0),e.jsx(o.Typography.Text,Object.assign({color:"blue"},{children:r.label}),void 0)]}),`dropdown-filter-item-${r.value}`)))]}),void 0)]},void 0)]}),void 0)};
