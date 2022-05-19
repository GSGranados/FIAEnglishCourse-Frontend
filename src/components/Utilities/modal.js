import React from "react";
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";

const Modal = (props) => {
  return ReactDOM.createPortal(
    <div
      onClick={props.onDismiss}
      id="modal-component"
      tabIndex="-1"
      className={`flex bg-gray-text-500 bg-opacity-50 overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-full justify-center items-center`}
    >
      <div  className="relative p-4 w-full max-w-md h-auto">
        <div className="relative bg-white-text-100 rounded-lg shadow ">
          <button
            type="button"
            className="absolute top-3 right-2.5 text-gray-text-400 bg-transparent hover:bg-gray-text-200 hover:text-gray-text-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-text-200 "
            onClick={props.onDismis}
          >
          <FontAwesomeIcon icon={faClose} size="xl"/>
          </button>
          <div onClick={e => e.stopPropagation()}  className="py-6 px-6 lg:px-8">
            <h3 className="mb-4 text-xl font-medium text-gray-text-900">
              {props.title}
            </h3>
            <div className="flex justify-start w-full items-center">
              {props.content}
            </div>
            <div className="flex items-center justify-center gap-3">
            {props.actions}
            </div>
          </div>
        </div>
      </div>
    </div>
  ,document.querySelector("#modal"));
};

export default Modal;
