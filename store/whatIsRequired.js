const state = () => ({
  what_is_required_banner: {},
  graduate_section: [],
  graduate_details: {},

  undergraduate_section: [],
  undergraduate_details: {},
})

const getters = {
  what_is_required_banner: (state) => state.what_is_required_banner,
  graduate_section: (state) => state.graduate_section,
  graduate_details: (state) => state.graduate_details,

  undergraduate_section: (state) => state.undergraduate_section,
  undergraduate_details: (state) => state.undergraduate_details,
}

const actions = {
  getWhatIsRequiredBanner(context) {
    return new Promise((resolve, reject) => {
      context.commit('sidebar/toggleLoader', true, { root: true })
      this.$axios
        .get(`/what/is/required/page/setting`)
        .then((result) => {
          context.commit('sidebar/toggleLoader', false, { root: true })
          resolve(result)
          if (result.data) {
            result.data.image = this.$config.baseURL + result.data.image
            result.data.thumbnail = this.$config.baseURL + result.data.thumbnail
          }
          context.commit('WHAT_IS_REQUIRED_BANNER', result.data)
        })
        .catch((error) => {
          reject(error)
        })
    })
  },

  getGraduateSection(context) {
    return new Promise((resolve, reject) => {
      context.commit('sidebar/toggleLoader', true, { root: true })
      this.$axios
        .get(`/what/is/required/graduate/type`)
        .then((result) => {
          context.commit('sidebar/toggleLoader', false, { root: true })
          resolve(result)

          context.commit('GRADUATE_SECTION', result.data)
        })
        .catch((error) => {
          reject(error)
        })
    })
  },

  async getGraduationFirstLoad(context, id) {
    const data = await this.$axios.get(
      `/what/is/required/graduate/program/${id}`
    )
    context.commit('GRADUATE_DETAILS', data.data)
  },
  async getGraduateDetails(context, value) {
    const data = await this.$axios.get(
      `/what/is/required/graduate/program/${value.history.current.query.id}`
    )

    context.commit('GRADUATE_DETAILS', data.data)
  },

  getUndergraduateSection(context) {
    return new Promise((resolve, reject) => {
      context.commit('sidebar/toggleLoader', true, { root: true })
      this.$axios
        .get(`/what/is/required/undergraduate/type`)
        .then((result) => {
          context.commit('sidebar/toggleLoader', false, { root: true })
          resolve(result)

          context.commit('UNDERGRADUATE_SECTION', result.data)
        })
        .catch((error) => {
          reject(error)
        })
    })
  },

  async getUndergraduateFirstLoad(context, id) {
    const data = await this.$axios.get(
      `/what/is/required/undergraduate/program/${id}`
    )
    context.commit('UNDERGRADUATE_DETAILS', data.data)
  },
  async getUndergraduateDetails(context, value) {
    const data = await this.$axios.get(
      `/what/is/required/undergraduate/program/${value.history.current.query.id}`
    )

    context.commit('UNDERGRADUATE_DETAILS', data.data)
  },
}

const mutations = {
  WHAT_IS_REQUIRED_BANNER(state, section) {
    state.what_is_required_banner = section
  },
  GRADUATE_SECTION(state, section) {
    state.graduate_section = section
  },
  GRADUATE_DETAILS(state, section) {
    state.graduate_details = section
  },

  UNDERGRADUATE_SECTION(state, section) {
    state.undergraduate_section = section
  },
  UNDERGRADUATE_DETAILS(state, section) {
    state.undergraduate_details = section
  },
}
export default {
  state,
  getters,
  actions,
  mutations,
}
