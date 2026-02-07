"use strict";(()=>{var e={};e.id=87,e.ids=[87],e.modules={145:e=>{e.exports=require("next/dist/compiled/next-server/pages-api.runtime.prod.js")},6249:(e,t)=>{Object.defineProperty(t,"l",{enumerable:!0,get:function(){return function e(t,n){return n in t?t[n]:"then"in t&&"function"==typeof t.then?t.then(t=>e(t,n)):"function"==typeof t&&"default"===n?t:void 0}}})},76:(e,t,n)=>{n.r(t),n.d(t,{config:()=>d,default:()=>s,routeModule:()=>c});var o={};n.r(o),n.d(o,{default:()=>l});var a=n(1802),i=n(7153),r=n(6249),u=n(2499);function l(e,t){let{slug:n}=e.query,o=u.R.find(e=>e.slug===n);if(!o)return t.status(404).json({error:"not found"});t.status(200).json(o)}let s=(0,r.l)(o,"default"),d=(0,r.l)(o,"config"),c=new a.PagesAPIRouteModule({definition:{kind:i.x.PAGES_API,page:"/api/products/[slug]",pathname:"/api/products/[slug]",bundlePath:"",filename:""},userland:o})},2499:(e,t,n)=>{n.d(t,{R:()=>o});let o=[{slug:"settlement-hub",title:"Settlement Hub",short:"Trade settlement & reconciliation demo for PMs",tagline:"Demo of trade lifecycle: booking → affirmation → settlement → reconciliation",personas:["Operations PM","Clearing Analyst"],kpis:["Settlement rate","Reconciliation accuracy"],brd:`# BRD - Settlement Hub

**Summary:** Reduce manual touchpoints in settlement of equity trades.

**Goals**
- Reduce settlement failures by 40% in 6 months
- Automate matching with custodians

**Key features**
- Trade injection
- Matching engine
- Exception handling dashboard

`,fds:`# FSD - Settlement Hub

**Feature:** Trade injection API
- Input: trade id, instrument, qty, price
- Output: 200 OK + trade object

**Feature:** Matching workflow
- Automated match by isoRef / clientRef
`},{slug:"client-onboarding",title:"Client Onboarding",short:"KYC & onboarding workflows",tagline:"Walk through an onboarding funnel, KYC checks & approvals",personas:["Product Manager","Compliance Analyst"],kpis:["Time-to-onboard","Drop-off rate"],brd:`# BRD - Client Onboarding

**Summary:** Streamline KYC flow for corporate clients.

**Goals**
- Reduce avg time-to-onboard to 3 days
`,fds:`# FSD - Client Onboarding

**Feature:** KYC document upload
- Allowed formats: pdf, png
- Validation: size < 10MB
`}]},7153:(e,t)=>{var n;Object.defineProperty(t,"x",{enumerable:!0,get:function(){return n}}),function(e){e.PAGES="PAGES",e.PAGES_API="PAGES_API",e.APP_PAGE="APP_PAGE",e.APP_ROUTE="APP_ROUTE"}(n||(n={}))},1802:(e,t,n)=>{e.exports=n(145)}};var t=require("../../../webpack-api-runtime.js");t.C(e);var n=t(t.s=76);module.exports=n})();