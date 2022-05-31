import React from "react";
import history from "../../history";
import Modal from "../Utilities/modal";
import { connect } from "react-redux";
import { fetchTutorReviewCriteria, deleteTutorReviewCriteria } from "../../actions/tutorReviewCriteria";
import { Link } from "react-router-dom";
class TutorReviewCriteriaDelete extends React.Component {
  async componentDidMount() {
    const tutorReviewCriteriaId = Number(history.location.pathname.split("/")[3]);
    await this.props.fetchTutorReviewCriteria(tutorReviewCriteriaId);
  }

  renderContent() {
    if (!this.props.tutorReviewCriteria) {
      return "Are you sure you want to delete this Tutor Review Criteria?";
    }
    return `Are you sure you want to delete the Tutor Review Criteria: ${this.props.tutorReviewCriteria.name}?`;
  }

  renderActions() {
    const tutorReviewCriteriaId = Number(history.location.pathname.split("/")[3]);
    return (
      <React.Fragment>
        <Link
          to="/tutorreviewcriteria"
          className="px-2 py-2 rounded-lg bg-gray-text-300 hover:bg-gray-text-400 transition-all ease-in text-white-text-100 font-medium"
        >
          Cancel
        </Link>
        <button
          onClick={() => this.props.deleteTutorReviewCriteria(tutorReviewCriteriaId)}
          className="px-2 py-2 rounded-lg bg-red-400 hover:bg-red-600 transition-all ease-in text-white-text-100 font-medium "
        >
          Delete Tutor Review Criteria
        </button>
      </React.Fragment>
    );
  }

  render() {
    return (
      <div>
        <Modal
          title="Delete Tutor Review Criteria"
          content={this.renderContent()}
          actions={this.renderActions()}
          onDismiss={() => history.push("/tutorreviewcriteria")}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    tutorReviewCriteria: state.tutorReviewCriteria[Number(history.location.pathname.split("/")[3])]
  };
};

export default connect(mapStateToProps, { fetchTutorReviewCriteria, deleteTutorReviewCriteria })(
  TutorReviewCriteriaDelete
);
