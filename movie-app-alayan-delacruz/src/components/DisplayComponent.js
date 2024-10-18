import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import DashboardIcon from '@mui/icons-material/Dashboard';
import CircularProgress from '@mui/material/CircularProgress';

const defaultMovies = [
  { Title: "Inception", Plot: "A thief who steals corporate secrets through the use of dream-sharing technology." },
  { Title: "The Matrix", Plot: "A computer hacker learns from mysterious rebels about the true nature of his reality." },
  { Title: "Avatar", Plot: "A paraplegic Marine dispatched to the moon Pandora on a unique mission." },
  { Title: "Titanic", Plot: "A seventeen-year-old aristocrat falls in love with a kind but poor artist." },
  { Title: "Interstellar", Plot: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival." },
  { Title: "The Dark Knight", Plot: "When the menace known as the Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham." },
  { Title: "Forrest Gump", Plot: "The presidencies of Kennedy and Johnson, the Vietnam War, the Watergate scandal, and other historical events unfold through the perspective of an Alabama man." },
  { Title: "Gladiator", Plot: "A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family and sent him into slavery." },
];

const apiKey = '5b7da36';

export default function DisplayComponent({ movie, isLoading, error }) {
  const [fetchedMovies, setFetchedMovies] = React.useState([]);

  const fetchPosters = () => {
    const promises = defaultMovies.map((movie) => {
      return fetch(`https://www.omdbapi.com/?t=${encodeURIComponent(movie.Title)}&apikey=${apiKey}`)
        .then((response) => response.json())
        .then((data) => {
          if (data.Response === "True") {
            return { ...movie, Poster: data.Poster };
          } else {
            return { ...movie, Poster: "https://via.placeholder.com/400x600?text=No+Poster+Available" };
          }
        });
    });

    Promise.all(promises).then((moviesWithPosters) => {
      setFetchedMovies(moviesWithPosters);
    });
  };

  const shuffleArray = (array) => {
    return array.sort(() => Math.random() - 0.5);
  };

  React.useEffect(() => {
    fetchPosters();
  }, []);

  const randomMovies = shuffleArray([...defaultMovies]).slice(0, 5);

  if (isLoading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', padding: 4 }}>
        <CircularProgress size={60} />
      </Box>
    );
  }

  if (error) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', padding: 4 }}>
        <Paper elevation={3} sx={{ 
          p: 4, 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center', 
          width: '90%',      
          height: '90%',     
          borderRadius: '16px',
          boxShadow: 4,
          justifyContent: 'center',
          overflow: 'hidden',
          backgroundColor: '#d4fafa'
        }}>
          <Typography variant="h4" sx={{ textAlign: 'center', mb: 2, color: 'error.main' }}>
            Movie Title not found!
          </Typography>
        </Paper>
      </Box>
    );
  }

  if (!movie) {
    const shuffledMovies = fetchedMovies.length > 0 ? 
      fetchedMovies.sort(() => 0.5 - Math.random()).slice(0, 5) : randomMovies;

    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', padding: 4 }}>
        <Paper elevation={3} sx={{ 
          p: 4, 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center', 
          width: '90%',      
          height: '90%',     
          borderRadius: '16px',
          boxShadow: 4,
          justifyContent: 'center',
          overflow: 'hidden',
          fontFamily: 'Inter, sans-serif',
          backgroundColor: '#8EC7D2'
        }}>
          <Typography variant="h4" sx={{ textAlign: 'center', mb: 2, color: '#07485B', fontWeight: 600, marginBottom: 5 }}>
            Your Next Watch
          </Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 2 }}>
            {shuffledMovies.map((randomMovie) => (
              <Paper elevation={2} sx={{ p: 1, textAlign: 'center', width: '200px' }} key={randomMovie.Title}>
                <img 
                  src={randomMovie.Poster}
                  alt={randomMovie.Title}
                  style={{ 
                    width: '100%', 
                    height: 'auto', 
                    objectFit: 'cover', 
                    borderRadius: '8px' 
                  }} 
                />
                <Typography variant="body2">{randomMovie.Title}</Typography>
              </Paper>
            ))}
          </Box>
        </Paper>
      </Box>
    );
  }

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start', height: '100vh', padding: 4 }}>
      <Paper elevation={3} sx={{ 
        p: 4, 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        width: '100%',      
        height: 'auto',
        maxHeight: '100%',
        borderRadius: '16px',
        boxShadow: 4,
        overflow: 'auto',
        backgroundColor: '#2e3b4e'
      }}>
        <img 
          src={movie.Poster}
          alt="Movie Poster"
          style={{ 
            width: '100%', 
            maxWidth: '300px',
            height: 'auto',
            objectFit: 'cover', 
            borderRadius: '8px', 
            marginBottom: '16px' 
          }} 
        />
        <Typography variant="h4" sx={{ textAlign: 'center' }}>
          {movie.Title}
        </Typography>
        <Typography variant="body1" sx={{ textAlign: 'center', paddingRight: 50, paddingLeft: 50, marginTop: 5 }}>
          {movie.Plot}
        </Typography>
      </Paper>
    </Box>
  );
}
