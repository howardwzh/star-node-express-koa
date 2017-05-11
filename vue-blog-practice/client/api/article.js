import Axios from 'axios'
const apiUrl = 'http://localhost:39000'

export default {
  getAllArticles (tag = '', page = 1, limit = 0) {
    return Axios.get(`${apiUrl}/api/articles?tag=${tag}&page=${page}&limit=${limit}`)
  },
  getAllPublishArticles (tag = '', page = 1, limit = 0) {
    return Axios.get(`${apiUrl}/api/publishArticles?tag=${tag}&page=${page}&limit=${limit}`)
  },
  getArticleDetail (id = '') {
    return Axios.get(`${apiUrl}/api/articles/${id}`)
  }
}
