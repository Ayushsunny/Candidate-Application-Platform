import { SET_FILTERS } from '../types/filterTypes';

const initialState = {
  minExperience: '',
  companyName: '',
  location: '',
  isRemote: false,
  techStack: '',
  role: '',
  minBasePay: ''
};

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FILTERS:
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
};

export default filterReducer;
