import { createLazyFileRoute } from '@tanstack/react-router'
import { lazy, Suspense } from 'react'
import { Loading } from '../components/common/Loading'

const FeedbackPage = lazy(() => import('../pages/public/FeedbackPage'))

export const Route = createLazyFileRoute('/feedback')({
  component: () => (
    <Suspense fallback={<Loading fullScreen variant="math" text="Đang tải..." />}>
      <FeedbackPage />
    </Suspense>
  ),
})
