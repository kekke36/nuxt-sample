import { http, HttpResponse } from "msw";

export const books = [
  http.get("http://localhost:3000/api/books", () => {
    return HttpResponse.json({
      books: [
        { id: 1, title: "雨ニモマケズ", author: "宮沢 賢治" },
        { id: 2, title: "走れメロス", author: "太宰 治" },
        { id: 3, title: "こころ", author: "夏目 漱石" },
      ],
    });
  }),
];
