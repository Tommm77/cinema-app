import React, { useState, useEffect } from 'react';
import axios from '../api/axios';

function Movies() {
    const [movies, setMovies] = useState([]);
    const [newMovieTitle, setNewMovieTitle] = useState('');
    const [newMovieDescription, setNewMovieDescription] = useState('');
    const [newMovieReleaseDate, setNewMovieReleaseDate] = useState('');
    const [newMovieStatus, setNewMovieStatus] = useState('');

    useEffect(() => {
        fetchMovies();
    }, []);

    const fetchMovies = async () => {
        try {
            const response = await axios.get('/movies');
            setMovies(response.data);
        } catch (error) {
            console.error('Error fetching movies:', error.response ? error.response.data : "No response");
        }
    };

    const handleCreateMovie = async () => {
        try {
            const response = await axios.post('/movies', {
                title: newMovieTitle,
                description: newMovieDescription,
                releaseDate: newMovieReleaseDate,
                status: newMovieStatus
            });
            setNewMovieTitle('');
            setNewMovieDescription('');
            setNewMovieReleaseDate('');
            setNewMovieStatus('');
            fetchMovies();
        } catch (error) {
            console.error('Error creating movie:', error.response ? error.response.data : "No response");
        }
    };

    const handleDeleteMovie = async (id) => {
        try {
            await axios.delete(`/movies/${id}`);
            fetchMovies();
        } catch (error) {
            console.error('Error deleting movie:', error.response ? error.response.data : "No response");
        }
    };

    return (
        <div className="container mx-auto mt-10">
            <h1 className="text-3xl font-bold mb-5">Mes Films</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {movies.map(movie => (
                    <div key={movie.id} className="bg-white rounded shadow-md p-4">
                        <h2 className="text-xl font-bold mb-2">{movie.title}</h2>
                        <p className="text-gray-700 mb-4">{movie.description}</p>
                        <p className="text-gray-500">Date de sortie: {movie.releaseDate}</p>
                        <p className="text-gray-500">Statut: {movie.status}</p>
                        <button onClick={() => handleDeleteMovie(movie._id)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                            Supprimer
                        </button>
                    </div>
                ))}
            </div>
            <h2 className="text-xl font-bold mt-8 mb-2">Ajouter un nouveau film</h2>
            <form onSubmit={handleCreateMovie} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="newMovieTitle">
                        Titre
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="newMovieTitle"
                        type="text"
                        placeholder="Titre"
                        value={newMovieTitle}
                        onChange={(e) => setNewMovieTitle(e.target.value)}
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="newMovieDescription">
                        Description
                    </label>
                    <textarea
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                        id="newMovieDescription"
                        placeholder="Description"
                        value={newMovieDescription}
                        onChange={(e) => setNewMovieDescription(e.target.value)}
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="newMovieReleaseDate">
                        Date de sortie
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                        id="newMovieReleaseDate"
                        type="date"
                        value={newMovieReleaseDate}
                        onChange={(e) => setNewMovieReleaseDate(e.target.value)}
                    />
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="newMovieStatus">
                        Statut
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                        id="newMovieStatus"
                        type="text"
                        placeholder="Statut"
                        value={newMovieStatus}
                        onChange={(e) => setNewMovieStatus(e.target.value)}
                    />
                </div>
                <div className="flex items-center justify-between">
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="submit"
                    >
                        Ajouter
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Movies;
