import _ from "lodash";
import React, { Component } from 'react'
import { connect } from "react-redux";
import history from "../../history";
import {fetchEducationalResource, editEducationalResource} from "../../actions/educationalResources"
import Modal from "../Utilities/modal";
import EducationalResourcesForm from "./EducationalResourcesForm";
class EducationalResourcesEdit extends Component {
    
  async componentDidMount() {
    const educationalResourceId = Number(history.location.pathname.split("/")[3]);
    await this.props.fetchEducationalResource(educationalResourceId);
  }

  onSubmit = (formValues) => {
    const educationalResourceId = Number(history.location.pathname.split("/")[3]);
    this.props.editEducationalResource(educationalResourceId, formValues);
  };

  render() {
    if (!this.props.educationalResource) {
      return <div>Loading...</div>;
    }
    return (
      <Modal
        title={"Edit EducationalResource"}
        content={
          <EducationalResourcesForm 
            onSubmit={this.onSubmit} 
            initialValues={_.pick(this.props.educationalResource, "name","topic_id", "resource_type_id")}
          />
        }
        actions={""}
        onDismiss={() => history.push('/educationalresources')}
      />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    educationalResource: state.educationalResources.educationalResources.find(
      (educationalResource) =>
      educationalResource.id === Number(history.location.pathname.split("/")[3])
    ),
  };
};

export default connect(mapStateToProps,{fetchEducationalResource,editEducationalResource})(EducationalResourcesEdit);