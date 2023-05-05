import {createSlice} from "@reduxjs/toolkit";
import {TOKEN, USER_LOGIN} from "../../utils/settings/config";

let user = {}
if(localStorage.getItem(USER_LOGIN)){
    user = JSON.parse(localStorage.getItem(USER_LOGIN));
}

const initialState = {
    userLogin: user,
    info: {}
}

export const AccountSlide =  createSlice({
    name: 'accountSlide',
    initialState,
    reducers: {
        setInfoLogin: (state, action) => {
            const infoUsers = action.payload;
            localStorage.setItem(USER_LOGIN, JSON.stringify(infoUsers));
            localStorage.setItem(TOKEN, infoUsers.accessToken);
            state.userLogin = action.payload
        },
        setInfoAccount: (state, action) => {
            state.info = action.payload
        }
    }
})

export const { setInfoLogin, setInfoAccount} = AccountSlide.actions;

export default AccountSlide.reducer;