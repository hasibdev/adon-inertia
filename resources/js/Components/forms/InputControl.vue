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
  },
  stack: {
    type: Boolean,
    default: false
  },
  placeholder: {
    type: String,
  },
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
  <div :class="`flex ${stack ? 'flex-col' : 'flex-col lg:flex-row'}`">
    <!-- Label -->
    <div :class="`${stack ? 'w-full mb-2' : 'lg:w-3/12 mb-2 lg:mb-0'}`">
      <label v-if="label" :for="getId">{{ label }}</label>
    </div>

    <!-- Input -->
    <div :class="`${stack ? 'w-full' : 'lg:w-9/12'}`">
      <input @input="onChange" :value="modelValue" :type="type" :id="getId"
        class="block py-2 px-3 border w-full rounded focus:outline-none focus-within:border-teal-700 focus-within:placeholder-transparent"
        :class="`${getError ? 'border-red-500' : ''}`" :placeholder="placeholder || label">

      <!-- Error -->
      <p v-if="getError" class="text-red-500 mt-1">{{ getError }}</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>

</style>