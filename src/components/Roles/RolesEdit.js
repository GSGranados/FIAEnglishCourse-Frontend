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
    if (!this.props.role) {
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
        actions={""}
        onDismiss={() => history.push('/roles')}
      />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    role: state.roles.roles.find(
      (role) =>
      role.id === Number(history.location.pathname.split("/")[3])
    ),
  };
};

export default connect(mapStateToProps,{fetchRole,editRole})(RolesEdit);