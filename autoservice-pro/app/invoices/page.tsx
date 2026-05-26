"use client";

import { useEffect, useState } from "react";
import DashboardLayout from "@/components/layout/DashboardLayout";

import { getInvoices, createInvoice } from "@/services/invoiceService";

export default function InvoicesPage() {
  const [invoices, setInvoices] = useState<any[]>([]);
  const [form, setForm] = useState({
    repair_id: "",
    labor_cost: "",
    parts_cost: "",
  });

  const load = async () => {
    const data = await getInvoices();
    setInvoices(data);
  };

  useEffect(() => {
    load();
  }, []);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    await createInvoice(form);
    setForm({ repair_id: "", labor_cost: "", parts_cost: "" });
    load();
  };

  return (
    <DashboardLayout>
      <h1 className="text-2xl font-bold mb-4">
        Invoices
      </h1>

      {/* FORM */}
      <form onSubmit={handleSubmit} className="mb-6 space-y-2">
        <input
          className="border p-2 w-full"
          placeholder="Repair ID"
          value={form.repair_id}
          onChange={(e) =>
            setForm({ ...form, repair_id: e.target.value })
          }
        />

        <input
          className="border p-2 w-full"
          placeholder="Labor Cost"
          value={form.labor_cost}
          onChange={(e) =>
            setForm({ ...form, labor_cost: e.target.value })
          }
        />

        <input
          className="border p-2 w-full"
          placeholder="Parts Cost"
          value={form.parts_cost}
          onChange={(e) =>
            setForm({ ...form, parts_cost: e.target.value })
          }
        />

        <button className="bg-black text-white px-4 py-2">
          Create Invoice
        </button>
      </form>

      {/* LIST */}
      <div className="space-y-3">
        {invoices.map((inv) => (
          <div key={inv.id} className="border p-3">
            <p>Repair ID: {inv.repair_id}</p>
            <p>Total: ${inv.total}</p>
            <p>Status: {inv.status}</p>
          </div>
        ))}
      </div>
    </DashboardLayout>
  );
}