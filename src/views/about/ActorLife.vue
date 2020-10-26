<template>
  <div class="art">
    <div class="title">{{ $t('about.title') }}</div>
    <div class="content">
      <el-row :gutter="20">
        <el-col :xs="24" :md="24" :lg="12">
          <div class="name">{{ $t('about.a_title') }}</div>
          <div class="l-content">
            <div>{{ $t('about.a_content1') }}</div>
            <div>{{ $t('about.a_content2') }}</div>
            <div>{{ $t('about.a_content3') }}</div>
          </div>
        </el-col>
        <el-col :xs="24" :md="24" :lg="12">
          <div class="img-box">
            <img src="../../assets/imgs/Photos/Hugh Bonneville Photo.png" alt="">
          </div>
          <div class="r-content">{{ $t('about.a_pofile') }}</div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<style scoped lang="scss">
@import "@/assets/styles/variables.scss";
.art {
  width: 100%;
  box-sizing: border-box;
  padding: 0 14%;
  @media screen and (max-width: 780px) {
    padding: 0 17px;
  }
  .content {
    position: relative;
    padding: 4% 6%;
    margin: 0 auto;
    .name {
      color: $red;
      font-size: 20px;
      font-weight: 450;
      margin-bottom: 10px;
    }
    .l-content {
      line-height: 24px;
    }
    .img-box {
      max-width: 400px;
      width: 100%;
      margin-top: 60px;
      @media screen and (max-width: 1200px) {
        margin-top: 20px;
      }
      img {
        width: 100%;
        object-fit: cover;
      }
    }
    .r-content {
      color: #919191;
    }
  }
  .content::before {
    content: "";
    position: absolute;
    width: 100px;
    height: 125px;
    top: 0;
    left: 2%;
    border-left: 3px solid $red;
    border-top: 3px solid $red;
    @media screen and(max-width: 780px) {
      left: -6%;
    }
  }
  .content::after {
    content: "";
    position: absolute;
    width: 100px;
    height: 125px;
    bottom: 0;
    right: 2%;
    border-bottom: 3px solid $red;
    border-right: 3px solid $red;
    @media screen and(max-width: 780px) {
      right: -6%;
    }
  }
  @media screen and(max-width: 780px) {
    .title {
      font-size: 20px;
    }
    .content {
      .name {
        font-size: 18px;
      }
      .first {
        line-height: 26px;
      }
      .img-content {
        .left {
          line-height: 26px;
        }
      }
    }
  }
}
</style>
