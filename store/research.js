/* eslint-disable no-console */
/* eslint-disable camelcase */
const state = () => ({
  research_banner: {},
  research_section: [],
  research_details: {},
})

const getters = {
  research_banner: (state) => state.research_banner,
  research_section: (state) => state.research_section,
  research_details: (state) => state.research_details,
}

const actions = {
  getResearchBannerFirstLoad(context, id) {
    return new Promise((resolve, reject) => {
      context.commit('sidebar/toggleLoader', true, { root: true })
      this.$axios
        .get(`/research/page/setting/${id}`)
        .then((result) => {
          context.commit('sidebar/toggleLoader', false, { root: true })
          resolve(result)
          if (result.data) {
            result.data.image = this.$config.baseURL + result.data.image
          }
          context.commit('RESEARCH_BANNER', result.data)
        })
        .catch((error) => {
          reject(error)
        })
    })
  },

  getResearchBanner(context, value) {
    return new Promise((resolve, reject) => {
      context.commit('sidebar/toggleLoader', true, { root: true })
      this.$axios
        .get(`/research/page/setting/${value.history.current.query.id}`)
        .then((result) => {
          context.commit('sidebar/toggleLoader', false, { root: true })
          resolve(result)
          if (result.data) {
            result.data.image = this.$config.baseURL + result.data.image
          }
          context.commit('RESEARCH_BANNER', result.data)
        })
        .catch((error) => {
          reject(error)
        })
    })
  },

  getResearchSection(context) {
    return new Promise((resolve, reject) => {
      context.commit('sidebar/toggleLoader', true, { root: true })
      this.$axios
        .get(`/research/type`)
        .then((result) => {
          context.commit('sidebar/toggleLoader', false, { root: true })
          resolve(result)
          result.data.forEach((element) => {
            element.section = element.title
          })
          context.commit('RESEARCH_SECTION', result.data)
        })
        .catch((error) => {
          reject(error)
        })
    })
  },

  //   getResearchDetails(context, value) {
  //     return new Promise((resolve, reject) => {
  //       context.commit('sidebar/toggleLoader', true, { root: true })
  //       this.$axios
  //         .get(`/research/${value.history.current.query.id}`)
  //         .then((result) => {
  //           context.commit('sidebar/toggleLoader', false, { root: true })
  //           resolve(result)
  //           result.data.forEach((element) => {
  //             element.section = element.title
  //           })
  //           context.commit('RESEARCH_DETAILS', result.data)
  //         })
  //         .catch((error) => {
  //           reject(error)
  //         })
  //     })
  //   },

  async getResearchDetailsFirstLoad(context, id) {
    const data = await this.$axios.get(`/research/${id}`)
    context.commit('RESEARCH_DETAILS', data.data)
  },
  async getResearchDetails(context, value) {
    const data = await this.$axios.get(
      `/research/${value.history.current.query.id}`
    )

    context.commit('RESEARCH_DETAILS', data.data)
  },
}

const mutations = {
  RESEARCH_BANNER(state, section) {
    state.research_banner = section
  },
  RESEARCH_SECTION(state, section) {
    state.research_section = section
  },
  RESEARCH_DETAILS(state, section) {
    state.research_details = section
  },
}
export default {
  state,
  getters,
  actions,
  mutations,
}
