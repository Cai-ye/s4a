import Vue from 'vue'
import App from './App.vue'
// import './registerServiceWorker'
import router from './router'
import store from './store'
import './assets/styles/index.scss'
import i18n from './i18n'
// import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import {
  Message,
  Input,
  Dialog,
  Row,
  Col,
  Image,
  Icon,
  Pagination,
  Loading,
  Backtop,
  Collapse,
  CollapseItem
} from 'element-ui'

import { NoticeBar } from 'vant'
Vue.use(NoticeBar)

Vue.config.productionTip = false
Vue.use(Input)
Vue.use(Dialog)
Vue.use(Row)
Vue.use(Col)
Vue.use(Image)
Vue.use(Icon)
Vue.use(Pagination)
Vue.use(Loading)
Vue.use(Backtop)
Vue.use(Collapse)
Vue.use(CollapseItem)
Vue.use(VueAwesomeSwiper)
Vue.prototype.$message = Message

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
