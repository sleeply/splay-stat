import { api } from "@/network";

const state = {
  content: [],
  cats: [],
};
const getters = {
  content: (state) => state.content,
  cats: (state) => state.cats,
};
const actions = {
  getContent(
    { commit },
    { cb = () => {}, filters, date__gte = "", ordering = "" }
  ) {
    api.apiContent.getContent(
      (data) => {
        commit("setContent", data);
        cb();
      },
      filters,
      date__gte,
      ordering
    );
  },

  getCats({ commit }, { cb = () => {} }) {
    api.apiContent.getCategories((data) => {
      commit("setCats", data);
      cb();
    });
  },
};
const mutations = {
  setContent(state, value) {
    state.content = value;
  },
  flushContent(state) {
    state.content = [];
  },
  setCats(state, value) {
    state.cats = value;
  },
  flushCats(state) {
    state.cats = [];
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
