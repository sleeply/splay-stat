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
