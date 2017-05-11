import Axios from 'axios'
const apiUrl = 'http://localhost:39000'

export default {
  login (name = '', pwd = '') {
    return Axios.post(`${apiUrl}/auth/login`, {name: name, pwd: pwd})
  }
}
