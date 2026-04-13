import axios from "axios";

const api = axios.create({
  baseURL: "https://p.burncode.org/api",
});

// api.interceptors.request.use((config) => {
//   if (typeof window !== "undefined") {
//     const lang = localStorage.getItem("lang") || "en";
//     config.headers?.set("Accept-Language", lang);
//   }
//   return config;
// });

// export const setLanguage = (lang: string) => {
//   if (typeof window !== "undefined") {
//     localStorage.setItem("lang", lang);
//     if (api.defaults.headers) {
//       (api.defaults.headers as any).set?.("Accept-Language", lang);
//     }
//   }
// };

export default api;