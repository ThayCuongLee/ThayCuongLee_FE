import { createLazyFileRoute } from '@tanstack/react-router'
import { lazy, Suspense } from 'react'
import { Loading } from '../components/common/Loading'

const BlogPage = lazy(() => import('../pages/public/BlogPage'))

export const Route = createLazyFileRoute('/blog')({
  component: () => (
    <Suspense fallback={<Loading fullScreen variant="math" text="Đang tải..." />}>
      <BlogPage />
    </Suspense>
  ),
})
