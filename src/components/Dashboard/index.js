import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Contact from './Contact/Contact';
import Gallery from './Gallery/Gallery';

function Dashboard() {
    return (
        <Routes>
            <Route exact path="/*" element={<Gallery/>} />
            <Route exact path="/aboutme" element={<Contact/>} />
        </Routes>
    );
}

export default Dashboard;