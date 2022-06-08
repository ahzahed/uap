/* eslint-disable no-console */
/* eslint-disable camelcase */
const state = () => ({
  pandemic_banner: {},
})

const getters = {
  pandemic_banner: (state) => state.pandemic_banner,
}

const actions = {
  getPandemicBanner(context) {
    return new Promise((resolve, reject) => {
      context.commit('sidebar/toggleLoader', true, { root: true })
      this.$axios
        .get(`/pandamic/payment/policy/page/setting`)
        .then((result) => {
          context.commit('sidebar/toggleLoader', false, { root: true })
          resolve(result)
          if (result.data) {
            result.data.image = this.$config.baseURL + result.data.image
            result.data.thumbnail = this.$config.baseURL + result.data.thumbnail
          }
          context.commit('PANDEMIC_BANNER', result.data)
        })
        .catch((error) => {
          reject(error)
        })
    })
  },
}

const mutations = {
  PANDEMIC_BANNER(state, section) {
    state.pandemic_banner = section
  },
}
export default {
  state,
  getters,
  actions,
  mutations,
}
