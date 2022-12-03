/* eslint-disable no-console */
/* eslint-disable camelcase */
const state = () => ({
  chairman: {},
  vice_chancellor: {},
  pro_vice_chancellor: {},
})

const getters = {
  chairman: (state) => state.chairman,
  vice_chancellor: (state) => state.vice_chancellor,
  pro_vice_chancellor: (state) => state.pro_vice_chancellor,
}

const actions = {
  getChairman(context) {
    return new Promise((resolve, reject) => {
      context.commit('sidebar/toggleLoader', true, { root: true })
      this.$axios
        .get(`/chancellor`)
        .then((result) => {
          context.commit('sidebar/toggleLoader', false, { root: true })
          resolve(result)
          if (result.data) {
            result.data.message.image =
              this.$config.baseURL + result.data.message.image
          }
          context.commit('CHAIRMAN', result.data)
        })
        .catch((error) => {
          reject(error)
        })
    })
  },

  getViceChancellor(context) {
    return new Promise((resolve, reject) => {
      context.commit('sidebar/toggleLoader', true, { root: true })
      this.$axios
        .get(`/vice_chancellor`)
        .then((result) => {
          context.commit('sidebar/toggleLoader', false, { root: true })
          resolve(result)
          if (result.data) {
            result.data.message.image =
              this.$config.baseURL + result.data.message.image
          }
          context.commit('VICE_CHANCELLOR', result.data)
        })
        .catch((error) => {
          reject(error)
        })
    })
  },

  getProViceChancellor(context) {
    return new Promise((resolve, reject) => {
      context.commit('sidebar/toggleLoader', true, { root: true })
      this.$axios
        .get(`/pro_vice_chancellor`)
        .then((result) => {
          context.commit('sidebar/toggleLoader', false, { root: true })
          resolve(result)
          if (result.data) {
            result.data.message.image =
              this.$config.baseURL + result.data.message.image
          }
          context.commit('PRO_VICE_CHANCELLOR', result.data)
        })
        .catch((error) => {
          reject(error)
        })
    })
  },
}

const mutations = {
  CHAIRMAN(state, section) {
    state.chairman = section
  },
  VICE_CHANCELLOR(state, section) {
    state.vice_chancellor = section
  },
  PRO_VICE_CHANCELLOR(state, section) {
    state.pro_vice_chancellor = section
  },
}
export default {
  state,
  getters,
  actions,
  mutations,
}
