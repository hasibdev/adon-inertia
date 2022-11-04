<script setup>
import { computed } from 'vue'

const emit = defineEmits(['update:modelValue'])
const props = defineProps({
  modelValue: {
    type: [Number, String],
    default: ''
  },
  type: {
    type: String,
    default: 'text'
  },
  label: {
    type: String,
    default: ''
  },
  id: {
    type: String,
    default: ''
  },
  error: {
    type: [Array, String],
    default: ''
  }
})

const onChange = (e) => {
  emit('update:modelValue', e.target.value)
}

const getId = computed(() => {
  if (props.id) return props.id

  const id = props.label.trim().split(' ').join('_')
  const random = `${Math.random()}`.substring(10)
  return `${id}_${random}`
})

const getError = computed(() => {
  return Array.isArray(props.error) ? props.error[0] : props.error
})

</script>

<template>
  <div class="flex">
    <!-- Label -->
    <div>
      <label v-if="props.label" :for="getId">{{ props.label }}</label>
    </div>

    <!-- Input -->
    <div>
      <input @input="onChange" :value="props.modelValue" :type="props.type" :id="getId"
        class="block p-2 border w-full rounded mb-3 focus:outline-none focus-within:border-teal-700">

      <!-- Error -->
      <p v-if="getError" class="text-red-500">{{ getError }}</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>

</style>