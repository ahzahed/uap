/* eslint-disable no-console */
/* eslint-disable camelcase */
const state = () => ({
  banner: {},
  all_tour: [],
})

const getters = {
  banner: (state) => state.banner,
  all_tour: (state) => state.all_tour,
}

const actions = {
  getVirtualTourBanner(context) {
    return new Promise((resolve, reject) => {
      context.commit('sidebar/toggleLoader', true, { root: true })
      this.$axios
        .get(`/virtual/tour/page/setting`)
        .then((result) => {
          context.commit('sidebar/toggleLoader', false, { root: true })
          resolve(result)
          if (result.data) {
            result.data.image = this.$config.baseURL + result.data.image
          }
          context.commit('BANNER', result.data)
        })
        .catch((error) => {
          reject(error)
        })
    })
  },

  async getVirtualTour(context) {
    const data = await this.$axios.get(`/virtual/tour`)
    context.commit('ALL_TOUR', data.data)
  },
}

const mutations = {
  BANNER(state, banner) {
    state.banner = banner
  },
  ALL_TOUR(state, notices) {
    state.all_tour = notices
  },
}
export default {
  state,
  getters,
  actions,
  mutations,
}
