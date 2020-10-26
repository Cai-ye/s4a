<template>
  <div class="chairman">
    <div class="title">{{ $t('testimonials') }}</div>
    <div v-loading="listLoading" class="first">
      <div v-for="(item, index) of content" :key="index" class="content">
        <div style="text-align:center;margin-bottom:20px;">
          {{ item.title }}
        </div>
        <div v-html="item.content">
          {{ item.content }}
        </div>
        <!-- 根據event跳轉相應的頁面 -->
        <div v-if="!showMore[index]" class="links">
          <div v-for="(el, i) of item.events" :key="i" class="item-link">
            <span :class="[el.status ? 'link' : '']" @click="gopage(el)">{{ el.name }}</span>
          </div>
        </div>
        <div v-if="showMore[index]" class="more" @click="changeMore(index)">
          {{ $t('read') }}
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { S4aApi } from '../api/S4a'
import spacetime from 'spacetime'
export default {
  data() {
    return {
      content: [],
      query: {
        page: 1,
        count: 10,
        status: true
      },
      listLoading: true,
      showMore: []
    }
  },
  created() {
    this.getContent()
  },
  methods: {
    getContent() {
      const data = `page=${this.query.page}&count=${this.query.count}&status=true`
      S4aApi.getTestimonials(data).then(result => {
        // console.log(result.data)
        this.content = result.data
        this.listLoading = false
        result.data.map(el => {
          if (el.events.length > 0) {
            this.showMore.push(true)
          } else {
            this.showMore.push(false)
          }
        })
      })
    },
    gopage(el) {
      const time = spacetime(el.date).goto('Asia/Hong_Kong').d.getFullYear()
      if (el.status === true) {
        switch (el.type) {
          case 'professional_public_shows':
            this.$router.push(
              '/what-we-do/public/' + time + '?#' + el.id
            )
            break
          case 'youth_theatre_programmes':
            this.$router.push('/what-we-do/youth/' + time + '?#' + el.id)
            break
          case 'school_touring_shows':
            this.$router.push(
              '/what-we-do/school-touring/' + time + '?#' + el.id
            )
            break
          case 'collaborations':
            this.$router.push(
              '/what-we-do/collaborations/' + time + '?#' + el.id
            )
            break
          case 'annual_gala':
            this.$router.push('/annual/' + el.id + '/' + time)
            break
          case 'apply_register':
            this.$router.push('/apply' + '?#' + el.id)
            break
        }
      }
    },
    changeMore(index) {
      this.$set(this.showMore, index, false)
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
  @media screen and(max-width:780px) {
    padding: 0 17px;
  }
  .first {
    position: relative;
    padding: 4% 8%;
    min-height: 400px;
    box-sizing: border-box;
    .content {
      margin-bottom: 20px;
      min-height: 200px;
      box-sizing: border-box;
      .links {
        .item-link {
          color: $red;
          line-height: 30px;
          .link {
            cursor: pointer;
          }
        }
      }
    }
    .more {
      width: 120px;
      height: 40px;
      line-height: 40px;
      text-align: center;
      color: $red;
      border: 2px solid $red;
      margin: 40px auto;
      cursor: pointer;
      border-radius: 5px;
    }
    .more:hover {
      background: $red;
      color: #fff;
    }
  }
  .first::before {
    content: "";
    position: absolute;
    width: 100px;
    height: 100px;
    top: 0;
    left: 2%;
    border-left: 2px solid $red;
    border-top: 2px solid $red;
    @media screen and(max-width:780px) {
      left: -2%;
      top: -3px;
    }
  }
  .first::after {
    content: "";
    position: absolute;
    width: 100px;
    height: 100px;
    bottom: 0;
    right: 2%;
    border-bottom: 2px solid $red;
    border-right: 2px solid $red;
    @media screen and(max-width:780px) {
      right: -2%;
      bottom: -3px;
    }
  }
}
</style>
