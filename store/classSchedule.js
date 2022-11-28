/* eslint-disable no-console */
/* eslint-disable camelcase */
const state = () => ({
  class_schedule_banner: {},
  class_schedule_body: {},
  programs: [],
  semesters: [],
  sections: [],
})

const getters = {
  class_schedule_banner: (state) => state.class_schedule_banner,
  class_schedule_body: (state) => state.class_schedule_body,
  programs: (state) => state.programs,
  semesters: (state) => state.semesters,
  sections: (state) => state.sections,
}

const actions = {
  getClassScheduleBanner(context, value) {
    return new Promise((resolve, reject) => {
      context.commit('sidebar/toggleLoader', true, { root: true })
      this.$axios
        .get(`/department/class/schedule/page/setting/${value}`)
        .then((result) => {
          context.commit('sidebar/toggleLoader', false, { root: true })
          resolve(result)
          if (result.data) {
            result.data.image = this.$config.baseURL + result.data.image
            result.data.thumbnail = this.$config.baseURL + result.data.thumbnail
          }
          context.commit('CLASS_SCHEDULE_BANNER', result.data)
        })
        .catch((error) => {
          reject(error)
        })
    })
  },
  async getPrograms(context, value) {
    const data = await this.$axios.get(
      `/department/class/schedule/program/${value}/class`
    )
    context.commit('PROGRAMS', data.data)
  },
  async getSemesters(context, value) {
    const data = await this.$axios.get(
      `/department/class/schedule/semester/${value.department.history.current.params.department}/${value.id}/class`
    )
    context.commit('SEMESTERS', data.data)
  },
  async getSections(context, value) {
    const data = await this.$axios.get(
      `/department/class/schedule/section/${value.department.history.current.params.department}/${value.id}/class`
    )
    context.commit('SECTIONS', data.data)
  },
  async getClassScheduleBody(context, value) {
    if (value.section) {
      const data = await this.$axios.get(
        `/department/class/schedule/${value.department.history.current.params.department}/class/${value.program}/${value.semester}/${value.section}`
      )
      context.commit('CLASS_SCHEDULE_BODY', data.data)
    } else {
      const data = await this.$axios.get(
        `/department/class/schedule/${value.department.history.current.params.department}/class/${value.program}/${value.semester}`
      )
      context.commit('CLASS_SCHEDULE_BODY', data.data)
    }
  },
}

const mutations = {
  CLASS_SCHEDULE_BANNER(state, section) {
    state.class_schedule_banner = section
  },
  PROGRAMS(state, section) {
    state.programs = section
  },
  SEMESTERS(state, section) {
    state.semesters = section
  },
  SECTIONS(state, section) {
    state.sections = section
  },
  CLASS_SCHEDULE_BODY(state, section) {
    state.class_schedule_body = section
  },
}
export default {
  state,
  getters,
  actions,
  mutations,
}
