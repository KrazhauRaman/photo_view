import { c } from './Actions';
import { defaultValuesForReducer } from './defaultValuesForReduser'

export function photoReducer(oldState, action) {

    switch (action.type) {

        case c.SET_PHOTO_SIZE: {
            const updatedState = { ...oldState, photoSize: action.photoSize };
            return updatedState;
        }

        case c.SET_PHOTO_BORDER_RADIUS: {
            const updatedState = { ...oldState, photoBorderRadius: action.photoBorderRadius };
            return updatedState;
        }

        case c.UPDATE_NEW_INPUT_ID: {
            const updatedState = { ...oldState, newPhotoInput: action.newPhotoInput };
            return updatedState;
        }

        case c.SET_ARRAY_OF_USER_AVATARS: {
            const updatedState = { ...oldState, arrayOfUserAvatars: action.arrayOfUserAvatars };
            return updatedState;
        }

        default:
            if (!!oldState) {
                return oldState;
            };
            return { ...defaultValuesForReducer };
    }
};