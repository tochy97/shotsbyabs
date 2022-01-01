import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './Login/Login';
import Register from './Register/Register';

function Admin() {
    return (
        <Routes>
            <Route path="login" element={<Login/>} />
            <Route path="register" element={<Register/>} />
        </Routes>
    );
}

export default Admin;