import { BaseModel } from 'sjs-base-model';

//it will take Request Body Data in the constructor
export default class BaseResponse extends BaseModel{

    data = [];
    dataObject  = {};
    lastVisible = null;
    status = true;

    constructor(data){
        super(data);
        this.update(data);
    }
}
