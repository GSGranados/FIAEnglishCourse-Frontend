import React from "react";
import { connect } from "react-redux";
import Table from "../Utilities/table";
import {fetchResourceTypes} from '../../actions/resourceTypes'
class ResourceTypesComponent extends React.Component {
    async componentDidMount() {
        await this.props.fetchResourceTypes();
    }
    renderTable() {
      return <Table columns={this.props.columns} records={this.props.resourceTypes} editUrl={"edit/"} deleteUrl={"delete/"} />
    }
    
    render() {
      return <div>{this.renderTable()}</div>;
    }
}

const mapStateToProps = (state) => {
    return {
      resourceTypes: state.resourceTypes.resourceTypes,
      columns: state.resourceTypes.columns
    };
  };

export default connect(mapStateToProps, { fetchResourceTypes })(
    ResourceTypesComponent
);