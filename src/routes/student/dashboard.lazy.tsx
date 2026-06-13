import { createLazyFileRoute } from '@tanstack/react-router'
import { lazy, Suspense } from 'react'
import { Loading } from '../../components/common/Loading'

const StudentDashboardPage = lazy(() => import('../../pages/app/StudentDashboardPage'))

export const Route = createLazyFileRoute('/student/dashboard')({
  component: () => (
    <Suspense fallback={<Loading fullScreen variant="math" text="Đang tải..." />}>
      <StudentDashboardPage />
    </Suspense>
  ),
})
