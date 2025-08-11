<script setup leng="ts">
import { useWeather } from '@/composables/useWeather';
import { onMounted } from 'vue';
import { useWeatherStore } from '@/stores/weatherStore';
const weatherStore = useWeatherStore();
onMounted(() => useWeather());
</script>

<template>
    <h3>The current temperature is: {{ weatherStore.temperature }} ° C  </h3>
</template>


<style scoped>
</style>