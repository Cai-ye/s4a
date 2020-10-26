<template>
  <div class="chairman">
    <div class="title">{{ $t('about.title') }}</div>
    <div class="first">
      <el-row :gutter="20">
        <el-col :xs="24" :md="24" :lg="12">
          <div class="name">{{ $t('about.name1') }}</div>
          <div class="l-title" style="line-height:30px;">{{ $t('about.title1') }}</div>
          <div class="content">
            <div v-for="index in 9" :key="index" class="s-con">
              <span class="string" /><span>{{ $t(`about.content1_span${index}`) }}</span></div>
          </div>
        </el-col>
        <el-col :xs="24" :md="24" :lg="12">
          <div class="img-box">
            <img src="../../assets/imgs/Photos/Mark Peaker May 2019  Pix(1).jpg" alt="">
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<style scoped lang="scss">
@import "@/assets/styles/variables.scss";
.chairman {
  width: 100%;
  padding: 0 14%;
  box-sizing: border-box;
  @media screen and (max-width: 780px) {
    padding: 0 17px;
  }
  .first {
    position: relative;
    // display: flex;
    // justify-content: center;
    // align-items: center;
    padding: 4% 6%;
    .name {
      color: $red;
      font-size: 20px;
      font-weight: 500;
      margin-bottom: 10px;
      @media screen and(max-width: 780px) {
        font-size: 18px;
        margin-bottom: 5px;
      }
    }
    .l-title {
      font-size: 18px;
    }
    .content {
      display: flex;
      flex-direction: column;
      margin: 6px 0;
      .s-con {
        width: 100%;
        align-items: baseline;
        line-height: 30px;
        .string {
          display: inline-block;
          height: 16px;
          width: 2px;
          background: #383838;
          margin-right: 20px;
          @media screen and(max-width: 780px) {
            margin-top: 9px;
          }
        }
      }
    }
    .img-box {
      max-width: 400px;
      width: 100%;
      height: 300px;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
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
    @media screen and(max-width: 780px) {
      left: -6%;
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
    @media screen and(max-width: 780px) {
      right: -6%;
    }
  }
  @media screen and(max-width: 780px) {
    .chairman {
      .title {
        font-size: 20px;
      }
      .first {
        .left {
          .name {
            font-size: 18px;
          }
        }
      }
    }
  }
}
</style>
