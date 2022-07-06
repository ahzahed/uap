/* eslint-disable no-console */
/* eslint-disable camelcase */
const state = () => ({
  iqac_banner: {},
  iqac_section: [],
  iqac_details: {},
  topics: [],
})

const getters = {
  iqac_banner: (state) => state.iqac_banner,
  iqac_section: (state) => state.iqac_section,
  iqac_details: (state) => state.iqac_details,
  topics: (state) => state.topics,
}

const actions = {
  getIqacBanner(context) {
    return new Promise((resolve, reject) => {
      context.commit('sidebar/toggleLoader', true, { root: true })
      this.$axios
        .get(`/iqac/page/setting`)
        .then((result) => {
          context.commit('sidebar/toggleLoader', false, { root: true })
          resolve(result)
          if (result.data) {
            result.data.image = this.$config.baseURL + result.data.image
          }
          context.commit('IQAC_BANNER', result.data)
        })
        .catch((error) => {
          reject(error)
        })
    })
  },

  getIqacSection(context) {
    return new Promise((resolve, reject) => {
      context.commit('sidebar/toggleLoader', true, { root: true })
      this.$axios
        .get(`/iqac/type`)
        .then((result) => {
          context.commit('sidebar/toggleLoader', false, { root: true })
          resolve(result)

          context.commit('IQAC_SECTION', result.data)
        })
        .catch((error) => {
          reject(error)
        })
    })
  },

  async getIqacDetailsFirstLoad(context, id) {
    const data = await this.$axios.get(`/iqac/detail/${id}`)
    context.commit('IQAC_DETAILS', data.data)
  },
  async getIqacDetails(context, value) {
    const data = await this.$axios.get(
      `/iqac/detail/${value.history.current.query.id}`
    )

    context.commit('IQAC_DETAILS', data.data)
  },

  async eventPagination(context, value) {
    const data = await this.$axios.get(
      `/iqac/detail/${value.id.history.current.query.id}?page=${value.page}`
    )
    context.commit('IQAC_DETAILS', data.data)
  },

  async topicList(context) {
    const data = await this.$axios.get(`/iqac/event/topic`)
    context.commit('TOPIC_LIST', data.data)
  },

  // async filterByEvent(context, payload) {
  //   const data = await this.$axios.get(
  //     `/resourse/SocioCounseling/Mentalhealthcare/event/${payload.date}/${payload.topic}/${payload.status}/filter`
  //   )
  //   context.commit('IQAC_DETAILS', data)
  // },
}

const mutations = {
  IQAC_BANNER(state, section) {
    state.iqac_banner = section
  },
  IQAC_SECTION(state, section) {
    state.iqac_section = section
  },
  IQAC_DETAILS(state, section) {
    state.iqac_details = section
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
