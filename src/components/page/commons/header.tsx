import { Logo } from "#/components/icons/logo";

export function Header() {
  return (
    <header className='flex items-center justify-between px-6 py-3 bg-secondary border-b-1 border-primary'>
      <Logo className="w-12 h-12 text-primary" />
      <h1 className='text-2xl font-bold text-primary font-limelight'>proxio</h1>
    </header>
  )
}