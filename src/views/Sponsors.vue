
<template>
  <div class="sponsors">
    <div class="title">{{ $t('sponsors.title') }}</div>
    <div class="content">
      <div class="first">
        <div class="title1">{{ $t('sponsors.sponsor1') }}</div>
        <div class="t2">{{ $t('sponsors.sponsor1_1') }}</div>
      </div>
      <div class="first">
        <div class="title1">{{ $t('sponsors.sponsor2') }}</div>
        <div class="t2">{{ $t('sponsors.sponsor2_1') }}</div>
        <div class="t2">{{ $t('sponsors.sponsor2_2') }}</div>
      </div>
      <div class="second">
        <div class="title1">{{ $t('sponsors.sponsor3') }}</div>
        <div v-if="$i18n.locale === 'en'" class="s-content1">
          <div>{{ $t('sponsors.sponsor3_1') }}</div>
          <div>{{ $t('sponsors.sponsor3_2') }}</div>
          <div>{{ $t('sponsors.sponsor3_3') }}</div>
          <div>{{ $t('sponsors.sponsor3_4') }}</div>
          <div>{{ $t('sponsors.sponsor3_5') }}</div>
          <div>{{ $t('sponsors.sponsor3_6') }}</div>
          <div>{{ $t('sponsors.sponsor3_7') }}</div>
          <div>{{ $t('sponsors.sponsor3_8') }}</div>
          <div>{{ $t('sponsors.sponsor3_9') }}</div>
        </div>
        <div v-else class="s-content">
          <span>{{ $t('sponsors.sponsor3_1') }}</span>
          <span>{{ $t('sponsors.sponsor3_2') }}</span>
          <span>{{ $t('sponsors.sponsor3_3') }}</span>
          <span>{{ $t('sponsors.sponsor3_4') }}</span>
          <span>{{ $t('sponsors.sponsor3_5') }}</span>
          <span>{{ $t('sponsors.sponsor3_6') }}</span>
          <span>{{ $t('sponsors.sponsor3_7') }}</span>
          <span>{{ $t('sponsors.sponsor3_8') }}</span>
          <!-- <span>{{ $t('sponsors.sponsor3_9') }}</span> -->
        </div>
      </div>
      <div class="second">
        <div class="s-content1">
          <div>{{ $t('sponsors.sponsor3_11') }}</div>
          <div>{{ $t('sponsors.sponsor3_12') }}</div>
          <div>{{ $t('sponsors.sponsor3_13') }}</div>
          <div>{{ $t('sponsors.sponsor3_14') }}</div>
          <div>{{ $t('sponsors.sponsor3_15') }}</div>
          <div>{{ $t('sponsors.sponsor3_15') }}</div>
        </div>
      </div>
      <div v-if="$i18n.locale === 'en'" class="second">
        <div class="s-content1">
          <div>{{ $t('sponsors.sponsor3_16') }}</div>
        </div>
      </div>
      <div class="second">
        <div class="contact" @click="go">{{ $t('sponsors.sponsor3_10') }}</div>
      </div>
    </div>
  </div>

</template>
<script>
export default {
  mounted() {
    window.scrollTo(0, 0)
    // this.$router.afterEach((to, from, next) => {
    //   window.scrollTo(0, 0)
    // })
  },
  methods: {
    go() {
      this.$router.push('/contact')
    }
  }
}
</script>
  <style scoped lang="scss">
@import "@/assets/styles/variables.scss";

.sponsors {
  box-sizing: border-box;
  width: 100%;
  .content {
    padding: 0 14%;
    margin: 0 auto;
    @media screen and(max-width: 780px) {
      padding: 0 17px;
    }
    .first {
      margin-bottom: 20px;
      .title1 {
        font-size: 20px;
        font-weight: 450;
        margin: 0 14px 10px 0;
        @media screen and(max-width: 780px) {
          font-size: 18px;
          line-height: 30px;
        }
      }
      .t2 {
        line-height: 30px;
      }
    }
    .second {
      margin-bottom: 20px;
      box-sizing: border-box;
      .title1 {
        font-size: 20px;
        font-weight: 450;
        margin-bottom: 10px;
      }
      .s-content {
        display: flex;
        flex-wrap: wrap;
        span {
          display: block;
          width: 50%;
          min-width: 250px;
          line-height: 30px;
        }
      }
      .s-content1 div {
        line-height: 30px;
      }
      .contact {
        width: 130px;
        height: 40px;
        line-height: 40px;
        text-align: center;
        color: $red;
        border: 2px solid $red;
        margin: 50px auto 0;
        cursor: pointer;
        border-radius: 5px;
      }
      .contact:hover {
        background: $red;
        color: #fff;
      }
    }
  }
  @media screen and(max-width: 780px) {
    .content {
      .first {
        .title1 {
          font-size: 18px;
        }
      }
      .s-content,
      .s-content1 {
        span {
          width: 100%;
          // font-size: 14px;
          word-wrap: break-word;
          line-height: 26px;
        }
      }
    }
  }
}
</style>

