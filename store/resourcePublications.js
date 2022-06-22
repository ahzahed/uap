/* eslint-disable no-console */
/* eslint-disable camelcase */
const state = () => ({
  resourse_publication_banner: {},
  resourse_publication_section: [],
  resourse_publication_details: {},
})

const getters = {
  resourse_publication_banner: (state) => state.resourse_publication_banner,
  resourse_publication_section: (state) => state.resourse_publication_section,
  resourse_publication_details: (state) => state.resourse_publication_details,
}

const actions = {
  getResoursePublicationBanner(context) {
    return new Promise((resolve, reject) => {
      context.commit('sidebar/toggleLoader', true, { root: true })
      this.$axios
        .get(`/resourse/uap/publication/page/setting`)
        .then((result) => {
          context.commit('sidebar/toggleLoader', false, { root: true })
          resolve(result)
          if (result.data) {
            result.data.image = this.$config.baseURL + result.data.image
          }
          context.commit('RESOURSE_PUBLICATION_BANNER', result.data)
        })
        .catch((error) => {
          reject(error)
        })
    })
  },

  getResourcePublicationSection(context) {
    return new Promise((resolve, reject) => {
      context.commit('sidebar/toggleLoader', true, { root: true })
      this.$axios
        .get(`/resourse/uap/publication/type`)
        .then((result) => {
          context.commit('sidebar/toggleLoader', false, { root: true })
          resolve(result)
          result.data.forEach((element) => {
            element.section = element.title
          })
          context.commit('RESOURSE_PUBLICATION_SECTION', result.data)
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

  async getRessourcePublicationDetailsFirstLoad(context, id) {
    const data = await this.$axios.get(`/resourse/uap/publication/${id}`)
    context.commit('RESOURSE_PUBLICATION_DETAILS', data.data)
  },

  async getResourcePublicationDetails(context, value) {
    const data = await this.$axios.get(
      `/resourse/uap/publication/${value.history.current.query.id}`
    )
    context.commit('RESOURSE_PUBLICATION_DETAILS', data.data)
  },
}

const mutations = {
  RESOURSE_PUBLICATION_BANNER(state, section) {
    state.resourse_publication_banner = section
  },
  RESOURSE_PUBLICATION_SECTION(state, section) {
    state.resourse_publication_section = section
  },
  RESOURSE_PUBLICATION_DETAILS(state, section) {
    state.resourse_publication_details = section
  },
}
export default {
  state,
  getters,
  actions,
  mutations,
}
