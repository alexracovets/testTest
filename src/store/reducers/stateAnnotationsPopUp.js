import { createSlice } from '@reduxjs/toolkit';

const stateAnnotationsPopUp = createSlice({
    name: 'stateAnnotationsPopUp',
    initialState: {
        content: "1",
        isActive: false,
    },
    reducers: {
        changeActiveStatus: (state, action) => {
            state.isActive = action.payload;
        },
        setPopUpContent: (state, action) => {
            state.content = action.payload;
        }
    }
});

export const { changeActiveStatus, setPopUpContent } = stateAnnotationsPopUp.actions;

export default stateAnnotationsPopUp.reducer;