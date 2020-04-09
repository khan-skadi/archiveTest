export const addLog = (log) => (dispatch) => {
  dispatch({
    type: 'ADD_LOG',
    payload: log
  });
};
