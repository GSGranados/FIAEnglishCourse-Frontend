import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVideo } from "@fortawesome/free-solid-svg-icons";
import dayjs from "dayjs";
import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchEventById } from "../../actions/calendar";
import history from "../../history";
import { Link } from "react-router-dom";
export class TuitionDetails extends Component {
  async componentDidMount() {
    const tuitionID = Number(history.location.pathname.split("/")[3]);
    await this.props.fetchEventById(tuitionID);
  }

  render() {
    if (!this.props.selectedEvent) {
      return <div>Loading...</div>;
    }
    const { title, description, day } = this.props.selectedEvent;
    return (
      <div className="w-ful border-[1px] border-black-900 h-full p-5">
        <h2 className="font-regular">
          Tuition's Topic: <span className="font-bold">{title}</span>
        </h2>
        <div className="flex flex-col justify-center  my-10 gap-3">
          <h3>Tuition Details</h3>
          <p className="text-md text-left font-light">{description}</p>
          <div className="flex justify-start items-center gap-3">
            <span className="text-md font-normal">
              Date: <b>{dayjs(day).format("DD-MM-YYYY")}</b>
            </span>
            <span className="text-md font-normal">
              Time Booked: <b>30 Min.</b>
            </span>
          </div>
        </div>
        <div className="flex flex-col justify-center  my-10 gap-3">
          <h3>Tuition Resources</h3>
        </div>
        <div className="w-full flex justify-center items-center gap-4 text-md">
          <Link
            to={"/tuitions"}
            className="bg-blue-500 hover:bg-blue-700 transition-all duration-200 ease-in text-white-text-100 px-5 py-3 rounded-lg"
          >
            Go Back
          </Link>
          <button className="bg-green-500 hover:bg-green-700 transition-all duration-200 ease-in text-white-text-100 px-5 py-3 rounded-lg">
            <FontAwesomeIcon icon={faVideo} /> Enter Meeting
          </button>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    selectedEvent: state.calendar.selectedEvent,
  };
};

export default connect(mapStateToProps, { fetchEventById })(TuitionDetails);
