/* eslint-disable no-console */
/* eslint-disable camelcase */
const state = () => ({
  welcome_banner: {},
})

const getters = {
  welcome_banner: (state) => state.welcome_banner,
}

const actions = {
  getWelcomeBanner(context) {
    return new Promise((resolve, reject) => {
      context.commit('sidebar/toggleLoader', true, { root: true })
      this.$axios
        .get(`/welcome/note/page/setting`)
        .then((result) => {
          context.commit('sidebar/toggleLoader', false, { root: true })
          resolve(result)
          if (result.data) {
            result.data.image = this.$config.baseURL + result.data.image
            result.data.thumbnail = this.$config.baseURL + result.data.thumbnail
          }
          context.commit('WELCOME_BANNER', result.data)
        })
        .catch((error) => {
          reject(error)
        })
    })
  },
}

const mutations = {
  WELCOME_BANNER(state, section) {
    state.welcome_banner = section
  },
}
export default {
  state,
  getters,
  actions,
  mutations,
}
