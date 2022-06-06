import React from "react";
import { connect } from "react-redux";
import Table from "../Utilities/table";
import {fetchEducationalResources} from '../../actions/educationalResources'
class EducationalResourcesComponent extends React.Component {
    async componentDidMount() {
        await this.props.fetchEducationalResources();
    }
    renderTable() {
      return <Table columns={this.props.columns} records={this.props.educationalResources} editUrl={"edit/"} deleteUrl={"delete/"} />
    }
    
    render() {
      return <div>{this.renderTable()}</div>;
    }
}

const mapStateToProps = (state) => {
    return {
      educationalResources: state.educationalResources.educationalResources,
      columns: state.educationalResources.columns
    };
  };

export default connect(mapStateToProps, { fetchEducationalResources })(
    EducationalResourcesComponent
);