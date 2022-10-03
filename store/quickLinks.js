/* eslint-disable no-console */
/* eslint-disable camelcase */
const state = () => ({
  links: [],
})

const getters = {
  links: (state) => state.links,
}

const actions = {
  async getLinks(context) {
    const data = await this.$axios.get(`/quick_link`)
    context.commit('LINKS', data.data)
  },
}

const mutations = {
  LINKS(state, section) {
    state.links = section
  },
}
export default {
  state,
  getters,
  actions,
  mutations,
}
