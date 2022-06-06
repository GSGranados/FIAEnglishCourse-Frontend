import React from "react";
import { connect } from "react-redux";
import history from "../../history";
import Modal from "../Utilities/modal";
import EducationalLevelsForm from "./EducationalLevelsForm";
import {createEducationalLevel} from '../../actions/educationalLevels'
class EducationalLevelsCreate extends React.Component {

  onSubmit = (formValues) => {
    this.props.createEducationalLevel(formValues);
  };

  render() {

    return (
      <Modal
        title={"New EducationalLevel"}
        content={<EducationalLevelsForm onSubmit={this.onSubmit}/>}
        actions={""}
        onDismiss={() => history.push('/educationallevels')}
      />
    );
  }
}

export default connect(null,{createEducationalLevel})(EducationalLevelsCreate);
