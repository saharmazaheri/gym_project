import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'

import { Routes } from './Routes'
import { Store } from './store/Store.js';

Vue.use(VueRouter);

const router = new VueRouter({
  routes: Routes,
  mode: 'history',
  scrollBehavior() {
    return {
      x: 0,
      y: 0
    }
  }
});

new Vue({
  el: '#app',
  router,
  Store,
  render: h => h(App)
})
