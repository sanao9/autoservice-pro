export interface Vehicle {
  id: number;
  vehicleNumber: string;
  model: string;
  brand: string;
  year: number;
  mileage: number;

  customerId: number;
  customerName?: string;
}