import api from "@/lib/axios";

export const getVehicles = async () => {
  const res = await api.get("/vehicles");
  return res.data;
};

export const createVehicle = async (data: any) => {
  const res = await api.post("/vehicles", data);
  return res.data;
};

export const deleteVehicle = async (id: number) => {
  const res = await api.delete(`/vehicles/${id}`);
  return res.data;
};