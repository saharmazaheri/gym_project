<template>
  <div id="app">
    <appHeader />
    <appFooter />
  </div>
</template>

<script>
import Header from './pages/shared/Header.vue'
import Footer from './pages/shared/Footer.vue'
export default {
  components: {
    appHeader: Header,
    appFooter: Footer
  }
}
</script>