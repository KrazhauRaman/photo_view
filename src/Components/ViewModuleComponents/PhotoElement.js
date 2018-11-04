import React, { Component } from 'react';
import { connect } from 'react-redux';


//компонент, отвечающий за аватарку
class PhotoElement extends Component {

    render() {
        console.log(this.props.url)
        return (
            <div className="photo-element-div" style={{ height: `${this.props.photoSize}px`, width: `${this.props.photoSize}px` }}>
                {(this.props.url) &&
                    <img src={this.props.url} alt="Some avatar"
                        height={this.props.photoSize} width={this.props.photoSize}
                        style={{ borderRadius: `${this.props.photoBorderRadius}%` }} />}
                {(!this.props.url) &&
                    <div className="photo-element-loading" style={{ borderRadius: `${this.props.photoBorderRadius}%` }} >
                        <div className="photo-element-loading-dot"></div>
                    </div>}
            </div>
        );
    }
}

/////////////// store //////////////

const getDataFromStore = store => ({
    photoSize: store.photoSize,
    photoBorderRadius: store.photoBorderRadius,
});

export default connect(getDataFromStore, null)(PhotoElement);