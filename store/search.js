const state = () => ({
  searchResult: [],
})

const getters = {
  searchResult: (state) => state.searchResult,
}

const actions = {
  async getSearchValue(context, payload) {
    const data = await this.$axios.get(`/search?search=${payload}`)
    context.commit('SEARCH', data.data)
  },
}

const mutations = {
  SEARCH(state, section) {
    state.searchResult = section
  },
}
export default {
  state,
  getters,
  actions,
  mutations,
}
