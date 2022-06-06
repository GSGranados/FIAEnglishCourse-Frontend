import dayjs from "dayjs";
import React, { useContext} from "react";
import { connect } from "react-redux";
import { fetchEvent } from "../../actions/calendar";
import GlobalContext from "./globalContext";
const Day = ({ day, rowIdx,dayEvents, fetchEvent }) => {
  
  const { setDaySelected,setShowEventModal } = useContext(GlobalContext);
  

 const openEvent = async (event) =>{
    await fetchEvent(null)
    await fetchEvent(event);
  }

  function getCurrentDayClass() {
    return day.format("DD-MM-YY") === dayjs().format("DD-MM-YY")
      ? "bg-blue-600 text-white-text-100 rounded-full w-[2.75rem]"
      : "";
  }
  
  return (
    <div className="text-md border border-gray-text-200 flex flex-col pb-[2rem] ">
      <header className="flex flex-col items-center">
        {rowIdx === 0 && (
          <p className="text-sm bg-wine-red-400 text-white-text-100 w-full text-center">{day.format("ddd").toUpperCase()}</p>
        )}
        <p className={`text-sm p-2 my-1 text-center ${getCurrentDayClass()}`}>
          {day.format("DD")}
        </p>
      </header>
      <div
        className="flex-1 cursor-pointer"
        onClick={() => {
          fetchEvent(null);
          setDaySelected(day);
          setShowEventModal(true);
        }}
      >
        {dayEvents.map((event,i)=>(
          <div 
          onClick={()=>openEvent(event)}
          key={i} 
          className="bg-blue-300 p-1 mx-3 text-gray-text-600 text-sm rounded mb-1 truncate">
            {event.title}
          </div>
        ))}
      </div>
    </div>
  );
};


export default connect(null,{fetchEvent})(Day);
