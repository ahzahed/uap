/* eslint-disable no-console */
/* eslint-disable camelcase */
const state = () => ({
  exam_schedule_banner: {},
  exam_schedule_body: [],
  semesters: [],
  sections: [],
})

const getters = {
  exam_schedule_banner: (state) => state.exam_schedule_banner,
  exam_schedule_body: (state) => state.exam_schedule_body,
  semesters: (state) => state.semesters,
  sections: (state) => state.sections,
}

const actions = {
  getExamScheduleBanner(context, value) {
    return new Promise((resolve, reject) => {
      context.commit('sidebar/toggleLoader', true, { root: true })
      this.$axios
        .get(`/department/exam/schedule/page/setting/${value}`)
        .then((result) => {
          context.commit('sidebar/toggleLoader', false, { root: true })
          resolve(result)
          if (result.data) {
            result.data.image = this.$config.baseURL + result.data.image
            result.data.thumbnail = this.$config.baseURL + result.data.thumbnail
          }
          context.commit('EXAM_SCHEDULE_BANNER', result.data)
        })
        .catch((error) => {
          reject(error)
        })
    })
  },
  async getSemesters(context, value) {
    const data = await this.$axios.get(
      `/department/exam/schedule/semester/${value}`
    )
    context.commit('SEMESTERS', data.data)
  },
  async getSections(context, value) {
    const data = await this.$axios.get(
      `/department/exam/schedule/section/${value.department.history.current.params.department}/${value.id}`
    )
    context.commit('SECTIONS', data.data)
  },
  async getExamScheduleBody(context, value) {
    const data = await this.$axios.get(
      `/department/exam/schedule/${value.department.history.current.params.department}/${value.semester}/${value.section}`
    )
    context.commit('EXAM_SCHEDULE_BODY', data.data)
  },
}

const mutations = {
  EXAM_SCHEDULE_BANNER(state, section) {
    state.exam_schedule_banner = section
  },
  SEMESTERS(state, section) {
    state.semesters = section
  },
  SECTIONS(state, section) {
    state.sections = section
  },
  EXAM_SCHEDULE_BODY(state, section) {
    state.class_schedule_body = section
  },
}
export default {
  state,
  getters,
  actions,
  mutations,
}
