/* global BUILD_ENV */
import axios from 'axios'
console.log('BUILD_ENV', BUILD_ENV)
const host = {
  local: '//mock-api.apuscn.com',
  dev: '//mock-api.apuscn.com',
  test: '//mock-api.apuscn.com',
  prod: '//mock-api.apuscn.com'
}[BUILD_ENV]

export default axios.create({
  baseURL: host
})
