/* eslint-disable no-console */
/* eslint-disable camelcase */
const state = () => ({
  what_is_required_banner: {},
})

const getters = {
  what_is_required_banner: (state) => state.what_is_required_banner,
}

const actions = {
  getWhatIsRequiredBanner(context) {
    return new Promise((resolve, reject) => {
      context.commit('sidebar/toggleLoader', true, { root: true })
      this.$axios
        .get(`/what/is/required/page/setting`)
        .then((result) => {
          context.commit('sidebar/toggleLoader', false, { root: true })
          resolve(result)
          if (result.data) {
            result.data.image = this.$config.baseURL + result.data.image
            result.data.thumbnail = this.$config.baseURL + result.data.thumbnail
          }
          context.commit('WHAT_IS_REQUIRED_BANNER', result.data)
        })
        .catch((error) => {
          reject(error)
        })
    })
  },
}

const mutations = {
  WHAT_IS_REQUIRED_BANNER(state, section) {
    state.what_is_required_banner = section
  },
}
export default {
  state,
  getters,
  actions,
  mutations,
}
