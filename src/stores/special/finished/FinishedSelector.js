import { createSelector } from 'reselect';

export class FinishedSelector {
    static selectRequesting(requestingState, actionType) {
        return requestingState[actionType];
    }
}


export const selectFinished = createSelector(
    (state) => state.finished,
    (state, actionType) => actionType,
    FinishedSelector.selectRequesting
);