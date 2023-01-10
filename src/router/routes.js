import ErrorPage from "../pages/404";
import About from "../pages/About";
import Login from "../pages/Login";
import Posts from "../pages/Posts";
import PostIdPage from "../pages/PostIdPage";


export const privateRoutes = [
    { path: '/about', element: <About /> },
    { path: '/posts/', element: <Posts /> },
    { path: '/posts/:id', element: <PostIdPage /> },
    { path: '/404', element: <ErrorPage /> },
]

export const publicRoutes = [
    { path: '/login', element: <Login /> },
]
