import api from "@/lib/axios";

export const getRepairs = async () => {
  const res = await api.get("/repairs");
  return res.data;
};

export const createRepair = async (data: any) => {
  const res = await api.post("/repairs", data);
  return res.data;
};

export const updateRepairStatus = async (
  id: number,
  status: string
) => {
  const res = await api.patch(
    `/repairs/${id}`,
    { status }
  );

  return res.data;
};