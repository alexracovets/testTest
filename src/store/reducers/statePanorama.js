import { createSlice } from '@reduxjs/toolkit';

const statePanorama = createSlice({
    name: 'statePanorama',
    initialState: {
        isActive: false,
    },
    reducers: {
        setActiveStatus: (state, action) => {
            state.isActive = action.payload;
        }
    }
});

export const { setActiveStatus } = statePanorama.actions;

export default statePanorama.reducer;