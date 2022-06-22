/* eslint-disable no-console */
/* eslint-disable camelcase */
const state = () => ({
  resourse_career_banner: {},
  resourse_career_section: [],
  resourse_career_details: {},
})

const getters = {
  resourse_career_banner: (state) => state.resourse_career_banner,
  resourse_career_section: (state) => state.resourse_career_section,
  resourse_career_details: (state) => state.resourse_career_details,
}

const actions = {
  getResourseCareerBanner(context) {
    return new Promise((resolve, reject) => {
      context.commit('sidebar/toggleLoader', true, { root: true })
      this.$axios
        .get(`/resourse/career/councelling/page/setting`)
        .then((result) => {
          context.commit('sidebar/toggleLoader', false, { root: true })
          resolve(result)
          if (result.data) {
            result.data.image = this.$config.baseURL + result.data.image
          }
          context.commit('RESOURSE_CAREER_BANNER', result.data)
        })
        .catch((error) => {
          reject(error)
        })
    })
  },

  getResourceCareerSection(context) {
    return new Promise((resolve, reject) => {
      context.commit('sidebar/toggleLoader', true, { root: true })
      this.$axios
        .get(`/resourse/uap/library/type`)
        .then((result) => {
          context.commit('sidebar/toggleLoader', false, { root: true })
          resolve(result)
          result.data.forEach((element) => {
            element.section = element.title
          })
          context.commit('RESOURSE_CAREER_SECTION', result.data)
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

  async getRessourceCareerDetailsFirstLoad(context, id) {
    const data = await this.$axios.get(`/resourse/uap/library/${id}`)
    context.commit('RESOURSE_CAREER_DETAILS', data.data)
  },
  async getResourceCareerDetails(context, value) {
    const data = await this.$axios.get(
      `/resourse/uap/library/${value.history.current.query.id}`
    )
    context.commit('RESOURSE_CAREER_DETAILS', data.data)
  },
}

const mutations = {
  RESOURSE_CAREER_BANNER(state, section) {
    state.resourse_career_banner = section
  },
  RESOURSE_CAREER_SECTION(state, section) {
    state.resourse_career_section = section
  },
  RESOURSE_CAREER_DETAILS(state, section) {
    state.resourse_career_details = section
  },
}
export default {
  state,
  getters,
  actions,
  mutations,
}
