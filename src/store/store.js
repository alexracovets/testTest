import { configureStore } from '@reduxjs/toolkit';

import stateMenuReducer from './reducers/stateMenu.js';
import stateCameraReducer from './reducers/stateCamera.js';
import stateAnnotationsReducer from './reducers/stateAnnotations.js';
import stateAnnotationsPopUpReducer from './reducers/stateAnnotationsPopUp.js';

const store = configureStore({
    reducer: {
        stateCamera: stateCameraReducer,
        stateMenu: stateMenuReducer,
        stateAnnotations: stateAnnotationsReducer,
        stateAnnotationsPopUp: stateAnnotationsPopUpReducer
    },
});

export default store;