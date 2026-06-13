import { createLazyFileRoute } from '@tanstack/react-router'
import { lazy, Suspense } from 'react'
import { Loading } from '../components/common/Loading'

const CoursesPage = lazy(() => import('../pages/public/CoursesPage'))

export const Route = createLazyFileRoute('/courses')({
  component: () => (
    <Suspense fallback={<Loading fullScreen variant="math" text="Đang tải..." />}>
      <CoursesPage />
    </Suspense>
  ),
})
