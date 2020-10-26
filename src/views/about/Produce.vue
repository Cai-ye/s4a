<template>
  <div class="produce">
    <div class="title">{{ $t('about.title') }}</div>
    <div class="produce-c">
      <div class="p-title">{{ $t('about.produce') }}</div>
      <div class="p-content">
        {{ $t('about.p_content1') }}<br>
        {{ $t('about.p_content2') }}
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
@import "@/assets/styles/variables.scss";
.produce {
  width: 100%;
  .produce-c {
    padding: 0 14%;
    box-sizing: border-box;
    @media screen and (max-width: 780px) {
      padding: 0 17px;
    }
    .p-title {
      font-size: 20px;
      font-weight: 450;
      color: $red;
      margin-bottom: 10px;
    }
    .p-content {
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
