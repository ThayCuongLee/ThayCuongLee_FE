import { createLazyFileRoute } from '@tanstack/react-router'
import FeedbackPage from '../pages/FeedbackPage'

export const Route = createLazyFileRoute('/feedback')({
  component: FeedbackPage,
})
