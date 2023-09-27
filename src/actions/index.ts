
export const selectLibrary = (id: number) => {
  return {
    type: 'select_library',
    payload: id
  };
};
