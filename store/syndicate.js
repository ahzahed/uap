/* eslint-disable no-console */
/* eslint-disable camelcase */
const state = () => ({
  syndicate_section: [],
  syndicate: [],
  syndicate_banner: {},
})

const getters = {
  syndicate_section: (state) => state.syndicate_section,
  syndicate: (state) => state.syndicate,
  syndicate_banner: (state) => state.syndicate_banner,
}

const actions = {
  getSyndicateBanner(context) {
    return new Promise((resolve, reject) => {
      context.commit('sidebar/toggleLoader', true, { root: true })
      this.$axios
        .get(`/syndicate/page/setting`)
        .then((result) => {
          context.commit('sidebar/toggleLoader', false, { root: true })
          resolve(result)
          context.commit('SYNDICATE_BANNER', result.data)
        })
        .catch((error) => {
          reject(error)
        })
    })
  },
  allSyndicateSection(context) {
    return new Promise((resolve, reject) => {
      context.commit('sidebar/toggleLoader', true, { root: true })
      this.$axios
        .get(`/syndicate/section/list`)
        .then((result) => {
          context.commit('sidebar/toggleLoader', false, { root: true })
          resolve(result)
          context.commit('SYNDICATE_SECTION', result.data)
        })
        .catch((error) => {
          reject(error)
        })
    })
  },
  async allSyndicate(context, id) {
    try {
      context.commit('sidebar/toggleLoader', true, { root: true })
      const data = await this.$axios.get(`/syndicate/${id}/list`)
      context.commit('DATA', data.data)
      context.commit('sidebar/toggleLoader', false, { root: true })
    } catch (error) {
      console.log('Error: ' + error)
      context.commit('sidebar/toggleLoader', false, { root: true })
    }
  },
}

// const actions = {
//   allSyndicateSection(context) {
//     return new Promise((resolve, reject) => {
//       this.$axios
//         .get(`/syndicate/section/list`)
//         .then((result) => {
//           resolve(result)
//           console.log(result);
//           context.commit('SYNDICATE_SECTION', result.data)
//         })
//         .catch((error) => {
//           reject(error)
//         })
//     })
//   },
//   async allSyndicate(context, id) {
//     const data = await this.$axios.get(`/syndicate/${id}/list`)
//     context.commit('DATA', data.data)
//   },
// }

const mutations = {
  SYNDICATE_SECTION(state, section) {
    state.syndicate_section = section
  },
  DATA(state, syndicate) {
    state.syndicate = syndicate
  },
  SYNDICATE_BANNER(state, syndicate_banner) {
    state.syndicate_banner = syndicate_banner
  },
}

export default {
  state,
  getters,
  actions,
  mutations,
}
