import React from "react";
import { connect } from "react-redux";
import history from "../../history";
import Modal from "../Utilities/modal";
import PermissionsForm from "./PermissionsForm";
import {createPermission} from '../../actions/permissions'
class PermissionsCreate extends React.Component {

  onSubmit = (formValues) => {
    this.props.createPermission(formValues);
  };

  render() {

    return (
      <Modal
        title={"New Permission"}
        content={<PermissionsForm onSubmit={this.onSubmit}/>}
        actions={""}
        onDismiss={() => history.push('/permissions')}
      />
    );
  }
}

export default connect(null,{createPermission})(PermissionsCreate);
