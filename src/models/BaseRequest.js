
import { BaseModel } from 'sjs-base-model';

export default class BaseRequest extends BaseModel{

    ref = null;
    limit = 10;
    lastVisible = null;

    constructor(data){
        super(data);
        this.update(data);
    }
}
