// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App/App'
import router from './router'
import iView from 'iview'
import VueIconFont from 'vue-icon-font'
import './iview-theme.less'
import './plugins/iview.js'
import './style.less'
import VueAnalytics from 'vue-analytics'

// Do not want to use this right now
/*Vue.use(VueAnalytics, {
  id: process.env.VUE_APP_GOOGLE_ANALYTICS,
  disabled: true
})*/

Vue.config.productionTip = false

Vue.use(iView)
Vue.use(VueIconFont)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
