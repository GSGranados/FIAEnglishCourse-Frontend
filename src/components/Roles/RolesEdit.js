import _ from "lodash";
import React, { Component } from 'react'
import { connect } from "react-redux";
import history from "../../history";
import {fetchRole, editRole} from "../../actions/roles"
import Modal from "../Utilities/modal";
import RolesForm from "./RolesForm";
class RolesEdit extends Component {
    
  async componentDidMount() {
    const roleId = Number(history.location.pathname.split("/")[3]);
    await this.props.fetchRole(roleId);
  }

  onSubmit = (formValues) => {
    const roleId = Number(history.location.pathname.split("/")[3]);
    this.props.editRole(roleId, formValues);
  };

  render() {
    const actions = (
      <>
        <button className="px-2 py-2 rounded-lg bg-gray-text-300 hover:bg-gray-text-400 transition-all ease-in text-white-text-100 font-medium">Cancel</button>
        <button className="px-2 py-2 rounded-lg bg-blue-400 hover:bg-blue-600 transition-all ease-in text-white-text-100 font-medium">Modify Role</button>
      </>
    )
    if (false) {
      return <div>Loading...</div>;
    }
    return (
      <Modal
        title={"Edit Role"}
        content={
          <RolesForm 
            onSubmit={this.onSubmit} 
            initialValues={_.pick(this.props.role, "name")}
          />
        }
        actions={actions}
        onDismiss={() => history.push('/roles')}
      />
    )
  }
}

const mapStateToProps = (state) => {
  return {
      role: state.roles.roles[Number(history.location.pathname.split("/")[3]-1)],
  };
};

export default connect(mapStateToProps,{fetchRole,editRole})(RolesEdit);