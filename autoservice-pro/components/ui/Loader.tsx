import React from 'react'

export default function Loader() {
  return (
    <div className="flex items-center justify-center py-8">
      <div className="h-8 w-8 animate-spin rounded-full border-4 border-slate-300 border-t-slate-900" />
    </div>
  )
}
