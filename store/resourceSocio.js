/* eslint-disable no-console */
/* eslint-disable camelcase */
const state = () => ({
  resourse_socio_banner: {},
  resourse_socio_section: [],
  resourse_socio_details: {},
  topics: [],
})

const getters = {
  resourse_socio_banner: (state) => state.resourse_socio_banner,
  resourse_socio_section: (state) => state.resourse_socio_section,
  resourse_socio_details: (state) => state.resourse_socio_details,
  topics: (state) => state.topics,
}

const actions = {
  getResourseSocioBanner(context) {
    return new Promise((resolve, reject) => {
      context.commit('sidebar/toggleLoader', true, { root: true })
      this.$axios
        .get(`/resourse/SocioCounseling/Mentalhealthcare/page/setting`)
        .then((result) => {
          context.commit('sidebar/toggleLoader', false, { root: true })
          resolve(result)
          if (result.data) {
            result.data.image = this.$config.baseURL + result.data.image
          }
          context.commit('RESOURSE_SOCIO_BANNER', result.data)
        })
        .catch((error) => {
          reject(error)
        })
    })
  },

  getResourceSocioSection(context) {
    return new Promise((resolve, reject) => {
      context.commit('sidebar/toggleLoader', true, { root: true })
      this.$axios
        .get(`/resourse/SocioCounseling/Mentalhealthcare/type`)
        .then((result) => {
          context.commit('sidebar/toggleLoader', false, { root: true })
          resolve(result)
          result.data.forEach((element) => {
            element.section = element.healthcare_service_name
          })
          context.commit('RESOURSE_SOCIO_SECTION', result.data)
        })
        .catch((error) => {
          reject(error)
        })
    })
  },

  async getRessourceSocioDetailsFirstLoad(context, id) {
    const data = await this.$axios.get(
      `/resourse/SocioCounseling/Mentalhealthcare/${id}`
    )
    context.commit('RESOURSE_SOCIO_DETAILS', data.data)
  },
  async getResourceSocioDetails(context, value) {
    const data = await this.$axios.get(
      `/resourse/SocioCounseling/Mentalhealthcare/${value.history.current.query.id}`
    )
    context.commit('RESOURSE_SOCIO_DETAILS', data.data)
  },

  async eventPagination(context, value) {
    const data = await this.$axios.get(
      `/resourse/SocioCounseling/Mentalhealthcare/${value.id.history.current.query.id}?page=${value.page}`
    )
    context.commit('RESOURSE_SOCIO_DETAILS', data.data)
  },

  async topicList(context) {
    const data = await this.$axios.get(
      `/resourse/SocioCounseling/Mentalhealthcare/event/topic`
    )
    context.commit('TOPIC_LIST', data.data)
  },

  async filterByEvent(context, payload) {
    const data = await this.$axios.get(
      `/resourse/SocioCounseling/Mentalhealthcare/event/${payload.date}/${payload.topic}/${payload.status}/filter`
    )
    context.commit('RESOURSE_SOCIO_DETAILS', data)
  },
}

const mutations = {
  RESOURSE_SOCIO_BANNER(state, section) {
    state.resourse_socio_banner = section
  },
  RESOURSE_SOCIO_SECTION(state, section) {
    state.resourse_socio_section = section
  },
  RESOURSE_SOCIO_DETAILS(state, section) {
    state.resourse_socio_details = section
  },
  TOPIC_LIST(state, topics) {
    state.topics = topics
  },
}
export default {
  state,
  getters,
  actions,
  mutations,
}
