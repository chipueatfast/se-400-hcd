"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("styled-components"),t=require("../../constants/breakpoints.js");function i(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}require("./Flexbox.styled.js"),require("./Stack.styled.js");var n=i(e);const a=n.default.div.withConfig({displayName:"ActionBarstyled__Primary",componentId:"sc-7n4y36-0"})(["display:flex;column-gap:16px;align-items:center;"]),s=n.default.div.withConfig({displayName:"ActionBarstyled__Secondary",componentId:"sc-7n4y36-1"})(["display:flex;align-items:center;"]),o=n.default.div.withConfig({displayName:"ActionBarstyled__Actions",componentId:"sc-7n4y36-2"})(["display:flex;column-gap:32px;align-items:center;"]),r=n.default.div.withConfig({displayName:"ActionBarstyled__Back",componentId:"sc-7n4y36-3"})(["display:flex;place-items:center;margin-right:auto;@media (max-width:","px){span.TPLink-icon{margin:0;}span{display:none;}}"],t.SCREEN_SM);exports.Actions=o,exports.Back=r,exports.Primary=a,exports.Secondary=s;
