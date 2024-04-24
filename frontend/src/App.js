import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Movies from './components/Movie';

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/movies" element={<Movies />} />
                    <Route path="*" element={<h1>404 Not Found</h1>} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
