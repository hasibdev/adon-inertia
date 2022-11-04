<script setup>
import { reactive } from 'vue'
import { Inertia } from '@inertiajs/inertia'
import InputControl from '../../Components/forms/InputControl.vue'

const props = defineProps({
  errors: {
    type: Object,
    default: () => { }
  }
})

const form = reactive({
  first_name: '',
  last_name: '',
  email: '',
  password: '',
  confirmed_password: '',
})

const register = async () => {
  console.log('register')

  await Inertia.post('/register', form)
}
</script>

<template>
  <div>
    <div class="w-3/5 mx-auto">
      <h1 class="my-10">Register Page</h1>

      <form @submit.prevent="register">
        <InputControl v-model="form.first_name" label="First Name" :error="errors?.first_name" class="mb-3" />
        <InputControl v-model="form.last_name" label="Last Name" :error="errors?.last_name" class="mb-3" />
        <InputControl v-model="form.email" label="Email" :error="errors?.email" class="mb-3" />
        <InputControl v-model="form.password" label="Password" :error="errors?.password" class="mb-3" />
        <InputControl v-model="form.confirmed_password" label="Confirmed Password" :error="errors?.confirmed_password"
          class="mb-3" />

        <div class="flex justify-end">
          <button type="submit" class="p-3 bg-teal-600 text-white rounded w-1/3 text-lg ">Register</button>
        </div>
      </form>
    </div>

  </div>
</template>

<style lang="scss" scoped>

</style>
