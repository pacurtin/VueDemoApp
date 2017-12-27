// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  // passing Vue parameters via its constructor
  // defines output of vue should be rendered to <div id="app"> of index.html
  el: '#app',
  // gives access to this.router
  router,
  // App.vue html
  template: '<App/>',
  // list of components.
  components: { App }
})
