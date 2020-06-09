import React, { Component } from "react";
import { Link } from "react-router-dom";
import Modal from "../Modal";
import history from "../../history";
import { fetchStream, deleteStream } from "../../actions";
import { connect } from "react-redux";

export class StreamDelete extends Component {
  componentDidMount = () => {
    this.props.fetchStream(this.props.match.params.id);
  };

  deleteStream = () => {
    this.props.deleteStream(this.props.match.params.id);
  };

  actions = () => {
    return (
      <React.Fragment>
        <div className="ui negative button" onClick={this.deleteStream}>
          Delete
        </div>
        <Link to="/" className="ui button">
          Cancel
        </Link>
      </React.Fragment>
    );
  };

  onDismiss = () => {
    history.push("/");
  };

  renderContent = () => {
    if (!this.props.stream) {
      return "Are you sure?";
    }

    return `"Are you sure you want to delete ${this.props.stream.title}?`;
  };

  render() {
    return (
      <div>
        StreamDelete
        <Modal
          title="Delete Stream"
          onDismiss={this.onDismiss}
          content={this.renderContent()}
          actions={this.actions()}
        />
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    stream: state.stream[props.match.params.id],
  };
};

export default connect(mapStateToProps, { fetchStream, deleteStream })(
  StreamDelete
);
