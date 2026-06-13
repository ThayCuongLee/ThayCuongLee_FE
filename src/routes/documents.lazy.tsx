import { createLazyFileRoute } from '@tanstack/react-router'
import { lazy, Suspense } from 'react'
import { Loading } from '../components/common/Loading'

const DocumentsPage = lazy(() => import('../pages/public/DocumentsPage'))

export const Route = createLazyFileRoute('/documents')({
  component: () => (
    <Suspense fallback={<Loading fullScreen variant="math" text="Đang tải..." />}>
      <DocumentsPage />
    </Suspense>
  ),
})
