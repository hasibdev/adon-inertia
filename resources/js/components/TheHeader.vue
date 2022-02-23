<template>
   <div>
      <ul>
         <li>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
         </li>
      </ul>
   </div>
</template>

<script>
import { Link } from '@inertiajs/inertia-vue3'
export default {
   components: {
      Link,
   },
}
</script>

<style lang="scss" scoped>
</style>
