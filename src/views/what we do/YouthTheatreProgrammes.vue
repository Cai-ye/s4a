<template>
  <div class="stage">
    <div :class="`title${id + 1}`" :style="{ 'max-width': $i18n.locale === 'en' ? '430px' : '250px' }">
      {{ $t('header.list2_2') }}
    </div>
    <div v-loading="listLoading" style="min-height:200px">
      <div v-if="content.length > 0">
        <div v-if="content.length < 2">
          <div v-if="content[0].image_path_urls.length > 0">
            <div class="content-four">
              <div v-if="count === 0" class="img1">
                <el-image :src="content[0].image_path_urls[0].image_path_url" fit="cover" style="width:100%;height:100%;">
                  <div slot="error" class="image-slot slot" style="text-align:center;font-size:20px;">
                    <!-- 加載失敗 -->
                    {{ $t('fail') }}
                  </div>
                  <div slot="placeholder" class="image-slot slot">
                    <span class="dot" style="font-size:20px;"><i class="el-icon-loading" /></span>
                  </div>
                </el-image>
                <!-- <img :src="content[0].image_path_urls[0].image_path_url" alt=""> -->
              </div>
              <div class="content-full" :class="`con${count + 1}-${id + 1}`">
                <div class="dov">
                  <div :class="`title-l${id + 1}`">{{ content[0].name }}</div>
                  <div class="full" v-html="content[0].desc">
                    {{ content[0].desc }}
                  </div>
                </div>
              </div>
              <div v-if="count === 1" class="img1">
                <el-image :src="content[0].image_path_urls[0].image_path_url" fit="cover" style="width:100%;height:100%;">
                  <div slot="error" class="image-slot slot" style="text-align:center;font-size:20px;">
                    <!-- 加載失敗 -->
                    {{ $t('fail') }}
                  </div>
                  <div slot="placeholder" class="image-slot slot">
                    <span class="dot" style="font-size:20px;"><i class="el-icon-loading" /></span>
                  </div>
                </el-image>
                <!-- <img :src="content[0].image_path_urls[0].image_path_url" alt=""> -->
              </div>
            </div>
            <div class="info" v-html="content[0].info">
              {{ content[0].info }}
            </div>
          </div>
          <div v-else>
            <div :class="`content${id + 1}-${count + 1}`" :style="{'padding': count===0 ? '0 0 0 6%' : '0 6% 0 0'}">
              <div :class="`title-${id + 1}`" :style="{ 'text-align': count === 0 ? 'left' : 'right' }">
                {{ content[0].name }}
              </div>
              <div class="content">
                <div v-html="content[0].desc">{{ content[0].desc }}</div>
                <div v-html="content[0].info">{{ content[0].info }}</div>
              </div>
            </div>
          </div>
        </div>
        <div v-else>
          <div v-for="(item, index) of content" :key="index">
            <div v-if="item.image_path_urls.length > 0" :id="item.id" :ref="item.id" class="four-box">
              <div class="content-four">
                <div v-if="(index + 1) % 2 === 1" class="img1">
                  <el-image :src="item.image_path_urls[0].image_path_url" fit="cover" style="width:100%;height:100%;">
                    <div slot="error" class="image-slot slot" style="text-align:center;font-size:20px;">
                      <!-- 加載失敗 -->
                      {{ $t('fail') }}
                    </div>
                    <div slot="placeholder" class="image-slot slot">
                      <span class="dot" style="font-size:20px;"><i class="el-icon-loading" /></span>
                    </div>
                  </el-image>
                  <!-- <img :src="item.image_path_urls[0].image_path_url" alt=""> -->
                </div>
                <div class="content-full" :class="`con${(index % 2) + 1}-${((id + index) % 3) + 1}`">
                  <div class="dov">
                    <div :class="`title-l${((id + index) % 3) + 1}`">
                      {{ item.name }}
                    </div>
                    <div class="full" v-html="item.desc">
                      {{ item.desc }}
                    </div>
                  </div>
                </div>
                <div v-if="(index + 1) % 2 === 0" class="img1">
                  <el-image :src="item.image_path_urls[0].image_path_url" fit="cover" style="width:100%;height:100%;">
                    <div slot="error" class="image-slot slot" style="text-align:center;font-size:20px;">
                      <!-- 加載失敗 -->
                      {{ $t('fail') }}
                    </div>
                    <div slot="placeholder" class="image-slot slot">
                      <span class="dot" style="font-size:20px;"><i class="el-icon-loading" /></span>
                    </div>
                  </el-image>
                  <!-- <img :src="item.image_path_urls[0].image_path_url" alt=""> -->
                </div>
              </div>
              <div class="info" v-html="item.info">{{ item.info }}</div>
            </div>
            <div v-else>
              <div :id="item.id" :class="`content${((id + index) % 3) + 1}-${(index % 2) + 1}`" :refs="item.id" :style="{'padding': (index % 2) + 1 === 1 ? '0 0 0 7%' : '0 7% 0 0'}">
                <div :class="`title-${((id + index) % 3) + 1}`" :style="{'text-align': (index % 2) + 1 === 1 ? 'left' : 'right'}">
                  {{ item.name }}
                </div>
                <div class="content content-test">
                  <div v-html="item.desc">{{ item.desc }}</div>
                  <div v-html="item.info">{{ item.info }}</div>
                </div>
              </div>
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
      content: [],
      id: null,
      count: null,
      listLoading: true,
      imgLoading: []
    }
  },
  watch: {
    $route(to, form) {
      this.init()
    }
  },
  mounted() {
    // this.$router.afterEach((to, from, next) => {
    //   window.scrollTo(0, 0)
    // })
    window.scrollTo(0, 0)
    this.init()
  },
  // 在Vue生命周期的created()钩子函数进行的DOM操作一定要放在Vue.nextTick()的回调函数中
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
      if (id !== -1) {
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
      }
    },
    init() {
      this.listLoading = true
      this.content = []
      this.id = this.$route.params.year % 3
      this.count = this.$route.params.year % 2
      const data =
        'count=5&page=1&status=true&&type=youth_theatre_programmes&year=' +
        this.$route.params.year
      S4aApi.getEventList(data).then(result => {
        // console.log(result)
        this.content = result.data
        this.listLoading = false
      })
    }
  }
}
</script>
<style lang="scss" scoped>
@import "@/assets/styles/variables.scss";
.stage {
  width: 100%;
  padding: 0 13%;
  box-sizing: border-box;
  @media screen and(max-width:780px) {
    padding: 0 20px;
  }
  .title1,
  .title2,
  .title3 {
    position: relative;
    height: 60px;
    line-height: 60px;
    color: $yellow;
    font-size: 24px;
    font-weight: 700;
    text-align: center;
    margin: 0 auto 6%;
    @media screen and(max-width:780px) {
      font-size: 18px;
      font-weight: 500;
      height: 60px;
      line-height: 60px;
      max-width: 460px !important;
    }
  }
  .title2 {
    color: $red;
  }
  .title3 {
    color: $pink;
  }
  .title1::after {
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
  .title1::before {
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
  .content1-1,
  .content1-2,
  .content2-1,
  .content2-2,
  .content3-1,
  .content3-2 {
    position: relative;
    min-height: 300px;
    margin: 0 auto 100px;
    @media screen and(max-width:780px) {
      margin: 0 auto 50px;
    }
    .title-1,
    .title-2,
    .title-3 {
      color: $yellow;
      font-size: 20px;
      font-weight: 500;
      @media screen and(max-width:780px) {
        font-size: 18px;
      }
    }
    .title-2 {
      color: $red;
    }
    .title-3 {
      color: $pink;
    }
  }
  .content1-1::before {
    content: "";
    position: absolute;
    width: 4%;
    height: 100%;
    left: 0;
    top: 0;
    border-left: 30px solid $yellow;
    border-bottom: 30px solid $yellow;
    @media screen and(max-width:780px) {
      border-left: 20px solid $yellow;
      border-bottom: 20px solid $yellow;
      width: 14%;
      left: -3%;
    }
  }
  .content1-2::before {
    content: "";
    position: absolute;
    width: 4%;
    height: 100%;
    right: 0;
    top: 0;
    border-right: 30px solid $yellow;
    border-bottom: 30px solid $yellow;
    @media screen and(max-width:780px) {
      border-right: 20px solid $yellow;
      border-bottom: 20px solid $yellow;
      width: 14%;
      right: -3%;
    }
  }
  .content2-1::before {
    content: "";
    position: absolute;
    width: 4%;
    height: 100%;
    left: 0;
    top: 0;
    border-left: 30px solid $red;
    border-bottom: 30px solid $red;
    @media screen and(max-width:780px) {
      border-left: 20px solid $red;
      border-bottom: 20px solid $red;
      width: 14%;
      left: -3%;
    }
  }
  .content2-2::before {
    content: "";
    position: absolute;
    width: 4%;
    height: 100%;
    right: 0;
    top: 0;
    border-right: 30px solid $red;
    border-bottom: 30px solid $red;
    @media screen and(max-width:780px) {
      border-right: 20px solid $red;
      border-bottom: 20px solid $red;
      width: 14%;
      right: -2%;
    }
  }
  .content3-1::before {
    content: "";
    position: absolute;
    width: 4%;
    height: 100%;
    left: 0;
    top: 0;
    border-left: 30px solid $pink;
    border-bottom: 30px solid $pink;
    @media screen and(max-width:780px) {
      border-left: 20px solid $pink;
      border-bottom: 20px solid $pink;
      width: 14%;
      left: -3%;
    }
  }
  .content3-2::before {
    content: "";
    position: absolute;
    width: 4%;
    height: 100%;
    right: 0;
    top: 0;
    border-right: 30px solid $pink;
    border-bottom: 30px solid $pink;
    @media screen and(max-width:780px) {
      border-right: 20px solid $pink;
      border-bottom: 20px solid $pink;
      width: 14%;
      right: -3%;
    }
  }
  .four-box {
    margin-bottom: 100px;
  }
  .content-four {
    margin: 0 auto 40px;
    display: flex;
    align-items: center;
    @media screen and(max-width:780px) {
      margin: 50px 0 0;
    }
    @media screen and(max-width:1200px) {
      flex-wrap: wrap;
    }
    .content-full {
      max-width: 420px;
      width: 100%;
      min-width: 250px;
      padding: 2% 5%;
      box-sizing: border-box;
      min-height: 350px;
      .dov {
        .title-l1,
        .title-l2,
        .title-l3 {
          color: $yellow;
          font-weight: 450;
          font-size: 20px;
          @media screen and(max-width:780px) {
            font-size: 18px;
          }
        }
        .title-l2 {
          color: $red;
        }
        .title-l3 {
          color: $pink;
        }
        .t1 {
          text-align: left;
        }
        .t2 {
          text-align: right;
        }
        .full {
          box-sizing: border-box;
        }
      }
    }
    .con1-1 {
      border: 15px solid $yellow;
      border-left: 10px solid $yellow;
      border-right: none;
    }
    .con1-2 {
      border: 15px solid $red;
      border-left: 10px solid $red;
      border-right: none;
    }
    .con1-3 {
      border: 15px solid $pink;
      border-left: 10px solid $pink;
      border-right: none;
    }
    .con2-1 {
      border: 15px solid $yellow;
      border-right: 10px solid $yellow;
      border-left: none;
    }
    .con2-2 {
      border: 15px solid $red;
      border-right: 10px solid $red;
      border-left: none;
    }
    .con2-3 {
      border: 15px solid $pink;
      border-right: 10px solid $pink;
      border-left: none;
    }
    .img1 {
      max-width: 400px;
      width: 100%;
      min-width: 250px;
      height: 350px;
      position: relative;
      .slot {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    }
  }
  .info {
    max-width: 847px;
    padding: 0 1%;
    margin: 10px auto 0;
    box-sizing: border-box;
    // line-height: 30px;
  }

}
</style>
<style lang="scss">
.stage{
   a{
     word-wrap:break-word
   }
 }
</style>

