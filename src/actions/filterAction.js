// Import the action type constant for setting filters
import { SET_FILTERS } from '../types/filterTypes';

// Define the setFilters action creator function
export const setFilters = (filters) => ({
  // Specify the type of action being dispatched
  type: SET_FILTERS,
  // Pass the filters as the payload of the action
  payload: filters
});