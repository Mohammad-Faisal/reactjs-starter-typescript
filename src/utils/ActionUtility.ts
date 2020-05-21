import HttpErrorResponseModel from '../models/HttpErrorResponseModel';

export default class ActionUtility {

    static async _createThunkEffect(dispatch, actionType, effect, ...args) {
        dispatch(ActionUtility._createAction(actionType));
        const model = await effect(actionType , ...args);
        const isError = model instanceof HttpErrorResponseModel;
        dispatch(ActionUtility._createAction(`${actionType}_FINISHED`, model, isError));
        return model;
    }

    static _createAction(type, payload? : any, error = false, meta?: any) {
        return { type, payload, error, meta };
    }

}