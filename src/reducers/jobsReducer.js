// Importing action types for job-related actions
import { FETCH_JOBS_REQUEST, FETCH_JOBS_SUCCESS, FETCH_JOBS_FAILURE } from '../actions/jobsAction';

// Initial state for the jobs reducer
const initialState = {
  loading: false, // Flag to indicate if jobs are being fetched
  page: 1, // Current page of job data
  jobs: [], // Array to store job data
  error: null // Error message if any
};

// Reducer function for managing job-related state changes
const jobsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_JOBS_REQUEST:
      // Update state when job data fetch is requested
      return {
        ...state,
        loading: true
      };
    case FETCH_JOBS_SUCCESS:
      // Update state when job data fetch is successful
      if (Array.isArray(action.payload.jobs)) {
        // If job data is an array, update state with new data
        return {
          ...state,
          loading: false,
          page: action.payload.page,
          jobs: [...state.jobs, ...action.payload.jobs], // Concatenating new jobs with existing ones
          error: null
        };
      } else {
        // Handle non-iterable job data
        return {
          ...state,
          loading: false,
          error: 'Jobs data is not iterable'
        };
      }
    case FETCH_JOBS_FAILURE:
      // Update state when job data fetch fails
      return {
        ...state,
        loading: false,
        error: action.payload // Set error message from the payload
      };
    default:
      // Return current state if action type doesn't match
      return state;
  }
};

export default jobsReducer; // Exporting the jobsReducer function