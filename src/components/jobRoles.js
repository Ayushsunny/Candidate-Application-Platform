import React from 'react';
import Card from './Card';

const JobRoles = ({ jobs }) => {
  return (
    <div className="job-list">
      <div className="job-grid">
        {jobs.map(job => (
          <Card key={job.jdUid} job={job} />
        ))}
      </div>
    </div>
  );
};

export default JobRoles;
