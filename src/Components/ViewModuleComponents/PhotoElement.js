import React, { Component } from 'react';
import { connect } from 'react-redux';


//компонент, отвечающий за аватарку
class PhotoElement extends Component {

    render() {
        return (
            <div className="photo-element-div" style={{height:`${this.props.photoSize}px`, width:`${this.props.photoSize}px`}}>
                <img src={this.props.url} alt="Some avatar"
                    height={this.props.photoSize} width={this.props.photoSize}
                    style={{ borderRadius: `${this.props.photoBorderRadius}%` }} />
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