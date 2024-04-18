import axios from "axios";

export const AxiosInstance = axios.create({
  // baseURL: "http://localhost:5010/api",
  baseURL: "https://lokibackend.webxnep.com/api",
});

// AxiosInstance.interceptors.request.use((config) => {
//   const accessToken = localStorage.getItem("accessToken");
//   // config.headers.Authorization = `Bearer ${accessToken}`;
//   config.headers.Authorization = accessToken;
//   return config;
// });
