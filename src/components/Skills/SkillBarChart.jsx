// components/SkillBarChart.jsx
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const data = {
  labels: ['HTML5', 'Express JS', 'Tailwind CSS', 'React JS', 'Mongo DB'],
  datasets: [
    {
      label: 'Skill Level',
      data: [95, 88, 70, 85, 95],
      backgroundColor: '#00d9ff',
      borderRadius: 5,
    },
  ],
};

const options = {
  indexAxis: 'y', // This makes it horizontal
  responsive: true,
  plugins: {
    legend: { display: false },
  },
  scales: {
    x: {
      min: 0,
      max: 100,
      ticks: { color: '#fff' },
    },
    y: {
      ticks: { color: '#fff' },
    },
  },
};

export default function SkillBarChart() {
  return (
    <div className="w-full h-[400px] bg-black p-4 rounded-lg">
      <Bar data={data} options={options} />
    </div>
  );
}
