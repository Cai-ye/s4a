<template>
  <div class="sponsors">
    <div class="title">{{ $t('sponsors.title') }}</div>
    <div class="content">
      <!-- <div class="first"> -->
      <!-- 内容 -->
      <el-row :gutter="20">
        <el-col :xs="24" :md="24" :lg="12">
          <div class="title1" style="color:#DB222A">{{ $t('sponsors.sponsor4') }}</div>
          <div style="line-height:30px">{{ $t('sponsors.sponsor4_1') }}</div>
          <div style="line-height:30px">{{ $t('sponsors.sponsor4_2') }}</div>
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

      <div class="second">
        <div class="title1">{{ $t('sponsors.sponsor5') }}</div>
        <el-row type="flex" class="s-content1">
          <el-col :span="8" :xs="24"><span @click="go(0)">{{ $t('sponsors.sponsor5_1') }}</span></el-col>
          <el-col :span="8" :xs="24"><span @click="go(1)">{{ $t('sponsors.sponsor5_2') }}</span></el-col>
          <el-col :span="8" :xs="24"><span @click="go(2)">{{ $t('sponsors.sponsor5_3') }}</span></el-col>
        </el-row>
        <el-row type="flex" class="s-content1">
          <el-col :span="8" :xs="24"><span @click="go(3)">{{ $t('sponsors.sponsor5_4') }}</span></el-col>
          <el-col :span="8" :xs="24"><span @click="go(4)">{{ $t('sponsors.sponsor5_5') }}</span></el-col>
        </el-row>
      </div>
      <!-- </div> -->
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: ['single', 'project', 'soliloquy', 'school', 'compaign', 'legacy'],
      imgUrl: require('../../assets/imgs/Photos/support.jpg')
    }
  },
  methods: {
    go(index) {
      this.$router.push('/support/' + this.list[index])
    }
  }
}
</script>
<style scoped lang="scss">
@import "@/assets/styles/variables.scss";

.sponsors {
  width: 100%;
  .content {
    margin: 0 auto;
    padding: 0 14%;
    box-sizing: border-box;
    @media screen and(max-width: 780px) {
      padding: 0 17px;
    }
    .title1 {
      font-size: 20px;
      font-weight: 450;
      margin-bottom: 14px;
      @media screen and(max-width: 780px) {
        font-size: 18px;
        margin-bottom: 5px;
      }
    }
    .r-content {
      position: relative;
      max-width: 400px;
      width: 100%;
      height: 320px;
      margin-bottom: 10px;
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
  .second {
    display: flex;
    flex-direction: column;
    .title1 {
      font-size: 20px;
      font-weight: 500;
      margin-bottom: 10px;
      @media screen and(max-width: 780px) {
        font-size: 18px;
      }
    }
    .s-content1 {
      display: flex;
      flex-wrap: wrap;
      color: $red;
      span {
        cursor: pointer;
        line-height: 30px;
      }
    }
  }
  // }
}
</style>
