"use client";

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Accordion from './Accordion';
import { fetchMovieScores } from '../redux/moviesSlice';
import { Movie, RootState } from '../types/movieTypes';
import { AppDispatch } from '@/redux/store';

const Main: React.FC = () => {
  // Dispatch function to send actions to the Redux store
  const dispatch = useDispatch<AppDispatch>();
  
  // Selectors to retrieve state from the Redux store
  const { movies, status, error } = useSelector((state: RootState) => state.movies);
  
  // Local state to store movies data fetched from the Redux store
  const [localMovies, setLocalMovies] = useState<Movie[]>([]);

  // Effect to dispatch the action to fetch movie scores on component mount
  useEffect(() => {
    dispatch(fetchMovieScores());
  }, [dispatch]);

  // Effect to update localMovies state when the status of fetching changes
  useEffect(() => {
    if (status === 'success') {
      setLocalMovies(movies ?? []);
    }
  }, [status, error, movies]);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center p-4">
      <h1 className="text-3xl font-bold mb-4 text-gray-800">Movie Ratings Accordion</h1>
      
      {/* Display loading message while fetching data */}
      {status === 'loading' && <p>Loading...</p>}
      
      {/* Display error message if fetching data fails */}
      {status === 'failed' && <p>Error: {error}</p>}
      
      {/* Render Accordion component if data fetch is successful */}
      {status === 'success' && (
        <div className="w-full max-w-4xl">
          <Accordion
            items={localMovies.map((movie) => ({
              title: movie?.title,
              content: `
                IMDB: ${movie?.scores?.imdb ?? 'N/A'}
                Rotten Tomatoes: ${movie?.scores?.rottenTomatoes ?? 'N/A'}
                MetaCritic: ${movie?.scores?.metaCritic ?? 'N/A'}
              `,
            }))}
            singleOpen={true}
          />
        </div>
      )}
    </div>
  );
};

export default Main;
