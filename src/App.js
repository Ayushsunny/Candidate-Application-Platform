import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchJobs } from './/actions/jobsAction';

function App() {
  const dispatch = useDispatch();
  const {jobs} = useSelector(state => state.jobs);

  useEffect(() => {
    dispatch(fetchJobs());
  }, [dispatch]);

  console.log('Jobs:', jobs);

  return (
    <div>
      <h1>Job List Page</h1>
    </div>
  );
}

export default App;