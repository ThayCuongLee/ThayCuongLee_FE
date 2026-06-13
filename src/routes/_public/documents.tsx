import { createFileRoute } from '@tanstack/react-router'
﻿export default function DocumentsPage() {
  return (
    <div className="container mx-auto px-4 py-20 max-w-7xl">
      <h1 className="text-3xl font-bold text-slate-800 mb-6">DocumentsPage</h1>
      <p className="text-slate-600">This page is under construction. Mock content will be here soon.</p>
    </div>
  )
}


export const Route = createFileRoute('/_public/documents')({
  component: DocumentsPage,
})
