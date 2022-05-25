import React from "react";
import { connect } from "react-redux";
import history from "../../history";
import Modal from "../Utilities/modal";
import AbilitiesForm from "./AbilitiesForm";
import {createAbility} from '../../actions/abilities'
class AbilitiesCreate extends React.Component {

  onSubmit = (formValues) => {
    this.props.createAbility(formValues);
  };

  render() {

    return (
      <Modal
        title={"New Ability"}
        content={<AbilitiesForm onSubmit={this.onSubmit}/>}
        actions={""}
        onDismiss={() => history.push('/abilities')}
      />
    );
  }
}

export default connect(null,{createAbility})(AbilitiesCreate);
