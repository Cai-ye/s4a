import Vue from 'vue'
import VueI18n from 'vue-i18n'
// import messages from './langs'
// import store from '../store'
import zh_TW from './langs/zh_tw'
import en from './langs/en'
Vue.use(VueI18n)
const i18n = new VueI18n({
  locale: window.localStorage.getItem('lo') || 'en',
  messages: {
    en,
    zh_TW
  }
})

export default i18n
