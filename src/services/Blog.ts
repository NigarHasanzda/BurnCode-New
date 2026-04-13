import api from "@/lib/api";
import { BlogResponse } from "@/types/BlogType";

export const getBlogPosts = async (page: number, lang: string): Promise<BlogResponse> => {
  const res = await api.get<BlogResponse>(`/blog?page=${page}`, {
    headers: { "Accept-Language": lang },
  });
  return res.data;
};