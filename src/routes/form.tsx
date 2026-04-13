import { RequestForm } from '#/components/page/commons/request-form'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/form')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <section className='p-4'>
      <RequestForm />
    </section>
  )
}
