import data from './LibraryList.json'
import { Library } from '../models';

export const LibraryReducer = (state: Library[] = []): Library[] => {
  return data;
};
