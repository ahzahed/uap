/* eslint-disable no-console */
/* eslint-disable camelcase */
const state = () => ({
  staff_banner: {},
  staffs: [],
})

const getters = {
  staff_banner: (state) => state.staff_banner,
  staffs: (state) => state.staffs,
}

const actions = {
  staffBanner(context, value) {
    return new Promise((resolve, reject) => {
      context.commit('sidebar/toggleLoader', true, { root: true })
      this.$axios
        .get(`/staff/page/setting/${value}`)
        .then((result) => {
          context.commit('sidebar/toggleLoader', false, { root: true })
          resolve(result)
          if (result.data) {
            result.data.image = this.$config.baseURL + result.data.image
          }
          context.commit('STAFF_BANNER', result.data)
        })
        .catch((error) => {
          reject(error)
        })
    })
  },

  async getStaffs(context, value) {
    const data = await this.$axios.get(`/staff/${value}`)
    context.commit('STAFFS', data.data)
  },
}

const mutations = {
  STAFF_BANNER(state, section) {
    state.staff_banner = section
  },
  STAFFS(state, section) {
    state.staffs = section
  },
}
export default {
  state,
  getters,
  actions,
  mutations,
}
