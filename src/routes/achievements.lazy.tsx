import { createLazyFileRoute } from '@tanstack/react-router'
import { lazy, Suspense } from 'react'
import { Loading } from '../components/common/Loading'

const AchievementsPage = lazy(() => import('../pages/public/AchievementsPage'))

export const Route = createLazyFileRoute('/achievements')({
  component: () => (
    <Suspense fallback={<Loading fullScreen variant="math" text="Đang tải..." />}>
      <AchievementsPage />
    </Suspense>
  ),
})
