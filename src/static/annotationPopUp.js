import { changeActiveStatus, setPopUpContent } from '../store/reducers/stateAnnotationsPopUp';

const annotationPopUp = (dispatch, status, content) => {
    dispatch(changeActiveStatus(status));
    status && dispatch(setPopUpContent(content));
}

export default annotationPopUp;