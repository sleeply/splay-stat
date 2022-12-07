import { api } from "@/network";

const state = {
  users: {},
  usersCount: null,
  usersPage: 0,
};
const getters = {
  users: (state) => state.users,
  usersCount: (state) => state.usersCount,
  usersPage: (state) => state.usersPage,
};
const actions = {
  getUsers(
    { commit, state },
    {
      cb = () => {},
      start_at = "",
      end_at = "",
      period = "days",
      pageSize,
      load = 1,
    }
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
      start_at,
      end_at,
      period,
      pageSize,
      state.usersPage * load
    );
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
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
