import { createSlice } from '@reduxjs/toolkit';

const stateAnnotationsPopUp = createSlice({
    name: 'stateAnnotationsPopUp',
    initialState: {
        content: {
            title: '',
            tag: '',
            location: '',
            image: ''
        },
        isActive: false,
    },
    reducers: {
        changeActiveStatus: (state, action) => {
            state.isActive = action.payload;
        },
        setPopUpContent: (state, action) => {
            
        }
    }
});

export const { changeActiveStatus, setPopUpContent } = stateAnnotationsPopUp.actions;

export default stateAnnotationsPopUp.reducer;