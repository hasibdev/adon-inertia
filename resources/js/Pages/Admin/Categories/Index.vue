<script setup>
import { ref } from 'vue'
import InputControl from '@/Components/forms/InputControl.vue'
import DataTable from '@/Components/Base/DataTable'
import Modal from '@/Components/Base/Modal'
import PrimaryButton from "@/Components/Base/PrimaryButton"
import { useForm } from '@inertiajs/inertia-vue3'

const props = defineProps({
  data: {
    type: Object,
    default: () => ({})
  }
})

const fields = ['name', 'description']

const createModalStatus = ref(false)
const createForm = useForm({
  name: '',
  description: '',
})

const create = () => {
  createForm.post('/admin/categories', {
    onSuccess: () => {
      createModalStatus.value = false
      createForm.reset()
    }
  })
}
</script>

<script>
import AdminLayout from '@/Components/Layouts/AdminLayout'
export default {
  layout: AdminLayout
}
</script>

<template>
  <div>
    <div class="mb-4 flex justify-between">
      <h1>Categories</h1>

      <button @click="createModalStatus = true">Create New</button>
    </div>

    <DataTable :data="props.data.data" :fields="fields"></DataTable>

    <Modal v-model="createModalStatus">
      <h1 class="mb-3">Create Category</h1>

      <form @submit.prevent="create">
        <InputControl stack v-model="createForm.name" label="Name" :error="createForm.errors?.name" class="mb-3" />
        <InputControl stack v-model="createForm.description" label="Description" :error="createForm.errors?.description"
          class="mb-3" />

        <div class="flex justify-end">
          <PrimaryButton :loading="createForm.processing" type="submit">Save</PrimaryButton>
        </div>
      </form>
    </Modal>
  </div>
</template>

<style lang="scss" scoped>

</style>