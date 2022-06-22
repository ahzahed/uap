/* eslint-disable no-console */
/* eslint-disable camelcase */
const state = () => ({
  resource_exam_banner: {},
  resource_exam_section: [],
  resource_exam_details: {},
})

const getters = {
  resource_exam_banner: (state) => state.resource_exam_banner,
  resource_exam_section: (state) => state.resource_exam_section,
  resource_exam_details: (state) => state.resource_exam_details,
}

const actions = {
  getResourceExamFirstLoad(context, id) {
    return new Promise((resolve, reject) => {
      context.commit('sidebar/toggleLoader', true, { root: true })
      this.$axios
        .get(`/resourse/exam/section/page/setting/${id}`)
        .then((result) => {
          context.commit('sidebar/toggleLoader', false, { root: true })
          resolve(result)
          if (result.data) {
            result.data.image = this.$config.baseURL + result.data.image
          }
          context.commit('RESOURCE_EXAM_BANNER', result.data)
        })
        .catch((error) => {
          reject(error)
        })
    })
  },

  getResourceExamBanner(context, value) {
    return new Promise((resolve, reject) => {
      context.commit('sidebar/toggleLoader', true, { root: true })
      this.$axios
        .get(
          `/resourse/exam/section/page/setting/${value.history.current.query.id}`
        )
        .then((result) => {
          context.commit('sidebar/toggleLoader', false, { root: true })
          resolve(result)
          if (result.data) {
            result.data.image = this.$config.baseURL + result.data.image
          }
          context.commit('RESOURCE_EXAM_BANNER', result.data)
        })
        .catch((error) => {
          reject(error)
        })
    })
  },

  getResourceExamSection(context) {
    return new Promise((resolve, reject) => {
      context.commit('sidebar/toggleLoader', true, { root: true })
      this.$axios
        .get(`/resourse/exam/section/type`)
        .then((result) => {
          context.commit('sidebar/toggleLoader', false, { root: true })
          resolve(result)
          // result.data.forEach((element) => {
          //   element.section = element.title
          // })
          context.commit('RESOURCE_EXAM_SECTION', result.data)
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

  async getResourceExamDetailsFirstLoad(context, id) {
    const data = await this.$axios.get(`/resourse/exam/section/${id}`)
    context.commit('RESOURCE_EXAM_DETAILS', data.data)
  },
  async getResourceExamDetails(context, value) {
    const data = await this.$axios.get(
      `/resourse/exam/section/${value.history.current.query.id}`
    )
    context.commit('RESOURCE_EXAM_DETAILS', data.data)
  },
}

const mutations = {
  RESOURCE_EXAM_BANNER(state, section) {
    state.resource_exam_banner = section
  },
  RESOURCE_EXAM_SECTION(state, section) {
    state.resource_exam_section = section
  },
  RESOURCE_EXAM_DETAILS(state, section) {
    state.resource_exam_details = section
  },
}
export default {
  state,
  getters,
  actions,
  mutations,
}
