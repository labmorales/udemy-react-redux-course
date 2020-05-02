import React, { Component } from 'react'
import SongList from '../components/SongList'

export class App extends Component {
    render() {
        return (
            <div className="ui grid">
                <div className="row">
                    <div className="eight wide column">
                        <SongList />
                    </div>
                </div>
            </div>
        )
    }
}

export default App
