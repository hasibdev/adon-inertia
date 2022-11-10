<script setup>

const props = defineProps({
  loading: {
    type: Boolean,
    default: false
  },
  type: {
    type: String,
    default: 'button'
  }
})
</script>

<template>
  <button :disabled="loading" :type="type" class="p-3 bg-teal-600 text-white rounded">
    <p v-if="loading" class="flex items-center">
    <div>
      <div class="lds-dual-ring"></div>
    </div>
    <span class="ml-2">Loading...</span>
    </p>
    <slot v-else />
  </button>
</template>

<style lang="scss" scoped>
.lds-dual-ring {
  display: inline-block;
  width: 20px;
  height: 20px;
}

.lds-dual-ring:after {
  content: " ";
  display: block;
  width: 12px;
  height: 12px;
  margin: 8px;
  border-radius: 50%;
  border: 6px solid #fff;
  border-color: #fff transparent #fff transparent;
  animation: lds-dual-ring 1.2s linear infinite;
}

@keyframes lds-dual-ring {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}
</style>