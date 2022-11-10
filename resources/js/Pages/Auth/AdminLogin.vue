<script setup>
import { useForm } from '@inertiajs/inertia-vue3'
import InputControl from '@/Components/forms/InputControl'
import PrimaryButton from "@/Components/Base/PrimaryButton"

const form = useForm({
  identifier: 'admin@test.com',
  password: '123456'
})

const login = () => {
  form.post('/admin/login', {
    onSuccess: () => {
      form.reset()
    }
  })
}

</script>

<script>
import AuthLayout from '../../Components/Layouts/AuthLayout'
export default {
  layout: AuthLayout
}
</script>

<template>
  <div class="w-10/12 md:w-1/2 xl:w-1/3 mx-auto bg-slate-100 shadow-md p-10 pt-10">
    <h3 class="text-3xl mb-4 text-center">Admin Login</h3>

    <div>
      <form @submit.prevent="login">
        <InputControl stack v-model="form.identifier" label="Email" :error="form.errors?.identifier" class="mb-3" />

        <InputControl stack v-model="form.password" type="password" label="Password" :error="form.errors?.password"
          class="mb-3" />

        <div class="flex justify-end">
          <!-- <button type="submit" class="p-3 bg-teal-600 text-white rounded w-1/3 text-lg ">Login</button> -->
          <PrimaryButton :loading="form.processing" type="submit">Login</PrimaryButton>
        </div>
      </form>
    </div>
  </div>
</template>

<style lang="scss" scoped>

</style>