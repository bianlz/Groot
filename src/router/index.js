import Vue from 'vue'
import Login from '@/components/view/login/login'
import Dashboard from '@/components/view/dashboard/dashboard'
import User from '@/components/view/user/user'


let routes = [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard,
      children: [
          { path: '/page4', component: User, name: '页面4' }
      ]
    }
  ]




export default routes;
