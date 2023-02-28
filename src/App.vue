<template>
  <div class="flex flex-col min-h-screen bg-weather-prime">
    <SiteNavigation/>
    <RouterView />
  </div>
</template>

<script setup>
import {RouterView} from 'vue-router';
import SiteNavigation from './components/icons/SiteNavigation.vue';
</script>

<style lang="scss" scoped></style>