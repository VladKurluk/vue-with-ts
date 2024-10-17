<template>
  <CardComponent class="my-10">
    <h2>Pie Chart</h2>
    <Pie
      v-if="repoData.length === repos.length"
      :data="chartData"
      :options="{
        cutout: '0%',
      }"
    />
  </CardComponent>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { Pie } from "vue-chartjs";
import CardComponent from "../ui/CardComponent.vue";
import type { ChartData } from "chart.js";

const repos = [
  "vuejs/vue",
  "facebook/react",
  "angular/angular",
  "sveltejs/svelte",
  "solidjs/solid",
];

const repoData = ref<any[]>([]);
repos.forEach((repo) => {
  fetch(`https://api.github.com/repos/${repo}`).then(async (res) => {
    const repo = await res.json();
    repoData.value.push(repo);
  });
});

const chartData = computed((): ChartData<"pie"> => {
  return {
    labels: repos,
    datasets: [
      {
        backgroundColor: [
          "#41B883",
          "#149eca",
          "#c30e2e",
          "#f96743",
          "#043271",
        ],
        label: "Stars",
        data: repoData.value.map((repo) => repo.stargazers_count),
      },
    ],
  };
});
</script>

<style scoped>

</style>