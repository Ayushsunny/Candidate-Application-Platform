import React, { useEffect, useState } from 'react';
import Card from './Card';

const JobRoles = ({ jobs, loadMore }) => {
  const [isLoading] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

      if (windowHeight + scrollTop >= documentHeight - 20) {
        loadMore();
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [jobs, loadMore]); // Include jobs and loadMore in the dependency array

  return (
    <div className="job-list">
      {jobs.map(job => (
        <Card key={job.id} job={job} />
      ))}
      {isLoading && <p>Loading more jobs...</p>}
    </div>
  );
};

export default JobRoles;
