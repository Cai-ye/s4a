(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f197f42a"],{"1d9f":function(t,n,e){},"93cc":function(t,n,e){"use strict";var a=e("1d9f"),i=e.n(a);i.a},"97dc":function(t,n,e){"use strict";var a=e("c797"),i=e.n(a);i.a},ad30:function(t,n,e){"use strict";e.r(n);var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{directives:[{name:"loading",rawName:"v-loading",value:t.contentLoading,expression:"contentLoading"}],staticClass:"chairman"},[t.content?e("div",{staticClass:"content"},[e("div",{staticClass:"title"},[t._v(t._s(t.content.title))]),t.content.coverage_image_path_urls.length>0?e("div",{staticClass:"banner-box"},[t.content.coverage_image_path_urls.length>0&t.content.coverage_image_path_urls.length<2?e("div",{staticClass:"banner1"},[e("img",{attrs:{src:t.content.coverage_image_path_urls[0].banner_path_url,alt:""},on:{load:t.imgLoad}})]):e("swiper",{attrs:{options:t.swiperOption}},[t._l(t.content.coverage_image_path_urls,(function(n,a){return e("swiper-slide",{key:a,staticClass:"banner1"},[e("img",{attrs:{src:n.image_path_url,alt:""},on:{load:t.imgLoad}})])})),e("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"}),e("div",{staticClass:"swiper-button-prev",attrs:{slot:"button-prev"},slot:"button-prev"}),e("div",{staticClass:"swiper-button-next ",attrs:{slot:"button-next"},slot:"button-next"})],2)],1):t._e(),e("div",{staticClass:"content-box",domProps:{innerHTML:t._s(t.content.content)}},[t._v(" "+t._s(t.content.content)+" ")])]):t._e()])},i=[],o=e("21e6"),s=e("7212"),r=(e("dfa4"),{components:{swiperSlide:s["swiperSlide"],swiper:s["swiper"]},data:function(){return{content:null,imgLoading:!0,contentLoading:!0,swiperOption:{slidesPerView:1,direction:"horizontal",loop:!0,autoplay:{delay:3e3,disableOnInteraction:!1},pagination:{el:".swiper-pagination",clickable:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev",disabledClass:"my-button-disabled"}}}},mounted:function(){var t=this;o["a"].getMediaRead(this.$route.params.id).then((function(n){t.content=n,t.contentLoading=!1}))},methods:{imgLoad:function(){this.imgLoading=!1}}}),c=r,l=(e("93cc"),e("97dc"),e("2877")),d=Object(l["a"])(c,a,i,!1,null,"f48bd600",null);n["default"]=d.exports},c797:function(t,n,e){}}]);
//# sourceMappingURL=chunk-f197f42a.b48d4a30.js.map