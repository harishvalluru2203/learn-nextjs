import { http, HttpResponse } from "msw";

export const handlers = [
  http.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/user`, () => {
    return HttpResponse.json([{ id: 1, name: "Mock User" }]);
  }),
  http.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/posts`, () => {
    return HttpResponse.json([{ id: 1, title: "Mock Posts" }]);
  }),
];
