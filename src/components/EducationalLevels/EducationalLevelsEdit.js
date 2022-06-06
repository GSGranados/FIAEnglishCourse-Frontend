import _ from "lodash";
import React, { Component } from 'react'
import { connect } from "react-redux";
import history from "../../history";
import {fetchEducationalLevel, editEducationalLevel} from "../../actions/educationalLevels"
import Modal from "../Utilities/modal";
import EducationalLevelsForm from "./EducationalLevelsForm";
class EducationalLevelsEdit extends Component {
    
  async componentDidMount() {
    const educationalLevelId = Number(history.location.pathname.split("/")[3]);
    await this.props.fetchEducationalLevel(educationalLevelId);
  }

  onSubmit = (formValues) => {
    const educationalLevelId = Number(history.location.pathname.split("/")[3]);
    this.props.editEducationalLevel(educationalLevelId, formValues);
  };

  render() {
    if (!this.props.educationalLevel) {
      return <div>Loading...</div>;
    }
    return (
      <Modal
        title={"Edit EducationalLevel"}
        content={
          <EducationalLevelsForm 
            onSubmit={this.onSubmit} 
            initialValues={_.pick(this.props.educationalLevel, "name", "career_id")}
          />
        }
        actions={""}
        onDismiss={() => history.push('/educationallevels')}
      />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    educationalLevel: state.educationalLevels.educationalLevels.find(
      (educationalLevel) =>
      educationalLevel.id === Number(history.location.pathname.split("/")[3])
    ),
  };
};

export default connect(mapStateToProps,{fetchEducationalLevel,editEducationalLevel})(EducationalLevelsEdit);