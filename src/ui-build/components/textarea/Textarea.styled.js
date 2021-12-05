"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("styled-components"),o=require("../typography/Typography.js"),r=require("../../constants/colors.js"),t=require("../../constants/text.js");function a(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var p=a(e);const i=p.default.div.withConfig({displayName:"Textareastyled__Wrapper",componentId:"sc-1oha8pq-0"})(["position:relative;display:flex;flex-direction:column;justify-content:start;"]),l=p.default.textarea.withConfig({displayName:"Textareastyled__Textarea",componentId:"sc-1oha8pq-1"})(["width:auto;color:",";border:1px solid ",";padding:8px 12px;min-height:100px;font-size:",";font-family:inherit;line-height:",";background:",";&::placeholder{color:",";}&:focus{outline:0;border-color:",";}&:read-only{border-color:transparent;}&:disabled{cursor:not-allowed;opacity:0.5;border-color:",";}",""],r.BLACK,r.LINES,t.FONT_STANDARD,t.LH_STANDARD,r.WHITE,r.GRAY,r.GREEN_HIGHLIGHT,r.LINES,(o=>o.error&&e.css(["border-color:",";"],r.RED_ALERT))),s=p.default.label.withConfig({displayName:"Textareastyled__Label",componentId:"sc-1oha8pq-2"})(["margin-bottom:6px;span{display:block;}"]),n=p.default(o.Typography.Paragraph).withConfig({displayName:"Textareastyled__Error",componentId:"sc-1oha8pq-3"})(["margin-top:6px;"]);exports.Error=n,exports.Label=s,exports.Textarea=l,exports.Wrapper=i;
