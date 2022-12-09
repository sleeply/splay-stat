export const BASE_URL =
  process.env.NODE_ENV === "production"
    ? "https://stat-api.splay.uz"
    : "http://192.168.5.141:8001";
    // : "https://stat-api.splay.uz";
// : "http://192.168.5.23:8002";

import * as apiAuthed from "./Requests/Authed";

export const API_V1 = "/api/v1";
export const urlV1 = `${BASE_URL}${API_V1}`;

export const api = {
  apiAuthed,
};
