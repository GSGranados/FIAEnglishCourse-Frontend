import _ from "lodash";
import React, { Component } from 'react'
import { connect } from "react-redux";
import history from "../../history";
import {fetchTopic, editTopic} from "../../actions/topics"
import Modal from "../Utilities/modal";
import TopicsForm from "./TopicsForm";
class TopicsEdit extends Component {
    
  async componentDidMount() {
    const topicId = Number(history.location.pathname.split("/")[3]);
    await this.props.fetchTopic(topicId);
  }

  onSubmit = (formValues) => {
    const topicId = Number(history.location.pathname.split("/")[3]);
    this.props.editTopic(topicId, formValues);
  };

  render() {
    if (!this.props.topic) {
      return <div>Loading...</div>;
    }
    return (
      <Modal
        title={"Edit Topic"}
        content={
          <TopicsForm 
            onSubmit={this.onSubmit} 
            initialValues={_.pick(this.props.topic, "name")}
          />
        }
        actions={""}
        onDismiss={() => history.push('/topics')}
      />
    )
  }
}

const mapStateToProps = (state) => {
  return {
      topic: state.topics.topics[Number(history.location.pathname.split("/")[3]-1)],
  };
};

export default connect(mapStateToProps,{fetchTopic,editTopic})(TopicsEdit);