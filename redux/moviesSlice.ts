import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import moviesService from '../services/moviesService';
import { Movie } from '@/types/movieTypes';

// Define an asynchronous thunk action to fetch movie scores
export const fetchMovieScores = createAsyncThunk(
  'movies/fetchMovieScores',
  async () => {
    // Call the moviesService to get movie scores
    const movies = await moviesService.getMovieScores();
    return movies;
  }
);

interface MovieState {
  movies: Movie[];  // Array to hold movie data
  status: 'idle' | 'loading' | 'success' | 'failed';  // Status of the data fetching process
  error: string | null;  // Error message if the data fetching fails
}

// Create a slice of the Redux store for managing movie state
const moviesSlice = createSlice({
  name: 'movies',
  initialState: {
    movies: [],  // Initial state for movies is an empty array
    status: 'idle',  // Initial status is 'idle'
    error: null,  // Initial error is null
  } as MovieState,
  reducers: {},
  extraReducers: (builder) => {
    // Handle different states of the fetchMovieScores action
    builder
      .addCase(fetchMovieScores.pending, (state) => {
        // When the fetch is pending, set status to 'loading' and clear any previous error
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchMovieScores.fulfilled, (state, action) => {
        // When the fetch is successful, set movies to the payload and status to 'success'
        state.movies = action.payload;
        state.status = 'success';
      })
      .addCase(fetchMovieScores.rejected, (state, action) => {
        // When the fetch fails, set status to 'failed' and set the error message
        state.status = 'failed';
        state.error = action.error.message || 'Failed to fetch movie scores';
      });
  },
});

export default moviesSlice.reducer;
