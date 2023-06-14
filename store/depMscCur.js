/* eslint-disable no-console */
/* eslint-disable camelcase */
const state = () => ({
    msc_banner: {},
    msc_body: {},
    section:[]
  })
  
  const getters = {
    msc_banner: (state) => state.msc_banner,
    msc_body: (state) => state.msc_body,
    section: (state) => state.section,
    
  }
  
  const actions = {
    getMscBanner(context, value) {
      return new Promise((resolve, reject) => {
        context.commit('sidebar/toggleLoader', true, { root: true })
        this.$axios
          .get(`/department/msc/curriculum/page/setting/${value}`)
          .then((result) => {
            context.commit('sidebar/toggleLoader', false, { root: true })
            resolve(result)
            if (result.data) {
              result.data.image = this.$config.baseURL + result.data.image
              result.data.thumbnail =
                this.$config.baseURL + result.data.thumbnail
            }
            context.commit('MSC_BANNER', result.data)
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
          .get(`/department/msc/curriculum/section/${value}`)
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
    async getMscBody(context, payload) {
      try {
        context.commit('sidebar/toggleLoader', true, { root: true })
        const data = await this.$axios.get(
          `department/msc/curriculum/${payload.department}/${payload.slug}`
        )
       
        context.commit('MSC_BODY', data.data)
        context.commit('sidebar/toggleLoader', false, { root: true })
      } catch (error) {
        context.commit('sidebar/toggleLoader', false, { root: true })
      }
    },
    // async getMscBody(context, value) {
    //   const data = await this.$axios.get(`/department/msc/curriculum/${value}`)
    //   context.commit('MSC_BODY', data.data)
    // },
  }
  
  const mutations = {
    MSC_BANNER(state, msc_banner) {
      state.msc_banner = msc_banner
    },
    MSC_BODY(state, msc_body) {
      state.msc_body = msc_body
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
  