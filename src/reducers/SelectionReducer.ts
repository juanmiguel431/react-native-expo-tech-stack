import { Library } from '../models';

type SelectionReducerState = {
  selected: Library | null;
}

const initialState: SelectionReducerState = { selected: null };

type SelectionReducerAction = {
  type: string;
  payload: number;
};

export const SelectionReducer = (state: SelectionReducerState = initialState, action: SelectionReducerAction): SelectionReducerState  => {
  console.log('JMPC2', action);
  return state;
};
