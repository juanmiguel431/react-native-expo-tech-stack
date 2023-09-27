import data from './LibraryList.json'
import { Library } from '../models';

type LibraryReducerAction = {
  type: string;
}

export const LibraryReducer = (state: Library[] = [], action: LibraryReducerAction): Library[] => {
  console.log('JMPC1', action);
  return data;
};
