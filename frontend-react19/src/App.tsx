import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Beranda from "./pages/Beranda";

function App() {
  return (
    <HelmetProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Beranda />} />
          <Route path="/users" element={<div>Users</div>} />
          <Route path="/vehicles" element={<div>Vehicles</div>} />
        </Routes>
      </Router>
    </HelmetProvider>
  );
}

export default App;
