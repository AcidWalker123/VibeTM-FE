<script setup lang="ts">
import { ref } from 'vue';
import api from '../api';
import type { LoginRequest, ApiResponse } from '../types';
import TokenModal from './TokenModal.vue'; // Import the new modal

const credentials = ref<LoginRequest>({ username: '', password: '' });
const showModal = ref(false);
const receivedToken = ref('');

const onLogin = async () => {
  try {
    const res = await api.post<ApiResponse>('/auth/login', credentials.value);
    if (res.data.token) {
      localStorage.setItem('token', res.data.token);
      receivedToken.value = res.data.token;
      showModal.value = true; // Open the modal
    }
  } catch (err: any) {
    alert(err.response?.data?.message || "Unauthorized");
  }
};
</script>

<template>
  <div class="inner-form">
    <input v-model="credentials.username" placeholder="username" />
    <input v-model="credentials.password" type="password" placeholder="password" />
    <button @click="onLogin">Sign in</button>

    <TokenModal 
      :show="showModal" 
      :token="receivedToken" 
      @close="showModal = false" 
    />
  </div>
</template>

<style scoped>
.inner-form {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>