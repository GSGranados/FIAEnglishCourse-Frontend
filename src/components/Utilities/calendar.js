import dayjs from "dayjs";
import { useState } from "react";
import GlobalContext from "./globalContext";

export default function ContextWrapper(props) {
    const [monthIndex,setMonthIndex] = useState(dayjs().month());
    const [showEventModal,setShowEventModal] = useState(false);
    const [showConfirmModal, setShowConfirmModal] = useState(false)
    const [daySelected, setDaySelected] = useState(dayjs());
    return(
        <GlobalContext.Provider value={{monthIndex, setMonthIndex, showEventModal, setShowEventModal, daySelected, setDaySelected, showConfirmModal, setShowConfirmModal}}>
            {props.children}
        </GlobalContext.Provider>
    )
}