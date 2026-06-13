import { createLazyFileRoute } from '@tanstack/react-router'
import { lazy, Suspense } from 'react'
import { Loading } from '../components/common/Loading'

const AboutPage = lazy(() => import('../pages/public/AboutPage'))

export const Route = createLazyFileRoute('/about')({
  component: () => (
    <Suspense fallback={<Loading fullScreen variant="math" text="Đang tải..." />}>
      <AboutPage />
    </Suspense>
  ),
})
