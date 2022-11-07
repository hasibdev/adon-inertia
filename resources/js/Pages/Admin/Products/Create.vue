<script setup>
import { useForm } from '@inertiajs/inertia-vue3'
import InputControl from '@/Components/forms/InputControl.vue'

const form = useForm({
  name: '',
  price: '',
  description: '',
})

</script>

<script>
import AdminLayout from '@/Components/Layouts/AdminLayout'
export default {
  layout: AdminLayout
}
</script>

<template>
  <div>
    <h1 class="mb-4">Products Create</h1>

    <form @submit.prevent="form.post('/admin/products')">
      <InputControl v-model="form.name" label="Name" :error="form.errors?.name" class="mb-3" />
      <InputControl v-model="form.description" label="Description" :error="form.errors?.description" class="mb-3" />
      <InputControl v-model="form.price" label="Price" type="number" :error="form.errors?.price" class="mb-3" />


      <div class="flex justify-end">
        <button :disabled="form.processing" type="submit"
          class="p-3 bg-teal-600 text-white rounded w-1/3 text-lg ">Save</button>
      </div>
    </form>
  </div>
</template>

<style lang="scss" scoped>

</style>