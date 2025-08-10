<script setup lang="ts">
import Sidebar from '@/components/Sidebar.vue';

</script>

<template>
<div class="container">
     <Sidebar />
    <div class="content">
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
    padding: 20px;
}
</style>