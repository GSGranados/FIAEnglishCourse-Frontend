import React from "react";
import history from "../../history";
import Modal from "../Utilities/modal";
import { connect } from "react-redux";
import { fetchEducationalResource, deleteEducationalResource } from "../../actions/educationalResources";
import { Link } from "react-router-dom";
class EducationalResourcesDelete extends React.Component {
  async componentDidMount() {
    const educationalResourceId = Number(history.location.pathname.split("/")[3]);
    await this.props.fetchEducationalResource(educationalResourceId);
  }

  renderContent() {
    if (!this.props.educationalResource) {
      return "Are you sure you want to delete this Educational Resource?";
    }
    return `Are you sure you want to delete the Educational Resource: ${this.props.educationalResource.name}?`;
  }

  renderActions() {
    const educationalResourceId = Number(history.location.pathname.split("/")[3]);
    return (
      <React.Fragment>
        <Link
          to="/educationalResources"
          className="px-2 py-2 rounded-lg bg-gray-text-300 hover:bg-gray-text-400 transition-all ease-in text-white-text-100 font-medium"
        >
          Cancel
        </Link>
        <button
          onClick={() => this.props.deleteEducationalResource(educationalResourceId)}
          className="px-2 py-2 rounded-lg bg-red-400 hover:bg-red-600 transition-all ease-in text-white-text-100 font-medium "
        >
          Delete Educational Resource
        </button>
      </React.Fragment>
    );
  }

  render() {
    return (
      <div>
        <Modal
          title="Delete Educational Resource"
          content={this.renderContent()}
          actions={this.renderActions()}
          onDismiss={() => history.push("/educationalresources")}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    educationalResource: state.educationalResources.educationalResources[Number(history.location.pathname.split("/")[3]-1)]
  };
};

export default connect(mapStateToProps, { fetchEducationalResource, deleteEducationalResource })(
  EducationalResourcesDelete
);
