import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Beranda from './pages/Beranda';
import Pelanggan from './pages/Pelanggan';
import Kendaraan from './pages/Kendaraan';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Beranda />} />
                <Route path="/pelanggan" element={<Pelanggan />} />
                <Route path="/kendaraan" element={<Kendaraan />} />
            </Routes>
        </Router>
    );
}

export default App;
