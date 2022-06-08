/* eslint-disable no-console */
/* eslint-disable camelcase */
const state = () => ({
  categories: [],
  sub_categories: [],
  parent_categories: [],
  details: {},
})


const getters = {
  parent_categories: state => state.parent_categories,
}

const actions = {
  async getCategories( context) {  
    const data = await this.$axios.get(`/category/list`)
    context.commit('DATA', data.data)
  },
  async getParentCategories({ commit }) {
    const data = await this.$axios.get(`/category/parent/list`)

    commit('PARENT_CATEGORIES', data.data)
  },
  async getSubCategories({ commit }, id) {
    const data = await this.$axios.get(`/category/${id}/list`)
    commit('setSubCategories', data.data)
  },
  async Details({ commit }, id) {
    const data = await this.$axios.get(`/category/${id}/show`)
    commit('DETAILS', data.data.data)
  },

  Created({ commit }, data) {
    return new Promise((resolve, reject) => {
      this.$axios
        .post(`category/store`, data)
        .then((result) => {
          resolve(result)
          commit('CREATED')
        })
        .catch((error) => {
          reject(error)
        })
    })
  },
  Update({ commit }, data) {
    return new Promise((resolve, reject) => {
      this.$axios
        .post(`category/update`, data)
        .then((result) => {
          resolve(result)
          commit('CREATED')
        })
        .catch((error) => {
          reject(error)
        })
    })
  },
  Deleted({ commit }, id) {
    return new Promise((resolve, reject) => {
      this.$axios
        .post(`category/remove`, id)
        .then((result) => {
          resolve(result)
          commit('SHOW', result.data.category)
        })
        .catch((error) => {
          reject(error)
        })
    })
  },
}

const mutations = {
  DATA(state, categories) {
    state.categories = categories
  },
  PARENT_CATEGORIES(state, parent_categories) {
    state.parent_categories = parent_categories
  },
  setSubCategories(state, subcategories) {
    state.sub_categories = subcategories
  },
  DETAILS(state, details) {
    state.details = details
  },
  CREATED(state) {},
  SHOW(state) {},
}
export default {
  state,
  getters,
  actions,
  mutations,
}
