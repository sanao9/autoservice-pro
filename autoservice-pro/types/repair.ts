export type RepairStatus =
  | "Pending"
  | "Diagnosing"
  | "Repairing"
  | "Testing"
  | "Completed";

export interface RepairJob {
  id: number;

  issue: string;

  vehicleId: number;
  vehicleNumber?: string;

  technician: string;

  priority: "Low" | "Medium" | "High";

  status: RepairStatus;

  createdAt?: string;
}