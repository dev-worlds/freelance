<template>
  <template v-if="tasks.length">
    <h3 class="text-white">Всего активных задач: {{ countActiveTask }}</h3>
    <CardTask v-for="task in tasks" :key="task.id" :task="task"/>
  </template>
  <h1 class="text-white center" v-else>Задач пока нет</h1>
</template>

<script setup>
import CardTask from "./CardTask";
import {useStore} from "vuex";
import {computed} from "vue";

const store = useStore();

const tasks = computed(() => store.getters['task/getTasks']);

const countActiveTask = computed(() => {
  return tasks.value.reduce((acc, current) => {
    return current.status === 'active' ? ++acc : acc
  }, 0)
})
</script>
