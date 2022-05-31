import React from "react";
import history from "../../history";
import Modal from "../Utilities/modal";
import { connect } from "react-redux";
import { fetchCareer, deleteCareer } from "../../actions/careers";
import { Link } from "react-router-dom";
class CareersDelete extends React.Component {
  async componentDidMount() {
    const careerId = Number(history.location.pathname.split("/")[3]);
    await this.props.fetchCareer(careerId);
  }

  renderContent() {
    if (!this.props.career) {
      return "Are you sure you want to delete this Career?";
    }
    return `Are you sure you want to delete the Career: ${this.props.career.name}?`;
  }

  renderActions() {
    const careerId = Number(history.location.pathname.split("/")[3]);
    return (
      <React.Fragment>
        <Link
          to="/careers"
          className="px-2 py-2 rounded-lg bg-gray-text-300 hover:bg-gray-text-400 transition-all ease-in text-white-text-100 font-medium"
        >
          Cancel
        </Link>
        <button
          onClick={() => this.props.deleteCareer(careerId)}
          className="px-2 py-2 rounded-lg bg-red-400 hover:bg-red-600 transition-all ease-in text-white-text-100 font-medium "
        >
          Delete Career
        </button>
      </React.Fragment>
    );
  }

  render() {
    return (
      <div>
        <Modal
          title="Delete Career"
          content={this.renderContent()}
          actions={this.renderActions()}
          onDismiss={() => history.push("/careers")}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    career: state.careers[Number(history.location.pathname.split("/")[3])]
  };
};

export default connect(mapStateToProps, { fetchCareer, deleteCareer })(
  CareersDelete
);
