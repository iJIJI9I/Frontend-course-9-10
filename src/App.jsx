import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { BookingProvider } from './context/BookingContext';
import Home from './pages/Home';
import Booking from './pages/Booking';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <BookingProvider>
      <BrowserRouter>
        <nav className="navbar">UZ Booking</nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/booking/:trainId" element={<Booking />} />
        </Routes>
        <ToastContainer position="bottom-right" />
      </BrowserRouter>
    </BookingProvider>
  );
}
export default App;