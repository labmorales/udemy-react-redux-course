import React, { Component } from "react";
import { fetchStream } from "../../actions";
import { connect } from "react-redux";

export class StreamShow extends Component {
  componentDidMount = () => {
    this.props.fetchStream(this.props.match.params.id);
  };

  render() {
    if (!this.props.stream) {
      return <div>Loading...</div>;
    }

    const { description, title } = this.props.stream;

    return (
      <div>
        <h1>{title}</h1>
        <h3>{description}</h3>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    stream: state.stream[ownProps.match.params.id],
  };
};

export default connect(mapStateToProps, { fetchStream })(StreamShow);
