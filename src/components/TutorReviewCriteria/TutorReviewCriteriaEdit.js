import _ from "lodash";
import React, { Component } from 'react'
import { connect } from "react-redux";
import history from "../../history";
import {fetchTutorReviewCriteria, editTutorReviewCriteria} from "../../actions/tutorReviewCriteria"
import Modal from "../Utilities/modal";
import TutorReviewCriteriaForm from "./TutorReviewCriteriaForm";
class TutorReviewCriteriaEdit extends Component {
    
  async componentDidMount() {
    const tutorReviewCriteriaId = Number(history.location.pathname.split("/")[3]);
    await this.props.fetchTutorReviewCriteria(tutorReviewCriteriaId);
  }

  onSubmit = (formValues) => {
    const tutorReviewCriteriaId = Number(history.location.pathname.split("/")[3]);
    this.props.editTutorReviewCriteria(tutorReviewCriteriaId, formValues);
  };

  render() {
    if (!this.props.tutorReviewCriteria) {
      return <div>Loading...</div>;
    }
    return (
      <Modal
        title={"Edit Tutor Review Criteria"}
        content={
          <TutorReviewCriteriaForm 
            onSubmit={this.onSubmit} 
            initialValues={_.pick(this.props.tutorReviewCriteria, "name")}
          />
        }
        actions={""}
        onDismiss={() => history.push('/tutorreviewcriteria')}
      />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    tutorReviewCriteria: state.tutorReviewCriteria.tutorReviewCriteria.find(
      (criteria) =>
      criteria.id === Number(history.location.pathname.split("/")[3])
    ),
  };
};

export default connect(mapStateToProps,{fetchTutorReviewCriteria,editTutorReviewCriteria})(TutorReviewCriteriaEdit);