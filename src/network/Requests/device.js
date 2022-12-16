import { urlV1 } from "@/network/index";

export async function getDevices(cb, created_at__gte, created_at__lt) {
  fetch(
    `${urlV1}/session-types/?created_at__gte=${created_at__gte}&created_at__lt=${created_at__lt}`,
    {
      method: "GET",
    }
  )
    .then((res) => {
      return res.json();
    })
    .then((json) => {
      cb(json);
    });
}

export async function getDevicesTotal(cb) {
  fetch(`${urlV1}/total/?model_type=session_types`, {
    method: "GET",
  })
    .then((res) => {
      return res.json();
    })
    .then((json) => {
      cb(json["count"]);
    });
}
