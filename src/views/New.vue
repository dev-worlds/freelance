<template>
  <form class="card" @submit.prevent="handleSubmit">
    <h1>Создать новую задачу</h1>
    <div class="form-control">
      <label for="title">Название</label>
      <input type="text" id="title" v-model="title">
    </div>

    <div class="form-control">
      <label for="date">Дата дэдлайна</label>
      <input type="date" id="date" v-model="date">
    </div>

    <div class="form-control">
      <label for="description">Описание</label>
      <textarea id="description" v-model="description"></textarea>
    </div>

    <button class="btn primary" :disabled="!isFormValid">Создать</button>
  </form>
</template>


<script setup>
import {computed, ref} from "vue";
import {useStore} from "vuex";
import {useRouter} from "vue-router";

const store = useStore()
const router = useRouter()

const title = ref('')
const date = ref('')
const description = ref('')

const handleSubmit = () => {
  if (isFormValid) {
    const timestampFinish = new Date(date.value).getTime()
    let status = 'active';
    if (timestampFinish < Date.now()) {
      status = 'cancelled'
    }
    store.dispatch('task/addTask', {
      title: title.value,
      date: date.value,
      description: description.value,
      status: status
    });
    router.push('/')
  }
}

const isFormValid = computed(() => {
  return title.value && date.value && description.value
})
</script>