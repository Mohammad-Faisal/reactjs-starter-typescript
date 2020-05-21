import ToastsAction from '../toasts/ToastsAction';

const errorToastMiddleware = () => (store) => (next) => (action) => {

    if (action.error) {
        const errorAction = action;
        next(ToastsAction.add(errorAction.payload.message,errorAction.payload.code , "error"));
    }
    next(action);
};

export default errorToastMiddleware;
