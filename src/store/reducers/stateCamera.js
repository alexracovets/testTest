import { createSlice } from '@reduxjs/toolkit';

const stateCamera = createSlice({
    name: 'camera',
    initialState: {
        default: {
            position: [-62.15, 76.75, 170],
            target: [10, 0, 0],
            minDistance: 120
        },
        position: [-62.15, 76.75, 170],
        target: [0, 0, 0],
        isAnimation: false,
    },
    reducers: {
        setTarget: (state, action) => {
            const { target, position } = action.payload;
            state.target = target;
            state.position = position;
            state.isAnimation = true;
        },
        setActiveAnimation: (state, action) => {
            state.isAnimation = action.payload;
        },
        setDefault: (state) => {
            state.position = state.default.position;
            state.target = state.default.target;
            state.isAnimation = true;
        }
    }
});

export const { setTarget, setActiveAnimation, setDefault } = stateCamera.actions;

export default stateCamera.reducer;