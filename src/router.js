import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import store from './store'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      beforeEnter: guardRoute,
      meta: {
          requiresAuth: true
      },
    },
    {
      path: '/login',
      name: 'login',
      component: () => import( './views/Login.vue'),
   
    },
    {
      path: '/register',
      name: 'register',
      component: () => import( './views/Register.vue'),  
  },
  {
    path: '*',
    redirect: '/login'
}
  
   
  ]
})

function guardRoute(to, from, next) {

  const auth = store.state.auth
  if (!auth.isLoggedIn) {
      next({
          name: 'login'
      })
  } else {
      next()
  } 
}
