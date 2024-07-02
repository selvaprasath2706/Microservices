<template>
  <div class="container mx-auto p-4">
    <div v-if="userName">
      <h1 class="text-2xl font-bold text-center">Welcome, {{ userName }}!</h1>
    </div>
    <div v-else>
      <h1 class="text-2xl font-bold text-center">Welcome to Our Site!</h1>
      <p class="text-center mt-4">
        Please <router-link to="/register" class="text-blue-500">sign up</router-link> or
        <router-link to="/login" class="text-blue-500">sign in</router-link> to continue.
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue'

export default defineComponent({
  name: 'HomePage',
  setup() {
    const userName = ref<string>('')

    const fetchUserName = () => {
      const storedName = localStorage.getItem('email')
      userName.value = storedName ? storedName : ''
    }

    onMounted(() => {
      fetchUserName()
    })

    return {
      userName
    }
  }
})
</script>

<style scoped>
.container {
  max-width: 600px;
  margin: 0 auto;
  padding: 2rem;
}
</style>
