<script setup lang="ts"></script>
<template>
  <div>
    <nav class="bg-blue-600 p-4">
      <div class="container mx-auto flex justify-between">
        <div class="text-white text-lg font-bold">
          <router-link to="/" class="text-white mx-2">My Vue app</router-link>
        </div>
        <div>
          <router-link to="/register" class="text-white mx-2">Sign Up</router-link>
          <router-link to="/login" class="text-white mx-2">Sign In</router-link>
        </div>
      </div>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>
