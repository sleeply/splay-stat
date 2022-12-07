import { urlV1 } from "@/network/index";

export async function getUsers(cb, start_at, end_at, period, pageSize, offset) {
  fetch(
    `${urlV1}/account-signup/date__gte=${start_at}&date__lte=${end_at}&limit=${pageSize}&offset${
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
