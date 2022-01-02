import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AddLog from './Data/Log/AddLog';
import ManageLog from './Data/Log/ManageLog';
import AddPack from './Data/Pack/AddPack';
import ManagePack from './Data/Pack/ManagePack';
import AddPost from './Data/Post/AddPost';
import ManagePost from './Data/Post/ManagePost';

function Admin() {
    return (
        <Routes>
            <Route path="addpost" element={<AddPost/>} />
            <Route path="managepost" element={<ManagePost/>} />
            <Route path="addlog" element={<AddLog/>} />
            <Route path="managelog" element={<ManageLog/>} />
            <Route path="addPack" element={<AddPack/>} />
            <Route path="managePack" element={<ManagePack/>} />
        </Routes>
    );
}

export default Admin;