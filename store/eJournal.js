/* eslint-disable no-console */
/* eslint-disable camelcase */
const state = () => ({
    e_journal_banner: {},
    e_journal_body: [],
  })
  
  const getters = {
    e_journal_banner: (state) => state.e_journal_banner,
    e_journal_body: (state) => state.e_journal_body,
    
  }
  
  const actions = {
    getEjournalBanner(context, value) {
      return new Promise((resolve, reject) => {
        context.commit('sidebar/toggleLoader', true, { root: true })
        this.$axios
          .get(`/e-journal/page/setting/${value}`)
          .then((result) => {
            context.commit('sidebar/toggleLoader', false, { root: true })
            resolve(result)
            if (result.data) {
              result.data.image = this.$config.baseURL + result.data.image
              result.data.thumbnail = this.$config.baseURL + result.data.thumbnail
            }
            context.commit('E_JOURNAL_BANNER', result.data)
          })
          .catch((error) => {
            reject(error)
          })
      })
    },
    async getEjournalBody(context, value) {
      const data = await this.$axios.get(
        `/e-journal/${value}`
      )
      context.commit('E_JOURNAL_BODY', data.data)
    },
  
  }
  
  const mutations = {
    E_JOURNAL_BANNER(state, section) {
      state.e_journal_banner = section
    },
    E_JOURNAL_BODY(state, section) {
      state.e_journal_body = section
    },
  
  }
  export default {
    state,
    getters,
    actions,
    mutations,
  }
  