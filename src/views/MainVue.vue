<script setup lang="ts">
import Sidebar from '@/components/Sidebar.vue';
// @ts-ignore
import Header from '@/components/Header.vue';
import { ref } from 'vue';
const text = ref('');
</script>

<template>
    <Header :menssage="text"></Header> 
<div class="container">
    <Sidebar/>

    <div class="content">
        <input type="text" v-model="text">
        {{ text }}
        <router-view />
    </div>
      
</div>
</template>

<style scoped>

.container {
    display: flex;
}

.content {
    flex: 1;
    margin-top: 30px;
    padding: 20px;
}

</style>