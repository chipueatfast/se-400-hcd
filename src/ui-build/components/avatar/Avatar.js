"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("../../_virtual/_tslib.js"),t=require("react/jsx-runtime"),r=require("react");require("../button/Button.styled.js");var i=require("../button/IconButton.js"),s=require("./Avatar.styled.js"),n=require("./ImageFallback.js"),c=require("./IdentityCheckIcon.js"),a=require("./EditIcon.js");exports.Avatar=u=>{var{src:l,alt:o="user avatar",size:d=100,identityChecked:j,blur:v,onEdit:g}=u,b=e.__rest(u,["src","alt","size","identityChecked","blur","onEdit"]);const h=r.useRef(null);return t.jsxs(s.Avatar,{children:[t.jsx(s.Img,Object.assign({style:{width:d,height:d},blur:v},{children:t.jsx(n.ImageFallback,Object.assign({src:l,alt:o},b),void 0)}),void 0),j&&t.jsx("div",Object.assign({className:"icon identity"},{children:t.jsx(c.IdentityCheckIcon,{},void 0)}),void 0),g&&t.jsxs("div",Object.assign({className:"icon edit"},{children:[t.jsx(i.IconButton,{icon:t.jsx(a.EditIcon,{},void 0),onClick:function(){h.current&&h.current.click()},"aria-label":"Edit avatar"},void 0),t.jsx("input",{type:"file",ref:h,onChange:e=>{if(e.currentTarget.files&&e.currentTarget.files.length>0){const t=e.currentTarget.files[0];g&&g(t),h.current&&(h.current.value="")}},accept:".jpg,.png,.jpeg"},void 0)]}),void 0)]},void 0)};