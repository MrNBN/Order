<template>
  <div id="app">
    <nav-left></nav-left>
    <router-view/> 
    
  </div>
</template>

<script>
	import NavLeft from '@/components/NavLeft'
export default {
  name: 'App',
  components:{
  	NavLeft
  }
}
</script>

<style>
/*#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}*/
</style>
