import { createSlice } from '@reduxjs/toolkit';

const stateCamera = createSlice({
    name: 'camera',
    initialState: {
        default: {
            position: [-70.863, 63.667, 128.967],
            target: [10, 0, 0],
            minDistance: 120
        },
        position: [-62.15, 76.75, 170],
        target: [0, 0, 0],
    },
    reducers: {
        setTarget: (state, action) => {
            const { target, position } = action.payload;
            state.target = target;
            state.position = position;
            state.isAnimation = true;
        },
        setDefault: (state) => {
            state.position = state.default.position;
            state.target = state.default.target;
            state.isAnimation = true;
        },
        setPosition: (state, action) => {
            const position = action.payload;
            state.position = position;
            state.isAnimation = true;
        },
    }
});

export const { setTarget, setDefault } = stateCamera.actions;

export default stateCamera.reducer;