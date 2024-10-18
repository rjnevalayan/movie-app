import { useState } from 'react';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function SearchComponent({ SearchMovie }) {
    const [plot, setPlot] = useState('');
    const [movieName, setMovieName] = useState('');
    const [releaseDate, setReleaseDate] = useState('');

    const handlePlotChange = (event) => {
        setPlot(event.target.value);
    };

    const handleMovieNameChange = (event) => {
        setMovieName(event.target.value);
    };

    const handleReleaseDateChange = (event) => {
        setReleaseDate(event.target.value);
    };

    const handleSearch = () => {
        SearchMovie({ movieName, releaseDate, plot });
    };

    const handleReleaseDateBlur = () => {
        if (releaseDate < 0) {
            setReleaseDate(0);
        }
    };

    return (
        <Box
            className="search-component-container"
            component="form"
            sx={{
                display: 'flex',
                alignItems: 'center',
                backgroundColor: '#8EC7D2',
                padding: 2,
                borderRadius: 1,
                boxShadow: 3,
                flexWrap: 'wrap',
                marginBottom: 5
            }}
            noValidate
            autoComplete="off"
        >
            <Typography 
                variant="h5" 
                sx={{ 
                    marginRight: 2, 
                    color: '#07485B', 
                    display: 'flex', 
                    justifyContent: 'center', 
                    width: '100%', 
                    mb: 2,
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 'bold',
                    marginBottom: 2
                }}
            >
                MOVIE SEARCH
            </Typography>

            <Box
                sx={{
                    display: 'flex',            
                    justifyContent: 'center',   
                    alignItems: 'center',     
                    width: '100%',
                    marginRight: 2,
                    flexWrap: 'wrap',          
                }}
            >
                <TextField
                    label="Movie Title"
                    id="movie-name"
                    variant="filled"
                    sx={{ 
                        marginBottom: 2, 
                        width: '250px', 
                        fontFamily: 'Inter, sans-serif', 
                        '& .MuiFilledInput-root': {
                            color: '#07485B',
                        },
                        '& .MuiInputLabel-root': {
                            color: '#07485B',
                        },
                        '& .MuiFilledInput-root:after': {
                            borderBottomColor: '#07485B',
                        },
                    }}
                    value={movieName}
                    onChange={handleMovieNameChange}
                />
                <TextField
                    id="movie-release-date"
                    label="Movie Release Date (Year)"
                    variant="filled"
                    type="number"
                    sx={{
                        marginLeft: 6,
                        marginBottom: 2,
                        width: '250px',
                        fontFamily: 'Inter, sans-serif',
                        '& .MuiFilledInput-root': {
                            color: '#07485B',
                        },
                        '& .MuiInputLabel-root': {
                            color: '#07485B',
                        },
                        '& .MuiFilledInput-root:after': {
                            borderBottomColor: '#07485B',
                        },
                    }}
                    value={releaseDate}
                    onChange={handleReleaseDateChange}
                    onBlur={handleReleaseDateBlur}
                />

                <FormControl sx={{ marginLeft: 6, marginBottom: 2, width: '250px' }}>
                    <InputLabel id="select-plot" sx={{ fontFamily: 'Inter, sans-serif', color: '#07485B' }}>Plot</InputLabel>
                    <Select
                        labelId="select-plot"
                        id="select-plot"
                        value={plot}
                        label="Plot"
                        onChange={handlePlotChange}
                        sx={{ 
                            fontFamily: 'Inter, sans-serif', 
                            color: '#07485B',
                            '& .MuiSelect-icon': {
                                color: '#07485B',
                            },
                            '& .MuiOutlinedInput-root': {
                                '& fieldset': {
                                    borderWidth: 2,
                                },
                                '&:hover fieldset': {
                                    borderWidth: 2,
                                },
                                '&.Mui-focused fieldset': {
                                    borderWidth: 2, 
                                },
                            },
                        }} 
                    >
                        <MenuItem value={'short'}>Short</MenuItem>
                        <MenuItem value={'full'}>Full</MenuItem>
                    </Select>
                </FormControl>

                <Button 
                    sx={{ 
                        marginLeft: 6, 
                        minWidth: 120, 
                        marginBottom: 2, 
                        fontFamily: 'Inter, sans-serif', 
                        color: 'white',
                    }} 
                    variant="contained" 
                    onClick={handleSearch}
                >
                    Search
                </Button>
            </Box>


            
        </Box>
    );
}
