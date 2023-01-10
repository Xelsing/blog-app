import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom';
import { publicRoutes, privateRoutes } from '../router/routes';

/* const AppRouter = () => {
    return (
        <Routes>
            <Route path="/posts/" element={<Posts />} />
            <Route path="/posts/:id" element={<PostIdPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/404" element={<ErrorPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<Navigate to="/404" replace />} />
        </Routes>
    )
} */


const AppRouter = () => {
    const isAuth = false;

    return (
        isAuth
            ?
            <Routes>
                {privateRoutes.map((route, index) =>
                    <Route
                        key={index}
                        path={route.path}
                        element={route.element}
                    />
                )}
                <Route path="*" element={<Navigate to="/posts" replace />} />
            </Routes>
            :
            <Routes>
                {publicRoutes.map((route, index) =>
                    <Route
                        key={index}
                        path={route.path}
                        element={route.element}
                    />
                )}
                <Route path="/*" element={<Navigate to="/login" replace />} />
            </Routes>
    )
}
export default AppRouter
