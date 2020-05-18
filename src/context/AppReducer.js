export default (state, action) => {
  switch (action.type) {
    case 'DELETE_NORM': {
      console.log(action.payload)

      return {
        ...state,
        users: state.users.map(item => {
          if (item.userId === action.payload[0]) {
            let filtered = item.norms.filter((norm) => norm.id !== action.payload[1])
            item.norms = filtered
            return item
          } else return item
        })
      };
    }
    case 'ADD_NORM':
      return {
        ...state,
        users: action.payload,
      };
    case 'CHECK_DAY':
      return {
        ...state,
        norms: action.payload,
      };
    case 'END_WEEK':
      return {
        ...state,
        users: action.payload
      };
    case 'END_MONTH':
      return {
        ...state,
        users: action.payload,
      };
    case 'CHANGE_REPAEAT':
      return {
        ...state,
        norms: [action.payload, ...state.norms],
      };
    case 'SING_IN':
      return {
        ...state,
        users: [...state.users, action.payload],
      };
    case 'CHANGE_CURRENT_USER':
      return {
        currentUserId: action.payload,
        users: [...state.users]
      };
    default:
      return state;
  }
};
