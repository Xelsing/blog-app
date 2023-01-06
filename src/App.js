import React from 'react';
import './styles/App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import About from './pages/About';
import Posts from './pages/Posts';
import ErrorPage from './pages/404';
import Navbar from './components/UI/Navbar/Navbar';

function App() {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<Posts />} />
                <Route path="/about" element={<About />} />
                <Route path="/404" element={<ErrorPage />} />
                <Route
                    path="*"
                    element={<Navigate to="/404" replace />}
                />
            </Routes>
        </>
    )
}

export default App;