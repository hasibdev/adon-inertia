<script setup>
import AdminHeader from "./AdminHeader.vue"
import AdminSidebar from "./AdminSidebar.vue"
</script>

<template>
  <div>
    <AdminHeader class="h-18 border-b" />

    <div class="body-content">
      <AdminSidebar class="w-20 border-r" />

      <!-- Page Outupt -->
      <div class="bg-slate-50 p-6 w-full">
        <slot />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
$header_height: 4.5rem;

.h-18 {
  height: $header_height;
}

.body-content {
  display: flex;
  width: 100%;
  height: calc(100vh - $header_height);
  overflow: hidden;
}
</style>