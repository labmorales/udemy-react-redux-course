import React, { Component } from "react";
import { connect } from "react-redux";
import { selectSong } from "../actions";

class SongList extends Component {
  renderListOfSongs() {
    return this.props.songs.map((song) => {
      return (
        <div className="item" key={song.title}>
          <div className="right floated content">
            <input
                onClick={() => this.props.selectSong(song)}
              type="button"
              className="ui button"
              value="Select"
            />
          </div>
          <p className="content">{song.title}</p>
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

export default connect(mapStateToProps, { selectSong })(SongList);
