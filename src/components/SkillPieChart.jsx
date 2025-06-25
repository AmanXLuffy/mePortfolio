// components/SkillPieChart.jsx
import { Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: ['HTML5', 'CSS3', 'Tailwind CSS', 'Bootstrap', 'Font Awesome'],
  datasets: [
    {
      data: [95, 88, 70, 85, 95],
      backgroundColor: ['#00d9ff', '#00ffa1', '#ff6b6b', '#ffa600', '#9b59b6'],
      borderWidth: 1,
    },
  ],
};

export default function SkillPieChart() {
  return (
    <div className="w-full h-[400px] bg-black p-4 rounded-lg">
      <Pie data={data} />
    </div>
  );
}
