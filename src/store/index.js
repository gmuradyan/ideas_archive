import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import thunk from 'redux-thunk';

import usersSlice from '../redux/usersSlice';

const reducer = combineReducers({
    users: usersSlice.reducer,
});

const store = configureStore({ reducer },
    applyMiddleware(thunk)
);

 export default store;