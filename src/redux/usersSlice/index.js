import { createSlice } from '@reduxjs/toolkit'
import api from '../../api/api'

// Slice

const usersSlice = createSlice({
    name: 'users',
    initialState: {
        users: [],
        loading: false,
    },
    reducers: {
        fetchStarted: state => {
            state.loading = true;
        },
        fetchFailed: (state) => {
            state.loading = false;
        },

        getUsersSuccess: (state, action) => {
            console.log("action.payload", action);
            state.users = action.payload;
            state.loading = false;
        },
    },
});

//Actions

const {
    fetchStarted,
    fetchFailed,
    getUsersSuccess
} = usersSlice.actions

export const getUsers = () => async dispatch => {
    try {
        dispatch(fetchStarted());

        const data = await api.get("/users");

        dispatch(getUsersSuccess(data.data));

        return data.data;
    } catch (e) {
      dispatch(fetchFailed(e.message));

      console.log("getCitizen error", e);
      throw e;
    }
};

export default usersSlice;