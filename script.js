import React, { useEffect, useState } from 'react';
import './App.css';

const TMDB_API_KEY = '441324996b30403f1fbb497c436b3a77'; // Keep this secure in production!
const TMDB_BASE_URL = 'https://api.themoviedb.org/3';

function App() {
  const [movies, setMovies] = useState([]);
  const [selectedMood, setSelectedMood] = useState('');

  const fetchMoviesByMood = async (mood) => {
    try {
      const response = await fetch(
        `${TMDB_BASE_URL}/discover/movie?api_key=${TMDB_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_keywords=${mood}`
      );
      const data = await response.json();
      setMovies(data.results || []);
    } catch (error) {
      console.error('Error fetching movies:', error);
    }
  };

  useEffect(() => {
    if (selectedMood) {
      fetchMoviesByMood(selectedMood);
    }
  }, [selectedMood]);

  const handleMoodChange = (event) => {
    setSelectedMood(event.target.value);
  };

  return (
    <div className="App">
      <h1>BingeBuddy 🎬</h1>
      <p>Select your mood to get movie recommendations:</p>

      <select onChange={handleMoodChange} value={selectedMood}>
        <option value="">-- Choose a Mood --</option>
        <option value="happy">😊 Happy</option>
        <option value="sad">😢 Sad</option>
        <option value="excited">😆 Excited</option>
        <option value="romantic">❤️ Romantic</option>
        <option value="adventurous">🏔️ Adventurous</option>
      </select>

      <div className="movies">
        {movies.length > 0 ? (
          movies.map((movie) => (
            <div key={movie.id} className="movie-card">
              <img
                src={
                  movie.poster_path
                    ? `https://image.tmdb.org/t/p/w200${movie.poster_path}`
                    : 'https://via.placeholder.com/200x300?text=No+Image'
                }
                alt={movie.title}
              />
              <h3>{movie.title}</h3>
              <p>{movie.overview || 'No description available.'}</p>
            </div>
          ))
        ) : selectedMood ? (
          <p>No movies found for this mood 😞</p>
        ) : (
          <p>Please select a mood to begin!</p>
        )}
      </div>
    </div>
  );
}

export default App;
