<<<<<<< HEAD
import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom'
import Homepage from 'scenes/homepage';
import Loginpage from 'scenes/loginpage';
import Profilepage from 'scenes/profilepage';
import { useMemo } from 'react';
import { useSelector } from "react-redux";
import { CssBaseline,ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { themeSettings } from './theme';
import Logout from 'components/Logout';



function App() {
    const mode=useSelector(state=>state.mode)
    const theme=useMemo(()=>createTheme(themeSettings(mode)),[mode])
    const isLoggedIn=Boolean(useSelector(state=>state.token));
    return (
        <div className="app">
            <BrowserRouter>
                <ThemeProvider theme={theme}>
                    <CssBaseline/>
                    <Routes>
                        <Route path='/login?' element={!isLoggedIn ? <Loginpage/> : <Navigate to='/home' />} />
                        <Route path='/home' element={isLoggedIn ? <Homepage/> : <Navigate to='/' />} />
                        <Route path='/profile/:userId' element={isLoggedIn?<Profilepage/>:<Navigate to='/'/>}/>
                        <Route path='/register' element={<Loginpage pgtype={2} />} />
                        <Route path='/logout' element={<Logout/>} />
                        <Route exact path='*' element={<Navigate to='/'/>} replace />
                    </Routes>
                </ThemeProvider>
            </BrowserRouter>
        </div>
    );
}

=======
import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom'
import Homepage from 'scenes/homepage';
import Loginpage from 'scenes/loginpage';
import Profilepage from 'scenes/profilepage';
import { useMemo } from 'react';
import { useSelector } from "react-redux";
import { CssBaseline,ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { themeSettings } from './theme';



function App() {
    const mode=useSelector(state=>state.mode)
    const theme=useMemo(()=>createTheme(themeSettings(mode)),[mode])
    const isLoggedIn=Boolean(useSelector(state=>state.token));
    return (
        <div className="app">
            <BrowserRouter>
                <ThemeProvider theme={theme}>
                    <CssBaseline/>
                    <Routes>
                        <Route path='/' element={!isLoggedIn ? <Loginpage/> : <Navigate to='/home' />} />
                        <Route path='/home' element={isLoggedIn ? <Homepage/> : <Navigate to='/' />} />
                        <Route path='/profile/:userId' element={isLoggedIn?<Profilepage/>:<Navigate to='/'/>}/>
                    </Routes>
                </ThemeProvider>
            </BrowserRouter>
        </div>
    );
}

>>>>>>> be4ece29ea09a84ee7ab4d0ef89ac3a3922309b8
export default App;