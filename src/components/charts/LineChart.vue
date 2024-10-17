<template>
  <CardComponent class="my-10">
    <h2>Line Chart</h2>
    <Line v-if="weatherData" :data="chartData" />
  </CardComponent>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { Line } from "vue-chartjs";
import { useDateFormat } from "@vueuse/core";
import CardComponent from "../ui/CardComponent.vue";
import type { ChartData } from "chart.js";

const weatherData = ref();
fetch(
  "https://api.open-meteo.com/v1/forecast?latitude=49.2692&longitude=27.4291&timezone=auto&current_weather=true&hourly=temperature_2m,relativehumidity_2m,windspeed_10m"
)
  .then(async (res) => (weatherData.value = await res.json()))
  .catch((error) => alert(error.message));

const chartData = computed((): ChartData<"line"> => {
  return {
    labels: weatherData.value.hourly.time.map(
      (timestamp: string) => useDateFormat(timestamp, "YYYY-MM-DD HH:mm").value
    ),
    datasets: [
      {
        label: "Temperature",
        backgroundColor: "#c82834",
        data: weatherData.value.hourly.temperature_2m,
      },
    ],
  };
});
</script>

<style scoped>

</style>