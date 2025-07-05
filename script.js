// TMDb API Configuration
const TMDB_API_KEY = 441324996b30403f1fbb497c436b3a77; // You'll need to get this from https://www.themoviedb.org/settings/api
const TMDB_BASE_URL = 'https://api.themoviedb.org/3';

// Mood to Genre Mapping
const moodToGenres = {
    'happy': [35, 10751], // Comedy, Family
    'sad': [18, 10749], // Drama, Romance
    'excited': [28, 12], // Action, Adventure
    'relaxed': [16, 14], // Animation, Fantasy
    'mysterious': [9648, 53], // Mystery, Thriller
    'romantic': [10749, 18] // Romance, Drama
};

// Genre IDs mapping
const genreIds = {
    'action': 28,
    'comedy': 35,
    'drama': 18,
    'horror': 27,
    'romance': 10749,
    'sci-fi': 878,
    'thriller': 53,
    'animation': 16
};

// State management
let currentSelection = {
    mood: null,
    genre: null
};

// DOM Elements
const searchBtn = document.getElementById('searchBtn');
const newSearchBtn = document.getElementById('newSearchBtn');
const loadingSection = document.getElementById('loadingSection');
const resultsSection = document.getElementById('resultsSection');
const moviesGrid = document.getElementById('moviesGrid');
const movieModal = document.getElementById('movieModal');
const modalBody = document.getElementById('modalBody');
const closeModal = document.getElementById('closeModal');

// Event Listeners
document.addEventListener('DOMContentLoaded', function() {
    setupEventListeners();
});

function setupEventListeners() {
    // Mood buttons
    document.querySelectorAll('.mood-btn').forEach(btn => {
        btn.addEventListener('click', () => selectMood(btn));
    });

    // Genre buttons
    document.querySelectorAll('.genre-btn').forEach(btn => {
        btn.addEventListener('click', () => selectGenre(btn));
    });

    // Search button
    searchBtn.addEventListener('click', handleSearch);

    // New search button
    newSearchBtn.addEventListener('click', resetToSearch);

    // Modal close
    closeModal.addEventListener('click', () => {
        movieModal.style.display = 'none';
    });

    // Close modal when clicking outside
    window.addEventListener('click', (e) => {
        if (e.target === movieModal) {
            movieModal.style.display = 'none';
        }
    });
}

function selectMood(btn) {
    // Clear previous selections
    document.querySelectorAll('.mood-btn').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.genre-btn').forEach(b => b.classList.remove('active'));
    
    // Select current mood
    btn.classList.add('active');
    currentSelection.mood = btn.dataset.mood;
    currentSelection.genre = null;
    
    // Enable search button
    searchBtn.disabled = false;
}

function selectGenre(btn) {
    // Clear previous selections
    document.querySelectorAll('.mood-btn').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.genre-btn').forEach(b => b.classList.remove('active'));
    
    // Select current genre
    btn.classList.add('active');
    currentSelection.genre = btn.dataset.genre;
    currentSelection.mood = null;
    
    // Enable search button
    searchBtn.disabled = false;
}

async function handleSearch() {
    if (!currentSelection.mood && !currentSelection.genre) {
        alert('Please select a mood or genre first!');
        return;
    }

    showLoading();
    
    try {
        let movies;
        if (currentSelection.mood) {
            movies = await getMoviesByMood(currentSelection.mood);
        } else {
            movies = await getMoviesByGenre(currentSelection.genre);
        }
        
        displayMovies(movies);
        showResults();
    } catch (error) {
        console.error('Error fetching movies:', error);
        alert('Sorry, there was an error fetching movies. Please try again.');
        showSearch();
    }
}

async function getMoviesByMood(mood) {
    const genres = moodToGenres[mood];
    const promises = genres.map(genreId => 
        fetch(`${TMDB_BASE_URL}/discover/movie?api_key=${TMDB_API_KEY}&with_genres=${genreId}&sort_by=popularity.desc&page=1`)
            .then(response => response.json())
    );
    
    const results = await Promise.all(promises);
    const allMovies = results.flatMap(result => result.results);
    
    // Remove duplicates and get top 12
    const uniqueMovies = allMovies.filter((movie, index, self) => 
        index === self.findIndex(m => m.id === movie.id)
    );
    
    return uniqueMovies.slice(0, 12);
}

async function getMoviesByGenre(genre) {
    const genreId = genreIds[genre];
    const response = await fetch(`${TMDB_BASE_URL}/discover/movie?api_key=${TMDB_API_KEY}&with_genres=${genreId}&sort_by=popularity.desc&page=1`);
    const data = await response.json();
    return data.results.slice(0, 12);
}

function displayMovies(movies) {
    moviesGrid.innerHTML = '';
    
    movies.forEach(movie => {
        const movieCard = createMovieCard(movie);
        moviesGrid.appendChild(movieCard);
    });
}

function createMovieCard(movie) {
    const card = document.createElement('div');
    card.className = 'movie-card';
    card.addEventListener('click', () => showMovieDetails(movie));
    
    const posterUrl = movie.poster_path 
        ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
        : null;
    
    const genres = movie.genre_ids ? getGenreNames(movie.genre_ids) : [];
    
    card.innerHTML = `
        <div class="movie-poster">
            ${posterUrl 
                ? `<img src="${posterUrl}" alt="${movie.title}" loading="lazy">`
                : `<i class="fas fa-film" style="font-size: 3rem;"></i>`
            }
        </div>
        <div class="movie-info">
            <h3 class="movie-title">${movie.title}</h3>
            <div class="movie-meta">
                <span>${new Date(movie.release_date).getFullYear()}</span>
                <div class="movie-rating">
                    <i class="fas fa-star"></i>
                    <span>${movie.vote_average.toFixed(1)}</span>
                </div>
            </div>
            <div class="movie-genres">
                ${genres.slice(0, 3).map(genre => 
                    `<span class="genre-tag">${genre}</span>`
                ).join('')}
            </div>
            <p class="movie-overview">${movie.overview || 'No overview available.'}</p>
        </div>
    `;
    
    return card;
}

function getGenreNames(genreIds) {
    const genreMap = {
        28: 'Action', 12: 'Adventure', 16: 'Animation', 35: 'Comedy',
        80: 'Crime', 99: 'Documentary', 18: 'Drama', 10751: 'Family',
        14: 'Fantasy', 36: 'History', 27: 'Horror', 10402: 'Music',
        9648: 'Mystery', 10749: 'Romance', 878: 'Sci-Fi', 10770: 'TV Movie',
        53: 'Thriller', 10752: 'War', 37: 'Western'
    };
    
    return genreIds.map(id => genreMap[id]).filter(Boolean);
}

async function showMovieDetails(movie) {
    try {
        // Fetch additional movie details including fun facts
        const [movieDetails, credits, videos] = await Promise.all([
            fetch(`${TMDB_BASE_URL}/movie/${movie.id}?api_key=${TMDB_API_KEY}`).then(r => r.json()),
            fetch(`${TMDB_BASE_URL}/movie/${movie.id}/credits?api_key=${TMDB_API_KEY}`).then(r => r.json()),
            fetch(`${TMDB_BASE_URL}/movie/${movie.id}/videos?api_key=${TMDB_API_KEY}`).then(r => r.json())
        ]);
        
        const funFacts = generateFunFacts(movieDetails, credits, videos);
        
        displayMovieModal(movie, movieDetails, funFacts);
        movieModal.style.display = 'block';
    } catch (error) {
        console.error('Error fetching movie details:', error);
        alert('Sorry, there was an error loading movie details.');
    }
}

function generateFunFacts(movieDetails, credits, videos) {
    const facts = [];
    
    // Budget and revenue facts
    if (movieDetails.budget > 0) {
        facts.push(`This movie had a budget of $${(movieDetails.budget / 1000000).toFixed(1)} million.`);
    }
    
    if (movieDetails.revenue > 0) {
        facts.push(`It grossed $${(movieDetails.revenue / 1000000).toFixed(1)} million worldwide.`);
    }
    
    // Runtime fact
    if (movieDetails.runtime > 0) {
        facts.push(`The movie runs for ${movieDetails.runtime} minutes.`);
    }
    
    // Director fact
    const director = credits.crew.find(person => person.job === 'Director');
    if (director) {
        facts.push(`Directed by ${director.name}.`);
    }
    
    // Cast facts
    if (credits.cast.length > 0) {
        const mainCast = credits.cast.slice(0, 3).map(actor => actor.name).join(', ');
        facts.push(`Stars ${mainCast}.`);
    }
    
    // Production companies
    if (movieDetails.production_companies.length > 0) {
        const companies = movieDetails.production_companies.slice(0, 2).map(company => company.name).join(' and ');
        facts.push(`Produced by ${companies}.`);
    }
    
    // Release date fact
    if (movieDetails.release_date) {
        const releaseDate = new Date(movieDetails.release_date);
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        facts.push(`Released on ${releaseDate.toLocaleDateString('en-US', options)}.`);
    }
    
    // Original language fact
    if (movieDetails.original_language !== 'en') {
        const languageNames = {
            'es': 'Spanish', 'fr': 'French', 'de': 'German', 'it': 'Italian',
            'pt': 'Portuguese', 'ru': 'Russian', 'ja': 'Japanese', 'ko': 'Korean',
            'zh': 'Chinese', 'hi': 'Hindi'
        };
        const language = languageNames[movieDetails.original_language] || movieDetails.original_language;
        facts.push(`Originally filmed in ${language}.`);
    }
    
    // Status fact
    if (movieDetails.status) {
        facts.push(`Production status: ${movieDetails.status}.`);
    }
    
    return facts;
}

function displayMovieModal(movie, movieDetails, funFacts) {
    const posterUrl = movie.poster_path 
        ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
        : null;
    
    const genres = movieDetails.genres ? movieDetails.genres.map(g => g.name) : [];
    
    modalBody.innerHTML = `
        <div class="modal-movie-header">
            <img src="${posterUrl || ''}" alt="${movie.title}" class="modal-poster" 
                 onerror="this.style.display='none'">
            <div class="modal-movie-details">
                <h2>${movie.title}</h2>
                <div class="modal-movie-meta">
                    <div class="modal-rating">
                        <i class="fas fa-star"></i>
                        <span>${movie.vote_average.toFixed(1)}</span>
                    </div>
                    <span class="modal-year">${new Date(movie.release_date).getFullYear()}</span>
                    ${movieDetails.runtime ? `<span class="modal-runtime">${movieDetails.runtime} min</span>` : ''}
                </div>
                <div class="modal-genres">
                    ${genres.map(genre => `<span class="modal-genre-tag">${genre}</span>`).join('')}
                </div>
            </div>
        </div>
        
        <div class="modal-overview">
            ${movie.overview || 'No overview available.'}
        </div>
        
        <div class="modal-fun-facts">
            <h3><i class="fas fa-lightbulb"></i> Fun Facts</h3>
            ${funFacts.map(fact => `<div class="fun-fact">${fact}</div>`).join('')}
        </div>
    `;
}

function showLoading() {
    document.querySelector('.search-section').style.display = 'none';
    loadingSection.style.display = 'block';
    resultsSection.style.display = 'none';
}

function showResults() {
    document.querySelector('.search-section').style.display = 'none';
    loadingSection.style.display = 'none';
    resultsSection.style.display = 'block';
}

function showSearch() {
    document.querySelector('.search-section').style.display = 'block';
    loadingSection.style.display = 'none';
    resultsSection.style.display = 'none';
}

function resetToSearch() {
    // Clear selections
    document.querySelectorAll('.mood-btn').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.genre-btn').forEach(b => b.classList.remove('active'));
    currentSelection = { mood: null, genre: null };
    searchBtn.disabled = true;
    
    showSearch();
}

// Initialize the app
document.addEventListener('DOMContentLoaded', function() {
    // Disable search button initially
    searchBtn.disabled = true;
    
    // Add some sample fun facts for demonstration
    console.log('BingeBuddy Movie Recommender loaded! 🎬');
    console.log('Note: You need to add your TMDb API key to make this work.');
    console.log('Get your free API key at: https://www.themoviedb.org/settings/api');
}); 
