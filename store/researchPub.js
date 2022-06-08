/* eslint-disable no-console */
/* eslint-disable camelcase */
const state = () => ({
  rp_banner: {},
  rp_body: {},
})

const getters = {
  rp_banner: (state) => state.rp_banner,
  rp_body: (state) => state.rp_body,
}

const actions = {
  getRpBanner(context, value) {
    return new Promise((resolve, reject) => {
      context.commit('sidebar/toggleLoader', true, { root: true })
      this.$axios
        .get(`/academic/research/publicaion/page/setting/${value}`)
        .then((result) => {
          context.commit('sidebar/toggleLoader', false, { root: true })
          resolve(result)
          if (result.data) {
            result.data.image = this.$config.baseURL + result.data.image
            result.data.thumbnail = this.$config.baseURL + result.data.thumbnail
          }
          context.commit('RP_BANNER', result.data)
        })
        .catch((error) => {
          reject(error)
        })
    })
  },
  async getRpBody(context, value) {
    const data = await this.$axios.get(
      `/academic/research/publication/${value}`
    )
    context.commit('RP_BODY', data.data)
  },
}

const mutations = {
  RP_BANNER(state, section) {
    state.rp_banner = section
  },
  RP_BODY(state, section) {
    state.rp_body = section
  },
}
export default {
  state,
  getters,
  actions,
  mutations,
}
