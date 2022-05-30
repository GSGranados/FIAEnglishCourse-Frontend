import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { connect } from "react-redux";
import { prevMonthAction, nextMonthAction } from "../../actions/calendar";
import {
  faCalendar,
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import GlobalContext from "./globalContext";
import dayjs from "dayjs";
import CreateEventButton from "./CreateEventButton";
const CalendarHeader = (props) => {
  const { monthIndex, setMonthIndex } = useContext(GlobalContext);

  const handlePrevMonth = () => {
    setMonthIndex(monthIndex - 1);
  };
  const handleNextMonth = () => {
    setMonthIndex(monthIndex + 1);
  };
  const handleReset = () => {
    setMonthIndex(dayjs().month());
  };

  return (
    <header className="flex items-center justify-between mb-5">
      <div className="px-4 py-2 flex items-center">
        <FontAwesomeIcon
          icon={faCalendar}
          size={"lg"}
          className="mr-2 text-red-600"
        />
        <h1 className="ml-2 mr-5 text-xl text-gray-text-500 font-bold">
          Reservations
        </h1>
        <button
          onClick={handleReset}
          className="rounded-lg py-2 px-4 mr-5 text-sm font-semibold bg-wine-red-500 text-white-text-100 hover:bg-wine-red-400 transition-all duration-200"
        >
          Today
        </button>
        <button
          onClick={handlePrevMonth}
          className="border-[2px] px-2 rounded-lg cursor-pointer text-gray-text-600 mx-2"
        >
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <button
          onClick={handleNextMonth}
          className="border-[2px] px-2 rounded-lg  cursor-pointer text-gray-text-600 mx-2"
        >
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
        <h2 className="ml-4 text-xl text-gray-text-500 font-bold">
          {dayjs(new Date(dayjs().year(), monthIndex)).format("MMMM YYYY")}
        </h2>
      </div>
      <CreateEventButton />
    </header>
  );
};
export default connect(null, { prevMonthAction, nextMonthAction })(
  CalendarHeader
);
