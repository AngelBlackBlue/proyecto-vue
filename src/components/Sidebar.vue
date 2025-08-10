<script setup lang="ts">
import { useRegisterStore } from '@/modules/register/store/registerStore'
import { ref, watch } from 'vue'
const registerStore = useRegisterStore()
const name = ref(registerStore.name)
const email = ref(registerStore.email)
watch(
  () => registerStore.name,
  (newValue) => { name.value = newValue },
);
watch(
  () => registerStore.email,
  (newValue) => { email.value = newValue },
);
</script>

<template>
  <div class="sidebar">
    <h2>Welcome!!!</h2>
    <h3>Name: {{ name }}</h3>
    <h3>Email: {{ email }}</h3>
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
