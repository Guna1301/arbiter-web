import axios from "axios";
import { getAuthToken } from "./authToken";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const api = axios.create({
  baseURL: `http://localhost:5000/api`,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(async (config) => {
  console.log("baseURL:", config.baseURL);
  console.log("url:", config.url);
  
  try {
    const token = await getAuthToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
  } catch (err) {
    console.error("Auth token error:", err);
  }
  return config;
});