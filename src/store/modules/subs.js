import { api } from "@/network";

const state = {
  subs: [],
};
const getters = {
  subs: (state) => state.subs,
};
const actions = {
  getSubs({ commit }, { cb = () => {}, date__gte = "", date__lt = "" }) {
    api.apiSubs.getSubs(
      (data) => {
        commit("setSubs", data);
        cb();
      },
      date__gte,
      date__lt
    );
  },
};
const mutations = {
  setSubs(state, value) {
    state.subs = value;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
