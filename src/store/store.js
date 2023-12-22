import { configureStore } from '@reduxjs/toolkit';

import stateMenuReducer from './reducers/stateMenu';
import stateCameraReducer from './reducers/stateCamera';
import statePanoramaReducer from './reducers/statePanorama';
import stateAnnotationsReducer from './reducers/stateAnnotations';
import stateAnnotationsPopUpReducer from './reducers/stateAnnotationsPopUp';

const store = configureStore({
    reducer: {
        stateMenu: stateMenuReducer,
        stateCamera: stateCameraReducer,
        statePanorama: statePanoramaReducer,
        stateAnnotations: stateAnnotationsReducer,
        stateAnnotationsPopUp: stateAnnotationsPopUpReducer
    },
});

export default store;