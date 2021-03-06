export const addLog = (log) => (
  dispatch,
  _getState,
  { getFirebase, getFirestore }
) => {
  const firestore = getFirestore();

  firestore
    .collection('logs')
    .add({ ...log })
    .then((docRef) => {
      console.log('Document written with ID: ', docRef.id);
    })
    .catch((err) => {
      console.error('Error adding document: ', err);
    });

  dispatch({
    type: 'ADD_LOG',
    payload: log
  });
};

export const getLogs = (id) => (
  dispatch,
  _getState,
  { getFirebase, getFirestore }
) => {
  const firestore = getFirestore();
  console.log(firestore);

  firestore
    .collection('logs')
    .get()
    .then(function (querySnapshot) {
      querySnapshot.forEach(function (doc) {
        console.log(doc.id, ' => ', doc.data());
      });
    })
    .catch((err) => {
      console.err('Error getting document: ', err);
    });
};

export const getLogSuccess = (log) => (dispatch) => {
  dispatch({
    type: 'GET_LOG_SUCCESS',
    payload: log
  });
};

export const getLogFailure = (log) => (dispatch) => {
  dispatch({
    type: 'GET_LOG_FAILURE',
    payload: log
  });
};
