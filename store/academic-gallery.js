/* eslint-disable no-console */
/* eslint-disable camelcase */
const state = () => ({
  photos: [],
  banner: {},
  categories: {},
})

const getters = {
  photos: (state) => state.photos,
  categories: (state) => state.categories,
  banner: (state) => state.banner,
}

const actions = {
  getBanner(context, payload) {
    return new Promise((resolve, reject) => {
      context.commit('sidebar/toggleLoader', true, { root: true })
      this.$axios
        .get(`/department/academic/gallery/page/setting/${payload}`)
        .then((result) => {
          result.data.image = this.$config.baseURL + result.data.image
          context.commit('BANNER', result.data)
          context.commit('sidebar/toggleLoader', false, { root: true })
          resolve(result)
        })
        .catch((error) => {
          context.commit('sidebar/toggleLoader', false, { root: true })
          reject(error)
        })
    })
  },
  galleryCategories(context, payload) {
    return new Promise((resolve, reject) => {
      context.commit('sidebar/toggleLoader', true, { root: true })

      this.$axios
        .get(`/department/academic/gallery/category/${payload}`)
        .then((result) => {
          context.commit('GALLERY_CATEGORIES', result.data)
          context.commit('sidebar/toggleLoader', false, { root: true })
          resolve(result)
        })
        .catch((error) => {
          context.commit('sidebar/toggleLoader', false, { root: true })
          reject(error)
        })
    })
  },
  getGallery(context, payload) {
    return new Promise((resolve, reject) => {
     

      this.$axios
        .get(
          `/department/academic/category/gallery/image/${payload.department}/${payload.category}`
        )
        .then((result) => {
          context.commit('DATA', result.data)
      
          resolve(result)
        })
        .catch((error) => {
        
          reject(error)
        })
    })
  },
}

const mutations = {
  DATA(state, photos) {
    state.photos = photos
  },
  GALLERY_CATEGORIES(state, categories) {
    state.categories = categories
  },
  BANNER(state, banner) {
    state.banner = banner
  },
}
export default {
  state,
  getters,
  actions,
  mutations,
}
