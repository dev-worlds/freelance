<template>
  <div class="card">
    <h2 class="card-title">
      {{ task.title }}
      <AppStatus :type="task.status"/>
    </h2>
    <p>
      <strong>
        <small>
          {{ task.date }}
        </small>
      </strong>
    </p>
    <button class="btn primary" @click.prevent="handleClickOpen">Посмотреть</button>
  </div>
</template>

<script setup>
import AppStatus from '../components/AppStatus'
import {useRouter} from "vue-router";

const router = useRouter()
const props = defineProps({
  task: {
    type: Object,
    required: true
  }
})

const handleClickOpen = () => {
  router.push(`/task/${props.task.id}`)
}
</script>

<style scoped>

</style>