export function fetchCardIfNeeded() {
    return (dispatch, getState) => {
        console.log(getState)
        console.log(getState())
        let state = getState().page;
        console.log(state)
        if (state.cardData === undefined || state.cardData.slug !== state.cardSlug) {
            console.log("HERE")
            return dispatch(fetchCard());
        }
    };
}

function fetchCard() {
    return (dispatch, getState) => {
        // Сперва даём состоянию понять, что мы ждём карточку.
        // Наши компоненты после этого могут, например,
        // включить характерную анимацию загрузки.
        console.log('fetchCard')
        dispatch(startFetchingCard());
        // Формируем запрос к API.
        // let url = apiPath() + "/card/" + getState().page.cardSlug;
        let url = "http://0.0.0.0:40001/api/v1" + "/card/" + getState().page.cardSlug;
        console.log(url)
        // Фетчим, обрабатываем, даём состоянию понять, что
        // данные карточки уже доступны. Здесь, конечно, хорошо
        // бы добавить обработку ошибок.
        return fetch(url)
            .then(response => response.json())
            .then(json => dispatch(finishFetchingCard(json)));
    };
    // Кстати, именно redux-thunk позволяет нам
    // использовать в качестве действий лямбды.
}

function startFetchingCard() {
    return {
        type: 'START_FETCHING_CARD'
    };
}

function finishFetchingCard(json) {
    return {
        type: 'FINISH_FETCHING_CARD',
        cardData: json
    };
}

function apiPath() {
    // Эта функция здесь неспроста. Когда мы сделаем server-side
    // rendering, путь к API будет зависеть от окружения - из
    // контейнера с фронтендом надо будет стучать не в localhost,
    // а в backend.
    return "http://localhost:40001/api/v1";
}