<template>
  <div class="single">
    <div class="title">{{ $t('sponsors.title') }}</div>
    <div class="third">
      <!-- 内容 -->
      <div class="content">
        <el-row :gutter="20">
          <el-col :xs="24" :md="24" :lg="12">
            <div class="left">
              <div class="title1">{{ $t('sponsors.sponsor10') }}</div>
              <div>{{ $t('sponsors.sponsor10_1') }}</div>
              <div>{{ $t('sponsors.sponsor9_9') }}<a style="color:#DB222A" href="mailto:eunice.s4a.org.hk@gmail.com">{{ $t('sponsors.sponsor9_10') }}</a> </div>
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
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      imgUrl: require('../../assets/imgs/Photos/sponsor a school.jpg')

    }
  }
}
</script>
<style lang="scss" scoped>
@import "@/assets/styles/variables.scss";

.single {
  width: 100%;
  .third {
    padding: 0 12%;
    box-sizing: border-box;
    // margin: 4% auto;
    @media screen and(max-width: 780px) {
      padding: 0 17px;
    }
    .title1 {
      color: $red;
      font-size: 20px;
      font-weight: 450;
      margin-bottom: 10px;
      @media screen and(max-width: 780px) {
        font-size: 18px;
      }
    }
    .content {
      display: flex;
      // flex-wrap: wrap;
      justify-content: center;
      @media screen and(max-width: 780px) {
        flex-wrap: wrap;
      }
      .left {
        // min-width: 250px;
        width: 100%;
        max-width: 400px;

        line-height: 30px;
      }
      .right {
        position: relative;
        width: 100%;
        max-width: 400px;
        min-width: 250px;
        min-height: 200px;
        .slot {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
        img {
          width: 100%;
          object-fit: cover;
        }
      }
    }
  }
  @media screen and(max-width: 780px) {
    .title {
      font-size: 20px;
    }
    .first .title1 {
      font-size: 18px;
    }
  }
}
</style>
