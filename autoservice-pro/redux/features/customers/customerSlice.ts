import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Customer } from "@/types/customer";

interface CustomerState {
  customers: Customer[];
}

const initialState: CustomerState = {
  customers: [],
};

const customerSlice = createSlice({
  name: "customers",
  initialState,
  reducers: {
    setCustomers: (state, action: PayloadAction<Customer[]>) => {
      state.customers = action.payload;
    },

    addCustomer: (state, action: PayloadAction<Customer>) => {
      state.customers.unshift(action.payload);
    },

    updateCustomerState: (state, action: PayloadAction<Customer>) => {
      const index = state.customers.findIndex(
        (c) => c.id === action.payload.id
      );

      if (index !== -1) {
        state.customers[index] = action.payload;
      }
    },

    deleteCustomerState: (state, action: PayloadAction<number>) => {
      state.customers = state.customers.filter(
        (c) => c.id !== action.payload
      );
    },
  },
});

export const {
  setCustomers,
  addCustomer,
  updateCustomerState,
  deleteCustomerState,
} = customerSlice.actions;

export default customerSlice.reducer;