"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("react/jsx-runtime"),t=require("react-toastify"),s=require("./Toast.styled.js"),o=require("./CloseButton.js");Object.defineProperty(exports,"toast",{enumerable:!0,get:function(){return t.toast}}),exports.Toast=r=>e.jsx(s.Toast,Object.assign({limit:3,position:"top-right",hideProgressBar:!0,autoClose:5e3,closeOnClick:!1,draggable:!1,pauseOnHover:!0,pauseOnFocusLoss:!0,transition:t.Slide,closeButton:o.CloseButton,icon:!1},r),void 0);
