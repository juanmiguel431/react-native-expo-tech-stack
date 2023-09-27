import data from './LibraryList.json'
import { Library } from '../models';
import ActionType from '../actions/ActionType';

type LibraryReducerAction = {
  type: ActionType;
}

export const LibraryReducer = (state: Library[] = [], action: LibraryReducerAction): Library[] => {
  return data;
};
