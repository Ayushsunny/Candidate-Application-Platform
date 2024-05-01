import { SET_FILTERS } from '../types/filterTypes';

export const setFilters = (filters) => ({
  type: SET_FILTERS,
  payload: filters
});