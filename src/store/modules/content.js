import { api } from "@/network";

const state = {
  content: [],
  contentPage: 0,
  contentCount: null,

  cats: [],
  sponsors: [],
};
const getters = {
  content: (state) => state.content,
  contentPage: (state) => state.contentPage,
  contentCount: (state) => state.contentCount,

  cats: (state) => state.cats,
  sponsors: (state) => state.sponsors,
};
const actions = {
  getContent(
    { commit, state },
    {
      cb = () => {},
      filters,
      date__gte = "",
      ordering = "",
      pageSize = 30,
      load = 1,
    }
  ) {
    api.apiContent.getContent(
      (data, count) => {
        commit("setContent", data);
        commit("setContentCount", count);
        // for (let i = 1; i <= load; i++) {
        //   commit("setContent", data.slice((i - 1) * pageSize, i * pageSize));
        //   commit("setContentPage");
        // }
        // commit("setContentCount", count);
        cb();
      },
      filters,
      date__gte,
      ordering,
      pageSize,
      state.contentPage * load
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

  setContentCount(state, value) {
    state.contentCount = value;
  },

  setContentPage(state, value) {
    state.contentPage = value;
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
