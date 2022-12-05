import { urlV1 } from "@/network/index";

export async function getUsers(cb) {
  fetch(`${urlV1}//account-signup/`, {
    method: "GET",
  })
    .then((res) => {
      return res.json();
    })
    .then((json) => {
      cb(json["results"], json["count"]);
    });
}
