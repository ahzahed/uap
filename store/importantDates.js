/* eslint-disable no-console */
/* eslint-disable camelcase */
const state = () => ({
  important_banner: {},
})

const getters = {
  important_banner: (state) => state.important_banner,
}

const actions = {
  getImportantBanner(context) {
    return new Promise((resolve, reject) => {
      context.commit('sidebar/toggleLoader', true, { root: true })
      this.$axios
        .get(`/date/deadline/page/setting`)
        .then((result) => {
          context.commit('sidebar/toggleLoader', false, { root: true })
          resolve(result)
          if (result.data) {
            result.data.image = this.$config.baseURL + result.data.image
            result.data.thumbnail = this.$config.baseURL + result.data.thumbnail
          }
          context.commit('IMPORTANT_BANNER', result.data)
        })
        .catch((error) => {
          reject(error)
        })
    })
  },
}

const mutations = {
  IMPORTANT_BANNER(state, section) {
    state.important_banner = section
  },
}
export default {
  state,
  getters,
  actions,
  mutations,
}
