/* eslint-disable no-console */
/* eslint-disable camelcase */
const state = () => ({
  banner: {},
  facilities: [],
})

const getters = {
  banner: (state) => state.banner,
  facilities: (state) => state.facilities,
}

const actions = {
  getFacilityBanner(context, value) {
    return new Promise((resolve, reject) => {
      context.commit('sidebar/toggleLoader', true, { root: true })
      this.$axios
        .get(`/facility/page/setting/${value}`)
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

  async getFacilities(context, value) {
    const data = await this.$axios.get(`/facility/${value}`)
    context.commit('FACILITIES', data.data)
  },
}

const mutations = {
  BANNER(state, banner) {
    state.banner = banner
  },
  FACILITIES(state, notices) {
    state.facilities = notices
  },
}
export default {
  state,
  getters,
  actions,
  mutations,
}
