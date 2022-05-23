import React from "react";
import { connect } from "react-redux";
import Table from "../Utilities/table";
import {fetchRoles} from '../../actions/roles'
class RolesComponent extends React.Component {
    async componentDidMount() {
        await this.props.fetchRoles();
      }
    
      renderTable() {
        return <Table columns={this.props.columns} records={this.props.roles} editUrl={"edit/"} deleteUrl={"delete/"} />
      }
    
      render() {
        return <div>{this.renderTable()}</div>;
      }
}

const mapStateToProps = (state) => {
    return {
      roles: state.roles.roles,
      columns: state.roles.columns
    };
  };

export default connect(mapStateToProps, { fetchRoles })(
    RolesComponent
);