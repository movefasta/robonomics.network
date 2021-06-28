(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{"5a4I":function(t,e,o){"use strict";o.r(e);var a=o("KHd+"),n=o("6tRk"),r=o("UQSp"),i=o("Kw5r");function s(t){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}i.a.config.optionMergeStrategies;var c={Card:n.a,VueRemarkRoot:r.a},l=function(t){var e=t.options.components=t.options.components||{},o=t.options.computed=t.options.computed||{};Object.keys(c).forEach((function(t){"object"===s(c[t])&&"function"==typeof c[t].render||"function"==typeof c[t]&&"function"==typeof c[t].options.render?e[t]=c[t]:o[t]=function(){return c[t]}}))},p=i.a.config.optionMergeStrategies,u="__vueRemarkFrontMatter",d={excerpt:null,title:"Letter from Robonomics co-founder",date:"2021-06-28T00:00:00.000Z",published:!0,tags:["Tokens","Robonomics parachain","Kusama"],cover_image:"./images/crowdloan-letter-from-Robonomics-co-founder/crowdloan-letter-from-Robonomics-co-founder_blog.jpg",description:"Robonomics network architect Sergey Lonshakov welcomes you to join our Polkadot ecosystem journey, crowdloan starts.",abstract:"Robonomics network architect Sergey Lonshakov welcomes you to join our Polkadot ecosystem journey, crowdloan starts."};var m=function(t){t.options[u]&&(t.options[u]=d),i.a.util.defineReactive(t.options,u,d),t.options.computed=p.computed({$frontmatter:function(){return t.options[u]}},t.options.computed)},h=Object(a.a)({},(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("VueRemarkRoot",[o("p",[t._v("Robonomics has come a long way in the Polkadot ecosystem. For four years, in parallel with the Parity developers, we studied the future network architecture, tried early developments of the Substrate framework and prepared the Robonomics parachain for launch with one goal - to create a vertical in the Polkadot ecosystem that will be machine-friendly.")]),o("p",[t._v("Robonomics team consists of robotics engineers, academic researchers, and software developers. We are one of the few who have been studying the possibilities of Bitcoin, Ethereum, IPFS and Polkadot for communication between people and automated services connected to the Internet for seven years. We want to see smart cities of the future today, but we don't wish these cities of the future to be smart concentration camps for people watching you and can get access to your house, car, or pacemaker without your permission. ")]),o("p",[t._v("I am sure that the only alternative for total control is the p2p economically significant interaction, so the IoT platform we are developing is called Robonomics.")]),o("p",[t._v("By winning a parachain slot in the Kusama network, we will open the doors for hundreds of IoT developers to the Polkadot ecosystem and help them take their first steps under the guidance of experienced teachers and roboticists. Most IoT developers we interviewed are happy to try an alternative to the usual corporate clouds, but it simply does not exist today. Almost every engineer we know understands the problems associated with client-server solutions. However, today there is still no environment that a corporation does not manage and at the same time produces user’s trust.")]),o("p",[t._v("Polkadot is a trust-free ecosystem, and Robonomics is a way to connect smart devices under its control. Contribute to its development. We offer up to 5 XRT per 1 KSM to early supporters who bonds the first 35,000 KSM. The proposed reward makes Robonomics Crowdloan more profitable than stacking in Kusama Relay Chain at the current rate by more than two times.")]),o("p",[t._v("We’ll announce the launch of the Robonomics Crowdloan campaign on "),o("a",{attrs:{href:"https://twitter.com/AIRA_Robonomics",target:"_blank",rel:"nofollow noopener noreferrer"}},[t._v("the Robonomics Twitter")]),t._v(" account in the coming hours.")]),o("Card",{attrs:{back:"transparent"}},[o("h3",{attrs:{id:"read-the-terms-of-participating-in-the-robonomics-crowdloan-campaign-in-the-blog"}},[t._v("Read the terms of participating in the Robonomics crowdloan campaign in the blog:")]),o("p",[o("a",{attrs:{href:"/blog/crowdloan-starts-today/"}},[t._v("https://robonomics.network/blog/crowdloan-starts-today/")])])]),o("Card",{attrs:{back:"transparent"}},[o("h3",{attrs:{id:"participate-in-the-crowdloan-through-the-dedicated-page"}},[t._v("Participate in the crowdloan through the dedicated page:")]),o("p",[o("a",{attrs:{href:"/kusama-slot"}},[t._v("https://robonomics.network/kusama-slot")])])]),o("Card",{attrs:{back:"transparent"}},[o("h3",{attrs:{id:"you-can-also-always-use-the-standard-interfaces-from-parity"}},[t._v("You can also always use the standard interfaces from parity:")]),o("p",[o("a",{attrs:{href:"https://polkadot.js.org/apps/#/parachains/crowdloan",target:"_blank",rel:"nofollow noopener noreferrer"}},[t._v("https://polkadot.js.org/apps/#/parachains/crowdloan")])])]),o("Card",{attrs:{image:"/avatars/Sergei-Lonshakov.jpg",back:"transparent",imageSize:"big"}},[o("h3",{attrs:{id:"welcome-to-our-journey"}},[t._v("Welcome to our journey!")]),o("p",[t._v("EnsRationis")]),o("p",[t._v("Robonomics network architect")]),o("p",[t._v("element: @ensrationis:robonomics.network")])])],1)}),[],!1,null,null,null);"function"==typeof l&&l(h),"function"==typeof m&&m(h);e.default=h.exports},"6tRk":function(t,e,o){"use strict";var a=o("rePB"),n=(o("yXV3"),o("mRH6"),{data:function(){return{isActive:!1}},props:{link:{type:String},icon:{type:String},image:{type:String},button:{type:String},orientation:{type:String,default:"gorizontal"},back:{type:String,default:"white",validator:function(t){return-1!==["white","gradient","transparent"].indexOf(t)}},imageSize:{type:String,default:"small",validator:function(t){return-1!==["small","big"].indexOf(t)}},popup:{type:Boolean,default:!1},imageRound:{type:Boolean,default:!0},classList:{type:String,default:""}},computed:{classes:function(){var t;return t={},Object(a.a)(t,"card-icon",this.icon),Object(a.a)(t,"card-image",this.image),Object(a.a)(t,"card-link",this.link||this.popup),Object(a.a)(t,"oldy","transparent"!=this.back),Object(a.a)(t,"oldy__link",this.link||this.popup),Object(a.a)(t,"card-".concat(this.back),!0),Object(a.a)(t,"card-imageSize-".concat(this.imageSize),this.icon||this.image),Object(a.a)(t,"".concat(this.orientation),!0),Object(a.a)(t,"card-popup",this.popup),Object(a.a)(t,"active",this.isActive),Object(a.a)(t,"".concat(this.classList),!0),t}}}),r=(o("E4Hk"),o("KHd+")),i=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"card",class:t.classes,attrs:{tabindex:"0"},on:{focusin:function(e){t.isActive=!0},focusout:function(e){t.isActive=!1}}},[t.icon?o("div",{staticClass:"icon"},[o("img",{attrs:{alt:"",src:t.icon}})]):t._e(),t.image?o("div",{staticClass:"image",class:{imageRound:t.imageRound}},[o("g-image",{attrs:{alt:"",src:t.image}})],1):t._e(),o("div",{staticClass:"content"},[t._t("default")],2),t.link?o("g-link",{staticClass:"link",attrs:{to:t.link}},[t._v("Link")]):t._e()],1)}),[],!1,null,null,null);e.a=i.exports},E4Hk:function(t,e,o){"use strict";o("F22k")},F22k:function(t,e,o){},UQSp:function(t,e,o){"use strict";e.a={name:"VueRemarkRoot",render:function(t){return t("div",null,this.$slots.default)}}}}]);