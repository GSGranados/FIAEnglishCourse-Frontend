import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClose,
  faGripLines,
  faClock,
  faBarsStaggered,
} from "@fortawesome/free-solid-svg-icons";


export class EventForm extends Component {
  renderError({ error, touched }) {
    if (touched && error) {
      return (
        <div className="text-red-500 font-light text-left text-sm block">
          {error}
        </div>
      );
    }
  }

  renderInput = ({ input, label, meta, type, placeholder }) => {
    return (
      <div className="w-full flex flex-col relative px-[1rem] py-2 self-center">
        <label
          htmlFor={input.name}
          className="block mb-2 text-sm font-medium text-gray-text-900"
        >
          {label}
        </label>
        <input
          {...input}
          id={input.name}
          autoComplete="off"
          type={type}
          placeholder={placeholder}
          className=" border  border-gray-text-300 text-gray-text-900 text-sm rounded-lg block w-full p-2.5 "
        />
        <div className="absolute bottom-[-0.70rem]">
          {this.renderError(meta)}
        </div>
      </div>
    );
  };

  onSubmit = (formValues) => {
    this.props.onSubmit(formValues);
  };

  render() {
    const { onCloseModal,onDeleteEvent, handleSubmit, daySelected, selectedEvent} = this.props;
    return (
      <form
        onSubmit={handleSubmit(this.onSubmit)}
        className="bg-white-text-100 rounded-lg shadow-2xl w-1/4"
      >
        <header className="bg-gray-text-100 px-4 py-2 flex justify-between items-center">
          <FontAwesomeIcon icon={faGripLines} />
          <button onClick={onCloseModal}>
            <FontAwesomeIcon icon={faClose} />
          </button>
        </header>
        <div className="p-[1rem] bg-white-text-100" >
          <div className="grid grid-cols-1/5 items-end gap-y-7">
            <div></div>
            <Field
              name="title"
              component={this.renderInput}
              label={"Title"}
              type={"text"}
              placeholder={"Add title"}
            />
            <span className="text-center"><FontAwesomeIcon icon={faClock} size="xs" /></span>
            <p className="text-sm pl-4 self-center">{daySelected.format("dddd, MMMM DD")}</p>
            <span className="justify-self-center self-center"><FontAwesomeIcon icon={faBarsStaggered} size="xs" /></span>
            <Field
              name="description"
              component={this.renderInput}
              label={"Description"}
              type={"text"}
              placeholder={"Add a Description"}
            />
          </div>
        </div>
        <footer className="flex justify-end gap-3 w-100 border-t p-3">
            {selectedEvent && (
              <button  onClick={onDeleteEvent} type="button" className="bg-red-500 hover:bg-red-600 transition-all ease-in px-6 py-2 rounded-lg text-white-text-100 text-sm">
                Cancel Reservation
            </button>
            )}
             <button type="submit" className={`${selectedEvent?"bg-yellow-500":"bg-green-500"} hover:${selectedEvent?"bg-yellow-600":"bg-green-600"} transition-all ease-in px-6 py-2 rounded-lg text-white-text-100 text-sm`}>
                {selectedEvent? "Edit": "Make"} Reservation
            </button>
        </footer>
      </form>
    );
  }
}

const validate = (formValues) => {
  const errors = {};
  if (!formValues.title) {
    errors.title = "Please, include a Title";
  }
  if (!formValues.description) {
    errors.description = "Please, include an event description";
  }
  return errors;
};

export default reduxForm({
  form: "eventForm",
  validate,
})(EventForm);
