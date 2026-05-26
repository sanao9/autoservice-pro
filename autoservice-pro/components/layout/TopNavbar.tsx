"use client";

import { Bell, Search } from "lucide-react";

export default function TopNavbar() {
  return (
    <header className="h-16 bg-white border-b px-6 flex items-center justify-between">
      <div className="flex items-center gap-3 border rounded-lg px-3 py-2 w-80">
        <Search size={18} />
        <input
          type="text"
          placeholder="Search..."
          className="outline-none w-full"
        />
      </div>

      <div className="flex items-center gap-4">
        <Bell />

        <div className="w-10 h-10 rounded-full bg-gray-300" />
      </div>
    </header>
  );
}