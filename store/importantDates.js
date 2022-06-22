/* eslint-disable no-console */
/* eslint-disable camelcase */
const state = () => ({
  important_banner: {},
  dates: [],
})

const getters = {
  important_banner: (state) => state.important_banner,
  dates: (state) => state.dates,
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
  async getDates(context) {
    const data = await this.$axios.get(`/date/deadline`)
    context.commit('DATES', data.data)
  },
}

const mutations = {
  IMPORTANT_BANNER(state, section) {
    state.important_banner = section
  },
  DATES(state, section) {
    state.dates = section
  },
}
export default {
  state,
  getters,
  actions,
  mutations,
}
