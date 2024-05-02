// Import the action type constant from the filterTypes file
import { SET_FILTERS } from '../types/filterTypes';

// Define the initial state of the filter options
const initialState = {
  minExperience: '',
  companyName: '',
  location: '',
  isRemote: false,
  techStack: '',
  role: '',
  minBasePay: ''
};

// Define the filterReducer function, which is responsible for handling the filter-related actions
const filterReducer = (state = initialState, action) => {
  // Check the action type
  switch (action.type) {
    // If the action type is SET_FILTERS, update the state with the new filter values
    case SET_FILTERS:
      return {
        // Spread the existing state
        ...state,
        // Merge the new filter values from the action payload
        ...action.payload
      };
    // If the action type is not SET_FILTERS, return the current state
    default:
      return state;
  }
};

// Export the filterReducer function as the default export
export default filterReducer;