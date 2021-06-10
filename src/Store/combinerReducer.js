import {combineReducers} from 'redux';
const initialState = {
  name: '',
  city: '',
  age: 0,
  names: ['aqil', 'qila'],
  namesObject: [
    {
      name: '',
      city: '',
    },
  ],
};

const userReducer = (state = initialState, action) => {
  // console.log('state = ', state);
  // console.log('action = ', action);
  switch (action.type) {
    case 'CHANGE_NAME':
      console.log('return = ', action);
      return {
        ...state,
        ...action,
      };
    default:
      return state;
  }
};

const companyReducer = (
  state = {
    name: 'glints',
  },
  action,
) => {
  return state;
};

export const allReducer = combineReducers({
  user: userReducer,
  company: companyReducer,
});
