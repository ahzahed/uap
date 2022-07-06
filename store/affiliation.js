/* eslint-disable no-console */
/* eslint-disable camelcase */
const state = () => ({
  affiliation_banner: {},
  affiliation_body: [],
})

const getters = {
  affiliation_banner: (state) => state.affiliation_banner,
  affiliation_body: (state) => state.affiliation_body,
}

const actions = {
  getAffiliationBanner(context) {
    return new Promise((resolve, reject) => {
      context.commit('sidebar/toggleLoader', true, { root: true })
      this.$axios
        .get(`/affiliation/page/setting`)
        .then((result) => {
          context.commit('sidebar/toggleLoader', false, { root: true })
          resolve(result)
          if (result.data) {
            result.data.image = this.$config.baseURL + result.data.image
            result.data.thumbnail = this.$config.baseURL + result.data.thumbnail
          }
          context.commit('AFFILIATION_BANNER', result.data)
        })
        .catch((error) => {
          reject(error)
        })
    })
  },
  async getAffiliationBody(context) {
    const data = await this.$axios.get(`/affiliation`)
    context.commit('AFFILIATION_BODY', data.data)
  },
}

const mutations = {
  AFFILIATION_BANNER(state, section) {
    state.affiliation_banner = section
  },
  AFFILIATION_BODY(state, section) {
    state.affiliation_body = section
  },
}
export default {
  state,
  getters,
  actions,
  mutations,
}
