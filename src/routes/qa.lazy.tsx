import { createLazyFileRoute } from '@tanstack/react-router'
import { lazy, Suspense } from 'react'
import { Loading } from '../components/common/Loading'

const QAPage = lazy(() => import('../pages/public/QAPage'))

export const Route = createLazyFileRoute('/qa')({
  component: () => (
    <Suspense fallback={<Loading fullScreen variant="math" text="Đang tải..." />}>
      <QAPage />
    </Suspense>
  ),
})
