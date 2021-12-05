"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var t=require("styled-components"),o=require("../../constants/colors.js");function e(t){return t&&"object"==typeof t&&"default"in t?t:{default:t}}var n=e(t);const i=n.default.div.withConfig({displayName:"Dropdownstyled__Dropdown",componentId:"sc-10stiyo-0"})(["display:inline-block;position:relative;&:focus-within{outline:1px solid ",";}"],o.GREEN_HIGHLIGHT),d=n.default.div.withConfig({displayName:"Dropdownstyled__DropdownButton",componentId:"sc-10stiyo-1"})(["cursor:pointer;"]),s=n.default.ul.withConfig({displayName:"Dropdownstyled__DropdownContent",componentId:"sc-10stiyo-2"})(["display:none;position:absolute;background:",";min-width:232px;z-index:1;list-style:none;padding:0;margin:0;&.TPDropdown-content--show{display:block;}&.TPDropdown-direction-left{top:0;right:0;}&.TPDropdown-direction-right{top:0;left:0;}"],o.WHITE_DARK),r=n.default.li.withConfig({displayName:"Dropdownstyled__DropdownItem",componentId:"sc-10stiyo-3"})(["display:flex;justify-content:flex-start;align-items:center;padding:0;min-height:40px;opacity:",";pointer-events:",";> *{padding:0 8px;width:100%;min-height:40px;display:flex;justify-content:flex-start;align-items:center;}> a{text-decoration:none !important;}> .TPButton-root .TPButton-label,> .TPLink-root{justify-content:flex-start;}&:hover{background:#eeeeee;}"],(t=>t.$disabled?.2:1),(t=>t.$disabled?"none":"unset"));exports.Dropdown=i,exports.DropdownButton=d,exports.DropdownContent=s,exports.DropdownItem=r;
