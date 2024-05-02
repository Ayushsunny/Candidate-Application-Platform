import React, { useState } from 'react';
import { Card as MuiCard, CardContent, Typography, Button } from '@mui/material';
import '../styles/Card.css';

const Card = ({ job }) => {
  const [expanded, setExpanded] = useState(false);
  const maxLength = 400; // Maximum character limit for the company name

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <MuiCard variant="outlined" className="job-card"
      sx={{ borderRadius: '20px', maxWidth: '400px' }}>
      <CardContent>
        <Typography variant="h5" color="text.secondary" gutterBottom>
          {job.jobRole}
        </Typography>
        <Typography variant="subtitle1" color="text.secondary" gutterBottom style={{ color: 'rgb(32,32,32)' }}>
          {job.location}
        </Typography>

        <Typography variant="subtitle1" color="text.secondary" gutterBottom style={{ fontWeight: 400 }}>
        {job.minJdSalary && job.maxJdSalary ? `Estimated Salary: ${job.minJdSalary} - ${job.maxJdSalary} ${job.salaryCurrencyCode}` : 'Salary not disclosed'}
        </Typography>

        <Typography variant="subtitle1" gutterBottom style={{ fontWeight: 500, fontSize: 20, color: 'rgb(32,32,32)' }}>
          About Company:
        </Typography>
        <div className="job-details" style={{
          position: 'relative'
        }}>
          <Typography variant="body1" component="div" gutterBottom>
            {expanded ? job.jobDetailsFromCompany : job.jobDetailsFromCompany.slice(0, maxLength)}
          </Typography>
          <div className="view-more" style={{
            textAlign: 'center',
            position: 'absolute',
            bottom: '0',
            width: '100%',
            paddingTop: '2rem',
            background: 'linear-gradient(rgba(255,255,255,0.5), rgba(255,255,255,0.9))',
          }}>
            {job.jobDetailsFromCompany.length > maxLength && (
              <Button onClick={toggleExpand} className="view-more" color="primary">
                {expanded ? 'View Less' : 'View More'}
              </Button>
            )}
          </div>

        </div>

        <Typography variant="subtitle1" color="text.disabled" gutterBottom style={{ fontWeight: 600 }}>
          Experience required:
        </Typography>
        <Typography variant="subtitle1" color="text.secondary" gutterBottom>
          {job.minExp ? `${job.minExp} - ${job.maxExp} Years` : 'Experience not disclosed'}
        </Typography>
        <Button variant="contained" color="primary" sx={{ borderRadius: '5px', marginTop: '1rem', backgroundColor: 'rgb(85, 239, 196)', fontWeight: 500, color: 'black', marginLeft: 'auto', marginRight: 'auto', width: '90%', display: 'block' }}>
          ⚡ Easy Apply
        </Button>
      </CardContent>
    </MuiCard>
  );
};

export default Card;
