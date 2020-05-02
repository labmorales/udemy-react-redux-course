import React, { Component } from 'react'
import './VideoItem.css';

export default class VideoItem extends Component {    
    render() {
        const { video, onVideoSelect } = this.props;

        return (
            <div onClick={() => onVideoSelect(video)} className="item video-item">                
                <img alt={video.snippet.description} className="ui image" src={video.snippet.thumbnails.default.url} />
                <div className="content">
                    <div className="header">
                        {video.snippet.title}
                    </div>
                </div>
            </div>
        )
    }
}
