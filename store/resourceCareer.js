/* eslint-disable no-console */
/* eslint-disable camelcase */
const state = () => ({
  resourse_career_banner: {},
  resourse_career_overview: {},
  events: [],
  topics: [],
  extra_events: {},
})

const getters = {
  resourse_career_banner: (state) => state.resourse_career_banner,
  resourse_career_overview: (state) => state.resourse_career_overview,
  events: (state) => state.events,
  topics: (state) => state.topics,
  extra_events: (state) => state.extra_events,
}

const actions = {
  getResourseCareerBanner(context) {
    return new Promise((resolve, reject) => {
      context.commit('sidebar/toggleLoader', true, { root: true })
      this.$axios
        .get(`/resourse/career/councelling/page/setting`)
        .then((result) => {
          context.commit('sidebar/toggleLoader', false, { root: true })
          resolve(result)
          if (result.data) {
            result.data.image = this.$config.baseURL + result.data.image
          }
          context.commit('RESOURSE_CAREER_BANNER', result.data)
        })
        .catch((error) => {
          reject(error)
        })
    })
  },

  async getResourceCareerOverview(context) {
    const data = await this.$axios.get(`/resourse/career/councelling/overview`)
    context.commit('RESOURSE_CAREER_OVERVIEW', data.data)
  },

  async allEventList(context, page) {
    const data = await this.$axios.get(
      `/resourse/career/councelling/event?page=${page}`
    )
    context.commit('DATA', data.data)
  },

  async getExtraEvent(context) {
    const data = await this.$axios.get(
      `/resourse/career/councelling/event/extra`
    )
    context.commit('EXTRA_EVENTS', data.data)
  },
  async topicList(context) {
    const data = await this.$axios.get(
      `/resourse/career/councelling/event/topic`
    )
    context.commit('TOPIC_LIST', data.data)
  },
  async filterByEvent(context, payload) {
    const data = await this.$axios.get(
      `/resourse/career/councelling/event/${payload.date}/${payload.topic}/${payload.status}/filter`
    )
    context.commit('DATA', data)
  },
}

const mutations = {
  RESOURSE_CAREER_BANNER(state, section) {
    state.resourse_career_banner = section
  },
  RESOURSE_CAREER_OVERVIEW(state, section) {
    state.resourse_career_overview = section
  },
  DATA(state, events) {
    state.events = events
  },
  TOPIC_LIST(state, topics) {
    state.topics = topics
  },
  EXTRA_EVENTS(state, section) {
    state.extra_events = section
  },
}
export default {
  state,
  getters,
  actions,
  mutations,
}
