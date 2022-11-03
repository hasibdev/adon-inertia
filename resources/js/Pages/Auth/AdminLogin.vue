<script setup>
import { reactive } from 'vue'

const form = reactive({
  identifier: '',
  password: ''
})

const login = () => {
  console.log('login')
}

</script>

<script>
import AuthLayout from '../../Components/Layouts/AuthLayout'
export default {
  layout: AuthLayout
}
</script>

<template>
  <div class="w-1/2 mx-auto bg-slate-100 shadow-md p-10 pt-10">
    <h3 class="text-3xl mb-4 text-center">Admin Login</h3>

    <div>
      <form @submit.prevent="login">
        <label for="email">Email</label>
        <input v-model="form.identifier" type="text" id="email"
          class="block p-2 border w-full rounded mb-3 focus:outline-none focus-within:border-teal-700">

        <label for="password">Password</label>
        <input v-model="form.password" type="password" id="password"
          class="block p-2 border w-full rounded mb-3 focus:outline-none focus-within:border-teal-700">

        <div class="flex justify-end">
          <button type="submit" class="p-3 bg-teal-600 text-white rounded w-1/3 text-lg ">Login</button>
        </div>
      </form>
    </div>
  </div>
</template>

<style lang="scss" scoped>

</style>