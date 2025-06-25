// import SkillBarChart from './components/SkillBarChart';
// import SkillPieChart from './components/SkillPieChart';
import SkillBarChart from "./SkillBarChart";
import SkillPieChart from "./SkillPieChart";

export default function Skills() {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <h1 className="text-3xl font-bold mb-6">My Skills</h1>
      <SkillBarChart />
      <div className="my-10" />
      <SkillPieChart />
    </div>
  );
}
