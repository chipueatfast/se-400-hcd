"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var t=require("styled-components"),e=require("../../helpers/getColors.js"),o=require("../../constants/breakpoints.js"),i=require("../../constants/colors.js"),a=require("../button/Button.js");function n(t){return t&&"object"==typeof t&&"default"in t?t:{default:t}}require("react/jsx-runtime"),require("../button/Button.styled.js");var d=n(t);const s=d.default.div.withConfig({displayName:"DataBoxstyled__DataBox",componentId:"sc-11ymq1s-0"})(["display:flex;flex-direction:column;position:relative;width:100%;border-width:1px;border-style:solid;border-color:",";"],(t=>e.getColors(t.$color))),r=d.default.div.withConfig({displayName:"DataBoxstyled__Header",componentId:"sc-11ymq1s-1"})(["display:flex;justify-content:space-between;align-items:center;height:28px;background:",";padding:0 16px;"],i.WHITE_DARK),l=d.default.div.withConfig({displayName:"DataBoxstyled__Mid",componentId:"sc-11ymq1s-2"})(["display:flex;position:relative;width:100%;height:100%;padding:16px;@media (max-width:","px){flex-direction:column;}"],o.SCREEN_XS),p=d.default.div.withConfig({displayName:"DataBoxstyled__Content",componentId:"sc-11ymq1s-3"})(["position:relative;width:90%;@media (max-width:","px){width:100%;}"],o.SCREEN_XS),x=d.default.div.withConfig({displayName:"DataBoxstyled__Corner",componentId:"sc-11ymq1s-4"})(["display:flex;position:absolute;top:16px;right:16px;"]),m=d.default.div.withConfig({displayName:"DataBoxstyled__DropdownWrapper",componentId:"sc-11ymq1s-5"})(["height:24px;margin-left:8px;"]),c=d.default.div.withConfig({displayName:"DataBoxstyled__Action",componentId:"sc-11ymq1s-6"})(["display:flex;align-items:flex-end;> *{margin-left:24px;}@media (max-width:","px){position:relative;flex-direction:column;bottom:initial;right:initial;margin-top:16px;width:100%;> *{margin-left:0px;}}"],o.SCREEN_XS),u=d.default(a.Button).withConfig({displayName:"DataBoxstyled__ToggleButton",componentId:"sc-11ymq1s-7"})(["min-width:auto;.TPButton-label{flex-direction:row-reverse;}.TPButton-icon{margin-right:0;}"]);exports.Action=c,exports.Content=p,exports.Corner=x,exports.DataBox=s,exports.DropdownWrapper=m,exports.Header=r,exports.Mid=l,exports.ToggleButton=u;