import React from "react";
import { connect } from "react-redux";
import history from "../../history";
import Modal from "../Utilities/modal";
import RolesForm from "./RolesForm";
import {createRole} from '../../actions/roles'
class RolesCreate extends React.Component {

  onSubmit = (formValues) => {
    this.props.createRole(formValues);
  };

  render() {

    return (
      <Modal
        title={"New Role"}
        content={<RolesForm onSubmit={this.onSubmit}/>}
        actions={""}
        onDismiss={() => history.push('/roles')}
      />
    );
  }
}

export default connect(null,{createRole})(RolesCreate);
