/* eslint-disable no-console */
/* eslint-disable camelcase */
const state = () => ({
  accolades: [],
  our_ranking: [],
  all_our_ranking: [],
  about_banner: {},
  vice_chancellor: {},
  about_banner_bottom: {},
  mission: {},
  vision: {},
})

const getters = {
  about_banner: (state) => state.about_banner,
  accolades: (state) => state.accolades,
  our_ranking: (state) => state.our_ranking,
  all_our_ranking: (state) => state.all_our_ranking,
  vice_chancellor: (state) => state.vice_chancellor,
  about_banner_bottom: (state) => state.about_banner_bottom,
  mission: (state) => state.mission,
  vision: (state) => state.vision,
}

const actions = {
  async accoladingByCat(context, value) {
    const data = await this.$axios.get(`accolade/${value}/list`)
    context.commit('ACCOLADING_BY_CAT', data.data)
  },

  // Get 3 ranking for about page
  async ourRanking(context) {
    const data = await this.$axios.get(`our_ranking/list`)
    context.commit('OUR_RANKING', data.data)
  },

  // Get all ranking for our_ranking page
  async getAllOurRanking(context) {
    const data = await this.$axios.get(`our_ranking/more/rank`)
    context.commit('ALL_OUR_RANKING', data.data)
  },
  async getAboutBannerBottom(context) {
    const data = await this.$axios.get(`about/message`)
    context.commit('ABOUT_BANNER_BOTTOM', data.data)
  },
  async getMission(context) {
    const data = await this.$axios.get(`about/mission`)
    context.commit('MISSION', data.data)
  },
  async getVision(context) {
    const data = await this.$axios.get(`about/vission`)
    context.commit('VISION', data.data)
  },

  getAboutBanner(context) {
    return new Promise((resolve, reject) => {
      context.commit('sidebar/toggleLoader', true, { root: true })
      this.$axios
        .get(`/about/banner`)
        .then((result) => {
          context.commit('sidebar/toggleLoader', false, { root: true })
          resolve(result)
          context.commit('ABOUT_BANNER', result.data)
        })
        .catch((error) => {
          reject(error)
        })
    })
  },
  async getViceChancellor(context) {
    const data = await this.$axios.get(`vice_chancellor/info`)
    context.commit('VICE_CHANCELLOR', data.data)
  },
}

const mutations = {
  ACCOLADING_BY_CAT(state, accolades) {
    state.accolades = accolades
  },
  OUR_RANKING(state, our_ranking) {
    state.our_ranking = our_ranking
  },
  ALL_OUR_RANKING(state, section) {
    state.all_our_ranking = section
  },
  ABOUT_BANNER(state, about_banner) {
    state.about_banner = about_banner
  },
  VICE_CHANCELLOR(state, vice_chancellor) {
    state.vice_chancellor = vice_chancellor
  },
  ABOUT_BANNER_BOTTOM(state, section) {
    state.about_banner_bottom = section
  },
  MISSION(state, section) {
    state.mission = section
  },
  VISION(state, section) {
    state.vision = section
  },
}
export default {
  state,
  getters,
  actions,
  mutations,
}
