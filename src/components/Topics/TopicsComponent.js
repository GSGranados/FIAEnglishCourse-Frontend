import React from "react";
import { connect } from "react-redux";
import Table from "../Utilities/table";
import {fetchTopics} from '../../actions/topics'
class TopicsComponent extends React.Component {
    async componentDidMount() {
        await this.props.fetchTopics();
    }
    renderTable() {
      return <Table columns={this.props.columns} records={this.props.topics} editUrl={"edit/"} deleteUrl={"delete/"} />
    }
    
    render() {
      return <div>{this.renderTable()}</div>;
    }
}

const mapStateToProps = (state) => {
    return {
      topics: state.topics.topics,
      columns: state.topics.columns
    };
  };

export default connect(mapStateToProps, { fetchTopics })(
    TopicsComponent
);