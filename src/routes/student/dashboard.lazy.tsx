import { createLazyFileRoute } from '@tanstack/react-router'
import StudentDashboardPage from '../../pages/StudentDashboardPage'

export const Route = createLazyFileRoute('/student/dashboard')({
  component: StudentDashboardPage,
})
