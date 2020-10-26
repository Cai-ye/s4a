<template>
  <div class="media">
    <transition name="fade-transform" mode="out-in">
      <div v-if="id<1" v-loading="list2Loading" class="content">
        <div class="title">{{ $t('press_media') }}</div>
        <div class="banner-box">
          <div v-if="listResult.length>0&listResult.length<2" v-loading="listLoading" class="banner">
            <img :src="listResult[0].banner_path_url" alt="" @load="imgLoad">
          </div>
          <swiper v-else :options="swiperOption" class="banner-box">
            <swiper-slide v-for="(item,index) of listResult" :key="index">
              <el-image :src="item.banner_path_url" fit="cover" style="width:100%;height:100%;">
                <div slot="error" class="image-slot slot" style="text-align:center;font-size:20px;">
                  加載失敗
                </div>
                <div slot="placeholder" class="image-slot slot">
                  <span class="dot" style="font-size:20px;"><i class="el-icon-loading" /></span>
                </div>
              </el-image>
            </swiper-slide>
            <div slot="pagination" class="swiper-pagination" />
            <div slot="button-prev" class="swiper-button-prev" />
            <div slot="button-next" class="swiper-button-next " />
          </swiper>
        </div>
      </div>
    </transition>
    <transition name="fade-transform" mode="out-in">
      <div v-if="id<2&&id>0" class="content1">
        <div class="single-content">
          <div class="title">{{ $t('media') }}</div>
          <div v-loading="list2Loading" class="s-content">
            <div v-if="listResult.length<1" style="text-align:center">{{ $t('nodata') }}</div>
            <div v-if="listResult.length>0">
              <div v-for="(item,index) of listResult" :key="index" class="link" @click="gopage(item)">
                {{ item.title }}
              </div>
            </div>
          </div>
        </div>
        <div class="pagination1">
          <el-pagination layout="prev, pager, next" :total="total" :page-size="listQuery.count" :current-page.sync="listQuery.page" hide-on-single-page @current-change="handleCurrentChange" />
        </div>
      </div>
    </transition>
    <transition name="fade-transform" mode="out-in">
      <div v-if="id>1" class="content1">
        <div class="single-content">
          <div class="title">{{ $t('videos') }}</div>
          <div v-loading="list2Loading" class="s-content">
            <div v-if="listResult.length<1" style="text-align:center">{{ $t('nodata') }}</div>
            <div v-else>
              <a v-for="(item,index) of listResult" :key="index" :href="item.video_link" target="_blank" class="link">
                {{ item.title }}
              </a>
            </div>
          </div>
        </div>
        <div class="pagination1">
          <el-pagination layout="prev, pager, next" :total="total" hide-on-single-page :current-page.sync="listQuery.page" :page-size="listQuery.count" @current-change="handleCurrentChange" />
        </div>
      </div>
    </transition>
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
      id: null,
      listResult: [],
      listLoading: true,
      list2Loading: true,
      total: null,
      type: null,
      listQuery: {
        page: 1,
        count: 10,
        type: '',
        status: true
      },
      swiperOption: {
        slidesPerView: 1,
        spaceBetween: 30,
        direction: 'horizontal',
        loop: true,
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
  watch: {
    $route(to, form) {
      this.init()
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    handleCurrentChange(val) {
      this.list2Loading = true
      const data = `page=${val}&count=${this.listQuery.count}&type=${this.listQuery.type}&status=true`
      S4aApi.getMediaList(data).then(result => {
        this.listResult = result.data
        this.list2Loading = false
        if (result.data.length === 0) this.list2Loading = false
      })
    },
    imgLoad() {
      this.listLoading = false
    },
    init() {
      this.list2Loading = true
      // console.log(this.$route.params.id)
      this.id = this.$route.params.id
      this.listResult = []
      switch (parseInt(this.id)) {
        case 0:
          this.$set(this.listQuery, 'type', 'press_release')
          break
        case 1:
          this.$set(this.listQuery, 'type', 'media_coverage')
          break
        case 2:
          this.$set(this.listQuery, 'type', 'video')
          break
      }
      this.listQuery.page = 1
      const data = `page=${this.listQuery.page}&count=${this.listQuery.count}&type=${this.listQuery.type}&status=true`
      S4aApi.getMediaList(data).then(result => {
        // console.log(result)
        this.list2Loading = false
        this.listResult = result.data
        this.total = result.total
        if (result.data.length === 0) this.listLoading = false
      })
      // console.log(this.listQuery.page)
    },
    gopage(item) {
      this.$router.push('/media-coverage/' + item.id)
    }
  }
}

</script>
<style lang="scss" scoped >
@import "@/assets/styles/variables.scss";
.media {
  width: 100%;
  padding: 0 12%;
  box-sizing: border-box;
  @media screen and (max-width: 780px) {
    padding: 0 17px;
  }
  .content {
    min-height: 200px;
    .banner-box {
      position: relative;
      width: 100%;
      height: 400px;
      // @media screen and(max-width: 780px) {
      //   height: 400px;
      // }
      .slot {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
  .content1 {
    padding: 4% 0;
    .single-content {
      position: relative;
      width: 100%;
      height: 450px;
      box-sizing: border-box;
      @media screen and(max-width: 780px) {
        padding-top: 30px;
        height: 380px;
      }
      .title {
        color: $red;
        font-size: 24px;
        font-weight: 700;
        text-align: center;
        margin-bottom: 56px;
        @media screen and(max-width: 780px) {
          font-size: 20px;
          margin-bottom: 20px;
        }
      }
      .s-content {
        max-width: 500px;
        min-width: 240px;
        width: 100%;
        margin: 0 auto;
        min-height: 200px;
        display: flex;
        flex-direction: column;
        @media screen and(max-width: 780px) {
          width: 90%;
        }
        a,
        div {
          display: block;
          cursor: pointer;
          // font-size: 18px;
          line-height: 36px;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 1;
          overflow: hidden;
          @media screen and(max-width: 780px) {
            font-size: 16px;
            line-height: 26px;
          }
        }
        .link:hover {
          color: $red;
        }
      }
    }
    .pagination1 {
      position: relative;
      width: 100%;
      text-align: center;
      padding: 5% 0;
      height: 100px;
      box-sizing: border-box;
      @media screen and(max-width: 780px) {
        height: 60px;
      }
    }
    .single-content::before {
      position: absolute;
      content: "";
      width: 150px;
      height: 150px;
      top: 0;
      left: 2%;
      border-left: 3px solid $red;
      border-top: 3px solid $red;
      @media screen and(max-width: 780px) {
        left: -2%;
        width: 80px;
        height: 80px;
      }
    }
    .single-content::after {
      position: absolute;
      content: "";
      width: 150px;
      height: 150px;
      top: 0;
      right: 2%;
      border-right: 3px solid $red;
      border-top: 3px solid $red;
      @media screen and(max-width: 780px) {
        right: -2%;
        width: 80px;
        height: 80px;
      }
    }
    .pagination1::before {
      position: absolute;
      content: "";
      width: 150px;
      height: 150px;
      bottom: 0;
      left: 2%;
      border-left: 3px solid $red;
      border-bottom: 3px solid $red;
      @media screen and(max-width: 780px) {
        left: -2%;
        width: 80px;
        height: 80px;
      }
    }
    .pagination1::after {
      position: absolute;
      content: "";
      width: 150px;
      height: 150px;
      bottom: 0;
      right: 2%;
      border-right: 3px solid $red;
      border-bottom: 3px solid $red;
      @media screen and(max-width: 780px) {
        right: -2%;
        width: 80px;
        height: 80px;
      }
    }
  }
  @media screen and(max-width: 780px) {
    .title {
      font-size: 20px;
    }
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.28s;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}

/* fade-transform */
.fade-transform-leave-active,
.fade-transform-enter-active {
  transition: all 0.5s;
}

.fade-transform-enter {
  opacity: 0;
  transform: translateX(-30px);
}

.fade-transform-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>
<style lang="scss">
.el-carousel__item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.el-carousel__arrow {
  color: #90193e !important;
}
.swiper-button-next {
  width: 30px;
  height: 30px;
  background: url("../assets/imgs/r.png") no-repeat center/cover;
}
.swiper-button-prev {
  width: 30px;
  height: 30px;
  background: url("../assets/imgs/l.png") no-repeat center/cover;
}
@media screen and(max-width:780px) {
  .swiper-button-next,
  .swiper-button-prev {
    width: 24px;
    height: 24px;
  }
}
.swiper-pagination-fraction,
.swiper-pagination-custom,
.swiper-container-horizontal > .swiper-pagination-bullets {
  text-align: center;
}
.swiper-pagination-bullet-active {
  background: #90193e;
}
.el-pager li.active {
  color: #db222a;
}
.el-pager li:hover {
  color: #db222a;
}
.el-pager li {
  font-size: 16px;
}
</style>

