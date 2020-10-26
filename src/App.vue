<template>
  <div id="app">
    <div class="header">
      <common-header />
    </div>
    <div class="main-bg">
      <div class="main">
        <transition name="fade-transform" mode="out-in">
          <router-view />
        </transition>
      </div>
    </div>
    <div class="footer">
      <common-footer />
    </div>
    <template />
  </div>
</template>
<script>
// import { S4aApi } from './api/S4a'
import commonHeader from '@/components/CommonHeader'
import commonFooter from '@/components/CommonFooter'
export default {
  components: {
    commonHeader,
    commonFooter
  },
  created() {
    window.localStorage.setItem('donate', false)
    if (window.localStorage.getItem('locale') === null) {
      window.localStorage.setItem('locale', 'en')
    }
  }
}
</script>
<style lang="scss" scoped>
@import "@/assets/styles/variables.scss";
#app {
  display: flex;
  flex-direction: column;
  // height: auto;
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  // overflow-y: scroll;
  // overflow-x: hidden;
  // overflow-y: auto;
}
.header {
  width: 100%;
  box-sizing: border-box;
  margin-bottom: 3%;
}
.main-bg {
  background: url("~imgs/pattern-bg.png") repeat;
  flex: 1 0 auto;
  width: 100%;
  padding: 0 10%;
  box-sizing: border-box;
  margin-bottom: 50px;
  @media screen and (max-width: 780px) {
    padding: 0 17px;
  }
  .main {
    max-width: 1200px;
    margin: 10px auto;
    box-sizing: border-box;
    padding: 0 2%;
    @media screen and (max-width: 780px) {
      padding: 0;
    }
  }
}
.footer {
  flex: 0 0 auto;
  width: 100%;
  height: 20%;
  box-sizing: border-box;
}
.back {
  height: 50px;
  width: 50px !important;
  background-color: #f2f5f6;
  color: #90193e;
  line-height: 50px;
  text-align: center;
  font-size: 24px !important;
  border-radius: 5px;
  @media screen and(max-width:780px) {
    width: 40px !important;
    height: 40px;
    border-radius: 50%;
    line-height: 40px;
    font-size: 22px !important;
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.28s;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}

/* fade-transform */
.fade-transform-leave-active,
.fade-transform-enter-active {
  transition: all 0.5s;
}

.fade-transform-enter {
  opacity: 0;
  transform: translateX(-30px);
}

.fade-transform-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>
<style lang="scss">
.el-loading-spinner .path {
  stroke: #90193e !important;
}
.el-loading-mask {
  z-index: 199 !important;
}
</style>

