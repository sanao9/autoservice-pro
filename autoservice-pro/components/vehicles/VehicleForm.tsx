"use client";

import { useState } from "react";
import { createVehicle } from "@/services/vehicleService";
import { useDispatch, useSelector } from "react-redux";
import { addVehicle } from "@/redux/features/vehicles/vehicleSlice";
import { RootState } from "@/redux/store";

import toast from "react-hot-toast";

export default function VehicleForm({
  onClose,
}: {
  onClose: () => void;
}) {
  const dispatch = useDispatch();

  const customers = useSelector(
    (state: RootState) => state.customers.customers
  );

  const [vehicleNumber, setVehicleNumber] =
    useState("");

  const [model, setModel] =
    useState("");

  const [brand, setBrand] =
    useState("");

  const [customerId, setCustomerId] =
    useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      const newVehicle =
        await createVehicle({
          vehicleNumber,
          model,
          brand,
          customerId,
        });

      dispatch(addVehicle(newVehicle));

      toast.success(
        "Vehicle added successfully 🚘"
      );

      onClose();
    } catch (err) {
      toast.error("Failed to add vehicle");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-xl w-96"
    >
      <h2 className="text-xl font-bold mb-4">
        Add Vehicle
      </h2>

      <input
        className="w-full border p-2 mb-3"
        placeholder="Vehicle Number"
        value={vehicleNumber}
        onChange={(e) =>
          setVehicleNumber(e.target.value)
        }
      />

      <input
        className="w-full border p-2 mb-3"
        placeholder="Brand"
        value={brand}
        onChange={(e) =>
          setBrand(e.target.value)
        }
      />

      <input
        className="w-full border p-2 mb-3"
        placeholder="Model"
        value={model}
        onChange={(e) =>
          setModel(e.target.value)
        }
      />

      <select
        className="w-full border p-2 mb-3"
        value={customerId}
        onChange={(e) =>
          setCustomerId(e.target.value)
        }
      >
        <option value="">
          Select Customer
        </option>

        {customers.map((customer) => (
          <option
            key={customer.id}
            value={customer.id}
          >
            {customer.name}
          </option>
        ))}
      </select>

      <button className="w-full bg-black text-white p-2 rounded">
        Save Vehicle
      </button>
    </form>
  );
}