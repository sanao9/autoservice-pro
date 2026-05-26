import { RepairJob } from "@/types/repair";
import RepairCard from "./RepairCard";

export default function RepairColumn({
  title,
  repairs,
}: {
  title: string;
  repairs: RepairJob[];
}) {
  return (
    <div className="bg-gray-100 rounded-xl p-3">
      <h2 className="font-bold mb-3">
        {title}
      </h2>

      <div className="space-y-3">
        {repairs.map((repair) => (
          <RepairCard
            key={repair.id}
            repair={repair}
          />
        ))}
      </div>
    </div>
  );
}