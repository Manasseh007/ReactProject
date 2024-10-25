import React, { useEffect, useState } from 'react';
import '../styles.css';
import MovieCard from './MovieCard';

export default function MoviesGrid({movies, watchlist, toggleWatchlist}) {

    const [searchTerm, setSearchTerm] = useState("");

    const [genre, setGenre] = useState("All Genres");
    const [rating, setRating] = useState("All Ratings");

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    }

    const handleGenreChange = (e) => {
        setGenre(e.target.value);
    }

    const handleRatingChange = (e) => {
        setRating(e.target.value);
    }

    const matchesGenre = (movie, genre) => {
        return genre === "All Genres" || movie.genre.toLowerCase() === genre.toLowerCase();
    }

    const matchesSearchGenre = (movie, genre) => {
        return movie.title.toLowerCase().includes(searchTerm.toLowerCase());
    }

    const matchesRating = (movie, rating) => {

        switch(rating) {
            case "All":
                return true;
            case "Good":
                return movie.rating >= 8;
            case "Ok":
                return movie.rating >= 5 && movie.rating < 8;
            case "Bad":
                return movie.rating < 5;
            default:
                return true;
        }
    }

    const filteredMovies = movies.filter((movie) => 
        matchesGenre(movie, genre) && matchesRating(movie, rating) && matchesSearchGenre(movie, searchTerm)
        //movie.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return(
        <div>
            <input 
                type="text" 
                placeholder='Search movies...' 
                className='search-input' 
                onChange={handleSearchChange}
                value={searchTerm}
            />

            <div className='filter-bar'>
                <div className='filter-slot'>
                    <label>Genre</label>
                    <select className='filter-dropdown' value={genre} onChange={handleGenreChange}>
                        <option>All Genres</option>
                        <option>Action</option>
                        <option>Drama</option>
                        <option>Fantasy</option>
                        <option>Horror</option>
                    </select>
                </div>
                <div className='filter-slot'>
                    <label>Rating</label>
                    <select className='filter-dropdown' value={rating} onChange={handleRatingChange}>
                        <option>All</option>
                        <option>Good</option>
                        <option>Ok</option>
                        <option>Bad</option>
                    </select>
                </div>
            </div>

            <div className='movies-grid'>
            {
                filteredMovies.map(movie => (
                    <MovieCard 
                    movie={movie} 
                    key={movie.id} 
                    toggleWatchlist={toggleWatchlist}>
                    isWatchlisted={watchlist.includes(movie.id)}
                    </MovieCard>
                ))
            }
            </div>
        </div>
        
    );
}