/* eslint-disable no-console */
/* eslint-disable camelcase */
const state = () => ({
    boardoftrustees_banner: [],
    boardoftrustees: [],
   
  })
  
  const getters = {
    boardoftrustees_banner: (state) => state.boardoftrustees_banner, 
    boardoftrustees: (state) => state.boardoftrustees,
  }
  
  const actions = {
 
    async BoardofTrusteesBanner(context,) {
      try {
      context.commit('sidebar/toggleLoader', true, { root: true })
      const data = await this.$axios.get(`/board/of/trustee/page/setting`)
      context.commit('BANNER', data.data)
      context.commit('sidebar/toggleLoader', false, { root: true })
      }
      catch (error) {
        console.log("Error: " + error);
        context.commit('sidebar/toggleLoader', false, { root: true })
      }
    },
    async allBoardoftrustees(context) {
      try {
      context.commit('sidebar/toggleLoader', true, { root: true })
      const data = await this.$axios.get(`/board/of/trustee`)
      context.commit('DATA', data.data.data)
      context.commit('sidebar/toggleLoader', false, { root: true })
      }
      catch (error) {
        console.log("Error: " + error);
        context.commit('sidebar/toggleLoader', false, { root: true })
      }
    },
  }
  
  const mutations = {
    DATA(state, boardoftrustees) {
      state.boardoftrustees = boardoftrustees
    },
    BANNER(state, section) {
      state.boardoftrustees_banner = section
    },
  }
  export default {
    state,
    getters,
    actions,
    mutations,
  }
  