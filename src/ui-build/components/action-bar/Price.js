"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("react/jsx-runtime"),r=require("../typography/Typography.js");exports.Price=i=>{let{amount:c,currency:s="USD"}=i;return e.jsx("div",Object.assign({className:"TPActionBar-price"},{children:e.jsxs(r.Typography.Paragraph,{children:[e.jsx(r.Typography.Text,Object.assign({className:"TPActionBar-price-amount",size:"big",color:"green_highlight"},{children:c}),void 0)," ",e.jsx(r.Typography.Text,Object.assign({className:"TPActionBar-price-currency",size:"medium",color:"green_highlight"},{children:s}),void 0)]},void 0)}),void 0)};