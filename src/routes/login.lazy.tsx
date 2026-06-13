import { createLazyFileRoute } from '@tanstack/react-router'
import { lazy, Suspense } from 'react'
import { Loading } from '../components/common/Loading'

const LoginPage = lazy(() => import('../pages/public/LoginPage'))

export const Route = createLazyFileRoute('/login')({
  component: () => (
    <Suspense fallback={<Loading fullScreen variant="math" text="Đang tải..." />}>
      <LoginPage />
    </Suspense>
  ),
})
