/* eslint-disable no-console */
/* eslint-disable camelcase */
const state = () => ({
  rf_banner: {},
  rf_body: {},
})

const getters = {
  msc_banner: (state) => state.msc_banner,
  msc_body: (state) => state.msc_body,
}

const actions = {
  getMscBanner(context, value) {
    return new Promise((resolve, reject) => {
      context.commit('sidebar/toggleLoader', true, { root: true })
      this.$axios
        .get(`/department/msc/Curriculum/page/setting/${value}`)
        .then((result) => {
          context.commit('sidebar/toggleLoader', false, { root: true })
          resolve(result)
          if (result.data) {
            result.data.image = this.$config.baseURL + result.data.image
            result.data.thumbnail = this.$config.baseURL + result.data.thumbnail
          }
          context.commit('MSC_BANNER', result.data)
        })
        .catch((error) => {
          reject(error)
        })
    })
  },
  async getMscBody(context, value) {
    const data = await this.$axios.get(`/department/msc/Curriculum/${value}`)
    context.commit('MSC_BODY', data.data)
  },
}

const mutations = {
  MSC_BANNER(state, msc_banner) {
    state.msc_banner = msc_banner
  },
  MSC_BODY(state, msc_body) {
    state.msc_body = msc_body
  },
}
export default {
  state,
  getters,
  actions,
  mutations,
}
