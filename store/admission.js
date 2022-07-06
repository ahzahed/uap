/* eslint-disable no-console */
/* eslint-disable camelcase */
const state = () => ({
  admission: [],
  admissionResultInfo:{},
  admissiontestlist: [],
  waitingResult:[],
  admissionresutlist: [],
  admission_address: {},
  admission_necessary_list: [],
  admission_banner: {},
  admission_result_banner: {},
  admission_test_banner: {},
})

const getters = {
  admission: (state) => state.admission,
  waitingResult: (state) => state.waitingResult,
  admissiontestlist: (state) => state.admissiontestlist,
  admissionResultInfo: (state) => state.admissionResultInfo,
  admissionresutlist: (state) => state.admissionresutlist,
  admission_address: (state) => state.admission_address,
  admission_necessary_list: (state) => state.admission_necessary_list,
  admission_banner: (state) => state.admission_banner,
  admission_result_banner: (state) => state.admission_result_banner,
  admission_test_banner: (state) => state.admission_test_banner,
}

const actions = {
  admissionAddress(context) {
    return new Promise((resolve, reject) => {
      context.commit('sidebar/toggleLoader', true, { root: true })
      this.$axios
        .get(`/admission/contact/info`)
        .then((result) => {
          context.commit('sidebar/toggleLoader', false, { root: true })
          resolve(result)
          context.commit('ADMISSION_ADDRESS', result.data)
        })
        .catch((error) => {
          reject(error)
        })
    })
  },
  async getAdmissionNecessaryList(context) {
    const data = await this.$axios.get(`admission/necessary/links`)
     const list = {}

     const middleIndex = Math.ceil(data.data.length / 2)

     // eslint-disable-next-line vue/no-side-effects-in-computed-properties
     list.firstHalf = data.data.splice(0, middleIndex)
     // eslint-disable-next-line vue/no-side-effects-in-computed-properties
     list.secondHalf = data.data.splice(-middleIndex)

    
    context.commit('ADMISSION_NECESSARY_LINK', list)
  },
  admissionBanner(context) {
    return new Promise((resolve, reject) => {
      context.commit('sidebar/toggleLoader', true, { root: true })
      this.$axios
        .get(`/admission/header/info`)
        .then((result) => {
          context.commit('sidebar/toggleLoader', false, { root: true })
          resolve(result)
          context.commit('ADMISSION_BANNER', result.data)
        })
        .catch((error) => {
          reject(error)
        })
    })
  },
  admissionResultBanner(context) {
    return new Promise((resolve, reject) => {
      context.commit('sidebar/toggleLoader', true, { root: true })
      this.$axios
        .get(`/admission/result/header`)
        .then((result) => {
          context.commit('sidebar/toggleLoader', false, { root: true })
          resolve(result)
          context.commit('ADMISSION_RESULT_BANNER', result.data)
        })
        .catch((error) => {
          reject(error)
        })
    })
  },
  admissionResultList(context) {
    return new Promise((resolve, reject) => {
      context.commit('sidebar/toggleLoader', true, { root: true })
      this.$axios
        .get(`/admission/result/list`)
        .then((result) => {
          context.commit('sidebar/toggleLoader', false, { root: true })
          resolve(result)
          context.commit('ADMISSION_RESULTS', result.data)
        })
        .catch((error) => {
          reject(error)
        })
    })
  },

  getAdmissionResultInfo(context) {
    return new Promise((resolve, reject) => {
      context.commit('sidebar/toggleLoader', true, { root: true })
      this.$axios
        .get(`/admission/result/table/header`)
        .then((result) => {
          context.commit('sidebar/toggleLoader', false, { root: true })
          resolve(result)
          context.commit('ADMISSION_RESULTS_INFO', result.data)
        })
        .catch((error) => {
          reject(error)
        })
    })
  },
  getAdmissionWaitingResult(context) {
    return new Promise((resolve, reject) => {
      context.commit('sidebar/toggleLoader', true, { root: true })
      this.$axios
        .get(`/admission/result/waiting/list`)
        .then((result) => {
          context.commit('sidebar/toggleLoader', false, { root: true })
          resolve(result)
          context.commit('ADMISSION_RESULTS_WAITING', result.data)
        })
        .catch((error) => {
          reject(error)
        })
    })
  },
  admissionTestList(context) {
    return new Promise((resolve, reject) => {
      context.commit('sidebar/toggleLoader', true, { root: true })
      this.$axios
        .get(`/admission/test/list`)
        .then((result) => {
          context.commit('sidebar/toggleLoader', false, { root: true })
          resolve(result)
          context.commit('ADMISSION_TEST_LIST', result.data)
        })
        .catch((error) => {
          reject(error)
        })
    })
  },
  admissionTestBanner(context) {
    return new Promise((resolve, reject) => {
      context.commit('sidebar/toggleLoader', true, { root: true })
      this.$axios
        .get(`/admission/test/header`)
        .then((result) => {
          context.commit('sidebar/toggleLoader', false, { root: true })
          resolve(result)
          context.commit('ADMISSION_TEST_BANNER', result.data)
        })
        .catch((error) => {
          context.commit('sidebar/toggleLoader', false, { root: true })
          reject(error)
        })
    })
  },
  async allCommittee(context, id) {
    try {
      context.commit('sidebar/toggleLoader', true, { root: true })
      const data = await this.$axios.get(`/committee/${id}/list`)
      context.commit('DATA', data.data)
      context.commit('sidebar/toggleLoader', false, { root: true })
    } catch (error) {
      console.log('Error: ' + error)
      context.commit('sidebar/toggleLoader', false, { root: true })
    }
  },
}

const mutations = {
  DATA(state, admission) {
    state.admission = admission
  },
  ADMISSION_TEST_LIST(state, admissiontestlist) {
    state.admissiontestlist = admissiontestlist
  },
  ADMISSION_RESULTS(state, admissionresutlist) {
    state.admissionresutlist = admissionresutlist
  },
  ADMISSION_RESULTS_INFO(state, admissionResultInfo) {
    state.admissionResultInfo = admissionResultInfo
  },
  ADMISSION_RESULTS_WAITING(state, waitingResult) {
    state.waitingResult = waitingResult
  },
  ADMISSION_ADDRESS(state, admission_address) {
    state.admission_address = admission_address
  },
  ADMISSION_NECESSARY_LINK(state, admission_necessary_list) {
    state.admission_necessary_list = admission_necessary_list
  },
  ADMISSION_BANNER(state, admission_banner) {
    state.admission_banner = admission_banner
  },
  ADMISSION_TEST_BANNER(state, admission_test_banner) {
    state.admission_test_banner = admission_test_banner
  },
  ADMISSION_RESULT_BANNER(state, admission_result_banner) {
    state.admission_result_banner = admission_result_banner
  },

}
export default {
  state,
  getters,
  actions,
  mutations,
}
