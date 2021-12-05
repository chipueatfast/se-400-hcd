"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("styled-components"),t=require("../typography/Typography.js"),o=require("../../constants/colors.js"),n=require("../../constants/text.js");function r(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var p=r(e);const i=p.default.div.withConfig({displayName:"Inputstyled__Wrapper",componentId:"sc-3o2js9-0"})(["position:relative;display:flex;flex-direction:column;justify-content:start;.TPInput-container{position:relative;display:flex;border:1px solid ",";height:40px;box-sizing:border-box;&.TPInput-error{border-color:",";}&.TPInput-readOnly{border-color:transparent;pointer-events:none;}&.TPInput-disabled{opacity:0.5;pointer-events:none;}&:focus-within{outline:0;border-color:",";}}"],o.LINES,o.RED_ALERT,o.GREEN_HIGHLIGHT),s=p.default.input.withConfig({displayName:"Inputstyled__Input",componentId:"sc-3o2js9-1"})(["width:100%;border:none;color:",";padding:8px 12px;font-size:",";line-height:",";background:",";box-sizing:border-box;&::placeholder{color:",";}&:focus{outline:0;}"],o.BLACK,n.FONT_STANDARD,n.LH_STANDARD,o.WHITE,o.GRAY),a=p.default.label.withConfig({displayName:"Inputstyled__Label",componentId:"sc-3o2js9-2"})(["margin-bottom:6px;span{display:block;}"]),d=p.default(t.Typography.Paragraph).withConfig({displayName:"Inputstyled__Error",componentId:"sc-3o2js9-3"})(["margin-top:6px;"]),l=p.default.div.withConfig({displayName:"Inputstyled__Adorment",componentId:"sc-3o2js9-4"})(["display:flex;align-items:center;padding:8px;white-space:nowrap;&.TPInput-adorment-start{padding-right:0;}&.TPInput-adorment-end{padding-left:0;}"]);exports.Adorment=l,exports.Error=d,exports.Input=s,exports.Label=a,exports.Wrapper=i;
