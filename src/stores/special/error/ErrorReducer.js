import ErrorAction from './ErrorAction';


export default class ErrorReducer {
    static initialState = {};

    static reducer(state = ErrorReducer.initialState, action) {
        const { type, error, payload } = action;

        if (type === ErrorAction.REMOVE) {
            return Object.entries(state).reduce((newState, [key, value]) => {
                if (value.id !== payload) {
                    newState[key] = value;
                }
                return newState;
            }, {});
        }

 
        if (type === ErrorAction.CLEAR_ALL) {
            return ErrorReducer.initialState;
        }

        const isFinishedRequestType = type.includes('_FINISHED');
        const isStartRequestType = type.includes('REQUEST_') && !isFinishedRequestType;

        /*
         * If an action is started we want to remove any old errors because there is a new action has been re-dispatched.
         */
        if (isStartRequestType) {
            const { [`${type}_FINISHED`]: value, ...stateWithoutFinishedType } = state;
            return stateWithoutFinishedType;
        }

        const isError = isFinishedRequestType && Boolean(error);
        if (isError === false) {
            return state;
        }


        return {
            ...state,
            [type]: payload,
        };
    }
}