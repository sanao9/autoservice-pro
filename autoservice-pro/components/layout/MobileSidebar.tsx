import React from 'react'

export default function MobileSidebar() {
  return (
    <aside className="md:hidden p-4 border-r border-slate-200 bg-slate-50">
      <div className="space-y-3">
        <p className="text-sm font-medium">Mobile sidebar</p>
        <p className="text-sm text-slate-600">Add mobile navigation links here.</p>
      </div>
    </aside>
  )
}
