<template>
  <div class="annual">
    <transition name="fade-transform" mode="out-in">
      <div class="wrapper">
        <div :class="`title${id + 1}`" :style="{ 'max-width': $i18n.locale === 'en' ? '270px' : '220px' }">
          {{ $t('annual.title') }}
        </div>
        <div v-loading="listLoading">
          <div class="t-content">
            <el-row>
              <el-col v-if="count === 0" :xs="24" :md="24" :lg="12">
                <div class="left">
                  <div v-if="content.image_path_urls" v-loading="imgLoading" class="img-box">
                    <div class="bg" :class="`s${id + 1}`" />
                    <img :src="content.image_path_urls[0].image_path_url" alt="" style="margin:-8% 0 0 -6%" @load="imgLoad">
                  </div>
                </div>
              </el-col>
              <el-col :xs="24" :md="24" :lg="12">
                <div class="right">
                  <span class="name" :class="`s${id + 1}`">
                    {{ content.name }}</span>
                  <span class="conduct" v-html="content.desc">
                    {{ content.desc }}
                  </span>
                </div>
              </el-col>
              <el-col v-if="count === 1" :xs="24" :md="24" :lg="12">
                <div class="left-1">
                  <div v-if="content.image_path_urls" v-loading="imgLoading" class="img-box">
                    <img :src="content.image_path_urls[0].image_path_url" alt="" @load="imgLoad">
                    <div class="bg1" :class="`s${id + 1}`" style="margin:-8% 0 0 -6%" />
                  </div>
                </div>
              </el-col>
            </el-row>
          </div>
          <!-- <div v-if="content" class="production">
            <div v-if="count === 0" class="left">
              <div v-if="content.image_path_urls" v-loading="imgLoading" class="img-box">
                <div class="bg" :class="`s${id + 1}`" />
                <img :src="content.image_path_urls[0].image_path_url" alt="" style="margin:-8% 0 0 -6%" @load="imgLoad">
              </div>
            </div>
            <div class="right">
              <span class="name" :class="`s${id + 1}`">
                {{ content.name }}</span>
              <span class="conduct" v-html="content.desc">
                {{ content.desc }}
              </span>
            </div>
            <div v-if="count === 1" class="left-1">
              <div v-if="content.image_path_urls" v-loading="imgLoading" class="img-box">
                <img :src="content.image_path_urls[0].image_path_url" alt="" @load="imgLoad">
                <div class="bg1" :class="`s${id + 1}`" style="margin:-8% 0 0 -6%" />
              </div>
            </div>
          </div> -->
          <div class="info" v-html="content.info">
            {{ content.info }}
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
import { S4aApi } from '../../api/S4a'
export default {
  data() {
    return {
      id: null,
      count: null,
      content: [],
      listLoading: true,
      imgLoading: true
    }
  },
  watch: {
    $route(to, form) {
      this.init()
    }
  },
  mounted() {
    window.scrollTo(0, 0)
    this.$router.afterEach((to, from, next) => {
      window.scrollTo(0, 0)
    })
    this.init()
  },
  methods: {
    imgLoad() {
      this.imgLoading = false
    },
    init() {
      this.content = []
      this.listLoading = true
      this.imgLoading = true
      this.id = this.$route.params.id % 3
      this.count = this.$route.params.id % 2
      S4aApi.getEventRead(this.$route.params.contentId).then(result => {
        this.content = result.data
        this.listLoading = false
      })
    }
  }
}
</script>
<style scoped lang="scss">
@import "@/assets/styles/variables.scss";
.annual {
  padding: 0 14%;
  box-sizing: border-box;
  @media screen and (max-width: 780px) {
    padding: 0 17px;
  }
  .title1,
  .title2,
  .title3 {
    position: relative;
    height: 60px;
    margin: 0 auto 6%;
    line-height: 60px;
    text-align: center;
    color: $pink;
    font-size: 26px;
    font-weight: 700;
    @media screen and(max-width:780px) {
      font-size: 20px;
      height: 60px;
      line-height: 60px;
    }
  }
  .title2 {
    color: $red;
  }
  .title3 {
    color: $yellow;
  }
  .title1::after {
    content: " ";
    width: 100%;
    height: 45%;
    border-top: 5px solid $pink;
    border-left: 5px solid $pink;
    position: absolute;
    left: -4px;
    top: 0;
    @media screen and(max-width:780px) {
      border-top: 4px solid $pink;
      border-left: 4px solid $pink;
    }
  }
  .title1::before {
    content: " ";
    width: 100%;
    height: 45%;
    border-bottom: 5px solid $pink;
    border-right: 5px solid $pink;
    position: absolute;
    right: -4px;
    bottom: 0;
    @media screen and(max-width:780px) {
      border-bottom: 4px solid $pink;
      border-right: 4px solid $pink;
    }
  }
  .title2::after {
    content: " ";
    width: 100%;
    height: 45%;
    border-top: 5px solid $red;
    border-left: 5px solid $red;
    position: absolute;
    left: -4px;
    top: 0;
    @media screen and(max-width:780px) {
      border-top: 4px solid $red;
      border-left: 4px solid $red;
    }
  }
  .title2::before {
    content: " ";
    width: 100%;
    height: 45%;
    border-bottom: 5px solid $red;
    border-right: 5px solid $red;
    position: absolute;
    right: -4px;
    bottom: 0;
    @media screen and(max-width:780px) {
      border-bottom: 4px solid $red;
      border-right: 4px solid $red;
    }
  }
  .title3::after {
    content: " ";
    width: 100%;
    height: 45%;
    border-top: 5px solid $yellow;
    border-left: 5px solid $yellow;
    position: absolute;
    left: -4px;
    top: 0;
    @media screen and(max-width:780px) {
      border-top: 4px solid $yellow;
      border-left: 4px solid $yellow;
    }
  }
  .title3::before {
    content: " ";
    width: 100%;
    height: 45%;
    border-bottom: 5px solid $yellow;
    border-right: 5px solid $yellow;
    position: absolute;
    right: -4px;
    bottom: 0;
    @media screen and(max-width:780px) {
      border-bottom: 4px solid $yellow;
      border-right: 4px solid $yellow;
    }
  }
  .t-content {
    padding-bottom: 40px;
    @media screen and(max-width:1200px) {
      padding-bottom: 20px;
    }
  }
  .left,
  .left-1 {
    position: relative;
    margin-right: 20px;
    .img-box {
      display: flex;
      position: relative;
      max-width: 400px;
      width: 100%;
      height: 500px;
      padding: 10% 0;
      img {
        width: 90%;
        height: 100%;
        object-fit: cover;
        z-index: 999;
        @media screen and(max-width:780px) {
          width: 100%;
        }
        @media screen and(max-width: 780px) {
          margin: 0 !important;
        }
      }
    }
    .bg {
      // position: absolute;
      // width: 40%;
      // height: 100%;
      // top: 6%;
      // left: -12%;
      // background: $pink;
      width: 20%;
      height: 100%;
      @media screen and(max-width:780px) {
        display: none;
      }
      @media screen and(max-width: 780px) {
        margin: 0 !important;
      }
    }
    .bg1 {
      // position: absolute;
      // width: 20%;
      // height: 100%;
      // top: -6%;
      // right: -12%;
      // background: $pink;
      width: 20%;
      height: 100%;
      @media screen and(max-width:780px) {
        display: none;
      }
      @media screen and(max-width: 780px) {
        margin: 0 !important;
      }
    }
    @media screen and(max-width:780px) {
      .bg {
        width: 16%;
        left: -6%;
      }
      .bg1 {
        width: 16%;
        right: -6%;
      }
    }
    .s1 {
      background: $pink;
    }
    .s2 {
      background: $red;
    }
    .s3 {
      background: $yellow;
    }
  }
  .left-1 {
    margin: 0 0 0 20px;
  }
}
.right {
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 400px;
  width: 100%;
  min-width: 250px;
  min-height: 540px;
  @media screen and(max-width: 780px) {
    margin-bottom: 30px;
    min-height: 50px;
  }
  .name {
    color: $pink;
    font-size: 20px;
    font-weight: 500;
    @media screen and(max-width: 780px) {
      font-size: 18px;
    }
  }
  .conduct {
    margin-bottom: 1%;
    word-break: break-all;
  }
  .sponsor {
    margin-bottom: 2%;
  }
  .s1 {
    color: $pink;
  }
  .s2 {
    color: $red;
  }
  .s3 {
    color: $yellow;
  }
  // }
  @media screen and(max-width: 1400px) {
    .right {
      max-width: 500px;
    }
  }
  .info {
    padding: 0 1%;
    word-break: break-all;
    box-sizing: border-box;
    @media screen and(max-width:780px) {
      padding: 0 !important;
    }
  }
  .production:first-child {
    margin: 2% 0;
  }
}
// }
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
