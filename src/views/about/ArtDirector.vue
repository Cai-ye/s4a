<template>
  <div class="art">
    <div class="title">{{ $t('about.title') }}</div>
    <div class="first">
      <el-row :gutter="20">
        <el-col :xs="24" :md="24" :lg="12">
          <div class="name">{{ $t('about.name2') }}</div>
          <div class="l-title">{{ $t('about.title2') }}</div>
          <div class="content">
            <div>{{ $t('about.content2_span1') }}</div>
            <div>{{ $t('about.content2_span2') }}</div>
            <div>{{ $t('about.content2_span3') }}</div>
          </div>
        </el-col>
        <el-col :xs="24" :md="24" :lg="12">
          <div class="img-box">
            <img src="../../assets/imgs/Photos/Shiona Pix.png" alt="">
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<style scoped lang="scss">
@import "@/assets/styles/variables.scss";
.art {
  width: 100%;
  padding: 0 14%;
  box-sizing: border-box;
  @media screen and (max-width: 780px) {
    padding: 0 17px;
  }
  .first {
    position: relative;
    margin: 0 auto;
    padding: 4% 6%;
    .name {
      color: #db222a;
      font-size: 20px;
      font-weight: 500;
      margin-bottom: 6px;
    }
    .l-title {
      font-size: 18px;
      margin-bottom: 10px;
    }
    .content div {
      line-height: 30px;
    }
    .img-box {
      max-width: 400px;
      width: 100%;
      max-height: 450px;
      overflow: hidden;
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
    height: 125px;
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
    height: 125px;
    bottom: 0;
    right: 2%;
    border-bottom: 2px solid $red;
    border-right: 2px solid $red;
    @media screen and(max-width: 780px) {
      right: -6%;
    }
  }
  @media screen and(max-width: 780px) {
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
</style>
