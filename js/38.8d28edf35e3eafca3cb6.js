(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{108:function(t,v,_){},109:function(t,v,_){},110:function(t,v,_){},111:function(t,v,_){"use strict";_(108)},112:function(t,v,_){"use strict";_(109)},113:function(t,v,_){"use strict";var d=function(){var t=this.$createElement,v=this._self._c||t;return v("div",{staticClass:"goTop"},[v("transition",{attrs:{name:"jump"}},[this.show?v("div",{staticClass:"fixedPos"},[v("div",{staticClass:"topBtn",on:{click:this.topBtn_click}},[this._v("TOP")])]):this._e()])],1)};d._withStripped=!0;var e={name:"GoTop",props:{},data:function(){return{show:!1}},methods:{getScrollY:function(){return window.scrollY|document.documentElement.scrollTop},onscroll:function(){var t=this.getScrollY();this.show=t>300},onresize:function(){this.onscroll()},topBtn_click:function(){window.scrollTo({top:0,behavior:"smooth"})}},mounted:function(){window.addEventListener("scroll",this.onscroll),window.addEventListener("resize",this.onresize)},beforeDestroy:function(){window.removeEventListener("scroll",this.onscroll),window.removeEventListener("resize",this.onresize)},computed:{}},i=(_(111),_(112),_(3)),s=Object(i.a)(e,d,[],!1,null,"0ec25fa2",null);s.options.__file="src/vue/page/components/GoTop.vue";v.a=s.exports},114:function(t,v,_){"use strict";v.a={computed:{nextPath:function(){var t=this.$route.matched;return t[Math.max(t.length-2,0)].path}}}},115:function(t,v,_){"use strict";_(110)},116:function(t,v,_){"use strict";var d=function(){var t=this.$createElement,v=this._self._c||t;return v("div",{staticClass:"my-4 d-flex justify-content-center"},[v("img",{directives:[{name:"lazy",rawName:"v-lazy",value:this.imgUrl,expression:"imgUrl"}],staticClass:"img w-100",attrs:{alt:""}})])};d._withStripped=!0;var e={components:{},props:{imgUrl:{type:String,default:"aaa"}},data:function(){return{}},mounted:function(){},methods:{},computed:{}},i=(_(115),_(3)),s=Object(i.a)(e,d,[],!1,null,"44cd44b7",null);s.options.__file="src/vue/page/components/ProductItem.vue";v.a=s.exports},132:function(t,v,_){},137:function(t,v,_){"use strict";_(132)},139:function(t,v,_){"use strict";var d=function(){var t=this.$createElement;this._self._c;return this._m(0)};d._withStripped=!0;var e={components:{},data:function(){return{}},mounted:function(){},methods:{},computed:{}},i=(_(137),_(3)),s=Object(i.a)(e,d,[function(){var t=this,v=t.$createElement,_=t._self._c||v;return _("div",[_("div",{staticClass:"item"},[_("div",{staticClass:"itemTitle center"},[t._v("ZYHB-PL系列喷淋塔废气净化设备参数表")]),t._v(" "),_("div",{staticClass:"itemContent"},[_("div",{staticClass:"tableBox"},[_("table",[_("tbody",[_("tr",[_("td",{attrs:{rowspan:"2"}},[t._v("序号")]),t._v(" "),_("td",{attrs:{rowspan:"2"}},[t._v("设备型号")]),t._v(" "),_("td",{attrs:{rowspan:"2"}},[t._v("处理气量（m"),_("sup",[t._v("3")]),t._v("/h）")]),t._v(" "),_("td",{attrs:{rowspan:"2"}},[t._v("设备尺寸（m）")]),t._v(" "),_("td",{attrs:{colspan:"2"}},[t._v("填料体积（m"),_("sup",[t._v("3")]),t._v("）")]),t._v(" "),_("td",[t._v("循环泵")]),t._v(" "),_("td",[t._v("加液泵")]),t._v(" "),_("td",[t._v("备注")])]),t._v(" "),_("tr",[_("td",[t._v("洗涤段")]),t._v(" "),_("td",[t._v("过滤段")]),t._v(" "),_("td",[t._v("功率kw")]),t._v(" "),_("td",[t._v("功率kw")]),t._v(" "),_("td",[t._v(" ")])]),t._v(" "),_("tr",[_("td",[t._v("1")]),t._v(" "),_("td",[t._v("ZYHB-SW2K")]),t._v(" "),_("td",[t._v("2000-2500")]),t._v(" "),_("td",[t._v("4×2×2.8")]),t._v(" "),_("td",[t._v("2.4")]),t._v(" "),_("td",[t._v("7.2")]),t._v(" "),_("td",[t._v("1.5")]),t._v(" "),_("td",[t._v("1.5")]),t._v(" "),_("td",[t._v(" ")])]),t._v(" "),_("tr",[_("td",[t._v("2")]),t._v(" "),_("td",[t._v("ZYHB-SW2.5K")]),t._v(" "),_("td",[t._v("2500-3000")]),t._v(" "),_("td",[t._v("4×2.5×2.8")]),t._v(" "),_("td",[t._v("3")]),t._v(" "),_("td",[t._v("9")]),t._v(" "),_("td",[t._v("1.5")]),t._v(" "),_("td",[t._v("1.5")]),t._v(" "),_("td",[t._v(" ")])]),t._v(" "),_("tr",[_("td",[t._v("3")]),t._v(" "),_("td",[t._v("ZYHB-SW3K")]),t._v(" "),_("td",[t._v("3000-4000")]),t._v(" "),_("td",[t._v("5×2.5×2.8")]),t._v(" "),_("td",[t._v("3.75")]),t._v(" "),_("td",[t._v("11.25")]),t._v(" "),_("td",[t._v("1.5")]),t._v(" "),_("td",[t._v("2.2")]),t._v(" "),_("td",[t._v(" ")])]),t._v(" "),_("tr",[_("td",[t._v("4")]),t._v(" "),_("td",[t._v("ZYHB-SW5K")]),t._v(" "),_("td",[t._v("4000-5000")]),t._v(" "),_("td",[t._v("6×2.5×2.8")]),t._v(" "),_("td",[t._v("4.5")]),t._v(" "),_("td",[t._v("13.5")]),t._v(" "),_("td",[t._v("1.5")]),t._v(" "),_("td",[t._v("2.2")]),t._v(" "),_("td",[t._v(" ")])]),t._v(" "),_("tr",[_("td",[t._v("5")]),t._v(" "),_("td",[t._v("ZYHB-SW6K")]),t._v(" "),_("td",[t._v("5000-6000")]),t._v(" "),_("td",[t._v("6×3×2.8")]),t._v(" "),_("td",[t._v("5.4")]),t._v(" "),_("td",[t._v("16.2")]),t._v(" "),_("td",[t._v("2.2")]),t._v(" "),_("td",[t._v("3.0")]),t._v(" "),_("td",[t._v(" ")])]),t._v(" "),_("tr",[_("td",[t._v("6")]),t._v(" "),_("td",[t._v("ZYHB-SW8K")]),t._v(" "),_("td",[t._v("6000-8000")]),t._v(" "),_("td",[t._v("8×3×2.8")]),t._v(" "),_("td",[t._v("7.2")]),t._v(" "),_("td",[t._v("21.6")]),t._v(" "),_("td",[t._v("2.2")]),t._v(" "),_("td",[t._v("3.0")]),t._v(" "),_("td",[t._v(" ")])]),t._v(" "),_("tr",[_("td",[t._v("7")]),t._v(" "),_("td",[t._v("ZYHB-SW10K")]),t._v(" "),_("td",[t._v("8000-10000")]),t._v(" "),_("td",[t._v("10×3×3")]),t._v(" "),_("td",[t._v("9")]),t._v(" "),_("td",[t._v("27")]),t._v(" "),_("td",[t._v("3.0")]),t._v(" "),_("td",[t._v("3.0")]),t._v(" "),_("td",[t._v(" ")])]),t._v(" "),_("tr",[_("td",[t._v("8")]),t._v(" "),_("td",[t._v("ZYHB-SW12K")]),t._v(" "),_("td",[t._v("10000-12000")]),t._v(" "),_("td",[t._v("12×3×3")]),t._v(" "),_("td",[t._v("10.8")]),t._v(" "),_("td",[t._v("32.4")]),t._v(" "),_("td",[t._v("3.0")]),t._v(" "),_("td",[t._v("4.0")]),t._v(" "),_("td",[t._v(" ")])]),t._v(" "),_("tr",[_("td",[t._v("9")]),t._v(" "),_("td",[t._v("ZYHB-SW15K")]),t._v(" "),_("td",[t._v("12000-15000")]),t._v(" "),_("td",[t._v("15×3×3")]),t._v(" "),_("td",[t._v("13.5")]),t._v(" "),_("td",[t._v("40.5")]),t._v(" "),_("td",[t._v("3.0")]),t._v(" "),_("td",[t._v("5.5")]),t._v(" "),_("td",[t._v(" ")])]),t._v(" "),_("tr",[_("td",[t._v("10")]),t._v(" "),_("td",[t._v("ZYHB-SW18K")]),t._v(" "),_("td",[t._v("15000-18000")]),t._v(" "),_("td",[t._v("15×3.5×3")]),t._v(" "),_("td",[t._v("15.75")]),t._v(" "),_("td",[t._v("47.25")]),t._v(" "),_("td",[t._v("4.0")]),t._v(" "),_("td",[t._v("5.5")]),t._v(" "),_("td",[t._v(" ")])]),t._v(" "),_("tr",[_("td",[t._v("11")]),t._v(" "),_("td",[t._v("ZYHB-SW20K")]),t._v(" "),_("td",[t._v("18000-20000")]),t._v(" "),_("td",[t._v("15×4×3")]),t._v(" "),_("td",[t._v("18")]),t._v(" "),_("td",[t._v("54")]),t._v(" "),_("td",[t._v("5.5")]),t._v(" "),_("td",[t._v("7.5")]),t._v(" "),_("td",[t._v(" ")])]),t._v(" "),_("tr",[_("td",[t._v("12")]),t._v(" "),_("td",[t._v("ZYHB-SW25K")]),t._v(" "),_("td",[t._v("20000-25000")]),t._v(" "),_("td",[t._v("15×5×3")]),t._v(" "),_("td",[t._v("22.5")]),t._v(" "),_("td",[t._v("67.5")]),t._v(" "),_("td",[t._v("5.5")]),t._v(" "),_("td",[t._v("7.5")]),t._v(" "),_("td",[t._v(" ")])]),t._v(" "),_("tr",[_("td",[t._v("13")]),t._v(" "),_("td",[t._v("ZYHB-SW30K")]),t._v(" "),_("td",[t._v("25000-30000")]),t._v(" "),_("td",[t._v("15×6×3")]),t._v(" "),_("td",[t._v("27")]),t._v(" "),_("td",[t._v("81")]),t._v(" "),_("td",[t._v("5.5")]),t._v(" "),_("td",[t._v("7.5")]),t._v(" "),_("td",[t._v(" ")])]),t._v(" "),_("tr",[_("td",[t._v("14")]),t._v(" "),_("td",[t._v("ZYHB-SW35K")]),t._v(" "),_("td",[t._v("30000-35000")]),t._v(" "),_("td",[t._v("18×6×3")]),t._v(" "),_("td",[t._v("32.4")]),t._v(" "),_("td",[t._v("97.2")]),t._v(" "),_("td",[t._v("7.5")]),t._v(" "),_("td",[t._v("7.5")]),t._v(" "),_("td",[t._v(" ")])]),t._v(" "),_("tr",[_("td",[t._v("15")]),t._v(" "),_("td",[t._v("ZYHB-SW40K")]),t._v(" "),_("td",[t._v("35000-40000")]),t._v(" "),_("td",[t._v("20×6×3")]),t._v(" "),_("td",[t._v("36")]),t._v(" "),_("td",[t._v("108")]),t._v(" "),_("td",[t._v("7.5")]),t._v(" "),_("td",[t._v("7.5")]),t._v(" "),_("td",[t._v(" ")])]),t._v(" "),_("tr",[_("td",[t._v("16")]),t._v(" "),_("td",[t._v("ZYHB-SW45K")]),t._v(" "),_("td",[t._v("40000-45000")]),t._v(" "),_("td",[t._v("20×7×3")]),t._v(" "),_("td",[t._v("42")]),t._v(" "),_("td",[t._v("126")]),t._v(" "),_("td",[t._v("9.2")]),t._v(" "),_("td",[t._v("7.5")]),t._v(" "),_("td",[t._v(" ")])]),t._v(" "),_("tr",[_("td",[t._v("17")]),t._v(" "),_("td",[t._v("ZYHB-SW50K")]),t._v(" "),_("td",[t._v("45000-50000")]),t._v(" "),_("td",[t._v("22×7×3")]),t._v(" "),_("td",[t._v("46.2")]),t._v(" "),_("td",[t._v("138.6")]),t._v(" "),_("td",[t._v("9.2")]),t._v(" "),_("td",[t._v("7.5")]),t._v(" "),_("td",[t._v(" ")])])])])])])]),t._v(" "),_("div",{staticClass:"item"},[_("div",{staticClass:"itemTitle"},[t._v("性能优点")]),t._v(" "),_("div",{staticClass:"itemContent left"},[_("ol",[_("li",[t._v("处理效果高、除臭效果好")]),t._v(" "),_("li",[t._v("除臭工艺先进、合理")]),t._v(" "),_("li",[t._v("微生物活性高")]),t._v(" "),_("li",[t._v("耐冲击负荷容量大")]),t._v(" "),_("li",[t._v("生物填料寿命长")]),t._v(" "),_("li",[t._v("设备操作简单、无需维护")]),t._v(" "),_("li",[t._v("自动控制、全自动运行")]),t._v(" "),_("li",[t._v("整体或模块组装式")]),t._v(" "),_("li",[t._v("压损低、能耗省")]),t._v(" "),_("li",[t._v("运行费用少")])])])]),t._v(" "),_("div",{staticClass:"item"},[_("div",{staticClass:"itemTitle"},[t._v("适用领域")]),t._v(" "),_("div",{staticClass:"itemContent"},[t._v("\n      生物除臭工艺可广泛用于污水处理厂（泵站臭气、预处理臭气、污泥处理臭气）、垃圾处理厂（垃圾房、收集站臭气、分选车间臭气）、涂料厂、塑料厂、橡胶厂、饲料加工厂、食品饮料厂、制药厂、香料厂、烟草加工厂、养殖场等行业产生的异味净化等。\n    ")])])])}],!1,null,"8a17bde8",null);s.options.__file="src/vue/page/components/g-4-info-1.vue";v.a=s.exports},386:function(t,v,_){"use strict";_.r(v);var d=function(){var t=this,v=t.$createElement,_=t._self._c||v;return _("section",{staticClass:"section"},[_("div",{staticClass:"container py-4 position-relative"},[_("div",{staticClass:"title px-2 d-flex align-items-center"},[_("router-link",{attrs:{to:t.nextPath,custom:""},scopedSlots:t._u([{key:"default",fn:function(v){var d=v.href;return[_("a",{staticClass:"btn p-1 d-flex",attrs:{href:d}},[_("span",{staticClass:"material-icons"},[t._v("\n            keyboard_backspace\n          ")])])]}}])}),t._v(" "),_("div",{staticClass:"text"},[t._v(t._s(t.$route.meta.title))])],1),t._v(" "),_("div",{staticClass:"content"},[_("ProductItem",{attrs:{imgUrl:t.$route.meta.product_item_img}}),t._v(" "),_("g_4_info_1")],1),t._v(" "),_("GoTop")],1)])};d._withStripped=!0;var e=_(118),i=_.n(e),s=_(114),n=_(116),o=_(113),r=_(139),a={mixins:[s.a],components:{VueAos:i.a,ProductItem:n.a,GoTop:o.a,g_4_info_1:r.a},data:function(){return{}},mounted:function(){},methods:{},computed:{}},c=_(3),l=Object(c.a)(a,d,[],!1,null,"95951d7a",null);l.options.__file="src/vue/page/product/g-4/Page-2.vue";v.default=l.exports}}]);