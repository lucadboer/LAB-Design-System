import { EnvelopeSimple, Lock } from 'phosphor-react'
import { Button } from './components/Button'
import { Checkbox } from './components/Checkbox'
import { Heading } from './components/Heading'
import { LogoReact } from './components/LogoReact'
import { Text } from './components/Text'
import { TextInput, TextInputInput } from './components/TextInput'
import './styles/global.css'

function App() {

  return (
   <div className='flex flex-col justify-center items-center w-screen h-screen bg-gray-900 text-gray-100'>
    <header className='flex flex-col items-center'>
      <LogoReact />

      <Heading size='lg' className='mt-3'>Ignite Lab</Heading>

      <Text className='text-gray-400 m-2' size='lg'>Faça login e comece a usar!</Text>
    </header>

    <form className='flex flex-col items-stretch gap-4 w-full max-w-sm mt-8'>
      <label className='flex flex-col gap-2' htmlFor="email">
        <Text size='sm'>Endereço de e-mail:</Text>
        <TextInput.Root>
          <TextInput.Icon className='focus-within:text-cyan-500'>
            <EnvelopeSimple />
          </TextInput.Icon>

          <TextInput.Input placeholder='Digite seu email' id='email' />
        </TextInput.Root>
      </label>

      <label className='flex flex-col gap-2' htmlFor="password">
        <Text size='sm'>Sua senha:</Text>
        <TextInput.Root >
          <TextInput.Icon>
            <Lock />
          </TextInput.Icon>

          <TextInput.Input placeholder='*********' id='password' />
        </TextInput.Root>
      </label>

      <label className='flex items-center gap-2' htmlFor="remember">
        <Checkbox id='remember' />
        <Text className='text-gray-200' size='sm'>Lembrar de mim por 30 dias</Text>
      </label>

      <Button className='mt-6'>Entrar na Plataforma</Button>

    </form>
    <footer className='flex flex-col items-center gap-3 mt-5'>
      <Text size='sm'>
        <a className='text-gray-400 underline hover:text-gray-200 transition-all' href="">Esqueceu sua senha?</a>
      </Text>
      <Text size='sm'>
        <a className='text-gray-400 underline hover:text-gray-200 transition-all' href="">Não possui uma conta? Faça uma agora!</a>
      </Text>
    </footer>
   </div>
  )
}

export default App
