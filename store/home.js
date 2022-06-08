/* eslint-disable no-var */
/* eslint-disable no-console */
/* eslint-disable camelcase */
const state = () => ({
  welcome_info: [],
  banners: [],
  why_choose_uap: [],
  latest_news_lists: [],
  how_to_apply: [],
  topic_list: [],
  news: [],
  single_news_by_slug: {},
})

const getters = {
  banners: (state) => state.banners,
  welcome_info: (state) => state.welcome_info,
  why_choose_uap: (state) => state.why_choose_uap,
  latest_news_lists: (state) => state.latest_news_lists,
  topic_list: (state) => state.topic_list,
  how_to_apply: (state) => state.how_to_apply,
  news: (state) => state.news,
  single_news_by_slug: (state) => state.single_news_by_slug,
}

const actions = {
  async getBanner(context) {
    const data = await this.$axios.get(`/home/header/list`)
    context.commit('BANNER', data.data)
  },
  async welcomeInfo(context) {
    const data = await this.$axios.get(`/welcome/info`)
    context.commit('WELCOME_INFO', data.data)
  },
  async whyChooseUap(context) {
    const data = await this.$axios.get(`/why_choose_uap/info`)
    context.commit('WHY_CHOOSE_UAP', data.data)
  },
  async admissionAid(context) {
    const data = await this.$axios.get(`/admission_aid/info`)
    context.commit('ADMISSION_AID', data.data)
  },
  async newsList(context, page) {
    const data = await this.$axios.get(`/news/list?page=${page}`)
    context.commit('NEWS_LIST', data.data)
  },

  async newslatestList(context) {
    const data = await this.$axios.get(`/news/latest/list`)
    context.commit('NEWS_LATEST_LIST', data.data)
  },
  async getSingleNewsBySlug(context, value) {
    const data = await this.$axios.get(`/news/${value}/fetch`)
    context.commit('SINGLE_NEWS_BY_SLUG', data.data)
  },
  async filterByNews(context, payload) {
    const data = await this.$axios.get(
      `/news/${payload.date}/${payload.topic}/filter`
    )
    context.commit('NEWS_LIST', data)
  },
  async topicList(context) {
    const data = await this.$axios.get(`/news/topic/list`)
    context.commit('TOPIC_LIST', data.data)
  },
  async howToApply(context) {
    var time = 400
    const data = await this.$axios.get(`/how_to_apply/list`)
    data.data.forEach((element, i) => {
      // eslint-disable-next-line dot-notation
      element['duration'] = time
      // eslint-disable-next-line dot-notation
      element['duration'] = element.duration + time * i
    })

    context.commit('HOW_TO_APPLY', data.data)
  },
}

const mutations = {
  BANNER(state, banners) {
    state.banners = banners
  },
  WELCOME_INFO(state, welcome_info) {
    state.welcome_info = welcome_info
  },
  WHY_CHOOSE_UAP(state, why_choose_uap) {
    state.why_choose_uap = why_choose_uap
  },
  ADMISSION_AID(state, why_choose_uap) {
    state.why_choose_uap = why_choose_uap
  },
  NEWS_LATEST_LIST(state, latest_news_lists) {
    state.latest_news_lists = latest_news_lists
  },
  NEWS_LIST(state, news) {
    state.news = news
  },
  TOPIC_LIST(state, topic_list) {
    state.topic_list = topic_list
  },
  HOW_TO_APPLY(state, how_to_apply) {
    state.how_to_apply = how_to_apply
  },
  SINGLE_NEWS_BY_SLUG(state, section) {
    state.single_news_by_slug = section
  },
}
export default {
  state,
  getters,
  actions,
  mutations,
}
