import _ from "lodash";
import React, { Component } from 'react'
import { connect } from "react-redux";
import history from "../../history";
import {fetchCareer, editCareer} from "../../actions/careers"
import Modal from "../Utilities/modal";
import CareersForm from "./CareersForm";
class CareersEdit extends Component {
    
  async componentDidMount() {
    const careerId = Number(history.location.pathname.split("/")[3]);
    await this.props.fetchCareer(careerId);
  }

  onSubmit = (formValues) => {
    const careerId = Number(history.location.pathname.split("/")[3]);
    this.props.editCareer(careerId, formValues);
  };

  render() {
    if (!this.props.career) {
      return <div>Loading...</div>;
    }
    return (
      <Modal
        title={"Edit Career"}
        content={
          <CareersForm 
            onSubmit={this.onSubmit} 
            initialValues={_.pick(this.props.career, "name")}
          />
        }
        actions={""}
        onDismiss={() => history.push('/careers')}
      />
    )
  }
}

const mapStateToProps = (state) => {
  return {
      career: state.careers[Number(history.location.pathname.split("/")[3])],
  };
};

export default connect(mapStateToProps,{fetchCareer,editCareer})(CareersEdit);