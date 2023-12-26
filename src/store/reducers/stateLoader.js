import { createSlice } from '@reduxjs/toolkit';

const stateLoader = createSlice({
    name: 'stateLoader',
    initialState: {
        isActive: false
    },
    reducers: {
        setLoaderStatus: (state, action) => {
            state.isActive = action.payload;
        }
    }
});

export const { setLoaderStatus } = stateLoader.actions;

export default stateLoader.reducer;