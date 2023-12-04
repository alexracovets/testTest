import { createSlice } from '@reduxjs/toolkit';

const stateCamera = createSlice({
    name: 'camera',
    initialState: {
        default: {
            position: [-102, 66, 114],
            target: [0, 0, 0]
        },
        position: [-102, 66, 114],
        target: [0, 0, 0],
        isAnimation: true,
    },
    reducers: {
        setTarget: (state, action) => {
            state.target = action.payload;
            state.isAnimation = true;
        },
        setActiveAnimation: (state, action) => {
            state.isAnimation = action.payload;
        },
        setDefault: (state) => {
            state.position = state.default.position;
            state.target = state.default.target; 
        }
    }
});

export const { setTarget, setActiveAnimation, setDefault } = stateCamera.actions;

export default stateCamera.reducer;