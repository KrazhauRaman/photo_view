export function getPhotoesUrls(id) {

    //тут не особо понятно какие параметры были заданы на бэке, поэтмоу закинул околостандартные + преобразование в объект сразу тут делается, чтобы потом не потерять
    return fetch(
        `https://picurl.herokuapp.com/users/${id}`
        ,
        {
            method: "GET",
            headers: {
                "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
                "accept": "application/json",
            },
            mode: "cors",
        })
        .then(result => result.json());
};
