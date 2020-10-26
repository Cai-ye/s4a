import axios from 'axios'
import spacetime from 'spacetime'
import md5 from 'js-md5'
// import store from '../store'

export default function http(options) {
  const obj = {}
  const time = spacetime.now('Asia/Hong_Kong').unixFmt('YYYY-MM-dd HH:mm:ss')
  const secret = md5(
    '101b13d8-3746-47da-81fc-7801b735c02a' + ':' + '__ONLYONE__' + ':' + time
  )
  if (options.method === 'GET') {
    obj.params = options.data
  } else if (options.method === 'POST' || options.method === 'PUT') {
    obj.data = options.data
  }
  return axios({
    // baseURL: 'https://s4a-api-staging.wistkey.com/',
    baseURL: 'https://s4a-api-production.wistkey.com/',
    // baseURL: 'https://s4a-api-testing.wistkey.com/',
    url: options.url,
    method: options.method,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'app-id': '564452e4-6501-11e9-bd7e-b8cacc9eb5b0',
      'request-time': time,
      'accept-language': window.localStorage.getItem('locale') || 'en',
      secret: secret,
      ...options.headers
    },
    timeout: 60000,
    ...obj
  })
}
