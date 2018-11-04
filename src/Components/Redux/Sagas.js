import { call, put, takeLatest, select } from 'redux-saga/effects';
import { c } from './Actions';
import { getPhotoesUrls } from '../ServerRequest/GetPhotoes';


export function* watchFetchingPhotoUrls() {
    yield takeLatest(c.FETCH_PHOTO_URLS, fetchPhotoUrls);
};

//основная идея в том, чтобы не нагружать сервер и если у аватарки уже известен url, то не нужно слать запрос повторно
//можно было б сохранить в localStorage вообще, но это уже совсем другая история
function* fetchPhotoUrls() {
    try {

        const arrayOfUserAvatars = yield select(state => [...state.arrayOfUserAvatars]);

        for (let userAvatar of arrayOfUserAvatars) {
            if (!userAvatar.url) {
                userAvatar.url = (yield call(getPhotoesUrls, userAvatar.id)).url;
            }
        };

        yield put({ type: c.SET_ARRAY_OF_USER_AVATARS, arrayOfUserAvatars: arrayOfUserAvatars });

    } catch (error) {
        yield console.log("Error on getting photoes data", error);
    }
}
