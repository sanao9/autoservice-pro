"use client";

import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

import RepairColumn from "./RepairColumn";

const columns = [
  "Pending",
  "Diagnosing",
  "Repairing",
  "Testing",
  "Completed",
];

export default function RepairBoard() {
  const repairs = useSelector(
    (state: RootState) => state.repairs.repairs
  );

  return (
    <div className="grid grid-cols-5 gap-4">
      {columns.map((status) => (
        <RepairColumn
          key={status}
          title={status}
          repairs={repairs.filter(
            (r) => r.status === status
          )}
        />
      ))}
    </div>
  );
}