import MiscAction from './MiscAction';
import BaseReducer from '../../utils/BaseReducer';

export default class MiscReducer extends BaseReducer {

    initialState = {

        dateRangeObject: null,
        dateObject: null,
        monthObject : null ,
        imageObject: null,
        xlDataObject: null,
        selectedDropdownObject: null,
        selectedRadioObject: null,
        modalStatus: null,

    };

    [MiscAction.SELECT_RADIO_ITEM](state, action) {
        return {
            ...state,
            selectedRadioObject: action.payload,
        };
    }


    [MiscAction.SET_DATE_RANGE](state, action) {
        return {
            ...state,
            dateRangeObject: action.payload,
        };
    }

    [MiscAction.SET_DATE](state, action) {
        return {
            ...state,
            dateObject: action.payload,
        };
    }
    
    [MiscAction.SET_MONTH](state, action) {
        return {
            ...state,
            monthObject: action.payload,
        };
    }


    [MiscAction.SET_IMAGE](state, action) {
        return {
            ...state,
            imageObject: action.payload,
        };
    }

    [MiscAction.SET_XL_DATA](state, action) {
        return {
            ...state,
            xlDataObject: action.payload,
        };
    }


    [MiscAction.SELECT_DROPDOWN_ITEM](state, action) {
        return {
            ...state,
            selectedDropdownObject: action.payload,
        };
    }


    [MiscAction.SET_MODAL_STATUS](state, action) {
        return {
            ...state,
            modalStatus: action.payload,
        };
    }


}