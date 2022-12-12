import { urlV1 } from "@/network/index";
export async function getSubs(cb, date__gte, date__lte) {
  fetch(
    `${urlV1}/transaction-history/?date__gte=${date__gte}&date__lte=${date__lte}`,
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

export async function getSubsTotal(cb) {
  fetch(`${urlV1}/total/?model_type=transactions`, {
    method: "GET",
  })
    .then((res) => {
      return res.json();
    })
    .then((json) => {
      cb(json["count"]);
    });
}
