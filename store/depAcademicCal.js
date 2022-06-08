/* eslint-disable no-console */
/* eslint-disable camelcase */
const state = () => ({
    academic_cal_banner: {},
    academic_cal_body: [],
  })
  
  const getters = {
    academic_cal_banner: (state) => state.academic_cal_banner,
    academic_cal_body: (state) => state.academic_cal_body,
    
  }
  
  const actions = {
    getAcademicCalBanner(context) {
      return new Promise((resolve, reject) => {
        context.commit('sidebar/toggleLoader', true, { root: true })
        this.$axios
          .get(`/academic/celender/page/setting`)
          .then((result) => {
            context.commit('sidebar/toggleLoader', false, { root: true })
            resolve(result)
            if (result.data) {
              result.data.image = this.$config.baseURL + result.data.image
              result.data.thumbnail = this.$config.baseURL + result.data.thumbnail
            }
            context.commit('ACADEMIC_CAL_BANNER', result.data)
          })
          .catch((error) => {
            reject(error)
          })
      })
    },
    async getAcademicCalBody(context) {
      const data = await this.$axios.get(
        `/academic/celender`
      )
      context.commit('ACADEMIC_CAL_BODY', data.data)
    },
  
  }
  
  const mutations = {
    ACADEMIC_CAL_BANNER(state, academic_cal_banner) {
      state.academic_cal_banner = academic_cal_banner
    },
    ACADEMIC_CAL_BODY(state, section) {
      state.academic_cal_body = section
    },
  
  }
  export default {
    state,
    getters,
    actions,
    mutations,
  }
  