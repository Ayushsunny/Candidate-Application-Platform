import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchJobs } from './actions/jobsAction'; // Importing the fetchJobs action
import Filters from './components/Filters'; // Importing the Filters component
import JobRoles from './components/jobRoles'; // Importing the JobRoles component
import './App.css'; // Importing the CSS file for styling

function App() {
  const dispatch = useDispatch(); // Initializing the dispatch function from Redux
  const { loading, page, jobs, error, filters } = useSelector(state => state.jobs); // Using useSelector to get data from the Redux store

  useEffect(() => {
    // Fetching jobs when the component mounts or when filters change
    dispatch(fetchJobs(filters));
  }, [dispatch, filters]);

  const loadMoreJobs = useCallback(() => {
    // Function to load more jobs when the user clicks on a button
    dispatch(fetchJobs(page + 1, filters));
  }, [dispatch, page, filters]);

  return (
    <div>
      <nav className="app-navbar" style={{ backgroundColor: 'rgb(29 132 103)', color: 'white', padding: '0.5rem', fontWeight: 'bold', marginBottom: '60px' }}>
        <h1 style={{ fontSize: '1.5rem', textTransform: 'uppercase', textAlign: 'center' }}>Candidate Application Platform</h1>
      </nav>
      <Filters /> {/* Filters component for filtering jobs */}
      <div className="job-list-container">
        {/* Rendering job roles or loading/error message based on state */}
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
