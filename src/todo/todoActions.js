import axios from 'axios';

const URL = 'http://localhost:3003/api/todos';

export const changeDescription = (event) => ({
    type: 'DESCRIPTION_CHANGED',
    newValue: event.target.value
});

/*
export const search = (description) => {
    const search = description ? `&description__regex=/${description}/` : '';
    const request = axios.get(`${URL}?sort=-createdAt${search}`);
    return {
        type: 'TODO_SEARCHED',
        payload: request
    }
};
*/

export const search = () => {
    return (dispatch, getState) => {
        const description = getState().todo.description
        const search = description ? `&description__regex=/${description}/` : '';
        axios.get(`${URL}?sort=-createdAt${search}`)
            .then(resp => dispatch({type: 'TODO_SEARCHED', payload: resp.data}));
    };
};

/*
export const add = (description) => {
    //const request = axios.post(URL, {description: description}); //Versão anterior ao ECMA Script 2015
    const request = axios.post(URL, {description});
    return [{type: 'TODO_ADDED', payload: request}, search()]
};
*/


export const add = (description) => {
    return dispatch => {
        axios.post(URL, {description})
            .then(() => dispatch(clear()))
            .then(() => dispatch(search()));
    }
};

export const markAsDone = (todo) => {
    return dispatch => {
        axios.put(`${URL}/${todo._id}`, {...todo, done: true})
            .then(() => dispatch(search()));
    }
};

export const markAsPending = (todo) => {
    return dispatch => {
        axios.put(`${URL}/${todo._id}`, {...todo, done: false})
            .then(() => dispatch(search()));
    }
};

export const remove = (todo) => {
    return dispatch => {
        axios.delete(`${URL}/${todo._id}`).then(() => dispatch(search()));
    }
};

export const clear = () => {
    return [{type: 'TODO_CLEAR'}, search()];
};