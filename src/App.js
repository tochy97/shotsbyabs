import React from 'react';
import { Container } from 'react-bootstrap';
import { Routes, Route } from "react-router-dom";
import Admin from "./Auth";
import Dashboard from "./Dashboard"
import NavComp from "./NavComp/NavComp"
import SidePanel from "./SidePanel/SidePanel"

function App() {
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
