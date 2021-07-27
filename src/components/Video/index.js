import React, { PureComponent } from 'react'

export default class Video extends PureComponent {
    render() {
        return (
            <div className="video-container">
                <iframe style={{width:"100%",height:"843px",marginTop:"100px"}}
                    src={this.props.video}
                    frameBorder="0"
                    className="video-frame"
                    allowFullScreen
                />
            </div>
        )
    }
}
