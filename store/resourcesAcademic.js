/* eslint-disable no-console */
/* eslint-disable camelcase */
const state = () => ({
  rc_banner: {},
  class_room: {},
  lab_work: {},
  lab_workshop_list: [],
})

const getters = {
  rc_banner: (state) => state.rc_banner,
  class_room: (state) => state.class_room,
  lab_work: (state) => state.lab_work,
  lab_workshop_list: (state) => state.lab_workshop_list,
}

const actions = {
  getRcBanner(context) {
    return new Promise((resolve, reject) => {
      context.commit('sidebar/toggleLoader', true, { root: true })
      this.$axios
        .get(`/resourse/academic/page/setting`)
        .then((result) => {
          context.commit('sidebar/toggleLoader', false, { root: true })
          resolve(result)
          if (result.data) {
            result.data.image = this.$config.baseURL + result.data.image
            result.data.thumbnail = this.$config.baseURL + result.data.thumbnail
          }
          context.commit('RC_BANNER', result.data)
        })
        .catch((error) => {
          reject(error)
        })
    })
  },

  async getClassRoom(context) {
    const data = await this.$axios.get(`/resourse/academic/classroom`)
    context.commit('CLASS_ROOM', data.data)
  },

  async getLabWork(context) {
    const data = await this.$axios.get(`/resourse/academic/lab/workshop`)
    context.commit('LAB_WORK', data.data)
  },
  async getLabWorkshopList(context) {
    const data = await this.$axios.get(`/resourse/academic/lab/workshop/list`)
    context.commit('LAB_WORKSHOP_LIST', data.data)
  },
}

const mutations = {
  RC_BANNER(state, section) {
    state.rc_banner = section
  },
  CLASS_ROOM(state, section) {
    state.class_room = section
  },
  LAB_WORK(state, section) {
    state.lab_work = section
  },
  LAB_WORKSHOP_LIST(state, section) {
    state.lab_workshop_list = section
  },
}
export default {
  state,
  getters,
  actions,
  mutations,
}
