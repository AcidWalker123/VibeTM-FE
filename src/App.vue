<template>
  <div id="app-container">
    <RouterView />
  </div>
</template>

<style>
#app-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f0f2f5;
}
.toggle-text {
  margin-top: 15px;
  font-size: 0.9rem;
  text-align: center;
}
.toggle-text a {
  color: #42b883;
  text-decoration: none;
  font-weight: bold;
}
</style>