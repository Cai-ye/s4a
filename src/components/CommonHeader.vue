<template>
  <div class="header-tank">
    <div v-if="alertArr.length > 0" class="notice-tank ">
      <div class="wrapper">
        <div class="content">
          <img :src="iconUrl" alt="">
          <van-notice-bar v-if="alertArr.length > 0" color="#F8A32F" style="width:88%;height:40px;background:#90193E" :text="alertArr[0].desc" :scrollable="true" @click="redirectFromNotice(alertArr[0].desc)" />
        </div>
      </div>
    </div>
    <div class="menu-box">
      <div class="menu-tank" :class="screenWidth > 1120 ? '' : 'tank'">
        <div v-if="screenWidth > 1120" class="logo">
          <img src="~imgs/logo.png" alt="">
        </div>
        <div v-if="screenWidth > 1120" class="nav-box">
          <div v-for="index in 11" :key="index" class="img-box" @mouseover="changeActive(index)">
            <!-- <div :ref="s[index-1]" class="menus" :class="sst[bg[index-1]]" :style="{'background':'url('+require(`../assets/imgs/header/${index}.png`)+') no-repeat top left/101% auto'}"> -->
            <div :ref="s[index - 1]" :class="sst[bg[index - 1]]" class="box">
              <div class="menus" :style="{ background: bgc[index - 1] }" :class="[pointer[index - 1] === 1 ? '' : 'cur']" @mouseenter="change(index - 1)" @mouseleave="reset(index - 1)">
                <img :src="require(`../assets/imgs/header/${index}.png`)" alt="" class="images" @click="goFirst(index)" @load="imgLoad(index - 1)">
                <div class="menus-title" :style="{'font-weight': $i18n.locale === 'en' ? 'normal' : '500'}" :class=" $i18n.locale === 'en' ? 'font':''" @click="goFirst(index)">
                  {{ $t(`header.list${index}`) }}
                </div>
                <!-- 二级导航栏 -->
                <div v-show="list[index-1].length>0" class="list" :class="[index === 11 ? 'last' : '']" :style="index === 3? { 'max-height': '300px', 'overflow-y': 'scroll' }:''">
                  <div v-for="(el, i) of list[index - 1]" :key="i" class="list-item" :class="sst[bg[index - 1]]" @click="index > 2 ? goSecond(index, i) : ''">
                    <span v-if="index === 3">{{
                      $i18n.locale === 'en' ? el.name_en : el.name_zh_tw
                    }}</span>
                    <span v-else :ref="index === 2 ? secondMenu[i] : ''" :style="{ 'padding':index === 11 && i === 5 ? '4px 8px 8px' : '4px 8px'}">{{ $t('header.' + el) }}</span>
                    <!-- 三级导航栏 -->
                    <div v-if="index === 2 || index === 8" class="list-third" @mouseenter="changeFont(i)" @mouseleave="deleFont(i)">
                      <div v-for="(x, y) of list_three[i]" :key="y" class="list-third-item" :class="sst[bg[index - 1]]" :style="{'padding': $i18n.locale === 'en' ? '6px 8px' : '8px'}" @click="goThird(i, y)">
                        {{ x }}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div v-if="menuShow" class="small-menu" @click="isShow = true" />
        <!-- 语言选择 -->
        <div class="right-box">
          <div class="last-tank">
            <span class="lan" :class="selectedLan === 'zh-TW' ? '' : 'active-lan'" @click="changeLan('en')">ENG</span>
            <span class="border" />
            <span class="lan" :class="selectedLan === 'zh-TW' ? 'active-lan' : ''" @click="changeLan('zh-TW')">中文</span>
          </div>
          <div class="donate" @click="showDonation">
            <img src="~imgs/donate.png" alt="">
          </div>
        </div>
      </div>
    </div>
    <!-- 小窗口菜单 -->
    <el-dialog :visible.sync="isShow" custom-class="show-small">
      <el-collapse accordion class="show-menu-box">
        <div class="show-menu">
          <div class="single1">
            <img src="~imgs/show-small.jpg" alt="">
          </div>
          <div class="single" @click="goFirst(1)">{{ $t('header.list1') }}</div>
          <el-collapse-item :title="$t('header.list2')">
            <el-collapse accordion>
              <el-collapse-item v-for="(item, index) of list[1]" :key="index" :title="$t('header.' + item)">
                <div v-for="(el, i) of list_three[index]" :key="i" class="special" @click="goThird(index, i)">
                  {{ el }}
                </div>
              </el-collapse-item>
            </el-collapse>
          </el-collapse-item>
          <el-collapse-item :title="$t('header.list3')">
            <div v-for="(el, i) of list[2]" :key="i" class="special" @click="goSecond(3, i)">
              {{ $i18n.locale === 'en' ? el.name_en : el.name_zh_tw }}
            </div>
          </el-collapse-item>
          <div class="single" @click="goFirst(4)">{{ $t('header.list4') }}</div>
          <el-collapse-item :title="$t('header.list5')">
            <div v-for="(item, index) of list[4]" :key="index" class="special" @click="goSecond(5, index)">
              {{ $t('header.' + item) }}
            </div>
          </el-collapse-item>
          <div class="single" @click="goFirst(6)">{{ $t('header.list6') }}</div>
          <div class="single" @click="goFirst(7)">{{ $t('header.list7') }}</div>
          <el-collapse-item :title="$t('header.list8')">
            <div v-for="(item, index) of list[7]" v-show="index < 7" :key="index" accordion class="special" @click="goSecond(8, index)">
              {{ $t('header.' + item) }}
            </div>
            <el-collapse accordion>
              <el-collapse-item v-for="(item, index) of list[7]" v-show="index === 7" :key="index" :title="$t('header.' + item)">
                <div v-for="(el, i) of list2_8[index]" :key="i" class="special" @click="goThird(7, i)">
                  {{ el }}
                </div>
              </el-collapse-item>
            </el-collapse>
          </el-collapse-item>
          <div class="single" @click="goFirst(9)">{{ $t('header.list9') }}</div>
          <div class="single" @click="goFirst(10)">
            {{ $t('header.list10') }}
          </div>
          <el-collapse-item :title="$t('header.list11')">
            <div v-for="(item, index) of list[10]" :key="index" class="special">
              <div @click="goSecond(11, index)">{{ $t('header.' + item) }}</div>
            </div>
          </el-collapse-item>
        </div>
      </el-collapse>
    </el-dialog>
    <!-- donation弹框 -->
    <el-dialog :visible.sync="$store.state.donation" custom-class="info-show">
      <div class="donation">
        <!-- style="background-image: onload url(../../src/assets/imgs/bg.png);" -->
        <div class="content">
          Please make cross cheque payable to "Shakespeare4all Company Limited
          ", send us the cheque with the donation form to:<br>
          Room C, 9/F, Wah Ha Factory Building, 1069-1073 King’s Road, Quarry
          Bay, Hong Kong.<br><br>
          請填妥捐助回條，連同劃線支票-支票抬頭 "Shakespeare4All Company
          Limited" 郵寄至 香港鰂魚涌英皇道1069-1073號華廈工業大廈9樓C室。
        </div>
        <div v-if="$store.state.donation" class="close" @click="$store.state.donation = false">
          <i class="el-icon-circle-close close" style="font-size:36px;color:#fff" />
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { S4aApi } from '../api/S4a'
import 'vant/lib/index.css'
export default {
  data() {
    return {
      secondMenu: ['a', 'b', 'c', 'd'],
      showImg: [],
      pointer: [0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0],
      iconUrl: require('../assets/imgs/icon.png'),
      sst: ['s1', 's2', 's3'],
      bg: [0, 1, 2, 1, 2, 0, 1, 0, 1, 0, 2],
      bgc: [
        '#DB222A',
        '#F8A32F',
        '#E0276A',
        '#F8A32F',
        '#E0276A',
        '#DB222A',
        '#F8A32F',
        '#DB222A',
        '#F8A32F',
        '#DB222A',
        '#E0276A'
      ],
      donationShow: false,
      selectedLan: window.localStorage.getItem('locale') || 'en',
      isShow: false,
      menuShow: false,
      s: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11'],
      count: [],
      // 小窗口菜單名稱
      navList: [
        'HOME',
        'WHAT WE DO',
        'ANNUAL GALA',
        'APPLY/REGISTER NOW',
        'MEDIA',
        'TESTIMO-NIALS',
        'DOWNLOAD',
        'ABOUT US',
        'OUR SPONSORS',
        'CONTACT US',
        'SUPPORT US'
      ],
      // 二级导航栏
      list: [
        [],
        ['list2_1', 'list2_2', 'list2_3', 'list2_4'],
        ['list3_1', 'list3_2', 'list3_3'],
        [],
        ['list5_1', 'list5_2', 'list5_3'],
        [],
        [],
        [
          'list8_1',
          'list8_2',
          'list8_3',
          'list8_4',
          'list8_5',
          'list8_6',
          'list8_7',
          'list8_8'
        ],
        [],
        [],
        ['list11_1', 'list11_2', 'list11_3', 'list11_4', 'list11_5', 'list11_6']
      ],
      // 三级导航栏
      list2: [],
      // list2_2: [],
      list2_8: [{}, {}, {}, {}, {}, {}, {}, { 0: '2017', 1: '2018', 2: '2019' }],
      // 一级导航栏路由名称
      routerList: [
        '',
        '',
        '',
        'apply',
        '',
        'testimonials',
        'download',
        'about',
        'sponsors',
        'contact',
        'support'
      ],
      // 二级导航栏路由名称
      data: [
        [],
        ['public', 'youth', 'school-touring', 'collaborations'],
        ['first', 'first', 'first'],
        [],
        [],
        [],
        [],
        ['produce', 'chairman', 'members', 'art', 'team', 'volunteer', 'actor'],
        [],
        [],
        ['single', 'project', 'soliloquy', 'school', 'compaign', 'legacy']
      ],
      screenWidth: document.body.clientWidth,
      query: {
        page: 1,
        count: 10,
        status: true
      },
      alertArr: [],
      maxHeight: '',
      minHeight: '',
      donationLoading: false,
      current_index: 0
    }
  },
  computed: {
    list_three() {
      return this.current_index === 8 ? this.list2_8 : this.list2
    }
  },
  watch: {
    screenWidth(val) {
      this.screenWidth = val
    }
  },
  mounted() {
    const that = this
    // 当进入页面监听
    that.showSidebar()
    window.onresize = () => {
      return (() => {
        that.showSidebar()
      })()
    }
    // 获取alert
    const alert = 'status=true&showPast=true'
    S4aApi.getAlert(alert).then(result => {
      this.alertArr = result.data
    })
    const data = 'type=annual_gala&status=true&sort=date'
    // 获取gala二级菜单
    S4aApi.getEventList(data).then(result => {
      this.$set(this.list, 2, result.data)
    })
    // this.$set(this.list2, 0, JSON.parse(window.localStorage.getItem('first')))
    // this.$set(this.list2, 1, JSON.parse(window.localStorage.getItem('second')))
    // this.$set(this.list2, 2, JSON.parse(window.localStorage.getItem('third')))
    // this.$set(this.list2, 3, JSON.parse(window.localStorage.getItem('fourth')))
    // this.$set(this.list, 2, JSON.parse(window.localStorage.getItem('gala')))
    if (this.screenWidth > 1120) {
      this.s.map((el, index) => {
        this.$refs[el][0].classList.add('box1')
        const timer = setInterval(() => {
          this.$refs[el][0].classList.remove('box1')
          clearInterval(timer)
        }, Math.random() * 500 + 400)
      })
    }
  },
  created() {
    this.getWeDoData()
  },
  methods: {
    redirectFromNotice(notice) {
      if (notice.indexOf('Powerhouse 2020 Student Enrolment now!') !== -1 || notice.indexOf('「發電廠計劃」 後台製作訓練計劃 2020 學員招募!') !== -1) {
        window.location.href = '#/apply'
      }
    },
    changeActive(index) {
      this.current_index = index
    },
    getWeDoData() {
      const first = 'type=professional_public_shows'
      const second = 'type=youth_theatre_programmes'
      const third = 'type=school_touring_shows'
      const fouth = 'type=collaborations'
      S4aApi.getEventYear(first).then(result => {
        this.$set(this.list2, 0, result.data)
      })
      S4aApi.getEventYear(second).then(result => {
        this.$set(this.list2, 1, result.data)
      })
      S4aApi.getEventYear(third).then(result => {
        this.$set(this.list2, 2, result.data)
      })
      S4aApi.getEventYear(fouth).then(result => {
        this.$set(this.list2, 3, result.data)
      })
    },
    changeFont(i) {
      this.$refs[this.secondMenu[i]][0].classList.add('hover')
    },
    deleFont(i) {
      this.$refs[this.secondMenu[i]][0].classList.remove('hover')
    },
    showDonation() {
      this.donationLoading = true
      this.$store.state.donation = true
    },
    // 导航栏动画效果
    change(index) {
      if (index < 10 && this.list[index].length > 0) {
        this.$refs[this.s[index]][0].classList.add('box2')
        this.$refs[this.s[index + 1]][0].classList.add('box2')
        this.$refs[this.s[index + 1]][0].style.height =
          this.$refs[this.s[index]][0].offsetHeight + 'px'
        this.$refs[this.s[index + 1]][0].style.backgroundColor = this.bgc[index]
      } else if (index === 10 && this.list[10].length > 0) {
        this.$refs[this.s[index]][0].classList.add('box2')
        this.$refs[this.s[index - 1]][0].classList.add('box2')
        this.$refs[this.s[index - 1]][0].style.height =
          this.$refs[this.s[index]][0].offsetHeight + 'px'
        this.$refs[this.s[index - 1]][0].style.backgroundColor = this.bgc[index]
      } else if (this.list[index].length < 1) {
        this.$refs[this.s[index]][0].classList.add('box1')
      }
    },
    reset(index) {
      if (index < 10 && this.list[index].length > 0) {
        this.$refs[this.s[index]][0].classList.remove('box2')
        this.$refs[this.s[index + 1]][0].classList.remove('box2')
        this.$refs[this.s[index + 1]][0].style.height = ''
        this.$refs[this.s[index + 1]][0].style.backgroundColor = this.bgc[
          index + 1
        ]
      } else if (index === 10 && this.list[10].length > 0) {
        this.$refs[this.s[index]][0].classList.remove('box2')
        this.$refs[this.s[index - 1]][0].classList.remove('box2')
        this.$refs[this.s[index - 1]][0].style.height = ''
        this.$refs[this.s[index - 1]][0].style.backgroundColor = this.bgc[
          index - 1
        ]
      } else if (this.list[index].length < 1) {
        this.$refs[this.s[index]][0].classList.remove('box1')
      }
    },
    // 轉換語言
    changeLan(lan) {
      this.selectedLan = lan
      window.localStorage.setItem('locale', lan)
      if (lan === 'zh-TW') {
        window.localStorage.setItem('lo', 'zh_TW')
      } else {
        window.localStorage.setItem('lo', lan)
      }
      location.reload()
    },
    // 小窗口菜單
    showSidebar() {
      window.screenWidth = document.body.clientWidth
      this.screenWidth = window.screenWidth
      if (this.screenWidth > 1120) {
        this.menuShow = false
        this.isShow = false
      } else {
        this.menuShow = true
      }
    },
    // 跳一級菜單
    goFirst(index) {
      if (index === 1) {
        this.$router.push('/' + this.routerList[index - 1])
      } else if ((index > 3) & (this.routerList[index - 1] !== '')) {
        this.$router.push('/' + this.routerList[index - 1])
      }
      this.isShow = false
    },
    // 跳二级菜单
    goSecond(index, i) {
      // const time = parseInt(this.list[2][i].date.substring(0, 4))
      console.log(index, i)
      if (index === 8 && i === 7) {
        return
      }
      switch (index) {
        case 3:
          // console.log(parseInt(this.list[2][i].date.substring(0, 4)))
          this.$router.push(
            '/annual/' +
            this.list[2][i].id +
            '/' +
            parseInt(this.list[2][i].date.substring(0, 4))
          )
          break
        case 5:
          this.$router.push('/media/' + i)
          break
        default:
          this.$router.push(
            '/' + this.routerList[index - 1] + '/' + this.data[index - 1][i]
          )

          break
      }
      this.isShow = false
    },
    // 跳三級菜單
    goThird(i, y) {
      if (i === 7) {
        window.open('/pdf/S4A Annual Report ' + this.list2_8[i][y] + '.pdf', '_blank')
      } else {
        switch (i) {
          case 0:
            this.$router.push('/what-we-do/public/' + this.list2[0][y])
            break
          case 1:
            this.$router.push('/what-we-do/youth/' + this.list2[1][y])
            break
          case 2:
            this.$router.push('/what-we-do/school-touring/' + this.list2[2][y])
            break
          case 3:
            this.$router.push('/what-we-do/collaborations/' + this.list2[3][y])
            break
        }
      }
      this.isShow = false
    },
    imgLoad(index) {
      this.$set(this.showImg, index, true)
      // console.log(this.showImg[index])
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/styles/variables.scss";
.header-tank {
  .notice-tank {
    height: 40px;
    line-height: 40px;
    width: 100%;
    background: $darkRed;
    padding: 0 10%;
    box-sizing: border-box;
    @media screen and(max-width:780px) {
      padding: 0 17px;
    }
    .wrapper {
      max-width: 1200px;
      margin: 0 auto;
      .content {
        line-height: 40px;
        height: 40px;
        display: flex;
        justify-content: flex-start;
        overflow: hidden;
        padding: 0 3%;
        // @media screen and(max-width: 780px) {
        //   padding-left: 10px;
        // }
        img {
          width: 50px;
          height: 24px;
          margin: 7px 10px 0 0;
          @media screen and(max-width: 780px) {
            height: 22px !important;
            margin: 9px 5px 0 0 !important;
            object-fit: cover;
          }
        }
      }
    }
  }
  .menu-box {
    position: relative;
    padding: 0 10%;
    box-sizing: border-box;
    @media screen and(max-width:780px) {
      padding: 0 17px 10px;
    }
    .menu-tank {
      box-sizing: border-box;
      max-width: 1200px;
      width: 100%;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      height: 140px;
      box-sizing: border-box;
      padding: 0 2%;
      @media screen and(max-width: 1120px) {
        height: 60px;
      }
      .logo {
        width: 120px;
        img {
          width: 80%;
        }
        @media screen and(max-width: 1200px) {
          width: 88px;
        }
      }
      .nav-box {
        display: flex;
        // flex: 1;
        .img-box {
          // flex: 1;
          .box {
            transition: all 0.6s ease;
            z-index: 1990;
            .menus {
              position: relative;
              width: 100%;
              transition: all 0.6s ease;
              color: #fff;
              box-sizing: border-box;
              z-index: 1889;
              img {
                width: 100%;
                z-index: 99;
              }
              .menus-title {
                position: absolute;
                left: 50%;
                transform: translateX(-50%);
                bottom: 8%;
                width: 100%;
                padding: 0 3px;
                color: #fff;
                font-size: 14px;
                text-align: center;
                box-sizing: border-box;
                word-wrap: break-word;
                hyphens: auto;
                font-family: "Arial Rounded MT Bold";
                @media screen and(max-width:1300px) {
                  font-size: 12px !important;
                }
              }
              .font {
                font-size: 12px;
              }
            }
            .cur {
              cursor: pointer;
            }
            .list {
              opacity: 0;
              visibility: hidden;
              position: absolute;
              text-align: left;
              border-top: none;
              z-index: 1888;
              transition: all 0.5s ease;
              width: 200%;
              box-sizing: border-box;
              padding-top: 30px;
              z-index: 1991 !important;
              .list-item {
                position: relative;
                width: 100%;
                font-size: 14px;
                color: #eee;
                cursor: pointer;
                box-sizing: border-box;
                z-index: 1991;
                span {
                  display: block;
                  padding: 4px 8px;
                  min-height: 33px;
                  box-sizing: border-box;
                  z-index: 1991;
                }
                .hover {
                  color: #fff;
                  font-weight: 500;
                }
                .last-s {
                  padding: 4px 8px 8px;
                }
                .list-third {
                  position: absolute;
                  width: 100%;
                  top: 0;
                  opacity: 0;
                  visibility: hidden;
                  transition: all 0.5s ease;
                  box-sizing: border-box;
                  z-index: 1991;
                  right: -100%;
                  max-height: 300px;
                  overflow-y: scroll;
                  .list-third-item {
                    display: flex;
                    align-items: center;
                    font-size: 14px;
                    color: #eee;
                    cursor: pointer;
                    padding: 4px 8px;
                    height: 100%;
                    box-sizing: border-box;
                    z-index: 1991;
                    min-height: 33px;
                    box-sizing: border-box;
                  }
                  .list-third-item:hover {
                    color: #fff;
                    font-weight: 500;
                  }
                }
              }
              .list-item :hover {
                color: #fff;
                font-weight: 500;
              }
              .s1 {
                background: $red;
              }
              .s2 {
                background: $yellow;
              }
              .s3 {
                background: $pink;
              }
              .list-item:hover .list-third {
                opacity: 1;
                visibility: visible;
              }
            }
            .last {
              right: 0;
            }
          }
          .box1 {
            padding-bottom: 30px;
            z-index: 1990;
          }
          .box2 {
            padding-bottom: 30px;
            transition: none;
            z-index: 1990;
          }
          .box3 {
            transition: none;
            z-index: 1990;
          }
          .box:hover .list {
            opacity: 1;
            visibility: visible;
          }
          .s1 {
            background: $red;
          }
          .s2 {
            background: $yellow;
          }
          .s3 {
            background: $pink;
          }
        }
      }
      .small-menu {
        display: block;
        width: 26px;
        height: 26px;
        line-height: 26px;
        color: #fff;
        text-align: center;
        // background: #db222a;
        background: url("../assets/imgs/small-bg.png") no-repeat center/100%;
        margin: 13px 10px 0 0;
      }
      .right-box {
        width: 120px;
        .last-tank {
          width: 120px;
          display: flex;
          font-size: 14px;
          padding: 10px 0 10px;
          justify-content: flex-end;
          .lan {
            display: block;
            width: 34px;
            height: 26px;
            line-height: 26px;
            text-align: center;
            cursor: pointer;
            padding: 0 2px;
          }
          .border {
            display: block;
            background: #eff0f0;
            width: 1px;
            height: 26px;
            margin: 0 8px;
          }
          .active-lan {
            border-bottom: 3px solid $darkRed;
            font-weight: 600;
            color: $darkRed;
          }
        }
        .donate {
          // width: calc(93px + 7%);
          margin-left: 16px;
          min-height: 40px;
          cursor: pointer;
          @media screen and(max-width: 1120px) {
            overflow: hidden;
          }
          img {
            min-width: 104px;
          }
        }
      }
    }
    .tank {
      justify-content: space-between;
      align-items: flex-start;
    }
  }
  .donation {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: url("../../src/assets/imgs/bg.png") no-repeat;
    background-size: 100% 100%;
    color: $red;
    box-sizing: border-box;
    max-width: 600px;
    width: 100%;
    height: 450px;
    .content {
      width: 70%;
      height: 308px;
      margin: 120px auto 0;
      line-height: 30px;
      @media screen and(max-width:780px) {
        font-size: 14px;
        height: 200px;
        margin: 125px auto;
        line-height: 22px;
      }
    }
    .close {
      height: 50px;
      width: 50px;
      cursor: pointer;
      // position: absolute;
      position: fixed;
      bottom: -10%;
      left: 50%;
      color: #fff;
      transform: translateX(-50%);
    }
  }
  .slide-fade-enter-active {
    transition: all 0.5s ease;
  }
  .slide-fade-leave-active {
    transition: all 0.5s ease;
  }
  .slide-fade-enter,
  .slide-fade-leave-to {
    transform: translateX(-100%);
  }
}
</style>
<style lang="scss">
.info-show {
  .el-dialog__header {
    padding: 0;
  }
  .el-dialog__body {
    padding: 0;
  }
  .el-dialog__headerbtn {
    display: none;
  }
}
.show-small {
  width: 75% !important;
  margin: 0 !important;
  min-height: 100% !important;
  padding: 0 10px;
  .el-dialog__header {
    padding: 0;
  }
  .el-dialog__body {
    padding: 0;
    // height:100%;
    width: 100%;
  }
  .el-dialog__headerbtn {
    display: none;
  }
}
.show-menu-box {
  z-index: 1000000;
  background: #fff;
  border: none !important;
  .show-menu {
    height: auto;
    background-color: #fff;
    overflow: hidden;
    .single,
    .single1 {
      height: 48px;
      line-height: 48px;
      font-size: 13px;
      border-bottom: 1px solid #ebeef5;
      color: #303133;
      font-weight: 500;
      cursor: pointer;
      img {
        width: auto;
        height: 48px;
      }
    }
    .single1 {
      border: none;
    }
    .special {
      height: 40px;
      line-height: 40px;
      font-size: 13px;
      color: #303133;
      cursor: pointer;
    }
    .el-collapse-item {
      .el-collapse-item__content {
        padding-bottom: 0;
      }
      .el-collapse-item__header {
        overflow: hidden !important;
      }
    }
  }
}
</style>
