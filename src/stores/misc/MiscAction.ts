import ActionUtility from '../../utils/ActionUtility';
import ModalStateModel from './model/ModalStateModel';
import { ModalTypeConstants } from '../../assets/constants/GeneralConstants';

export default class MiscAction {


    static SET_DATE_RANGE = 'SET_DATE_RANGE';
    static SET_DATE = 'SET_DATE';
    static SET_MONTH = 'SET_MONTH';
    static SET_IMAGE = 'SET_IMAGE';
    static SET_XL_DATA = 'SET_XL_DATA';
    static SELECT_DROPDOWN_ITEM = 'SELECT_DROPDOWN_ITEM';
    static SET_MODAL_STATUS = 'SET_MODAL_STATUS';
    static SELECT_RADIO_ITEM = 'SELECT_RADIO_ITEM';



    static _selectRadioItem(dropdownObject) {
        return ActionUtility._createAction( MiscAction.SELECT_RADIO_ITEM,dropdownObject);
    }


    static _setDateRange(dateRangeObject) {
        return ActionUtility._createAction(MiscAction.SET_DATE_RANGE, dateRangeObject)
    }

    static _clearDateRange() {
        return ActionUtility._createAction(MiscAction.SET_DATE_RANGE)
    }

    static _setDate(dateObject) {
        return ActionUtility._createAction(MiscAction.SET_DATE, dateObject)
    }

    static _setMonth(monthObject) {
        return ActionUtility._createAction(MiscAction.SET_MONTH, monthObject)
    }

    static _setImage(imageObject) {
        return ActionUtility._createAction(MiscAction.SET_IMAGE, imageObject)
    }

    static _setXLData(XLDateObject) {
        return ActionUtility._createAction(MiscAction.SET_XL_DATA, XLDateObject)
    }

    static _selectDropdownItem(dropdownObject) {
        return ActionUtility._createAction(MiscAction.SELECT_DROPDOWN_ITEM, dropdownObject);
    }


    
    static _showModalSuccess(message) {
        return MiscAction._setModalStatus(new ModalStateModel(ModalTypeConstants.TYPE_SUCCESS, true, { message }))
    }
    static _showModalFailure(message) {
        return MiscAction._setModalStatus(new ModalStateModel(ModalTypeConstants.TYPE_ERROR, true, { message }))
    }
    static _showModalInfo(message) {
        return MiscAction._setModalStatus(new ModalStateModel(ModalTypeConstants.TYPE_INFO, true, { message }))
    }
    static _showModalWarning(message) {
        return MiscAction._setModalStatus(new ModalStateModel(ModalTypeConstants.TYPE_WARNING, true, { message }))
    }

    static _setModalStatus(modalData) {
        return ActionUtility._createAction(MiscAction.SET_MODAL_STATUS, modalData);
    }

}