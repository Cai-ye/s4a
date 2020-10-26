<template>
  <div class="stage">
    <div :class="`title${id+1}`" :style="{'max-width':$i18n.locale==='en'? '370px':'200px'}">
      {{ $t('header.list2_1') }}
    </div>
    <div v-loading="listLoading" style="min-height:300px;">
      <div v-if="content.length>0">
        <div v-if="content.length<2" :id="content[0].id" :ref="content[0].id" :class="`content-first${id+1}`" style="margin-top:70px;">
          <div class="title-f" :class="id<2?`s${id+1}`:''">
            {{ content[0].name }}
          </div>
          <div class="content-top" v-html="content[0].desc ">
            {{ content[0].desc }}
          </div>
        </div>
        <div v-for="(item,index) of content" v-else :id="item.id" :key="index" :ref="item.id" :class="`content-first${(id+index)%3+1}`" :style="{'margin-top':index===0?'70px':'90px'}">
          <div class="title-f" :class="id<2?`s${(id+index)%3+1}`:''">
            {{ item.name }}
          </div>
          <div class="content-top" v-html="item.desc">
            {{ item.desc }}
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
      content: [],
      listLoading: true
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
            // console.log(speed)
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
      const data = 'count=5&page=1&status=true&type=professional_public_shows&year=' + this.$route.params.year
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
  min-height: 200px;
  padding: 0 14%;
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
    color: $red;
    font-size: 24px;
    font-weight: 700;
    text-align: center;
    margin: 0 auto;
    @media screen and(max-width:780px) {
      font-size: 20px;
      height: 60px;
      line-height: 60px;
      margin: 0 auto 24px;
      max-width: 280px !important;
    }
    @media screen and(max-width:320px) {
      font-size: 19px;
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
  .content-first1,
  .content-first2 {
    // max-width: 847px;
    position: relative;
    // margin-top: 160px;
    padding: 4% 8%;
    min-height: 300px;
    margin: 0 auto;
    box-sizing: border-box;
    @media screen and(max-width:780px) {
      margin-top: 50px !important;
      padding: 8% 6% 5%;
    }
    .title-f {
      position: absolute;
      top: 0;
      left: 50%;
      transform: translate(-50%, -50%);
      color: $red;
      font-size: 20px;
      font-weight: 500;
      // text-align: center;
      margin-bottom: 4%;
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
    .content-top {
      margin-bottom: 20px;
      a {
        cursor: pointer;
      }
    }
    .content-bottom {
      display: flex;
      flex-wrap: wrap;
      .content-b {
        max-width: 460px;
        margin-right: 10px;
        .add {
          margin-bottom: 10px;
        }
      }
    }
  }
  .content-first3 {
    position: relative;
    margin: 0 auto;
    padding: 4% 8%;
    min-height: 300px;
    box-sizing: border-box;
    @media screen and(max-width:780px) {
      margin-top: 50px !important;
      padding: 8% 6% 5%;
    }
    .title-f {
      position: absolute;
      top: 0;
      left: 50%;
      transform: translate(-50%, -50%);
      color: $pink;
      font-size: 20px;
      font-weight: 500;
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
    .content-top {
      // line-height: 30px;
      margin-bottom: 20px;
      a {
        cursor: pointer;
      }
    }
    .content-bottom {
      display: flex;
      flex-wrap: wrap;
      .content-b {
        max-width: 460px;
        margin-right: 10px;
        .add {
          margin-bottom: 10px;
          // line-height: 30px;
        }
        // .time {
        //   div {
        //     line-height: 30px;
        //   }
        // }
      }
    }
  }
  .content-first1::before {
    content: "";
    position: absolute;
    // width: 60%;
    // height: 50%;
    width: 22%;
    height: 96%;
    left: 1%;
    top: 0;
    border-left: 5px solid $red;
    border-top: 5px solid $red;
    @media screen and(max-width:780px) {
      border-left: 4px solid $red;
      border-top: 4px solid $red;
      left: -2%;
    }
  }
  .content-first1::after {
    content: "";
    position: absolute;
    // width: 60%;
    // height: 50%;
    width: 22%;
    height: 96%;
    right: 1%;
    bottom: 0;
    border-right: 5px solid $red;
    border-bottom: 5px solid $red;
    @media screen and(max-width:780px) {
      border-right: 4px solid $red;
      border-bottom: 4px solid $red;
      right: -2%;
    }
  }
  .content-first2::before {
    content: "";
    position: absolute;
    // width: 60%;
    // height: 50%;
    width: 22%;
    height: 96%;
    left: 1%;
    bottom: 0;
    border-left: 5px solid $yellow;
    border-bottom: 5px solid $yellow;
    @media screen and(max-width:780px) {
      border-left: 4px solid $yellow;
      border-bottom: 4px solid $yellow;
      left: -2%;
    }
  }
  .content-first2::after {
    content: "";
    position: absolute;
    // width: 100px;
    // width: 60%;
    // height: 50%;
    width: 22%;
    height: 96%;
    right: 1%;
    top: 0;
    border-right: 5px solid $yellow;
    border-top: 5px solid $yellow;
    @media screen and(max-width:780px) {
      border-right: 4px solid $yellow;
      border-top: 4px solid $yellow;
      right: -2%;
    }
  }
  .content-first3::before {
    content: "";
    position: absolute;
    // width: 100px;
    // width: 60%;
    // height: 50%;
    width: 22%;
    height: 96%;
    left: 1%;
    bottom: 0;
    border-left: 5px solid $pink;
    border-bottom: 5px solid $pink;
    @media screen and(max-width:780px) {
      border-left: 4px solid $pink;
      border-bottom: 4px solid $pink;
      left: -2%;
    }
  }
  .content-first3::after {
    content: "";
    position: absolute;
    // width: 60%;
    // height: 50%;
    width: 22%;
    height: 96%;
    right: 1%;
    top: 0;
    border-right: 5px solid $pink;
    border-top: 5px solid $pink;
    @media screen and(max-width:780px) {
      border-right: 4px solid $pink;
      border-top: 4px solid $pink;
      right: -2%;
    }
  }
  @media screen and(max-width:780px) {
    .content-first1::before,
    .content-first2::before,
    .content-first3::before,
    .content-first1::after,
    .content-first2::after,
    .content-first3::after {
      width: 20%;
    }
  }
}
</style>
