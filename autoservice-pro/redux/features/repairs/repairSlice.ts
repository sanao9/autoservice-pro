import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RepairJob } from "@/types/repair";

interface RepairState {
  repairs: RepairJob[];
}

const initialState: RepairState = {
  repairs: [],
};

const repairSlice = createSlice({
  name: "repairs",
  initialState,
  reducers: {
    setRepairs: (
      state,
      action: PayloadAction<RepairJob[]>
    ) => {
      state.repairs = action.payload;
    },

    addRepair: (
      state,
      action: PayloadAction<RepairJob>
    ) => {
      state.repairs.unshift(action.payload);
    },

    updateRepairStatusState: (
      state,
      action: PayloadAction<{
        id: number;
        status: string;
      }>
    ) => {
      const repair = state.repairs.find(
        (r) => r.id === action.payload.id
      );

      if (repair) {
        repair.status = action.payload.status as any;
      }
    },
  },
});

export const {
  setRepairs,
  addRepair,
  updateRepairStatusState,
} = repairSlice.actions;

export default repairSlice.reducer;