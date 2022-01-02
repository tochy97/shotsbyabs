import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Gallery from './Gallery/Gallery';

function Dashboard() {
    return (
        <Routes>
            <Route path="" element={<Gallery/>} />
        </Routes>
    );
}

export default Dashboard;