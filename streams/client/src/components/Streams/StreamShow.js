import React, { Component } from "react";
import { fetchStream } from "../../actions";
import { connect } from "react-redux";
import flvjs from "flv.js";

export class StreamShow extends Component {
  constructor(props) {
    super(props);

    this.videoRef = React.createRef();
  }

  componentDidMount = () => {
    const { id } = this.props.match.params;
    this.props.fetchStream(id);

    this.buildPlayer();
  };

  componentWillUnmount() {
    if (this.player) {
      this.player.destroy();
    }
  }

  componentDidUpdate() {
    this.buildPlayer();
  }

  buildPlayer = () => {
    if (this.player || !this.props.stream) {
      return;
    }

    const { id } = this.props.match.params;

    this.flvPlayer = flvjs.createPlayer({
      type: "flv",
      url: `http://localhost:8000/live/${id}.flv`,
    });
    this.flvPlayer.attachMediaElement(this.videoRef.current);
    this.flvPlayer.load();
  };

  render() {
    if (!this.props.stream) {
      return <div>Loading...</div>;
    }

    const { description, title } = this.props.stream;

    return (
      <div>
        <video ref={this.videoRef} style={{ width: "100%" }} controls></video>
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
