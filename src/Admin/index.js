import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AddLog from './Log/AddLog';
import ManageLog from './Log/ManageLog';
import AddPost from './Post/AddPost';
import ManagePost from './Post/ManagePost';

function Admin() {
    return (
        <Routes>
            <Route path="addpost" element={<AddPost/>} />
            <Route path="managepost" element={<ManagePost/>} />
            <Route path="addlog" element={<AddLog/>} />
            <Route path="managelog" element={<ManageLog/>} />
        </Routes>
    );
}

export default Admin;