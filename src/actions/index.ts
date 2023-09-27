import ActionType from './ActionType';

export const selectLibrary = (id: number) => {
  return {
    type: ActionType.SelectLibrary,
    payload: id
  };
};
