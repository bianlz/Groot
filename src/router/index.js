import Vue from 'vue'
import Login from '@/components/view/login/login'
import Dashboard from '@/components/view/dashboard/dashboard'
import Edit from '@/components/view/user/edit'


let routes = [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      meta:{
        requireAuth:true
      },
      component: Dashboard,
      children: [
          { path: '/dashboard/edit', component: Edit, name: '用户修改' ,meta:{requireAuth:true}}
      ]
    }
  ]




export default routes;
