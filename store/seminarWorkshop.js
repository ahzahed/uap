/* eslint-disable no-console */
/* eslint-disable camelcase */
const state = () => ({
  seminars: [],
  banner: {},
})

const getters = {
  banner: (state) => state.banner,
  seminars: (state) => state.seminars,
}

const actions = {
  depSeminarWorkshopBanner(context, value) {
    return new Promise((resolve, reject) => {
      context.commit('sidebar/toggleLoader', true, { root: true })
      this.$axios
        .get(`/department/seminer/workshop/page/setting/${value}`)
        .then((result) => {
          context.commit('sidebar/toggleLoader', false, { root: true })
          resolve(result)
          if (result.data) {
            result.data.image = this.$config.baseURL + result.data.image
            result.data.thumbnail = this.$config.baseURL + result.data.thumbnail
          }
          context.commit('BANNER', result.data)
        })
        .catch((error) => {
          reject(error)
        })
    })
  },

  async getSeminers(context, payload) {
    const data = await this.$axios.get(
      `/department/seminer/workshop/${payload}`
    )
    context.commit('SEMINARS', data.data)
  },

  async filterByEvent(context, payload) {
    const data = await this.$axios.get(
      `/department/seminer/workshop/${payload.department.history.current.params.department}/${payload.date}/filter`
    )
    context.commit('SEMINARS', data.data)
  },
}

const mutations = {
  BANNER(state, banner) {
    state.banner = banner
  },
  SEMINARS(state, seminars) {
    state.seminars = seminars
  },
}
export default {
  state,
  getters,
  actions,
  mutations,
}
