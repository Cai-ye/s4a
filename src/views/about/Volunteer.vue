<template>
  <div class="volunteer">
    <div class="title">{{ $t('about.title') }}</div>
    <div class="produce-c">
      <div class="p-title">{{ $t('about.v_title') }}</div>
      <div class="p-content">
        {{ $t('about.v_content1') }}<br>
        {{ $t('about.v_content2') }}<br>
        {{ $t('about.v_content3') }}<br>
        {{ $t('about.v_content4') }}<br>
        {{ $t('about.v_content5') }}<span style="color:#DB222A;cursor:pointer" @click="go">{{ $t('about.v_content6') }}</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    go() {
      this.$router.push('/contact')
    }
  }
}
</script>
<style scoped lang="scss">
@import "@/assets/styles/variables.scss";

.volunteer {
  width: 100%;
  .produce-c {
    padding: 0 14%;
    box-sizing: border-box;
    @media screen and (max-width: 780px) {
      padding: 0 17px;
    }
    .p-title {
      font-size: 20px;
      font-weight: 500;
      color: #db222a;
      margin-bottom: 10px;
    }
    .p-content {
      color: #383838;
      line-height: 30px;
    }
  }
  @media screen and(max-width: 780px) {
    .title {
      font-size: 20px;
    }
    .produce-c {
      .p-title {
        font-size: 18px;
      }
    }
  }
}
</style>
