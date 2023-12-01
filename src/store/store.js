import { configureStore } from '@reduxjs/toolkit';

import stateMenuReducer from './reducers/stateMenu.js';
import stateAnnotationsReducer from './reducers/stateAnnotations.js';
import stateAnnotationsPopUpReducer from './reducers/stateAnnotationsPopUp.js';

const store = configureStore({
    reducer: {
        stateMenu: stateMenuReducer,
        stateAnnotations: stateAnnotationsReducer,
        stateAnnotationsPopUp: stateAnnotationsPopUpReducer
    },
});

export default store;