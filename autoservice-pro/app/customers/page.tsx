"use client";

import CustomerForm from "@/components/customers/CustomerForm";
import CustomerModal from "@/components/customers/CustomerModal";
import { useEffect, useState } from "react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import CustomerTable from "@/components/customers/CustomerTable";
import CustomerSearch from "@/components/customers/CustomerSearch";
import { getCustomers } from "@/services/customerService";
import { useDispatch } from "react-redux";
import { setCustomers } from "@/redux/features/customers/customerSlice";

export default function CustomersPage() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  const fetchCustomers = async () => {
    try {
      setLoading(true);
      const data = await getCustomers();
      dispatch(setCustomers(data));
    } catch (err) {
      console.error("Failed to load customers", err);
    } finally {
      setLoading(false);
    }
  };
  const [open, setOpen] = useState(false);

  useEffect(() => {
    fetchCustomers();
  }, []);

  return (
    <DashboardLayout>
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Customers</h1>
        <button
          onClick={() => setOpen(true)}
          className="bg-black text-white px-4 py-2 rounded"
        >
          + Add Customer
        </button>
      </div>

      <CustomerSearch />

      {loading ? (
        <p className="text-gray-500">Loading customers...</p>
      ) : (
        <CustomerTable refresh={fetchCustomers} />
      )}

      <CustomerModal open={open} onClose={() => setOpen(false)}>
        <CustomerForm onClose={() => setOpen(false)} />
      </CustomerModal>
    </DashboardLayout>
  );
}