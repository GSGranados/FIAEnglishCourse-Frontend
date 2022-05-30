import _ from "lodash";
import React, { Component } from 'react'
import { connect } from "react-redux";
import history from "../../history";
import {fetchPermission, editPermission} from "../../actions/permissions"
import Modal from "../Utilities/modal";
import PermissionsForm from "./PermissionsForm";
class PermissionsEdit extends Component {

    async componentDidMount() {
      const permissionId = Number(history.location.pathname.split("/")[3]);
      await this.props.fetchPermission(permissionId);
    }
    
      onSubmit = (formValues) => {
      const permissionId = Number(history.location.pathname.split("/")[3]);
        this.props.editPermission(permissionId, formValues);
      };

  render() {
    if (!this.props.permission) {
      return <div>Loading...</div>;
    }
    return (
      <Modal
        title={"Edit Permission"}
        content={<PermissionsForm onSubmit={this.onSubmit} initialValues={_.pick(this.props.permission, "name")}/>}
        actions={""}
        onDismiss={() => history.push('/permissions')}
      />
    )
  }
}

const mapStateToProps = (state) => {
    return {
        permission: state.permissions[Number(history.location.pathname.split("/")[3])],
    };
  };

export default connect(mapStateToProps,{fetchPermission,editPermission})(PermissionsEdit);