import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PhotoControlItem from './ListChangerComponents/PhotoControlItem';
import AddNewPhotoInput from './ListChangerComponents/AddNewPhotoInput';


//компонент, отвечающий за страничку настроек
class ListChanger extends Component {

    generateAllPhotoElements() {

        const arrayOfUserAvatars = this.props.arrayOfUserAvatars;

        let arrayOfPhotoElements = [];

        for (let i = 0; i < arrayOfUserAvatars.length; i++) {
            arrayOfPhotoElements.push(<PhotoControlItem key={i} photoElementNumber={i} />);
        };

        return arrayOfPhotoElements;
    }

    render() {
        return (
            <div className="list-changer-div">
                <Link to=""><button className="go-back-button"><i className="fa fa-home"/>   Go back</button></Link>
                <AddNewPhotoInput />
                {this.generateAllPhotoElements()}
            </div>

        );
    }
}


/////////////// store //////////////

const getDataFromStore = store => ({
    arrayOfUserAvatars: store.arrayOfUserAvatars,
});

export default connect(getDataFromStore, null)(ListChanger);