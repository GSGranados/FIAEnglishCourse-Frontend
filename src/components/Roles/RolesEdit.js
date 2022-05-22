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
      console.log(roleId);
      await this.props.fetchRole(roleId);
    }
    
      onSubmit = (formValues) => {
      const roleId = Number(history.location.pathname.split("/")[3]);
        this.props.editRole(roleId, formValues);
      };

  render() {
    console.log(this.props);
    if (false) {
      return <div>Loading...</div>;
    }
    return (
      <Modal
        title={"Edit Role"}
        content={<RolesForm onSubmit={this.onSubmit} initialValues={_.pick(this.props.role, "name")}/>}
        actions={""}
        onDismiss={() => history.push('/roles')}
      />
    )
  }
}

const mapStateToProps = (state) => {
    console.log(state);
    return {
        role: state.permissions.permissions[Number(history.location.pathname.split("/")[3])],
    };
  };

export default connect(mapStateToProps,{fetchRole,editRole})(RolesEdit);