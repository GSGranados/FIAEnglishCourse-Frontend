import React from "react";
import history from "../../history";
import Modal from "../Utilities/modal";
import { connect } from "react-redux";
import { fetchTopic, deleteTopic } from "../../actions/topics";
import { Link } from "react-router-dom";
class TopicsDelete extends React.Component {
  async componentDidMount() {
    const topicId = Number(history.location.pathname.split("/")[3]);
    await this.props.fetchTopic(topicId);
  }

  renderContent() {
    if (!this.props.topic) {
      return "Are you sure you want to delete this Topic?";
    }
    return `Are you sure you want to delete the Topic: ${this.props.topic.name}?`;
  }

  renderActions() {
    const topicId = Number(history.location.pathname.split("/")[3]);
    return (
      <React.Fragment>
        <Link
          to="/topics"
          className="px-2 py-2 rounded-lg bg-gray-text-300 hover:bg-gray-text-400 transition-all ease-in text-white-text-100 font-medium"
        >
          Cancel
        </Link>
        <button
          onClick={() => this.props.deleteTopic(topicId)}
          className="px-2 py-2 rounded-lg bg-red-400 hover:bg-red-600 transition-all ease-in text-white-text-100 font-medium "
        >
          Delete Topic
        </button>
      </React.Fragment>
    );
  }

  render() {
    return (
      <div>
        <Modal
          title="Delete Topic"
          content={this.renderContent()}
          actions={this.renderActions()}
          onDismiss={() => history.push("/topics")}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    topic: state.topics.topics.find(
      (topic) =>
      topic.id === Number(history.location.pathname.split("/")[3])
    ),
  };
};

export default connect(mapStateToProps, { fetchTopic, deleteTopic })(
  TopicsDelete
);
