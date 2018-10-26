import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setArrayOfUserAvatars } from "../Redux/Actions";


//компонент, отвечающий за строку управления юзером (удаление, смена места)
class PhotoControlItem extends Component {


    deleteElement() {
        let newIds = [...this.props.arrayOfUserAvatars];
        newIds.splice(this.props.photoElementNumber, 1);
        this.props.setArrayOfUserAvatars(newIds);
    }


    moveUp() {
        let newIds = [...this.props.arrayOfUserAvatars];
        let tempPlace = newIds[this.props.photoElementNumber];
        newIds[this.props.photoElementNumber] = newIds[this.props.photoElementNumber - 1];
        newIds[this.props.photoElementNumber - 1] = tempPlace;
        this.props.setArrayOfUserAvatars(newIds);
    }


    moveDown() {
        let newIds = [...this.props.arrayOfUserAvatars];
        let tempPlace = newIds[this.props.photoElementNumber];
        newIds[this.props.photoElementNumber] = newIds[this.props.photoElementNumber + 1];
        newIds[this.props.photoElementNumber + 1] = tempPlace;
        this.props.setArrayOfUserAvatars(newIds);
    }


    render() {

        return (
            <div className="photo-control-item-div">
                <button className="photo-control-btn-up" onClick={this.moveUp.bind(this)} disabled={(this.props.photoElementNumber === 0)}>&#x2191; Up</button>
                <button className="photo-control-btn-down" onClick={this.moveDown.bind(this)} disabled={(this.props.photoElementNumber === (this.props.arrayOfUserAvatars.length - 1))}>&#x2193; Down</button>
                <div className="photo-control-span"><span>{this.props.arrayOfUserAvatars[this.props.photoElementNumber].id}</span></div>
                <button className="photo-control-btn-del" onClick={this.deleteElement.bind(this)}><i className="fa fa-trash" /> Delete</button>
            </div>
        );
    }
}


/////////////// store //////////////

const getDataFromStore = store => ({
    arrayOfUserAvatars: store.arrayOfUserAvatars,
});

const setDataToStore = dispatch => ({
    setArrayOfUserAvatars: newArr => dispatch(setArrayOfUserAvatars(newArr)),
});

export default connect(getDataFromStore, setDataToStore)(PhotoControlItem);