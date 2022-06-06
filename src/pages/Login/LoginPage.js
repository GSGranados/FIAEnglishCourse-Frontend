import React from 'react'
import { connect } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { logInAction } from '../../actions/login';
import LoginForm from '../../components/Login/LoginForm'

const LoginPage = ({logInAction}) => {

  const navigate = useNavigate();
  const location = useLocation();

  const redirectPath = location.state?.path || "/"; 

   const onSubmit = async (formValues) => {
    await logInAction(formValues);
    navigate(redirectPath,{replace:true})
  };



  return (
    <div className='flex h-[100vh] items-center justify-center'>
    <LoginForm onSubmit={onSubmit}/>
    <div  className='w-full h-full flex flex-col items-center justify-center  text-white-text-100 text-[2rem] font-semibold font-sans' style={{background:"url('./assets/fia-bg.jpg')",backgroundRepeat: 'no-repeat',backgroundPosition: 'center',backgroundSize: 'cover'}}>
        <p>Sistema de Reserva de Tutorias y Cursos MOOC</p>
        <p>Facultad de Ingenieria y Arquitectura</p>
    </div>
  </div>
  )
}

export default connect(null,{logInAction})(LoginPage);