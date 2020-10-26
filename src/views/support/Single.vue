<template>
  <div class="single">
    <div class="title">{{ $t('sponsors.title') }}</div>
    <div class="third">
      <!-- 内容 -->
      <div class="title1" :style="{'width':$i18n.locale==='en'? '250px':'150px'}" @click="donation">{{ $t('sponsors.sponsor6') }}</div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    donation() {
      this.$store.state.donation = true
    }
  }
}
</script>
<style lang="scss" scoped>
@import "@/assets/styles/variables.scss";

.single {
  width: 100%;
  .third {
    margin: 4% auto;
    .title1 {
      height: 40px;
      line-height: 40px;
      font-weight: 500;
      text-align: center;
      margin: 60px auto;
      color: $red;
      border: 2px solid $red;
      border-radius: 5px;
      font-size: 20px;
      cursor: pointer;
      @media screen and (max-width: 780px) {
        width: 160px !important;
      }
    }
    .title1:hover {
      color: #fff;
      background: $red;
    }
  }
  @media screen and (max-width: 780px) {
    .title {
      font-size: 20px;
    }
    .third .title1 {
      font-size: 18px;
    }
  }
}
</style>
