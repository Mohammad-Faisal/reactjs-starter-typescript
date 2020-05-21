import ActionUtility from '../../../utils/ActionUtility';

export default class ErrorAction {
  static CLEAR_ALL = 'ErrorAction.CLEAR_ALL';
  static REMOVE = 'ErrorAction.REMOVE';

  static removeById(id) {
    return ActionUtility._createAction(ErrorAction.REMOVE, id);
  }

  static clearAll() {
    return ActionUtility._createAction(ErrorAction.CLEAR_ALL);
  }
}