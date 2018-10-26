import React, { Component } from 'react';
import { connect } from 'react-redux';
import SettingsController from './ViewModuleComponents/SettingsController';
import PhotoElement from './ViewModuleComponents/PhotoElement';
import { fetchPhotoUrls } from "./Redux/Actions";
import { Link } from 'react-router-dom';


//компонент, отвечающий за страничку с аватарками
class ViewModule extends Component {

    componentDidMount() {
        this.props.fetchPhotoUrls();
    };


    generateAllPhotoes() {

        let arrayOfUserAvatars = this.props.arrayOfUserAvatars,
            arrayOfPhotoElements = [];

        for (let i = 0; i < arrayOfUserAvatars.length; i++) {
            arrayOfPhotoElements.push(<PhotoElement key={i} url={arrayOfUserAvatars[i].url} />)
        };

        return arrayOfPhotoElements;
    }


    render() {
        return (
            <div className="view-module-div">
                <div className="view-module-controls-div">
                    <SettingsController />
                    <Link to="photolist"><button>Edit avatars list</button></Link>
                </div>
                <div className="view-module-photoes-div">
                    {this.generateAllPhotoes()}
                </div>
            </div>
        );
    }
}


/////////////// store //////////////

const getDataFromStore = store => ({
    arrayOfUserAvatars: store.arrayOfUserAvatars,
});

const setDataToStore = dispatch => ({
    fetchPhotoUrls: () => dispatch(fetchPhotoUrls()),
});

export default connect(getDataFromStore, setDataToStore)(ViewModule);