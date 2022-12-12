import { createStore } from "vuex";

import authed from "./modules/authed";
import subs from "./modules/subs";
import content from "./modules/content";

export default function () {
  return createStore({
    modules: {
      authed,
      subs,
      content,
    },
  });
}
