<template>
  <div class="app">
    <Header/>
    <Main/>
    <Footer/>
  </div>
</template>

<script>
import Header from '@/components/Header'
import Main from '@/components/Main'
import Footer from '@/components/Footer'
export default {
  name: 'App',
  components: {
    Header,
    Main,
    Footer
  }
}
</script>

<style>
.app{
  position: relative;
	min-height: 100%;
}
</style>