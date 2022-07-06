/* eslint-disable no-console */
/* eslint-disable camelcase */
const state = () => ({
  rules_banner: {},
  rules_section: [],
  rulesList: {},
})

const getters = {
  rules_banner: (state) => state.rules_banner,
  rules_section: (state) => state.rules_section,
  rulesList: (state) => state.rulesList,
}

const actions = {
  getRulesBanner(context) {
    return new Promise((resolve, reject) => {
      context.commit('sidebar/toggleLoader', true, { root: true })
      this.$axios
        .get(`/role/regulation/page/setting`)
        .then((result) => {
          context.commit('sidebar/toggleLoader', false, { root: true })
          resolve(result)
          if (result.data) {
            result.data.image = this.$config.baseURL + result.data.image
          }
          context.commit('RULES_BANNER', result.data)
        })
        .catch((error) => {
          reject(error)
        })
    })
  },

  allRulesSection(context) {
    return new Promise((resolve, reject) => {
      context.commit('sidebar/toggleLoader', true, { root: true })
      this.$axios
        .get(`/role/regulation/type`)
        .then((result) => {
          context.commit('sidebar/toggleLoader', false, { root: true })
          resolve(result)
          context.commit('RULES_SECTION', result.data)
        })
        .catch((error) => {
          reject(error)
        })
    })
  },

  async getRulesList(context, id) {
    try {
      context.commit('sidebar/toggleLoader', true, { root: true })
      const data = await this.$axios.get(`/role/and/regulation/${id}`)
      context.commit('RULES_LIST', data.data)
      context.commit('sidebar/toggleLoader', false, { root: true })
    } catch (error) {
      console.log('Error: ' + error)
      context.commit('sidebar/toggleLoader', false, { root: true })
    }
  },
}

const mutations = {
  RULES_BANNER(state, section) {
    state.rules_banner = section
  },
  RULES_SECTION(state, section) {
    state.rules_section = section
  },
  RULES_LIST(state, administrationList) {
    state.rulesList = administrationList
  },
}
export default {
  state,
  getters,
  actions,
  mutations,
}
