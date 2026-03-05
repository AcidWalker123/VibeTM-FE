<script setup lang="ts">
import Login from '../components/Login.vue'
</script>

<template>
  <div id="app-container">
    <h2>Welcome back!</h2>
    <div class="auth-card">
      <Login />
      <p class="toggle-text">
        Don't have an account? <router-link to="/register">Sign Up</router-link>
      </p>
    </div>
  </div>
</template>