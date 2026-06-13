import { createLazyFileRoute } from '@tanstack/react-router'
import { lazy, Suspense } from 'react'
import { Loading } from '../components/common/Loading'

const HomePage = lazy(() => import('../pages/public/HomePage'))

export const Route = createLazyFileRoute('/')({
  component: () => (
    <Suspense fallback={<Loading fullScreen variant="math" text="Đang tải..." />}>
      <HomePage />
    </Suspense>
  ),
})
