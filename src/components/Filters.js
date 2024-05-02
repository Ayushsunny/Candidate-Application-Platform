import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setFilters } from '../actions/filterAction';
import { Button, FormControl, InputLabel, MenuItem, Select, Grid, Checkbox, FormControlLabel } from '@mui/material';

// The Filters component is responsible for rendering a set of filters
// that allow the user to filter job listings based on various criteria
const Filters = () => {
  // Use the useDispatch hook to get a reference to the Redux dispatch function
  const dispatch = useDispatch();

  // Use the useState hook to create a local state object for the filters
  const [filters, setLocalFilters] = useState({
    minExperience: '',
    companyName: '',
    location: '',
    isRemote: false,
    techStack: '',
    role: '',
    minBasePay: '',
  });

  // Define a function to handle changes to the filter values
  const handleFilterChange = (filterName, value) => {
    // Update the local filters state using the previous state and the new value
    setLocalFilters((prevFilters) => ({
      ...prevFilters,
      [filterName]: value,
    }));
  };

  // Define a function to apply the current filters
  const applyFilters = () => {
    // Dispatch the setFilters action with the current filters
    dispatch(setFilters(filters));
  };

  // Render the Filters component
  return (
    <Grid container spacing={2} alignItems="center">
      {/* Render a FormControl for selecting the company name */}
      <Grid item>
        <FormControl variant="outlined" sx={{ minWidth: 350 }}>
          <InputLabel>Company Name</InputLabel>
          <Select
            value={filters.companyName}
            onChange={(e) => handleFilterChange('companyName', e.target.value)}
            label="Company Name"
          >
            <MenuItem value="">Select Company Name</MenuItem>
            <MenuItem value="Company A">Company1</MenuItem>
            <MenuItem value="Company B">Company2</MenuItem>
            <MenuItem value="Company C">Company3</MenuItem>
          </Select>
        </FormControl>
      </Grid>

      {/* Render a FormControl for selecting the location */}
      <Grid item>
        <FormControl variant="outlined" sx={{ minWidth: 300 }}>
          <InputLabel>Location</InputLabel>
          <Select
            value={filters.location}
            onChange={(e) => handleFilterChange('location', e.target.value)}
            label="Location"
          >
            <MenuItem value="">Select Location</MenuItem>
            <MenuItem value="mumbai">Mumbai</MenuItem>
            <MenuItem value="Bangalore">Bangalore</MenuItem>
            <MenuItem value="Hyderabad">Hyderabad</MenuItem>
            <MenuItem value="Gurgaon">Gurgaon</MenuItem>
          </Select>
        </FormControl>
      </Grid>

      {/* Render a FormControl for selecting the tech stack */}
      <Grid item>
        <FormControl variant="outlined" sx={{ minWidth: 250 }}>
          <InputLabel>Tech Stack</InputLabel>
          <Select
            value={filters.techStack}
            onChange={(e) => handleFilterChange('techStack', e.target.value)}
            label="Tech Stack"
          >
            <MenuItem value="">Select Tech Stack</MenuItem>
            <MenuItem value="Next.js">Next.js</MenuItem>
            <MenuItem value="Node.js">Node.js</MenuItem>
            <MenuItem value="React">ReactJS</MenuItem>
            <MenuItem value="Tailwind CSS">Tailwind CSS</MenuItem>
            <MenuItem value="Python">Python</MenuItem>
          </Select>
        </FormControl>
      </Grid>

      {/* Render a FormControl for selecting the role */}
      <Grid item>
        <FormControl variant="outlined" sx={{ minWidth: 300 }}>
          <InputLabel>Role</InputLabel>
          <Select
            value={filters.role}
            onChange={(e) => handleFilterChange('role', e.target.value)}
            label="Role"
          >
            <MenuItem value="">Select Role</MenuItem>
            <MenuItem value="Frontend Developer">Frontend Developer</MenuItem>
            <MenuItem value="Backend Developer">Backend Developer</MenuItem>
            <MenuItem value="Android">Android Developer</MenuItem>
            <MenuItem value="Data Science">Data Science</MenuItem>
            <MenuItem value="Full Stack Developer">Full Stack Developer</MenuItem>
          </Select>
        </FormControl>
      </Grid>

      {/* Render a FormControl for selecting the minimum base pay */}
      <Grid item>
        <FormControl variant="outlined" sx={{ minWidth: 300 }}>
          <InputLabel>Min Base Pay</InputLabel>
          <Select
            value={filters.minBasePay}
            onChange={(e) => handleFilterChange('minBasePay', e.target.value)}
            label="Min Base Pay"
          >
            <MenuItem value="">Select Min base pay</MenuItem>
            <MenuItem value="10L">10L</MenuItem>
            <MenuItem value="15L">15L</MenuItem>
            <MenuItem value="20L">20L</MenuItem>
            <MenuItem value="25L">25L</MenuItem>
            <MenuItem value="30L">30L</MenuItem>
          </Select>
        </FormControl>
      </Grid>

      {/* Render a FormControlLabel for the "Remote" checkbox */}
      <Grid item>
        <FormControlLabel
          control={
            <Checkbox
              checked={filters.isRemote}
              onChange={(e) => handleFilterChange('isRemote', e.target.checked)}
            />
          }
          label="Remote"
        />
      </Grid>

      {/* Render a Button to apply the filters */}
      <Grid item>
        <Button
          variant="contained"
          style={{
            backgroundColor: 'rgb(85, 239, 196)',
            color: 'black',
            fontWeight: 500,
          }}
          onClick={applyFilters}
        >
          Apply Filters
        </Button>
      </Grid>
    </Grid>
  );
};

export default Filters;