import { changeActiveStatus } from '../store/reducers/stateAnnotationsPopUp';

const annotationPopUp = (dispatch, status) => {
    dispatch(changeActiveStatus(status));
}

export default annotationPopUp;