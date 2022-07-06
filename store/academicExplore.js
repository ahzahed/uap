/* eslint-disable no-console */
/* eslint-disable camelcase */
const state = () => ({
  academic_explore_banner: {},
  academic_explore: [],
})

const getters = {
  academic_explore_banner: (state) => state.academic_explore_banner,
  academic_explore: (state) => state.academic_explore,
}

const actions = {
  getAcademicExploreBanner(context, value) {
    return new Promise((resolve, reject) => {
      context.commit('sidebar/toggleLoader', true, { root: true })
      this.$axios
        .get(`/academic/explore/page/setting/${value}`)
        .then((result) => {
          context.commit('sidebar/toggleLoader', false, { root: true })
          resolve(result)
          if (result.data) {
            result.data.image = this.$config.baseURL + result.data.image
          }
          context.commit('ACADEMIC_EXPLORE_BANNER', result.data)
        })
        .catch((error) => {
          reject(error)
        })
    })
  },

  async getAcademicExplor(context, payload) {
    try {
      context.commit('sidebar/toggleLoader', true, { root: true })
      const data = await this.$axios.get(`/academic/explore/${payload}`)
      context.commit('ACADEMIC_EXPLORE', data.data)
      context.commit('sidebar/toggleLoader', false, { root: true })
    } catch (error) {
      context.commit('sidebar/toggleLoader', false, { root: true })
    }
  },
}

const mutations = {
  ACADEMIC_EXPLORE_BANNER(state, academic_explore_banner) {
    state.academic_explore_banner = academic_explore_banner
  },
  ACADEMIC_EXPLORE(state, academic_explore) {
    state.academic_explore = academic_explore
  },
}
export default {
  state,
  getters,
  actions,
  mutations,
}
