import api from "@/lib/axios";

export const getCustomers = async () => {
  const res = await api.get("/customers");
  return res.data;
};

export const createCustomer = async (data: any) => {
  const res = await api.post("/customers", data);
  return res.data;
};

export const updateCustomer = async (id: number, data: any) => {
  const res = await api.put(`/customers/${id}`, data);
  return res.data;
};

export const deleteCustomer = async (id: number) => {
  const res = await api.delete(`/customers/${id}`);
  return res.data;
};