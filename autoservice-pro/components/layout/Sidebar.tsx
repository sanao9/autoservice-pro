"use client";

import Link from "next/link";
import {
  LayoutDashboard,
  Users,
  Car,
  Wrench,
} from "lucide-react";

const menuItems = [
  {
    label: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    label: "Customers",
    href: "/customers",
    icon: Users,
  },
  {
    label: "Vehicles",
    href: "/vehicles",
    icon: Car,
  },
  {
    label: "Repairs",
    href: "/repairs",
    icon: Wrench,
  },
];

export default function Sidebar() {
  return (
    <aside className="w-64 bg-white border-r">
      <div className="p-6 text-xl font-bold">
        AutoService Pro
      </div>

      <nav className="space-y-2 px-4">
        {menuItems.map((item) => {
          const Icon = item.icon;

          return (
            <Link
              key={item.label}
              href={item.href}
              className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100"
            >
              <Icon size={20} />
              {item.label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}