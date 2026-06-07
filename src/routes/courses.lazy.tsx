import { createLazyFileRoute } from '@tanstack/react-router'
import CoursesPage from '../pages/CoursesPage'

export const Route = createLazyFileRoute('/courses')({
  component: CoursesPage,
})
