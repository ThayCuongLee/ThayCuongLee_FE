import { createFileRoute, Outlet } from '@tanstack/react-router'
import { Suspense } from 'react'
import { Loading } from '../components/common/Loading'
import { lazyWithDelay } from '../lib/lazyWithDelay'

const PublicLayout = lazyWithDelay(() => Promise.resolve({ default: () => <Outlet /> }))

export const Route = createFileRoute('/_public')({
  component: () => (
    <Suspense fallback={<Loading fullScreen variant="math" text="Đang chuẩn bị không gian học tập..." />}>
      <PublicLayout />
    </Suspense>
  )
})
