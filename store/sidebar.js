const state = () => ({
    drawer: false,
    searchbar: false,
    loader:false,
  });
  
  const mutations = {
    toggleDrawer(state) {
      state.drawer = !state.drawer;
      if(state.searchbar  === true) {
        state.searchbar = !state.searchbar;

        }

        if(state.drawer === true) {
          document.body.classList.add('overly_body',)
        }else{
          document.body.classList.remove('overly_body')
        }
    },
    toggleSearchBar(state) {
      state.searchbar = !state.searchbar;
    
    },
    toggleLoader(state, payload) {
      state.loader = payload;
    
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
    loader(state) {
      return state.loader;
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