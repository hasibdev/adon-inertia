<script setup>
import { useForm } from '@inertiajs/inertia-vue3'
import InputControl from '@/Components/forms/InputControl.vue'

const props = defineProps({

})

const form = useForm({
  first_name: '',
  last_name: '',
  email: '',
  password: '',
  confirmed_password: '',
})

</script>

<template>
  <div>
    <div class="w-3/5 mx-auto">
      <h1 class="my-10">Register Page</h1>

      <form @submit.prevent="form.post('/register')">
        <InputControl v-model="form.first_name" label="First Name" :error="form.errors?.first_name" class="mb-3" />
        <InputControl v-model="form.last_name" label="Last Name" :error="form.errors?.last_name" class="mb-3" />
        <InputControl v-model="form.email" label="Email" :error="form.errors?.email" class="mb-3" />
        <InputControl v-model="form.password" label="Password" :error="form.errors?.password" class="mb-3" />
        <InputControl v-model="form.confirmed_password" label="Confirmed Password"
          :error="form.errors?.confirmed_password" class="mb-3" />

        <div class="flex justify-end">
          <button :disabled="form.processing" type="submit"
            class="p-3 bg-teal-600 text-white rounded w-1/3 text-lg ">Register</button>
        </div>
      </form>
    </div>

  </div>
</template>

<style lang="scss" scoped>

</style>
