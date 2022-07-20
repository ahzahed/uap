/* eslint-disable no-console */
/* eslint-disable camelcase */
const state = () => ({
  research_resource_banner: {},
  research_type: [],
  resource_type: [],
  research: {},
  resource: {},
})

const getters = {
  research_resource_banner: (state) => state.research_resource_banner,
  research_type: (state) => state.research_type,
  resource_type: (state) => state.resource_type,
  research: (state) => state.research,
  resource: (state) => state.resource,
}

const actions = {
  // Resource
  getResearchResourceBanner(context, value) {
    return new Promise((resolve, reject) => {
      context.commit('sidebar/toggleLoader', true, { root: true })
      this.$axios
        .get(
          `/department/resource/research/page/setting/${value.department}/${value.id}`
        )
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

  getResource(context, value) {
    return new Promise((resolve, reject) => {
      context.commit('sidebar/toggleLoader', true, { root: true })
      this.$axios
        .get(
          `/department/resource/research/${value.department}/Resources/${value.id}`
        )
        .then((result) => {
          context.commit('sidebar/toggleLoader', false, { root: true })
          resolve(result)

          context.commit('RESOURCE', result.data)
        })
        .catch((error) => {
          reject(error)
        })
    })
  },
  getResearch(context, value) {
    return new Promise((resolve, reject) => {
      context.commit('sidebar/toggleLoader', true, { root: true })
      this.$axios
        .get(
          `/department/resource/research/${value.department}/Research/${value.id}`
        )
        .then((result) => {
          context.commit('sidebar/toggleLoader', false, { root: true })
          resolve(result)

          context.commit('RESEARCH', result.data)
        })
        .catch((error) => {
          reject(error)
        })
    })
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
  RESEARCH(state, section) {
    state.research = section
  },
  RESOURCE(state, section) {
    state.resource = section
  },
}
export default {
  state,
  getters,
  actions,
  mutations,
}
