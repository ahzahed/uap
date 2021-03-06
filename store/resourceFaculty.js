/* eslint-disable no-console */
/* eslint-disable camelcase */
const state = () => ({
  rf_banner: {},
  rf_body: {},
})

const getters = {
  rf_banner: (state) => state.rf_banner,
  msc_body: (state) => state.msc_body,
}

const actions = {
  getRfBanner(context) {
    return new Promise((resolve, reject) => {
      context.commit('sidebar/toggleLoader', true, { root: true })
      this.$axios
        .get(`/resourse/faculty/member/page/setting`)
        .then((result) => {
          context.commit('sidebar/toggleLoader', false, { root: true })
          resolve(result)
          if (result.data) {
            result.data.image = this.$config.baseURL + result.data.image
            result.data.thumbnail = this.$config.baseURL + result.data.thumbnail
          }
          context.commit('RF_BANNER', result.data)
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
  RF_BANNER(state, section) {
    state.rf_banner = section
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
