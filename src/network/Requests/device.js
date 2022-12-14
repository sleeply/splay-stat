import { urlV1 } from "@/network/index";

export async function getDevices(cb) {
  fetch(`${urlV1}/session-types/`, {
    method: "GET",
  })
    .then((res) => {
      return res.json();
    })
    .then((json) => {
      cb(json);
    });
}
