"use client";

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { RootState } from "@/redux/store";

import { createRepair } from "@/services/repairService";

import { addRepair } from "@/redux/features/repairs/repairSlice";

import toast from "react-hot-toast";

export default function RepairForm({
  onClose,
}: {
  onClose: () => void;
}) {
  const dispatch = useDispatch();

  const vehicles = useSelector(
    (state: RootState) => state.vehicles.vehicles
  );

  const [issue, setIssue] =
    useState("");

  const [vehicleId, setVehicleId] =
    useState("");

  const [technician, setTechnician] =
    useState("");

  const [priority, setPriority] =
    useState("Medium");

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      const newRepair =
        await createRepair({
          issue,
          vehicleId,
          technician,
          priority,
          status: "Pending",
        });

      dispatch(addRepair(newRepair));

      toast.success(
        "Repair job created 🔧"
      );

      onClose();
    } catch (err) {
      toast.error(
        "Failed to create repair"
      );
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-xl w-[420px]"
    >
      <h2 className="text-xl font-bold mb-4">
        Create Repair Job
      </h2>

      <textarea
        placeholder="Issue description"
        className="w-full border p-2 mb-3 rounded"
        value={issue}
        onChange={(e) =>
          setIssue(e.target.value)
        }
      />

      <select
        className="w-full border p-2 mb-3 rounded"
        value={vehicleId}
        onChange={(e) =>
          setVehicleId(e.target.value)
        }
      >
        <option value="">
          Select Vehicle
        </option>

        {vehicles.map((v) => (
          <option
            key={v.id}
            value={v.id}
          >
            {v.vehicleNumber}
          </option>
        ))}
      </select>

      <input
        placeholder="Technician Name"
        className="w-full border p-2 mb-3 rounded"
        value={technician}
        onChange={(e) =>
          setTechnician(e.target.value)
        }
      />

      <select
        className="w-full border p-2 mb-4 rounded"
        value={priority}
        onChange={(e) =>
          setPriority(e.target.value)
        }
      >
        <option>Low</option>
        <option>Medium</option>
        <option>High</option>
      </select>

      <button className="w-full bg-black text-white p-2 rounded-lg">
        Create Job
      </button>
    </form>
  );
}