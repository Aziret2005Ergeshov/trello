import React from 'react';
import MainPage from '../components/MainPage';
import LoginPage from '../components/LoginPage';
import { Route, Routes, Navigate } from 'react-router-dom';
import EmailPassword from '../components/EmailPassword';

const AppRoutes = () => {
    return (
        <>


            <Routes>

                

                <Route path='/' element={<Navigate to={'/mainpage'} />} />

                <Route path='/mainpage' element={<MainPage />} />

                <Route path='/login' element={<LoginPage to={'/email'} />} />

                <Route path='/title' element={<EmailPassword to={'email'} /> }/>
                
            </Routes>
        </>
    );
};

export default AppRoutes;