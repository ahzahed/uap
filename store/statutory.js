/* eslint-disable no-console */
/* eslint-disable camelcase */
const state = () => ({
  statutoryList: [],
  statutory_section: [],
  statutory_banner: {},
})

const getters = {
  statutoryList: (state) => state.statutoryList,
  statutory_section: (state) => state.statutory_section,
  statutory_banner: (state) => state.statutory_banner,
}

const actions = {
  getStatutoryBanner(context) {
    return new Promise((resolve, reject) => {
      context.commit('sidebar/toggleLoader', true, { root: true })
      this.$axios
        .get(`/statutory/page/setting`)
        .then((result) => {
          context.commit('sidebar/toggleLoader', false, { root: true })
          resolve(result)
          context.commit('STATUTORY_BANNER', result.data)
        })
        .catch((error) => {
          reject(error)
        })
    })
  },
  allStatutorySection(context) {
    return new Promise((resolve, reject) => {
      context.commit('sidebar/toggleLoader', true, { root: true })
      this.$axios
        .get(`/statutory/section/list`)
        .then((result) => {
          context.commit('sidebar/toggleLoader', false, { root: true })
          resolve(result)
          context.commit('STATUTORY_SECTION', result.data)
        })
        .catch((error) => {
          reject(error)
        })
    })
  },
  async allStatutory(context, id) {
    try {
      context.commit('sidebar/toggleLoader', true, { root: true })
      const data = await this.$axios.get(`/statutory/${id}/list`)
      context.commit('DATA', data.data)
      context.commit('sidebar/toggleLoader', false, { root: true })
    } catch (error) {
      console.log('Error: ' + error)
      context.commit('sidebar/toggleLoader', false, { root: true })
    }
  },
}

const mutations = {
  DATA(state, statutoryList) {
    state.statutoryList = statutoryList
  },
  STATUTORY_SECTION(state, section) {
    state.statutory_section = section
  },
  STATUTORY_BANNER(state, statutory_banner) {
    state.statutory_banner = statutory_banner
  },
}
export default {
  state,
  getters,
  actions,
  mutations,
}
