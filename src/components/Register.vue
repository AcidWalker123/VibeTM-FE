<script setup lang="ts">
import { ref } from 'vue';
import api from '../api';
import axios from 'axios';
import type { RegistrationRequest, ApiResponse } from '../types';

const form = ref<RegistrationRequest>({
  username: '',
  password: '',
  email: ''
});

const message = ref('');
const isError = ref(false);

const onRegister = async () => {
  try {
    const res = await api.post<ApiResponse>('/auth/register', form.value);
    message.value = res.data.message;
    isError.value = false;
    
    // Optional: Clear form on success
    form.value = { username: '', password: '', email: '' };
  } catch (err) {
    isError.value = true;
    if (axios.isAxiosError(err) && err.response) {
      message.value = err.response.data.message;
    } else {
      message.value = "Registration failed";
    }
  }
};
</script>

<template>
  <div class="inner-form">
    <form @submit.prevent="onRegister" class="inner-form">
      <input v-model="form.username" placeholder="username" required />
      <input v-model="form.email" type="email" placeholder="email" required />
      <input v-model="form.password" type="password" placeholder="password" required />
      
      <button type="submit">Sign Up</button>
    </form>
    
    <p v-if="message" :class="{ error: isError, success: !isError }" class="status-msg">
      {{ message }}
    </p>
  </div>
</template>

<style scoped>
.inner-form {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.status-msg {
  margin-top: 15px;
  font-size: 0.85rem;
  text-align: center;
}

.error { color: #ff4d4d; }
.success { color: #2ecc71; }
</style>