/* eslint-disable no-console */
/* eslint-disable camelcase */
const state = () => ({
    mission_banner: {},
    mission_body: {},
  })
  
  const getters = {
    mission_banner: (state) => state.mission_banner,
    mission_body: (state) => state.mission_body,
    
  }
  
  const actions = {
    getMissionBanner(context, value) {
      return new Promise((resolve, reject) => {
        context.commit('sidebar/toggleLoader', true, { root: true })
        this.$axios
          .get(`/department/mission/outcome/page/setting/${value}`)
          .then((result) => {
            context.commit('sidebar/toggleLoader', false, { root: true })
            resolve(result)
            if (result.data) {
              result.data.image = this.$config.baseURL + result.data.image
              result.data.thumbnail = this.$config.baseURL + result.data.thumbnail
            }
            context.commit('MISSION_BANNER', result.data)
          })
          .catch((error) => {
            reject(error)
          })
      })
    },
    async getMissionBody(context, value) {
      const data = await this.$axios.get(
        `/department/mission/outcome/${value}`
      )
      context.commit('MISSION_BODY', data.data)
    },
  
  }
  
  const mutations = {
    MISSION_BANNER(state, mission_banner) {
      state.mission_banner = mission_banner
    },
    MISSION_BODY(state, mission_body) {
      state.mission_body = mission_body
    },
  
  }
  export default {
    state,
    getters,
    actions,
    mutations,
  }
  