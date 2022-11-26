/* eslint-disable no-console */
/* eslint-disable camelcase */
const state = () => ({
  events: [],
  events_section: [],
  banner: {},
  upcoming_events: [],
  parent_categories: [],
  topics: {},
})

const getters = {
  upcoming_events: (state) => state.upcoming_events,
  events_section: (state) => state.events_section,
  events: (state) => state.events,
  topics: (state) => state.topics,
  banner: (state) => state.banner,
}

const actions = {
  allEventsSection(context, value) {
    return new Promise((resolve, reject) => {
      context.commit('sidebar/toggleLoader', true, { root: true })
      this.$axios
        .get(`/department/event/topics/${value}`)
        .then((result) => {
          context.commit('sidebar/toggleLoader', false, { root: true })
          resolve(result)
          context.commit('EVENTS_SECTION', result.data)
        })
        .catch((error) => {
          reject(error)
        })
    })
  },
  async depEventBanner(context, payload) {
    const data = await this.$axios.get(
      `/department/event/page/setting/${payload}`
    )
    data.data.image = this.$config.baseURL + data.data.image
    context.commit('BANNER', data.data)
  },
  async allEventList(context, payload) {
    const data = await this.$axios.get(
      `/department/event/${payload.depatment}?page=${payload.page}`
    )

    context.commit('DATA', data.data)
  },
  async topicList(context) {
    const data = await this.$axios.get(`/event/topic/list`)
    context.commit('TOPIC_LIST', data.data)
  },
  async upcomingeventlist(context) {
    const data = await this.$axios.get(`/event/upcoming/list`)
    context.commit('UPCOMING_EVENT', data.data)
  },
  async filterByEvent(context, payload) {
    const data = await this.$axios.get(
      `/event/${payload.date}/${payload.topic}/filter`
    )
    context.commit('DATA', data.data)
  },
}

const mutations = {
  DATA(state, events) {
    state.events = events
  },
  BANNER(state, banner) {
    state.banner = banner
  },
  UPCOMING_EVENT(state, upcoming_events) {
    state.upcoming_events = upcoming_events
  },
  TOPIC_LIST(state, topics) {
    state.topics = topics
  },
  EVENTS_SECTION(state, section) {
    state.events_section = section
  },
  DETAILS(state, details) {
    state.details = details
  },
  CREATED(state) {},
  SHOW(state) {},
}
export default {
  state,
  getters,
  actions,
  mutations,
}
