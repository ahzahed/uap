/* eslint-disable no-console */
/* eslint-disable camelcase */
const state = () => ({
  media_banner: {},
  media_body: [],
})

const getters = {
  media_banner: (state) => state.media_banner,
  media_body: (state) => state.media_body,
}

const actions = {
  getMediaBanner(context) {
    return new Promise((resolve, reject) => {
      context.commit('sidebar/toggleLoader', true, { root: true })
      this.$axios
        .get(`/media/releses/page/setting`)
        .then((result) => {
          context.commit('sidebar/toggleLoader', false, { root: true })
          resolve(result)
          if (result.data) {
            result.data.image = this.$config.baseURL + result.data.image
            result.data.thumbnail = this.$config.baseURL + result.data.thumbnail
          }
          context.commit('MEDIA_BANNER', result.data)
        })
        .catch((error) => {
          reject(error)
        })
    })
  },
  async getMediaBody(context) {
    const data = await this.$axios.get(`/media/releses`)
    context.commit('MEDIA_BODY', data.data)
  },
}

const mutations = {
  MEDIA_BANNER(state, section) {
    state.MEDIA_BANNER = section
  },
  MEDIA_BODY(state, section) {
    state.media_body = section
  },
}
export default {
  state,
  getters,
  actions,
  mutations,
}
