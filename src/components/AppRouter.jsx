import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom';
import About from '../pages/About';
import Posts from '../pages/Posts';
import ErrorPage from '../pages/404';
import PostIdPage from '../pages/PostIdPage';

const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Posts />} />
            <Route path="/posts/:id" element={<PostIdPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/404" element={<ErrorPage />} />
            <Route
                path="*"
                element={<Navigate to="/404" replace />}
            />
        </Routes>
    )
}

export default AppRouter
