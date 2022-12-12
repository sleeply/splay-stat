import { api } from "@/network";

const state = {
  content: [],
};
const getters = {
  content: (state) => state.content,
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
};
const mutations = {
  setContent(state, value) {
    state.content = value;
  },
  flushContent(state) {
    state.content = [];
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
