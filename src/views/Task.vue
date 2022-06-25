<template>
  <div class="card" v-if="task">
    <h2>{{ task.title }}</h2>
    <p><strong>Статус</strong>:
      <AppStatus :type="task.status"/>
    </p>
    <p><strong>Дэдлайн</strong>: {{ task.date }}</p>
    <p><strong>Описание</strong>: {{ task.description }}</p>
    <div>
      <button
          class="btn"
          v-if="task.status !== 'pending'"
          @click.prevent="setStatus('pending')"
      >Взять в работу
      </button>
      <button
          class="btn primary"
          v-if="task.status !== 'done'"
          @click.prevent="setStatus('done')"
      >Завершить
      </button>
      <button
          class="btn danger"
          v-if="task.status !== 'cancelled'"
          @click.prevent="setStatus('cancelled')"
      >Отменить
      </button>
    </div>
  </div>
  <h3 class="text-white center" v-else>
    Задачи с id = <strong>{{ taskId }}</strong> нет.
  </h3>
</template>

<script setup>
import AppStatus from '../components/AppStatus'
import {useStore} from "vuex";
import {useRoute} from "vue-router";

const store = useStore()
const route = useRoute()

const getTask = store.getters['task/getTask']
const taskId = +route.params.id
const task = getTask(+taskId)

const setStatus = (status) => store.dispatch('task/setStatus', {id: taskId, status})

</script>

<style scoped>

</style>