/* eslint-disable no-console */
/* eslint-disable camelcase */
const state = () => ({
  resource_city_banner: {},
  city_campus_list: [],
})

const getters = {
  resource_city_banner: (state) => state.resource_city_banner,
  city_campus_list: (state) => state.city_campus_list,
}

const actions = {
  getResourceCityBanner(context) {
    return new Promise((resolve, reject) => {
      context.commit('sidebar/toggleLoader', true, { root: true })
      this.$axios
        .get(`/resourse/physical/city/campus/page/setting`)
        .then((result) => {
          context.commit('sidebar/toggleLoader', false, { root: true })
          resolve(result)
          if (result.data) {
            result.data.image = this.$config.baseURL + result.data.image
            result.data.thumbnail = this.$config.baseURL + result.data.thumbnail
          }
          context.commit('RESOURCE_CITY_BANNER', result.data)
        })
        .catch((error) => {
          reject(error)
        })
    })
  },

  async getCityCampusList(context) {
    const data = await this.$axios.get(`/resourse/physical/city/campus/list`)
    context.commit('CITY_CAMPUS_LIST', data.data)
  },
}

const mutations = {
  RESOURCE_CITY_BANNER(state, section) {
    state.resource_city_banner = section
  },
  CITY_CAMPUS_LIST(state, section) {
    state.city_campus_list = section
  },
}
export default {
  state,
  getters,
  actions,
  mutations,
}
