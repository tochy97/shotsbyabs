import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Container } from 'react-bootstrap';
import { Routes, Route } from "react-router-dom";
import Admin from "./Admin";
import Dashboard from "./Dashboard"
import NavComp from "./NavComp/NavComp"
import SidePanel from "./SidePanel/SidePanel"
import { setUser } from './redux/actionCreators/authActionCreators';
import { auth } from './config/firebase';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged(user=>{
        if(!user){
            return;
        }
        const data = {
            id:user._delegate.uid,
        }
        dispatch(setUser(data));
    })
  }, [dispatch]);
  return (
    <Container style={{display:"inline"}}>
      <NavComp/>
      <SidePanel/>
      <Routes>
        <Route path="admin/*" element={<Admin/>} />
        <Route path="/*" element={<Dashboard/>} />
      </Routes>
    </Container>
  );
}

export default App;
