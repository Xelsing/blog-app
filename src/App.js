import React, { useEffect, useState } from 'react';
import './styles/App.css';
import Navbar from './components/UI/Navbar/Navbar';
import AppRouter from './components/AppRouter';
import { AuthContext } from './context';

function App() {

/*     let names: Array<String> = ['Govno', 'Jopa', 'Mocha', 'Huy'] */

    const [isAuth, setIsAuth] = useState(false);

    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        if (localStorage.getItem('auth')) {
            setIsAuth(true);
        }
        setLoading(false);
    }, [])

    return (
        <>
            <AuthContext.Provider value={{
                isAuth,
                setIsAuth,
                isLoading
            }}>
                <Navbar />
                <AppRouter />
            </AuthContext.Provider>
        </>
    )
}

export default App;