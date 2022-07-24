/* eslint-disable no-console */
/* eslint-disable camelcase */
const state = () => ({
  banner: {},
  dsws: {},
  events: [],
  upcoming_events: [],
  parent_categories: [],
  topics: [],
})

const getters = {
  banner: (state) => state.banner,
  dsws: (state) => state.dsws,
  upcoming_events: (state) => state.upcoming_events,
  events: (state) => state.events,
  topics: (state) => state.topics,
}

const actions = {
  getRulesBanner(context) {
    return new Promise((resolve, reject) => {
      context.commit('sidebar/toggleLoader', true, { root: true })
      this.$axios
        .get(`/dsws/page/setting`)
        .then((result) => {
          context.commit('sidebar/toggleLoader', false, { root: true })
          resolve(result)
          if (result.data) {
            result.data.image = this.$config.baseURL + result.data.image
          }
          console.log(result.data);
          context.commit('BANNER', result.data)
        })
        .catch((error) => {
          reject(error)
        })
    })
  },

  async getDsws(context, page) {
    const data = await this.$axios.get(`/dsws`)
    context.commit('DSWS', data.data)
  },

  async allEventList(context, page) {
    const data = await this.$axios.get(`/dsws/event?page=${page}`)
    context.commit('EVENTS', data.data)
  },
  async topicList(context) {
    const data = await this.$axios.get(`/dsws/event/type`)
    context.commit('TOPIC_LIST', data.data)
  },

  async filterByEvent(context, payload) {
    const data = await this.$axios.get(
      `/dsws/event/${payload.date}/${payload.topic}/${payload.status}/filter`
    )
    context.commit('DATA', data)
  },
}

const mutations = {
  BANNER(state, section) {
    state.banner = section
  },
  DSWS(state, section) {
    state.dsws = section
  },
  EVENTS(state, events) {
    state.events = events
  },
  UPCOMING_EVENT(state, upcoming_events) {
    state.upcoming_events = upcoming_events
  },
  TOPIC_LIST(state, topics) {
    state.topics = topics
  },
  DETAILS(state, details) {
    state.details = details
  },
}
export default {
  state,
  getters,
  actions,
  mutations,
}
