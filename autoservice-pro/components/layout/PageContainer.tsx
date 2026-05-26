import React, { PropsWithChildren } from 'react'

export default function PageContainer({ children }: PropsWithChildren) {
  return <div className="min-h-screen bg-slate-100 p-4">{children}</div>
}
