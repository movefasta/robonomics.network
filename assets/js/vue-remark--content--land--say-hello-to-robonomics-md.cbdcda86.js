(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{"3lxM":function(t,e,o){"use strict";o("yXV3");var n=o("rePB"),i={props:{title:{type:String,default:!1},link:{type:String,default:!1},button:{type:String,default:!1},back:{type:String,default:"white",validator:function(t){return-1!==["white","gradient"].indexOf(t)}}},computed:{classes:function(){return Object(n.a)({},"text_linkCard__".concat(this.back),!0)}}},a=(o("lhBE"),o("KHd+")),s=Object(a.a)(i,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("section",{staticClass:"text_linkCard",class:t.classes},[t.title?o("h3",[t._v(t._s(t.title))]):t._e(),o("div",{staticClass:"text_linkCard__description"},[t._t("default")],2),t.button?o("g-link",{staticClass:"button button__border",attrs:{to:t.link}},[t._v(t._s(t.button))]):t._e()],1)}),[],!1,null,null,null);e.a=s.exports},"6eqg":function(t,e,o){"use strict";var n={props:{text:""}},i=(o("Tj1h"),o("KHd+")),a=Object(i.a)(n,(function(){var t=this.$createElement;return(this._self._c||t)("div",{directives:[{name:"g-image",rawName:"v-g-image"}],staticClass:"text_abstract layout__text",domProps:{innerHTML:this._s(this.text)}})}),[],!1,null,null,null);e.a=a.exports},BNng:function(t,e,o){"use strict";o("ZVfI")},G6rF:function(t,e,o){"use strict";o("n+3T")},Kn2e:function(t,e,o){"use strict";o("yXV3");var n=o("rePB"),i={props:{link:{type:String,default:!1},label:{type:String,default:!1},style:{type:String,default:"border",validator:function(t){return-1!==["border","primary"].indexOf(t)}},scale:{type:String,default:"1"}},computed:{classes:function(){var t;return t={},Object(n.a)(t,"button",!0),Object(n.a)(t,"button__".concat(this.style),!0),t}}},a=o("KHd+"),s=Object(a.a)(i,(function(){var t=this.$createElement;return(this._self._c||t)("g-link",{class:this.classes,style:{transform:"scale("+this.scale+")"},attrs:{to:this.link}},[this._v(this._s(this.label))])}),[],!1,null,null,null);e.a=s.exports},P002:function(t,e,o){"use strict";o("ma9I"),o("yXV3");var n=o("rePB"),i={props:{orient:{type:String,default:"columns",validator:function(t){return-1!==["columns","rows"].indexOf(t)}},layout:{type:String,default:!1}},computed:{style:function(){return Object(n.a)({},"grid-template-".concat(this.orient),"repeat(".concat(this.layout,",1fr)"))},classes:function(){return Object(n.a)({},"".concat(this.orient,"-").concat(this.layout),!0)}}},a=(o("G6rF"),o("KHd+")),s=Object(a.a)(i,(function(){var t=this.$createElement;return(this._self._c||t)("section",{staticClass:"grid",class:this.classes,style:this.style},[this._t("default")],2)}),[],!1,null,null,null);e.a=s.exports},Tj1h:function(t,e,o){"use strict";o("lNmn")},UQSp:function(t,e,o){"use strict";e.a={name:"VueRemarkRoot",render:function(t){return t("div",null,this.$slots.default)}}},Z6tk:function(t,e,o){"use strict";o.r(e);var n=o("KHd+"),i=o("6eqg"),a=o("P002"),s=o("3lxM"),r=o("dYd5"),c=o("Kn2e"),l=o("UQSp"),u=o("Kw5r");function d(t){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}u.a.config.optionMergeStrategies;var p={Abstract:i.a,Grid:a.a,Card:s.a,CardIcon:r.a,Button:c.a,VueRemarkRoot:l.a},b=function(t){var e=t.options.components=t.options.components||{},o=t.options.computed=t.options.computed||{};Object.keys(p).forEach((function(t){"object"===d(p[t])&&"function"==typeof p[t].render||"function"==typeof p[t]&&"function"==typeof p[t].options.render?e[t]=p[t]:o[t]=function(){return p[t]}}))},f=u.a.config.optionMergeStrategies,g="__vueRemarkFrontMatter",m={excerpt:null,title:"Say hello to Robonomics 🎉",published:!0,description:"Meet Robonomics network – secure, сost-effective, and futuristic IoT platform for connecting robotics under Polkadot and Ethereum control"};var h=function(t){t.options[g]&&(t.options[g]=m),u.a.util.defineReactive(t.options,g,m),t.options.computed=f.computed({$frontmatter:function(){return t.options[g]}},t.options.computed)},A=Object(n.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("VueRemarkRoot",[e("Abstract",{attrs:{text:"Meet Robonomics network – secure, сost-effective, and futuristic IoT platform for connecting robotics under Polkadot and Ethereum control"}}),e("p",[e("a",{attrs:{href:"https://blog.aira.life/robonomics-can-72f631824670",target:"_blank",rel:"nofollow noopener noreferrer"}},[e("g-image",{attrs:{src:o("kySn"),alt:'"What Robonomics can do?"'}})],1)]),e("Grid",{attrs:{layout:"2"}},[e("CardIcon",{attrs:{image:"/land/icon-presentation.png",title:"What is Robonomics Network?",caption:"View Keypoint presentation",link:"https://static.robonomics.network/docs/presentations/Robonomics.Keypoint.updated.August.2020.pdf"}}),e("CardIcon",{attrs:{image:"/land/icon-coding.png",title:"Research & Development",caption:"Conducted on Robonomics Network",link:"https://wiki.robonomics.network/docs/r-and-d-based-on-robonomics-network/"}})],1),e("Card",{attrs:{title:"Robonomics Incentive Program",link:"/blog/community-incentive-program/",button:"Read about rewards",back:"gradient"}},[e("p",[this._v("Robonomics has Incentive Program for Developers, Ambassadors & Influencers")])]),e("h2",{attrs:{id:"enjoy-the-latest-ama-session"}},[e("a",{attrs:{href:"#enjoy-the-latest-ama-session","aria-hidden":"true"}},[e("span",{staticClass:"icon icon-link"})]),this._v("Enjoy the latest AMA session!")]),e("div",{staticClass:"layout__text"},[e("div",{staticClass:"youtube-embed"},[e("div",{staticStyle:{width:"100%",margin:"0 auto"}},[e("div",{staticStyle:{position:"relative","padding-bottom":"56.25%","padding-top":"25px",height:"0"}},[e("iframe",{staticStyle:{position:"absolute",top:"0",left:"0",width:"100%",height:"100%"},attrs:{src:"https://www.youtube-nocookie.com/embed/IEgvXcj3nSo",allow:"autoplay; encrypted-media",allowfullscreen:""}})])])])]),e("h2",{attrs:{id:"how-can-i-use-the-robonomics"}},[e("a",{attrs:{href:"#how-can-i-use-the-robonomics","aria-hidden":"true"}},[e("span",{staticClass:"icon icon-link"})]),this._v("How can I use the Robonomics?")]),e("Grid",{attrs:{layout:"4"}},[e("CardIcon",{attrs:{image:"/land/icon-wiki.png",title:"Robonomics Wiki",caption:"For IoT & Robotics developers",link:"https://wiki.robonomics.network/docs/"}}),e("CardIcon",{attrs:{image:"/land/icon-kuka.png",title:"Launch Kuka manipulator",caption:"Under Robonomics Network control",link:"https://wiki.robonomics.network/docs/kuka/"}}),e("CardIcon",{attrs:{image:"/land/icon-application.png",title:"Robonomics DAPP",caption:"Made for connecting IoT & Robotics under Robonomics control smoothly",link:"https://dapp.robonomics.network/#/"}}),e("CardIcon",{attrs:{image:"/land/icon-rws.png",title:"Sign up for RWS beta",link:"https://share.hsforms.com/1rlIfFL6ZSriaOjtf4NAGPw535vx?sidebar&__hstc=136840367.cb56ffd63c4554e84a6b795a22bdcfee.1602671793634.1605539005983.1605618482734.17&__hssc=136840367.2.1605618482734&__hsfp=1772620931"}}),e("CardIcon",{attrs:{image:"/land/icon-github.png",title:"Github",link:"https://github.com/airalab/robonomics"}}),e("CardIcon",{attrs:{image:"/land/icon-twitter.png",title:"Twitter",link:"https://twitter.com/AIRA_Robonomics"}}),e("CardIcon",{attrs:{image:"/land/icon-youtube.png",title:"YouTube",link:"https://www.youtube.com/c/Airalab"}}),e("CardIcon",{attrs:{image:"/land/icon-telegram.png",title:"Telegram",link:"https://t.me/robonomics"}})],1),e("h2",{attrs:{id:"want-to-talk-with-core-robonomics-dao-developers"}},[e("a",{attrs:{href:"#want-to-talk-with-core-robonomics-dao-developers","aria-hidden":"true"}},[e("span",{staticClass:"icon icon-link"})]),this._v("Want to talk with core Robonomics DAO developers?")]),e("Button",{attrs:{link:"https://discourse.robonomics.network/",label:"Visit Robonomics Network forum",scale:"1.2"}})],1)}),[],!1,null,null,null);"function"==typeof b&&b(A),"function"==typeof h&&h(A);e.default=A.exports},ZVfI:function(t,e,o){},dYd5:function(t,e,o){"use strict";var n={props:{title:{type:String,default:!1},image:{type:String,default:!1},link:{type:String,default:!1},caption:{type:String,default:!1}}},i=(o("BNng"),o("KHd+")),a=Object(i.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("g-link",{staticClass:"text_linkImage",attrs:{to:t.link}},[o("div",{staticClass:"icon"},[o("img",{attrs:{alt:"",src:t.image}})]),o("div",[t.title?o("h4",{directives:[{name:"g-image",rawName:"v-g-image"}],domProps:{innerHTML:t._s(t.title)}}):t._e(),t.caption?o("p",{directives:[{name:"g-image",rawName:"v-g-image"}],domProps:{innerHTML:t._s(t.caption)}}):t._e()])])}),[],!1,null,null,null);e.a=a.exports},kySn:function(t,e){t.exports={type:"image",mimeType:"image/jpeg",src:"/assets/static/robonomics-can.42db587.5f7e63b20216eb84a8502df9d28af630.jpg",size:{width:2560,height:1152},sizes:"(max-width: 2560px) 100vw, 2560px",srcset:["/assets/static/robonomics-can.82a2fbd.5f7e63b20216eb84a8502df9d28af630.jpg 480w","/assets/static/robonomics-can.cbab2cf.5f7e63b20216eb84a8502df9d28af630.jpg 1024w","/assets/static/robonomics-can.2665e34.5f7e63b20216eb84a8502df9d28af630.jpg 1920w","/assets/static/robonomics-can.42db587.5f7e63b20216eb84a8502df9d28af630.jpg 2560w"],dataUri:"data:image/svg+xml,%3csvg fill='none' viewBox='0 0 2560 1152' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3cdefs%3e%3cfilter id='__svg-blur-3f64eb5f1fe7b689511a2af4a6ec874c'%3e%3cfeGaussianBlur in='SourceGraphic' stdDeviation='40'/%3e%3c/filter%3e%3c/defs%3e%3cimage x='0' y='0' filter='url(%23__svg-blur-3f64eb5f1fe7b689511a2af4a6ec874c)' width='2560' height='1152' xlink:href='data:image/jpeg%3bbase64%2c/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAdAEADASIAAhEBAxEB/8QAGAAAAwEBAAAAAAAAAAAAAAAAAwQGBQL/xAAvEAACAQIEBAQGAgMAAAAAAAABAgMEEQAFEiEGEzFBFCJRYRUjMnGBkSQzg7HR/8QAGgEAAgIDAAAAAAAAAAAAAAAAAgMEBgEFB//EAC0RAAECBQEGBQUBAAAAAAAAAAECEQADBCExEgUTQVFhcQYUIkLwM3KBobGR/9oADAMBAAIRAxEAPwAeFczlkiplMMkcblwut1uB1xt5blNRWwTVYW2X01vEyjcpc2Fh3/5hWrpstlpY0FbS1UpbzwEA6RfYi/XF7n1cv6QUyiWFjln%2bdxHL6Wgnkb/Q6UjUcYdvnYxg%2bNn0w3nhD2Unyiz%2bYg2/WNqNNcgHbvjrLMqoa3MaOCbwtMjSCMTPGLQrfr22xYjhXL4pHVM%2bppADbWvKsf3LgN8KUkTlEk9CYyqmXWp1UyAGd7pHXiRE7QUFLUSutTVtT2F1AgaW47/T0thrh7h18%2bzGopqKqjVYlD8yVGGoFgvQXI3OKKk4cpEBdOI6anci12EZsD/kOMSCd%2bFuI54MszeNodIVquKJXDCwbYXPew69sK82ZgXuVFwHDg/n2ue14aii3Il%2baQGdiQoOeXuYdTbvE7OpgzOShI1SrKYtWny6t%2b/4OGXopUkkiYwiZFZzHfzaVAJPsNwLnqduuBOsUxkrJZR41pb/ANe5BuS1%2b2/bBpkgE9XKlY7yBBGj6CGlUkEqTfYe3e2CXMqRNASRp4%2blTu6eOGYn%2b4BgEopN05SX%2b5PJXDOQP5kiDcPQ08uZwNmMn8FG%2bZDqI5lwbbdCAQLg4BQNDGH58IqG1Kqh9QXvc3Uix6YTwSCorqddENYVi5gkMfKUg2NwDtf83wM%2biWFTFynJXptqKWbkRf43OHS9oony5MmoISJQUB6XdySxtzOTBJFtnstGIyY3LIvUlDr0gjfc/fbHGnlyNGSQyErcjc29Rg8mZZizySCrVJHqPFFkiW4b2ve3fCjNPJI0lTOZpXOouVCk/e2HUiahISmaOAcu9%2bP46/qI1cqlmI1SVh3NtLW7t%2bo1cryupzSVoqVDK6jU1iBYe1%2b/piozPKIaiSlFRk0eWjl9YX%2bttNyG9xsD/vEnlWc1mV83wTqjSCxYrcjYi/4vhP4jmlRlEFHVZlUSGKRpFmv8wX2Iu17jr%2b8VrbFL4gqaopoyhMoMxdQV1xa5tjHIxs9mVGyqalacCpZzYEZLN0bPWK6XhygiVlR5pQq7OXO%2b1/TEWOgwLXXc4D4jUcvTcg2uT06%2bne1sFxP8O0G06QzjtGbr1Eabktl2fAuP8iDtaopJ5QaRLZezco//2Q==' /%3e%3c/svg%3e"}},lNmn:function(t,e,o){},lhBE:function(t,e,o){"use strict";o("twET")},"n+3T":function(t,e,o){},twET:function(t,e,o){}}]);