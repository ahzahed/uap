/* eslint-disable no-console */
/* eslint-disable camelcase */
const state = () => ({
  schoolList: [],
  departmentListUnderSchool: [],
  deanOfSchool: {},
})

const getters = {
  schoolList: (state) => state.schoolList,
  departmentListUnderSchool: (state) => state.departmentListUnderSchool,
  deanOfSchool: (state) => state.deanOfSchool,
}

const actions = {
  getSchoolList(context) {
    return new Promise((resolve, reject) => {
      context.commit('sidebar/toggleLoader', true, { root: true })
      this.$axios
        .get(`/school`)
        .then((result) => {
          context.commit('sidebar/toggleLoader', false, { root: true })
          resolve(result)
          context.commit('SCHOOL_LIST', result.data)
        })
        .catch((error) => {
          context.commit('sidebar/toggleLoader', false, { root: true })
          reject(error)
        })
    })
  },

  async getDepartmentListUnderSchool(context, value) {
    const data = await this.$axios.get(`/department/of/school/${value}`)
    context.commit('DEPARTMENT_LIST_UNDER_SCHOOL', data.data)
  },

  async getDeanOfSchool(context, value) {
    const data = await this.$axios.get(`/dean/${value}`)
    context.commit('DEAN_OF_SCHOOL', data.data)
  },
}

const mutations = {
  SCHOOL_LIST(state, section) {
    state.schoolList = section
  },
  DEPARTMENT_LIST_UNDER_SCHOOL(state, section) {
    state.departmentListUnderSchool = section
  },
  DEAN_OF_SCHOOL(state, section) {
    state.deanOfSchool = section
  },
}
export default {
  state,
  getters,
  actions,
  mutations,
}
