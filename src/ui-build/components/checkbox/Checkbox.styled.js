"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("styled-components"),t=require("../../constants/colors.js"),o=require("../typography/Typography.js");function r(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var i=r(e);const a=i.default.div.withConfig({displayName:"Checkboxstyled__Wrapper",componentId:"sc-1bqwhmf-0"})(["width:100%;"]),n=i.default.label.withConfig({displayName:"Checkboxstyled__Label",componentId:"sc-1bqwhmf-1"})(["position:relative;cursor:pointer;display:flex;align-items:",";input[type='checkbox']{position:absolute;opacity:0;}.checkbox{position:relative;flex:20px 0 0;height:20px;cursor:pointer;user-select:none;border:1px solid ",";margin-right:8px;box-sizing:border-box;&:before,&:after{content:'';position:absolute;left:0;top:0;width:2px;height:0;background:",";opacity:0;transition:all 0.28s ease;transform-origin:left top;}&:before{top:14px;left:7px;transform:rotate(225deg);transition-delay:0s;}&:after{top:9px;left:2px;transform:rotate(-45deg);transition-delay:0.1s;}&.error{border:1px solid ",";}}input[type='checkbox']:checked ~ .checkbox{border-color:",";&:before,&:after{opacity:1;}&:before{height:12px;transition-delay:0.1s;}&:after{height:6px;transition-delay:0s;}}input[type='checkbox']:focus ~ .checkbox{border-color:",";}input[type='checkbox']:disabled ~ *{cursor:not-allowed;opacity:0.5;}",""],(e=>{switch(e.align){case"center":return"center";case"end":return"flex-end";default:return"flex-start"}}),t.GRAY,t.BLUE,t.RED_ALERT,t.BLUE,t.GREEN_HIGHLIGHT,(o=>o.indeterminate&&e.css(["input[type='checkbox'] ~ .checkbox{border-color:",";&:after{display:block;position:absolute;left:50%;top:50%;content:' ';height:2px;width:12px;border-color:",";transform:translate(-50%,-50%) scale(1);opacity:1;}}"],t.BLUE,t.GREEN_HIGHLIGHT))),p=i.default(o.Typography.Paragraph).withConfig({displayName:"Checkboxstyled__Error",componentId:"sc-1bqwhmf-2"})(["margin-top:6px;"]);exports.Error=p,exports.Label=n,exports.Wrapper=a;
