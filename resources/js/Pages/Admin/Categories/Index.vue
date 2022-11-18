<script setup>
import { reactive, ref, h } from 'vue'
import InputControl from '@/Components/forms/InputControl.vue'
import DataTable from '@/Components/Base/DataTable'
import Modal from '@/Components/Base/Modal'
import PrimaryButton from "@/Components/Base/PrimaryButton"
import ActionDropdown from "@/Components/Base/ActionDropdown"
import { useForm } from '@inertiajs/inertia-vue3'
import { NDataTable, NButton, NPagination } from 'naive-ui'

const props = defineProps({
  data: {
    type: Object,
    default: () => ({})
  }
})


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

const columns = [
  {
    title: "No",
    key: "no",
    render(row, i) {
      return i + 1
    }
  },
  {
    title: "name",
    key: "name"
  },
  {
    title: "Description",
    key: "description"
  },
  {
    title: "Action",
    key: "actions",
    render(row) {
      return h(NButton, {}, { default: () => "Play" })
    }
  },
]

const onChangePage = page => {
  console.log({ page })
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
      <h1 class="">Categories</h1>

      <NButton @click="createModalStatus = true">Create New</NButton>
    </div>

    <!-- <DataTable :data="props.data.data" :fields="fields">
      <template #action>
        <ActionDropdown>

        </ActionDropdown>
      </template>
    </DataTable> -->

    <div class="border rounded">
      <n-data-table :columns="columns" :data="data.data" :bordered="false" :max-height="650" />

      <div class="my-4 flex justify-end">
        <n-pagination @update:page="onChangePage" :page="data.meta.current_page" :page-size="data.meta.per_page" :item-count="data.meta.total" show-size-picker :page-sizes="[25, 50, 75, 100]" />
      </div>
    </div>

    <Modal v-model="createModalStatus">
      <h1 class="mb-3">Create Category</h1>

      <form @submit.prevent="create">
        <InputControl stack v-model="createForm.name" label="Name" :error="createForm.errors?.name" class="mb-3" />
        <InputControl stack v-model="createForm.description" label="Description" :error="createForm.errors?.description" class="mb-3" />

        <div class="flex justify-end">
          <PrimaryButton :loading="createForm.processing" type="submit">Save</PrimaryButton>
        </div>
      </form>
    </Modal>
  </div>
</template>

<style lang="scss" scoped>
</style>
