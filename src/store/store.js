// Import necessary Redux functions for creating the store
import { createStore, applyMiddleware, compose } from 'redux';

// Import the root reducer that combines all reducers
import rootReducer from '../reducers';

// Import thunk middleware for handling asynchronous actions
import { thunk } from 'redux-thunk';

// Define the initial state of the Redux store
const initialState = {};

// Setup the Redux DevTools extension for debugging and monitoring state changes
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Create the Redux store with the root reducer, initial state, and middleware
const store = createStore(
  rootReducer,
  initialState,
  composeEnhancers(applyMiddleware(thunk))
);

// Export the configured Redux store for use in the application
export default store;