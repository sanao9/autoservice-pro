"use client";

import { useState } from "react";
import { createCustomer } from "@/services/customerService";
import { useDispatch } from "react-redux";
import { addCustomer } from "@/redux/features/customers/customerSlice";
import toast from "react-hot-toast";

export default function CustomerForm({
  onClose,
}: {
  onClose: () => void;
}) {
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      const newCustomer = await createCustomer({
        name,
        phone,
      });

      dispatch(addCustomer(newCustomer));
      toast.success("Customer added successfully 🚗✨");
      onClose();
    } catch (err) {
      console.error("Create failed", err);
      toast.error("Failed to add customer 💥");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-xl w-96"
    >
      <h2 className="text-xl font-bold mb-4">
        Add Customer
      </h2>

      <input
        className="w-full border p-2 mb-3"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        className="w-full border p-2 mb-3"
        placeholder="Phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />

      <button className="w-full bg-black text-white p-2 rounded">
        Save
      </button>
    </form>
  );
}