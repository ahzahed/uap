/* eslint-disable no-console */
/* eslint-disable camelcase */
const state = () => ({
  tuition_waiver_banner: {},
  overview: {},
  new_student: [],
  new_student_note: {},
  current_student: [],
  current_student_note: {},
  special_waiver: {},
  general_criteria: {},
  calculator: {},
})

const getters = {
  tuition_waiver_banner: (state) => state.tuition_waiver_banner,
  overview: (state) => state.overview,
  new_student: (state) => state.new_student,
  new_student_note: (state) => state.new_student_note,
  current_student: (state) => state.current_student,
  current_student_note: (state) => state.current_student_note,
  special_waiver: (state) => state.special_waiver,
  general_criteria: (state) => state.general_criteria,
  calculator: (state) => state.calculator,
}

const actions = {
  getTuitionWaiverBanner(context, value) {
    return new Promise((resolve, reject) => {
      context.commit('sidebar/toggleLoader', true, { root: true })
      this.$axios
        .get(`/department/tuition/waiver/page/setting/${value}`)
        .then((result) => {
          context.commit('sidebar/toggleLoader', false, { root: true })
          resolve(result)
          if (result.data) {
            result.data.image = this.$config.baseURL + result.data.image
          }
          context.commit('TUITION_WAIVER_BANNER', result.data)
        })
        .catch((error) => {
          reject(error)
        })
    })
  },

  async getOverview(context, value) {
    const data = await this.$axios.get(
      `/department/tuition/waiver/overview/${value}`
    )
    context.commit('OVERVIEW', data.data)
  },

  async getNewStudent(context, value) {
    const data = await this.$axios.get(
      `/department/tuition/waiver/new/student/${value}`
    )
    context.commit('NEW_STUDENT', data.data)
  },
  async getNewStudentNote(context, value) {
    const data = await this.$axios.get(
      `/department/tuition/waiver/new/student/note/${value}`
    )
    context.commit('NEW_STUDENT_NOTE', data.data)
  },
  async getCurrentStudent(context, value) {
    const data = await this.$axios.get(
      `/department/tuition/waiver/current_student/${value}`
    )
    context.commit('CURRENT_STUDENT', data.data)
  },
  async getCurrentStudentNote(context, value) {
    const data = await this.$axios.get(
      `/department/tuition/waiver/current_student/note/${value}`
    )
    context.commit('CURRENT_STUDENT_NOTE', data.data)
  },
  async getSpecialWaiver(context, value) {
    const data = await this.$axios.get(
      `/department/tuition/waiver/special/waiver/other/assistances/${value}`
    )
    context.commit('SPECIAL_WAIVER', data.data)
  },
  async getGeneralCriteria(context, value) {
    const data = await this.$axios.get(
      `/departmen/tuition/waiver/general/criterios/${value}`
    )
    context.commit('GENERAL_CRITERIA', data.data)
  },
  async getCalculator(context, value) {
    const data = await this.$axios.get(
      `/departmen/tuition/waiver/calculator/${value}`
    )
    context.commit('CALCULATOR', data.data)
  },
}

const mutations = {
  TUITION_WAIVER_BANNER(state, tuition_waiver_banner) {
    state.tuition_waiver_banner = tuition_waiver_banner
  },
  OVERVIEW(state, overview) {
    state.overview = overview
  },
  NEW_STUDENT(state, new_student) {
    state.new_student = new_student
  },
  NEW_STUDENT_NOTE(state, section) {
    state.new_student_note = section
  },
  CURRENT_STUDENT(state, section) {
    state.current_student = section
  },
  CURRENT_STUDENT_NOTE(state, section) {
    state.current_student_note = section
  },
  SPECIAL_WAIVER(state, section) {
    state.special_waiver = section
  },
  GENERAL_CRITERIA(state, section) {
    state.general_criteria = section
  },
  CALCULATOR(state, section) {
    state.calculator = section
  },
}
export default {
  state,
  getters,
  actions,
  mutations,
}
