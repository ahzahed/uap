/* eslint-disable no-console */
/* eslint-disable camelcase */
const state = () => ({
  banner: {},
  alumniStories: [],
  allAlumniStories: [],
  generalAllAlumniStories: [],
})

const getters = {
  banner: (state) => state.banner,
  alumniStories: (state) => state.alumniStories,
  allAlumniStories: (state) => state.allAlumniStories,
  generalAllAlumniStories: (state) => state.generalAllAlumniStories,
}

const actions = {
  alumniHeader(context, preload) {
    return new Promise((resolve, reject) => {
      context.commit('sidebar/toggleLoader', true, { root: true })
      this.$axios
        .get(`/department/alumni/home/page/setting/${preload}`)
        .then((result) => {
          context.commit('sidebar/toggleLoader', false, { root: true })
          resolve(result)
          result.data.image = this.$config.baseURL + result.data.image
          context.commit('BANNER', result.data)
        })
        .catch((error) => {
          reject(error)
        })
    })
  },
  // 3 Alumni for homepage
  async getAlumniStories(context, preload) {
    const data = await this.$axios.get(`/department/alumni/story/${preload}`)
    context.commit('ALUMNI_STORIES', data.data)
  },
  // async getAlumniStories(context, preload) {
  //   try {
  //     context.commit('sidebar/toggleLoader', true, { root: true })
  //     const data = await this.$axios.get(`/department/alumni/story/${preload}`)
  //     context.commit('ALUMNI_STORIES', data.data)
  //     context.commit('sidebar/toggleLoader', false, { root: true })
  //   } catch (error) {
  //     context.commit('sidebar/toggleLoader', false, { root: true })
  //   }
  // },

  // All Alumni
  async getAllAlumniStories(context, preload) {
    const data = await this.$axios.get(
      `/department/alumni/story/index/${preload}`
    )
    context.commit('ALL_ALUMNI_STORIES', data.data)
  },
  // async getAllAlumniStories(context, preload) {
  //   try {
  //     context.commit('sidebar/toggleLoader', true, { root: true })
  //     const data = await this.$axios.get(
  //       `/department/alumni/story/index/${preload}`
  //     )
  //     context.commit('ALL_ALUMNI_STORIES', data.data)
  //     context.commit('sidebar/toggleLoader', false, { root: true })
  //   } catch (error) {
  //     context.commit('sidebar/toggleLoader', false, { root: true })
  //   }
  // },
  async getGeneralAllAlumniStories(context) {
    const data = await this.$axios.get(`/all/alumni/story`)
    context.commit('GENERAL_ALL_ALUMNI_STORIES', data.data)
  },
}

const mutations = {
  BANNER(state, preload) {
    state.banner = preload
  },
  ALUMNI_STORIES(state, alumniStories) {
    state.alumniStories = alumniStories
  },
  ALL_ALUMNI_STORIES(state, section) {
    state.allAlumniStories = section
  },
  GENERAL_ALL_ALUMNI_STORIES(state, section) {
    state.generalAllAlumniStories = section
  },
}

export default {
  state,
  getters,
  actions,
  mutations,
}
