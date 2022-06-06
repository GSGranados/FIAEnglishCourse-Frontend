import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
const EventDelete = ({
  onCloseModal,
  selectedEvent,
  onCancelConfirm,
  onConfirm,
}) => {
  const onDelete = (eventID) => {
    onConfirm(eventID);
  };

  return (
    <div className="bg-white-text-100 rounded-lg shadow-2xl w-1/3">
      <header
        className="bg-gray-text-100 px-4 py-2 flex justify-end items-center rounded-t-lg mb-1"
        onClick={(e) => e.stopPropagation()}
      >
        <button onClick={onCloseModal}>
          <FontAwesomeIcon icon={faClose} />
        </button>
      </header>
      <div
        className="flex flex-col justify-center items-center text-center my-2 p-3"
        onClick={(e) => e.stopPropagation()}
      >
        <h3 className="text-center text-[1.9rem] mb-4">Cancel Reservation</h3>
        <p className="text-[1.1rem] font-normal">
          Are you Sure you want to cancel the following Reservation?
        </p>
        <p className="font-semibold text-[1.1rem]">{selectedEvent?.title}</p>
      </div>
      <footer
        onClick={(e) => e.stopPropagation()}
        className="flex justify-end gap-3 w-100 border-t p-3"
      >
        <button
          onClick={() => onDelete(selectedEvent?.id)}
          type="button"
          className="bg-red-500 hover:bg-red-600 transition-all ease-in px-6 py-2 rounded-lg text-white-text-100 text-sm"
        >
          Cancel Reservation
        </button>
        <button
          onClick={onCancelConfirm}
          type="button"
          className={`bg-blue-500 hover:bg-blue-600 transition-all ease-in px-6 py-2 rounded-lg text-white-text-100 text-sm`}
        >
          Go back
        </button>
      </footer>
    </div>
  );
};

export default EventDelete;
