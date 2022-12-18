import axios, { AxiosInstance, AxiosRequestConfig } from 'axios'

type Interceptor = (axiosInstance: AxiosInstance) => void

// Service creator for REST requests
const restServiceCreator = (
  axiosRequestConfig: AxiosRequestConfig,
  requestInterceptors: Interceptor[] = [],
  responseInterceptors: Interceptor[] = []
) => {
  const requestConfig = {
    ...axiosRequestConfig,
    headers: {
      ...axiosRequestConfig.headers,
      'Content-Type': 'application/json'
    }
  }

  const service = axios.create(requestConfig)

  // Add request interceptors
  if (requestInterceptors) {
    requestInterceptors.forEach((interceptor: Interceptor) =>
      interceptor(service)
    )
  }

  // Add response interceptors
  if (responseInterceptors) {
    responseInterceptors.forEach((interceptor: Interceptor) =>
      interceptor(service)
    )
  }

  return service
}

export default restServiceCreator
