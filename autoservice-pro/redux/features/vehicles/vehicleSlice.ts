import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Vehicle } from "@/types/vehicle";

interface VehicleState {
  vehicles: Vehicle[];
}

const initialState: VehicleState = {
  vehicles: [],
};

const vehicleSlice = createSlice({
  name: "vehicles",
  initialState,
  reducers: {
    setVehicles: (
      state,
      action: PayloadAction<Vehicle[]>
    ) => {
      state.vehicles = action.payload;
    },

    addVehicle: (
      state,
      action: PayloadAction<Vehicle>
    ) => {
      state.vehicles.unshift(action.payload);
    },

    deleteVehicleState: (
      state,
      action: PayloadAction<number>
    ) => {
      state.vehicles = state.vehicles.filter(
        (v) => v.id !== action.payload
      );
    },
  },
});

export const {
  setVehicles,
  addVehicle,
  deleteVehicleState,
} = vehicleSlice.actions;

export default vehicleSlice.reducer;