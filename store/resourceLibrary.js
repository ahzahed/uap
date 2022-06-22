/* eslint-disable no-console */
/* eslint-disable camelcase */
const state = () => ({
  resourse_library_banner: {},
  resourse_library_section: [],
  resourse_library_details: {},
})

const getters = {
  resourse_library_banner: (state) => state.resourse_library_banner,
  resourse_library_section: (state) => state.resourse_library_section,
  resourse_library_details: (state) => state.resourse_library_details,
}

const actions = {
  getResourseLibraryBanner(context) {
    return new Promise((resolve, reject) => {
      context.commit('sidebar/toggleLoader', true, { root: true })
      this.$axios
        .get(`/resourse/uap/library/page/setting`)
        .then((result) => {
          context.commit('sidebar/toggleLoader', false, { root: true })
          resolve(result)
          if (result.data) {
            result.data.image = this.$config.baseURL + result.data.image
          }
          context.commit('RESOURSE_LIBRARY_BANNER', result.data)
        })
        .catch((error) => {
          reject(error)
        })
    })
  },

  getResourceLibrarySection(context) {
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
          context.commit('RESOURSE_LIBRARY_SECTION', result.data)
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

  async getRessourceLibraryDetailsFirstLoad(context, id) {
    const data = await this.$axios.get(`/resourse/uap/library/${id}`)
    context.commit('RESOURCE_LIBRARY_DETAILS', data.data)
  },
  async getResourceLibraryDetails(context, value) {
    const data = await this.$axios.get(
      `/resourse/uap/library/${value.history.current.query.id}`
    )
    context.commit('RESOURCE_LIBRARY_DETAILS', data.data)
  },
}

const mutations = {
  RESOURSE_LIBRARY_BANNER(state, section) {
    state.resourse_library_banner = section
  },
  RESOURSE_LIBRARY_SECTION(state, section) {
    state.resourse_library_section = section
  },
  RESOURCE_LIBRARY_DETAILS(state, section) {
    state.resourse_library_details = section
  },
}
export default {
  state,
  getters,
  actions,
  mutations,
}
