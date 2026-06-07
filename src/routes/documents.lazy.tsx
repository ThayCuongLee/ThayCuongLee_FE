import { createLazyFileRoute } from '@tanstack/react-router'
import DocumentsPage from '../pages/DocumentsPage'

export const Route = createLazyFileRoute('/documents')({
  component: DocumentsPage,
})
