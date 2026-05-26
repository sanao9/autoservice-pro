"use client";

import { useEffect, useState } from "react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import VehicleTable from "@/components/vehicles/VehicleTable";
import VehicleModal from "@/components/vehicles/VehicleModal";
import VehicleForm from "@/components/vehicles/VehicleForm";

import { useDispatch } from "react-redux";
import { setVehicles } from "@/redux/features/vehicles/vehicleSlice";

import { getVehicles } from "@/services/vehicleService";

export default function VehiclesPage() {
  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);

  const fetchVehicles = async () => {
    try {
      const data = await getVehicles();
      dispatch(setVehicles(data));
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchVehicles();
  }, []);

  return (
    <DashboardLayout>
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">
          Vehicles
        </h1>

        <button
          onClick={() => setOpen(true)}
          className="bg-black text-white px-4 py-2 rounded"
        >
          + Add Vehicle
        </button>
      </div>

      <VehicleTable />

      <VehicleModal
        open={open}
        onClose={() => setOpen(false)}
      >
        <VehicleForm onClose={() => setOpen(false)} />
      </VehicleModal>
    </DashboardLayout>
  );
}