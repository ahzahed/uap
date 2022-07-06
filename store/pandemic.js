/* eslint-disable no-console */
/* eslint-disable camelcase */
const state = () => ({
  pandemic_banner: {},
  message: {},
  fee: [],
  deposit: [],
})

const getters = {
  pandemic_banner: (state) => state.pandemic_banner,
  message: (state) => state.message,
  fee: (state) => state.fee,
  deposit: (state) => state.deposit,
}

const actions = {
  getPandemicBanner(context) {
    return new Promise((resolve, reject) => {
      context.commit('sidebar/toggleLoader', true, { root: true })
      this.$axios
        .get(`/pandamic/payment/policy/page/setting`)
        .then((result) => {
          context.commit('sidebar/toggleLoader', false, { root: true })
          resolve(result)
          if (result.data) {
            result.data.image = this.$config.baseURL + result.data.image
            result.data.thumbnail = this.$config.baseURL + result.data.thumbnail
          }
          context.commit('PANDEMIC_BANNER', result.data)
        })
        .catch((error) => {
          reject(error)
        })
    })
  },

  async getMessage(context) {
    const data = await this.$axios.get(`/pandamic/payment/policy/message`)
    context.commit('MESSAGE', data.data)
  },
  async getFee(context) {
    const data = await this.$axios.get(`/pandamic/payment/policy/fee/payment`)
    context.commit('FEE', data.data)
  },
  async getDeposit(context) {
    const data = await this.$axios.get(`/pandamic/payment/policy/bank/deposit`)
    context.commit('DEPOSIT', data.data)
  },
}

const mutations = {
  PANDEMIC_BANNER(state, section) {
    state.pandemic_banner = section
  },
  MESSAGE(state, section) {
    state.message = section
  },
  FEE(state, section) {
    state.fee = section
  },
  DEPOSIT(state, section) {
    state.deposit = section
  },
}
export default {
  state,
  getters,
  actions,
  mutations,
}
