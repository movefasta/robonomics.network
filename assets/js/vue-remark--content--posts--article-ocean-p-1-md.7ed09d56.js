(window.webpackJsonp=window.webpackJsonp||[]).push([[29,52],{"6tRk":function(t,o,e){"use strict";e.r(o);var n=e("rePB"),a=(e("yXV3"),e("mRH6"),{data:function(){return{isActive:!1}},props:{link:{type:String},icon:{type:String},image:{type:String},button:{type:String},orientation:{type:String,default:"gorizontal"},back:{type:String,default:"white",validator:function(t){return-1!==["white","gradient","transparent"].indexOf(t)}},imageSize:{type:String,default:"small",validator:function(t){return-1!==["small","big"].indexOf(t)}},popup:{type:Boolean,default:!1},imageRound:{type:Boolean,default:!0},classList:{type:String,default:""}},computed:{classes:function(){var t;return t={},Object(n.a)(t,"card-icon",this.icon),Object(n.a)(t,"card-image",this.image),Object(n.a)(t,"card-link",this.link||this.popup),Object(n.a)(t,"oldy","transparent"!=this.back),Object(n.a)(t,"oldy__link",this.link||this.popup),Object(n.a)(t,"card-".concat(this.back),!0),Object(n.a)(t,"card-imageSize-".concat(this.imageSize),this.icon||this.image),Object(n.a)(t,"".concat(this.orientation),!0),Object(n.a)(t,"card-popup",this.popup),Object(n.a)(t,"active",this.isActive),Object(n.a)(t,"".concat(this.classList),!0),t}}}),i=(e("E4Hk"),e("KHd+")),r=Object(i.a)(a,(function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"card",class:t.classes,attrs:{tabindex:"0"},on:{focusin:function(o){t.isActive=!0},focusout:function(o){t.isActive=!1}}},[t.icon?e("div",{staticClass:"icon"},[e("img",{attrs:{alt:"",src:t.icon}})]):t._e(),t.image?e("div",{staticClass:"image",class:{imageRound:t.imageRound}},[e("g-image",{attrs:{alt:"",src:t.image}})],1):t._e(),e("div",{staticClass:"content"},[t._t("default")],2),t.link?e("g-link",{staticClass:"link",attrs:{to:t.link}},[t._v("Link")]):t._e()],1)}),[],!1,null,null,null);o.default=r.exports},E4Hk:function(t,o,e){"use strict";e("F22k")},F22k:function(t,o,e){},MUGl:function(t,o,e){"use strict";e.r(o);var n=e("KHd+"),a=e("6tRk"),i=e("UQSp"),r=e("Kw5r");function c(t){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}r.a.config.optionMergeStrategies;var s={Card:a.default,VueRemarkRoot:i.a},l=function(t){var o=t.options.components=t.options.components||{},e=t.options.computed=t.options.computed||{};Object.keys(s).forEach((function(t){"object"===c(s[t])&&"function"==typeof s[t].render||"function"==typeof s[t]&&"function"==typeof s[t].options.render?o[t]=s[t]:e[t]=function(){return s[t]}}))},p=r.a.config.optionMergeStrategies,u="__vueRemarkFrontMatter",d={excerpt:null,title:"Robonomics Network x Ocean Protocol Collaboration p.1",date:"2021-01-12T00:00:00.000Z",published:!0,tags:["Collaborations"],cover_image:"./images/OCEAN-p1/Robonomics_Ocean_1.jpg",description:"Announcement of the collaboration between OCEAN Protocol and Robonomics Network"};var m=function(t){t.options[u]&&(t.options[u]=d),r.a.util.defineReactive(t.options,u,d),t.options.computed=p.computed({$frontmatter:function(){return t.options[u]}},t.options.computed)},f=Object(n.a)({},(function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("VueRemarkRoot",[e("p",[t._v("We’re glad to announce that Robonomics Network enters into a partnership with OCEAN protocol.")]),e("blockquote",[e("p",[t._v("Robonomics.network - is a tool that allows developers and engineers to connect IoT & all ROS compatible devices to the digital economy.")])]),e("p",[t._v("With Robonomics, robots and IoT devices can become autonomous economic agents, meaning they can enter into legal obligations, own things, and do whatever humans can do on the open labor market and even more!")]),e("p",[t._v("Robots are producing a lot of data daily; some pieces of that data are quite valuable and could be monetized by a robot or its developer. Here comes the OCEAN protocol.")]),e("blockquote",[e("p",[t._v("OCEAN - is a protocol that allows monetizing any kind of data. Participants of the protocol can earn by selling and curating/staking on data.")])]),e("p",[t._v("The integration aims to create a sandbox for testing collaboration of both technologies for further development of pilot projects and products in 2021.")]),e("Card",{attrs:{image:"/avatars/Sergei-Lonshakov.jpg",back:"transparent"}},[e("h3",{attrs:{id:"sergei-lonshakov---software-architect-at-robonomicsnetwork--"}},[t._v("Sergei Lonshakov - Software architect at Robonomics.Network -")]),e("p",[t._v('"Joint experiments of Robonomics and OCEAN teams on the crossing subjects, specifically launch of the cyber-physical-systems and processing produced data will allow merging teams knowledge and could lead to marvelous discoveries within 1 year."')])]),e("Card",{attrs:{image:"/avatars/Manan-Patel.jpg",back:"transparent"}},[e("h3",{attrs:{id:"manan-patel---growth-accelerator-at-ocean-protocol--"}},[t._v("Manan Patel - Growth Accelerator at Ocean Protocol -")]),e("p",[t._v('"With this collaboration Ocean Protocol will help Robonomics to leverage their technology and discover new use cases in securely monetising plethora of data generated by robots and helping robots and related IoT devices become revenue generating machines."')])]),e("p",[t._v("One of the first milestones for this collaboration will be creating a course.\nIt’ll explain how to launch a device on Robonomics Network then store and monetize data on OCEAN protocol in virtual environment.")]),e("p",[t._v("We’ll release 2nd part of this article to dive deeper into the possible use-cases of this integration.")])],1)}),[],!1,null,null,null);"function"==typeof l&&l(f),"function"==typeof m&&m(f);o.default=f.exports},UQSp:function(t,o,e){"use strict";o.a={name:"VueRemarkRoot",render:function(t){return t("div",null,this.$slots.default)}}}}]);