/* eslint-disable no-console */
/* eslint-disable camelcase */
const state = () => ({
  vision: {},
  mission: {},
  insideUp: {},
  insideVideo: {},
  head_message: {},
  departmentList: [],
  departmentHeader: [],
  departmentFactFigure: [],
})

const getters = {
  vision: (state) => state.vision,
  mission: (state) => state.mission,
  insideUp: (state) => state.insideUp,
  insideVideo: (state) => state.insideVideo,
  head_message: (state) => state.head_message,
  departmentList: (state) => state.departmentList,
  departmentHeader: (state) => state.departmentHeader,
  departmentFactFigure: (state) => state.departmentFactFigure,
}

const actions = {
  getDepartmentList(context) {
    return new Promise((resolve, reject) => {
      context.commit('sidebar/toggleLoader', true, { root: true })
      this.$axios
        .get(`/department`)
        .then((result) => {
          context.commit('sidebar/toggleLoader', false, { root: true })
          resolve(result)
          context.commit('DEPARTMENT_LIST', result.data)
        })
        .catch((error) => {
          context.commit('sidebar/toggleLoader', false, { root: true })
          reject(error)
        })
    })
  },
  departmentHeader(context, value) {
    return new Promise((resolve, reject) => {
      context.commit('sidebar/toggleLoader', true, { root: true })
      this.$axios
        .get(`/department/header/${value}`)
        .then((result) => {
          context.commit('sidebar/toggleLoader', false, { root: true })
          resolve(result)
          context.commit('DEPARTMENT_HEADER', result.data)
        })
        .catch((error) => {
          context.commit('sidebar/toggleLoader', false, { root: true })
          reject(error)
        })
    })
  },
  departmentInsideVideo(context, value) {
    return new Promise((resolve, reject) => {
      context.commit('sidebar/toggleLoader', true, { root: true })
      this.$axios
        .get(`/department/inside/video/${value}`)
        .then((result) => {
          context.commit('sidebar/toggleLoader', false, { root: true })
          resolve(result)
          context.commit('INSIDE_VIDEO', result.data)
        })
        .catch((error) => {
          context.commit('sidebar/toggleLoader', false, { root: true })
          reject(error)
        })
    })
  },

  async getDepartmentVision(context, value) {
    const data = await this.$axios.get(`/department/vission/${value}`)
    context.commit('VISION_DATA', data.data)
  },
  async getDepartmentMission(context, value) {
    const data = await this.$axios.get(`/department/mission/${value}`)
    context.commit('MISSION_DATA', data.data)
  },

  async getDepartmentInsideUap(context, value) {
    const data = await this.$axios.get(`/department/inside/video/${value}`)
    context.commit('INSIDE_UAP', data.data)
  },

  async getDepartmentHeadMsg(context, value) {
    const data = await this.$axios.get(`/department/head/message/${value}`)
    context.commit('HEAD_MESSAGE', data.data)
  },
  async getDepartmentFactFigure(context, value) {
    const data = await this.$axios.get(`/department/fact/figure/${value}`)
    context.commit('FACT_FIGURE', data.data)
  },
}

const mutations = {
  DEPARTMENT_LIST(state, departmentList) {
    state.departmentList = departmentList
  },
  DEPARTMENT_HEADER(state, departmentHeader) {
    state.departmentHeader = departmentHeader
  },
  VISION_DATA(state, vision) {
    state.vision = vision
  },
  MISSION_DATA(state, mission) {
    state.mission = mission
  },
  INSIDE_UAP(state, insideUp) {
    state.insideUp = insideUp
  },
  INSIDE_VIDEO(state, insideVideo) {
    state.insideVideo = insideVideo
  },
  HEAD_MESSAGE(state, head_message) {
    state.head_message = head_message
  },
  FACT_FIGURE(state, departmentFactFigure) {
    state.departmentFactFigure = departmentFactFigure
  },
}
export default {
  state,
  getters,
  actions,
  mutations,
}
