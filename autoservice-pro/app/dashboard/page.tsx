import DashboardLayout from "@/components/layout/DashboardLayout";
import ProtectedRoute from "@/components/auth/ProtectedRoute";

export default function DashboardPage() {
  return (
    <ProtectedRoute>
      <DashboardLayout>
        <h1 className="text-3xl font-bold">
          Dashboard
        </h1>
      </DashboardLayout>
    </ProtectedRoute>
  );
}