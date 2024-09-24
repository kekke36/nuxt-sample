import { http, HttpResponse } from "msw";

export const todos = [
  http.post("http://localhost:3000/todos", () => {
    return HttpResponse.json({
      title: "post",
    });
  }),
];
