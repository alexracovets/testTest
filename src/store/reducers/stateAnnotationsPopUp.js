import { createSlice } from '@reduxjs/toolkit';

const stateAnnotationsPopUp = createSlice({
    name: 'stateAnnotationsPopUp',
    initialState: {
        content: "1",
        isActive: false,
        isPanoramMask: false
    },
    reducers: {
        changeActiveStatus: (state, action) => {
            state.isActive = action.payload;
        },
        setPopUpContent: (state, action) => {
            state.content = action.payload;
        },
        setPanoramMask: (state, action) => {
            state.isPanoramMask = action.payload;
        }
    }
});

export const { changeActiveStatus, setPopUpContent, setPanoramMask } = stateAnnotationsPopUp.actions;

export default stateAnnotationsPopUp.reducer;