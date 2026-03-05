<script setup lang="ts">
import Register from '../components/Register.vue'
</script>

<template>
  <div id="app-container">
    <div class="auth-card">
      <Register />
      <p class="toggle-text">
        Already have an account? <router-link to="/login">Sign In</router-link>
      </p>
    </div>
  </div>
</template>