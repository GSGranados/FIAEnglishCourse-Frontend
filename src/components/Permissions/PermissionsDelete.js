import React from "react";
import history from "../../history";
import Modal from "../Utilities/modal";
import { connect } from "react-redux";
import { fetchPermission, deletePermission } from "../../actions/permissions";
import { Link } from "react-router-dom";
class PermissionsDelete extends React.Component {
  async componentDidMount() {
    const permissionId = Number(history.location.pathname.split("/")[3]);
    await this.props.fetchPermission(permissionId);
  }

  renderContent() {
    if (!this.props.permission) {
      return "Are you sure you want to delete this Permission?";
    }
    return `Are you sure you want to delete the Permission: ${this.props.permission.name}?`;
  }

  renderActions() {
    const permissionId = Number(history.location.pathname.split("/")[3]);
    return (
      <React.Fragment>
        <Link
          to="/permissions"
          className="px-2 py-2 rounded-lg bg-gray-text-300 hover:bg-gray-text-400 transition-all ease-in text-white-text-100 font-medium"
        >
          Cancel
        </Link>
        <button
          onClick={() => this.props.deletePermission(permissionId)}
          className="px-2 py-2 rounded-lg bg-red-400 hover:bg-red-600 transition-all ease-in text-white-text-100 font-medium"
        >
          Delete Permission
        </button>
      </React.Fragment>
    );
  }

  render() {
    return (
      <div>
        <Modal
          title="Delete Permission"
          content={this.renderContent()}
          actions={this.renderActions()}
          onDismiss={() => history.push("/permissions")}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    permission:
      state.permissions.permissions[
        Number(history.location.pathname.split("/")[3]) - 1
      ],
  };
};

export default connect(mapStateToProps, { fetchPermission, deletePermission })(
  PermissionsDelete
);
