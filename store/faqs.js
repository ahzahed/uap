/* eslint-disable no-console */
/* eslint-disable camelcase */
const state = () => ({
    faq_banner: {},
    faq_body: [],
  })
  
  const getters = {
    faq_banner: (state) => state.faq_banner,
    faq_body: (state) => state.faq_body,
    
  }
  
  const actions = {
    getFaqBanner(context) {
      return new Promise((resolve, reject) => {
        context.commit('sidebar/toggleLoader', true, { root: true })
        this.$axios
          .get(`/faq/page/setting`)
          .then((result) => {
            context.commit('sidebar/toggleLoader', false, { root: true })
            resolve(result)
            if (result.data) {
              result.data.image = this.$config.baseURL + result.data.image
              result.data.thumbnail = this.$config.baseURL + result.data.thumbnail
            }
            context.commit('FAQ_BANNER', result.data)
          })
          .catch((error) => {
            reject(error)
          })
      })
    },
    async getFaqBody(context) {
      const data = await this.$axios.get(
        `/faq`
      )
      context.commit('FAQ_BODY', data.data)
    },
  
  }
  
  const mutations = {
    FAQ_BANNER(state, section) {
      state.faq_banner = section
    },
    FAQ_BODY(state, section) {
      state.faq_body = section
    },
  
  }
  export default {
    state,
    getters,
    actions,
    mutations,
  }
  