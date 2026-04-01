import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import VistiqLanding from "./components/VistiqLanding";
import "./styles/vistiq.css";
import "./styles/app.css";

function App() {
  return (
    <Router>
      <Routes>
        {/* Root route */}
        <Route path="/" element={<VistiqLanding />} />

        {/* Optional: explicit landing route */}
        <Route path="/landing" element={<VistiqLanding />} />

        {/* Catch-all (prevents 404 on unknown routes) */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;