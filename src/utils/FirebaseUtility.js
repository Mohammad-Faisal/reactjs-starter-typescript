import HttpErrorResponseModel from '../models/HttpErrorResponseModel';
import BaseResponse from '../models/BaseResponse';
import firebase from 'firebase';


export default class FirebaseUtility {


    static async getPaginatedList(ref) {
        const listData = []
        let listVisible = null;

        let isError = false;
        const errorResponse = new HttpErrorResponseModel();

        await ref.get().then(function (querySnapshot) {
            querySnapshot.forEach(function (doc) {
                listData.push(doc.data())

            });
            listVisible = querySnapshot.docs[querySnapshot.docs.length - 1];
        }).catch(function (error) {
            console.log(error.message);
            errorResponse.code = error.code;
            errorResponse.message = error.message;
            isError = true;
        });


        if (isError) return errorResponse;

        const response = new BaseResponse();
        response.data = listData;
        response.listVisible = listVisible;

        return response;
    }


    static async _getSingleDocument(ref) {
        var dataObject = {}
        var isError = false;
        var errorResponse = new HttpErrorResponseModel();

        await ref.get().then(function (doc) {    ///.
            if (doc.exists) dataObject = doc.data();
            else dataObject = null;
        }).catch(function (error) {
            errorResponse.code = error.code;
            errorResponse.message = error.message;
            isError = true;
        });

        if (isError) return errorResponse;

        return dataObject;

    };


    static async _updateObject(ref , dataObject) {
        let isError = false;
        let errorResponse = new HttpErrorResponseModel();
        let validResponse = new BaseResponse();
        await ref.set(dataObject, { merge: true }).then(function () {


        }).catch(function (error) {
            errorResponse.code = error.code;
            errorResponse.message = error.message;
            isError = true;
        });
        if (isError) return errorResponse;

        return validResponse;
    }


    static async _deleteObject(ref ) {
        var isError = false;
        var errorResponse = new HttpErrorResponseModel();
        var validResponse = new BaseResponse();
        await ref.delete().then(function () {

        }).catch(function (error) {
            errorResponse.code = error.code;
            errorResponse.message = error.message;
            isError = true;
        });
        if (isError) return errorResponse;

        return validResponse;
    }

    static async _pushObject(ref , dataObject) {
        var isError = false;
        var errorResponse = new HttpErrorResponseModel();
        var validResponse = new BaseResponse();
        await ref.set(dataObject).then(function () {
        }).catch(function (error) {
            errorResponse.code = error.code;
            errorResponse.message = error.message;
            isError = true;
        });
        if (isError) return errorResponse;
        return validResponse;
    }

    static async pushThroughFirebaseFunction  (functionName ,  dataObject) {
        var func = firebase.functions();
        var fun = func.httpsCallable(functionName);

        var isError = false;
        var errorResponse = new HttpErrorResponseModel();
        var validResponse = new BaseResponse();

        console.log("inside firebase function   " , dataObject);

        validResponse = await fun(dataObject).then( res => {

        }).catch(function (error) {
            errorResponse.code = error.code;
            errorResponse.message = error.message;
            isError = true;
        });

        //if(validResponse.status !== 200) return validResponse;
        if (isError) return errorResponse;
        return validResponse;
    }

}