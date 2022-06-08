/* eslint-disable no-console */
/* eslint-disable camelcase */
const state = () => ({
  aa_banner: {},
  aa_body: {},
})

const getters = {
  aa_banner: (state) => state.aa_banner,
  aa_body: (state) => state.aa_body,
}

const actions = {
  getAaBanner(context, value) {
    return new Promise((resolve, reject) => {
      context.commit('sidebar/toggleLoader', true, { root: true })
      this.$axios
        .get(`/academic/alumni/association/page/setting/${value}`)
        .then((result) => {
          context.commit('sidebar/toggleLoader', false, { root: true })
          resolve(result)
          if (result.data) {
            result.data.image = this.$config.baseURL + result.data.image
            result.data.thumbnail = this.$config.baseURL + result.data.thumbnail
          }
          context.commit('AA_BANNER', result.data)
        })
        .catch((error) => {
          reject(error)
        })
    })
  },
  async getAaBody(context, value) {
    const data = await this.$axios.get(`/academic/alumni/association/${value}`)
    context.commit('AA_BODY', data.data)
  },
}

const mutations = {
  AA_BANNER(state, section) {
    state.aa_banner = section
  },
  AA_BODY(state, section) {
    state.aa_body = section
  },
}
export default {
  state,
  getters,
  actions,
  mutations,
}
