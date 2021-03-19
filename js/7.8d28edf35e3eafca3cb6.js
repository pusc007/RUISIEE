(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{108:function(t,v,e){},109:function(t,v,e){},110:function(t,v,e){},111:function(t,v,e){"use strict";e(108)},112:function(t,v,e){"use strict";e(109)},113:function(t,v,e){"use strict";var _=function(){var t=this.$createElement,v=this._self._c||t;return v("div",{staticClass:"goTop"},[v("transition",{attrs:{name:"jump"}},[this.show?v("div",{staticClass:"fixedPos"},[v("div",{staticClass:"topBtn",on:{click:this.topBtn_click}},[this._v("TOP")])]):this._e()])],1)};_._withStripped=!0;var i={name:"GoTop",props:{},data:function(){return{show:!1}},methods:{getScrollY:function(){return window.scrollY|document.documentElement.scrollTop},onscroll:function(){var t=this.getScrollY();this.show=t>300},onresize:function(){this.onscroll()},topBtn_click:function(){window.scrollTo({top:0,behavior:"smooth"})}},mounted:function(){window.addEventListener("scroll",this.onscroll),window.addEventListener("resize",this.onresize)},beforeDestroy:function(){window.removeEventListener("scroll",this.onscroll),window.removeEventListener("resize",this.onresize)},computed:{}},s=(e(111),e(112),e(3)),n=Object(s.a)(i,_,[],!1,null,"0ec25fa2",null);n.options.__file="src/vue/page/components/GoTop.vue";v.a=n.exports},114:function(t,v,e){"use strict";v.a={computed:{nextPath:function(){var t=this.$route.matched;return t[Math.max(t.length-2,0)].path}}}},115:function(t,v,e){"use strict";e(110)},116:function(t,v,e){"use strict";var _=function(){var t=this.$createElement,v=this._self._c||t;return v("div",{staticClass:"my-4 d-flex justify-content-center"},[v("img",{directives:[{name:"lazy",rawName:"v-lazy",value:this.imgUrl,expression:"imgUrl"}],staticClass:"img w-100",attrs:{alt:""}})])};_._withStripped=!0;var i={components:{},props:{imgUrl:{type:String,default:"aaa"}},data:function(){return{}},mounted:function(){},methods:{},computed:{}},s=(e(115),e(3)),n=Object(s.a)(i,_,[],!1,null,"44cd44b7",null);n.options.__file="src/vue/page/components/ProductItem.vue";v.a=n.exports},117:function(t,v,e){},120:function(t,v,e){"use strict";e(117)},121:function(t,v,e){"use strict";var _=function(){var t=this,v=t.$createElement,e=t._self._c||v;return e("div",[t._m(0),t._v(" "),t._m(1),t._v(" "),e("div",{staticClass:"item"},[e("div",{staticClass:"itemTitle"},[t._v("UV光解技术原理图如下：")]),t._v(" "),e("div",{staticClass:"itemContent"},[e("img",{staticClass:"img",attrs:{src:t.info_1_pic_1,alt:""}})])]),t._v(" "),t._m(2)])};_._withStripped=!0;var i=e.p+"img/info-1-pic-1.161e53b0547ae44d22f5044cdf882656.png",s={components:{},data:function(){return{info_1_pic_1:i}},mounted:function(){},methods:{},computed:{}},n=(e(120),e(3)),o=Object(n.a)(s,_,[function(){var t=this,v=t.$createElement,e=t._self._c||v;return e("div",{staticClass:"item"},[e("div",{staticClass:"itemTitle center"},[t._v("ZYHB系列UV光解废气净化设备选型参数表")]),t._v(" "),e("div",{staticClass:"itemContent"},[e("div",{staticClass:"tableBox"},[e("table",[e("tbody",[e("tr",[e("td",{attrs:{rowspan:"2"}},[t._v("序号")]),t._v(" "),e("td",{attrs:{rowspan:"2"}},[t._v("设备型号")]),t._v(" "),e("td",[t._v("设备尺寸")]),t._v(" "),e("td",[t._v("法兰尺寸(内径)")]),t._v(" "),e("td",[t._v("功率/电压")]),t._v(" "),e("td",[t._v("处理风量")]),t._v(" "),e("td",[t._v("风阻")]),t._v(" "),e("td",{attrs:{rowspan:"2"}},[t._v("备注")])]),t._v(" "),e("tr",[e("td",[t._v("长×宽×高(mm)")]),t._v(" "),e("td",[t._v("长×宽(mm)")]),t._v(" "),e("td",[t._v("Kw/V")]),t._v(" "),e("td",[t._v("m3/h")]),t._v(" "),e("td",[t._v("Pa")])]),t._v(" "),e("tr",[e("td",[t._v("1")]),t._v(" "),e("td",[t._v("ZYHB-UV5K")]),t._v(" "),e("td",[t._v("840×1000×1350")]),t._v(" "),e("td",[t._v("770×1120")]),t._v(" "),e("td",[t._v("1.8")]),t._v(" "),e("td",[t._v("5000")]),t._v(" "),e("td",[t._v("<150")]),t._v(" "),e("td",[t._v(" ")])]),t._v(" "),e("tr",[e("td",[t._v("2")]),t._v(" "),e("td",[t._v("ZYHB-UV10K")]),t._v(" "),e("td",[t._v("1500×1000×1350")]),t._v(" "),e("td",[t._v("770×1120")]),t._v(" "),e("td",[t._v("3.6")]),t._v(" "),e("td",[t._v("10000")]),t._v(" "),e("td",[t._v("<150")]),t._v(" "),e("td",[t._v(" ")])]),t._v(" "),e("tr",[e("td",[t._v("3")]),t._v(" "),e("td",[t._v("ZYHB-UV15K")]),t._v(" "),e("td",[t._v("2100×1000×1350")]),t._v(" "),e("td",[t._v("770×1120")]),t._v(" "),e("td",[t._v("5.4")]),t._v(" "),e("td",[t._v("15000")]),t._v(" "),e("td",[t._v("<200")]),t._v(" "),e("td",[t._v(" ")])]),t._v(" "),e("tr",[e("td",[t._v("4")]),t._v(" "),e("td",[t._v("ZYHB-UV20K")]),t._v(" "),e("td",[t._v("2695×1000×1350")]),t._v(" "),e("td",[t._v("770×1120")]),t._v(" "),e("td",[t._v("7.2")]),t._v(" "),e("td",[t._v("20000")]),t._v(" "),e("td",[t._v("<250")]),t._v(" "),e("td",[t._v(" ")])]),t._v(" "),e("tr",[e("td",[t._v("5")]),t._v(" "),e("td",[t._v("ZYHB-UV25K")]),t._v(" "),e("td",[t._v("3445×1200×1350")]),t._v(" "),e("td",[t._v("770×1120")]),t._v(" "),e("td",[t._v("9")]),t._v(" "),e("td",[t._v("25000")]),t._v(" "),e("td",[t._v("<250")]),t._v(" "),e("td",[t._v(" ")])]),t._v(" "),e("tr",[e("td",[t._v("6")]),t._v(" "),e("td",[t._v("ZYHB-UV30K")]),t._v(" "),e("td",[t._v("1800×1900×1900")]),t._v(" "),e("td",[t._v("1400×1600")]),t._v(" "),e("td",[t._v("10.8")]),t._v(" "),e("td",[t._v("30000")]),t._v(" "),e("td",[t._v("<250")]),t._v(" "),e("td",[t._v(" ")])]),t._v(" "),e("tr",[e("td",[t._v("7")]),t._v(" "),e("td",[t._v("ZYHB-UV40K")]),t._v(" "),e("td",[t._v("2400×1900×1900")]),t._v(" "),e("td",[t._v("1400×1600")]),t._v(" "),e("td",[t._v("14.4")]),t._v(" "),e("td",[t._v("40000")]),t._v(" "),e("td",[t._v("<300")]),t._v(" "),e("td",[t._v(" ")])]),t._v(" "),e("tr",[e("td",[t._v("8")]),t._v(" "),e("td",[t._v("ZYHB-UV50K")]),t._v(" "),e("td",[t._v("3100×1900×1900")]),t._v(" "),e("td",[t._v("1400×1600")]),t._v(" "),e("td",[t._v("18")]),t._v(" "),e("td",[t._v("50000")]),t._v(" "),e("td",[t._v("<300")]),t._v(" "),e("td",[t._v(" ")])])])])])])])},function(){var t=this.$createElement,v=this._self._c||t;return v("div",{staticClass:"item"},[v("div",{staticClass:"itemTitle"},[this._v("技术原理")]),this._v(" "),v("div",{staticClass:"itemContent"},[this._v("\n      UV光解废气处理技术采用高能高臭氧的UV紫外光将恶臭气体分子键断裂，生成离子、原子、自由基等活性物质，同时分解空气中的氧气分子，使其生成臭氧，臭氧有极强的氧化性，与被裂解的臭气分子作用，将其氧化分解成无害物质，如二氧化碳、水等，同时高能电场将恶臭气体分子击穿，产生活性物质，与臭氧作用，被氧化分解成小分子物质。等离子体裂解反应、UV紫外光解反应，臭氧高级氧化反应及协同氧化反应同时发生，两种技术相互协助，使处理效果更好。\n    ")])])},function(){var t=this.$createElement,v=this._self._c||t;return v("div",{staticClass:"item"},[v("div",{staticClass:"itemTitle"},[this._v("适用领域")]),this._v(" "),v("div",{staticClass:"itemContent"},[this._v("\n      该工艺净化效率高，可以净化大部分废气，主要用于喷漆车间、油墨印刷、喷涂车间、化工、医药、橡胶、食品、印染、酿造、造纸、炼油厂、污水处理厂、垃圾焚烧发电（转运站、分拣处理厂、填埋场）等产生的有毒有害恶臭气体处理。\n    ")])])}],!1,null,"b8419e22",null);o.options.__file="src/vue/page/components/g-1-info-1.vue";v.a=o.exports},361:function(t,v,e){"use strict";e.r(v);var _=function(){var t=this,v=t.$createElement,e=t._self._c||v;return e("section",{staticClass:"section"},[e("div",{staticClass:"container py-4 position-relative"},[e("div",{staticClass:"title px-2 d-flex align-items-center"},[e("router-link",{attrs:{to:t.nextPath,custom:""},scopedSlots:t._u([{key:"default",fn:function(v){var _=v.href;return[e("a",{staticClass:"btn p-1 d-flex",attrs:{href:_}},[e("span",{staticClass:"material-icons"},[t._v("\n            keyboard_backspace\n          ")])])]}}])}),t._v(" "),e("div",{staticClass:"text"},[t._v(t._s(t.$route.meta.title))])],1),t._v(" "),e("div",{staticClass:"content"},[e("ProductItem",{attrs:{imgUrl:t.$route.meta.product_item_img}}),t._v(" "),e("g_1_info_1")],1),t._v(" "),e("GoTop")],1)])};_._withStripped=!0;var i=e(118),s=e.n(i),n=e(114),o=e(116),a=e(113),d=e(121),r={mixins:[n.a],components:{VueAos:s.a,ProductItem:o.a,GoTop:a.a,g_1_info_1:d.a},data:function(){return{product_item:this.$route.meta.product_item_img}},mounted:function(){},methods:{},computed:{}},c=e(3),l=Object(c.a)(r,_,[],!1,null,"24445cdc",null);l.options.__file="src/vue/page/product/g-1/Page-11.vue";v.default=l.exports}}]);