<template>
  <div class="single">
    <div class="title">{{ $t('sponsors.title') }}</div>
    <div class="third">
      <el-row :gutter="20">
        <el-col :xs="24" :md="24" :lg="12">
          <div class="l-content">
            <div class="title1">{{ $t('sponsors.sponsor7') }}</div>
            <div>{{ $t('sponsors.sponsor7_1') }}</div>
            <div>{{ $t('sponsors.sponsor7_2') }}</div>
            <div>{{ $t('sponsors.sponsor7_3') }}</div>
            <div class="title1" style="margin-top:20px">{{ $t('sponsors.sponsor8') }}</div>
            <div>{{ $t('sponsors.sponsor8_1') }}</div>
            <div>{{ $t('sponsors.sponsor8_2') }}</div>
            <div>{{ $t('sponsors.sponsor8_3') }}</div>
            <div>{{ $t('sponsors.sponsor8_4') }}</div>
            <div style="margin-top:20px;">{{ $t('sponsors.sponsor8_5') }}<a style="color:#DB222A" href="mailto:eunice.s4a.org.hk@gmail.com">{{ $t('sponsors.sponsor8_6') }}</a></div>
          </div>
        </el-col>
        <el-col :xs="24" :md="24" :lg="12">
          <div class="r-content">
            <el-image :src="imgUrl" fit="cover" style="width:100%;height:100%;">
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
  </div>
</template>
<script>
export default {
  data() {
    return {
      imgUrl: require('../../assets/imgs/Photos/be our project sponsor.jpg')

    }
  }
}
</script>
<style lang="scss" scoped>
@import "@/assets/styles/variables.scss";

.single {
  width: 100%;
  .third {
    margin: 0 auto 4%;
    padding: 0 14%;
    box-sizing: border-box;
    @media screen and(max-width: 780px) {
      padding: 0 17px;
    }
    .title1 {
      color: $red;
      font-size: 20px;
      font-weight: 450;
      margin-bottom: 10px;
    }
  }
  .l-content {
    line-height: 30px;
    margin-bottom: 10px;
    .title1 {
      font-size: 20px;
      font-weight: 450;
      @media screen and(max-width: 780px) {
        font-size: 18px;
      }
    }
  }
  .r-content {
    position: relative;
    width: 100%;
    max-width: 400px;
    height: 300px;
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
.first {
  div {
    line-height: 30px;
  }
  .title1 {
    font-size: 20px;
    font-weight: 450;
    @media screen and(max-width: 780px) {
      font-size: 18px;
    }
  }
}
// }
@media screen and (max-width: 780px) {
  .title {
    font-size: 20px;
  }
  .third {
    .title1 {
      font-size: 18px;
    }
    .content {
      .left {
        line-height: 26px;
        // font-size: 14px;
      }
    }
  }
  // }
}
</style>
