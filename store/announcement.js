/* eslint-disable no-console */
/* eslint-disable camelcase */
const state = () => ({
  announcement_banner: {},
  announcement_body: [],
})

const getters = {
  announcement_banner: (state) => state.announcement_banner,
  announcement_body: (state) => state.announcement_body,
}

const actions = {
  getAnnouncementBanner(context) {
    return new Promise((resolve, reject) => {
      context.commit('sidebar/toggleLoader', true, { root: true })
      this.$axios
        .get(`/announcement/page/setting`)
        .then((result) => {
          context.commit('sidebar/toggleLoader', false, { root: true })
          resolve(result)
          if (result.data) {
            result.data.image = this.$config.baseURL + result.data.image
            result.data.thumbnail = this.$config.baseURL + result.data.thumbnail
          }
          context.commit('ANNOUNCEMENT_BANNER', result.data)
        })
        .catch((error) => {
          reject(error)
        })
    })
  },
  async getAnnouncementBody(context) {
    const data = await this.$axios.get(`/announcement`)
    context.commit('ANNOUNCEMENT_BODY', data.data)
  },
}

const mutations = {
  ANNOUNCEMENT_BANNER(state, section) {
    state.announcement_banner = section
  },
  ANNOUNCEMENT_BODY(state, section) {
    state.announcement_body = section
  },
}
export default {
  state,
  getters,
  actions,
  mutations,
}
