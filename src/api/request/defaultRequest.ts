import { API_URL } from '../../envConfig'
import authTokenInterceptor from './interceptors/req/authTokenInterceptor'
import restServiceCreator from './restServiceCreator'

const baseURL = API_URL

export const defaultRequest = restServiceCreator(
  { baseURL },
  [authTokenInterceptor],
)
