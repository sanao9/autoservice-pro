"use client";

import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/redux/store";
import {
  deleteCustomerState,
} from "@/redux/features/customers/customerSlice";
import { deleteCustomer } from "@/services/customerService";
import { toast } from "react-hot-toast/headless";

export default function CustomerTable({
  refresh,
}: {
  refresh: () => void;
}) {
  const customers = useSelector(
    (state: RootState) => state.customers.customers
  );

  const dispatch = useDispatch();

  const handleDelete = async (id: number) => {
    try {
      await deleteCustomer(id);
      dispatch(deleteCustomerState(id));
      toast.success("Customer deleted 🗑️");
        refresh();
    } catch (err) {
      console.error("Delete failed", err);
    toast.error("Delete failed 💥");
    }
  };

  return (
    <div className="bg-white rounded-xl shadow p-4">
      <table className="w-full">
        <thead>
          <tr className="text-left border-b">
            <th>Name</th>
            <th>Phone</th>
            <th>Vehicles</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {customers.map((c) => (
            <tr key={c.id} className="border-b">
              <td>{c.name}</td>
              <td>{c.phone}</td>
              <td>{c.vehicleCount}</td>

              <td className="space-x-2">
                <button
                  className="text-red-500"
                  onClick={() => handleDelete(c.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}