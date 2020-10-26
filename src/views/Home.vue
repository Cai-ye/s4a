<template>
  <div v-loading="loading" class="home">
    <div class="wrapper">
      <div v-loading="imgLoading" class="banner-box">
        <swiper v-if="bannerList.length > 0" :options="swiperOption">
          <swiper-slide v-for="(item, index) of bannerList" :key="index" class="banner" :class="[item.event_id&&item.event_id.status ? 'cur' : '']">
            <img :src="item.path_url" alt="" @load="imgLoad" @click="gopage(item)">
            <!-- <el-image :src="item.path_url" fit="cover" style="width:100%;height:100%;" @click="gopage(item)">
              <div slot="error" class="image-slot slot" style="text-align:center;font-size:20px;">
                加載失敗
              </div>
              <div slot="placeholder" class="image-slot slot">
                <span class="dot" style="font-size:20px;"><i class="el-icon-loading" /></span>
              </div>
            </el-image> -->
          </swiper-slide>
          <div slot="button-prev" class="swiper-button-prev" />
          <div slot="button-next" class="swiper-button-next " />
          <div slot="pagination" class="swiper-pagination" />
        </swiper>
      </div>
      <el-row type="flex" class="content-1">
        <el-col class="left1" :xs="24" :md="24" :lg="6">
          <div class="fb-page" data-href="https://www.facebook.com/Shakespeare4All" data-tabs="timeline" data-width="400" data-height="" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true">
            <blockquote cite="https://www.facebook.com/Shakespeare4All" class="fb-xfbml-parse-ignore">
              <a href="https://www.facebook.com/Shakespeare4All">S4All Hong Kong</a>
            </blockquote>
          </div>
        </el-col>
        <el-col v-loading="anouncementLoading" :xs="24" :md="24" :lg="18">
          <el-row type="flex" class="right-1">
            <el-col v-for="(item, index) of images" :key="index" :span="8" class="images">
              <div class="img-box" :class="[item.event_id&&item.event_id.status ? 'cur' : '']" @click="go(item)">
                <el-image :src="item.path_url" fit="cover" style="width:100%;height:100%;">
                  <div slot="error" class="image-slot slot" style="text-align:center;font-size:20px;">
                    <!-- 加載失敗 -->
                    {{ $t('fail') }}
                  </div>
                  <div slot="placeholder" class="image-slot slot">
                    <span class="dot" style="font-size:20px;"><i class="el-icon-loading" /></span>
                  </div>
                </el-image>
                <div class="img-title" :class="`s${index % 3}`">
                  <div class="detail">{{ item.title }}</div>
                  <div class="detail1">{{ item.date_and_time }}</div>
                </div>
              </div>
            </el-col>
            <el-col :span="8" class="images">
              <div v-if="more" class="img-box" style="cursor:pointer" @click="getMore">
                <img src="../assets/imgs/see-more.jpg" alt="">
              </div>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import { S4aApi } from '../api/S4a'
import 'swiper/dist/css/swiper.css'
import spacetime from 'spacetime'

export default {
  components: {
    swiperSlide,
    swiper
  },
  data() {
    return {
      query: {
        page: 1,
        count: 9,
        status: true
      },
      imgLoading: true,
      screenWidth: document.body.clientWidth,
      listLoading: true,
      anouncementLoading: true,
      images: null,
      bannerList: [],
      swiperOption: {
        slidesPerView: 1,
        spaceBetween: 30,
        direction: 'horizontal',
        loop: true,
        speed: 800,
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
      },
      more: false,
      loading: false,
      lastImage: null
    }
  },
  mounted() {
    const ask = `status=true&showPast=true`
    S4aApi.getBanner(ask).then(result => {
      this.bannerList = result.data
      if (result.data.length < 1) this.imgLoading = false
    })
    const d = 'page=1&count=9&status=true&showPast=true'
    S4aApi.getAnnouncement(d).then(result => {
      // console.log(result)
      this.images = result.data
      if (result.data.length === 9 && this.images.length < result.total) {
        this.lastImage = this.images.pop()
      }
      this.anouncementLoading = false
      if (this.images.length < result.total) {
        this.more = true
      }
    })
  },
  methods: {
    gopage(item) {
      // this.imgLoading = true
      // console.log(item)
      if (item.event_id) {
        if (item.event_id.status === true) {
          this.loading = true
          const time = spacetime(item.event_id.date).goto('Asia/Hong_Kong').d.getFullYear()
          switch (item.event_id.type) {
            case 'professional_public_shows':
              this.$router.push(
                '/what-we-do/public/' + time + '?#' + item.event_id.id
              )
              break
            case 'youth_theatre_programmes':
              this.$router.push(
                '/what-we-do/youth/' + time + '?#' + item.event_id.id
              )
              break
            case 'school_touring_shows':
              this.$router.push(
                '/what-we-do/school-touring/' + time + '?#' + item.event_id.id
              )
              break
            case 'collaborations':
              this.$router.push(
                '/what-we-do/collaborations/' + time + '?#' + item.event_id.id
              )
              break
            case 'annual_gala':
              this.$router.push('/annual/' + item.event_id.id + '/' + time)
              break
            case 'apply_register':
              this.$router.push('/apply' + '?#' + item.event_id.id)
              break
          }
          this.loading = false
        }
      }
    },
    go(el) {
      // console.log(el)
      if (el.event_id) {
        if (el.event_id.status === true) {
          this.loading = true
          const time = spacetime(el.event_id.date).goto('Asia/Hong_Kong').d.getFullYear()
          switch (el.event_id.type) {
            case 'professional_public_shows':
              this.$router.push(
                '/what-we-do/public/' + time + '?#' + el.event_id.id
              )
              break
            case 'youth_theatre_programmes':
              this.$router.push(
                '/what-we-do/youth/' + time + '?#' + el.event_id.id
              )
              break
            case 'school_touring_shows':
              this.$router.push(
                '/what-we-do/school-touring/' + time + '?#' + el.event_id.id
              )
              break
            case 'collaborations':
              this.$router.push(
                '/what-we-do/collaborations/' + time + '?#' + el.event_id.id
              )
              break
            case 'annual_gala':
              this.$router.push('/annual/' + el.event_id.id + '/' + time)
              break
            case 'apply_register':
              this.$router.push('/apply' + '?#' + el.event_id.id)
              break
          }
          this.loading = false
        }
      }
    },
    imgLoad() {
      this.imgLoading = false
    },
    getMore() {
      this.anouncementLoading = true
      // this.query.count = 9
      this.query.page++
      const d = `page=${this.query.page}&count=${this.query.count}&status=true&showPast=true`
      S4aApi.getAnnouncement(d).then(result => {
        // console.log(result)
        if (this.lastImage) {
          this.images.push(this.lastImage)
          this.lastImage = ''
        }
        this.images.push(...result.data)
        if (result.data.length === 9 && this.images.length < result.total) {
          this.lastImage = this.images.pop()
        }
        this.anouncementLoading = false
        // console.log(this.images)
        if (this.images.length >= result.total) {
          this.more = false
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/variables.scss";
.home {
  width: 100%;
  .banner-box {
    width: 100%;
    min-height: 300px;
    margin: 0 auto;
    .banner {
      position: relative;
      margin: 0 auto;
      width: 100%;
      height: 420px;
      // cursor: pointer;
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
    .cur {
      cursor: pointer;
    }
    @media screen and (max-width: 780px) {
      .banner {
        height: 300px;
      }
    }
  }
  .content-1 {
    display: flex;
    flex-wrap: wrap;
    margin-top: 2%;
    .left1 {
      padding-right: 2%;
      height: 500px;
      cursor: pointer;
      @media screen and(max-width: 1300px) {
        width: 100%;
      }
      @media screen and(max-width: 780px) {
        margin-bottom: 20px;
        overflow: hidden;
        padding-right: 0;
      }
    }
    .right-1 {
      // min-width: 600px;
      display: flex;
      flex-wrap: wrap;
      .images {
        margin: 0 0 2% 0;
        padding-left: 2%;
        @media screen and(max-width: 780px) {
          // padding-left: 10px;
          padding: 0 10px 0 0;
        }
        .img-box {
          position: relative;
          height: 390px;
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
          .img-title {
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            color: #fff;
            padding: 5px 10px;
            box-sizing: border-box;
            height: 60px;
            .detail,
            .detail1 {
              height: 25px;
              line-height: 25px;
              overflow: hidden;
              text-overflow: ellipsis;
              display: -webkit-box;
              -webkit-box-orient: vertical;
              -webkit-line-clamp: 1;
            }
            .detail1 {
              font-size: 14px;
            }
            @media screen and(max-width: 780px) {
              height: 40px;
              line-height: 40px;
              .detail,
              .detail1 {
                height: 15px;
                line-height: 15px;
                font-size: 14px;
              }
              .detail1 {
                font-size: 12px;
              }
            }
          }
          .s0 {
            background: $red;
          }
          .s1 {
            background: $yellow;
          }
          .s2 {
            background: $pink;
          }
          @media screen and(max-width: 780px) {
            height: 300px;
            .img-title {
              font-size: 14px;
            }
          }
          @media screen and(max-width: 414px) {
            height: 200px;
            .img-title {
              font-size: 12px;
            }
          }
          @media screen and(max-width: 320px) {
            height: 150px;
            .img-title {
              font-size: 12px;
            }
          }
        }
        .cur {
          cursor: pointer;
        }
      }
      @media screen and(max-width: 780px) {
        .images:nth-child(3n) {
          padding-right: 0;
          margin-right: 0;
        }
      }
    }
  }
}
</style>

<style lang="scss">
@import "@/assets/styles/variables.scss";
.el-carousel__item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.el-carousel__arrow {
  color: $darkRed !important;
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
    width: 20px;
    height: 20px;
  }
}
.swiper-pagination-bullet-active {
  background: $darkRed;
}
</style>
