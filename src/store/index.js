import { createStore } from "vuex";

import authed from "./modules/authed";
import subs from "./modules/subs";
import content from "./modules/content";
import device from "./modules/device";

export default function () {
  return createStore({
    modules: {
      authed,
      subs,
      content,
      device,
    },
  });
}
