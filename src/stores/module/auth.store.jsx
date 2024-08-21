import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

const initialState = {
    token: localStorage.getItem('token') || '',
    user: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : false
}

const authStore = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setToken(state, action) {
            state.token = action.payload;
            localStorage.setItem('token', state.token)
        },
        setUser(state, action) {
            state.user = action.payload;
            localStorage.setItem('user', JSON.stringify(state.user))
        }
    }
})

export const { setToken, setUser } = authStore.actions;

export const useStoreAuth = () => useSelector(state => state.authStore)

export default authStore.reducer;