<template>
  <div class="touring">
    <div :class="`title${id+1}`" :style="{'max-width':$i18n.locale==='en'? '370px':'220px'}">{{ $t('header.list2_3') }} </div>
    <div>
      <div v-loading="listLoading" class="con-box">
        <div v-for="(item,index) of content" :id="item.id" :key="index" :ref="item.id" class="content3">
          <div v-if="item.image_path_urls.length==1" class="img">
            <el-image :src="item.image_path_urls[0].image_path_url" fit="cover" style="width:100%;height:100%;">
              <div slot="error" class="image-slot slot" style="text-align:center;font-size:20px;">
                加載失敗
              </div>
              <div slot="placeholder" class="image-slot slot">
                <span class="dot" style="font-size:20px;"><i class="el-icon-loading" /></span>
              </div>
            </el-image>
          </div>
          <div v-if="item.image_path_urls.length==2" class="images">
            <el-row :gutter="20">
              <el-col v-for="(el,i) of item.image_path_urls" :key="i" :xs="24" :md="24" :lg="12">
                <div class="imgs">
                  <el-image :src="el.image_path_url" fit="cover" style="width:100%;height:100%;">
                    <div slot="error" class="image-slot slot" style="text-align:center;font-size:20px;">
                      <!-- 加載失敗 -->
                      {{ $t('fail') }}
                    </div>
                    <div slot="placeholder" class="image-slot slot">
                      <span class="dot" style="font-size:20px;"><i class="el-icon-loading" /></span>
                    </div>
                  </el-image>
                </div>
              </el-col>
            </el-row>
          </div>
          <div v-if="item.image_path_urls.length==3" class="images">
            <el-row :gutter="10">
              <el-col v-for="(el,i) of item.image_path_urls" :key="i" :xs="24" :md="24" :lg="8">
                <div class="img-box">
                  <el-image :src="el.image_path_url" fit="cover" style="width:100%;height:100%;">
                    <div slot="error" class="image-slot slot" style="text-align:center;font-size:20px;">
                      <!-- 加載失敗 -->
                      {{ $t('fail') }}
                    </div>
                    <div slot="placeholder" class="image-slot slot">
                      <span class="dot" style="font-size:20px;"><i class="el-icon-loading" /></span>
                    </div>
                  </el-image>
                </div>
              </el-col>
            </el-row>
          </div>
          <div v-if="item.image_path_urls.length>0" class="con">
            <div :class="`t${(id+index)%3+1}`">{{ item.name }}</div>
            <div class="content-box" v-html="item.desc">
              {{ item.desc }}
            </div>
          </div>
          <div v-else class="con">
            <div :class="`t${(id+index)%3+1}`">{{ item.name }}</div>
            <div class="content-box" v-html="item.desc">
              {{ item.desc }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- </div> -->
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
      imagesLoading: []
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
      const data = 'count=5&page=1&status=true&type=school_touring_shows&year=' + this.$route.params.year
      S4aApi.getEventList(data).then(result => {
        // console.log(result)
        this.content = result.data
        this.listLoading = false
      })
    }
  }
}
</script>
<style scoped lang="scss">
@import "@/assets/styles/variables.scss";
.touring {
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
    line-height: 60px;
    color: $red;
    font-size: 24px;
    font-weight: 700;
    text-align: center;
    margin: 0 auto 6%;
    @media screen and(max-width:780px) {
      font-size: 20px;
      max-width: 250px !important;
      height: 60px;
      line-height: 60px;
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
  .con-box {
    // max-width: 847px;
    margin: 0 auto;
    min-height: 300px;
    @media screen and(max-width:780px) {
      min-height: 100px;
    }
  }
  .content3 {
    margin-bottom: 80px;
    @media screen and(max-width:780px) {
      margin-bottom: 50px !important;
    }
    .img {
      position: relative;
      width: 100%;
      margin: 0 auto;
      min-height: 300px;
      height: 380px;
      @media screen and(max-width:780px) {
        height: 350px;
      }
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
    .images {
      // display: flex;
      // flex-wrap: wrap;
      // justify-content: center;
      // 三个一行
      .img-box {
        position: relative;
        max-width: 280px;
        height: 250px;
        width: 100%;
        min-width: 250px;
        margin-bottom: 10px;
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
      .img-box :nth-child(3n) {
        margin-right: 0;
      }
      // 两个一行
      .imgs {
        position: relative;
        max-width: 415px;
        min-width: 250px;
        height: 300px;
        width: 100%;
        margin-bottom: 10px;
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
    .con {
      margin: 20px auto 0;
      padding: 0 1%;
      .t1,
      .t2,
      .t3 {
        color: $red;
        text-align: left;
        margin: 10px 0;
        font-size: 20px;
        @media screen and(max-width:780px) {
          font-size: 18px;
        }
      }
      .t2 {
        color: $yellow;
      }
      .t3 {
        color: $pink;
      }
      .content-box {
        margin: 10px auto;
        .left {
          max-width: 400px;
          width: 100%;
          min-width: 300px;
          margin-right: 10px;
        }
      }
    }
    .cont {
      padding: 0;
    }
  }
}
</style>
