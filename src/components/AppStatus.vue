<template>
  <span :class="['badge', getStatusClass]">{{ getStatusName }}</span>
</template>

<script setup>
import {STATUSES} from "@/js/utils";
import {computed} from "vue";

const props = defineProps({
  type: {
    type: String,
    default: 'active',
  }
})
const getStatusName = computed(() => {
  return STATUSES[props.type]
})

const getStatusClass = computed(() => {
  switch (props.type) {
    case 'done':
    case 'active':
      return 'primary'
    case 'cancelled':
      return 'danger'
    case 'pending':
      return 'warning'
  }
})
</script>