import _ from 'lodash';
import React, { useContext} from 'react'
import { connect } from 'react-redux';
import GlobalContext from '../Utilities/globalContext'
import EventForm from './EventForm'
import {createTuitionEvent, deleteEvent, editEvent, fetchEvent} from '../../actions/calendar';
import EventDelete from './EventDelete';
const EventMondal = (props) => {
    const {daySelected, setShowEventModal,showConfirmModal,setShowConfirmModal} = useContext(GlobalContext);
    
    /**Closing the modal */
    const onClose = () =>{
        setShowEventModal(false);
        setShowConfirmModal(false);
        props.fetchEvent(null);
    }
    /**Clicking on Delete Button on an Existing event */
    const onDeleteEvent = () =>{
      setShowConfirmModal(true);
    }
    /**Confirm Event Deletion */
    const cancelConfirm = () =>{
      setShowConfirmModal(false);
    }
    /**Cancel Event Deletion */
    const cancelReservation = async (eventID) =>{
      await props.deleteEvent(eventID);
      setShowConfirmModal(false);
      setShowEventModal(false);
      props.fetchEvent(null);
    }

    const onSubmit = async (formValues) =>{
      if(selectedEvent){
        await props.editEvent(selectedEvent.id,{...formValues,day:daySelected.valueOf()});
      }else{
        const eventObject = {...formValues,day: daySelected.valueOf()}
        await props.createTuitionEvent(eventObject);
      }
      setShowEventModal(false);
    }

    const {selectedEvent} = props
  return (
    <div className='h-screen w-full fixed left-0 top-0 flex justify-center items-center bg-black-500 bg-opacity-30 rounded-lg'>
       {showConfirmModal? (<EventDelete onCancelConfirm={cancelConfirm} onCloseModal={onClose} onConfirm={cancelReservation} selectedEvent={selectedEvent}/>): 
       (<EventForm onCloseModal={onClose} onDeleteEvent={onDeleteEvent} onSubmit={onSubmit} daySelected={daySelected} selectedEvent={selectedEvent} initialValues={_.pick(selectedEvent, ["title","description"])}/>)}
    </div>
  )
}

const mapStateToProps = (state) =>{
  return {
    selectedEvent: state.calendar.selectedEvent,
  }
}

export default connect(mapStateToProps,{createTuitionEvent, editEvent,fetchEvent,deleteEvent})(EventMondal)