<script setup>
import { RouterLink, RouterView } from 'vue-router'
import AppHeader from '@/components/AppHeader.vue'
import Footer from '@/components/Footer.vue'
</script>

<template>
  <div id="app">
    <AppHeader/>
    <router-view></router-view>
    <Footer/>
  </div>

</template>

<style>

#app {
  margin: 0 auto;
  font-weight: normal;
  border:0;
  box-sizing:border-box;
}

</style>
