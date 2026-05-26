"use client";

import { useEffect, useState } from "react";

import DashboardLayout from "@/components/layout/DashboardLayout";

import RepairBoard from "@/components/repairs/RepairBoard";
import RepairModal from "@/components/repairs/RepairModal";
import RepairForm from "@/components/repairs/RepairForm";

import { useDispatch } from "react-redux";
import { setRepairs } from "@/redux/features/repairs/repairSlice";

import { getRepairs } from "@/services/repairService";

export default function RepairsPage() {
  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);

  const fetchRepairs = async () => {
    try {
      const data = await getRepairs();
      dispatch(setRepairs(data));
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchRepairs();
  }, []);

  return (
    <DashboardLayout>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">
          Repair Jobs
        </h1>

        <button
          onClick={() => setOpen(true)}
          className="bg-black text-white px-4 py-2 rounded-lg"
        >
          + Create Job
        </button>
      </div>

      <RepairBoard />

      <RepairModal
        open={open}
        onClose={() => setOpen(false)}
      >
        <RepairForm onClose={() => setOpen(false)} />
      </RepairModal>
    </DashboardLayout>
  );
}