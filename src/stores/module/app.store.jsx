import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

const initialState = {
    errors: {},
    darkMode: localStorage.getItem('darkMode') ? localStorage.getItem('darkMode') === 'true' : window.matchMedia("(prefers-color-scheme: dark)").matches,
}

const appStore = createSlice({
    name: 'app',
    initialState,
    reducers: {
        setErrors (state, action) {
            state.errors = action.payload;
        },
        setDarkMode (state, action) {
            state.darkMode = action.payload;
            localStorage.setItem('darkMode', state.darkMode)
        }
    }
})

export const {setErrors, setDarkMode} = appStore.actions;

export const useStoreApp = () => useSelector(state => state.appStore)

export default appStore.reducer;