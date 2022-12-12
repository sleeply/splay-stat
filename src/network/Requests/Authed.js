import { urlV1 } from "@/network/index";

export async function getUsers(
  cb,
  date__gte,
  date__lt,
  period,
  pageSize,
  offset
) {
  fetch(
    `${urlV1}/account-signup/?date__gte=${date__gte}&date__lt=${date__lt}&period=${period}&limit=${pageSize}&offset=${
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

export async function getSubsTotal(cb) {
  fetch(`${urlV1}/total/?model_type=account_signup`, {
    method: "GET",
  })
    .then((res) => {
      return res.json();
    })
    .then((json) => {
      cb(json["count"]);
    });
}
