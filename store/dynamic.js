/* eslint-disable no-console */
/* eslint-disable camelcase */
const state = () => ({
  dynamic_menu: [],
  dynamic_submenu: [],
  dynamic_header: {},
  dynamic_page: [],
})

const getters = {
  dynamic_menu: (state) => state.dynamic_menu,
  dynamic_submenu: (state) => state.dynamic_submenu,
  dynamic_header: (state) => state.dynamic_header,
  dynamic_page: (state) => state.dynamic_page,
}

const actions = {
  getDynamicHeader(context, value) {
    return new Promise((resolve, reject) => {
      context.commit('sidebar/toggleLoader', true, { root: true })
      this.$axios
        .get(`/header/${value.department}/${value.slug}`)
        .then((result) => {
          context.commit('sidebar/toggleLoader', false, { root: true })
          resolve(result)
          if (result.data) {
            result.data.image = this.$config.baseURL + result.data.image
            result.data.thumbnail = this.$config.baseURL + result.data.thumbnail
          }
          context.commit('DYNAMIC_HEADER', result.data)
        })
        .catch((error) => {
          reject(error)
        })
    })
  },
  async getDynamicMenu(context, value) {
    const data = await this.$axios.get(`/menu/${value}`)
    context.commit('DYNAMIC_MENU', data.data)
  },

  getDynamicSubmenu(context, value) {
    return new Promise((resolve, reject) => {
      context.commit('sidebar/toggleLoader', true, { root: true })
      this.$axios
        .get(`/submenu/${value.department}/${value.id}`)
        .then((result) => {
          context.commit('sidebar/toggleLoader', false, { root: true })
          resolve(result)
          context.commit('DYNAMIC_SUBMENU', result.data)
        })
        .catch((error) => {
          reject(error)
        })
    })
  },

  getEmptyDynamicSubmenu(context) {
    const data = []
    context.commit('DYNAMIC_SUBMENU', data)
  },
  //   async getDynamicHeader(context, value) {
  //     const data = await this.$axios.get(
  //       `/header/${value.department}/${value.id}`
  //     )
  //     context.commit('DYNAMIC_HEADER', data.data)
  //   },
  async getDynamicPage(context, value) {
    const data = await this.$axios.get(
      `/dynamic/page/${value.department}/${value.slug}`
    )
    context.commit('DYNAMIC_PAGE', data.data)
  },
}

const mutations = {
  DYNAMIC_MENU(state, section) {
    state.dynamic_menu = section
  },
  DYNAMIC_SUBMENU(state, section) {
    state.dynamic_submenu = section
  },
  DYNAMIC_HEADER(state, section) {
    state.dynamic_header = section
  },
  DYNAMIC_PAGE(state, section) {
    state.dynamic_page = section
  },
}
export default {
  state,
  getters,
  actions,
  mutations,
}
