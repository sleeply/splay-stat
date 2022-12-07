import { urlV1 } from "@/network/index";

export async function getUsers(cb, year, month, day, period, pageSize, offset) {
  fetch(
    `${urlV1}/account-signup/?year=${year}&month=${month}&day=${day}&period=${period}&limit=${pageSize}&offset=${
      pageSize * offset
    }`,
    {
      method: "GET",
    }
  )
    .then((res) => {
      return res.json();
    })
    .then((json) => {
      cb(json["results"], json["count"]);
    });
}
