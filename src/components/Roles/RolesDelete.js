import React from "react";
import history from "../../history";
import Modal from "../Utilities/modal";
import { connect } from "react-redux";
import { fetchRole, deleteRole } from "../../actions/roles";
import { Link } from "react-router-dom";
class RolesDelete extends React.Component {
  async componentDidMount() {
    const roleId = Number(history.location.pathname.split("/")[3]);
    await this.props.fetchRole(roleId);
  }

  renderContent() {
    if (!this.props.role) {
      return "Are you sure you want to delete this Role?";
    }
    return `Are you sure you want to delete the Role: ${this.props.role.name}?`;
  }

  renderActions() {
    const roleId = Number(history.location.pathname.split("/")[3]);
    console.log(this.props);
    return (
      <React.Fragment>
        <Link
          to="/roles"
          className="px-2 py-2 rounded-lg bg-gray-text-300 hover:bg-gray-text-400 transition-all ease-in text-white-text-100 font-medium"
        >
          Cancel
        </Link>
        <button
          onClick={() => this.props.deleteRole(roleId)}
          className="px-2 py-2 rounded-lg bg-red-400 hover:bg-red-600 transition-all ease-in text-white-text-100 font-medium "
        >
          Delete Role
        </button>
      </React.Fragment>
    );
  }

  render() {
    return (
      <div>
        <Modal
          title="Delete Role"
          content={this.renderContent()}
          actions={this.renderActions()}
          onDismiss={() => history.push("/roles")}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state)
  return {
    role: state.roles.roles[Number(history.location.pathname.split("/")[3]-1)]
  };
};

export default connect(mapStateToProps, { fetchRole, deleteRole })(
  RolesDelete
);
