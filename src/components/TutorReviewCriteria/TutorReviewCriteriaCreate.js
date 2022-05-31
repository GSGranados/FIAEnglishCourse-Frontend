import React from "react";
import { connect } from "react-redux";
import history from "../../history";
import Modal from "../Utilities/modal";
import TutorReviewCriteriaForm from "./TutorReviewCriteriaForm";
import {createTutorReviewCriteria} from '../../actions/tutorReviewCriteria'
class TutorReviewCriteriaCreate extends React.Component {

  onSubmit = (formValues) => {
    this.props.createTutorReviewCriteria(formValues);
  };

  render() {

    return (
      <Modal
        title={"New Tutor Review Criteria"}
        content={<TutorReviewCriteriaForm onSubmit={this.onSubmit}/>}
        actions={""}
        onDismiss={() => history.push('/tutorreviewcriteria')}
      />
    );
  }
}

export default connect(null,{createTutorReviewCriteria})(TutorReviewCriteriaCreate);
