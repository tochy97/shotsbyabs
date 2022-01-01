import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Register from './Register/Register';

function Admin() {
    return (
        <Routes>
            <Route path="register" element={<Register/>} />
        </Routes>
    );
}

export default Admin;