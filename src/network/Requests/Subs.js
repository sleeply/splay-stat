import { urlV1 } from "@/network/index";
export async function getSubs(cb, date__gte, date__lt) {
  fetch(
    `${urlV1}/account-signup/?date__gte=${date__gte}&date__lt=${date__lt}`,
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
