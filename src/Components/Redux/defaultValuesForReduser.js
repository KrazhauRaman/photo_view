//дефолтные значения в редюсере
export const defaultValuesForReducer = {
    photoSize: ((window.innerWidth < 400) ? window.innerWidth : 400),
    photoBorderRadius: 0,
    arrayOfUserAvatars: [{ id: 2, url: "" }, { id: 7, url: "" }, { id: 1, url: "" }, { id: 8, url: "" }, { id: 3, url: "" }, { id: 9, url: "" }],
    newPhotoInput: "",
}