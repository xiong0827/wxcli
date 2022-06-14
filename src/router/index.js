import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import routes from '@/router/router'

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior()
  {
    return {
      y:0
    }
  }
})

export default router
