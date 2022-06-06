import React from "react";
import { connect } from "react-redux";
import Table from "../Utilities/table";
import {fetchEducationalLevels} from '../../actions/educationalLevels'
class EducationalLevelsComponent extends React.Component {
    async componentDidMount() {
        await this.props.fetchEducationalLevels();
    }
    renderTable() {
      return <Table columns={this.props.columns} records={this.props.educationalLevels} editUrl={"edit/"} deleteUrl={"delete/"} />
    }
    
    render() {
      return <div>{this.renderTable()}</div>;
    }
}

const mapStateToProps = (state) => {
    return {
      educationalLevels: state.educationalLevels.educationalLevels,
      columns: state.educationalLevels.columns
    };
  };

export default connect(mapStateToProps, { fetchEducationalLevels })(
    EducationalLevelsComponent
);