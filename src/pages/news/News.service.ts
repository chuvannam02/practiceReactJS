// src/pages/news/news.service.ts

import { axiosWithAbort } from "../../_utilities/auth/axiosWithAbort";
import { INews } from "./News.model";

const baseUrl = "https://jsonplaceholder.typicode.com";

export const newsService = {
  async getAll(limit = 10): Promise<INews[]> {
    const res = await axiosWithAbort.get<INews[]>(
      `${baseUrl}/posts?_limit=${limit}`
    );
    return res.data;
  },

  abortAll() {
    axiosWithAbort.abortAll();
  },
};
