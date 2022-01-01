import { Card } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
import Admin from "./Auth";
import Dashboard from "./Dashboard"
import NavComp from "./NavComp/NavComp"

function App() {
  return (
    <>
    <NavComp/>
    <Routes>
      <Route path="admin/*" element={<Admin/>} />
      <Route path="/*" element={<Dashboard/>} />
    </Routes>
    </>
  );
}

export default App;
