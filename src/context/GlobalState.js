import React, { createContext, useReducer, useEffect } from 'react';
import AppReducer from './AppReducer';

//initial state
const getNorms = () => {
  let normss;
  if (localStorage.getItem('norms') === null) {
    normss = [
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
    ];
  } else {
    normss = JSON.parse(localStorage.getItem('norms'));
  }
  return normss;
};
const stateLocalStorage = getNorms();

const initialState = {
  norms: stateLocalStorage,
};

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

  function addNorm(norm) {
    dispatch({
      type: 'ADD_NORM',
      payload: norm,
    });
  }

  function checkDay(norms) {
    dispatch({
      type: 'CHECK_DAY',
      payload: norms,
    });
  }

  function endWeekAction(norms) {
    dispatch({
      type: 'END_WEEK',
      payload: norms,
    });
  }

  function endMonthAction(norms) {
    dispatch({
      type: 'END_MONTH',
      payload: norms,
    });
  }

  function changeRepeatAction(norm) {
    dispatch({
      type: 'CHANGE_REPEAT',
      payload: norm,
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        norms: state.norms,
        deleteNorm,
        addNorm,
        checkDay,
        endWeekAction,
        endMonthAction,
        changeRepeatAction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
