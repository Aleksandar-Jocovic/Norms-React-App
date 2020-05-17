export default (state, action) => {
  switch (action.type) {
    case 'DELETE_NORM': {
      return {
        ...state,
        norms: state.norms.filter((norm) => norm.id !== action.payload),
      };
    }
    case 'ADD_NORM':
      return {
        ...state,
        norms: [action.payload, ...state.norms],
      };
    case 'CHECK_DAY':
      return {
        ...state,
        norms: action.payload,
      };
    case 'END_WEEK':
      return {
        ...state,
        norms: action.payload,
      };
    case 'END_MONTH':
      return {
        ...state,
        norms: action.payload,
      };
    case 'CHANGE_REPAEAT':
      return {
        ...state,
        norms: [action.payload, ...state.norms],
      };
    case 'SING_IN':
      return {
        ...state,
        users: [action.payload, ...state.users],
      };
    default:
      return state;
  }
};
