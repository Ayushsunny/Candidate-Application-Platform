import React, { useState } from 'react';
import { Card as MuiCard, CardContent, Typography, Button } from '@mui/material';
import '../styles/Card.css'; 
import '../App.css';

const Card = ({ job }) => {
  const [expanded, setExpanded] = useState(false);
  const maxLength = 200; // Maximum character limit for the company name

  const toggleExpand = () => {
    setExpanded(!expanded);
  };
  return (
    <MuiCard variant="outlined" className="job-card">
      <CardContent>
        <Typography variant="subtitle1" color="text.secondary" gutterBottom>
          {job.jobRole}
        </Typography>
        <Typography variant="subtitle1" color="text.secondary" gutterBottom>
          {job.location}
        </Typography>
        <div className="job-details">
          <Typography variant="h6" component="div" gutterBottom>
            {expanded ? job.jobDetailsFromCompany : job.jobDetailsFromCompany.slice(0, maxLength)}
          </Typography>
          {job.jobDetailsFromCompany.length > maxLength && (
            <Button onClick={toggleExpand} className="view-more" color="primary">
              {expanded ? 'View Less' : 'View More'}
            </Button>
          )}
        </div>
        <Typography variant="body2" color="text.secondary" gutterBottom>
          Minimum Experience: {job.minExp}
        </Typography>
        <Button variant="contained" color="primary" sx={{ borderRadius: '5px', marginTop: '1rem', backgroundColor: 'rgb(85, 239, 196)', fontWeight: 500, color: 'black' }}>
          Easy Apply
          </Button>
      </CardContent>
    </MuiCard>
  );
};

export default Card;
