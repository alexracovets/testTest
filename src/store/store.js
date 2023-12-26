import { configureStore } from '@reduxjs/toolkit';

import stateMenuReducer from './reducers/stateMenu';
import stateCameraReducer from './reducers/stateCamera';
import statePanoramaReducer from './reducers/statePanorama';
import stateAnnotationsReducer from './reducers/stateAnnotations';
import stateToBackPopUpReducer from './reducers/stateToBackPopUp';
import stateAnnotationsPopUpReducer from './reducers/stateAnnotationsPopUp';

const store = configureStore({
    reducer: {
        stateMenu: stateMenuReducer,
        stateCamera: stateCameraReducer,
        statePanorama: statePanoramaReducer,
        stateAnnotations: stateAnnotationsReducer,
        stateToBackPopUp: stateToBackPopUpReducer,
        stateAnnotationsPopUp: stateAnnotationsPopUpReducer
    },
});

export default store;