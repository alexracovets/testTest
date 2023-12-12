import { createSlice } from '@reduxjs/toolkit';

const statePanorama = createSlice({
    name: 'statePanorama',
    initialState: {
        isActive: false,
        isLoad: false,
        panoramCurrent: []
    },
    reducers: {
        setActiveStatus: (state, action) => {
            state.isActive = action.payload;
        },
        setPanoram: (state, action) => {
            state.panoramCurrent = action.payload;
        },
        setIsLoad: (state, action) => {
            state.isLoad = action.payload;
        }
    }
});

export const { setActiveStatus, setPanoram, setIsLoad } = statePanorama.actions;

export default statePanorama.reducer;