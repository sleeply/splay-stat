import { api } from "@/network";

const state = {
  content: [],
  cats: [],
  sponsors: [],
};
const getters = {
  content: (state) => state.content,
  cats: (state) => state.cats,
  sponsors: (state) => state.sponsors,
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
  getSponsors({ commit }, { cb = () => {} }) {
    api.apiContent.getSponsors((data) => {
      commit("setSponsors", data);
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

  setSponsors(state, value) {
    state.sponsors = value;
  },
  flushSponsors(state) {
    state.sponsors = [];
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
