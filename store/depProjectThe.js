/* eslint-disable no-console */
/* eslint-disable camelcase */
const state = () => ({
    project_the_banner: {},
    project_the_body: [],
  })
  
  const getters = {
    project_the_banner: (state) => state.project_the_banner,
    project_the_body: (state) => state.project_the_body,
    
  }
  
  const actions = {
    getProjectTheBanner(context, value) {
      return new Promise((resolve, reject) => {
        context.commit('sidebar/toggleLoader', true, { root: true })
        this.$axios
          .get(`/project/thesis/list/page/setting/${value}`)
          .then((result) => {
            context.commit('sidebar/toggleLoader', false, { root: true })
            resolve(result)
            if (result.data) {
              result.data.image = this.$config.baseURL + result.data.image
              result.data.thumbnail = this.$config.baseURL + result.data.thumbnail
            }
            context.commit('PROJECT_THE_BANNER', result.data)
          })
          .catch((error) => {
            reject(error)
          })
      })
    },
    async getProjectTheBody(context, value) {
      const data = await this.$axios.get(
        `/project/thesis/list/${value}`
      )
      context.commit('PROJECT_THE_BODY', data.data)
    },
  
  }
  
  const mutations = {
    PROJECT_THE_BANNER(state, section) {
      state.project_the_banner = section
    },
    PROJECT_THE_BODY(state, project_the_body) {
      state.project_the_body = project_the_body
    },
  
  }
  export default {
    state,
    getters,
    actions,
    mutations,
  }
  