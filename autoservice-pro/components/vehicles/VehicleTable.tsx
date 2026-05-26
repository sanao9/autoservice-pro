"use client";

import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

export default function VehicleTable() {
  const vehicles = useSelector(
    (state: RootState) => state.vehicles.vehicles
  );

  return (
    <div className="bg-white rounded-xl shadow p-4">
      <table className="w-full">
        <thead>
          <tr className="border-b text-left">
            <th>Vehicle No</th>
            <th>Brand</th>
            <th>Model</th>
            <th>Customer</th>
          </tr>
        </thead>

        <tbody>
          {vehicles.map((v) => (
            <tr key={v.id} className="border-b">
              <td>{v.vehicleNumber}</td>
              <td>{v.brand}</td>
              <td>{v.model}</td>
              <td>{v.customerName}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}