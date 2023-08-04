import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuelidate from 'vuelidate'
import App from './App.vue'

import { Routes } from './Routes'
import { store } from './store/Store.js';

Vue.use(VueRouter);
Vue.use(Vuelidate);

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
  store,
  render: h => h(App)
})
