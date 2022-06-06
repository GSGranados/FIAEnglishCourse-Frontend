import React from "react";
import { connect } from "react-redux";
import history from "../../history";
import Modal from "../Utilities/modal";
import TopicsForm from "./TopicsForm";
import {createTopic} from '../../actions/topics'
class TopicsCreate extends React.Component {

  onSubmit = (formValues) => {
    this.props.createTopic(formValues);
  };

  render() {

    return (
      <Modal
        title={"New Topic"}
        content={<TopicsForm onSubmit={this.onSubmit}/>}
        actions={""}
        onDismiss={() => history.push('/topics')}
      />
    );
  }
}

export default connect(null,{createTopic})(TopicsCreate);
