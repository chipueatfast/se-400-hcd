"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var t=require("styled-components"),e=require("../../constants/colors.js");function i(t){return t&&"object"==typeof t&&"default"in t?t:{default:t}}var o=i(t);const r=o.default.div.withConfig({displayName:"Avatarstyled__Avatar",componentId:"sc-1w20az3-0"})(["position:relative;display:inline-block;input[type='file']{display:none;}.icon{display:flex;justify-content:center;align-items:center;position:absolute;}.identity{bottom:0;right:0;}.edit{bottom:0;right:0;width:30px;height:30px;background:",";border-radius:50%;}"],e.WHITE),n=o.default.div.withConfig({displayName:"Avatarstyled__Img",componentId:"sc-1w20az3-1"})(["overflow:hidden;border-radius:100%;img{width:100%;height:100%;object-fit:cover;","}"],(e=>e.blur&&t.css(["filter:blur(4px);"])));exports.Avatar=r,exports.Img=n;