export const NODE_ENV = process.env.NODE_ENV

export const API_URL =
  process.env.REACT_APP_API_URL ||
  `${window.location.protocol}//${window.location.hostname}/api`

export const LOCAL_STORAGE_SECRET =
  process.env.REACT_APP_LOCAL_STORAGE_SECRET || 'secret'
