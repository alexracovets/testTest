import { configureStore } from '@reduxjs/toolkit';

import stateMenuReducer from './reducers/stateMenu';
import stateCameraReducer from './reducers/stateCamera';
import stateLoaderReducer from './reducers/stateLoader';
import statePanoramaReducer from './reducers/statePanorama';
import stateMenuIFrameReducer from './reducers/stateMenuIFrame';
import stateLoaderMainReducer from './reducers/stateLoaderMain';
import stateAnnotationsReducer from './reducers/stateAnnotations';
import stateToBackPopUpReducer from './reducers/stateToBackPopUp';
import stateAnnotationsPopUpReducer from './reducers/stateAnnotationsPopUp';

const store = configureStore({
    reducer: {
        stateMenu: stateMenuReducer,
        stateCamera: stateCameraReducer,
        stateLoader: stateLoaderReducer,
        statePanorama: statePanoramaReducer,
        stateLoaderMain: stateLoaderMainReducer,
        stateMenuIFrame: stateMenuIFrameReducer,
        stateAnnotations: stateAnnotationsReducer,
        stateToBackPopUp: stateToBackPopUpReducer,
        stateAnnotationsPopUp: stateAnnotationsPopUpReducer
    },
});

export default store;