export const FETCH_JOBS_REQUEST = 'FETCH_JOBS_REQUEST';
export const FETCH_JOBS_SUCCESS = 'FETCH_JOBS_SUCCESS';
export const FETCH_JOBS_FAILURE = 'FETCH_JOBS_FAILURE';

export const fetchJobs = (page) => async (dispatch) => {
  dispatch({ type: FETCH_JOBS_REQUEST });

  try {
    const myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');

    const raw = JSON.stringify({
      limit: 10, 
      offset: (page - 1) * 10, 
    });

    const requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw
    };

    const response = await fetch('https://api.weekday.technology/adhoc/getSampleJdJSON', requestOptions);
    const data = await response.json();

    if (data && data.jdList && Array.isArray(data.jdList)) {
      dispatch({
        type: FETCH_JOBS_SUCCESS,
        payload: {
          jobs: data.jdList,
          page: page
        }
      });
    } else {
      throw new Error('Data received is not in the expected format');
    }
  } catch (error) {
    dispatch({
      type: FETCH_JOBS_FAILURE,
      payload: error.message
    });
  }
};
