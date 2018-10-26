//типы забиты в константы, чтобы труднее было ошибиться при вводе 
export const c = {
    FETCH_PHOTO_URLS: "FETCH_PHOTO_URLS",
    SET_PHOTO_SIZE: "SET_PHOTO_SIZE",
    SET_PHOTO_BORDER_RADIUS: "SET_PHOTO_BORDER_RADIUS",
    UPDATE_NEW_INPUT_ID: "UPDATE_NEW_INPUT_ID",
    SET_ARRAY_OF_USER_AVATARS: "SET_ARRAY_OF_USER_AVATARS",    
};


export const setArrayOfUserAvatars = (newArr) => {
    return {
        type: c.SET_ARRAY_OF_USER_AVATARS,
        arrayOfUserAvatars: newArr,
    };
};

export const setPhotoSize = (newValue) => {
    return {
        type: c.SET_PHOTO_SIZE,
        photoSize: newValue,
    };
};

export const setPhotoBorderRadius = (newValue) => {
    return {
        type: c.SET_PHOTO_BORDER_RADIUS,
        photoBorderRadius: newValue,
    };
};

export const fetchPhotoUrls = () => {
    return {
        type: c.FETCH_PHOTO_URLS,
    };
};

export const updateNewIdInput = (newValue) => {
    return {
        type: c.UPDATE_NEW_INPUT_ID,
        newPhotoInput: newValue,
    };
};