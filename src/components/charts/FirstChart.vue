<template>
  <CardComponent>
    <h2>First chart</h2>
    <Bar
      v-if="movies.length"
      :data="chartData"
      :options="{
        plugins: {
          legend: {
            display: true,
            title: {
              display: true,
              text: 'First Bar chart',
            }
          },
        },
        responsive: true,
        indexAxis: 'y',
      }"
    />
  </CardComponent>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import CardComponent from "../ui/CardComponent.vue";
import { Bar } from "vue-chartjs";
import type { ChartData } from "chart.js";

type movie = {
  title: string;
  rating: number;
};

const movies = ref<movie[]>([]);

fetch("/api/chart.json")
  .then(async (res) => (movies.value = await res.json()))
  .catch((error) => alert(error.message));

const chartData = computed((): ChartData<"bar"> => {
  return {
    labels: movies.value.map((movie) => movie.title),
    datasets: [
      {
        label: "IMDb Rating",
        // backgroundColor: "#c82834",
        stack: "rating",
        data: movies.value.map((movie) => movie.rating),
      },
      {
        label: "Rotten Tomatoes Rating",
        backgroundColor: "#244771",
        stack: "rating",
        data: movies.value.map((movie) => movie.rating + 1),
      },
    ],
  };
});
</script>
