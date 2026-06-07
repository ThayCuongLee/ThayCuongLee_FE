import { createLazyFileRoute } from '@tanstack/react-router'
import BlogPage from '../pages/BlogPage'

export const Route = createLazyFileRoute('/blog')({
  component: BlogPage,
})
