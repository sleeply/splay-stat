import { api } from "@/network";

const state = {
  users: {},
  usersCount: null,
  usersPage: 0,
  total: 0,
};
const getters = {
  users: (state) => state.users,
  usersCount: (state) => state.usersCount,
  usersPage: (state) => state.usersPage,
  total: (state) => state.total,
};
const actions = {
  getUsers(
    { commit, state },
    { cb = () => {}, date__gte, date__lt, period = "days", pageSize, load = 1 }
  ) {
    api.apiAuthed.getUsers(
      (data, count) => {
        for (let i = 1; i <= load; i++) {
          commit("setUsers", data.slice((i - 1) * pageSize, i * pageSize));
          commit("setUsersPage");
        }

        commit("setusersCount", count);

        cb();
      },
      date__gte,
      date__lt,
      period,
      pageSize,
      state.usersPage * load
    );
  },

  getAuthTotal({ commit }, { cb = () => {} }) {
    api.apiAuthed.getTotal((data) => {
      commit("setTotal", data);
      cb();
    });
  },
};
/* eslint-disable */
const mutations = {
  setUsers(state, value) {
    state.users = value;
  },

  setusersCount(state, value) {
    state.usersCount = value;
  },

  setUsersPage(state) {
    state.usersPage++;
  },

  flushUsers(state) {
    state.users = [];
    state.usersCount = null;
    state.usersPage = 0;
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
  actions,
  mutations,
};
