(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{108:function(t,v,_){},109:function(t,v,_){},110:function(t,v,_){},111:function(t,v,_){"use strict";_(108)},112:function(t,v,_){"use strict";_(109)},113:function(t,v,_){"use strict";var e=function(){var t=this.$createElement,v=this._self._c||t;return v("div",{staticClass:"goTop"},[v("transition",{attrs:{name:"jump"}},[this.show?v("div",{staticClass:"fixedPos"},[v("div",{staticClass:"topBtn",on:{click:this.topBtn_click}},[this._v("TOP")])]):this._e()])],1)};e._withStripped=!0;var n={name:"GoTop",props:{},data:function(){return{show:!1}},methods:{getScrollY:function(){return window.scrollY|document.documentElement.scrollTop},onscroll:function(){var t=this.getScrollY();this.show=t>300},onresize:function(){this.onscroll()},topBtn_click:function(){window.scrollTo({top:0,behavior:"smooth"})}},mounted:function(){window.addEventListener("scroll",this.onscroll),window.addEventListener("resize",this.onresize)},beforeDestroy:function(){window.removeEventListener("scroll",this.onscroll),window.removeEventListener("resize",this.onresize)},computed:{}},i=(_(111),_(112),_(3)),s=Object(i.a)(n,e,[],!1,null,"0ec25fa2",null);s.options.__file="src/vue/page/components/GoTop.vue";v.a=s.exports},114:function(t,v,_){"use strict";v.a={computed:{nextPath:function(){var t=this.$route.matched;return t[Math.max(t.length-2,0)].path}}}},115:function(t,v,_){"use strict";_(110)},116:function(t,v,_){"use strict";var e=function(){var t=this.$createElement,v=this._self._c||t;return v("div",{staticClass:"my-4 d-flex justify-content-center"},[v("img",{directives:[{name:"lazy",rawName:"v-lazy",value:this.imgUrl,expression:"imgUrl"}],staticClass:"img w-100",attrs:{alt:""}})])};e._withStripped=!0;var n={components:{},props:{imgUrl:{type:String,default:"aaa"}},data:function(){return{}},mounted:function(){},methods:{},computed:{}},i=(_(115),_(3)),s=Object(i.a)(n,e,[],!1,null,"44cd44b7",null);s.options.__file="src/vue/page/components/ProductItem.vue";v.a=s.exports},119:function(t,v,_){},122:function(t,v,_){"use strict";_(119)},123:function(t,v,_){"use strict";var e=function(){var t=this.$createElement;this._self._c;return this._m(0)};e._withStripped=!0;var n={components:{},data:function(){return{}},mounted:function(){},methods:{},computed:{}},i=(_(122),_(3)),s=Object(i.a)(n,e,[function(){var t=this,v=t.$createElement,_=t._self._c||v;return _("div",[_("div",{staticClass:"item"},[_("div",{staticClass:"itemTitle center"},[t._v("ZYHB系列活性炭废气净化设备参数表")]),t._v(" "),_("div",{staticClass:"itemContent"},[_("div",{staticClass:"tableBox"},[_("table",[_("tbody",[_("tr",[_("td",[t._v("序号")]),t._v(" "),_("td",[t._v("型号")]),t._v(" "),_("td",[t._v("风量(m"),_("sup",[t._v("3")]),t._v("/h)")]),t._v(" "),_("td",[t._v("外型尺寸（mm）")]),t._v(" "),_("td",[t._v("风口尺寸（mm）")]),t._v(" "),_("td",[t._v("风阻 (Pa)")]),t._v(" "),_("td",[t._v("机箱kg")]),t._v(" "),_("td",[t._v("备注")])]),t._v(" "),_("tr",[_("td",[t._v("1")]),t._v(" "),_("td",[t._v("ZYHB-HXT3K")]),t._v(" "),_("td",[t._v("3000")]),t._v(" "),_("td",[t._v("1000×1050×1100")]),t._v(" "),_("td",[t._v("1000×1050")]),t._v(" "),_("td",[t._v("<600")]),t._v(" "),_("td",[t._v("220")]),t._v(" "),_("td",[t._v(" ")])]),t._v(" "),_("tr",[_("td",[t._v("2")]),t._v(" "),_("td",[t._v("ZYHB-HXT5K")]),t._v(" "),_("td",[t._v("5000")]),t._v(" "),_("td",[t._v("1500×1050×1000")]),t._v(" "),_("td",[t._v("1000×950")]),t._v(" "),_("td",[t._v("<600")]),t._v(" "),_("td",[t._v("400")]),t._v(" "),_("td",[t._v(" ")])]),t._v(" "),_("tr",[_("td",[t._v("3")]),t._v(" "),_("td",[t._v("ZYHB-HXT10K")]),t._v(" "),_("td",[t._v("10000")]),t._v(" "),_("td",[t._v("2050×1050×1200")]),t._v(" "),_("td",[t._v("1000×1150")]),t._v(" "),_("td",[t._v("<800")]),t._v(" "),_("td",[t._v("600")]),t._v(" "),_("td",[t._v(" ")])]),t._v(" "),_("tr",[_("td",[t._v("4")]),t._v(" "),_("td",[t._v("ZYHB-HXT15K")]),t._v(" "),_("td",[t._v("15000")]),t._v(" "),_("td",[t._v("2450×1050×1200")]),t._v(" "),_("td",[t._v("1000×1150")]),t._v(" "),_("td",[t._v("<800")]),t._v(" "),_("td",[t._v("700")]),t._v(" "),_("td",[t._v(" ")])]),t._v(" "),_("tr",[_("td",[t._v("5")]),t._v(" "),_("td",[t._v("ZYHB-HXT20K")]),t._v(" "),_("td",[t._v("20000")]),t._v(" "),_("td",[t._v("3000×1050×1200")]),t._v(" "),_("td",[t._v("1000×1150")]),t._v(" "),_("td",[t._v("<800")]),t._v(" "),_("td",[t._v("800")]),t._v(" "),_("td",[t._v(" ")])]),t._v(" "),_("tr",[_("td",[t._v("6")]),t._v(" "),_("td",[t._v("ZYHB-HXT25K")]),t._v(" "),_("td",[t._v("25000")]),t._v(" "),_("td",[t._v("2450×2150×1500")]),t._v(" "),_("td",[t._v("2100×1450")]),t._v(" "),_("td",[t._v("<800")]),t._v(" "),_("td",[t._v("1400")]),t._v(" "),_("td",[t._v(" ")])]),t._v(" "),_("tr",[_("td",[t._v("7")]),t._v(" "),_("td",[t._v("ZYHB-HXT30K")]),t._v(" "),_("td",[t._v("30000")]),t._v(" "),_("td",[t._v("1950×2150×1700")]),t._v(" "),_("td",[t._v("2100×1550")]),t._v(" "),_("td",[t._v("<900")]),t._v(" "),_("td",[t._v("1450")]),t._v(" "),_("td",[t._v(" ")])]),t._v(" "),_("tr",[_("td",[t._v("8")]),t._v(" "),_("td",[t._v("ZYHB-HXT35K")]),t._v(" "),_("td",[t._v("35000")]),t._v(" "),_("td",[t._v("2600×1600×1700")]),t._v(" "),_("td",[t._v("1550×1650")]),t._v(" "),_("td",[t._v("<900")]),t._v(" "),_("td",[t._v("1550")]),t._v(" "),_("td",[t._v(" ")])]),t._v(" "),_("tr",[_("td",[t._v("9")]),t._v(" "),_("td",[t._v("ZYHB-HXT40K")]),t._v(" "),_("td",[t._v("40000")]),t._v(" "),_("td",[t._v("2450×2150×2000")]),t._v(" "),_("td",[t._v("2100×1950")]),t._v(" "),_("td",[t._v("<900")]),t._v(" "),_("td",[t._v("1950")]),t._v(" "),_("td",[t._v(" ")])])])])])])]),t._v(" "),_("div",{staticClass:"item"},[_("div",{staticClass:"itemTitle"},[t._v("技术原理")]),t._v(" "),_("div",{staticClass:"itemContent"},[_("p",[t._v("\n        活性炭是一种黑色粉状、粒状或丸状的无定形具有多孔的炭。主要成分为碳，还含有少量氧、氢、硫、氮、氯。活性炭具有很大的表面积（1克活性碳表面积相当于8个网球场的面积)，有很强的吸附能力，能在它的表面上吸附气体，液体或胶态固体，对于气、液的吸附量可接近于活性炭本身的质量。\n      ")]),t._v(" "),_("p",[t._v("\n        活性炭作为常用的吸附剂，具有性能稳定、抗腐蚀等优点。由于它的疏水性和亲有机物的性能，常被用来回收湿空气中的有机溶剂、恶臭物质以及用于吸附法脱除工业废气中的NOx，SO2等。其吸附作用具有选择性，非极性物质比极性物质更易于吸附。在同一系列物质中，沸点越高的物质越容易被吸附，压力越大、温度越低、浓度越高，吸附量越大，反之，减压、升温有利气体的解吸。\n      ")])])]),t._v(" "),_("div",{staticClass:"item"},[_("div",{staticClass:"itemTitle"},[t._v("适用领域")]),t._v(" "),_("div",{staticClass:"itemContent"},[t._v("\n      该技术适合用在含水及含尘量较少，且废气浓度较低的工况中，现广泛用于垃圾焚烧厂、垃圾填埋场、垃圾转运站、电子原件生产、电池（电瓶）生产、酸洗作业、实验室排风、冶金、化工、医药、涂装、喷漆、食品、酿造等废气处理领域。\n    ")])])])}],!1,null,"a8de5364",null);s.options.__file="src/vue/page/components/g-2-info-1.vue";v.a=s.exports},376:function(t,v,_){"use strict";_.r(v);var e=function(){var t=this,v=t.$createElement,_=t._self._c||v;return _("section",{staticClass:"section"},[_("div",{staticClass:"container py-4 position-relative"},[_("div",{staticClass:"title px-2 d-flex align-items-center"},[_("router-link",{attrs:{to:t.nextPath,custom:""},scopedSlots:t._u([{key:"default",fn:function(v){var e=v.href;return[_("a",{staticClass:"btn p-1 d-flex",attrs:{href:e}},[_("span",{staticClass:"material-icons"},[t._v("\n            keyboard_backspace\n          ")])])]}}])}),t._v(" "),_("div",{staticClass:"text"},[t._v(t._s(t.$route.meta.title))])],1),t._v(" "),_("div",{staticClass:"content"},[_("ProductItem",{attrs:{imgUrl:t.$route.meta.product_item_img}}),t._v(" "),_("g_2_info_1")],1),t._v(" "),_("GoTop")],1)])};e._withStripped=!0;var n=_(118),i=_.n(n),s=_(114),o=_(116),d=_(113),a=_(123),r={mixins:[s.a],components:{VueAos:i.a,ProductItem:o.a,GoTop:d.a,g_2_info_1:a.a},data:function(){return{}},mounted:function(){},methods:{},computed:{}},c=_(3),l=Object(c.a)(r,e,[],!1,null,"b3eaf6ee",null);l.options.__file="src/vue/page/product/g-2/Page-6.vue";v.default=l.exports}}]);