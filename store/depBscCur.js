/* eslint-disable no-console */
/* eslint-disable camelcase */
const state = () => ({
    bsc_banner: {},
    bsc_body: {},
    section: [],
  })
  
  const getters = {
    bsc_banner: (state) => state.bsc_banner,
    bsc_body: (state) => state.bsc_body,
    section: (state) => state.section,
    
  }
  
  const actions = {
    getBscBanner(context, value) {
      return new Promise((resolve, reject) => {
        context.commit('sidebar/toggleLoader', true, { root: true })
        this.$axios
          .get(`/department/bsc/Curriculum/page/setting/${value}`)
          .then((result) => {
            context.commit('sidebar/toggleLoader', false, { root: true })
            resolve(result)
            if (result.data) {
              result.data.image = this.$config.baseURL + result.data.image
              result.data.thumbnail =
                this.$config.baseURL + result.data.thumbnail
            }
            context.commit('BSC_BANNER', result.data)
          })
          .catch((error) => {
            reject(error)
          })
      })
    },

    getAllSections(context, value) {
      return new Promise((resolve, reject) => {
        context.commit('sidebar/toggleLoader', true, { root: true })
        this.$axios
          .get(`/department/bsc/curriculum/section/${value}`)
          .then((result) => {
            context.commit('sidebar/toggleLoader', false, { root: true })
            result.data.forEach((element) => {
              element.section = element.category_name
            })
            context.commit('SECTION', result.data)
            resolve(result)
          })
          .catch((error) => {
            reject(error)
          })
      })
    },

    async getBscBody(context, payload) {
      try {
        context.commit('sidebar/toggleLoader', true, { root: true })
        const data = await this.$axios.get(
          `department/bsc/curriculum/${payload.department}/${payload.slug}`
        )

        context.commit('BSC_BODY', data.data)
        context.commit('sidebar/toggleLoader', false, { root: true })
      } catch (error) {
        context.commit('sidebar/toggleLoader', false, { root: true })
      }
    },
  }
  
  const mutations = {
    BSC_BANNER(state, bsc_banner) {
      state.bsc_banner = bsc_banner
    },
    BSC_BODY(state, bsc_body) {
      state.bsc_body = bsc_body
    },
    SECTION(state, section) {
      state.section = section
    },
  
  }
  export default {
    state,
    getters,
    actions,
    mutations,
  }
  