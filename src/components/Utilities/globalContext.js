import React from "react";

const GlobalContext = React.createContext({
    monthIndex:0,
    setMonthIndex: (index) =>{},
    showEventModal: false,
    setShowEventModal: ()=>{},
    showConfirmModal:false,
    setShowConfirmModal: ()=>{},
    daySelected: null,
    setDaySelected: (day)=>{}

});

export default GlobalContext;