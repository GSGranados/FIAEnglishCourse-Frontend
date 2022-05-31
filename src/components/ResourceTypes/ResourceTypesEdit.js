import _ from "lodash";
import React, { Component } from 'react'
import { connect } from "react-redux";
import history from "../../history";
import {fetchResourceType, editResourceType} from "../../actions/resourceTypes"
import Modal from "../Utilities/modal";
import ResourceTypesForm from "./ResourceTypesForm";
class ResourceTypesEdit extends Component {
    
  async componentDidMount() {
    const resourceTypeId = Number(history.location.pathname.split("/")[3]);
    await this.props.fetchResourceType(resourceTypeId);
  }

  onSubmit = (formValues) => {
    const resourceTypeId = Number(history.location.pathname.split("/")[3]);
    this.props.editResourceType(resourceTypeId, formValues);
  };

  render() {
    if (!this.props.resourceType) {
      return <div>Loading...</div>;
    }
    return (
      <Modal
        title={"Edit Resource Type"}
        content={
          <ResourceTypesForm 
            onSubmit={this.onSubmit} 
            initialValues={_.pick(this.props.resourceType, "name")}
          />
        }
        actions={""}
        onDismiss={() => history.push('/resourcetypes')}
      />
    )
  }
}

const mapStateToProps = (state) => {
  return {
      resourceType: state.resourceTypes[Number(history.location.pathname.split("/")[3])],
  };
};

export default connect(mapStateToProps,{fetchResourceType,editResourceType})(ResourceTypesEdit);