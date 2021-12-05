"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("react/jsx-runtime");require("react"),require("../button/Button.styled.js");var o=require("../button/IconButton.js"),s=require("../outmost-container/OutmostContainer.js"),t=require("../../helpers/CloseIcon.js"),r=require("../../helpers/classNames.js"),n=require("./ActionBar.styled.js"),a=require("./Flexbox.styled.js");exports.FlexboxTop=i=>{const c=r.classNames("TPActionBar-flexbox-top",i.onCloseModal?"TPActionBar-modal":"");return e.jsx(a.TopSegmentWrapper,Object.assign({className:c},{children:e.jsx(s.OutmostContainer,{children:e.jsxs(a.ContentWrapper,Object.assign({className:"TPActionBar-flexbox-segments"},{children:[e.jsx(a.ContentLeft,Object.assign({className:"TPActionBar-content-left"},{children:i.headlineLeft}),void 0),e.jsxs(a.ContentRight,Object.assign({className:"TPActionBar-content-right"},{children:[i.actions,i.secondary&&e.jsx(n.Secondary,{children:i.secondary},void 0),i.primary,i.onCloseModal&&e.jsx(o.IconButton,{className:"TPActionBar-close",icon:e.jsx(t.CloseIcon,{},void 0),"aria-label":"Close modal",onClick:i.onCloseModal},void 0)]}),void 0)]}),void 0)},void 0)}),void 0)};
