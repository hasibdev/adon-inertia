<script setup>
const props = defineProps({
  user: {
    type: Object
  }
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
    <div class="flex">
      <div class="w-6/12 mx-auto border rounded p-8">
        <h1>Admin Profile</h1>

        <h1>{{ user.full_name }}</h1>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>

</style>