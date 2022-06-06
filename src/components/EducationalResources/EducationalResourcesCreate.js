import React from "react";
import { connect } from "react-redux";
import history from "../../history";
import Modal from "../Utilities/modal";
import EducationalResourcesForm from "./EducationalResourcesForm";
import {createEducationalResource} from '../../actions/educationalResources'
class EducationalResourcesCreate extends React.Component {

  onSubmit = (formValues) => {
    this.props.createEducationalResource(formValues);
  };

  render() {

    return (
      <Modal
        title={"New Educational Resource"}
        content={<EducationalResourcesForm onSubmit={this.onSubmit}/>}
        actions={""}
        onDismiss={() => history.push('/educationalresources')}
      />
    );
  }
}

export default connect(null,{createEducationalResource})(EducationalResourcesCreate);
