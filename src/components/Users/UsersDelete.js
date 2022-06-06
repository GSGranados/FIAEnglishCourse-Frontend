import React, { Component } from "react";
import history from "../../history";
import Modal from "../Utilities/modal";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { fetchUser, deleteUser } from "../../actions/users";
export class UsersDelete extends Component {
  async componentDidMount() {
    const userId = Number(history.location.pathname.split("/")[3]);
    await this.props.fetchUser(userId);
  }

  renderContent() {
    const { first_name, last_name } = this.props.user;
    if (!this.props.user) {
      return "Are you sure you want to delete this User?";
    }
    return (
      <>
        <p>Are you sure you want to delete the User:</p>
        <span className="font-bold">
          {first_name} {last_name}
        </span>
      </>
    );
  }

  renderActions() {
    const userId = Number(history.location.pathname.split("/")[3]);
    return (
      <React.Fragment>
        <Link
          to="/users"
          className="w-full text-center px-2 py-2 rounded-lg bg-gray-text-300 hover:bg-gray-text-400 transition-all ease-in text-white-text-100 font-medium"
        >
          Cancel
        </Link>
        <button
          onClick={() => this.props.deleteUser(userId, { is_active: false })}
          className="w-full text-center px-2 py-2 rounded-lg bg-red-400 hover:bg-red-600 transition-all ease-in text-white-text-100 font-medium"
        >
          Deactivate User
        </button>
      </React.Fragment>
    );
  }

  render() {
    return (
      <div>
        <Modal
          title="Delete User"
          content={this.renderContent()}
          actions={this.renderActions()}
          onDismiss={() => history.push("/users")}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.users.users.find(
      (user) =>
      user.id === Number(history.location.pathname.split("/")[3])
    ),
  };  
};

export default connect(mapStateToProps, { fetchUser, deleteUser })(UsersDelete);
