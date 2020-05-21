import ActionUtility from '../../../utils/ActionUtility';
import uuid from 'uuid/v4';

export default class ToastsAction {
  static ADD_TOAST = 'ToastsAction.ADD_TOAST';
  static REMOVE_TOAST = 'ToastsAction.REMOVE_TOAST';

  static add(message, code , type) {
    return ActionUtility._createAction(ToastsAction.ADD_TOAST, {
      message,
      type,
      id: uuid(),
      code
    });
  }

  static removeById(toastId) {
    return ActionUtility._createAction(ToastsAction.REMOVE_TOAST, toastId);
  }
}


