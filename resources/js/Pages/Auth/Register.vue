<script setup>
import { reactive } from 'vue'
import { Inertia } from '@inertiajs/inertia'

const form = reactive({
  name: '',
  email: '',
  password: ''
})

const register = async () => {
  console.log('register')

  await Inertia.post('/register', form)
}
</script>

<template>
  <div>
    <div class="w-3/5 mx-auto">
      <h1>Register Page</h1>

      <form @submit.prevent="register">
        <label for="name">Name</label>
        <input v-model="form.name" type="text" id="name"
          class="block p-2 border w-full rounded mb-3 focus:outline-none focus-within:border-teal-700">

        <label for="email">Email</label>
        <input v-model="form.email" type="text" id="email"
          class="block p-2 border w-full rounded mb-3 focus:outline-none focus-within:border-teal-700">

        <label for="password">Password</label>
        <input v-model="form.password" type="password" id="password"
          class="block p-2 border w-full rounded mb-3 focus:outline-none focus-within:border-teal-700">

        <div class="flex justify-end">
          <button type="submit" class="p-3 bg-teal-600 text-white rounded w-1/3 text-lg ">Register</button>
        </div>
      </form>
    </div>

  </div>
</template>

<style lang="scss" scoped>

</style>
