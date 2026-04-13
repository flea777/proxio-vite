import { WelcomeMobile } from '#/components/page/mobile/welcome-mobile'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({ component: App })

function App() {
  return (
    <main className='flex flex-col min-h-screen'>
      <WelcomeMobile />
    </main>
  )
}
