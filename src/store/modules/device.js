import { api } from "@/network";

const state = {
  devices: [],
};
const getters = {
  devices: (state) => state.devices,
};
const actions = {
  getDevices({ commit }, { cb = () => {} }) {
    api.apiDevice.getDevices((data) => {
      commit("setDevices", data);
      cb();
    });
  },
};
const mutations = {
  setDevices(state, value) {
    state.devices = value;
  },
  flushDevices(state) {
    state.devices = [];
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
