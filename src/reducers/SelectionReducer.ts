import ActionType from '../actions/ActionType';

type SelectionReducerState = number | null;

type SelectionReducerAction = {
  type: ActionType;
  payload: number;
};

export const SelectionReducer = (state: SelectionReducerState = null, action: SelectionReducerAction): SelectionReducerState  => {
  switch (action.type) {
    case ActionType.SelectLibrary:
      return action.payload;
    default:
      return state;
  }
};
