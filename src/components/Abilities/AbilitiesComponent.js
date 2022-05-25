import React from "react";
import { connect } from "react-redux";
import Table from "../Utilities/table";
import {fetchAbilities} from '../../actions/abilities'
class AbilitiesComponent extends React.Component {
    async componentDidMount() {
        await this.props.fetchAbilities();
    }
    renderTable() {
      return <Table columns={this.props.columns} records={this.props.abilities} editUrl={"edit/"} deleteUrl={"delete/"} />
    }
    
    render() {
      return <div>{this.renderTable()}</div>;
    }
}

const mapStateToProps = (state) => {
    return {
      abilities: state.abilities.abilities,
      columns: state.abilities.columns
    };
  };

export default connect(mapStateToProps, { fetchAbilities })(
    AbilitiesComponent
);