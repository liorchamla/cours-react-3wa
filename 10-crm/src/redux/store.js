import { configureStore, createSlice } from "@reduxjs/toolkit";

import CUSTOMERS from "../customers";

const customersSlice = createSlice({
  name: "customers",
  initialState: CUSTOMERS,
  reducers: {
    createCustomer: (state, action) => {
      const customer = { ...action.payload, id: Date.now(), invoices: [] };

      state.push(customer);
    },
    deleteCustomer: (state, action) => {
      return state.filter((c) => c.id !== action.payload);
    },
    createInvoice: (state, action) => {
      const { customerId, invoice } = action.payload;

      const customer = state.find((c) => c.id === customerId);

      invoice.id = Date.now();

      customer.invoices.push(invoice);
    },
    updateInvoice: (state, action) => {
      const { customerId, invoice } = action.payload;

      const customer = state.find((c) => c.id === customerId);

      const index = customer.invoices.findIndex((i) => i.id === invoice.id);

      customer.invoices[index] = invoice;
    },
    deleteInvoice: (state, action) => {
      const { customerId, id } = action.payload;

      const customer = state.find((c) => c.id === customerId);

      const index = customer.invoices.findIndex((i) => i.id === id);

      customer.invoices.splice(index, 1);
    },
  },
});

export const {
  createCustomer,
  deleteCustomer,
  createInvoice,
  updateInvoice,
  deleteInvoice,
} = customersSlice.actions;

export const store = configureStore({
  reducer: {
    customers: customersSlice.reducer,
  },
});
