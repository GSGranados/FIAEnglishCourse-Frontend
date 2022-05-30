import React, { useContext, useEffect } from 'react'
import { useState } from 'react'
import { getMonth } from '../../helpers/dayUtil'
import CalendarHeader from '../Utilities/CalendarHeader'
import CalendarSidebar from '../Utilities/CalendarSidebar'
import GlobalContext from '../Utilities/globalContext'
import Month from '../Utilities/Month'
import EventModal from './EventModal'
const TuitionsList = () => {
    const [currentMonth,setCurrentMonth] = useState(getMonth());
    const {monthIndex, showEventModal} = useContext(GlobalContext);
    useEffect(()=>{
        setCurrentMonth(getMonth(monthIndex))
    },[monthIndex]);
    return (
    <React.Fragment>
    {showEventModal && <EventModal/>}
        <div className="h-full flex flex-col">
            <CalendarHeader />
            <div className="flex flex-1">
                <CalendarSidebar/>
                <Month month={currentMonth}/>
            </div>
        </div>
    </React.Fragment>
  )
}



export default  TuitionsList;