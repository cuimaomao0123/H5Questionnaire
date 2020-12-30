<style>
html,body{
  height: 100%;
  width: 100%;
}
#app{
  height: 100%;
  width: 100%;
}
</style>

<template>
  <div id="app">
    <Ios v-if="ios"/>
    <Android v-if="android"/>
  </div>
</template>

<script>
import Ios from './components/Ios.vue'
import Android from './components/Android'

export default {
  name: 'App',
  data(){
    return {
      android: false,
      ios: false
    }
  },
  components: {
    Ios,
    Android
  },
  created(){
    const u = navigator.userAgent;
    let isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1;   //android终端
    let isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);               //ios终端
    if(isAndroid){
      this.android = true
      return;
    }
    if(isiOS){
      this.ios = true;
      return;
    }
  }
}
</script>


