import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchJobs } from './actions/jobsAction';
import Filters from './components/Filters';
import JobRoles from './components/jobRoles';
import './App.css'; 

function App() {
  const dispatch = useDispatch();
  const { loading, jobs, error } = useSelector(state => state.jobs);

  useEffect(() => {
    dispatch(fetchJobs());
  }, [dispatch]);

  console.log('Jobs:', jobs);

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
          <JobRoles jobs={jobs} /> 
        )}
      </div>
    </div>
  );
}

export default App;