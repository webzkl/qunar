import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index/index'
import city from '@/components/city/city'
import detail from '@/components/detail/detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/detail',
      name: 'detail',
      component: detail
    },
    {
      path: '/city',
      name: 'city',
      component: city
    }
  ]
})
