import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/auth/authSlice";
import customerReducer from "./features/customers/customerSlice";
import vehicleReducer from "./features/vehicles/vehicleSlice";
import repairReducer from "./features/repairs/repairSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    customers: customerReducer,
    vehicles: vehicleReducer,
    repairs: repairReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch