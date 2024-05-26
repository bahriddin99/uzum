import { getCookies } from '@cooki';
import axios  from 'axios';
import type { AxiosInstance } from 'axios';

export const request : AxiosInstance = axios.create({
      baseURL: import.meta.env.VITE_BASE_URL,
      timeout: 48000,
})


request.interceptors.request.use((config) => {
      const access_token = getCookies("access_token")
      if (access_token) {
          config.headers["Authorization"] = access_token
      }
      return config
  })

