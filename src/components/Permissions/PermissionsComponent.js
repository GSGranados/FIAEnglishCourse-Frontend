import React from "react";
import { connect } from "react-redux";
import Table from "../Utilities/table";
import {fetchPermissions} from '../../actions/permissions'
class PermmissionsComponent extends React.Component {
  async componentDidMount() {
    await this.props.fetchPermissions();
  }

  renderTable() {
  return <Table columns={this.props.columns} records={this.props.permissions} editUrl={"edit/"} deleteUrl={"delete/"} />
  }

  render() {
    return <div>{this.renderTable()}</div>;
  }
}

const mapStateToProps = (state) => {
  return {
    permissions: state.permissions.permissions,
    columns: state.permissions.columns
  };
};

export default connect(mapStateToProps, { fetchPermissions })(
  PermmissionsComponent
);
