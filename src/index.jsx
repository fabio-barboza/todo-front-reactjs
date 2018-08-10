'use strict';


import React from 'react';
import ReactDOM from 'react-dom';

import {applyMiddleware, createStore} from 'redux';
import {Provider} from 'react-redux';

/**Middlewares**/
import promise from 'redux-promise'; //Resolve as promessas antes de retornar para o Reducer
import multi from 'redux-multi'; //Poder retornar de um array, varias action.
import thunk from 'redux-thunk'; //Permite escrever action creators retornarem uma função como parâmetro o dispatch ao invés de uma ação. Pode ser usado para atrasar o dispatch de uma ação.
/** **/


import App from './main/App';
import reducers from './main/reducers';

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

//const store = createStore(reducers, devTools);
const store = applyMiddleware(thunk, multi, promise)(createStore)(reducers, devTools);

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>, document.getElementById('app'));