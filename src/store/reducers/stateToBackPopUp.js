import { createSlice } from '@reduxjs/toolkit';

const stateToBackPopUp = createSlice({
    name: 'stateToBackPopUp',
    initialState: {
        isActive: false,
        time: 45,
        showTime: 15
    },
    reducers: {
        setActiveStatus: (state, action) => {
            state.isActive = action.payload;
        },
    }
});

export const { setActiveStatus } = stateToBackPopUp.actions;

export default stateToBackPopUp.reducer;