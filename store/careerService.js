/* eslint-disable no-console */
/* eslint-disable camelcase */
const state = () => ({
  career_service_banner: {},
  career_service_body: {},
})

const getters = {
  career_service_banner: (state) => state.career_service_banner,
  career_service_body: (state) => state.career_service_body,
}

const actions = {
  getCareerServiceBanner(context) {
    return new Promise((resolve, reject) => {
      context.commit('sidebar/toggleLoader', true, { root: true })
      this.$axios
        .get(`/career/service/page/setting`)
        .then((result) => {
          context.commit('sidebar/toggleLoader', false, { root: true })
          resolve(result)
          if (result.data) {
            result.data.image = this.$config.baseURL + result.data.image
          }
          context.commit('CAREER_SERVICE_BANNER', result.data)
        })
        .catch((error) => {
          reject(error)
        })
    })
  },
  async getCareerServiceBody(context) {
    const data = await this.$axios.get(`/career/service`)
    context.commit('CAREER_SERVICE_BODY', data.data)
  },
}

const mutations = {
  CAREER_SERVICE_BANNER(state, section) {
    state.career_service_banner = section
  },
  CAREER_SERVICE_BODY(state, section) {
    state.career_service_body = section
  },
}
export default {
  state,
  getters,
  actions,
  mutations,
}
