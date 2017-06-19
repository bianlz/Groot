// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Router from 'vue-router'

import App from './App'
import routes from './router'


Vue.config.productionTip = false

Vue.use(Router)

const router = new Router({
  routes
})


router.beforeEach((to, from, next) => {
    // if (to.matched.some(r => r.meta.requireAuth)) {
    //     next({
    //             path: '/login',
                
    //         })
    // }
    // else {
    //     next();
    // }
    next();
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
