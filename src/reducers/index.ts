import { combineReducers } from 'redux';
import { LibraryReducer } from './LibraryReducer';

const reducers = combineReducers({
  libraries: LibraryReducer,
});

export type RootState = ReturnType<typeof reducers>;

export default reducers;
