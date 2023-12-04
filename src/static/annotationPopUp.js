import { changeActiveStatus, setPopUpContent } from '../store/reducers/stateAnnotationsPopUp';
import { setTarget } from '../store/reducers/stateCamera';

const annotationPopUp = (dispatch, status, content, heightAnnotation) => {
    dispatch(changeActiveStatus(status));
    status && dispatch(setTarget([content.position[0], content.position[1] + heightAnnotation, content.position[2]], content.cameraPosition));
    status && dispatch(setPopUpContent(content.id));
}

export default annotationPopUp;