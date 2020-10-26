<template>
  <div class="stage">
    <div :class="`title${id+1}`" :style="{'max-width':$i18n.locale==='en'? '250px':'200px'}">
      {{ $t('header.list2_4') }}
    </div>
    <div v-loading="loading" style="min-height:200px">
      <div v-if="contents.length>0">
        <!-- 内容只有一个的时候 -->
        <div v-if="contents.length<2" class="content">
          <div v-if="contents[0].image_path_urls.length>0" :id="contents[0].id" class="content" :refs="contents[0].id">
            <div class="top" :style="{'margin-right':count===1?'-6%':'0'}">
              <div class="left" :class="count===1?'left1':''">
                <el-image :src="contents[0].image_path_urls[0].image_path_url" fit="cover" style="width:100%;height:100%;">
                  <div slot="error" class="image-slot slot" style="text-align:center;font-size:20px;">
                    加載失敗
                  </div>
                  <div slot="placeholder" class="image-slot slot">
                    <span class="dot" style="font-size:20px;"><i class="el-icon-loading" /></span>
                  </div>
                </el-image>
              </div>
              <div class="right" :class="count===1?'':'right1'">
                <el-image :src="contents[0].image_path_urls[1].image_path_url" fit="cover" style="width:100%;height:100%;">
                  <div slot="error" class="image-slot slot" style="text-align:center;font-size:20px;">
                    加載失敗
                  </div>
                  <div slot="placeholder" class="image-slot slot">
                    <span class="dot" style="font-size:20px;"><i class="el-icon-loading" /></span>
                  </div>
                </el-image>
              </div>
            </div>
            <div class="bottom" :style="{'margin-right':count===1?'0':'-6%'}">
              <div v-if="count===0" class="left">
                <el-image :src="contents[0].image_path_urls[2].image_path_url" fit="cover" style="width:100%;height:100%;">
                  <div slot="error" class="image-slot slot" style="text-align:center;font-size:20px;">
                    {{ $t('fail') }}
                    <!-- 加載失敗 -->
                  </div>
                  <div slot="placeholder" class="image-slot slot">
                    <span class="dot" style="font-size:20px;"><i class="el-icon-loading" /></span>
                  </div>
                </el-image>
              </div>
              <div class="right">
                <div class="r-content" :style="{'text-align':count===1?'right':'left'}">
                  <span class="con1-title" :class="`s${id+1}`">{{ contents[0].name }}</span>
                  <span class="cont" v-html="contents[0].desc">{{ contents[0].desc }}</span>
                </div>
              </div>
              <div v-if="count===1" class="left">
                <el-image :src="contents[0].image_path_urls[2].image_path_url" fit="cover" style="width:100%;height:100%;">
                  <div slot="error" class="image-slot slot" style="text-align:center;font-size:20px;">
                    <!-- 加載失敗 -->
                    {{ $t('fail') }}
                  </div>
                  <div slot="placeholder" class="image-slot slot">
                    <span class="dot" style="font-size:20px;"><i class="el-icon-loading" /></span>
                  </div>
                </el-image>

              </div>
            </div>
          </div>
        </div>
        <!-- 内容多个的时候 -->
        <div v-for="(item,index) of contents" v-else :id="item.id" :key="index" :ref="item.id" class="content">
          <div v-if="item.image_path_urls" class="top" :style="{'margin-right':((index+1)%2)===0?'-6%':'0'}">
            <div v-if="item.image_path_urls[0]" class="left" :class="((index+1)%2)===0?'left1':''">
              <el-image :src="item.image_path_urls[0].image_path_url" fit="cover" style="width:100%;height:100%;">
                <div slot="error" class="image-slot slot" style="text-align:center;font-size:20px;">
                  加載失敗
                </div>
                <div slot="placeholder" class="image-slot slot">
                  <span class="dot" style="font-size:20px;"><i class="el-icon-loading" /></span>
                </div>
              </el-image>
            </div>
            <div class="right" :class="((index+1)%2)===0?'':'right1'">
              <el-image :src="item.image_path_urls[1].image_path_url" fit="cover" style="width:100%;height:100%;">
                <div slot="error" class="image-slot slot" style="text-align:center;font-size:20px;">
                  <!-- 加載失敗 -->
                  {{ $t('fail') }}
                </div>
                <div slot="placeholder" class="image-slot slot">
                  <span class="dot" style="font-size:20px;"><i class="el-icon-loading" /></span>
                </div>
              </el-image>
            </div>
          </div>
          <div v-if="item.image_path_urls" class="bottom" :style="{'margin-right':((index+1)%2)===0?'0':'-6%'}">
            <div v-if="((index+1)%2)===1" class="left">
              <el-image :src="item.image_path_urls[2].image_path_url" fit="cover" style="width:100%;height:100%;">
                <div slot="error" class="image-slot slot" style="text-align:center;font-size:20px;">
                  <!-- 加載失敗 -->
                  {{ $t('fail') }}
                </div>
                <div slot="placeholder" class="image-slot slot">
                  <span class="dot" style="font-size:20px;"><i class="el-icon-loading" /></span>
                </div>
              </el-image>
            </div>
            <div class="right">
              <div class="r-content" :style="{'text-align':((index+1)%2)===0?'right':'left'}">
                <span class="con1-title" :class="`s${(id+index)%3+1}`">{{ item.name }}</span>
                <span class="cont" v-html="item.desc">{{ item.desc }}</span>
              </div>
            </div>
            <div v-if="((index+1)%2)===0" class="left">
              <el-image :src="item.image_path_urls[2].image_path_url" fit="cover" style="width:100%;height:100%;">
                <div slot="error" class="image-slot slot" style="text-align:center;font-size:20px;">
                  <!-- 加載失敗 -->
                  {{ $t('fail') }}
                </div>
                <div slot="placeholder" class="image-slot slot">
                  <span class="dot" style="font-size:20px;"><i class="el-icon-loading" /></span>
                </div>
              </el-image>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { S4aApi } from '../../api/S4a'
export default {
  data() {
    return {
      id: null,
      count: null,
      loading: true,
      contents: [],
      imgLoading: [true, true, true, true],
      imagesLoading: []
    }
  },
  watch: {
    $route(to, form) {
      this.init()
    }
  },
  mounted() {
    this.init()
    // this.$router.afterEach((to, from, next) => {
    //   window.scrollTo(0, 0)
    // })
    window.scrollTo(0, 0)
  },
  updated() {
    this.$nextTick(() => {
      setTimeout(() => {
        this.handleScroll()
      }, 500)
    })
  },
  methods: {
    handleScroll() {
      var hash = window.location.hash
      var index = hash.lastIndexOf('#')
      var id = hash.substring(index + 1, hash.length + 1)
      if (this.$refs[id]) {
        let speed = 80
        const timer = setInterval(() => {
          window.scrollTo(0, speed)
          speed += speed
          if (speed >= this.$refs[id][0].offsetTop) {
            window.scrollTo(0, this.$refs[id][0].offsetTop - 20)
            clearInterval(timer)
          }
        }, 20)
      }
    },
    init() {
      this.$set(this.imgLoading, 0, true)
      this.$set(this.imgLoading, 1, true)
      this.$set(this.imgLoading, 2, true)
      this.$set(this.imgLoading, 3, true)
      this.loading = true
      this.contents = []
      this.imagesLoading = []
      this.id = this.$route.params.year % 3
      this.count = this.$route.params.year % 2
      const data = 'count=5&page=1&status=true&type=collaborations&year=' + this.$route.params.year
      S4aApi.getEventList(data).then(result => {
        this.contents = result.data
        this.loading = false
      })
    }
  }
}
</script>
<style lang="scss" scoped>
@import "@/assets/styles/variables.scss";
.stage {
  width: 100%;
  padding: 0 14%;
  box-sizing: border-box;
  @media screen and (max-width: 780px) {
    padding: 0 17px;
  }
  .title1,
  .title2,
  .title3 {
    position: relative;
    width: 100%;
    height: 60px;
    line-height: 60px;
    color: $red;
    font-size: 24px;
    font-weight: 700;
    text-align: center;
    margin: 0 auto 6%;
    @media screen and(max-width:780px) {
      font-size: 20px;
    }
  }
  .title2 {
    color: $yellow;
  }
  .title3 {
    color: $pink;
  }
  .title1::after {
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
  .title1::before {
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
  .title2::after {
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
  .title2::before {
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
  .title3::after {
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
  .title3::before {
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
  .content {
    margin: 0 auto 50px;
    // margin-left: -10px;
    .top {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: baseline;
      @media screen and(max-width:780px) {
        margin: 0 !important;
      }
      .left {
        position: relative;
        max-width: 390px;
        width: 100%;
        height: 300px;
        .slot {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
      }
      .left1 {
        height: 280px;
        z-index: 91;
      }
      .right {
        position: relative;
        margin: 0 0 0 10px;
        z-index: 99;
        max-width: 390px;
        width: 100%;
        height: 300px;
        @media screen and(max-width:780px) {
          margin: 0 !important;
        }
        .slot {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
      }
      .right1 {
        z-index: 100;
        height: 280px;
      }
    }
    .bottom {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      margin-right: -6%;
      @media screen and(max-width:780px) {
        margin: 0 !important;
      }
      .left {
        position: relative;
        max-width: 390px;
        width: 100%;
        z-index: 90;
        margin-top: -4%;
        height: 300px;
        z-index: 92;
        @media screen and(max-width:780px) {
          margin: 0;
        }
        .slot {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
      }
      .right {
        margin-top: -4%;
        max-width: 390px;
        width: 100%;
        box-sizing: border-box;
        padding: 4% 2%;
        box-shadow: 0 0 10px #ccc;
        min-height: 300px;
        @media screen and(max-width:780px) {
          margin: 0 !important;
        }
        .r-content {
          display: flex;
          flex-direction: column;
          // margin: 10px auto 0;
          // min-height: 300px;
          // overflow: hidden;
          .cont {
            display: block;
          }
          .con1-title {
            color: $yellow;
            font-weight: 500;
            font-size: 20px;
            margin-bottom: 10px;
            @media screen and(max-width:780px) {
              font-size: 18px;
            }
          }
          .s1 {
            color: $red;
          }
          .s2 {
            color: $yellow;
          }
          .s3 {
            color: $pink;
          }
        }
      }
    }
  }
}
</style>

