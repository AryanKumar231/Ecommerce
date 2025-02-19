import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    user: null,
    token: localStorage.getItem("token") || null,
    isAuthenticated: !!localStorage.getItem("token")
}

export const authSlice = createSlice({
    
    name: 'auth',
    initialState,
    reducers: {
        setCredenticals: (state, action) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isAuthenticated = true;
            localStorage.setItem("token", action.payload.token);
        },
        logout: (state) => {
            state.user = null;
            state.token = null;
            state.isAuthenticated = false;
            localStorage.removeItem("token");
        }
    },
})

// Action creators are generated for each case reducer function
export const { setCredenticals, logout } = authSlice.actions

export default authSlice.reducer