/* eslint-disable no-console */
/* eslint-disable camelcase */
const state = () => ({
  research_resource_banner: {},
  research_type: [],
  resource_type: [],
  research_resource: {},
})

const getters = {
  research_resource_banner: (state) => state.research_resource_banner,
  research_type: (state) => state.research_type,
  resource_type: (state) => state.resource_type,
  research_resource: (state) => state.research_resource,
}

const actions = {
  // Resource
  getResearchResourceBanner(context, value) {
    return new Promise((resolve, reject) => {
      context.commit('sidebar/toggleLoader', true, { root: true })
      this.$axios
        .get(`/department/tuition/fee/home/page/setting/${value}`)
        .then((result) => {
          context.commit('sidebar/toggleLoader', false, { root: true })
          resolve(result)
          if (result.data) {
            result.data.image = this.$config.baseURL + result.data.image
          }
          context.commit('RESEARCH_RESOURCE_BANNER', result.data)
        })
        .catch((error) => {
          reject(error)
        })
    })
  },

  getResearchType(context, value) {
    return new Promise((resolve, reject) => {
      context.commit('sidebar/toggleLoader', true, { root: true })
      this.$axios
        .get(`/department/resource/research/type/${value}/Research`)
        .then((result) => {
          context.commit('sidebar/toggleLoader', false, { root: true })
          resolve(result)
          context.commit('RESEARCH_TYPE', result.data)
        })
        .catch((error) => {
          reject(error)
        })
    })
  },

  getResourceType(context, value) {
    return new Promise((resolve, reject) => {
      context.commit('sidebar/toggleLoader', true, { root: true })
      this.$axios
        .get(`/department/resource/research/type/${value}/Resources`)
        .then((result) => {
          context.commit('sidebar/toggleLoader', false, { root: true })
          resolve(result)
          context.commit('RESOURCE_TYPE', result.data)
        })
        .catch((error) => {
          reject(error)
        })
    })
  },

  getEmptyResearchType(context) {
    const data = []
    context.commit('RESEARCH_TYPE', data)
  },
  getEmptyResourceType(context) {
    const data = []
    context.commit('RESOURCE_TYPE', data)
  },

  async getResearchResource(context, value) {
    const data = await this.$axios.get(
      `/department/tuition/fee/special/note/${value}`
    )
    context.commit('RESEARCH_RESOURCE', data.data)
  },
}

const mutations = {
  RESEARCH_RESOURCE_BANNER(state, section) {
    state.research_resource_banner = section
  },
  RESEARCH_TYPE(state, section) {
    state.research_type = section
  },
  RESOURCE_TYPE(state, section) {
    state.resource_type = section
  },
  RESEARCH_RESOURCE(state, section) {
    state.research_resource = section
  },
}
export default {
  state,
  getters,
  actions,
  mutations,
}
