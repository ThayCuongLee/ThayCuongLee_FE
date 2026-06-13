import { createFileRoute, Outlet } from '@tanstack/react-router'
import { Suspense } from 'react'
import { Loading } from '../components/common/Loading'
import { lazyWithDelay } from '../lib/lazyWithDelay'

const AppLayout = lazyWithDelay(() => Promise.resolve({ default: () => <Outlet /> }))

export const Route = createFileRoute('/_app')({
  component: () => (
    <Suspense fallback={<Loading fullScreen variant="math" text="Đang tải dữ liệu học tập..." />}>
      <AppLayout />
    </Suspense>
  )
})
