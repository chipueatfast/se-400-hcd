"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("../../_virtual/_tslib.js"),s=require("react/jsx-runtime"),a=require("../../helpers/classNames.js"),t=require("./Button.styled.js");exports.IconButton=r=>{var{icon:l,className:n,onClick:o,"aria-label":c="button label"}=r,i=e.__rest(r,["icon","className","onClick","aria-label"]);const u=a.classNames("TPIconButton-root",n);return s.jsx(t.IconButton,Object.assign({className:u,"aria-label":c,onClick:o,tabIndex:0},i,{children:s.jsx("span",Object.assign({className:"TPIconButton-label"},{children:l}),void 0)}),void 0)};