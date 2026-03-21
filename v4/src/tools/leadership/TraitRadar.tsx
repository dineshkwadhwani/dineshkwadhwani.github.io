import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from "recharts";

type Props = {
  traits: Record<string, number>;
};

const TraitRadar = ({ traits }: Props) => {
  const data = Object.entries(traits).map(([trait, value]) => ({
    trait,
    value,
  }));

  return (
    <div className="w-full h-[320px] md:h-[420px]">
      <ResponsiveContainer>
        <RadarChart
          data={data}
          outerRadius="70%"   // ⭐ smaller so labels fit
        >
          <PolarGrid />
          <PolarAngleAxis
            dataKey="trait"
            tick={{ fontSize: 12 }}  // ⭐ smaller labels
          />
          <PolarRadiusAxis />
          <Radar
            dataKey="value"
            stroke="#6b8e23"
            fill="#6b8e23"
            fillOpacity={0.5}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default TraitRadar;
