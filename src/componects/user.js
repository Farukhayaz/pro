import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    user: {},
    token: '',
    isLoggedIn: true,
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUserAction: (state, action) => {
            state.user = action.payload;
        },
        resetUserAction: (state, action) => {
            state.user = {};
        },
        setLoggedInAction: (state, action) => {
            state.isLoggedIn = action.payload;
        },
        setTokenAction: (state, action) => {
            state.token = action.payload;
        },
    },
});

// Action creators are generated for each case reducer function
export const {
    setUserAction,
    resetUserAction,
    setLoggedInAction,
    setTokenAction,
} = userSlice.actions;

export default userSlice.reducer;
