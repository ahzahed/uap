/* eslint-disable no-console */
/* eslint-disable camelcase */
const state = () => ({
  administrationList: [],
  administration_section: [],
  administration_banner: {},
  administration_details: {},
})

const getters = {
  administrationList: (state) => state.administrationList,
  administration_section: (state) => state.administration_section,
  administration_banner: (state) => state.administration_banner,
  administration_details: (state) => state.administration_details,
}

const actions = {
  allAdministrationSection(context) {
    return new Promise((resolve, reject) => {
      context.commit('sidebar/toggleLoader', true, { root: true })
      this.$axios
        .get(`/administration/section/list`)
        .then((result) => {
          context.commit('sidebar/toggleLoader', false, { root: true })
          resolve(result)
          context.commit('ADMINISTRATION_SECTION', result.data)
        })
        .catch((error) => {
          reject(error)
        })
    })
  },
  async allAdministration(context, id) {
    try {
      context.commit('sidebar/toggleLoader', true, { root: true })
      const data = await this.$axios.get(`/administration/${id}/list`)
      context.commit('DATA', data.data)
      context.commit('sidebar/toggleLoader', false, { root: true })
    } catch (error) {
      console.log('Error: ' + error)
      context.commit('sidebar/toggleLoader', false, { root: true })
    }
  },
  getAdministrationBanner(context) {
    return new Promise((resolve, reject) => {
      context.commit('sidebar/toggleLoader', true, { root: true })
      this.$axios
        .get(`/administration/page/setting`)
        .then((result) => {
          context.commit('sidebar/toggleLoader', false, { root: true })
          resolve(result)
          context.commit('ADMINISTRATION_BANNER', result.data)
        })
        .catch((error) => {
          reject(error)
        })
    })
  },

  async getAdministrationDetails(context, value) {
    const data = await this.$axios.get(`/administration/${value}/show`)
    context.commit('ADMINISTRATION_DETAILS', data.data.data)
  },
}

const mutations = {
  DATA(state, administrationList) {
    state.administrationList = administrationList
  },
  ADMINISTRATION_SECTION(state, section) {
    state.administration_section = section
  },
  ADMINISTRATION_BANNER(state, section) {
    state.administration_banner = section
  },
  ADMINISTRATION_DETAILS(state, section) {
    state.administration_details = section
  },
}
export default {
  state,
  getters,
  actions,
  mutations,
}
