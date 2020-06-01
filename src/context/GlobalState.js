import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

//initial state
const getLocalStorageState = () => {

  let state;
  if (localStorage.getItem('state-norms') === null) {
    state = {
      currentUserId: 0,
      authenticated: true,
      users: [

        {
          name: 'demo',
          pass: 'demopassword',
          userId: 0,
          norms: [
            {
              name: 'Example',
              id: 1,
              prog: 0,
              comp: [false, false, false, false, false, false, false],
              currentMonth: [10, 30, 40,],
              lastMonth: [60, 70, 50, 90],
              year: [70, 60, 70, 80, 70, 80, 85, 80, 90, 100, 95, 100],
              repeat: 1,
              isDataSent: false,
              isMonthDataSent: false,
            }
          ]
        }
      ]
    }
  } else {
    state = JSON.parse(localStorage.getItem('state-norms'));
  }
  return state;
};
const stateLocalStorage = getLocalStorageState();

const initialState = stateLocalStorage;

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions
  function deleteNorm(id) {
    dispatch({
      type: 'DELETE_NORM',
      payload: id,
    });
  }

  function addNormAction(users) {
    dispatch({
      type: 'ADD_NORM',
      payload: users,
    });
  }

  function checkDay(norms) {
    dispatch({
      type: 'CHECK_DAY',
      payload: norms,
    });
  }

  function endWeekAction(user) {
    dispatch({
      type: 'END_WEEK',
      payload: user,
    });
  }

  function endMonthAction(users) {
    dispatch({
      type: 'END_MONTH',
      payload: users,
    });
  }

  function changeRepeatAction(users) {
    dispatch({
      type: 'CHANGE_REPEAT',
      payload: users,
    });
  }

  function singInAction(user) {
    dispatch({
      type: 'SING_IN',
      payload: user,
    });
  }

  function changeUserAction(newid) {
    dispatch({
      type: 'CHANGE_CURRENT_USER',
      payload: newid,
    });
  }

  // UPDATING LOCALSTORAGE
  localStorage.setItem('state-norms', JSON.stringify(state));

  return (
    <GlobalContext.Provider
      value={{
        globalSTATE: state,
        currentUserId: state.currentUserId,
        users: state.users,
        norms: state.users[state.currentUserId].norms,
        deleteNorm,
        addNormAction,
        checkDay,
        endWeekAction,
        endMonthAction,
        changeRepeatAction,
        singInAction,
        changeUserAction
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
