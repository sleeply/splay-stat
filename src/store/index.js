import { createStore } from "vuex";

import authed from "./modules/authed";
import subs from "./modules/subs";

export default function () {
  return createStore({
    modules: {
      authed,
      subs,
    },
  });
}
