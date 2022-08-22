const state = () => ({
  footer: {},
})

const getters = {
  footer: (state) => state.footer,
}

const actions = {
  getFooter(context) {
    return new Promise((resolve, reject) => {
      context.commit('sidebar/toggleLoader', true, { root: true })
      this.$axios
        .get(`/footer`)
        .then((result) => {
          context.commit('sidebar/toggleLoader', false, { root: true })
          resolve(result)
          
          context.commit('FOOTER', result.data)
        })
        .catch((error) => {
          reject(error)
        })
    })
  },
  //   async getFooter(context) {
  //     const data = await this.$axios.get(`/footer`)
  //     console.log("sdfsdf");
  //     context.commit('FOOTER', data.data)
  //   },
}

const mutations = {
  FOOTER(state, section) {
    state.footer = section
  },
}
export default {
  state,
  getters,
  actions,
  mutations,
}
