(window.webpackJsonp=window.webpackJsonp||[]).push([[27,8,52],{"6tRk":function(t,e,a){"use strict";a.r(e);var o=a("rePB"),n=(a("yXV3"),a("mRH6"),{data:function(){return{isActive:!1}},props:{link:{type:String},icon:{type:String},image:{type:String},button:{type:String},orientation:{type:String,default:"gorizontal"},back:{type:String,default:"white",validator:function(t){return-1!==["white","gradient","transparent"].indexOf(t)}},imageSize:{type:String,default:"small",validator:function(t){return-1!==["small","big"].indexOf(t)}},popup:{type:Boolean,default:!1},imageRound:{type:Boolean,default:!0},classList:{type:String,default:""}},computed:{classes:function(){var t;return t={},Object(o.a)(t,"card-icon",this.icon),Object(o.a)(t,"card-image",this.image),Object(o.a)(t,"card-link",this.link||this.popup),Object(o.a)(t,"oldy","transparent"!=this.back),Object(o.a)(t,"oldy__link",this.link||this.popup),Object(o.a)(t,"card-".concat(this.back),!0),Object(o.a)(t,"card-imageSize-".concat(this.imageSize),this.icon||this.image),Object(o.a)(t,"".concat(this.orientation),!0),Object(o.a)(t,"card-popup",this.popup),Object(o.a)(t,"active",this.isActive),Object(o.a)(t,"".concat(this.classList),!0),t}}}),i=(a("E4Hk"),a("KHd+")),r=Object(i.a)(n,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card",class:t.classes,attrs:{tabindex:"0"},on:{focusin:function(e){t.isActive=!0},focusout:function(e){t.isActive=!1}}},[t.icon?a("div",{staticClass:"icon"},[a("img",{attrs:{alt:"",src:t.icon}})]):t._e(),t.image?a("div",{staticClass:"image",class:{imageRound:t.imageRound}},[a("g-image",{attrs:{alt:"",src:t.image}})],1):t._e(),a("div",{staticClass:"content"},[t._t("default")],2),t.link?a("g-link",{staticClass:"link",attrs:{to:t.link}},[t._v("Link")]):t._e()],1)}),[],!1,null,null,null);e.default=r.exports},E4Hk:function(t,e,a){"use strict";a("F22k")},F22k:function(t,e,a){},Kn2e:function(t,e,a){"use strict";a.r(e);var o=a("rePB"),n={props:{link:{type:String},label:{type:String},button:{type:String,default:"border"},scale:{type:String,default:"1"},disabled:{type:Boolean,default:!1},click:{type:Function}},computed:{classes:function(){var t;return t={},Object(o.a)(t,"button",!0),Object(o.a)(t,"".concat(this.button),!0),t}}},i=a("KHd+"),r=Object(i.a)(n,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.link?a("g-link",{class:t.classes,style:{transform:"scale("+t.scale+")"},attrs:{to:t.link}},[t._v(t._s(t.label))]):a("button",{class:t.classes,style:{transform:"scale("+t.scale+")"},attrs:{type:"submit",disabled:t.disabled},on:{click:function(e){return t.$emit("click")}}},[t.label?[t._v(t._s(t.label))]:[t._t("default")]],2)}),[],!1,null,null,null);e.default=r.exports},UQSp:function(t,e,a){"use strict";e.a={name:"VueRemarkRoot",render:function(t){return t("div",null,this.$slots.default)}}},V6D9:function(t,e,a){"use strict";a.r(e);var o=a("KHd+"),n=a("6tRk"),i=a("Kn2e"),r=a("UQSp"),s=a("Kw5r");function c(t){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}s.a.config.optionMergeStrategies;var l={Card:n.default,Button:i.default,VueRemarkRoot:r.a},u=function(t){var e=t.options.components=t.options.components||{},a=t.options.computed=t.options.computed||{};Object.keys(l).forEach((function(t){"object"===c(l[t])&&"function"==typeof l[t].render||"function"==typeof l[t]&&"function"==typeof l[t].options.render?e[t]=l[t]:a[t]=function(){return l[t]}}))},d=s.a.config.optionMergeStrategies,p="__vueRemarkFrontMatter",h={excerpt:null,title:"Robonomics Supports Academia in Robotics and IoT",published:!0,description:"Meet Robonomics network – secure, сost-effective, and futuristic IoT platform for connecting robotics under Polkadot and Ethereum control",abstract:"Our experience has shown that the decentralized web is a promising technology in terms of security and organization for tasks where many heterogeneous devices appear. We believe in it and we want go futher, lets go together."};var m=function(t){t.options[p]&&(t.options[p]=h),s.a.util.defineReactive(t.options,p,h),t.options.computed=d.computed({$frontmatter:function(){return t.options[p]}},t.options.computed)},f=Object(o.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("VueRemarkRoot",[a("hr"),a("h2",{attrs:{id:"fast-funding-instead-standard-grants"}},[t._v("Fast funding instead standard grants")]),a("section",{staticClass:"layout__text"},[a("p",[t._v("We want to showcase a variety of robotic devices powered by web3 tools as well as results of experiments with them and developed modules in repositories. ")])]),a("section",{staticClass:"grid-3"},[a("Card",{attrs:{icon:"/land/icon-team.png",orientation:"vertical"}},[a("h3",{attrs:{id:"-50-academic-projects"}},[t._v("~ 50 academic projects")]),a("p",[t._v("We expect to gather about 50 teams. Each team can participate up to two people.")])]),a("Card",{attrs:{icon:"/land/icon-money.png",orientation:"vertical"}},[a("h3",{attrs:{id:"-2000-in-xrt-or-ksm-tokens-for-each-team"}},[t._v("~ $2000 in XRT or KSM tokens for each team")]),a("p",[t._v("300$ — for small external costs (to buy sensors, rent cloud, etc.); the remaining amount — on operating costs of researchers to launch the device.")])]),a("Card",{attrs:{icon:"/land/icon-academia.png",orientation:"vertical"}},[a("h3",{attrs:{id:"support-for-young-scientists-and-student"}},[t._v("Support for young scientists and student")]),a("p",[t._v("This support program is open to senior masters and PhD students from world universities involved in any projects related to robotic and IoT devices performing a real task.")])])],1),a("Button",{attrs:{link:"https://share.hsforms.com/1yfFteDkHTEi_L_YSqvEmnQ535vx",label:"Contact us",scale:"1.4",button:"primary"}}),a("hr"),a("h2",{attrs:{id:"why-polkadot-and-kusama"}},[t._v("Why Polkadot and Kusama?")]),a("section",{staticClass:"layout__text align-left"},[a("p",[t._v('Robonomics has recently been actively working with the Polkadot ecosystem and its "wild cousin" the Kusama network. Both networks are designed to build your own custom blockchains (parachains) on top of the main blockchain (relay chain) and to communicate between custom blockchains and any other external blockchains (using "bridges"). These are the state-of-the-art projects of web3 technologies that allow working with the ledger flexibly, performing transactions more confidentially, accurately and quickly (over 1000 tps on the relay chain). The main difference between Kusama and Polkadot is that Kusama is designed for broad experimentation with a network with low economic barriers and faster community decision making.')]),a("p",[t._v("Right now Robonomics "),a("a",{attrs:{href:"https://blog.aira.life/robonomics-parachain-on-kusama-40853780c709",target:"_blank",rel:"nofollow noopener noreferrer"}},[t._v("is working to become a parachain on the Kusama network")]),t._v(" as soon as the opportunity arises. We chose Kusama as the core network for the Initiative because positioning Kusama as a wild ground for the experimentation fits perfectly into the academic community of experimenters. While we are waiting for the launch of the parachain, we start working on this Support program right now, because all the developed runtime modules (pallets) will be compatible with any Substrate-based parachain on Kusama.")]),a("hr"),a("h2",{attrs:{id:"each-team-will-go-through-the-following-general-steps"}},[t._v("Each team will go through the following general steps:")]),a("Card",{attrs:{back:"transparent"}},[a("h3",{attrs:{id:"1-analysis-of-the-ros-module-of-the-device-correcting-and-testing-the-module"}},[t._v("1. Analysis of the ROS-module of the device, correcting and testing the module.")]),a("p",[t._v("Since the Robonomics is an implementation of the ROS framework as a Substrate chain, in order to connect the device to the network, it is needed a robot’s module for ROS. Many ready-made modules have been written for ROS, but they may have to be partially rewritten. They will also need to be linked with Robonomics on Substrate.")])]),a("Card",{attrs:{back:"transparent"}},[a("h3",{attrs:{id:"2-device-activation"}},[t._v("2. Device activation")]),a("p",[t._v("This requires planning what kind of activity the robot will demonstrate (cargo transfer, trajectory repetition, data collection, etc).")])]),a("Card",{attrs:{back:"transparent"}},[a("h3",{attrs:{id:"3-collection-and-sending-of-telemetry-data"}},[t._v("3. Collection and sending of telemetry data")]),a("p",[t._v("During the execution of tasks, the device should publish event data, debug information and work results to the network.")])]),a("Card",{attrs:{back:"transparent"}},[a("h3",{attrs:{id:"4-preparation-of-results"}},[t._v("4. Preparation of results")]),a("p",[t._v("This includes three main results:")]),a("ul",[a("li",[a("p",[t._v("Filming and editing video with demonstration of a working device — at the end we will collect the demos into one big montage (similar to ROS 10 Year Montage).")])]),a("li",[a("p",[t._v("Documenting an open repository with a README, where it needs to indicate all the necessary information; then teams need to send a pull request to the specially Robonomics repository, where we will collect all the modules.")])]),a("li",[a("p",[t._v("Posting a small report to blogs (e.g. on Medium).")])]),a("li",[a("p",[a("strong",[t._v("[Extra]")]),t._v(" We also strongly encourage participants to use the results obtained for the publication of scientific articles.")])])])]),a("hr"),a("h2",{attrs:{id:"why-is-it-important"}},[t._v("Why is it important?")]),a("p",[t._v("Web3 help to clear the way for the Robot-as-a-Service business model, in which robots can be leased or hired to perform your tasks. What are the pitfalls of the RaaS model? Because there are potentially many devices, there is an increase in transaction and security costs. Right now, the only solution for RaaS is large cloud services, but trusting a giant center to control for a multitude of drones or sensors is too insecure and transaction fees of clouds are too high. This is where a niche for Web3 technologies appears. They not only better bypass the pitfalls of RaaS, but also significantly facilitate the exchange of technical and economic information between humans / robots and between different robots.")]),a("p",[t._v("This will open the way for projects such as: "),a("a",{attrs:{href:"https://youtu.be/Pw98u0huGvI",target:"_blank",rel:"nofollow noopener noreferrer"}},[t._v("drones")]),t._v(" that perform flight mission orders; "),a("a",{attrs:{href:"https://youtu.be/LjIB3-4kQ0A",target:"_blank",rel:"nofollow noopener noreferrer"}},[t._v("automatic production control")]),t._v(" using feedback from market analysis; "),a("a",{attrs:{href:"https://blog.aira.life/water-drone-2-0-first-stage-of-development-db8ad6c81d3c",target:"_blank",rel:"nofollow noopener noreferrer"}},[t._v("water vessels")]),t._v(" that record water quality in a blockchain; "),a("a",{attrs:{href:"https://youtu.be/xSD_lsrAA0I",target:"_blank",rel:"nofollow noopener noreferrer"}},[t._v("robot artist")]),t._v(" which sells its work at auction.")]),a("hr"),a("h2",{attrs:{id:"our-support-team"}},[t._v("Our support team")]),a("Card",{attrs:{image:"/land/support-academia/Ivan-Berman.jpg",link:"https://scholar.google.com/citations?user=jo5zE10AAAAJ",imageSize:"big"}},[a("h3",{attrs:{id:"ivan-berman"}},[t._v("Ivan Berman")]),a("p",[t._v("Chief Coordinator, responsible for liaison between the academy, Robonomics technical support and the Kusama community and helping teams during the preparation of robots and results.")])]),a("Card",{attrs:{image:"/land/support-academia/Maria-Sigutina.jpg",link:"https://int.itmo.ru/en/departments/structure/22",imageSize:"big"}},[a("h3",{attrs:{id:"maria-sigutina"}},[t._v("Maria Sigutina")]),a("p",[t._v("Liaison Officer of ITMO’s European Liaison Office in Brussels, responsible for negotiating / corresponding with representatives of universities.")])]),a("Card",{attrs:{image:"/land/support-academia/Vadim-Manaenko.jpg",link:"https://twitter.com/vadim_manaenko",imageSize:"big"}},[a("h3",{attrs:{id:"vadim-manaenko"}},[t._v("Vadim Manaenko")]),a("p",[t._v("Robonomics Engineer, responsible for technical support of academic teams.")])]),a("Card",{attrs:{image:"/land/support-academia/Alexander-Kapitonov.jpg",link:"https://scholar.google.com/citations?user=J3HFpjoAAAAJ",imageSize:"big"}},[a("h3",{attrs:{id:"alexander-kapitonov"}},[t._v("Alexander Kapitonov")]),a("p",[t._v("Academic Advisor, responsible for consulting teams in setting up experiments.")])]),a("Card",{attrs:{image:"/land/support-academia/Fabio-Bonsignorio.jpg",link:"http://www.heronrobots.com/about/people-info/15-fabio-bonsignorio",imageSize:"big"}},[a("h3",{attrs:{id:"fabio-bonsignorio"}},[t._v("Fabio Bonsignorio")]),a("p",[t._v("Academic Advisor, responsible for checking the results of experiments.")])])],1),a("hr"),a("h2",{attrs:{id:"we-need-you"}},[t._v("We need you!")]),a("section",{staticClass:"layout__text align-left"},[a("ul",[a("li",[a("p",[a("strong",[t._v("If you are a student")]),t._v(" and want to participate in the project, then contact your supervisor, discuss the conditions and contact us together.")])]),a("li",[a("p",[a("strong",[t._v("If you are a representative of the academic community")]),t._v(" and are interested in a project, then we need help finding contacts at universities.")])]),a("li",[a("p",[a("strong",[t._v("If you are a Kusama enthusiast")]),t._v(" and you are interested in the project, then help us convey our ideas to the Kusama community and councillors.")])])])]),a("Button",{attrs:{link:"https://share.hsforms.com/1yfFteDkHTEi_L_YSqvEmnQ535vx",label:"Contact us",scale:"1.4",button:"primary"}}),a("hr")],1)}),[],!1,null,null,null);"function"==typeof u&&u(f),"function"==typeof m&&m(f);e.default=f.exports}}]);