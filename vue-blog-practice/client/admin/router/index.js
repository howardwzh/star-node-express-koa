import Vue from 'vue'
import Router from 'vue-router'
import Login from 'a@/components/Login'
import Admin from 'a@/components/Admin'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/admin',
      name: 'Admin',
      component: Admin
    }
  ]
})
