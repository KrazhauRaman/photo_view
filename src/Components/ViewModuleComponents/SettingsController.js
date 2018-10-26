import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setPhotoSize, setPhotoBorderRadius } from "../Redux/Actions";


//компонент, отвечающий за настройки аватарок (размер и радиус границы)
class SettingsController extends Component {

    render() {
        return (
            <div className="setting-controller-div">
                <input type="range" min="80" max={(window.innerWidth < 400) ? window.innerWidth : 400} step="1"
                    value={this.props.photoSize} onChange={el => this.props.setPhotoSize(el.currentTarget.value)} />
                <label htmlFor="">Size: {this.props.photoSize}</label>
                <input type="range" min="0" max="50" step="1"
                    value={this.props.photoBorderRadius} onChange={el => this.props.setPhotoBorderRadius(el.currentTarget.value)} />
                <label htmlFor="">Radius: {this.props.photoBorderRadius}</label>
            </div>
        );
    }
}


/////////////// store //////////////

const getDataFromStore = store => ({
    photoSize: store.photoSize,
    photoBorderRadius: store.photoBorderRadius,
});

const setDataToStore = dispatch => ({
    setPhotoSize: newValue => dispatch(setPhotoSize(newValue)),
    setPhotoBorderRadius: newValue => dispatch(setPhotoBorderRadius(newValue))
});

export default connect(getDataFromStore, setDataToStore)(SettingsController);