import HttpErrorResponseModel from '../models/HttpErrorResponseModel';
import FirebaseUtility from './FirebaseUtility';

export default class EffectUtility {

    static async _getDocumentList(ref) {
        const response = await FirebaseUtility.getPaginatedList(ref);
        if (response instanceof HttpErrorResponseModel) {
            return response;
        }
        return response;
    }

    static async _getSingleDocument(ref) {
        const response = await FirebaseUtility._getSingleDocument(ref);
        if (response instanceof HttpErrorResponseModel) {
            return response;
        }
        return response;
    }

    static async _pushObject(ref , object ) {
        const response = await FirebaseUtility._pushObject(ref , object);
        if (response instanceof HttpErrorResponseModel) {
            return response;
        }
        return response;
    }

    static async _pushThroughFirebaseFunction(functionName , object ) {
        const response = await FirebaseUtility.pushThroughFirebaseFunction(functionName , object);
        if (response instanceof HttpErrorResponseModel) {
            return response;
        }
        return response;
    }

    static async _updateObject(ref , object ) {
        const response = await FirebaseUtility._updateObject(ref , object);
        if (response instanceof HttpErrorResponseModel) {
            return response;
        }
        return response;
    }

    static async _deleteObject(ref  ) {
        const response = await FirebaseUtility._deleteObject(ref);
        if (response instanceof HttpErrorResponseModel) {
            return response;
        }
        return response;
    }

    static _restModelCreator(Model, response) {
        if (response instanceof HttpErrorResponseModel) {
            return response;
        }
        const temp = !Array.isArray(response.data) ? new Model(response.data) : response.data.map((json) => new Model(json));
        return temp
    }
}