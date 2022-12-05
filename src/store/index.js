import { createStore } from "vuex";

import authed from "./modules/authed";

export default function () {
  return createStore({
    modules: {
      authed,
    },
  });
}
