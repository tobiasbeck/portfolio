import Vue from 'vue'
import Router from 'vue-router'
import IndexPage from '@/pages/index/IndexPage'
import LegalPage from '@/pages/legal/LegalPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: IndexPage
    },
    {
      path: '/legal-notes',
      name: 'Legal',
      component: LegalPage
    }
  ]
})
