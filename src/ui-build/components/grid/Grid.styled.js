"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("styled-components"),i=require("../../constants/breakpoints.js"),t=require("../../constants/spacing.js"),r=require("./cssGenerator.js");function n(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}const d=n(e).default.div.withConfig({displayName:"Gridstyled__Grid",componentId:"sc-1ewdh1g-0"})(["position:relative;box-sizing:border-box;&.TPGrid-container{display:flex;flex-wrap:wrap;margin-left:","px;margin-right:","px;}&.TPGrid-item{padding-left:","px;padding-right:","px;flex:1 0 0;@media (max-width:","px){flex-grow:0;flex-basis:100%;max-width:100%;}}"," "," "," &.TPGrid--no-spacing{margin-left:0;margin-right:0;> .TPGrid-item{padding-left:0;padding-right:0;}}&.TPGrid-container.TPGrid-item{@media (max-width:","px){margin-left:0;margin-right:0;padding-left:0;padding-right:0;}}"," @media (min-width:","px){","}@media (min-width:","px){","}"],-1*t.GUTTER,-1*t.GUTTER,t.GUTTER,t.GUTTER,i.SCREEN_SM,r.CSSDirectionGenerator(),r.CSSJustifyGenerator(),r.CSSAlignItemsGenerator(),i.SCREEN_SM,r.CSSWidthSetGenerator("sm"),i.SCREEN_XM,r.CSSWidthSetGenerator("xm"),i.SCREEN_LG,r.CSSWidthSetGenerator("lg"));exports.Grid=d;