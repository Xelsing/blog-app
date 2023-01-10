import React, { useContext } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom';
import { publicRoutes, privateRoutes } from '../router/routes';
import { AuthContext } from '../context';
import Loader from './UI/Loader/Loader';

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
    const {isAuth, isLoading} = useContext(AuthContext);

    console.log(isAuth);

    if(isLoading) {
        return <Loader/>
    }

    return (
        isAuth
            ?
            <Routes>
                {privateRoutes.map(route =>
                    <Route
                        key={route.path}
                        path={route.path}
                        element={route.element}
                    />
                )}
                <Route path="*" element={<Navigate to="/posts" replace />} />
            </Routes>
            :
            <Routes>
                {publicRoutes.map(route =>
                    <Route
                        key={route.path}
                        path={route.path}
                        element={route.element}
                    />
                )}
                <Route path="/*" element={<Navigate to="/login" replace />} />
            </Routes>
    )
}
export default AppRouter
