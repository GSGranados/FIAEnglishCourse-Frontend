import React from "react";
import { connect } from "react-redux";
import history from "../../history";
import Modal from "../Utilities/modal";
import ResourceTypesForm from "./ResourceTypesForm";
import {createResourceType} from '../../actions/resourceTypes'
class ResourceTypesCreate extends React.Component {

  onSubmit = (formValues) => {
    this.props.createResourceType(formValues);
  };

  render() {

    return (
      <Modal
        title={"New Resource Type"}
        content={<ResourceTypesForm onSubmit={this.onSubmit}/>}
        actions={""}
        onDismiss={() => history.push('/resourcetypes')}
      />
    );
  }
}

export default connect(null,{createResourceType})(ResourceTypesCreate);
