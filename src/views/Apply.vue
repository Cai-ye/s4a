<template>
  <div class="chairman">
    <div class="title">{{ $t('apply') }}</div>
    <div v-loading="listLoading" class="first">
      <div v-if="content.length<1" style="text-align:center">{{ $t('nodata') }}</div>
      <div v-for="(item,index) of content" v-else :id="item.id" :key="index" :ref="item.id">
        <div class="box">
          <div class="name">{{ item.name }}</div>
          <div class="content" v-html="item.desc">{{ item.desc }}</div>
          <a class="sign" :href="item.file_path_url" target="_blank">{{ $t('sign') }}</a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { S4aApi } from '../api/S4a'
export default {
  data() {
    return {
      content: [],
      query: {
        page: 1,
        count: 10,
        status: true,
        type: 'apply_register',
        sort: 'date',
        sort_direction: 'desc'
      },
      listLoading: true
    }
  },
  mounted() {
    // this.$router.afterEach((to, from, next) => {
    //   window.scrollTo(0, 0)
    // })
    window.scrollTo(0, 0)
    const data = `page=${this.query.page}&count=${this.query.count}&status=${this.query.status}&type=${this.query.type}`
    S4aApi.getEventList(data).then(result => {
      // console.log(result)
      this.content = result.data
      this.listLoading = false
    })
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
        // console.log(this.$refs)
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
    }
  }
}
</script>
<style scoped lang="scss">
@import "@/assets/styles/variables.scss";
.chairman {
  width: 100%;
  padding: 0 12%;
  box-sizing: border-box;
  @media screen and (max-width: 780px) {
    padding: 0 17px;
  }
  .first {
    position: relative;
    padding: 4% 8%;
    min-height: 400px;
    .box {
      width: 100%;
      margin: 20px auto;
      min-height: 200px;
      @media screen and(max-width: 780px) {
        margin: 20px auto;
      }
      .name {
        font-weight: 500;
        font-size: 20px;
        color: $red;
        margin-bottom: 10px;
        @media screen and(max-width: 780px) {
          font-size: 18px;
        }
      }
      // .content {
      //   line-height: 30px;
      // }
      .sign {
        display: block;
        width: 120px;
        height: 40px;
        line-height: 40px;
        font-weight: 500;
        text-align: center;
        margin: 60px auto;
        color: $red;
        border: 2px solid $red;
        border-radius: 5px;
        font-size: 18px;
        cursor: pointer;
        @media screen and(max-width: 780px) {
          height: 36px;
          line-height: 36px;
          font-size: 16px;
          margin: 20px auto;
        }
      }
      .sign:hover {
        background: $red;
        color: #fff;
      }
    }
  }
  .first::before {
    content: "";
    position: absolute;
    width: 100px;
    height: 125px;
    top: 0;
    left: 2%;
    border-left: 3px solid $red;
    border-top: 3px solid $red;
    @media screen and(max-width:780px) {
      left: -2%;
      top: -3px;
    }
  }
  .first::after {
    content: "";
    position: absolute;
    width: 100px;
    height: 125px;
    bottom: 0;
    right: 2%;
    border-bottom: 3px solid $red;
    border-right: 3px solid $red;
    @media screen and(max-width:780px) {
      right: -2%;
      bottom: -3px;
    }
  }
}
</style>
