import { AxiosInstance } from 'axios'
import LocalStorageService from '../../../../services/LocalStorageService/index';

const authTokenInterceptor = (axiosInstance: AxiosInstance) => {
  axiosInstance.interceptors.request.use((config) => {
    const token = LocalStorageService.get('token')

    if (token) {
      config.headers = {
        ...config.headers,
        Authorization: `Bearer ${token}`
      }
    }

    return config
  })
}

export default authTokenInterceptor
