<script setup>
import DataTable from '@/Components/Base/DataTable'

const props = defineProps({
  data: {
    type: Object,
    default: () => ({})
  }
})

const fields = ['name', 'description', 'price']
</script>

<script>
import AdminLayout from '@/Components/Layouts/AdminLayout'
export default {
  layout: AdminLayout
}
</script>

<template>
  <div>
    <div class="flex justify-between mb-4">
      <h1>Products list</h1>
      <Link href="/admin/products/create">Create New</Link>
    </div>

    <DataTable :data="props.data.data" :fields="fields"></DataTable>
  </div>
</template>

<style lang="scss" scoped>

</style>