<template>
  <CardComponent>
    <h2>First chart</h2>
    <Bar
      v-if="movies.length"
      :data="chartData"
      :options="{
        plugins: {
          legend: {
            display: false,
            title: {
              display: true,
              text: 'First chart',
            }
          },
        },
        responsive: true,
      }"
    />
  </CardComponent>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import CardComponent from "../ui/CardComponent.vue";
import { Bar } from "vue-chartjs";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";
import type { ChartData } from "chart.js";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
);

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
        backgroundColor: ["#c82834", "#244771"],
        data: movies.value.map((movie) => movie.rating),
      },
    ],
  };
});
</script>
