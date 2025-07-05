# 🎬 BingeBuddy - AI-Powered Movie FunFact Recommender

A modern, responsive web application that suggests movies based on your mood or genre preferences and provides interesting trivia and fun facts about each film.

## ✨ Features

- **Mood-Based Recommendations**: Choose your current mood and get movie suggestions that match
- **Genre-Based Search**: Browse movies by specific genres
- **Rich Movie Information**: Detailed movie cards with ratings, genres, and overviews
- **Fun Facts & Trivia**: Click on any movie to see interesting facts about budget, cast, production, and more
- **Modern UI/UX**: Beautiful, responsive design that works on all devices
- **Real-time API Integration**: Powered by TMDb (The Movie Database) API

## 🎯 How It Works

1. **Select Your Mood**: Choose from Happy, Sad, Excited, Relaxed, Mysterious, or Romantic
2. **Or Pick a Genre**: Browse by Action, Comedy, Drama, Horror, Romance, Sci-Fi, Thriller, or Animation
3. **Get Recommendations**: View curated movie suggestions based on your selection
4. **Discover Fun Facts**: Click on any movie to learn interesting trivia and behind-the-scenes information

## 🚀 Quick Start

### Option 1: Try the App (No Setup Required)

1. **Open `demo.html`** in your web browser
2. **Start exploring!** Select a mood or genre and see movie recommendations
3. **Click on movies** to see fun facts and trivia

### Option 2: Full Version with Real Data

#### Prerequisites
- A modern web browser
- TMDb API key (free)

#### Setup Instructions

1. **Get Your TMDb API Key**:
   - Visit [TMDb Settings](https://www.themoviedb.org/settings/api)
   - Create a free account if you don't have one
   - Request an API key (choose "Developer" option)
   - Copy your API key

2. **Configure the App**:
   - Open `script.js` in your code editor
   - Replace `'YOUR_TMDB_API_KEY'` on line 2 with your actual API key:
   ```javascript
   const TMDB_API_KEY = 'your_actual_api_key_here';
   ```

3. **Run the Application**:
   - Open `index.html` in your web browser
   - Or serve the files using a local server:
   ```bash
   # Using Python 3
   python -m http.server 8000
   
   # Using Node.js (if you have http-server installed)
   npx http-server
   ```

4. **Start Exploring**:
   - Select your mood or genre
   - Click "Find Movies"
   - Browse recommendations and click on movies for fun facts!

## 📁 Project Structure

```
binge-buddy/
├── index.html          # Main HTML file with TMDb API integration
├── demo.html           # HTML file with sample data (no API key needed)
├── styles.css          # CSS styles and responsive design
├── script.js           # JavaScript functionality and API integration
├── demo.js             # JavaScript with sample movie data
├── package.json        # Project configuration
├── README.md           # This file
└── QUICKSTART.md       # Quick setup guide
```

## 🎨 Features in Detail

### Mood Mapping
The app intelligently maps moods to movie genres:
- **Happy** → Comedy, Family
- **Sad** → Drama, Romance  
- **Excited** → Action, Adventure
- **Relaxed** → Animation, Fantasy
- **Mysterious** → Mystery, Thriller
- **Romantic** → Romance, Drama

### Fun Facts Generation
Each movie displays interesting facts including:
- Budget and box office revenue
- Runtime and release date
- Director and main cast
- Production companies
- Original language
- Production status

### Responsive Design
- Works perfectly on desktop, tablet, and mobile
- Modern gradient backgrounds and smooth animations
- Intuitive navigation and user experience

## 🔧 Technical Details

### APIs Used
- **TMDb API**: For movie data, recommendations, and metadata
- **TMDb Images**: For movie posters and artwork

### Key Technologies
- **Vanilla JavaScript**: No frameworks required
- **CSS3**: Modern styling with Flexbox and Grid
- **HTML5**: Semantic markup
- **Font Awesome**: Icons
- **Google Fonts**: Typography

### Browser Compatibility
- Chrome (recommended)
- Firefox
- Safari
- Edge

## 🛠️ Customization

### Adding New Moods
To add new moods, edit the `moodToGenres` object in `script.js`:
```javascript
const moodToGenres = {
    'happy': [35, 10751],
    'your_new_mood': [genre_id_1, genre_id_2],
    // ...
};
```

### Adding New Genres
To add new genres, update the `genreIds` object:
```javascript
const genreIds = {
    'action': 28,
    'your_new_genre': genre_id,
    // ...
};
```

### Styling Customization
Modify `styles.css` to customize:
- Color scheme
- Typography
- Layout and spacing
- Animations and transitions

## 🐛 Troubleshooting

### Common Issues

1. **Movies not loading**:
   - Check your API key is correct
   - Ensure you have an active internet connection
   - Verify the TMDb API is accessible

2. **Images not displaying**:
   - Some movies may not have poster images
   - The app shows a film icon as fallback

3. **Fun facts not showing**:
   - Some movies may have limited metadata
   - Check the browser console for errors

### API Rate Limits
TMDb API has generous rate limits for free accounts, but if you encounter issues:
- Wait a few minutes before making new requests
- Consider upgrading to a paid plan for higher limits

## 📝 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Feel free to contribute to this project by:
- Reporting bugs
- Suggesting new features
- Improving the UI/UX
- Adding more fun facts sources

## 🙏 Acknowledgments

- **TMDb**: For providing the comprehensive movie database API
- **Font Awesome**: For the beautiful icons
- **Google Fonts**: For the Inter font family

## 📞 Support

If you encounter any issues or have questions:
1. Check the troubleshooting section above
2. Review the browser console for error messages
3. Ensure your API key is valid and active

---

**Happy movie watching! 🍿** 