// Action Types for fetching jobs
export const FETCH_JOBS_REQUEST = 'FETCH_JOBS_REQUEST';
export const FETCH_JOBS_SUCCESS = 'FETCH_JOBS_SUCCESS';
export const FETCH_JOBS_FAILURE = 'FETCH_JOBS_FAILURE';

// Action creator to fetch jobs based on the provided page number
export const fetchJobs = (page) => async (dispatch) => {
  // Dispatch an action to indicate the start of the job fetching process
  dispatch({ type: FETCH_JOBS_REQUEST });

  try {
    // Setting up headers for the API request
    const myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');

    // Creating the request body with limit and offset based on the page number
    const raw = JSON.stringify({
      limit: 10,
      offset: (page - 1) * 10,
    });

    // Constructing the request options for the API call
    const requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw
    };

    // Fetching data from the API endpoint
    const response = await fetch('https://api.weekday.technology/adhoc/getSampleJdJSON', requestOptions);
    const data = await response.json();
    console.log(data);

    // Checking if the received data is in the expected format
    if (data && data.jdList && Array.isArray(data.jdList)) {
      // Dispatching a success action with the fetched jobs and page number
      dispatch({
        type: FETCH_JOBS_SUCCESS,
        payload: {
          jobs: data.jdList,
          page: page
        }
      });
    } else {
      // Throwing an error if the data format is unexpected
      throw new Error('Data received is not in the expected format');
    }
  } catch (error) {
    // Dispatching a failure action with the error message if an error occurs during the API call
    dispatch({
      type: FETCH_JOBS_FAILURE,
      payload: error.message
    });
  }
}