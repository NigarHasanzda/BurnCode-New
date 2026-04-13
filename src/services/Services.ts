import api from "@/lib/api";
import { Service } from "@/types/ServicesType";

export const fetchServices = async (lang: string): Promise<Service[]> => {
  try {
    const res = await api.get(`/services`, {
      headers: { "Accept-Language": lang },
    });
   
    // API-dan gələn datanın res.data.data daxilində olduğunu nəzərə alırıq
    return res.data.data;
  } catch (error) {
    console.error("fetchServices error:", error);
    return [];
  }
};