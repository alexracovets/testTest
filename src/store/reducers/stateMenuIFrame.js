import { createSlice } from '@reduxjs/toolkit';

const stateMenuIFrame = createSlice({
    name: 'stateMenuIFrame',
    initialState: {
        link: null,
        status: false
    },
    reducers: {
        setLink: (state, action) => {
            state.link = action.payload;
            state.status = true;
        },
        setFrameStatus: (state, action) => {
            state.status = action.payload;
        }
    }
});

export const { setLink, setFrameStatus } = stateMenuIFrame.actions;

export default stateMenuIFrame.reducer;