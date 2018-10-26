import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateNewIdInput, setArrayOfUserAvatars, fetchPhotoUrls } from "../Redux/Actions";


//компонент, отвечающий за ввод и создание новых юзеров
class AddNewPhotoInput extends Component {


    onChangeHandler(event) {

        const re = /^[0-9\b]+$/; //regExp со значениями 0-9, нужно чтоб проверять вводимые юзером данные (Id - положительные целые числа). 

        if (re.test(event.currentTarget.value) && event.currentTarget.value !== "") {
            this.props.updateNewIdInput(event.currentTarget.value);
        };
    }


    onKeyPressHandler(event) {

        if (event.key === 'Enter' && this.props.newPhotoInput !== "") {
            this.setNewArray();
        };
    }


    onClickHandler() {

        if (this.props.newPhotoInput !== "") {
            this.setNewArray();
        };
    }
    

    //новые картинки закидываются в начало списка, после чего по списку пробегается сага (в редаксе) и докидывает отсутствующие urlы
    setNewArray() {

        let newIds = [...this.props.arrayOfUserAvatars];

        newIds.reverse();
        newIds.push({ id: +this.props.newPhotoInput, url: "" });
        newIds.reverse();

        this.props.setArrayOfUserAvatars(newIds);
        this.props.fetchPhotoUrls();
        this.props.updateNewIdInput("");
    }


    render() {
        return (
            <div className="new-photo-input">
                <input value={this.props.newPhotoInput} placeholder="Enter new ID" type="number" autoFocus
                    onKeyPress={event => this.onKeyPressHandler(event)} onChange={(event) => this.onChangeHandler(event)} />
                <button onClick={this.onClickHandler.bind(this)}>Enter</button>
            </div>
        );
    }
}


/////////////// store //////////////

const getDataFromStore = store => ({
    newPhotoInput: store.newPhotoInput,
    photoIds: store.photoIds,
    arrayOfUserAvatars: store.arrayOfUserAvatars,
});

const setDataToStore = dispatch => ({
    updateNewIdInput: newValue => dispatch(updateNewIdInput(newValue)),
    setArrayOfUserAvatars: newArr => dispatch(setArrayOfUserAvatars(newArr)),
    fetchPhotoUrls: () => dispatch(fetchPhotoUrls()),
});

export default connect(getDataFromStore, setDataToStore)(AddNewPhotoInput);