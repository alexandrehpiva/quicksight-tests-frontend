import CryptoJS from 'crypto-js'
import { LOCAL_STORAGE_SECRET } from '../../envConfig'
import SecureStorage from '../../utils/secureWebStorage'

const secureStorage = new SecureStorage(localStorage, {
  hash(key: string) {
    return CryptoJS.SHA256(key).toString()
  },
  encrypt(data: string) {
    return CryptoJS.AES.encrypt(data, LOCAL_STORAGE_SECRET).toString()
  },
  decrypt(data: string) {
    return CryptoJS.AES.decrypt(data, LOCAL_STORAGE_SECRET).toString(
      CryptoJS.enc.Utf8
    )
  }
})

const LocalStorageService = {
  keys() {
    return Object.keys(secureStorage)
  },
  values() {
    return Object.values(secureStorage)
  },
  set(key: string, value: string) {
    secureStorage.setItem(key, JSON.stringify(value))
  },
  get(key: string) {
    return JSON.parse(secureStorage.getItem(key))
  },
  remove(key: string) {
    secureStorage.removeItem(key)
  },
  clear() {
    secureStorage.clear()
  }
}

export default LocalStorageService
