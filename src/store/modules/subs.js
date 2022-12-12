import { api } from "@/network";

const state = {
  subs: [],
  subsTotal: 0,
};
const getters = {
  subs: (state) => state.subs,
  subsTotal: (state) => state.subsTotal,
};
const actions = {
  getSubs({ commit }, { cb = () => {}, date__gte = "", date__lte = "" }) {
    api.apiSubs.getSubs(
      (data) => {
        commit("setSubs", data);
        cb();
      },
      date__gte,
      date__lte
    );
  },

  getSubsTotal({ commit }, { cb = () => {} }) {
    api.apiSubs.getSubsTotal((data) => {
      commit("setSubsTotal", data);
      cb();
    });
  },
};
const mutations = {
  setSubs(state, value) {
    state.subs = value;
  },
  flushSubs(state) {
    state.subs = [];
  },
  setSubsTotal(state, value) {
    state.subsTotal = value;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
