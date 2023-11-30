import { configureStore } from '@reduxjs/toolkit';
import stateMenuReducer from './reducers/stateMenu.js';
import stateAnnotationsReducer from './reducers/stateAnnotations.js';

const store = configureStore({
    reducer: {
        stateMenu: stateMenuReducer,
        stateAnnotations: stateAnnotationsReducer,
    },
});

export default store;