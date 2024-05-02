import React, { useEffect, useState } from 'react';
import Card from './Card';

// This component is responsible for rendering a list of job roles
const JobRoles = ({ jobs, loadMore }) => {
  // State to track whether the component is currently loading more jobs
  const [isLoading, setIsLoading] = useState(false);

  // This useEffect hook sets up an event listener for the scroll event on the window
  useEffect(() => {
    // This function is called whenever the user scrolls on the page
    const handleScroll = () => {
      // Get the current window height, document height, and scroll position
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

      // Check if the user has scrolled to the bottom of the page (within 20 pixels)
      if (windowHeight + scrollTop >= documentHeight - 20) {
        // Set the isLoading state to true to indicate that more jobs are being loaded
        setIsLoading(true);
        // Call the loadMore function to fetch more jobs
        loadMore();
      }
    };

    // Add the scroll event listener to the window
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component is unmounted
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [jobs, loadMore]);

  // Render the list of job roles
  return (
    <div className="job-list">
      {jobs.map((job) => (
        <Card key={job.id} job={job} />
      ))}
      {/* Display a "Loading more jobs..." message if the component is currently loading */}
      {isLoading && <p>Loading more jobs...</p>}
    </div>
  );
};

export default JobRoles;