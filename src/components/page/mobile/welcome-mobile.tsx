import { Button } from "#/components/ui/button";
import { useNavigate } from "@tanstack/react-router";

export function WelcomeMobile() {
  const navigate = useNavigate()

  function handleStart() {
    navigate({ to: '/form' })
  }

  return (
    <div className='flex-1 flex items-center justify-center'>
      <div className='flex flex-col gap-4 justify-center items-center px-4'>
        <h1 className='text-2xl font-bold text-primary text-center'>Tech Fix <br /> Repair Shop</h1>
        <p className='text-md text-center'>Responda a este formulário para facilitar o seu atendimento e ser melhor atendido pela nossa equipe.</p>
        <Button variant="outline" className='cursor-pointer w-full h-12 border-2 font-bold' onClick={handleStart}>Iniciar</Button>
      </div>
    </div>
  )
}