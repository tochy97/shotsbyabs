import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AddLog from './Data/Log/AddLog';
import AddPack from './Data/Pack/AddPack';
import AddPost from './Data/Post/AddPost';
import Manager from './Data/Manager';

function Admin() {
    return (
        <Routes>
            <Route path="addpost" element={<AddPost/>} />
            <Route path="addpack" element={<AddPack/>} />
            <Route path="addlog" element={<AddLog/>} />
            <Route path="manager" element={<Manager/>} />
        </Routes>
    );
}

export default Admin;