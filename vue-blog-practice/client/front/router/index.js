import Vue from 'vue'
import Router from 'vue-router'
import ArticleList from 'f@/components/ArticleList'
import ArticleDetail from 'f@/components/ArticleDetail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ArticleList',
      component: ArticleList
    },
    {
      path: '/detail/:id',
      name: 'ArticleDetail',
      component: ArticleDetail
    }
  ]
})
