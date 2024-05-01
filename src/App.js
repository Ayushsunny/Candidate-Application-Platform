import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchJobs } from './actions/jobsAction';
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
      <div className="job-list-container">
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>Error: {error}</p>
        ) : (
          <JobRoles jobs={jobs} /> // Render the JobRole component and pass the jobs array as a prop
        )}
      </div>
    </div>
  );
}

export default App;