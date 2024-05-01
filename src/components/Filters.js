import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setFilters } from '../actions/filterAction';
import { Button, FormControl, InputLabel, MenuItem, Select, Grid, Checkbox, FormControlLabel } from '@mui/material';

const Filters = () => {
    const dispatch = useDispatch();
    const [filters, setLocalFilters] = useState({
        minExperience: '',
        companyName: '',
        location: '',
        isRemote: false,
        techStack: '',
        role: '',
        minBasePay: ''
    });

    const handleFilterChange = (filterName, value) => {
        setLocalFilters({
            ...filters,
            [filterName]: value
        });
    };

    const applyFilters = () => {
        dispatch(setFilters(filters));
    };

    return (
        <Grid container spacing={2} alignItems="center">
            <Grid item>
                <FormControl variant="outlined" sx={{ minWidth: 350 }}>
                    <InputLabel>Company Name</InputLabel>
                    <Select
                        value={filters.companyName}
                        onChange={e => handleFilterChange('companyName', e.target.value)}
                        label="Company Name"
                    >
                        <MenuItem value="">Select Company Name</MenuItem>
                        <MenuItem value="Company A">Company A</MenuItem>
                        <MenuItem value="Company B">Company B</MenuItem>
                        <MenuItem value="Company C">Company C</MenuItem>
                    </Select>
                </FormControl>
            </Grid>

            <Grid item>
                <FormControl variant="outlined" sx={{ minWidth: 300 }}>
                    <InputLabel>Location</InputLabel>
                    <Select
                        value={filters.location}
                        onChange={e => handleFilterChange('location', e.target.value)}
                        label="Location"
                    >
                        <MenuItem value="">Select Location</MenuItem>
                        <MenuItem value="Bangalore">Bangalore</MenuItem>
                        <MenuItem value="Hyderabad">Hyderabad</MenuItem>
                        <MenuItem value="Gurgaon">Gurgaon</MenuItem>
                    </Select>
                </FormControl>
            </Grid>

            <Grid item>
                <FormControl variant="outlined" sx={{ minWidth: 250 }}>
                    <InputLabel>Tech Stack</InputLabel>
                    <Select
                        value={filters.techStack}
                        onChange={e => handleFilterChange('techStack', e.target.value)}
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

            <Grid item>
                <FormControl variant="outlined" sx={{ minWidth: 300 }}>
                    <InputLabel>Role</InputLabel>
                    <Select
                        value={filters.role}
                        onChange={e => handleFilterChange('role', e.target.value)}
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

            <Grid item>
                <FormControl variant="outlined" sx={{ minWidth: 300 }}>
                    <InputLabel>Min Base Pay</InputLabel>
                    <Select
                        value={filters.minBasePay}
                        onChange={e => handleFilterChange('minBasePay', e.target.value)}
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

            <Grid item>
                <FormControlLabel
                    control={<Checkbox
                        checked={filters.isRemote}
                        onChange={e => handleFilterChange('isRemote', e.target.checked)}
                    />}
                    label="Remote"
                />
            </Grid>

            <Grid item>
                <Button variant="contained" style={{ backgroundColor: 'rgb(85, 239, 196)', color: 'black', fontWeight: 500 }} onClick={applyFilters}>Apply Filters</Button>
            </Grid>
        </Grid>
    );
};

export default Filters;
