import { createSlice } from '@reduxjs/toolkit';

const statePanorama = createSlice({
    name: 'statePanorama',
    initialState: {
        isActive: false,
        isLoad: false,
        cameraTarget: [0, 100, 0],
        cameraDistance: 0.1,
        cameraPosition: [0.097, 99.987, 0.017],
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
        },
        setCameraPosition: (state, action) => {
            state.cameraPosition = action.payload;
        },
    }
});

export const { setActiveStatus, setPanoram, setIsLoad, setCameraPosition } = statePanorama.actions;

export default statePanorama.reducer;