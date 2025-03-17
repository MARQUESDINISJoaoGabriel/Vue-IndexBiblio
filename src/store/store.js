import { createStore } from 'vuex';

const saveToLocalStorage = (state) => {
  localStorage.setItem('library', JSON.stringify(state.library));
  localStorage.setItem('favorites', JSON.stringify(state.favorites));
};

const store = createStore({
  state: {
    library: JSON.parse(localStorage.getItem('library')) || [],
    favorites: JSON.parse(localStorage.getItem('favorites')) || [],
  },
  mutations: {
    ADD_ITEM(state, item) {
      state.library.push(item);
      saveToLocalStorage(state);
    },
    TOGGLE_FAVORITE(state, itemId) {
      const index = state.favorites.indexOf(itemId);
      if (index === -1) {
        state.favorites.push(itemId);
      } else {
        state.favorites.splice(index, 1);
      }
      saveToLocalStorage(state);
    },
    TOGGLE_STATUS(state, itemId) {
      const item = state.library.find(item => item.id === itemId);
      if (item) {
        item.status = !item.status;
      }
      saveToLocalStorage(state);
    },
    DELETE_ITEM(state, itemId) {
      state.library = state.library.filter(item => item.id !== itemId);
      state.favorites = state.favorites.filter(id => id !== itemId);
      saveToLocalStorage(state);
    }
  },
  actions: {
    addItem({ commit }, item) {
      commit('ADD_ITEM', item);
    },
    toggleFavorite({ commit }, itemId) {
      commit('TOGGLE_FAVORITE', itemId);
    },
    toggleStatus({ commit }, itemId) {
      commit('TOGGLE_STATUS', itemId);
    },
    deleteItem({ commit }, itemId) {
      commit('DELETE_ITEM', itemId);
    }
  },
  getters: {
    getLibrary: (state) => state.library,
    getFavorites: (state) => state.library.filter(item => state.favorites.includes(item.id))
  }
});

export default store;
