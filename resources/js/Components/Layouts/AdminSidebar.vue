<script setup>
import { Inertia } from '@inertiajs/inertia'

const logout = () => {
  Inertia.post('/admin/logout')
}
</script>

<template>
  <div class="flex flex-col justify-between">
    <ul class="flex flex-col items-center  mt-2">
      <!-- Dashboard -->
      <li>
        <Link href="/admin" class="px-3 py-2 block">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M22 19V6H16V19H15V3H9V19H8V12H2V19H1V21H23V19H22ZM4 19V14H6V19H4ZM11 19V5H13V19H11ZM18 19V8H20V19H18Z" fill="#9A9AB0" />
        </svg>

        </Link>
      </li>

      <!-- Categories -->
      <li>
        <Link href="/admin/categories" class="px-3 py-2 block">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 10H21V5H3V10H4C4.53043 10 5.03914 10.2107 5.41421 10.5858C5.78929 10.9609 6 11.4696 6 12C6 12.5304 5.78929 13.0391 5.41421 13.4142C5.03914 13.7893 4.53043 14 4 14H3V19H21V14H20C19.4696 14 18.9609 13.7893 18.5858 13.4142C18.2107 13.0391 18 12.5304 18 12C18 11.4696 18.2107 10.9609 18.5858 10.5858C18.9609 10.2107 19.4696 10 20 10ZM19 15.874V17H5V15.874C5.85953 15.653 6.62115 15.1524 7.16498 14.4511C7.7088 13.7498 8.00395 12.8875 8.00395 12C8.00395 11.1125 7.7088 10.2502 7.16498 9.5489C6.62115 8.84756 5.85953 8.347 5 8.126V7H19V8.126C18.1405 8.347 17.3788 8.84756 16.835 9.5489C16.2912 10.2502 15.9961 11.1125 15.9961 12C15.9961 12.8875 16.2912 13.7498 16.835 14.4511C17.3788 15.1524 18.1405 15.653 19 15.874Z" fill="#9A9AB0" />
          <path d="M13.1679 8.44539L9.16797 14.4453L10.8321 15.5547L14.832 9.55479L13.1679 8.44539Z" fill="#9A9AB0" />
          <path d="M11 9H9V11H11V9Z" fill="#9A9AB0" />
          <path d="M15 13H13V15H15V13Z" fill="#9A9AB0" />
        </svg>

        </Link>
      </li>
      <!-- Product -->
      <li>
        <Link href="/admin/products" class="px-3 py-2 block">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15 3H3V21H21V3H15ZM19 5V7H15V5H19ZM13 5V10H11V5H13ZM9 5V7H5V5H9ZM5 19V9H9V12H15V9H19V19H5Z" fill="#9A9AB0" />
          <path d="M10 15H7V17H10V15Z" fill="#9A9AB0" />
        </svg>
        </Link>
      </li>
    </ul>

    <ul class="flex flex-col items-center mb-10">
      <li @click="logout" class="cursor-pointer">
        <svg width="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path d="M160 96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96C43 32 0 75 0 128V384c0 53 43 96 96 96h64c17.7 0 32-14.3 32-32s-14.3-32-32-32H96c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32h64zM504.5 273.4c4.8-4.5 7.5-10.8 7.5-17.4s-2.7-12.9-7.5-17.4l-144-136c-7-6.6-17.2-8.4-26-4.6s-14.5 12.5-14.5 22v72H192c-17.7 0-32 14.3-32 32l0 64c0 17.7 14.3 32 32 32H320v72c0 9.6 5.7 18.2 14.5 22s19 2 26-4.6l144-136z" />
        </svg>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
</style>
