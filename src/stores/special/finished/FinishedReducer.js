export default class FinishedReducer {
    static initialState = {};

    static reducer(state = FinishedReducer.initialState, action) {
        const { type, error, payload } = action;
        const isFinishedType = action.type.includes('_FINISHED');
        const requestName = action.type.replace('_FINISHED', '');
        const isError = isFinishedType && Boolean(error);
        if(!isFinishedType) return state;
        if(isError) return state;

        if(isFinishedType) {
            return {
                ...state,
                [requestName]: Math.random(),
            };
        }

    }
}
