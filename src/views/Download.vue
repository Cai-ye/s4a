<template>
  <div class="chairman">
    <div class="title">{{ $t('download.title') }}</div>
    <div v-loading="listLoading" class="first">
      <div v-if="downList.length>0" class="content">
        <div v-for="(item,index) of downList" :key="index" class="two" style="margin-top:20px">
          <span class="de-title">{{ item.title }}</span>
          <a :href="item.file_path_url" target="_blank">{{ item.file_title }}</a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { S4aApi } from '../api/S4a'
export default {
  data() {
    return {
      downList: [],
      listLoading: true
    }
  },
  mounted() {
    const data = 'status=true'
    S4aApi.getDownloadList(data).then(result => {
      // console.log(result)
      this.downList = result.data
      this.listLoading = false
    })
  }
}
</script>
<style scoped lang="scss">
@import "@/assets/styles/variables.scss";
.chairman {
  width: 100%;
  padding: 0 12%;
  box-sizing: border-box;
  @media screen and (max-width: 780px) {
    padding: 0 17px;
  }
  .first {
    position: relative;
    margin: 0 auto;
    min-height: 300px;
    padding: 4% 4%;
    .content {
      margin: 0 auto;
      min-height: 200px;
      max-width: 500px;
      .one,
      .two {
        // font-size: 18px;
        line-height: 30px;
        a {
          font-weight: normal;
          color: $red;
          margin-left: 20px;
          font-size: 18px;
          cursor: pointer;
        }
      }
      .one:first-child {
        margin: 0;
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
    border-left: 3px solid $red;
    border-top: 3px solid $red;
    @media screen and (max-width: 780px) {
      left: -2%;
      top: -3px;
    }
  }
  .first::after {
    content: "";
    position: absolute;
    width: 100px;
    height: 100px;
    bottom: 0;
    right: 2%;
    border-bottom: 3px solid $red;
    border-right: 3px solid $red;
    @media screen and (max-width: 780px) {
      right: -2%;
      bottom: -3px;
    }
  }
  @media screen and (max-width: 780px) {
    .title {
      font-size: 20px;
    }
  }
}
</style>
