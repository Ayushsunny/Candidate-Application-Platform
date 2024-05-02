import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchJobs } from './actions/jobsAction';
import Filters from './components/Filters';
import JobRoles from './components/jobRoles';
import './App.css'; 

function App() {
  const dispatch = useDispatch();
  const { loading, page, jobs, error } = useSelector(state => state.jobs);

  useEffect(() => {
    dispatch(fetchJobs());
  }, [dispatch]);

  const loadMoreJobs = useCallback(() => {
    dispatch(fetchJobs(page + 1)); 
  }, [dispatch, page]);

  return (
    <div>
      <div className="app-header">
        <h1>Candidate Application Platform</h1>
      </div>
      <Filters />
      <div className="job-list-container">
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>Error: {error}</p>
        ) : (
          <JobRoles jobs={jobs} loadMore={loadMoreJobs} /> 
        )}
      </div>
    </div>
  );
}

export default App;
