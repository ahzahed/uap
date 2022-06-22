/* eslint-disable no-console */
/* eslint-disable camelcase */
const state = () => ({
  rfc_banner: {},
  rfc_body: {},
})

const getters = {
  rfc_banner: (state) => state.rfc_banner,
  rfc_body: (state) => state.rfc_body,
}

const actions = {
  getRfcBanner(context) {
    return new Promise((resolve, reject) => {
      context.commit('sidebar/toggleLoader', true, { root: true })
      this.$axios
        .get(`/resourse/capacity/develop/page/setting`)
        .then((result) => {
          context.commit('sidebar/toggleLoader', false, { root: true })
          resolve(result)
          if (result.data) {
            result.data.image = this.$config.baseURL + result.data.image
            result.data.thumbnail = this.$config.baseURL + result.data.thumbnail
          }
          context.commit('RFC_BANNER', result.data)
        })
        .catch((error) => {
          reject(error)
        })
    })
  },

  async getRfcBody(context) {
    const data = await this.$axios.get(`/resourse/capacity/develop`)
    context.commit('RFC_BODY', data.data)
  },
}

const mutations = {
  RFC_BANNER(state, section) {
    state.rfc_banner = section
  },
  RFC_BODY(state, section) {
    state.rfc_body = section
  },
}
export default {
  state,
  getters,
  actions,
  mutations,
}
