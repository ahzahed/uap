/* eslint-disable no-console */
/* eslint-disable camelcase */
const state = () => ({
  committees: [],
  committee_section: [],
  committee_banner: {},
})

const getters = {
  committees: (state) => state.committees,
  committee_section: (state) => state.committee_section,
  committee_banner: (state) => state.committee_banner,
}

const actions = {
  getCommitteeBanner(context) {
    return new Promise((resolve, reject) => {
      context.commit('sidebar/toggleLoader', true, { root: true })
      this.$axios
        .get(`/committee/page/setting`)
        .then((result) => {
          context.commit('sidebar/toggleLoader', false, { root: true })
          resolve(result)
          context.commit('COMMITTEE_BANNER', result.data)
        })
        .catch((error) => {
          reject(error)
        })
    })
  },
  allCommitteeSection(context) {
    return new Promise((resolve, reject) => {
      context.commit('sidebar/toggleLoader', true, { root: true })
      this.$axios
        .get(`/committee/section/list`)
        .then((result) => {
          context.commit('sidebar/toggleLoader', false, { root: true })
          resolve(result)
          context.commit('COMMITTEE_SECTION', result.data)
        })
        .catch((error) => {
          reject(error)
        })
    })
  },
  async allCommittee(context, id) {
    try {
      context.commit('sidebar/toggleLoader', true, { root: true })
      const data = await this.$axios.get(`/committee/${id}/list`)
      context.commit('DATA', data.data)
      context.commit('sidebar/toggleLoader', false, { root: true })
    } catch (error) {
      console.log('Error: ' + error)
      context.commit('sidebar/toggleLoader', false, { root: true })
    }
  },
}

const mutations = {
  DATA(state, committees) {
    state.committees = committees
  },
  COMMITTEE_SECTION(state, section) {
    state.committee_section = section
  },
  COMMITTEE_BANNER(state, committee_banner) {
    state.committee_banner = committee_banner
  },
}
export default {
  state,
  getters,
  actions,
  mutations,
}
