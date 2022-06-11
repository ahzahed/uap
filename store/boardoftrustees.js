/* eslint-disable no-console */
/* eslint-disable camelcase */
const state = () => ({
  boardoftrustees_banner: [],
  boardoftrustees: [],
  chairman: {},
})

const getters = {
  boardoftrustees_banner: (state) => state.boardoftrustees_banner,
  boardoftrustees: (state) => state.boardoftrustees,
  chairman: (state) => state.chairman,
}

const actions = {
  async BoardofTrusteesBanner(context) {
    try {
      context.commit('sidebar/toggleLoader', true, { root: true })
      const data = await this.$axios.get(`/board/of/trustee/page/setting`)
      context.commit('BANNER', data.data)
      context.commit('sidebar/toggleLoader', false, { root: true })
    } catch (error) {
      console.log('Error: ' + error)
      context.commit('sidebar/toggleLoader', false, { root: true })
    }
  },
  async allBoardoftrustees(context, page) {
    const data = await this.$axios.get(`/board/of/trustee?page=${page}`)
    context.commit('DATA', data.data)
  },
  async getChairman(context) {
    const data = await this.$axios.get(`/chairman/board/of/trustee`)
    context.commit('CHAIRMAN', data.data)
  },
}

const mutations = {
  DATA(state, boardoftrustees) {
    state.boardoftrustees = boardoftrustees
  },
  CHAIRMAN(state, section) {
    state.chairman = section
  },
  BANNER(state, section) {
    state.boardoftrustees_banner = section
  },
}
export default {
  state,
  getters,
  actions,
  mutations,
}
