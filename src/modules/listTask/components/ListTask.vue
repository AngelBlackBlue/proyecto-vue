<script setup lang="ts">
import { ref } from 'vue';
const task = ref<string[]>([]);
const newTask = ref('');
const addTask = () => {
 task.value.push(newTask.value);   
 newTask.value = '';
}

const deleteTask = (index: number) => {
 task.value.splice(index, 1);
}

</script>

<template>
 <div>
    <h2> List Task</h2>
    <input type="text" v-model="newTask" @keyup.enter="addTask">
    <ul>
        <li v-for="(task, index) in task" :key="index">
            {{ task }}
            <button @click="deleteTask(index)"> 🚮 </button>
            
        </li>
    </ul>
 </div>
</template>

<style scoped>

</style>