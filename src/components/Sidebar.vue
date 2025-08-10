<script setup lang="ts"></script>
<template>
  <div class="sidebar">
    <h2>Sidebar</h2>
    <ul>
      <li>
        <router-link to="/counter">Counter</router-link>
      </li>
      <li>
        <router-link to="/list-task">List Task</router-link>
      </li>
      <li>
        <router-link to="/register">Register</router-link>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.sidebar {
  width: 200px;
  background-color: #e2e2e2;
  padding: 20px;
}
</style>
