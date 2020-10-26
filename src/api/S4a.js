import request from '../utils/request'
export class S4aApi {
  static getAlert(data) {
    return new Promise((resolve, reject) => {
      request({
        method: 'GET',
        url: '/homepage/alerts?' + data
      })
        .then(({ data, status }) => {
          if (status !== 200) return
          resolve(data)
        })
        // eslint-disable-next-line handle-callback-err
        .catch(error => {})
    })
  }
  static getBanner(data) {
    return new Promise((resolve, reject) => {
      request({
        method: 'GET',
        url: '/homepage/banners?' + data
      })
        .then(({ data, status }) => {
          if (status !== 200) return
          resolve(data)
        })
        // eslint-disable-next-line handle-callback-err
        .catch(error => {})
    })
  }
  static getBannerRead(data) {
    return new Promise((resolve, reject) => {
      request({
        method: 'GET',
        url: '/homepage/banners/' + data
      })
        .then(({ data, status }) => {
          if (status !== 200) return
          resolve(data)
        })
        // eslint-disable-next-line handle-callback-err
        .catch(error => {})
    })
  }
  static getAnnouncement(data) {
    return new Promise((resolve, reject) => {
      request({
        method: 'GET',
        url: '/homepage/announcements?' + data
      })
        .then(({ data, status }) => {
          if (status !== 200) return
          resolve(data)
        })
        // eslint-disable-next-line handle-callback-err
        .catch(error => {})
    })
  }
  static getAnnouncementRead(data) {
    return new Promise((resolve, reject) => {
      request({
        method: 'GET',
        url: '/homepage/announcements/' + data
      })
        .then(({ data, status }) => {
          if (status !== 200) return
          resolve(data)
        })
        // eslint-disable-next-line handle-callback-err
        .catch(error => {})
    })
  }
  static getMediaList(data) {
    return new Promise((resolve, reject) => {
      request({
        method: 'GET',
        url: '/medias?' + data
      })
        .then(({ data, status }) => {
          if (status !== 200) return
          resolve(data)
        })
        // eslint-disable-next-line handle-callback-err
        .catch(error => {})
    })
  }
  static getMediaRead(data) {
    return new Promise((resolve, reject) => {
      request({
        method: 'GET',
        url: '/medias/' + data
      })
        .then(({ data, status }) => {
          if (status !== 200) return
          resolve(data.data)
        })
        // eslint-disable-next-line handle-callback-err
        .catch(error => {})
    })
  }
  static getTestimonials(data) {
    return new Promise((resolve, reject) => {
      request({
        method: 'GET',
        url: '/testimonials?' + data
      })
        .then(({ data, status }) => {
          if (status !== 200) return
          resolve(data)
        })
        // eslint-disable-next-line handle-callback-err
        .catch(error => {})
    })
  }
  static getEventList(data) {
    return new Promise((resolve, reject) => {
      request({
        method: 'GET',
        url: '/events?' + data
      })
        .then(({ data, status }) => {
          if (status !== 200) return
          resolve(data)
        })
        // eslint-disable-next-line handle-callback-err
        .catch(error => {})
    })
  }
  static getEventYear(data) {
    return new Promise((resolve, reject) => {
      request({
        method: 'GET',
        url: 'event_years?' + data
      })
        .then(({ data, status }) => {
          if (status !== 200) return
          resolve(data)
        })
        // eslint-disable-next-line handle-callback-err
        .catch(error => {})
    })
  }
  static getEventRead(data) {
    return new Promise((resolve, reject) => {
      request({
        method: 'GET',
        url: '/events/' + data
      })
        .then(({ data, status }) => {
          if (status !== 200) return
          resolve(data)
        })
        // eslint-disable-next-line handle-callback-err
        .catch(error => {})
    })
  }
  static getDownloadList(data) {
    return new Promise((resolve, reject) => {
      request({
        method: 'GET',
        url: '/downloads?' + data
      })
        .then(({ data, status }) => {
          if (status !== 200) return
          resolve(data)
        })
        // eslint-disable-next-line handle-callback-err
        .catch(error => {})
    })
  }
  static PutSubscription(data) {
    return new Promise((resolve, reject) => {
      request({
        method: 'POST',
        url: '/subscriptions',
        data
      })
        .then(({ data, status }) => {
          if (status !== 200) {
            reject(data)
            return
          } else {
            resolve(data)
          }
        })
        // eslint-disable-next-line handle-callback-err
        .catch(error => {
          reject(error)
        })
    })
  }
  static getStaffs() {
    return new Promise((resolve, reject) => {
      request({
        method: 'GET',
        url: '/staffs'
      })
        .then(({ data, status }) => {
          if (status !== 200) {
            reject(data)
            return
          } else {
            resolve(data)
          }
        })
        .catch(error => {
          reject(error)
        })
    })
  }
  static getActors() {
    return new Promise((resolve, reject) => {
      request({
        method: 'GET',
        url: '/actors'
      })
        .then(({ data, status }) => {
          if (status !== 200) {
            reject(data)
            return
          } else {
            resolve(data)
          }
        })
        .catch(error => {
          reject(error)
        })
    })
  }
  static getTutors() {
    return new Promise((resolve, reject) => {
      request({
        method: 'GET',
        url: '/tutors'
      })
        .then(({ data, status }) => {
          if (status !== 200) {
            reject(data)
            return
          } else {
            resolve(data)
          }
        })
        .catch(error => {
          reject(error)
        })
    })
  }
}
