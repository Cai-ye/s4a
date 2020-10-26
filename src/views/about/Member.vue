<template>
  <div class="member">
    <div class="title">{{ $t('about.title') }}</div>
    <div class="p-title">{{ $t('about.board') }}</div>
    <el-row :gutter="10">
      <el-col v-for="(item,index) of members" :key="index" class="single" :xs="24" :md="12" :lg="6">
        <div class="img-box">
          <img :src="item.imgUrl" alt="">
        </div>
        <div class="name">{{ item.name1 }}</div>
        <div class="name">{{ $t('about.'+item.name2) }}</div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      members: [
        {
          imgUrl: require('../../assets/imgs/Photos/frank_stock.jpg'),
          name1: ' Hon. Frank Stock',
          name2: 'p1'
        },
        {
          imgUrl: require('../../assets/imgs/Photos/Cheri-Chan1.jpg'),
          name1: ' Dr. Cheri Chan',
          name2: 'p1'
        },
        {
          imgUrl: require('../../assets/imgs/Photos/ruby.jpg'),
          name1: ' Ms. Ruby W T Yong ',
          name2: 'p1'
        },
        {
          imgUrl: require('../../assets/imgs/logo.png'),
          name1: ' Mr. Stephan Spurr',
          name2: 'p2'
        }
      ]
    }
  }
}
</script>
<style scoped lang="scss">
@import "@/assets/styles/variables.scss";
.member {
  width: 100%;
  padding: 0 14%;
  box-sizing: border-box;
  @media screen and (max-width: 780px) {
    padding: 0 17px;
  }
  .p-title {
    height: 40px;
    margin: 0 auto;
    font-size: 20px;
    font-weight: 500;
    color: $red;
    margin-bottom: 20px;
    @media screen and(max-width: 780px) {
      font-size: 18px;
    }
  }
  .single {
    display: flex;
    flex-direction: column;
    align-items: center;
    .img-box {
      max-width: 180px;
      width: 100%;
      height: 180px;
      overflow: hidden;
      margin-bottom: 2%;
      img {
        width: 100%;
      }
    }
    .name {
      padding: 1% 0;
    }
  }

  @media screen and(max-width: 780px) {
    .title {
      font-size: 20px;
    }
    .p-title {
      font-size: 18px;
    }
    .content {
      justify-content: center;
      align-items: center;
    }
  }
}
</style>
