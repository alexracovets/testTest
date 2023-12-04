import { createSlice } from '@reduxjs/toolkit';

const stateCamera = createSlice({
    name: 'camera',
    initialState: {
        position: [],
        target: [0, 1, 2],
        isAnimation: false
    },
    reducers: {
        setTarget: (state, action) => {
            state.target = action.payload;
        },
    }
});

export const { setTarget } = stateCamera.actions;

export default stateCamera.reducer;