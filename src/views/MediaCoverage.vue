<template>
  <div v-loading="contentLoading" class="chairman">
    <div v-if="content" class="content">
      <div class="title">{{ content.title }}</div>
      <div v-if="content.coverage_image_path_urls.length>0" class="banner-box">
        <div v-if="content.coverage_image_path_urls.length>0&content.coverage_image_path_urls.length<2" class="banner1">
          <img :src="content.coverage_image_path_urls[0].banner_path_url" alt="" @load="imgLoad">
        </div>
        <swiper v-else :options="swiperOption">
          <swiper-slide v-for="(item,index) of content.coverage_image_path_urls" :key="index" class="banner1">
            <img :src="item.image_path_url" alt="" @load="imgLoad">
          </swiper-slide>
          <div slot="pagination" class="swiper-pagination" />
          <div slot="button-prev" class="swiper-button-prev" />
          <div slot="button-next" class="swiper-button-next " />
        </swiper>
      </div>
      <div class="content-box" v-html="content.content">
        {{ content.content }}
      </div>
    </div>
  </div>
</template>
<script>
import { S4aApi } from '../api/S4a'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
export default {
  components: {
    swiperSlide,
    swiper
  },
  data() {
    return {
      content: null,
      imgLoading: true,
      contentLoading: true,
      swiperOption: {
        slidesPerView: 1,
        // spaceBetween: 30,
        direction: 'horizontal',
        loop: true,
        // autoplay: true,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false // 操作swiper后不会停止播放
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          disabledClass: 'my-button-disabled'
        }
      }
    }
  },
  mounted() {
    // console.log(this.$route.params.id)
    S4aApi.getMediaRead(this.$route.params.id).then(result => {
      // console.log(result)
      this.content = result
      this.contentLoading = false
    })
  },
  methods: {
    imgLoad() {
      this.imgLoading = false
    }
  }
}
</script>
<style scoped lang="scss">
@import "@/assets/styles/variables.scss";

.chairman {
  min-height: 300px;
  width: 100%;
  padding: 0 12%;
  box-sizing: border-box;
  @media screen and (max-width: 780px) {
    padding: 0 17px;
  }
  .content {
    width: 100%;
    margin: 0 auto 10px;
    min-height: 300px;
    .banner-box {
      width: 100%;
      min-height: 350px;
      .banner1 {
        margin: 0 auto;
        width: 100%;
        height: 400px;
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
    }
  }
}
</style>
<style lang="scss">
.swiper-pagination-fraction,
.swiper-pagination-custom,
.swiper-container-horizontal > .swiper-pagination-bullets {
  text-align: center;
  // bottom: 100px;
  // z-index: 1000;
}
.swiper-pagination-bullet-active {
  background: #90193e;
}
</style>
