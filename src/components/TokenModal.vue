<script setup lang="ts">
defineProps<{
  show: boolean;
  token: string;
}>();

const emit = defineEmits(['close']);
</script>

<template>
  <Transition name="fade">
    <div v-if="show" class="modal-overlay" @click.self="emit('close')">
      <div class="modal-content">
        <h3>Login Successful!</h3>
        <p>Your Authentication Token:</p>
        <div class="token-box">{{ token }}</div>
        <button @click="emit('close')">Close</button>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
}

.modal-content {
  background: #2d2d2d;
  padding: 30px;
  border-radius: 15px;
  text-align: center;
  max-width: 450px;
  width: 90%;
  border: 1px solid #444;
}

.token-box {
  background: #1a1a1a;
  color: #00767d;
  padding: 15px;
  border-radius: 8px;
  margin: 20px 0;
  word-break: break-all;
  font-family: monospace;
  font-size: 0.9rem;
}

h3 { color: #fff; margin-bottom: 10px; }
p { color: #a0a0a0; }

.fade-enter-active, .fade-leave-active { transition: opacity 0.3s; }
.fade-enter-from, .fade-leave-to { opacity: 0; }
</style>