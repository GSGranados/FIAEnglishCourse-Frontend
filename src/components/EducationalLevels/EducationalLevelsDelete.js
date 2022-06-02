import React from "react";
import history from "../../history";
import Modal from "../Utilities/modal";
import { connect } from "react-redux";
import { fetchEducationalLevel, deleteEducationalLevel } from "../../actions/educationalLevels";
import { Link } from "react-router-dom";
class EducationalLevelsDelete extends React.Component {
  async componentDidMount() {
    const educationalLevelId = Number(history.location.pathname.split("/")[3]);
    await this.props.fetchEducationalLevel(educationalLevelId);
  }

  renderContent() {
    if (!this.props.educationalLevel) {
      return "Are you sure you want to delete this Educational Level?";
    }
    return `Are you sure you want to delete the Educational Level: ${this.props.educationalLevel.name}?`;
  }

  renderActions() {
    const educationalLevelId = Number(history.location.pathname.split("/")[3]);
    return (
      <React.Fragment>
        <Link
          to="/educationallevels"
          className="px-2 py-2 rounded-lg bg-gray-text-300 hover:bg-gray-text-400 transition-all ease-in text-white-text-100 font-medium"
        >
          Cancel
        </Link>
        <button
          onClick={() => this.props.deleteEducationalLevel(educationalLevelId)}
          className="px-2 py-2 rounded-lg bg-red-400 hover:bg-red-600 transition-all ease-in text-white-text-100 font-medium "
        >
          Delete EducationalLevel
        </button>
      </React.Fragment>
    );
  }

  render() {
    return (
      <div>
        <Modal
          title="Delete Educational Level"
          content={this.renderContent()}
          actions={this.renderActions()}
          onDismiss={() => history.push("/educationallevels")}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    educationalLevel: state.educationalLevels.educationalLevels.find(
      (educationalLevel) =>
      educationalLevel.id === Number(history.location.pathname.split("/")[3])
    ),
  };
};

export default connect(mapStateToProps, { fetchEducationalLevel, deleteEducationalLevel })(
  EducationalLevelsDelete
);
