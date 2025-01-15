import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
} from "chart.js";
import "./Chart.css";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip
);

export default function PopulationChart({
  populationData,
}: {
  populationData: { year: number; value: number }[];
}) {
  const data = {
    labels: populationData.map((item) => item.year),
    datasets: [
      {
        label: "Population",
        data: populationData.map((item) => item.value),
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "Population Over Years",
      },
    },
  };

  return <Line data={data} options={options} className="chart" />;
}
