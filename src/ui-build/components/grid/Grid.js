"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var i=require("../../_virtual/_tslib.js"),e=require("react/jsx-runtime"),r=require("../../helpers/classNames.js"),s=require("./Grid.styled.js");exports.Grid=t=>{var{container:a=!1,item:d=!1,withSpacing:n=!0,justify:c,alignItems:l,direction:m,sm:o,xm:u,lg:G,as:P="div",className:g,children:j}=t,T=i.__rest(t,["container","item","withSpacing","justify","alignItems","direction","sm","xm","lg","as","className","children"]);const p=d?"TPGrid-item":"",x=a?"TPGrid-container":"",h=n?"":"TPGrid--no-spacing",v=m?`TPGrid-direction-${m}`:"",$=c?`TPGrid-justify-${c}`:"",_=l?`TPGrid-align-items-${l}`:"",y=o?`TPGrid-sm-${o}`:"",N=u?`TPGrid-xm-${u}`:"",f=G?`TPGrid-lg-${G}`:"",q=r.classNames("TPGrid-root",p,x,y,N,f,h,v,$,_,g);return e.jsx(s.Grid,Object.assign({as:P,className:q},T,{children:j}),void 0)};