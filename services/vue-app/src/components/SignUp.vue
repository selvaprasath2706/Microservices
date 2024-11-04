<script setup lang="ts"></script>
<template>
  <div class="flex justify-center items-center min-h-screen bg-gray-100">
    <div class="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
      <h2 class="text-2xl font-bold mb-6 text-center">Sign Up</h2>
      <form @submit.prevent="submit">
        <div class="mb-4">
          <label class="block text-gray-700">Email</label>
          <input
            v-model="email"
            type="email"
            class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            required
          />
        </div>
        <div class="mb-4">
          <label class="block text-gray-700">Password</label>
          <input
            v-model="password"
            type="password"
            class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            required
          />
        </div>
        <button
          type="submit"
          class="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
        >
          Sign Up
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import { useToast } from 'vue-toastification'
const toast = useToast()
export default {
  data() {
    return {
      email: '',
      password: ''
    }
  },

  methods: {
    submit() {
      axios
        .post(import.meta.env.VITE_LOGIN_SERVICE + '/register', {
          email: this.email,
          password: this.password
        })
        .then(() => {
          toast.success('Registration successful')
          this.$router.push('/login')
        })
        .catch((error) => {
          console.error('Registration error:', error)
          toast.error('Registration failed. Please try again')
        })
    }
  }
}
</script>
