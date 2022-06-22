/* eslint-disable no-console */
/* eslint-disable camelcase */
const state = () => ({
  rms_banner: {},
  rms_body: {},
})

const getters = {
  rms_banner: (state) => state.rms_banner,
  rms_body: (state) => state.rms_body,
}

const actions = {
  getRmsBanner(context) {
    return new Promise((resolve, reject) => {
      context.commit('sidebar/toggleLoader', true, { root: true })
      this.$axios
        .get(`/resourse/medical/service/page/setting`)
        .then((result) => {
          context.commit('sidebar/toggleLoader', false, { root: true })
          resolve(result)
          if (result.data) {
            result.data.image = this.$config.baseURL + result.data.image
            result.data.thumbnail = this.$config.baseURL + result.data.thumbnail
          }
          context.commit('RMS_BANNER', result.data)
        })
        .catch((error) => {
          reject(error)
        })
    })
  },

  async getRmsBody(context) {
    const data = await this.$axios.get(`/resourse/medical/develop`)
    context.commit('RMS_BODY', data.data)
  },
}

const mutations = {
  RMS_BANNER(state, section) {
    state.rms_banner = section
  },
  RMS_BODY(state, section) {
    state.rms_body = section
  },
}
export default {
  state,
  getters,
  actions,
  mutations,
}
