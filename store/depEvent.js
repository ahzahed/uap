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
  // async depEventBanner(context, payload) {
  //   const data = await this.$axios.get(
  //     `/department/event/page/setting/${payload}`
  //   )
  //   data.data.image = this.$config.baseURL + data.data.image
  //   context.commit('BANNER', data.data)
  // },

  depEventBanner(context, payload) {
    return new Promise((resolve, reject) => {
      context.commit('sidebar/toggleLoader', true, { root: true })
      this.$axios
        .get(`/department/event/page/setting/${payload}`)
        .then((result) => {
          context.commit('sidebar/toggleLoader', false, { root: true })
          resolve(result)
          if (result.data) {
            result.data.image = this.$config.baseURL + result.data.image
          }
          context.commit('BANNER', result.data)
        })
        .catch((error) => {
          reject(error)
        })
    })
  },

  allEventsSection(context, value) {
    return new Promise((resolve, reject) => {
      context.commit('sidebar/toggleLoader', true, { root: true })
      this.$axios
        .get(`/department/event/topics/${value}`)
        .then((result) => {
          context.commit('sidebar/toggleLoader', false, { root: true })
          if (result.data) {
            result.data.forEach((item) => {
              item.section = item.slug
            })
          }
          context.commit('EVENTS_SECTION', result.data)
          resolve(result)
        })
        .catch((error) => {
          reject(error)
        })
    })
  },

  async allEventList(context, payload) {
    try {
      context.commit('sidebar/toggleLoader', true, { root: true })
      const data = await this.$axios.get(
        `/department/event/${payload.department}/${payload.slug}`
      )

      context.commit('DATA', data.data)
      context.commit('sidebar/toggleLoader', false, { root: true })
    } catch (error) {
      context.commit('sidebar/toggleLoader', false, { root: true })
    }
  },

  // async allEventList(context, payload) {
  //   const data = await this.$axios.get(
  //     `/department/event/${payload.department}/${payload.slug}`
  //   )

  //   context.commit('DATA', data.data)
  // },

  // async allEventList(context, payload) {
  //   try {
  //     context.commit('sidebar/toggleLoader', true, { root: true })
  //     const data = await this.$axios.get(
  //       `/department/event/${payload.depatment}/${payload.slug}?page=${payload.page}`
  //     )

  //     context.commit('DATA', data.data)
  //     context.commit('sidebar/toggleLoader', false, { root: true })
  //   } catch (error) {
  //     context.commit('sidebar/toggleLoader', false, { root: true })
  //   }
  // },

  // async topicList(context) {
  //   const data = await this.$axios.get(`/event/topic/list`)
  //   context.commit('TOPIC_LIST', data.data)
  // },
  // async upcomingeventlist(context) {
  //   const data = await this.$axios.get(`/event/upcoming/list`)
  //   context.commit('UPCOMING_EVENT', data.data)
  // },
  // async filterByEvent(context, payload) {
  //   const data = await this.$axios.get(
  //     `/event/${payload.date}/${payload.topic}/filter`
  //   )
  //   context.commit('DATA', data.data)
  // },
}

const mutations = {
  BANNER(state, banner) {
    state.banner = banner
  },
  EVENTS_SECTION(state, section) {
    state.events_section = section
  },
  DATA(state, events) {
    state.events = events
  },

  // UPCOMING_EVENT(state, upcoming_events) {
  //   state.upcoming_events = upcoming_events
  // },
  // TOPIC_LIST(state, topics) {
  //   state.topics = topics
  // },

  // DETAILS(state, details) {
  //   state.details = details
  // },
  // CREATED(state) {},
  // SHOW(state) {},
}
export default {
  state,
  getters,
  actions,
  mutations,
}
