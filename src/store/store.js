import { configureStore } from '@reduxjs/toolkit';

import stateMenuReducer from './reducers/stateMenu';
import stateCameraReducer from './reducers/stateCamera';
import stateAnnotationsReducer from './reducers/stateAnnotations';
import statePanoramaReducer from './reducers/statePanorama';
import stateAnnotationsPopUpReducer from './reducers/stateAnnotationsPopUp';

const store = configureStore({
    reducer: {
        stateCamera: stateCameraReducer,
        stateMenu: stateMenuReducer,
        stateAnnotations: stateAnnotationsReducer,
        stateAnnotationsPopUp: stateAnnotationsPopUpReducer,
        statePanorama: statePanoramaReducer
    },
});

export default store;