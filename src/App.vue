<template>
  <the-navbar></the-navbar>
  <div class="container with-nav">
    <router-view/>
  </div>
</template>

<script setup>
import TheNavbar from './components/TheNavbar';
import {useStore} from "vuex";
import {onMounted} from "vue";

const store = useStore()

onMounted(() => store.dispatch('task/loadTasks'))
</script>

<style>

</style>
