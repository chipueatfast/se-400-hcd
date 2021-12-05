"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var r=require("../../_virtual/_tslib.js"),e=require("react/jsx-runtime"),a=require("react"),i=require("../typography/Typography.js"),t=require("./Textarea.styled.js");const s=a.forwardRef(((a,s)=>{var{id:o,name:l,label:d,error:n,errorText:c}=a,x=r.__rest(a,["id","name","label","error","errorText"]);const j=o||l;return e.jsxs(t.Wrapper,Object.assign({className:"TPTextarea-root"},{children:[d&&e.jsx(t.Label,Object.assign({htmlFor:j},{children:e.jsx(i.Typography.Text,Object.assign({size:"mini",color:n?"red_alert":"gray"},{children:d}),void 0)}),void 0),e.jsx(t.Textarea,Object.assign({},x,{ref:s,id:j,name:l,error:n,"aria-invalid":n?"true":"false","aria-describedby":n&&c?`error-hint-${j}`:void 0}),void 0),n&&c&&e.jsx(t.Error,Object.assign({id:`error-hint-${j}`,role:"alert",size:"mini",color:"red_alert"},{children:c}),void 0)]}),void 0)}));s.displayName="Textarea",exports.Textarea=s;