import { createLazyFileRoute } from '@tanstack/react-router'
import AchievementsPage from '../pages/AchievementsPage'

export const Route = createLazyFileRoute('/achievements')({
  component: AchievementsPage,
})
