import { createLazyFileRoute } from '@tanstack/react-router'
import { lazy, Suspense } from 'react'
import { Loading } from '../components/common/Loading'

const ContactPage = lazy(() => import('../pages/public/ContactPage'))

export const Route = createLazyFileRoute('/contact')({
  component: () => (
    <Suspense fallback={<Loading fullScreen variant="math" text="Đang tải..." />}>
      <ContactPage />
    </Suspense>
  ),
})
