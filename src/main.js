// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'
import ElementUI from 'element-ui'// New Added
import 'element-ui/lib/theme-chalk/index.css'// New Added
import App from './App'
Vue.config.productionTip = false

/* eslint-disable no-new */
// 依赖这个库
Vue.use(ElementUI)// New Added
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
