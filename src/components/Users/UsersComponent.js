import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";
import { fetchUsers } from "../../actions/users";
import Table from "../Utilities/table";
export class UsersComponent extends Component {
  async componentDidMount() {
    await this.props.fetchUsers();
  }
  renderTable() {
    return (
      <div className="flex flex-col">
      <div className="flex justify-between items-center mb-2">
      <h1>Users</h1>
      <Link to="new" className="bg-green-500 text-right text-[1rem] px-3 py-1 rounded-lg text-white-text-100 hover:bg-green-600 transition-all ease-in duration-200"><FontAwesomeIcon icon={faPlus} className="mr-1"/>New User</Link>
      </div>
        <Table
          columns={this.props.columns}
          records={this.props.users}
          editUrl={"edit/"}
          deleteUrl={"delete/"}
        />
      </div>
    );
  }

  render() {
    return <div>{this.renderTable()}</div>;
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.users.users,
    columns: state.users.columns,
  };
};

export default connect(mapStateToProps, { fetchUsers })(UsersComponent);
