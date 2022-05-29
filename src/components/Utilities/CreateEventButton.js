import React, { useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import GlobalContext from './globalContext'
const CreateEventButton = () => {

  const {setShowEventModal} = useContext(GlobalContext)

  return (
    <button onClick={()=> setShowEventModal(true)} className='border border-black-500 bg-green-500 text-white-text-100 text-md p-2 
    rounded-full flex items-center shadow-md hover:shadow-lg hover:bg-green-600 transition-all ease-in'>
    <FontAwesomeIcon className='pl-2' color='' icon={faPlus}/>
    <span className='pl-3 pr-7'>Make Reservation</span>
    </button>
  )
}

export default CreateEventButton