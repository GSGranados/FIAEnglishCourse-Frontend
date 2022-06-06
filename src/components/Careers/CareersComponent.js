import React from "react";
import { connect } from "react-redux";
import Table from "../Utilities/table";
import {fetchCareers} from '../../actions/careers'
class CareersComponent extends React.Component {
    async componentDidMount() {
        await this.props.fetchCareers();
    }
    renderTable() {
      return <Table columns={this.props.columns} records={this.props.careers} editUrl={"edit/"} deleteUrl={"delete/"} />
    }
    
    render() {
      return <div>{this.renderTable()}</div>;
    }
}

const mapStateToProps = (state) => {
    return {
      careers: state.careers.careers,
      columns: state.careers.columns
    };
  };

export default connect(mapStateToProps, { fetchCareers })(
    CareersComponent
);