import { api } from "@/network";

const state = {
  devices: [],
  total: 0,
};
const getters = {
  devices: (state) => state.devices,
  total: (state) => state.total,
};
const actions = {
  getDevices(
    { commit },
    { cb = () => {}, created_at__gte = "", created_at__lt = "" }
  ) {
    api.apiDevice.getDevices(
      (data) => {
        commit("setDevices", data);
        cb();
      },
      created_at__gte,
      created_at__lt
    );
  },

  getDevicesTotal({commit}, {cb = () => {}}){
    api.apiDevice.getDevicesTotal((data) =>{
      commit("setTotal", data)
      cb()
    })
  }
};
const mutations = {
  setDevices(state, value) {
    state.devices = value;
  },
  flushDevices(state) {
    state.devices = [];
  },

  setTotal(state, value) {
    state.total = value;
  },
  flushTotal(state) {
    state.total = 0;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
