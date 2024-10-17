import type { Plugin } from "vue";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
} from "chart.js";

export function createChartjsPlugin(): Plugin {
  return (): void => {
    ChartJS.register(
      Title,
      Tooltip,
      Legend,
      BarElement,
      CategoryScale,
      LinearScale,
      PointElement,
      LineElement,
    );
  }
};