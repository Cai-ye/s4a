<template>
  <div class="single">
    <div class="title">{{ $t('sponsors.title') }}</div>
    <div class="third">
      <!-- 内容 -->
      <div class="content">
        <el-row :gutter="20">
          <el-col :xs="24" :md="24" :lg="12">
            <div class="left">
              <div class="title1">{{ $t('sponsors.sponsor9') }}</div>
              <div>{{ $t('sponsors.sponsor9_1') }}</div>
              <div>{{ $t('sponsors.sponsor9_2') }}</div>
              <div>{{ $t('sponsors.sponsor9_3') }}</div>
              <div>{{ $t('sponsors.sponsor9_4') }}</div>
            </div>
          </el-col>
          <el-col :xs="24" :md="24" :lg="12">
            <div class="right">
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
        <div class="cont-tit">{{ $t('sponsors.sponsor9_5') }}</div>
        <div class="cont">{{ $t('sponsors.sponsor9_6') }}</div>
        <div class="cont">{{ $t('sponsors.sponsor9_6_1') }}</div>
        <div class="cont">{{ $t('sponsors.sponsor9_6_2') }}</div>
        <div class="cont">{{ $t('sponsors.sponsor9_6_3') }}</div>
        <div class="con0">
          <div class="con00">
            <span>{{ $t('sponsors.sponsor9_7') }}</span>
            <span>{{ $t('sponsors.sponsor9_7_1') }}</span>
          </div>
          <div class="con00">
            <span>{{ $t('sponsors.sponsor9_8') }}</span>
            <span>{{ $t('sponsors.sponsor9_8_1') }}</span>
          </div>
        </div>
        <div class="last">{{ $t('sponsors.sponsor9_9') }}<a style="color:#DB222A" href="mailto:eunice.s4a.org.hk@gmail.com">{{ $t('sponsors.sponsor9_10') }}</a> </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      imgUrl: require('../../assets/imgs/Photos/supp.jpg')

    }
  }
}
</script>
<style lang="scss" scoped>
@import "@/assets/styles/variables.scss";

.single {
  width: 100%;
  .third {
    padding: 0 14%;
    @media screen and(max-width: 780px) {
      padding: 0 17px;
    }
    .title1 {
      color: $red;
      font-size: 20px;
      font-weight: 450;
      margin-bottom: 10px;
    }
    .content div {
      line-height: 30px;
    }
    .content {
      .left {
        line-height: 30px;
      }
      .right {
        position: relative;
        width: 100%;
        min-width: 250px;
        max-width: 400px;
        height: 280px;
        margin-top: 4%;
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
      // }
      .cont-tit {
        font-size: 20px;
        font-weight: 450;
        margin: 15px 0 10px;
      }
      .cont {
        line-height: 30px;
      }
      .con0 {
        display: flex;
        margin-top: 10px;
        box-sizing: border-box;
        @media screen and(max-width: 780px) {
          flex-wrap: wrap;
        }
        .con00 {
          display: flex;
          flex-direction: column;
          max-width: 350px;
          min-width: 250px;
          width: 100%;
          span {
            word-wrap: break-word;
            line-height: 30px;
          }
        }
      }
      .last {
        margin-top: 10px;
        line-height: 30px;
      }
    }
  }
  @media screen and(max-width: 780px) {
    .third .title1 {
      font-size: 18px;
    }
  }
}
</style>
