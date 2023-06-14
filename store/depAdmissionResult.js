/* eslint-disable no-console */
/* eslint-disable camelcase */
const state = () => ({
  admission_result_banner: {},
  written_test: [],
  final_result: [],
  waiting_list: [],
  admission_result: [],
})

const getters = {
  admission_result_banner: (state) => state.admission_result_banner,
  written_test: (state) => state.written_test,
  final_result: (state) => state.final_result,
  waiting_list: (state) => state.waiting_list,
  admission_result: (state) => state.admission_result,
}

const actions = {
  getAdmissionResultBanner(context, value) {
    return new Promise((resolve, reject) => {
      context.commit('sidebar/toggleLoader', true, { root: true })
      this.$axios
        .get(`/admission/result/page/setting`)
        .then((result) => {
          context.commit('sidebar/toggleLoader', false, { root: true })
          resolve(result)
          // if (result.data) {
          //   result.data.image = this.$config.baseURL + result.data.image
          // }
          context.commit('ADMISSION_RESULT_BANNER', result.data)
        })
        .catch((error) => {
          reject(error)
        })
    })
  },

  async getAdmissionResult(context, preload) {
    try {
      context.commit('sidebar/toggleLoader', true, { root: true })
      const data = await this.$axios.get(
        `/admission/result/${preload.department}/${preload.type}`
      )
      context.commit('ADMISSION_RESULT', data.data)
      context.commit('sidebar/toggleLoader', false, { root: true })
    } catch (error) {
      context.commit('sidebar/toggleLoader', false, { root: true })
    }
  },

  async getWrittenTest(context, preload) {
    try {
      context.commit('sidebar/toggleLoader', true, { root: true })
      const data = await this.$axios.get(
        `/admission/result/written/test/${preload}/written`
      )
      context.commit('WRITTEN_TEST', data.data)
      context.commit('sidebar/toggleLoader', false, { root: true })
    } catch (error) {
      context.commit('sidebar/toggleLoader', false, { root: true })
    }
  },
  async getFinalResult(context, preload) {
    try {
      context.commit('sidebar/toggleLoader', true, { root: true })
      const data = await this.$axios.get(
        `/admission/result/written/test/${preload}/final`
      )
      context.commit('FINAL_RESULT', data.data)
      context.commit('sidebar/toggleLoader', false, { root: true })
    } catch (error) {
      context.commit('sidebar/toggleLoader', false, { root: true })
    }
  },
  async getWaitingList(context, preload) {
    try {
      context.commit('sidebar/toggleLoader', true, { root: true })
      const data = await this.$axios.get(
        `/admission/result/written/test/${preload}/waiting`
      )
      context.commit('WAITING_LIST', data.data)
      context.commit('sidebar/toggleLoader', false, { root: true })
    } catch (error) {
      context.commit('sidebar/toggleLoader', false, { root: true })
    }
  },
}

const mutations = {
  ADMISSION_RESULT_BANNER(state, admission_result_banner) {
    state.admission_result_banner = admission_result_banner
  },
  WRITTEN_TEST(state, written_test) {
    state.written_test = written_test
  },
  FINAL_RESULT(state, final_result) {
    state.final_result = final_result
  },
  WAITING_LIST(state, waiting_list) {
    state.waiting_list = waiting_list
  },
  ADMISSION_RESULT(state, admission_result) {
    state.admission_result = admission_result
  },
}
export default {
  state,
  getters,
  actions,
  mutations,
}
