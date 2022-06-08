/* eslint-disable no-console */
/* eslint-disable camelcase */
const state = () => ({
  graduateCost: [],
  underGraduateCost: [],
  specialNote: {},
  tuition_fees_banner: {},
})

const getters = {
  graduateCost: (state) => state.graduateCost,
  underGraduateCost: (state) => state.underGraduateCost,
  specialNote: (state) => state.specialNote,
  tuition_fees_banner: (state) => state.tuition_fees_banner,
}

const actions = {
  getTuitionFeesBanner(context, value) {
    return new Promise((resolve, reject) => {
      context.commit('sidebar/toggleLoader', true, { root: true })
      this.$axios
        .get(`/department/tuition/fee/home/page/setting/${value}`)
        .then((result) => {
          context.commit('sidebar/toggleLoader', false, { root: true })
          resolve(result)
          if (result.data) {
            result.data.image = this.$config.baseURL + result.data.image
          }
          context.commit('TUITION_FEES_BANNER', result.data)
        })
        .catch((error) => {
          reject(error)
        })
    })
  },
  graduateCost(context, value) {
    return new Promise((resolve, reject) => {
      context.commit('sidebar/toggleLoader', true, { root: true })
      this.$axios
        .get(`/department/tuition/fee/graduate/program/cost/${value}`)
        .then((result) => {
          context.commit('GRADUATE_COST', result.data)
          context.commit('sidebar/toggleLoader', false, { root: true })
          resolve(result)
        })
        .catch((error) => {
          context.commit('sidebar/toggleLoader', false, { root: true })
          reject(error)
        })
    })
  },
  // underGraduateCost(context, value) {
  //   return new Promise((resolve, reject) => {
  //     context.commit('sidebar/toggleLoader', true, { root: true })
  //     this.$axios
  //       .get(`/department/tuition/fee/undergraduate/program/cost/${value}`)
  //       .then((result) => {
  //         context.commit('UNDERGRADUATE_COST', result.data)
  //         context.commit('sidebar/toggleLoader', false, { root: true })
  //         resolve(result)
  //       })
  //       .catch((error) => {
  //         context.commit('sidebar/toggleLoader', false, { root: true })
  //         reject(error)
  //       })
  //   })
  // },
  async underGraduateCost(context, value) {
    const data = await this.$axios.get(
      `/department/tuition/fee/undergraduate/program/cost/${value}`
    )
    context.commit('UNDERGRADUATE_COST', data.data)
  },
  async specialNote(context, value) {
    const data = await this.$axios.get(
      `/department/tuition/fee/special/note/${value}`
    )
    context.commit('SPECIAL_NOTE', data.data)
  },
}

const mutations = {
  GRADUATE_COST(state, graduateCost) {
    state.graduateCost = graduateCost
  },
  UNDERGRADUATE_COST(state, underGraduateCost) {
    state.underGraduateCost = underGraduateCost
  },
  SPECIAL_NOTE(state, specialNote) {
    state.specialNote = specialNote
  },
  TUITION_FEES_BANNER(state, tuition_fees_banner) {
    state.tuition_fees_banner = tuition_fees_banner
  },
}
export default {
  state,
  getters,
  actions,
  mutations,
}
