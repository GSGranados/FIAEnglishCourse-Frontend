import React from "react";
import { connect } from "react-redux";
import history from "../../history";
import Modal from "../Utilities/modal";
import CareersForm from "./CareersForm";
import {createCareer} from '../../actions/careers'
class CareersCreate extends React.Component {

  onSubmit = (formValues) => {
    this.props.createCareer(formValues);
  };

  render() {

    return (
      <Modal
        title={"New Career"}
        content={<CareersForm onSubmit={this.onSubmit}/>}
        actions={""}
        onDismiss={() => history.push('/careers')}
      />
    );
  }
}

export default connect(null,{createCareer})(CareersCreate);
