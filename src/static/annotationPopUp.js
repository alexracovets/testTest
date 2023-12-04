import { changeActiveStatus, setPopUpContent } from '../store/reducers/stateAnnotationsPopUp';
import { setTarget, setDefault } from '../store/reducers/stateCamera';

const annotationPopUp = (dispatch, status, content, heightAnnotation) => {
    dispatch(changeActiveStatus(status));
    if (status) {
        dispatch(setTarget({ target: [content.position[0], content.position[1] + heightAnnotation, content.position[2]], position: content.cameraPosition }));
        dispatch(setPopUpContent(content.id));
    } else {
        dispatch(setDefault());
    }
}

export default annotationPopUp;