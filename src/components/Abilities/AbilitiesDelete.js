import React from "react";
import history from "../../history";
import Modal from "../Utilities/modal";
import { connect } from "react-redux";
import { fetchAbility, deleteAbility } from "../../actions/abilities";
import { Link } from "react-router-dom";
class AbilitiesDelete extends React.Component {
  async componentDidMount() {
    const abilityId = Number(history.location.pathname.split("/")[3]);
    await this.props.fetchAbility(abilityId);
  }

  renderContent() {
    if (!this.props.ability) {
      return "Are you sure you want to delete this Ability?";
    }
    return `Are you sure you want to delete the Ability: ${this.props.ability.name}?`;
  }

  renderActions() {
    const abilityId = Number(history.location.pathname.split("/")[3]);
    return (
      <React.Fragment>
        <Link
          to="/abilities"
          className="px-2 py-2 rounded-lg bg-gray-text-300 hover:bg-gray-text-400 transition-all ease-in text-white-text-100 font-medium"
        >
          Cancel
        </Link>
        <button
          onClick={() => this.props.deleteAbility(abilityId)}
          className="px-2 py-2 rounded-lg bg-red-400 hover:bg-red-600 transition-all ease-in text-white-text-100 font-medium "
        >
          Delete Ability
        </button>
      </React.Fragment>
    );
  }

  render() {
    return (
      <div>
        <Modal
          title="Delete Ability"
          content={this.renderContent()}
          actions={this.renderActions()}
          onDismiss={() => history.push("/abilities")}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ability: state.abilities[Number(history.location.pathname.split("/")[3])]
  };
};

export default connect(mapStateToProps, { fetchAbility, deleteAbility })(
  AbilitiesDelete
);
