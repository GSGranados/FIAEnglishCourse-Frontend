import React from "react";
import history from "../../history";
import Modal from "../Utilities/modal";
import { connect } from "react-redux";
import { fetchResourceType, deleteResourceType } from "../../actions/resourceTypes";
import { Link } from "react-router-dom";
class ResourceTypesDelete extends React.Component {
  async componentDidMount() {
    const resourceTypeId = Number(history.location.pathname.split("/")[3]);
    await this.props.fetchResourceType(resourceTypeId);
  }

  renderContent() {
    if (!this.props.resourceType) {
      return "Are you sure you want to delete this Resource Type?";
    }
    return `Are you sure you want to delete the Resource Type: ${this.props.resourceType.name}?`;
  }

  renderActions() {
    const resourceTypeId = Number(history.location.pathname.split("/")[3]);
    return (
      <React.Fragment>
        <Link
          to="/resourcetypes"
          className="px-2 py-2 rounded-lg bg-gray-text-300 hover:bg-gray-text-400 transition-all ease-in text-white-text-100 font-medium"
        >
          Cancel
        </Link>
        <button
          onClick={() => this.props.deleteResourceType(resourceTypeId)}
          className="px-2 py-2 rounded-lg bg-red-400 hover:bg-red-600 transition-all ease-in text-white-text-100 font-medium "
        >
          Delete Resource Type
        </button>
      </React.Fragment>
    );
  }

  render() {
    return (
      <div>
        <Modal
          title="Delete Resource Type"
          content={this.renderContent()}
          actions={this.renderActions()}
          onDismiss={() => history.push("/resourcetypes")}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    resourceType: state.resourceTypes[Number(history.location.pathname.split("/")[3])]
  };
};

export default connect(mapStateToProps, { fetchResourceType, deleteResourceType })(
  ResourceTypesDelete
);
