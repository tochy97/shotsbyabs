import { Card } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
import Admin from "./Auth";
import Dashboard from "./Dashboard"

function App() {
  return (
    <Routes>
      <Route path="admin/*" element={<Admin/>} />
      <Route path="/*" element={<Dashboard/>} />
    </Routes>
  );
}

export default App;
