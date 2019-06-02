// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App/App'
import router from './router'
import VueIconFont from 'vue-icon-font'
import './style.less'
import VueAnalytics from 'vue-analytics'
import './antd-variables.less';
import Antd from 'ant-design-vue'
Vue.use(Antd)

// Do not want to use this right now
/*Vue.use(VueAnalytics, {
  id: process.env.VUE_APP_GOOGLE_ANALYTICS,
  disabled: true
})*/

Vue.config.productionTip = false
Vue.use(VueIconFont)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
