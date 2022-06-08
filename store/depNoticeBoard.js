/* eslint-disable no-console */
/* eslint-disable camelcase */
const state = () => ({
   
    banner: {},
    notices: []
 
  })
  
  
  const getters = {
   
    banner: state => state.banner,
    notices: state => state.notices,
  }
  
  const actions = {    
   
    getNoticeBoardBanner(context, value) {
        return new Promise((resolve, reject) => {
          context.commit('sidebar/toggleLoader', true, { root: true })
          this.$axios
            .get(`/department/notice/board/page/setting/${value}`)
            .then((result) => {
              context.commit('sidebar/toggleLoader', false, { root: true })
              resolve(result)
              if (result.data) {
                result.data.image = this.$config.baseURL + result.data.image
              }
              context.commit('BANNER', result.data)
            })
            .catch((error) => {
              reject(error)
            })
        })
      },
    
      async getNotices(context, value) {
        const data = await this.$axios.get(
          `/department/notice/board/${value}`
        )
        context.commit('NOTICES', data.data)
      },
 
  }
  
  const mutations = {
    
    BANNER(state, banner) {
      state.banner = banner
    },
    NOTICES(state, notices) {
      state.notices = notices
    },
   
  }
  export default {
    state,
    getters,
    actions,
    mutations,
  }
  