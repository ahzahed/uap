/* eslint-disable no-console */
/* eslint-disable camelcase */
const state = () => ({
  dep_club_banner: {},
  dep_club_body: {},
  dep_club_events: [],
  all_dep_club_events: [],
  dep_club_type: [],
})

const getters = {
  dep_club_banner: (state) => state.dep_club_banner,
  dep_club_body: (state) => state.dep_club_body,
  dep_club_events: (state) => state.dep_club_events,
  all_dep_club_events: (state) => state.all_dep_club_events,
  dep_club_type: (state) => state.dep_club_type,
}

const actions = {
  getDepClubBanner(context, value) {
    return new Promise((resolve, reject) => {
      context.commit('sidebar/toggleLoader', true, { root: true })
      this.$axios
        .get(`/department/club/page/setting/${value.department}/${value.slug}`)
        .then((result) => {
          context.commit('sidebar/toggleLoader', false, { root: true })
          resolve(result)
          if (result.data) {
            result.data.image = this.$config.baseURL + result.data.image
            result.data.thumbnail = this.$config.baseURL + result.data.thumbnail
          }
          context.commit('DEP_CLUB_BANNER', result.data)
        })
        .catch((error) => {
          reject(error)
        })
    })
  },
  async getDepClubBody(context, value) {
    const data = await this.$axios.get(
      `/department/club/${value.department}/${value.slug}`
    )
    if (data.data) {
      data.data.introduction_image =
        this.$config.baseURL + data.data.introduction_image
    }
    context.commit('DEP_CLUB_BODY', data.data)
  },
  async getDepClubEvents(context, value) {
    const data = await this.$axios.get(
      `/department/club/event/${value.department}/${value.slug}`
    )

    context.commit('DEP_CLUB_EVENTS', data.data)
  },
  async getAllDepClubEvents(context, value) {
    const data = await this.$axios.get(
      `/department/club/event/all/${value.department}/${value.slug}`
    )

    context.commit('ALL_DEP_CLUB_EVENTS', data.data)
  },

  getDepClubType(context, value) {
    return new Promise((resolve, reject) => {
      context.commit('sidebar/toggleLoader', true, { root: true })
      this.$axios
        .get(`/department/club/type/${value}`)
        .then((result) => {
          context.commit('sidebar/toggleLoader', false, { root: true })
          resolve(result)
          context.commit('DEP_CLUB_TYPE', result.data)
        })
        .catch((error) => {
          reject(error)
        })
    })
  },

  getEmptyDepClubType(context) {
    const data = []
    context.commit('DEP_CLUB_TYPE', data)
  },
}

const mutations = {
  DEP_CLUB_BANNER(state, dep_club_banner) {
    state.dep_club_banner = dep_club_banner
  },
  DEP_CLUB_BODY(state, dep_club_body) {
    state.dep_club_body = dep_club_body
  },
  DEP_CLUB_EVENTS(state, dep_club_events) {
    state.dep_club_events = dep_club_events
  },
  ALL_DEP_CLUB_EVENTS(state, section) {
    state.all_dep_club_events = section
  },
  DEP_CLUB_TYPE(state, section) {
    state.dep_club_type = section
  },
}
export default {
  state,
  getters,
  actions,
  mutations,
}
