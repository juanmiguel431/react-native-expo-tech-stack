import { combineReducers } from 'redux';
import { LibraryReducer } from './LibraryReducer';
import { SelectionReducer } from './SelectionReducer';

const reducers = combineReducers({
  libraries: LibraryReducer,
  selected: SelectionReducer
});

export type RootState = ReturnType<typeof reducers>;

export default reducers;
