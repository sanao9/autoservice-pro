"use client";

import { RepairJob } from "@/types/repair";

export default function RepairCard({
  repair,
}: {
  repair: RepairJob;
}) {
  return (
    <div className="bg-white rounded-lg p-3 shadow">
      <div className="flex justify-between items-center mb-2">
        <h3 className="font-semibold">
          {repair.vehicleNumber}
        </h3>

        <span className="text-xs bg-red-100 text-red-600 px-2 py-1 rounded">
          {repair.priority}
        </span>
      </div>

      <p className="text-sm text-gray-600 mb-3">
        {repair.issue}
      </p>

      <div className="text-xs text-gray-500">
        Technician: {repair.technician}
      </div>
    </div>
  );
}