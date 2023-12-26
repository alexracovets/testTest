import { createSlice } from '@reduxjs/toolkit';

const stateLoaderMain = createSlice({
    name: 'stateLoaderMain',
    initialState: {
        isActive: false
    },
    reducers: {
        setLoaderMainStatus: (state, action) => {
            state.isActive = action.payload;
        }
    }
});

export const { setLoaderMainStatus } = stateLoaderMain.actions;

export default stateLoaderMain.reducer;