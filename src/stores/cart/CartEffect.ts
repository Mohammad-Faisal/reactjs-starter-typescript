import EffectUtility from '../../utils/EffectUtility';


export default class DeleteEffect {


    static async _requestGetCartItems(objectId) {
        const tempObject = {expenditure_id : objectId ,platform: 'homeWeb' };
        const dataObject = JSON.parse(JSON.stringify(tempObject));
        return EffectUtility._pushThroughFirebaseFunction("DELETE_EXPENDITURE", dataObject); //modify with whatever
    }


}
