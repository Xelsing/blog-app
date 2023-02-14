import ErrorPage from "../pages/404";
import About from "../pages/About";
import Login from "../pages/Login";
import Posts from "../pages/Posts";
import PostIdPage from "../pages/PostIdPage";


export const privateRoutes = [
    { path: '/blog-app/about', element: <About /> },
    { path: '/blog-app/posts/', element: <Posts /> },
    { path: '/blog-app/posts/:id', element: <PostIdPage /> },
    { path: '/blog-app/404', element: <ErrorPage /> },
]

export const publicRoutes = [
    { path: '/blog-app/login', element: <Login /> },
]
