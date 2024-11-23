import { createSlice } from '@reduxjs/toolkit';
import Cookies from 'js-cookie';

const initialState = {
    isLoggedIn:!!Cookies.get('admin'),
    user: null,
}

const AuthSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action) => {
            state.isLoggedIn = true;
            state.user = action.payload.user;
            Cookies.set('admin', action.payload.user)
        },
        logout: (state) => {
            state.isLoggedIn = false;
            state.user = null;
            Cookies.remove('admin');
        }
    } 
});

export const { login, logout } = AuthSlice.actions;
export default AuthSlice.reducer;