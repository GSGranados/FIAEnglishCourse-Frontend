import React from 'react'
import LoginForm from '../../components/Login/LoginForm'
const LoginPage = () => {
  return (
    <div className='flex h-[100vh] items-center justify-center'>
    <LoginForm/>
    <div  className='w-full h-full flex flex-col items-center justify-center text-white-text-100 text-[2rem] font-semibold font-sans' style={{background:"url('./assets/fia-bg.svg')",backgroundRepeat: 'no-repeat',backgroundPosition: 'center',backgroundSize: 'cover'}}>
        <p>Sistema de Reserva de Tutorias y Cursos MOOC</p>
        <p>Facultad de Ingenieria y Arquitectura</p>
    </div>
  </div>
  )
}

export default LoginPage