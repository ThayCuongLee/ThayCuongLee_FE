import { createLazyFileRoute } from '@tanstack/react-router'
import QAPage from '../pages/QAPage'

export const Route = createLazyFileRoute('/qa')({
  component: QAPage,
})
