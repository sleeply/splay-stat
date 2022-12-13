import { urlV1 } from "@/network/index";

export async function getContent(
  cb,
  filters = "",
  date__gte,
  ordering,
  search="",
  pageSize,
  offset,
) {
  let filtersQuery = "";
  for (const filterName in filters) {
    filtersQuery += `&${filterName}=${filters[filterName]}`;
  }
  fetch(
    `${urlV1}/content-video/?created_at__gte=${date__gte}&ordering=${ordering}${filtersQuery}&search=${search}&limit=${pageSize}&offset=${
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

export async function getCategories(cb) {
  fetch(`${urlV1}/category/`, {
    method: "GET",
  })
    .then((res) => {
      return res.json();
    })
    .then((json) => {
      cb(json);
    });
}

export async function getSponsors(cb) {
  fetch(`${urlV1}/sponsors/`, {
    method: "GET",
  })
    .then((res) => {
      return res.json();
    })
    .then((json) => {
      cb(json);
    });
}
