import React, { Component } from 'react'
import VideoItem from './VideoItem';

export default class VideosList extends Component {        

    renderVideoItems = () => {
        return this.props.videos.map((video) => {
            return (
                <VideoItem onVideoSelect={this.props.onVideoSelect} key={video.id.videoId} video={video} />
            );
        })
    }

    render() {
        return (
            <div className="ui divided list">
                {this.renderVideoItems()}
            </div>
        )
    }
}
