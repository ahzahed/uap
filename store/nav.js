const state = () => ({
    
  });
  
  const mutations = {
    toggleDrawer(state) {
      state.drawer = !state.drawer;
      if(state.searchbar  === true) {
        state.searchbar = !state.searchbar;
        }
    },
    toggleSearchBar(state) {
      state.searchbar = !state.searchbar;
    
    }
  };
  const actions = {
    TOGGLE_DRAWER({ commit }) {
      commit("toggleDrawer");
    },
    Toggle_SearchBar({ commit }) {
      commit("toggleSearchBar");
    }
  };
  const getters = {
    DRAWER_STATE(state) {
      return state.drawer;
    },
    SearchBar_STATE(state) {
      return state.searchbar;
    }
  };
  
  export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
  };