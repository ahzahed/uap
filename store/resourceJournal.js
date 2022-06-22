/* eslint-disable no-console */
/* eslint-disable camelcase */
const state = () => ({
  resourse_journal_banner: {},
  resourse_journal_section: [],
  resourse_journal_details: {},
})

const getters = {
  resourse_journal_banner: (state) => state.resourse_journal_banner,
  resourse_journal_section: (state) => state.resourse_journal_section,
  resourse_journal_details: (state) => state.resourse_journal_details,
}

const actions = {
  getResourseJournalBanner(context) {
    return new Promise((resolve, reject) => {
      context.commit('sidebar/toggleLoader', true, { root: true })
      this.$axios
        .get(`/resourse/uap/ad/tender/media/page/setting`)
        .then((result) => {
          context.commit('sidebar/toggleLoader', false, { root: true })
          resolve(result)
          if (result.data) {
            result.data.image = this.$config.baseURL + result.data.image
          }
          context.commit('RESOURSE_JOURNAL_BANNER', result.data)
        })
        .catch((error) => {
          reject(error)
        })
    })
  },

  getResourceJournalSection(context) {
    return new Promise((resolve, reject) => {
      context.commit('sidebar/toggleLoader', true, { root: true })
      this.$axios
        .get(`/resourse/uap/ad/tender/media/type`)
        .then((result) => {
          context.commit('sidebar/toggleLoader', false, { root: true })
          resolve(result)
          result.data.forEach((element) => {
            element.section = element.title
          })
          context.commit('RESOURSE_JOURNAL_SECTION', result.data)
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

  async getRessourceJournalDetailsFirstLoad(context, id) {
    const data = await this.$axios.get(`/resourse/uap/ad/tender/media/${id}`)
    context.commit('RESOURSE_JOURNAL_DETAILS', data.data)
  },
  async getResourceJournalDetails(context, value) {
    const data = await this.$axios.get(
      `/resourse/uap/ad/tender/media/${value.history.current.query.id}`
    )
    context.commit('RESOURSE_JOURNAL_DETAILS', data.data)
  },
}

const mutations = {
  RESOURSE_JOURNAL_BANNER(state, section) {
    state.resourse_journal_banner = section
  },
  RESOURSE_JOURNAL_SECTION(state, section) {
    state.resourse_journal_section = section
  },
  RESOURSE_JOURNAL_DETAILS(state, section) {
    state.resourse_journal_details = section
  },
}
export default {
  state,
  getters,
  actions,
  mutations,
}
