// Movie recommendation app with sample movie data
// This version works without an API key

// Movie data
const movieData = {
    happy: [
        {
            id: 1,
            title: "The Grand Budapest Hotel",
            overview: "A writer encounters the owner of an aging high-class hotel, who tells him of his early years serving as a lobby boy in the hotel's glorious years under an exceptional concierge.",
            release_date: "2014-03-07",
            vote_average: 8.1,
            genre_ids: [35, 14],
            poster_path: null
        },
        {
            id: 2,
            title: "Paddington",
            overview: "A young Peruvian bear travels to London in search of a home. Finding himself lost and alone at Paddington Station, he meets the kindly Brown family.",
            release_date: "2014-11-28",
            vote_average: 7.2,
            genre_ids: [35, 10751],
            poster_path: null
        },
        {
            id: 3,
            title: "The Secret Life of Walter Mitty",
            overview: "When his job along with that of his co-worker are threatened, Walter takes action in the real world embarking on a global journey that turns into an adventure more extraordinary than anything he could have ever imagined.",
            release_date: "2013-12-25",
            vote_average: 7.3,
            genre_ids: [12, 35],
            poster_path: null
        }
    ],
    sad: [
        {
            id: 4,
            title: "The Fault in Our Stars",
            overview: "Hazel and Gus are two teenagers who share an acerbic wit, a disdain for the conventional, and a love that sweeps them on a journey.",
            release_date: "2014-06-06",
            vote_average: 7.7,
            genre_ids: [18, 10749],
            poster_path: null
        },
        {
            id: 5,
            title: "A Beautiful Mind",
            overview: "After John Nash, a brilliant but asocial mathematician, accepts secret work in cryptography, his life takes a turn for the nightmarish.",
            release_date: "2001-12-21",
            vote_average: 8.2,
            genre_ids: [18, 9648],
            poster_path: null
        },
        {
            id: 6,
            title: "The Notebook",
            overview: "An elderly man reads to a woman with dementia the story of two young lovers whose romance is threatened by the difference in their respective social classes.",
            release_date: "2004-06-25",
            vote_average: 7.8,
            genre_ids: [10749, 18],
            poster_path: null
        }
    ],
    excited: [
        {
            id: 7,
            title: "Mad Max: Fury Road",
            overview: "An apocalyptic story set in the furthest reaches of our planet, in a stark desert landscape where humanity is broken, and most everyone is crazed fighting for the necessities of life.",
            release_date: "2015-05-15",
            vote_average: 7.6,
            genre_ids: [28, 12],
            poster_path: null
        },
        {
            id: 8,
            title: "John Wick",
            overview: "An ex-hitman comes out of retirement to track down the gangsters that killed his dog and stole his car.",
            release_date: "2014-10-24",
            vote_average: 7.4,
            genre_ids: [28, 53],
            poster_path: null
        },
        {
            id: 9,
            title: "Mission: Impossible - Fallout",
            overview: "Ethan Hunt and his IMF team, along with some familiar allies, race against time after a mission gone wrong.",
            release_date: "2018-07-27",
            vote_average: 7.7,
            genre_ids: [28, 12],
            poster_path: null
        }
    ],
    relaxed: [
        {
            id: 10,
            title: "Spirited Away",
            overview: "During her family's move to the suburbs, a sullen 10-year-old girl wanders into a world ruled by gods, witches, and spirits, where humans are changed into beasts.",
            release_date: "2001-07-20",
            vote_average: 8.6,
            genre_ids: [16, 14],
            poster_path: null
        },
        {
            id: 11,
            title: "The Secret Garden",
            overview: "A young girl discovers a magical garden hidden at her strict uncle's estate.",
            release_date: "1993-08-13",
            vote_average: 7.3,
            genre_ids: [14, 10751],
            poster_path: null
        },
        {
            id: 12,
            title: "Big Fish",
            overview: "A frustrated son tries to determine the fact from fiction in his dying father's life.",
            release_date: "2003-12-25",
            vote_average: 7.7,
            genre_ids: [14, 18],
            poster_path: null
        }
    ],
    mysterious: [
        {
            id: 13,
            title: "Inception",
            overview: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
            release_date: "2010-07-16",
            vote_average: 8.8,
            genre_ids: [9648, 878],
            poster_path: null
        },
        {
            id: 14,
            title: "Gone Girl",
            overview: "With his wife's disappearance having become the focus of an intense media circus, a man sees the spotlight turned on him when it's suspected that he may not be innocent.",
            release_date: "2014-10-03",
            vote_average: 8.1,
            genre_ids: [9648, 53],
            poster_path: null
        },
        {
            id: 15,
            title: "The Prestige",
            overview: "After a tragic accident, two stage magicians engage in a battle to create the ultimate illusion while sacrificing everything they have to outwit each other.",
            release_date: "2006-10-20",
            vote_average: 8.5,
            genre_ids: [9648, 18],
            poster_path: null
        }
    ],
    romantic: [
        {
            id: 16,
            title: "La La Land",
            overview: "While navigating their careers in Los Angeles, a pianist and an actress fall in love while attempting to reconcile their aspirations for the future.",
            release_date: "2016-12-09",
            vote_average: 8.0,
            genre_ids: [10749, 18],
            poster_path: null
        },
        {
            id: 17,
            title: "Before Sunrise",
            overview: "A young man and woman meet on a train in Europe, and wind up spending one evening together in Vienna. Unfortunately, both know that this will probably be their only night together.",
            release_date: "1995-01-27",
            vote_average: 8.1,
            genre_ids: [10749, 18],
            poster_path: null
        },
        {
            id: 18,
            title: "Eternal Sunshine of the Spotless Mind",
            overview: "When their relationship turns sour, a couple undergoes a medical procedure to have each other erased from their memories.",
            release_date: "2004-03-19",
            vote_average: 8.3,
            genre_ids: [10749, 878],
            poster_path: null
        }
    ],
    action: [
        {
            id: 19,
            title: "The Dark Knight",
            overview: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
            release_date: "2008-07-18",
            vote_average: 9.0,
            genre_ids: [28, 80],
            poster_path: null
        },
        {
            id: 20,
            title: "Avengers: Endgame",
            overview: "After the devastating events of Avengers: Infinity War, the universe is in ruins due to the efforts of the Mad Titan, Thanos.",
            release_date: "2019-04-26",
            vote_average: 8.4,
            genre_ids: [28, 12],
            poster_path: null
        },
        {
            id: 21,
            title: "Die Hard",
            overview: "An action classic about a New York cop who single-handedly stops a terrorist organization from taking over a Los Angeles skyscraper.",
            release_date: "1988-07-20",
            vote_average: 8.2,
            genre_ids: [28, 53],
            poster_path: null
        }
    ],
    comedy: [
        {
            id: 22,
            title: "The Hangover",
            overview: "Three buddies wake up from a bachelor party in Las Vegas, with no memory of the previous night and the bachelor missing. They make their way around the city in order to find their friend before his wedding.",
            release_date: "2009-06-05",
            vote_average: 7.7,
            genre_ids: [35],
            poster_path: null
        },
        {
            id: 23,
            title: "Superbad",
            overview: "Two co-dependent high school seniors are forced to deal with separation anxiety after their plan to stage a booze-soaked party goes awry.",
            release_date: "2007-08-17",
            vote_average: 7.6,
            genre_ids: [35],
            poster_path: null
        },
        {
            id: 24,
            title: "Bridesmaids",
            overview: "Competition between the maid of honor and a bridesmaid, over who is the bride's best friend, threatens to upend the life of an out-of-work pastry chef.",
            release_date: "2011-05-13",
            vote_average: 6.8,
            genre_ids: [35, 10749],
            poster_path: null
        }
    ],
    drama: [
        {
            id: 25,
            title: "The Shawshank Redemption",
            overview: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
            release_date: "1994-09-23",
            vote_average: 9.3,
            genre_ids: [18, 80],
            poster_path: null
        },
        {
            id: 26,
            title: "Forrest Gump",
            overview: "The presidencies of Kennedy and Johnson, the Vietnam War, the Watergate scandal and other historical events unfold from the perspective of an Alabama man with an IQ of 75.",
            release_date: "1994-07-06",
            vote_average: 8.8,
            genre_ids: [18, 10749],
            poster_path: null
        },
        {
            id: 27,
            title: "The Green Mile",
            overview: "The lives of guards on Death Row are affected by one of their charges: a black man accused of child murder and rape, yet who has a mysterious gift.",
            release_date: "1999-12-10",
            vote_average: 8.6,
            genre_ids: [18, 80],
            poster_path: null
        }
    ],
    horror: [
        {
            id: 28,
            title: "The Shining",
            overview: "A family heads to an isolated hotel for the winter where a sinister presence influences the father into violence, while his psychic son sees horrific forebodings from both past and future.",
            release_date: "1980-05-23",
            vote_average: 8.4,
            genre_ids: [27, 53],
            poster_path: null
        },
        {
            id: 29,
            title: "A Quiet Place",
            overview: "In a post-apocalyptic world, a family is forced to live in silence while hiding from monsters with ultra-sensitive hearing.",
            release_date: "2018-04-06",
            vote_average: 7.5,
            genre_ids: [27, 53],
            poster_path: null
        },
        {
            id: 30,
            title: "Get Out",
            overview: "A young African-American visits his white girlfriend's parents for the weekend, where his simmering uneasiness about their reception of him eventually reaches a boiling point.",
            release_date: "2017-02-24",
            vote_average: 7.7,
            genre_ids: [27, 9648],
            poster_path: null
        }
    ],
    romance: [
        {
            id: 31,
            title: "Titanic",
            overview: "A seventeen-year-old aristocrat falls in love with a kind but poor artist aboard the luxurious, ill-fated R.M.S. Titanic.",
            release_date: "1997-12-19",
            vote_average: 7.9,
            genre_ids: [10749, 18],
            poster_path: null
        },
        {
            id: 32,
            title: "Pride and Prejudice",
            overview: "Sparks fly when spirited Elizabeth Bennet meets single, rich, and proud Mr. Darcy. But Mr. Darcy reluctantly finds himself falling in love with a woman beneath his class.",
            release_date: "2005-09-16",
            vote_average: 7.8,
            genre_ids: [10749, 18],
            poster_path: null
        },
        {
            id: 33,
            title: "500 Days of Summer",
            overview: "An offbeat romantic comedy about a woman who doesn't believe true love exists, and the young man who falls for her.",
            release_date: "2009-07-17",
            vote_average: 7.7,
            genre_ids: [10749, 35],
            poster_path: null
        }
    ],
    "sci-fi": [
        {
            id: 34,
            title: "Interstellar",
            overview: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
            release_date: "2014-11-07",
            vote_average: 8.6,
            genre_ids: [878, 18],
            poster_path: null
        },
        {
            id: 35,
            title: "Blade Runner 2049",
            overview: "A young blade runner's discovery of a long-buried secret leads him to track down former blade runner Rick Deckard, who's been missing for thirty years.",
            release_date: "2017-10-06",
            vote_average: 7.5,
            genre_ids: [878, 9648],
            poster_path: null
        },
        {
            id: 36,
            title: "Arrival",
            overview: "When twelve mysterious spacecraft appear around the world, linguistics professor Louise Banks is tasked with interpreting the language of the apparent alien visitors.",
            release_date: "2016-11-11",
            vote_average: 7.9,
            genre_ids: [878, 18],
            poster_path: null
        }
    ],
    thriller: [
        {
            id: 37,
            title: "The Silence of the Lambs",
            overview: "A young F.B.I. cadet must receive the help of an incarcerated and manipulative cannibal killer to help catch another serial killer, a madman who skins his victims.",
            release_date: "1991-02-14",
            vote_average: 8.6,
            genre_ids: [53, 80],
            poster_path: null
        },
        {
            id: 38,
            title: "Se7en",
            overview: "Two detectives, a rookie and a veteran, hunt a serial killer who uses the seven deadly sins as his modus operandi.",
            release_date: "1995-09-22",
            vote_average: 8.6,
            genre_ids: [53, 80],
            poster_path: null
        },
        {
            id: 39,
            title: "Zodiac",
            overview: "In the late 1969s and 1970s, fear grips the city of San Francisco as a serial killer called Zodiac stalks its residents.",
            release_date: "2007-03-02",
            vote_average: 7.7,
            genre_ids: [53, 80],
            poster_path: null
        }
    ],
    animation: [
        {
            id: 40,
            title: "Toy Story",
            overview: "A cowboy doll is profoundly threatened and jealous when a new spaceman figure supplants him as top toy in a boy's room.",
            release_date: "1995-10-30",
            vote_average: 8.3,
            genre_ids: [16, 35],
            poster_path: null
        },
        {
            id: 41,
            title: "Up",
            overview: "Seventy-eight year old Carl Fredricksen travels to Paradise Falls in his home equipped with balloons, inadvertently taking a young stowaway.",
            release_date: "2009-05-29",
            vote_average: 8.3,
            genre_ids: [16, 12],
            poster_path: null
        },
        {
            id: 42,
            title: "Spider-Man: Into the Spider-Verse",
            overview: "Teen Miles Morales becomes the Spider-Man of his universe, and must join with five spider-powered individuals from other dimensions to stop a threat for all realities.",
            release_date: "2018-12-14",
            vote_average: 8.4,
            genre_ids: [16, 28],
            poster_path: null
        }
    ]
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
    
    // Simulate loading delay
    setTimeout(() => {
        try {
            let movies;
            if (currentSelection.mood) {
                movies = getMoviesByMood(currentSelection.mood);
            } else {
                movies = getMoviesByGenre(currentSelection.genre);
            }
            
            displayMovies(movies);
            showResults();
        } catch (error) {
            console.error('Error fetching movies:', error);
            alert('Sorry, there was an error fetching movies. Please try again.');
            showSearch();
        }
    }, 1500);
}

function getMoviesByMood(mood) {
    return movieData[mood] || [];
}

function getMoviesByGenre(genre) {
    return movieData[genre] || [];
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
    
    const genres = movie.genre_ids ? getGenreNames(movie.genre_ids) : [];
    
    card.innerHTML = `
        <div class="movie-poster">
            <i class="fas fa-film" style="font-size: 3rem; color: #667eea;"></i>
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

function showMovieDetails(movie) {
    const funFacts = generateFunFacts(movie);
    displayMovieModal(movie, funFacts);
    movieModal.style.display = 'block';
}

function generateFunFacts(movie) {
    const facts = [];
    
    // Runtime fact (simulated)
    const runtime = Math.floor(Math.random() * 60) + 90; // 90-150 minutes
    facts.push(`The movie runs for approximately ${runtime} minutes.`);
    
    // Release year fact
    const releaseYear = new Date(movie.release_date).getFullYear();
    facts.push(`Released in ${releaseYear}.`);
    
    // Rating fact
    facts.push(`Rated ${movie.vote_average.toFixed(1)}/10 by viewers.`);
    
    // Genre fact
    const genres = getGenreNames(movie.genre_ids);
    if (genres.length > 0) {
        facts.push(`Classified as ${genres.join(', ')}.`);
    }
    
    // Random fun facts based on genre
    if (movie.genre_ids.includes(35)) { // Comedy
        facts.push("This comedy is sure to brighten your day!");
    }
    if (movie.genre_ids.includes(28)) { // Action
        facts.push("Packed with thrilling action sequences.");
    }
    if (movie.genre_ids.includes(10749)) { // Romance
        facts.push("A heartwarming love story that will touch your soul.");
    }
    if (movie.genre_ids.includes(27)) { // Horror
        facts.push("Not for the faint of heart - prepare to be scared!");
    }
    if (movie.genre_ids.includes(16)) { // Animation
        facts.push("Beautifully animated with stunning visuals.");
    }
    
    return facts;
}

function displayMovieModal(movie, funFacts) {
    const genres = movie.genre_ids ? getGenreNames(movie.genre_ids) : [];
    
    modalBody.innerHTML = `
        <div class="modal-movie-header">
            <div class="modal-poster">
                <i class="fas fa-film" style="font-size: 4rem; color: #667eea;"></i>
            </div>
            <div class="modal-movie-details">
                <h2>${movie.title}</h2>
                <div class="modal-movie-meta">
                    <div class="modal-rating">
                        <i class="fas fa-star"></i>
                        <span>${movie.vote_average.toFixed(1)}</span>
                    </div>
                    <span class="modal-year">${new Date(movie.release_date).getFullYear()}</span>
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
    
    console.log('BingeBuddy Movie Recommender loaded! 🎬');
    console.log('Ready to discover amazing movies!');
}); 