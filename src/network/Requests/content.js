import { urlV1 } from "@/network/index";

export async function getContent(cb, filters = "", date__gte, ordering) {
  let filtersQuery = "";
  for (const filterName in filters) {
    filtersQuery += `&${filterName}=${filters[filterName]}`;
  }
  fetch(
    `${urlV1}/content-video/?updated_at=${date__gte}&ordering=${ordering}${filtersQuery}`,
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
