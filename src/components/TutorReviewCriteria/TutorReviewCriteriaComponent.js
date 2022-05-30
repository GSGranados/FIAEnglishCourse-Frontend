import React from "react";
import { connect } from "react-redux";
import Table from "../Utilities/table";
import {fetchMultipleTutorReviewCriteria} from '../../actions/tutorReviewCriteria'
class TutorReviewCriteriaComponent extends React.Component {
    async componentDidMount() {
        await this.props.fetchMultipleTutorReviewCriteria();
    }
    renderTable() {
      return <Table columns={this.props.columns} records={this.props.tutorReviewCriteria} editUrl={"edit/"} deleteUrl={"delete/"} />
    }
    
    render() {
      return <div>{this.renderTable()}</div>;
    }
}

const mapStateToProps = (state) => {
    return {
      tutorReviewCriteria: state.tutorReviewCriteria.tutorReviewCriteria,
      columns: state.tutorReviewCriteria.columns
    };
  };

export default connect(mapStateToProps, { fetchMultipleTutorReviewCriteria })(
    TutorReviewCriteriaComponent
);