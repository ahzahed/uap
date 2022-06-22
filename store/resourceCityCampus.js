/* eslint-disable no-console */
/* eslint-disable camelcase */
const state = () => ({
  resource_city_banner: {},
  city_campus_list: [],
  city_campus_details: {},
})

const getters = {
  resource_city_banner: (state) => state.resource_city_banner,
  city_campus_list: (state) => state.city_campus_list,
  city_campus_details: (state) => state.city_campus_details,
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

  // async getCityCampusList(context) {
  //   const data = await this.$axios.get(`/resourse/physical/city/campus/list`)
  //   context.commit('CITY_CAMPUS_LIST', data.data)
  // },

  getCityCampusList(context) {
    return new Promise((resolve, reject) => {
      context.commit('sidebar/toggleLoader', true, { root: true })
      this.$axios
        .get(`/resourse/physical/city/campus/list`)
        .then((result) => {
          context.commit('sidebar/toggleLoader', false, { root: true })
          resolve(result)
          context.commit('CITY_CAMPUS_LIST', result.data)
        })
        .catch((error) => {
          reject(error)
        })
    })
  },

  // async getCityCampusDetails(context, id) {
  //   const data = await this.$axios.get(
  //     `/resourse/physical/city/campus/details/${id}`
  //   )
  //   context.commit('CITY_CAMPUS_DETAILS', data.data)
  // },

  async getCityCampusDetails(context, id) {
    try {
      context.commit('sidebar/toggleLoader', true, { root: true })
      const data = await this.$axios.get(
        `/resourse/physical/city/campus/details/${id}`
      )
      context.commit('CITY_CAMPUS_DETAILS', data.data)
      context.commit('sidebar/toggleLoader', false, { root: true })
    } catch (error) {
      console.log('Error: ' + error)
      context.commit('sidebar/toggleLoader', false, { root: true })
    }
  },
}

const mutations = {
  RESOURCE_CITY_BANNER(state, section) {
    state.resource_city_banner = section
  },
  CITY_CAMPUS_LIST(state, section) {
    state.city_campus_list = section
  },
  CITY_CAMPUS_DETAILS(state, section) {
    state.city_campus_details = section
  },
}
export default {
  state,
  getters,
  actions,
  mutations,
}
