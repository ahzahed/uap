/* eslint-disable no-console */
/* eslint-disable camelcase */
const state = () => ({
  acoun_banner: {},
  acoun_body: [],
})

const getters = {
  acoun_banner: (state) => state.acoun_banner,
  acoun_body: (state) => state.acoun_body,
}

const actions = {
  getAcounBanner(context) {
    return new Promise((resolve, reject) => {
      context.commit('sidebar/toggleLoader', true, { root: true })
      this.$axios
        .get(`/academic/counselling/page/setting`)
        .then((result) => {
          context.commit('sidebar/toggleLoader', false, { root: true })
          resolve(result)
          if (result.data) {
            result.data.image = this.$config.baseURL + result.data.image
            result.data.thumbnail = this.$config.baseURL + result.data.thumbnail
          }
          context.commit('ACOUN_BANNER', result.data)
        })
        .catch((error) => {
          reject(error)
        })
    })
  },
  async getAcounBody(context) {
    const data = await this.$axios.get(`/academic/counselling`)
    context.commit('ACOUN_BODY', data.data)
  },
}

const mutations = {
  ACOUN_BANNER(state, section) {
    state.acoun_banner = section
  },
  ACOUN_BODY(state, section) {
    state.acoun_body = section
  },
}
export default {
  state,
  getters,
  actions,
  mutations,
}
