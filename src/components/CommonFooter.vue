<template>
  <div class="footer-tank">
    <div class="contact">
      <div class="wrapper">
        Contact with Us
        <a href="http://www.instagram.com/Shakespeare4All" target="_blank"> <img src="../assets/imgs/contact1.png" alt=""></a>
        <a href="http://www.facebook.com/Shakespeare4All" target="_blank"><img src="../assets/imgs/contact2.png" alt=""></a>
        <a href="mailto:info@s4a.org.hk"><img src="../assets/imgs/contact3.png" alt=""></a>
      </div>
    </div>
    <div class="main-tank">
      <div class="tank">
        <el-row>
          <el-col :xs="24" :md="14" :lg="14">
            <div class="title1">Subscribe to our monthly e-newsletter!</div>
            <div class="subs">
              <div class="input">
                <!-- <el-input v-model="email" type="email" placeholder="Enter your email address" class="input-box" clearable /> -->
                <input v-model="email" type="email" placeholder="Enter your email address" class="input-box">
              </div>
              <div v-loading="submitLoading" class="submit" element-loading-spinner="el-icon-loading" @click="submit">Subscribe</div>
            </div>
            <div class="line" />
            <div class="content">
              <div class="add-title"><i class="icon" /> {{ $t('footer.add1') }}</div>
              <span>{{ $t('footer.add2') }}</span>
              <span>{{ $t('footer.add3') }}</span>
              <span>{{ $t('footer.add4') }}</span>
            </div>
          </el-col>
          <el-col :xs="24" :md="10" :lg="10">
            <div class="title1">Our Founding Sponsor</div>
            <div class="img-box"><img src="../assets/imgs/sp.png" alt=""></div>
            <div class="search" @click="gopage"><span>Other Sponsors</span>
              <i class="el-icon-arrow-right small-icon" color="#fff" size="30" custom-class="small-icon" />
            </div>
            <div class="end">© &nbsp;2019 Shakespeare4All Company Limited.&nbsp;All rights reserved</div>
          </el-col>
        </el-row>
      </div>
      <el-dialog :visible.sync="toastShow" custom-class="toast-show">
        <div class="toast">
          Thank you for subscribing!
        </div>
      </el-dialog>
    </div>

  </div>
</template>

<script>
import { S4aApi } from '../api/S4a'
export default {
  data() {
    return {
      email: '',
      toastShow: false,
      submitLoading: false
    }
  },
  methods: {
    gopage() {
      this.$router.push('/sponsors')
    },
    submit() {
      this.submitLoading = true
      const data = { 'email': this.email }
      const mailReg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/
      if (mailReg.test(this.email)) {
        S4aApi.PutSubscription(data).then(result => {
          this.submitLoading = false
          this.toastShow = true
          this.email = ''
          setTimeout(() => {
            this.toastShow = false
          }, 2000)
        }).catch(error => {
          this.$message.error(error.response.data.error.detail)
          this.submitLoading = false
        })
      } else {
        this.$message.error('E-mail error')
        this.submitLoading = false
      }
    }
  }

}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/variables.scss";
.footer-tank {
  width: 100%;
  height: 100%;
  .contact {
    padding: 0 10%;
    @media screen and (max-width: 780px) {
      padding: 0 17px;
    }
    .wrapper {
      max-width: 1200px;
      box-sizing: border-box;
      margin: 10px auto;
      color: $darkRed;
      font-size: 18px;
      font-weight: 600;
      display: flex;
      align-items: center;
      padding: 0 2%;
      @media screen and(max-width: 780px) {
        font-size: 16px;
      }
      img {
        margin-left: 20px;
      }
    }
  }
  .main-tank {
    position: relative;
    margin-top: 20px;
    background: $darkRed;
    padding: 2% 10%;
    @media screen and (max-width: 780px) {
      padding: 20px 17px;
    }
    .tank {
      max-width: 1200px;
      box-sizing: border-box;
      margin: 0 auto;
      padding: 0 2%;
      color: #fff;
      .title1 {
        font-weight: 500;
        font-size: 18px;
        margin-bottom: 20px;
        font-family: "Arial Rounded MT Bold";
      }
      .subs {
        display: flex;
        .input {
          max-width: 280px;
          width: 100%;
          color: #000;
          border-top-left-radius: 4px;
          border-bottom-left-radius: 4px;
          font-family: "Arial Rounded MT Bold";
          font-size: 16px;
          padding: 12px 10px;
          background: #fff;
          .input-box {
            border: none !important;
            height: 100%;
            width: 100%;
          }
        }
        .submit {
          text-align: center;
          max-width: 100px;
          width: 100%;
          font-size: 16px;
          margin-left: -2px;
          background: #f8a32f;
          border-top-right-radius: 4px;
          border-bottom-right-radius: 4px;
          cursor: pointer;
          color: #fff;
          padding: 12px 10px;
          font-family: "Arial Rounded MT Bold";
        }
        @media screen and(max-width:780px) {
          .input,
          .submit {
            font-size: 13px;
          }
        }
        @media screen and(max-width:320px) {
          .input {
            width: 180px;
          }
          .submit {
            width: 70px !important;
          }
        }
      }
      .line {
        height: 2px;
        max-width: 410px;
        width: 100%;
        background: #fff;
        opacity: 0.3;
        margin: 6% 0;
      }
      .content {
        display: flex;
        flex-direction: column;
        font-weight: 500;
        padding-left: 6%;
        // word-break: break-all;
        .add-title {
          font-size: 18px;
          margin-bottom: 10px;
          position: relative;
        }
        span {
          // display: block;
          line-height: 26px;
          font-size: 14px;
          font-family: "Arial Rounded MT Bold";
        }
        .icon {
          position: absolute;
          width: 20px;
          height: 20px;
          left: -6%;
          top: 0;
          background: url("../assets/imgs/location.png") no-repeat center;
          @media screen and(max-width:780px) {
            left: -4%;
          }
          @media screen and(max-width:500px) {
            left: -6%;
          }
          @media screen and(max-width:320px) {
            left: -8%;
          }
        }
      }
      .img-box {
        width: 200px;
        img {
          width: 100%;
        }
      }
      .search {
        display: flex;
        justify-content: space-between;
        max-width: 240px;
        box-sizing: border-box;
        width: 100%;
        height: 40px;
        font-size: 14px;
        line-height: 40px;
        border: 1px solid #fff;
        border-radius: 6px;
        padding: 0 14px 0 24px;
        font-weight: 500;
        margin: 8% 0;
        cursor: pointer;
        opacity: 0.9;
        font-family: "Arial Rounded MT Bold";
      }
      .end {
        font-size: 12px;
        opacity: 0.7;
      }
      @media screen and(max-width:780px) {
        .title {
          font-size: 14px;
        }
        .content {
          .add-title {
            font-size: 14px;
          }
          span {
            font-size: 12px;
          }
        }
        .img-box {
          width: 160px;
        }
        .search {
          height: 36px;
          line-height: 36px;
          font-size: 12px;
        }
      }
    }
  }

  .toast {
    position: fixed;
    top: 50%;
    left: 50%;
    color: #000;
    border: 2px solid #fff;
    border-radius: 6px;
    transform: translate(-50%, -50%);
    width: 450px;
    height: 150px;
    line-height: 150px;
    text-align: center;
    background: #fff;
    font-size: 28px;
    font-family: "Arial Rounded MT Bold";
    @media screen and(max-width:780px) {
      width: 300px;
      height: 60px;
      line-height: 60px;
      font-size: 18px;
    }
  }
}
</style>
<style lang="scss">
.toast-show {
  width: 50%;
  .el-dialog__header {
    padding: 0;
  }
  .el-dialog__body {
    padding: 0;
  }
}
.small-icon {
  display: inline-block;
  line-height: 40px !important;
  vertical-align: middle !important;
  font-weight: 500 !important;
  font-size: 22px;
}
.el-input__inner {
  border: none !important;
  border-top-right-radius: 0 !important;
  border-bottom-right-radius: 0 !important;
  padding: 5px 0 5px 15px !important ;
}
.submit .el-loading-spinner {
  transform: translateY(-50%) !important;
  margin-top: 0 !important;
}
</style>

