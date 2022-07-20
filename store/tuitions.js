/* eslint-disable no-console */
/* eslint-disable camelcase */
const state = () => ({
  graduateList: [],
  getWaiverList: [],
  meritWaiverList: [],
  underGraduateList: [],
  tuitions_banner: [],
  underGraduationNote: {},
  graduationNote: {},
})

const getters = {
  graduateList: (state) => state.graduateList,
  getWaiverList: (state) => state.getWaiverList,
  meritWaiverList: (state) => state.meritWaiverList,
  underGraduateList: (state) => state.underGraduateList,
  tuitions_banner: (state) => state.tuitions_banner,
  underGraduationNote: (state) => state.underGraduationNote,
  graduationNote: (state) => state.graduationNote,
}

const actions = {
  allGraduate(context) {
    return new Promise((resolve, reject) => {
      context.commit('sidebar/toggleLoader', true, { root: true })
      this.$axios
        .get(`/graduate/list`)
        .then((result) => {
          context.commit('sidebar/toggleLoader', false, { root: true })

          resolve(result)
          context.commit('GRADUATE_LIST', result.data)
        })
        .catch((error) => {
          reject(error)
        })
    })
  },
  async getGraduationNote(context) {
    const data = await this.$axios.get(`/graduate/note`)
    context.commit('GRADUATION_NOTE', data.data)
  },

  allUnderGraduate(context) {
    return new Promise((resolve, reject) => {
      context.commit('sidebar/toggleLoader', true, { root: true })
      this.$axios
        .get(`/undergraduate/list`)
        .then((result) => {
          context.commit('sidebar/toggleLoader', false, { root: true })

          resolve(result)
          context.commit('ALLUNDER_GRADUATE', result.data)
        })
        .catch((error) => {
          reject(error)
        })
    })
  },
  async getUnderGraduateNote(context) {
    const data = await this.$axios.get(`/undergraduate/note`)
    context.commit('UNDERGRADUATES_NOTE', data.data)
  },

  getWaiverList(context) {
    return new Promise((resolve, reject) => {
      context.commit('sidebar/toggleLoader', true, { root: true })
      this.$axios
        .get(`/waiver/list`)
        .then((result) => {
          context.commit('sidebar/toggleLoader', false, { root: true })

          resolve(result)
          context.commit('GETWAIVER_LIST', result.data)
        })
        .catch((error) => {
          reject(error)
        })
    })
  },
  meritWaiver(context) {
    return new Promise((resolve, reject) => {
      context.commit('sidebar/toggleLoader', true, { root: true })
      this.$axios
        .get(`/merti_waiver/list`)
        .then((result) => {
          context.commit('sidebar/toggleLoader', false, { root: true })

          resolve(result)
          context.commit('MERIT_WAIVER', result.data)
        })
        .catch((error) => {
          reject(error)
        })
    })
  },
  async tuitionsBanner(context) {
    try {
      context.commit('sidebar/toggleLoader', true, { root: true })
      const data = await this.$axios.get(`/tution/header/info`)
      context.commit('TUITIONS_BANNER', data.data)
      context.commit('sidebar/toggleLoader', false, { root: true })
    } catch (error) {
      console.log('Error: ' + error)
      context.commit('sidebar/toggleLoader', false, { root: true })
    }
  },
}

const mutations = {
  GRADUATE_LIST(state, graduateList) {
    state.graduateList = graduateList
  },
  GRADUATION_NOTE(state, section) {
    state.graduationNote = section
  },
  GETWAIVER_LIST(state, getWaiverList) {
    state.getWaiverList = getWaiverList
  },
  MERIT_WAIVER(state, meritWaiverList) {
    state.meritWaiverList = meritWaiverList
  },
  ALLUNDER_GRADUATE(state, underGraduateList) {
    state.underGraduateList = underGraduateList
  },
  UNDERGRADUATES_NOTE(state, section) {
    state.underGraduationNote = section
  },
  TUITIONS_BANNER(state, tuitions_banner) {
    state.tuitions_banner = tuitions_banner
  },
}
export default {
  state,
  getters,
  actions,
  mutations,
}
