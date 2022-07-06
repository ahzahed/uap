const state = () => ({
  post_admission_info_banner: {},
  post_why_uap: [],
  post_general_info: {},
  post_procedure: [],
  post_other_info: [],

  under_admission_info_banner: {},
  under_why_uap: [],
  under_general_info: {},
  under_procedure: [],
  under_other_info: [],
})

const getters = {
  post_admission_info_banner: (state) => state.post_admission_info_banner,
  post_why_uap: (state) => state.post_why_uap,
  post_general_info: (state) => state.post_general_info,
  post_procedure: (state) => state.post_procedure,
  post_other_info: (state) => state.post_other_info,

  under_admission_info_banner: (state) => state.under_admission_info_banner,
  under_why_uap: (state) => state.under_why_uap,
  under_general_info: (state) => state.under_general_info,
  under_procedure: (state) => state.under_procedure,
  under_other_info: (state) => state.under_other_info,
}

const actions = {
  postAdmissionInfoBanner(context, value) {
    return new Promise((resolve, reject) => {
      context.commit('sidebar/toggleLoader', true, { root: true })
      this.$axios
        .get(`/department/admission/info/page/setting/${value}/PostGraduates`)
        .then((result) => {
          context.commit('sidebar/toggleLoader', false, { root: true })
          resolve(result)
          if (result.data) {
            result.data.image = this.$config.baseURL + result.data.image
          }
          context.commit('POST_ADMISSION_INFO_BANNER', result.data)
        })
        .catch((error) => {
          reject(error)
        })
    })
  },

  async getPostWhyUap(context, value) {
    const data = await this.$axios.get(
      `/department/admission/info/why/uap/${value}/PostGraduates`
    )
    context.commit('POST_WHY_UAP', data.data)
  },

  async getPostGeneralInfo(context, value) {
    const data = await this.$axios.get(
      `/department/admission/general/info/${value}/PostGraduates`
    )
    context.commit('POST_GENERAL_INFO', data.data)
  },

  async getPostProcedure(context, value) {
    const data = await this.$axios.get(
      `/department/admission/procedure/${value}/PostGraduates`
    )
    context.commit('POST_PROCEDURE', data.data)
  },
  async getPostOtherInfo(context, value) {
    const data = await this.$axios.get(
      `/department/admission/other/info/${value}/PostGraduates`
    )
    context.commit('POST_OTHER_INFO', data.data)
  },

  //   under graduate
  underAdmissionInfoBanner(context, value) {
    return new Promise((resolve, reject) => {
      context.commit('sidebar/toggleLoader', true, { root: true })
      this.$axios
        .get(`/department/admission/info/page/setting/${value}/Undergraduates`)
        .then((result) => {
          context.commit('sidebar/toggleLoader', false, { root: true })
          resolve(result)
          if (result.data) {
            result.data.image = this.$config.baseURL + result.data.image
          }
          context.commit('UNDER_ADMISSION_INFO_BANNER', result.data)
        })
        .catch((error) => {
          reject(error)
        })
    })
  },

  async getUnderWhyUap(context, value) {
    const data = await this.$axios.get(
      `/department/admission/info/why/uap/${value}/Undergraduates`
    )
    context.commit('UNDER_WHY_UAP', data.data)
  },

  async getUnderGeneralInfo(context, value) {
    const data = await this.$axios.get(
      `/department/admission/general/info/${value}/Undergraduates`
    )
    context.commit('UNDER_GENERAL_INFO', data.data)
  },

  async getUnderProcedure(context, value) {
    const data = await this.$axios.get(
      `/department/admission/procedure/${value}/Undergraduates`
    )
    context.commit('UNDER_PROCEDURE', data.data)
  },
  async getUnderOtherInfo(context, value) {
    const data = await this.$axios.get(
      `/department/admission/other/info/${value}/Undergraduates`
    )
    context.commit('UNDER_OTHER_INFO', data.data)
  },
}

const mutations = {
  POST_ADMISSION_INFO_BANNER(state, section) {
    state.post_admission_info_banner = section
  },
  POST_WHY_UAP(state, section) {
    state.post_why_uap = section
  },
  POST_GENERAL_INFO(state, section) {
    state.post_general_info = section
  },
  POST_PROCEDURE(state, section) {
    state.post_procedure = section
  },
  POST_OTHER_INFO(state, section) {
    state.post_other_info = section
  },

  //   under graduate
  UNDER_ADMISSION_INFO_BANNER(state, section) {
    state.under_admission_info_banner = section
  },
  UNDER_WHY_UAP(state, section) {
    state.under_why_uap = section
  },
  UNDER_GENERAL_INFO(state, section) {
    state.under_general_info = section
  },
  UNDER_PROCEDURE(state, section) {
    state.under_procedure = section
  },
  UNDER_OTHER_INFO(state, section) {
    state.under_other_info = section
  },
}
export default {
  state,
  getters,
  actions,
  mutations,
}
