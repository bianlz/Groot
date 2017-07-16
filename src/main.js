// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Router from 'vue-router'
import store from './store/store'
import App from './App'
import routes from './router'


Vue.config.productionTip = false

Vue.use(Router)

const router = new Router({
  routes
})


router.beforeEach((to, from, next) => {
    if (to.matched.some(r => r.meta.requireAuth)) {
      if(store.state.token) {            
          next();
      }else{
        next({
            path: '/',
            query: { redirect: to.fullPath }
        })
      }
    }else{
      next();
    }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
