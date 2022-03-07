// Code YouTubeDebugger Component Here
import React from 'react';

class YouTubeDebugger extends React.Component {

    constructor() {
        super()
        
        this.state = {
            errors: [],
            user: null,
            settings: {
                bitrate: 8,
                video: {
                resolution: '1080p'
                }
            }
        }
    }

    handleClickBirate = () => {
        this.setState({
            settings: {
                ...this.state.settings,
                bitrate : 12,
            }
        })
    }


    handleClickResolution = () => {
        this.setState({
            settings: {
                ...this.state.settings,     
                video: {
                    ...this.state.video,
                    resolution: '720p'
                }
            }
        })
    }

    render() {
         return(
             <div>
                <button className = 'bitrate' onClick = {this.handleClickBirate}> bitrate </button>
                <button className = 'resolution' onClick = {this.handleClickResolution}> resolution </button>
            </div>
        )
    }
}

export default YouTubeDebugger
