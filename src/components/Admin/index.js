import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Add from './Data/Add';
import Manager from './Data/Manager';

function Admin() {
    return (
        <Routes>
            <Route path="add" element={<Add/>} />
            <Route path="manager" element={<Manager/>} />
        </Routes>
    );
}

export default Admin;