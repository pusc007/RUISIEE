(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{108:function(t,v,_){},109:function(t,v,_){},110:function(t,v,_){},111:function(t,v,_){"use strict";_(108)},112:function(t,v,_){"use strict";_(109)},113:function(t,v,_){"use strict";var e=function(){var t=this.$createElement,v=this._self._c||t;return v("div",{staticClass:"goTop"},[v("transition",{attrs:{name:"jump"}},[this.show?v("div",{staticClass:"fixedPos"},[v("div",{staticClass:"topBtn",on:{click:this.topBtn_click}},[this._v("TOP")])]):this._e()])],1)};e._withStripped=!0;var n={name:"GoTop",props:{},data:function(){return{show:!1}},methods:{getScrollY:function(){return window.scrollY|document.documentElement.scrollTop},onscroll:function(){var t=this.getScrollY();this.show=t>300},onresize:function(){this.onscroll()},topBtn_click:function(){window.scrollTo({top:0,behavior:"smooth"})}},mounted:function(){window.addEventListener("scroll",this.onscroll),window.addEventListener("resize",this.onresize)},beforeDestroy:function(){window.removeEventListener("scroll",this.onscroll),window.removeEventListener("resize",this.onresize)},computed:{}},s=(_(111),_(112),_(3)),i=Object(s.a)(n,e,[],!1,null,"0ec25fa2",null);i.options.__file="src/vue/page/components/GoTop.vue";v.a=i.exports},114:function(t,v,_){"use strict";v.a={computed:{nextPath:function(){var t=this.$route.matched;return t[Math.max(t.length-2,0)].path}}}},115:function(t,v,_){"use strict";_(110)},116:function(t,v,_){"use strict";var e=function(){var t=this.$createElement,v=this._self._c||t;return v("div",{staticClass:"my-4 d-flex justify-content-center"},[v("img",{directives:[{name:"lazy",rawName:"v-lazy",value:this.imgUrl,expression:"imgUrl"}],staticClass:"img w-100",attrs:{alt:""}})])};e._withStripped=!0;var n={components:{},props:{imgUrl:{type:String,default:"aaa"}},data:function(){return{}},mounted:function(){},methods:{},computed:{}},s=(_(115),_(3)),i=Object(s.a)(n,e,[],!1,null,"44cd44b7",null);i.options.__file="src/vue/page/components/ProductItem.vue";v.a=i.exports},124:function(t,v,_){},127:function(t,v,_){"use strict";_(124)},128:function(t,v,_){"use strict";var e=function(){var t=this.$createElement;this._self._c;return this._m(0)};e._withStripped=!0;var n={components:{},data:function(){return{}},mounted:function(){},methods:{},computed:{}},s=(_(127),_(3)),i=Object(s.a)(n,e,[function(){var t=this,v=t.$createElement,_=t._self._c||v;return _("div",[_("div",{staticClass:"item"},[_("div",{staticClass:"itemTitle center"},[t._v("ZYHB系列低温等离子废气净化设备选型参数表")]),t._v(" "),_("div",{staticClass:"itemContent"},[_("div",{staticClass:"tableBox"},[_("table",[_("tbody",[_("tr",[_("td",{attrs:{rowspan:"2"}},[t._v("序号")]),t._v(" "),_("td",{attrs:{rowspan:"2"}},[t._v("设备型号")]),t._v(" "),_("td",[t._v("设备尺寸")]),t._v(" "),_("td",[t._v("法兰尺寸(内径)")]),t._v(" "),_("td",[t._v("功率/电压")]),t._v(" "),_("td",[t._v("处理风量")]),t._v(" "),_("td",[t._v("风阻")]),t._v(" "),_("td",{attrs:{rowspan:"2"}},[t._v("备注")])]),t._v(" "),_("tr",[_("td",[t._v("长×宽×高(mm)")]),t._v(" "),_("td",[t._v("长×宽(mm)")]),t._v(" "),_("td",[t._v("Kw/V")]),t._v(" "),_("td",[t._v("m"),_("sup",[t._v("3")]),t._v("/h")]),t._v(" "),_("td",[t._v("Pa")])]),t._v(" "),_("tr",[_("td",[t._v("1")]),t._v(" "),_("td",[t._v("ZYHB-UV5K")]),t._v(" "),_("td",[t._v("840×1000×1350")]),t._v(" "),_("td",[t._v("770×1120")]),t._v(" "),_("td",[t._v("0.5")]),t._v(" "),_("td",[t._v("5000")]),t._v(" "),_("td",[t._v("<150")]),t._v(" "),_("td",[t._v(" ")])]),t._v(" "),_("tr",[_("td",[t._v("2")]),t._v(" "),_("td",[t._v("ZYHB-UV10K")]),t._v(" "),_("td",[t._v("1500×1000×1350")]),t._v(" "),_("td",[t._v("770×1120")]),t._v(" "),_("td",[t._v("1.0")]),t._v(" "),_("td",[t._v("10000")]),t._v(" "),_("td",[t._v("<150")]),t._v(" "),_("td",[t._v(" ")])]),t._v(" "),_("tr",[_("td",[t._v("3")]),t._v(" "),_("td",[t._v("ZYHB-UV15K")]),t._v(" "),_("td",[t._v("2100×1000×1350")]),t._v(" "),_("td",[t._v("770×1120")]),t._v(" "),_("td",[t._v("1.5")]),t._v(" "),_("td",[t._v("15000")]),t._v(" "),_("td",[t._v("<200")]),t._v(" "),_("td",[t._v(" ")])]),t._v(" "),_("tr",[_("td",[t._v("4")]),t._v(" "),_("td",[t._v("ZYHB-UV20K")]),t._v(" "),_("td",[t._v("2695×1000×1350")]),t._v(" "),_("td",[t._v("770×1120")]),t._v(" "),_("td",[t._v("2.0")]),t._v(" "),_("td",[t._v("20000")]),t._v(" "),_("td",[t._v("<250")]),t._v(" "),_("td",[t._v(" ")])]),t._v(" "),_("tr",[_("td",[t._v("5")]),t._v(" "),_("td",[t._v("ZYHB-UV25K")]),t._v(" "),_("td",[t._v("3445×1200×1350")]),t._v(" "),_("td",[t._v("770×1120")]),t._v(" "),_("td",[t._v("2.5")]),t._v(" "),_("td",[t._v("25000")]),t._v(" "),_("td",[t._v("<250")]),t._v(" "),_("td",[t._v(" ")])]),t._v(" "),_("tr",[_("td",[t._v("6")]),t._v(" "),_("td",[t._v("ZYHB-UV30K")]),t._v(" "),_("td",[t._v("1800×1900×1900")]),t._v(" "),_("td",[t._v("1400×1600")]),t._v(" "),_("td",[t._v("3.0")]),t._v(" "),_("td",[t._v("30000")]),t._v(" "),_("td",[t._v("<250")]),t._v(" "),_("td",[t._v(" ")])]),t._v(" "),_("tr",[_("td",[t._v("7")]),t._v(" "),_("td",[t._v("ZYHB-UV40K")]),t._v(" "),_("td",[t._v("2400×1900×1900")]),t._v(" "),_("td",[t._v("1400×1600")]),t._v(" "),_("td",[t._v("4.0")]),t._v(" "),_("td",[t._v("40000")]),t._v(" "),_("td",[t._v("<300")]),t._v(" "),_("td",[t._v(" ")])]),t._v(" "),_("tr",[_("td",[t._v("8")]),t._v(" "),_("td",[t._v("ZYHB-UV50K")]),t._v(" "),_("td",[t._v("3100×1900×1900")]),t._v(" "),_("td",[t._v("1400×1600")]),t._v(" "),_("td",[t._v("5.0")]),t._v(" "),_("td",[t._v("50000")]),t._v(" "),_("td",[t._v("<300")]),t._v(" "),_("td",[t._v(" ")])])])])])])]),t._v(" "),_("div",{staticClass:"item"},[_("div",{staticClass:"itemTitle"},[t._v("性能优点")]),t._v(" "),_("div",{staticClass:"itemContent left"},[_("p",[t._v("\n        低温等离子体技术是空气强力杀菌净化除臭技术，是一个集物理学、化学、生物学和环境科学于一体的交叉综合性技术。该技术显著特点是对污染物兼具物理效应、化学效应和生物效应，且有能耗低、效率高、无二次污染等明显优点。\n      ")]),t._v(" "),_("p",[t._v("\n        其净化作用机理包含两个方面：一是在产生等离子体的过程中，高频放电所产生的瞬间高能足够打开一些有害气体分子的化学能，使之分解为单质原子或无害分子；二是等离子体中包含大量的高能电子、正负离子、激发态粒子和具有强氧化性的自由基，这些活性粒子和部分臭气分子碰撞结合，在电场作用下，使臭气分子处于激发态。当臭气分子获得的能量大于其分子键能的结合能时，臭气分子的化学键断裂，直接分解成单质原子或由单一原子构成得无害气体分子。同时产生的大量-OH、-HO2、-O等活性自由基和氧化性极强的O3，与有害气体分子发生化学反应，最终生成无害产物。\n      ")])])]),t._v(" "),_("div",{staticClass:"item"},[_("div",{staticClass:"itemTitle"},[t._v("适用领域")]),t._v(" "),_("div",{staticClass:"itemContent"},[t._v("\n      该技术能够应用于石油化工、制药、污水处理、涂料、皮革加工、感光材料、汽车制造、食品加工厂、印染厂、垃圾处理厂、公厕、屠宰场、牲畜饲养场、鱼类加工厂、饲料加工厂等诸多能够产生恶臭异味的场所。\n    ")])])])}],!1,null,"7ab4732a",null);i.options.__file="src/vue/page/components/g-5-info-1.vue";v.a=i.exports},391:function(t,v,_){"use strict";_.r(v);var e=function(){var t=this,v=t.$createElement,_=t._self._c||v;return _("section",{staticClass:"section"},[_("div",{staticClass:"container py-4 position-relative"},[_("div",{staticClass:"title px-2 d-flex align-items-center"},[_("router-link",{attrs:{to:t.nextPath,custom:""},scopedSlots:t._u([{key:"default",fn:function(v){var e=v.href;return[_("a",{staticClass:"btn p-1 d-flex",attrs:{href:e}},[_("span",{staticClass:"material-icons"},[t._v("\n            keyboard_backspace\n          ")])])]}}])}),t._v(" "),_("div",{staticClass:"text"},[t._v(t._s(t.$route.meta.title))])],1),t._v(" "),_("div",{staticClass:"content"},[_("ProductItem",{attrs:{imgUrl:t.$route.meta.product_item_img}}),t._v(" "),_("g_5_info_1")],1),t._v(" "),_("GoTop")],1)])};e._withStripped=!0;var n=_(118),s=_.n(n),i=_(114),o=_(116),d=_(113),a=_(128),r={mixins:[i.a],components:{VueAos:s.a,ProductItem:o.a,GoTop:d.a,g_5_info_1:a.a},data:function(){return{}},mounted:function(){},methods:{},computed:{}},c=_(3),l=Object(c.a)(r,e,[],!1,null,"85dd45b6",null);l.options.__file="src/vue/page/product/g-5/Page-5.vue";v.default=l.exports}}]);