import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Beranda from './pages/Beranda';
import Pelanggan from './pages/Pelanggan';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Beranda />} />
                <Route path="/users" element={<Pelanggan />} />
                <Route path="/vehicles" element={<div>Vehicles</div>} />
            </Routes>
        </Router>
    );
}

export default App;
