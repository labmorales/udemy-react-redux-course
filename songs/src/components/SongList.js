import React, { Component } from "react";
import { connect } from "react-redux";

class SongList extends Component {
  renderListOfSongs() {
    return this.props.songs.map((song) => {
      return (
        <div className="item" key={song.title}>
          <div className="right floated content">
            <div className="ui button">Select</div>
          </div>
          <p className="content">
              {song.title}
          </p>
        </div>
      );
    });
  }

  render() {
    return (
      <div className="ui middle aligned divided list">
        {this.renderListOfSongs()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { songs: state.songs };
};

export default connect(mapStateToProps)(SongList);
