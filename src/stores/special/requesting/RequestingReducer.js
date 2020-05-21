export default class RequestingReducer {
    static initialState = {};

    static reducer(state = RequestingReducer.initialState, action) {
        const isRequestType = action.type.includes('REQUEST_');
        if (isRequestType === false) {
            return state;
        }
        const requestName = action.type.replace('_FINISHED', '');
        const isFinishedRequestType = action.type.includes('_FINISHED');
        return {
            ...state,
            [requestName]: isFinishedRequestType === false,
        };
    }
}