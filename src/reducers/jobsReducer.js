
import { FETCH_JOBS_REQUEST, FETCH_JOBS_SUCCESS, FETCH_JOBS_FAILURE } from '../actions/jobsAction';

const initialState = {
  loading: false,
  jobs: [],
  error: ''
};

const jobReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_JOBS_REQUEST:
      return {
        ...state,
        loading: true
      };
    case FETCH_JOBS_SUCCESS:
      return {
        ...state,
        loading: false,
        jobs: action.payload.jdList,
        error: ''
      };
    case FETCH_JOBS_FAILURE:
      return {
        ...state,
        loading: false,
        jobs: [],
        error: action.payload
      };
    default:
      return state;
  }
};

export default jobReducer;
