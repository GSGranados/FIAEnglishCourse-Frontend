import _ from "lodash";
import React, { Component } from 'react'
import { connect } from "react-redux";
import history from "../../history";
import {fetchAbility, editAbility} from "../../actions/abilities"
import Modal from "../Utilities/modal";
import AbilitiesForm from "./AbilitiesForm";
class AbilitiesEdit extends Component {
    
  async componentDidMount() {
    const abilityId = Number(history.location.pathname.split("/")[3]);
    await this.props.fetchAbility(abilityId);
  }

  onSubmit = (formValues) => {
    const abilityId = Number(history.location.pathname.split("/")[3]);
    this.props.editAbility(abilityId, formValues);
  };

  render() {
    if (!this.props.ability) {
      return <div>Loading...</div>;
    }
    return (
      <Modal
        title={"Edit Ability"}
        content={
          <AbilitiesForm 
            onSubmit={this.onSubmit} 
            initialValues={_.pick(this.props.ability, "name")}
          />
        }
        actions={""}
        onDismiss={() => history.push('/abilities')}
      />
    )
  }
}

const mapStateToProps = (state) => {
  return {
      ability: state.abilities.abilities[Number(history.location.pathname.split("/")[3]-1)],
  };
};

export default connect(mapStateToProps,{fetchAbility,editAbility})(AbilitiesEdit);